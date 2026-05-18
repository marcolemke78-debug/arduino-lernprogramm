const Renderer = {

  /**
   * Sidebar mit Lektionsliste aufbauen.
   * Jede Lektion bekommt ein <li> mit data-lesson-id und einer
   * CSS-Klasse je nach Fortschrittsstatus.
   */
  renderSidebar(lessons) {
    // Alle Modul-Listen finden und leeren
    const modules = new Set(lessons.map(l => l.module));
    modules.forEach(mod => {
      const list = document.getElementById('lesson-list-' + mod);
      if (list) list.innerHTML = '';
    });

    lessons.forEach(lesson => {
      const li = document.createElement('li');
      li.dataset.lessonId = lesson.id;

      // Status aus dem Progress-Modul abfragen
      const status = Progress.getStatus(lesson.id);

      // CSS-Klasse je nach Status setzen
      if (status === 'completed') {
        li.classList.add('completed');
        li.textContent = `✓ ${lesson.title}`;
      } else if (status === 'in_progress') {
        li.classList.add('in-progress');
        li.textContent = lesson.title;
      } else {
        li.classList.add('not-started');
        li.textContent = lesson.title;
      }

      // In die richtige Liste einfuegen (nach Modul-Name)
      const list = document.getElementById('lesson-list-' + lesson.module);
      if (list) list.appendChild(li);
    });
  },

  /**
   * Fortschrittsbalken + Label aktualisieren.
   * Zeigt den Gesamtfortschritt ueber alle Lektionen (dynamisch aus LESSONS).
   */
  renderProgressBar() {
    const total = Progress.getTotalLessons();
    const percent = Progress.getCompletionPercent(1, total);
    const bar = document.getElementById('progress-bar');
    bar.style.width = percent + '%';

    // Label mit absoluter Anzahl aktualisieren.
    // Iteriert ueber LESSONS (nicht 1..total), damit auch
    // nicht-zusammenhaengende IDs (z.B. 30) korrekt mitgezaehlt werden.
    const label = document.getElementById('progress-label');
    if (label) {
      const data = Progress.load();
      let completed = 0;
      LESSONS.forEach(l => {
        if (data.lessons[l.id] && data.lessons[l.id].status === 'completed') {
          completed++;
        }
      });
      label.textContent = percent + ' % – ' + completed + ' von ' + total + ' Lektionen abgeschlossen';
    }
  },

  /**
   * Lektionsinhalt im #lesson-container rendern.
   * Sucht die Lektionsdaten in LessonsC1/C2 und baut das
   * 3-Phasen-Layout (Erklaerung, Beispiel, Uebung) auf.
   */
  renderLesson(id) {
    const container = document.getElementById('lesson-container');

    // Lektionsdaten aus den Content-Arrays suchen
    const lessonData = LESSONS_GRUNDLAGEN.find(l => l.id === id)
      || LESSONS_DIGITAL.find(l => l.id === id)
      || LESSONS_ANALOG.find(l => l.id === id)
      || LESSONS_PROJEKT.find(l => l.id === id);

    // Titel aus der LESSONS-Liste (hat immer einen Eintrag)
    const lessonMeta = LESSONS.find(l => l.id === id);
    const title = lessonMeta ? lessonMeta.title : 'Unbekannte Lektion';

    // Wenn keine Lektionsdaten vorhanden: Platzhalter anzeigen
    if (!lessonData) {
      container.innerHTML = `<h1>Lektion ${id}: ${title}</h1>
        <p>Inhalt wird noch erstellt...</p>`;
      return;
    }

    // --- DOM aufbauen ---

    // Titel — angezeigte Nummer ist Array-Position in LESSONS, nicht id.
    // So bleibt die Numerierung konsistent, auch wenn neue Lektionen
    // eingeschoben werden (Curriculum 2.0).
    const position = LESSONS.findIndex(l => l.id === id) + 1;
    container.innerHTML = `<h1>Lektion ${position}: ${lessonData.title}</h1>`;

    // Phase-Tabs
    const tabsDiv = document.createElement('div');
    tabsDiv.className = 'phase-tabs';

    const phases = [
      { key: 'explanation', label: 'Erklärung' },
      { key: 'example', label: 'Beispiel' },
      { key: 'exercises', label: 'Übung' }
    ];

    // Tab 4 (Praxis) nur wenn die Lektion einen Praxisteil hat
    if (lessonData.praxis) {
      phases.push({ key: 'praxis', label: 'Praxis' });
      // Tab 5 (Lösung) nur für Lehrer:innen sichtbar (?teacher=1)
      if (Renderer.isTeacherMode() && lessonData.praxis.loesung) {
        phases.push({ key: 'loesung', label: 'Lösung' });
      }
    }

    phases.forEach((phase, i) => {
      const btn = document.createElement('button');
      btn.className = 'phase-tab' + (i === 0 ? ' active' : '');
      btn.dataset.phase = phase.key;
      btn.textContent = phase.label;
      tabsDiv.appendChild(btn);
    });

    container.appendChild(tabsDiv);

    // Phase: Erklaerung
    const explanationSection = document.createElement('section');
    explanationSection.className = 'phase explanation active';
    explanationSection.id = 'phase-explanation';
    explanationSection.innerHTML = lessonData.explanation.html;
    // Visuals in der Erklaerungsphase rendern
    if (lessonData.explanation.visuals) {
      Renderer.renderVisuals(lessonData.explanation.visuals, explanationSection);
    }
    container.appendChild(explanationSection);

    // Phase: Beispiel
    const exampleSection = document.createElement('section');
    exampleSection.className = 'phase example';
    exampleSection.id = 'phase-example';

    if (lessonData.example) {
      const h2 = document.createElement('h2');
      h2.textContent = lessonData.example.title;
      exampleSection.appendChild(h2);

      lessonData.example.steps.forEach((step, i) => {
        const details = document.createElement('details');
        details.className = 'example-step';
        // Nur den ersten Schritt offen anzeigen
        if (i === 0) details.open = true;

        const summary = document.createElement('summary');
        summary.textContent = `Schritt ${i + 1}: ${step.label}`;
        details.appendChild(summary);

        const content = document.createElement('div');
        content.className = 'step-content';
        content.innerHTML = step.html;
        details.appendChild(content);

        exampleSection.appendChild(details);
      });

      // Visuals in der Beispielphase rendern
      if (lessonData.example.visuals) {
        Renderer.renderVisuals(lessonData.example.visuals, exampleSection);
      }
    }

    container.appendChild(exampleSection);

    // Phase: Uebungen
    const exercisesSection = document.createElement('section');
    exercisesSection.className = 'phase exercises';
    exercisesSection.id = 'phase-exercises';
    container.appendChild(exercisesSection);

    // Uebungen rendern, falls vorhanden
    if (lessonData.exercises && lessonData.exercises.length > 0) {
      const totalExercises = lessonData.exercises.length;
      let completedCount = 0;

      lessonData.exercises.forEach((exercise, index) => {
        // Übungs-Header "Übung X von Y" vor jeder Aufgabe
        const exerciseHeader = document.createElement('div');
        exerciseHeader.className = 'exercise-header';
        exerciseHeader.textContent = 'Übung ' + (index + 1) + ' von ' + totalExercises;
        exercisesSection.appendChild(exerciseHeader);

        Exercises.render(exercise, exercisesSection, () => {
          completedCount++;
          // Header als abgeschlossen markieren (visuelle Rueckmeldung)
          exerciseHeader.classList.add('completed');
          // Wenn alle Uebungen bestanden: Lektion als abgeschlossen markieren
          if (completedCount === totalExercises) {
            Progress.setStatus(id, 'completed');
            Renderer.renderSidebar(LESSONS);
            Renderer.renderProgressBar();
          }
        });
      });
    }

    // Phase: Praxis (Tab 4) - nur wenn vorhanden
    if (lessonData.praxis) {
      const praxisSection = document.createElement('section');
      praxisSection.className = 'phase praxis';
      praxisSection.id = 'phase-praxis';
      Renderer.renderPraxis(lessonData.praxis, praxisSection);
      container.appendChild(praxisSection);

      // Phase: Lösung (Tab 5) - nur im Teacher-Mode
      if (Renderer.isTeacherMode() && lessonData.praxis.loesung) {
        const loesungSection = document.createElement('section');
        loesungSection.className = 'phase loesung';
        loesungSection.id = 'phase-loesung';
        Renderer.renderLoesung(lessonData.praxis.loesung, loesungSection);
        container.appendChild(loesungSection);
      }
    }

    // Tab-Klick-Logik: Phase wechseln
    tabsDiv.addEventListener('click', (e) => {
      const clickedTab = e.target.closest('.phase-tab');
      if (!clickedTab) return;

      const targetPhase = clickedTab.dataset.phase;

      // Alle Tabs und Sections deaktivieren
      tabsDiv.querySelectorAll('.phase-tab').forEach(t => t.classList.remove('active'));
      container.querySelectorAll('.phase').forEach(s => s.classList.remove('active'));

      // Geklickten Tab und zugehoerige Section aktivieren
      clickedTab.classList.add('active');
      document.getElementById('phase-' + targetPhase).classList.add('active');
    });
  }
};

/**
 * SVG-Strings fuer alle 7 Logikgatter nach IEC 60617-12 (Rechteckform).
 * Als JS-Strings gespeichert, damit sie auch bei file:// funktionieren
 * (externe SVG-Referenzen via <use href> gehen dort nicht).
 */
Renderer.GATE_SVGS = {
  'and': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
    + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">&amp;</text>'
    + '<line x1="55" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>',

  'or': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
    + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">\u22651</text>'
    + '<line x1="55" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>',

  'not': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="30" x2="15" y2="30" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">1</text>'
    + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
    + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>',

  'xor': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
    + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">=1</text>'
    + '<line x1="55" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>',

  'nand': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
    + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">&amp;</text>'
    + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
    + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>',

  'nor': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
    + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">\u22651</text>'
    + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
    + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>',

  'xnor': '<svg viewBox="0 0 80 60" class="gate-symbol">'
    + '<line x1="0" y1="18" x2="15" y2="18" stroke="black" stroke-width="2"/>'
    + '<line x1="0" y1="42" x2="15" y2="42" stroke="black" stroke-width="2"/>'
    + '<rect x="15" y="5" width="40" height="50" fill="white" stroke="black" stroke-width="2"/>'
    + '<text x="35" y="35" text-anchor="middle" font-size="14" font-weight="bold">=1</text>'
    + '<circle cx="59" cy="30" r="4" fill="white" stroke="black" stroke-width="2"/>'
    + '<line x1="63" y1="30" x2="80" y2="30" stroke="black" stroke-width="2"/>'
    + '</svg>'
};

/**
 * Erzeugt ein SVG-DOM-Element fuer ein Logikgatter.
 * @param {string} type - Gattertyp: 'and', 'or', 'not', 'xor', 'nand', 'nor', 'xnor'
 * @param {number} [width] - Breite in px (default 80)
 * @param {number} [height] - Hoehe in px (default 60)
 * @returns {SVGElement} Das fertige SVG-Element
 */
Renderer.renderGate = function(type, width, height) {
  const svgString = Renderer.GATE_SVGS[type];
  if (!svgString) {
    console.warn('Unbekannter Gattertyp:', type);
    return document.createElement('span');
  }
  const container = document.createElement('div');
  container.innerHTML = svgString;
  const svg = container.firstElementChild;
  if (width) svg.setAttribute('width', width);
  if (height) svg.setAttribute('height', height);
  return svg;
};

/**
 * Rendert Visualisierungen in einen Container.
 * Liest das visuals-Array aus den Lektionsdaten und dispatcht an Visuals-Methoden.
 *
 * @param {Array} visuals - Array von Visual-Config-Objekten
 * @param {HTMLElement} container - Ziel-Container
 */
Renderer.renderVisuals = function(visuals, container) {
  if (!visuals || !Array.isArray(visuals) || visuals.length === 0) return;

  // Instances merken fuer Kopplung (z.B. CircuitView + TimingDiagram)
  let lastCircuitInstance = null;
  let lastTimingInstance = null;

  visuals.forEach(vis => {
    switch (vis.type) {
      case 'gate-sim':
        Visuals.renderGateSim(vis, container);
        break;
      case 'circuit':
        lastCircuitInstance = Visuals.renderCircuit(vis, container, {
          onUpdate: (outputs) => {
            // Automatische Kopplung mit Timing-Diagramm
            if (lastTimingInstance && lastCircuitInstance) {
              const vals = Object.assign({}, lastCircuitInstance.state.inputs, outputs);
              lastTimingInstance.addEvent(vals);
            }
          }
        });
        break;
      case 'truth-table-linked':
        Visuals.renderTruthTableLinked(vis, container);
        break;
      case 'binary-animation':
        Visuals.renderBinaryAnimation(vis, container);
        break;
      case 'expression-tree':
        Visuals.renderExpressionTree(vis, container);
        break;
      case 'dnf-highlighter':
        Visuals.renderDNFHighlighter(vis, container);
        break;
      case 'timing-diagram':
        lastTimingInstance = Visuals.renderTimingDiagram(vis, container);
        // Initiales Event vom gekoppelten Circuit
        if (lastCircuitInstance) {
          const outputs = lastCircuitInstance.getOutputs();
          lastTimingInstance.addEvent(Object.assign({}, lastCircuitInstance.state.inputs, outputs));
        }
        break;
      case 'adder-sim':
        Visuals.renderAdderSim(vis, container);
        break;
      case 'ip-converter':
        Visuals.renderIPConverter(vis, container);
        break;
      case 'subnet-calculator':
        Visuals.renderSubnetCalculator(vis, container);
        break;
      case 'subnetting-viz':
        Visuals.renderSubnettingViz(vis, container);
        break;
      case 'network-diagram':
        Visuals.renderNetworkDiagram(vis, container);
        break;
      default:
        console.warn('Unbekannter Visual-Typ:', vis.type);
    }
  });
};

/**
 * Prüft, ob die App im Lehrer-Modus läuft.
 * Aktivierung: URL-Parameter ?teacher=1 anhängen.
 */
Renderer.isTeacherMode = function() {
  const params = new URLSearchParams(window.location.search);
  return params.get('teacher') === '1';
};

/**
 * Rendert den Praxis-Tab (Tab 4): Aufgabe, Bauteile, Anschluss, Code-Gerüst.
 * @param {Object} praxis - praxis-Block aus den Lektionsdaten
 * @param {HTMLElement} section - Ziel-Section
 */
Renderer.renderPraxis = function(praxis, section) {
  // --- Aufgabe ---
  if (praxis.aufgabe) {
    const aufgabeBox = document.createElement('div');
    aufgabeBox.className = 'praxis-aufgabe';
    aufgabeBox.innerHTML = `
      <h2>🔧 Praxis: ${praxis.aufgabe.titel || 'Aufgabe'}</h2>
      <div class="praxis-auftrag">${praxis.aufgabe.auftrag || ''}</div>
      ${praxis.aufgabe.lernziel ? `<div class="praxis-lernziel"><strong>Dein Lernziel:</strong> ${praxis.aufgabe.lernziel}</div>` : ''}
    `;
    section.appendChild(aufgabeBox);
  }

  // --- Bauteile ---
  if (praxis.bauteile && praxis.bauteile.length > 0) {
    const bauteileBlock = document.createElement('div');
    bauteileBlock.className = 'praxis-block';
    bauteileBlock.innerHTML = '<h3>📦 Das brauchst du</h3>';

    const liste = document.createElement('ul');
    liste.className = 'bauteile-liste';
    praxis.bauteile.forEach(b => {
      const li = document.createElement('li');
      li.className = 'bauteil-card';
      li.innerHTML = `
        <span class="bauteil-anzahl">${b.anzahl}×</span>
        <span class="bauteil-name">${b.name}</span>
        ${b.hinweis ? `<span class="bauteil-hinweis">${b.hinweis}</span>` : ''}
      `;
      liste.appendChild(li);
    });
    bauteileBlock.appendChild(liste);
    section.appendChild(bauteileBlock);
  }

  // --- Anschluss (SVG + Schritte) ---
  if (praxis.anschluss) {
    const anschlussBlock = document.createElement('div');
    anschlussBlock.className = 'praxis-block';
    anschlussBlock.innerHTML = '<h3>🔌 Anschluss-Schaltplan</h3>';

    if (praxis.anschluss.svg) {
      const svgContainer = document.createElement('div');
      svgContainer.className = 'anschluss-svg';
      svgContainer.innerHTML = praxis.anschluss.svg;
      anschlussBlock.appendChild(svgContainer);
    }

    if (praxis.anschluss.schritte && praxis.anschluss.schritte.length > 0) {
      const ol = document.createElement('ol');
      ol.className = 'anschluss-schritte';
      praxis.anschluss.schritte.forEach(s => {
        const li = document.createElement('li');
        li.innerHTML = s;
        ol.appendChild(li);
      });
      anschlussBlock.appendChild(ol);
    }
    section.appendChild(anschlussBlock);
  }

  // --- Code-Gerüst ---
  if (praxis.code_hinweise) {
    const codeBlock = document.createElement('div');
    codeBlock.className = 'praxis-block';
    codeBlock.innerHTML = '<h3>💻 Dein Code-Gerüst</h3><p>Vervollständige die Stellen mit <code>// TODO</code>.</p>';

    if (praxis.code_hinweise.geruest) {
      const pre = document.createElement('pre');
      pre.className = 'code-geruest';
      const code = document.createElement('code');
      code.textContent = praxis.code_hinweise.geruest;
      pre.appendChild(code);
      codeBlock.appendChild(pre);
    }

    if (praxis.code_hinweise.tipps && praxis.code_hinweise.tipps.length > 0) {
      const tippBox = document.createElement('div');
      tippBox.className = 'tip-box';
      tippBox.innerHTML = '<strong>Tipps:</strong><ul>'
        + praxis.code_hinweise.tipps.map(t => `<li>${t}</li>`).join('')
        + '</ul>';
      codeBlock.appendChild(tippBox);
    }
    section.appendChild(codeBlock);
  }
};

/**
 * Rendert den Lösungs-Tab (Tab 5): nur im Teacher-Mode sichtbar.
 * @param {Object} loesung - loesung-Block aus praxis
 * @param {HTMLElement} section - Ziel-Section
 */
Renderer.renderLoesung = function(loesung, section) {
  const badge = document.createElement('div');
  badge.className = 'teacher-badge';
  badge.innerHTML = '👩‍🏫 <strong>Lehrer:innen-Ansicht</strong> – nur über <code>?teacher=1</code> sichtbar';
  section.appendChild(badge);

  if (loesung.code) {
    const codeBlock = document.createElement('div');
    codeBlock.className = 'praxis-block';
    codeBlock.innerHTML = '<h3>✅ Vollständiger Lösungscode</h3>';
    const pre = document.createElement('pre');
    pre.className = 'code-loesung';
    const code = document.createElement('code');
    code.textContent = loesung.code;
    pre.appendChild(code);
    codeBlock.appendChild(pre);
    section.appendChild(codeBlock);
  }

  if (loesung.erklaerung) {
    const erklBlock = document.createElement('div');
    erklBlock.className = 'praxis-block';
    erklBlock.innerHTML = `<h3>💡 Erklärung der Lösung</h3><div>${loesung.erklaerung}</div>`;
    section.appendChild(erklBlock);
  }

  if (loesung.haeufige_fehler && loesung.haeufige_fehler.length > 0) {
    const fehlerBlock = document.createElement('div');
    fehlerBlock.className = 'praxis-block';
    fehlerBlock.innerHTML = '<h3>⚠️ Häufige Fehler in der Klasse</h3>';
    const ul = document.createElement('ul');
    ul.className = 'fehler-liste';
    loesung.haeufige_fehler.forEach(f => {
      const li = document.createElement('li');
      li.innerHTML = f;
      ul.appendChild(li);
    });
    fehlerBlock.appendChild(ul);
    section.appendChild(fehlerBlock);
  }
};

// Event-Delegation: Klicks auf Sidebar-<li>-Elemente abfangen
// Wird einmal registriert und bleibt auch nach Sidebar-Neurendern aktiv
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sidebar').addEventListener('click', (e) => {
    // Naechstes <li> im DOM-Baum finden (falls auf ein Kind-Element geklickt wurde)
    const li = e.target.closest('li[data-lesson-id]');
    if (li) {
      const lessonId = parseInt(li.dataset.lessonId, 10);
      navigateToLesson(lessonId);
    }
  });
});
