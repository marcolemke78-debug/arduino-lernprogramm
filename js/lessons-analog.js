const LESSONS_ANALOG = [
  // ===================== LEKTION 11 (Spannungsteiler, id 30) =====================
  // Pflicht-Bruecke zum analogen Teil: alle Sensorschaltungen (NTC, LDR,
  // Taster-Pulldown) und das Potentiometer beruhen auf dem Spannungsteiler.
  // Diese Lektion erklaert das Prinzip rein als Hardware-Konzept,
  // ohne Code — mit Multimeter-Messung im Praxis-Tab.
  {
    id: 30,
    title: 'Spannungsteiler verstehen',
    explanation: {
      html: `
        <h2>Spannungsteiler &ndash; Spannung teilen wie ein Stueck Kuchen</h2>
        <p>Bis jetzt hattest du am Arduino immer <strong>5&nbsp;Volt</strong> oder <strong>0&nbsp;Volt</strong> &ndash; entweder voll an oder voll aus. Aber viele Sensoren liefern Werte <em>dazwischen</em>: ein Temperatursensor zeigt z.B. <strong>2,3&nbsp;V</strong> an, wenn es warm wird, und <strong>1,7&nbsp;V</strong>, wenn es kalt ist. Wie geht das &ndash; mit nur einer 5-V-Versorgung?</p>
        <p>Die Antwort heisst <strong>Spannungsteiler</strong>. Das ist die wichtigste analoge Schaltung ueberhaupt &ndash; und sie steckt in <em>jedem</em> Sensor, den du in den kommenden Lektionen verwendest.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Stell dir einen Kuchen vor, der zwischen zwei Personen geteilt wird. Wer den groesseren Hunger (= groesseren Widerstand) hat, bekommt das groessere Stueck. Genauso ist es beim Spannungsteiler: Die Spannung wird zwischen zwei Widerstaenden aufgeteilt &ndash; der groessere Widerstand bekommt das groessere Stueck.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die Schaltung in einem Bild</h3>
          <p>Zwei Widerstaende werden <strong>hintereinander</strong> (in Reihe) zwischen <code>+5V</code> und <code>GND</code> geschaltet. Genau in der Mitte greifen wir eine Spannung ab &ndash; das ist <strong>U<sub>2</sub></strong>:</p>

          <svg viewBox="0 0 420 260" style="width:100%;max-width:380px;margin:1em auto;display:block;font-family:system-ui;">
            <!-- Hintergrund -->
            <rect x="0" y="0" width="420" height="260" rx="8" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>

            <!-- +5V oben -->
            <line x1="210" y1="20" x2="210" y2="50" stroke="#333" stroke-width="2"/>
            <text x="225" y="28" font-size="12" fill="#C0392B" font-weight="bold">+5 V</text>

            <!-- R1 Rechteck -->
            <rect x="190" y="50" width="40" height="55" fill="white" stroke="#333" stroke-width="2"/>
            <text x="248" y="82" font-size="13" font-weight="bold" fill="#333">R<tspan font-size="10" baseline-shift="sub">1</tspan></text>

            <!-- Mitte -->
            <line x1="210" y1="105" x2="210" y2="135" stroke="#333" stroke-width="2"/>
            <line x1="210" y1="120" x2="310" y2="120" stroke="#2980B9" stroke-width="2"/>
            <circle cx="210" cy="120" r="4" fill="#2980B9"/>
            <text x="320" y="124" font-size="13" font-weight="bold" fill="#2980B9">U<tspan font-size="10" baseline-shift="sub">2</tspan> (Abgriff)</text>

            <!-- R2 Rechteck -->
            <rect x="190" y="135" width="40" height="55" fill="white" stroke="#333" stroke-width="2"/>
            <text x="248" y="167" font-size="13" font-weight="bold" fill="#333">R<tspan font-size="10" baseline-shift="sub">2</tspan></text>

            <!-- GND unten -->
            <line x1="210" y1="190" x2="210" y2="220" stroke="#333" stroke-width="2"/>
            <line x1="195" y1="220" x2="225" y2="220" stroke="#333" stroke-width="2.5"/>
            <line x1="200" y1="226" x2="220" y2="226" stroke="#333" stroke-width="2"/>
            <line x1="205" y1="232" x2="215" y2="232" stroke="#333" stroke-width="2"/>
            <text x="235" y="225" font-size="12" fill="#333">GND</text>

            <!-- U gesamt (links) -->
            <line x1="120" y1="50" x2="120" y2="190" stroke="#888" stroke-width="1"/>
            <line x1="115" y1="50" x2="125" y2="50" stroke="#888" stroke-width="1"/>
            <line x1="115" y1="190" x2="125" y2="190" stroke="#888" stroke-width="1"/>
            <text x="75" y="125" font-size="13" font-weight="bold" fill="#888">U<tspan font-size="10" baseline-shift="sub">ges</tspan></text>
          </svg>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die Formel: U<sub>2</sub> berechnen</h3>
          <p>Wie viel Spannung kommt am Abgriff an? Das haengt vom <strong>Verhaeltnis</strong> der beiden Widerstaende ab:</p>

          <div style="background:#FFF8E1;border:1.5px solid #FFB300;border-radius:6px;padding:1rem;text-align:center;margin:1em auto;max-width:380px;">
            <p style="margin:0;font-size:1.15em;">
              <strong>U<sub>2</sub> = U<sub>ges</sub> &middot; <span style="display:inline-block;text-align:center;vertical-align:middle;"><span style="border-bottom:2px solid #333;padding:0 0.4em;">R<sub>2</sub></span><br><span style="padding:0 0.4em;">R<sub>1</sub> + R<sub>2</sub></span></span></strong>
            </p>
          </div>

          <p>Klingt kompliziert, ist aber eigentlich nur <em>Bruchrechnen</em>:</p>
          <ul>
            <li>Im Zaehler: der <strong>untere</strong> Widerstand R<sub>2</sub> (der, an dem du U<sub>2</sub> abgreifst)</li>
            <li>Im Nenner: die <strong>Summe beider</strong> Widerstaende</li>
            <li>Mal die Gesamtspannung U<sub>ges</sub> (bei uns 5 V)</li>
          </ul>
        </div>

        <div class="tip-box">
          <strong>Eselsbruecke:</strong> &bdquo;Unten waechst, U<sub>2</sub> waechst." &mdash; je groesser R<sub>2</sub> (unten), desto groesser auch die abgegriffene Spannung U<sub>2</sub>. Andersrum: je groesser R<sub>1</sub> (oben), desto kleiner U<sub>2</sub>.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Drei Faelle zum Mitdenken</h3>
          <p>Bei 5 V Versorgungsspannung und verschiedenen Widerstaenden:</p>
          <table class="icon-table">
            <tr><th>R<sub>1</sub></th><th>R<sub>2</sub></th><th>U<sub>2</sub></th><th>Was passiert?</th></tr>
            <tr><td>10 k&Omega;</td><td>10 k&Omega;</td><td><strong>2,5 V</strong></td><td>Gleich gross &rarr; Spannung wird genau halbiert</td></tr>
            <tr><td>10 k&Omega;</td><td>20 k&Omega;</td><td><strong>3,33 V</strong></td><td>R<sub>2</sub> doppelt so gross &rarr; bekommt 2/3 der Spannung</td></tr>
            <tr><td>20 k&Omega;</td><td>10 k&Omega;</td><td><strong>1,67 V</strong></td><td>R<sub>1</sub> doppelt so gross &rarr; nur 1/3 bleibt fuer U<sub>2</sub></td></tr>
          </table>
        </div>

        <div class="info-card" style="border-left: 3px solid #27AE60;">
          <h3>Selber ausprobieren: Spannungsteiler</h3>
          <p>Oben sitzt ein fester Widerstand R<sub>1</sub> = 10&nbsp;k&Omega;, unten der verstellbare R<sub>2</sub>. Schieb den Regler und sieh zu, wie sich U<sub>2</sub> (und der analogRead-Wert) aendern &ndash; bei 5&nbsp;V Versorgung:</p>
          <div style="background:#f8f8f8;border:1px solid #ddd;border-radius:8px;padding:1rem;">
            <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">
              <label for="st-slider" style="font-weight:bold;">R<sub>2</sub>:</label>
              <input id="st-slider" type="range" min="1" max="100" step="1" value="10" style="flex:1;min-width:180px;height:28px;" oninput="var R2=+this.value;var U2=5*R2/(10+R2);var adc=Math.round(U2/5*1023);document.getElementById('st-r2').textContent=R2;document.getElementById('st-u2').textContent=U2.toFixed(2);document.getElementById('st-adc').textContent=adc;document.getElementById('st-bar').style.width=(U2/5*100).toFixed(0)+'%';">
              <strong><span id="st-r2">10</span>&nbsp;k&Omega;</strong>
            </div>
            <div style="margin-top:0.8rem;height:18px;background:#e0e0e0;border-radius:9px;overflow:hidden;">
              <div id="st-bar" style="width:50%;height:100%;background:#27AE60;"></div>
            </div>
            <p style="margin:0.6rem 0 0;">U<sub>2</sub> = <strong><span id="st-u2">2.50</span>&nbsp;V</strong> &rarr; analogRead-Wert &asymp; <strong><span id="st-adc">512</span></strong> (von 0&ndash;1023)</p>
          </div>
          <p style="margin-top:0.8rem;">Probier die Eselsbruecke aus: <strong>R<sub>2</sub> groesser &rarr; U<sub>2</sub> groesser</strong>. Genau so liefert spaeter ein LDR oder NTC unterschiedliche analogRead-Werte.</p>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Warum braucht man das &uuml;berhaupt?</h3>
          <p>Der eigentliche Trick: Wenn einer der beiden Widerstaende <strong>nicht fest</strong> ist, sondern sich aendert, dann aendert sich auch U<sub>2</sub>. Genau so funktionieren <strong>alle analogen Sensoren</strong>:</p>

          <table class="icon-table">
            <tr><th>Sensor</th><th>Was aendert sich?</th><th>Folge</th></tr>
            <tr><td><strong>NTC</strong> (Temperatursensor)</td><td>Widerstand sinkt bei Waerme</td><td>U<sub>2</sub> aendert sich mit Temperatur</td></tr>
            <tr><td><strong>LDR</strong> (Lichtsensor)</td><td>Widerstand sinkt bei Licht</td><td>U<sub>2</sub> aendert sich mit Helligkeit</td></tr>
            <tr><td><strong>Taster</strong> mit Pull-Down</td><td>Schaltet R<sub>2</sub> dazu/weg</td><td>U<sub>2</sub> springt zwischen 0 V und 5 V</td></tr>
            <tr><td><strong>Potentiometer</strong></td><td>Du drehst R<sub>1</sub>/R<sub>2</sub></td><td>U<sub>2</sub> waehlbar zwischen 0&hellip;5 V</td></tr>
          </table>

          <div class="analogy-box" style="margin-top:1rem;">
            <strong>Bild zum Festhalten:</strong> Ein fester Spannungsteiler ist wie ein <em>fest eingestellter Dimmer</em>. Ein Sensor-Spannungsteiler ist ein Dimmer, an dem die Umwelt selber dreht &ndash; an der NTC dreht die Temperatur, am LDR dreht die Helligkeit.
          </div>
        </div>

        <div class="warning-box">
          <strong>Wichtig fuer die Pruefung:</strong> Der Spannungsteiler taucht in der RSAP (Realschulabschlusspruefung) in vielen Aufgaben unter verschiedenen Namen auf &ndash; Temperaturanzeige, Daemmerungsschalter, Gewaechshaus-Belueftung. Wer das Prinzip verstanden hat, hat den halben Pflichtteil im Griff.
        </div>
      `
    },
    example: {
      title: 'Rechenbeispiele: U2 fuer drei Widerstands-Kombinationen',
      steps: [
        {
          label: 'Beide Widerstaende gleich gross',
          html: `
            <p>Du baust einen Spannungsteiler mit zwei <strong>gleich grossen</strong> Widerstaenden (z.&nbsp;B. beide 10&nbsp;k&Omega;) zwischen +5&nbsp;V und GND. Was misst dein Multimeter am Abgriff?</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
U<sub>2</sub> = U<sub>ges</sub> &middot; R<sub>2</sub> / (R<sub>1</sub> + R<sub>2</sub>)
U<sub>2</sub> = 5 V &middot; 10 k&Omega; / (10 k&Omega; + 10 k&Omega;)
U<sub>2</sub> = 5 V &middot; 10 / 20
U<sub>2</sub> = 5 V &middot; 0,5
U<sub>2</sub> = <strong>2,5 V</strong></pre>
            <p>Das ist der einfachste Fall: gleiche Widerstaende, halbe Spannung. <strong>Merke dir das &ndash; in der Pruefung kommt dieser Fall sehr oft als Schaetzfrage vor.</strong></p>
          `
        },
        {
          label: 'Oberer Widerstand ist doppelt so gross',
          html: `
            <p>Jetzt steckst du oben einen 20-k&Omega;-Widerstand ein, unten weiterhin 10&nbsp;k&Omega;:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
U<sub>2</sub> = 5 V &middot; 10 k&Omega; / (20 k&Omega; + 10 k&Omega;)
U<sub>2</sub> = 5 V &middot; 10 / 30
U<sub>2</sub> = 5 V &middot; 0,333&hellip;
U<sub>2</sub> &asymp; <strong>1,67 V</strong></pre>
            <p>Der grosse R<sub>1</sub> &bdquo;schluckt" 2/3 der Spannung &ndash; uebrig bleibt nur 1/3 fuer U<sub>2</sub>.</p>
          `
        },
        {
          label: 'Unterer Widerstand ist doppelt so gross',
          html: `
            <p>Du tauschst zurueck: R<sub>1</sub> = 10&nbsp;k&Omega;, R<sub>2</sub> = 20&nbsp;k&Omega;:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
U<sub>2</sub> = 5 V &middot; 20 k&Omega; / (10 k&Omega; + 20 k&Omega;)
U<sub>2</sub> = 5 V &middot; 20 / 30
U<sub>2</sub> = 5 V &middot; 0,666&hellip;
U<sub>2</sub> &asymp; <strong>3,33 V</strong></pre>
            <p>Jetzt bekommt R<sub>2</sub> 2/3 der Spannung. <strong>Merke:</strong> Je groesser der untere Widerstand (im Verhaeltnis), desto mehr Spannung bleibt fuer U<sub>2</sub> uebrig.</p>
          `
        },
        {
          label: 'Was passiert, wenn R2 ein Sensor ist?',
          html: `
            <p>Stell dir vor, R<sub>2</sub> ist <strong>kein fester Widerstand</strong>, sondern ein <strong>NTC</strong>. Bei Zimmertemperatur hat er z.&nbsp;B. 10&nbsp;k&Omega;, bei Hitze nur noch 4&nbsp;k&Omega;. R<sub>1</sub> bleibt fest bei 10&nbsp;k&Omega;.</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #E67E22;">
Zimmertemp.: U<sub>2</sub> = 5 V &middot; 10 / (10 + 10) = <strong>2,5 V</strong>
Hitze:       U<sub>2</sub> = 5 V &middot; 4  / (10 + 4)  &asymp; <strong>1,43 V</strong></pre>
            <p>Die <strong>aenderung der Spannung</strong> ist die Information, die der Arduino spaeter mit <code>analogRead()</code> einliest. So wird aus einer physikalischen Groesse (Temperatur, Licht) eine Zahl, die das Programm verarbeiten kann. &mdash; Das ist die Bruecke zur naechsten Lektion.</p>
          `
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Du baust einen Spannungsteiler aus zwei gleich grossen 10-kΩ-Widerstaenden zwischen +5 V und GND. Welche Spannung misst du am Abgriff U2?',
        options: ['0 V', '2,5 V', '5 V', '10 V'],
        correct: 1,
        explanation: 'Richtig! Bei gleichen Widerstaenden wird die Spannung halbiert: U2 = 5 V · 10/(10+10) = 2,5 V. Das ist der wichtigste Spezialfall.',
        wrongExplanations: {
          0: 'Nein, 0 V wuerde nur dann am Abgriff anliegen, wenn R2 = 0 (Kurzschluss nach GND).',
          2: 'Nein, 5 V wuerde nur anliegen, wenn R1 = 0 (also gar kein Widerstand oben). Dann waere die volle Versorgung am Abgriff.',
          3: 'Nein, die Ausgangsspannung kann nie hoeher sein als die Versorgungsspannung. 5 V rein, hoechstens 5 V raus.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Was passiert mit der Spannung U2 am Abgriff, wenn du den unteren Widerstand R2 vergroesserst (R1 bleibt gleich)?',
        options: [
          'U2 wird kleiner',
          'U2 wird groesser',
          'U2 bleibt gleich',
          'U2 wird negativ'
        ],
        correct: 1,
        explanation: 'Richtig! Eselsbruecke: "Unten waechst, U2 waechst." Je groesser R2, desto groesser das Stueck der Gesamtspannung, das ueber R2 abfaellt &ndash; und genau diese Spannung greifst du als U2 ab.',
        wrongExplanations: {
          0: 'Nein, das Gegenteil ist der Fall. Schau in die Formel: R2 steht im Zaehler &ndash; wird R2 groesser, wird der Bruch groesser, also auch U2.',
          2: 'Nein, U2 haengt direkt vom Verhaeltnis R2 zu (R1+R2) ab. Aenderst du R2, aendert sich auch dieses Verhaeltnis.',
          3: 'Negative Spannungen gibt es bei einem Spannungsteiler an 5 V/GND nicht. U2 liegt immer zwischen 0 V und 5 V.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Welche Formel beschreibt die Spannung U2 am Abgriff zwischen R1 (oben) und R2 (unten)?',
        options: [
          'U2 = Uges · R1 / (R1 + R2)',
          'U2 = Uges · R2 / (R1 + R2)',
          'U2 = Uges · (R1 + R2) / R2',
          'U2 = Uges · R1 · R2'
        ],
        correct: 1,
        explanation: 'Richtig! Im Zaehler steht immer der Widerstand, an dem du U2 abgreifst &ndash; das ist R2 (der untere). Im Nenner steht die Summe beider Widerstaende.',
        wrongExplanations: {
          0: 'Vorsicht: Da steht R1 im Zaehler. Diese Formel wuerde die Spannung ueber R1 berechnen (also den OBEREN Teil), nicht den Abgriff.',
          2: 'Diese Formel ist der Kehrwert &ndash; sie wuerde immer einen Wert groesser als 1 ergeben. Eine Spannung kann aber nicht groesser sein als die Versorgung.',
          3: 'Ein Produkt R1 · R2 ergibt keine Spannung &ndash; die Einheit waere kΩ² statt Volt. Das ist physikalisch unsinnig.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Ein NTC hat die Eigenschaft: heiss = niedriger Widerstand, kalt = hoher Widerstand. Du baust einen Spannungsteiler mit R1 = 10 kΩ (oben, fest) und NTC als R2 (unten). Was passiert mit U2, wenn der NTC erwaermt wird?',
        options: [
          'U2 steigt',
          'U2 sinkt',
          'U2 bleibt konstant',
          'U2 wird negativ'
        ],
        correct: 1,
        explanation: 'Richtig! NTC waermer &rarr; R2 sinkt. Kleineres R2 im Zaehler &rarr; kleineres U2. Genau dieses Verhalten nutzen wir spaeter, um Temperatur als Spannung zu messen.',
        wrongExplanations: {
          0: 'Nein, andersrum: Erwaermung senkt R2, also sinkt U2. Es ist genau das Gegenteil von dem, was man intuitiv vermuten koennte.',
          2: 'Nein, der Sensor aendert ja gerade seinen Widerstand &ndash; und damit aendert sich auch U2. Das ist der ganze Punkt!',
          3: 'U2 bleibt immer zwischen 0 V und der Versorgungsspannung. Negativ wird sie nie.'
        }
      },
      {
        type: 'matching',
        question: 'Ordne die Sensoren / Bauteile ihrem typischen Einsatz im Spannungsteiler zu.',
        pairs: [
          { left: 'NTC', right: 'Temperatur messen' },
          { left: 'LDR', right: 'Helligkeit messen' },
          { left: 'Taster mit Pull-Down-Widerstand', right: 'Sauberen LOW-Pegel an einem digitalen Eingang erzeugen' },
          { left: 'Potentiometer', right: 'Stufenlos einstellbare Spannung zwischen 0 V und 5 V' }
        ],
        explanation: 'Alle vier nutzen denselben Trick: Sie veraendern einen Widerstand im Spannungsteiler, und der Arduino misst die dadurch entstehende Spannung U2. Beim NTC haengt R von der Temperatur ab, beim LDR vom Licht, beim Potentiometer vom Drehwinkel &ndash; und der Taster mit Pull-Down-Widerstand sorgt fuer einen sauberen LOW-Pegel, solange er nicht gedrueckt ist.'
      }
    ],
    // === Praxis-Tab (Tab 4) ===
    // Hardware-Uebung: Spannungsteiler bauen + Spannung in der Mitte messen.
    // Kein Arduino-Code noetig &ndash; nur 5V/GND vom Arduino als Versorgung
    // und ein Multimeter zur Spannungsmessung. Bruecke zu Lektionen 12+
    // (analogRead).
    praxis: {
      aufgabe: {
        titel: 'Spannungsteiler bauen und U2 messen',
        auftrag: '<p>Baue einen festen Spannungsteiler auf dem Steckbrett aus <strong>zwei gleich grossen Widerstaenden (10&nbsp;k&Omega;)</strong>. Versorge ihn aus dem Arduino mit <code>+5V</code> und <code>GND</code>. Miss anschliessend mit dem Multimeter die Spannung U<sub>2</sub> am Abgriff zwischen den beiden Widerstaenden.</p><p><strong>Deine Aufgaben:</strong></p><ol><li><strong>Aufbau:</strong> Baue die Schaltung nach dem Schaltplan und dem Steckbrett-Bild unten auf.</li><li><strong>Messung:</strong> Stelle das Multimeter auf Gleichspannung (V&#8230;) ein und miss U<sub>2</sub>.</li><li><strong>Variante:</strong> Tausche R<sub>2</sub> gegen einen 20&nbsp;k&Omega;-Widerstand und miss erneut. Notiere beide Werte.</li></ol>',
        lernziel: 'Du kannst einen Spannungsteiler aus zwei Widerstaenden aufbauen, U<sub>2</sub> mit einem Multimeter messen und die gemessenen Werte mit der berechneten Formel vergleichen.'
      },
      bauteile: [
        { name: 'Arduino Uno (nur als 5V-Quelle)', anzahl: 1 },
        { name: 'Steckbrett (Breadboard)', anzahl: 1 },
        { name: 'Widerstand 10 kΩ', anzahl: 2, hinweis: 'Farbcode: braun-schwarz-orange' },
        { name: 'Widerstand 20 kΩ', anzahl: 1, hinweis: 'Fuer den Vergleichs-Versuch' },
        { name: 'Jumper-Kabel rot', anzahl: 1, hinweis: '5V &rarr; Breadboard' },
        { name: 'Jumper-Kabel schwarz', anzahl: 1, hinweis: 'GND &rarr; Breadboard' },
        { name: 'Multimeter mit Messleitungen', anzahl: 1, hinweis: 'Stellung: Gleichspannung (V= oder DCV)' }
      ],
      anschluss: {
        svg: `
          <figure class="schaltbild-figur">
            <figcaption><strong>1. Schaltplan</strong> &mdash; so funktioniert die Schaltung elektrisch:</figcaption>
            <img src="assets/lektion-30-spannungsteiler-schaltplan.svg?v=4" alt="Schaltplan Spannungsteiler: 5V - R1 - Abgriff U2 - R2 - GND, Multimeter zwischen Abgriff und GND" style="max-width: 100%; height: auto;" />
          </figure>
          <figure class="schaltbild-figur">
            <figcaption><strong>2. Aufbau am Steckbrett</strong> &mdash; so sieht der echte Aufbau aus:</figcaption>
            <img src="assets/lektion-30-spannungsteiler-aufbau.svg?v=7" alt="Steckbrett-Aufbau Spannungsteiler: zwei 10k-Widerstaende in Reihe zwischen 5V-Schiene und GND-Schiene, Multimeter misst in der Mitte" style="max-width: 100%; height: auto;" />
          </figure>`,
        schritte: [
          'Stecke das <strong>rote Jumper-Kabel</strong> in den <strong>5V-Pin</strong> des Arduino und das andere Ende in die <strong>+Schiene (rot)</strong> oben am Breadboard.',
          'Stecke das <strong>schwarze Jumper-Kabel</strong> in einen <strong>GND-Pin</strong> des Arduino und das andere Ende in die <strong>&minus;Schiene (blau)</strong> oben am Breadboard.',
          'Stecke den ersten <strong>10&nbsp;k&Omega;-Widerstand (R<sub>1</sub>)</strong> waagrecht ein: ein Bein in die <strong>+Schiene</strong> (oben), das andere Bein in Loch <code>c8</code>. <em>(Damit fliesst der Strom von +5V nach c8.)</em>',
          'Stecke den zweiten <strong>10&nbsp;k&Omega;-Widerstand (R<sub>2</sub>)</strong> waagrecht ein: ein Bein in Loch <code>c10</code>, das andere Bein in die <strong>&minus;Schiene</strong> (unten). <em>Wichtig: <code>c8</code> und <code>c10</code> liegen in der gleichen Reihe &ndash; ueber die Mittellinie des Breadboards musst du eventuell die Reihe wechseln, je nach Breadboard-Layout.</em>',
          'Stelle dein <strong>Multimeter auf Gleichspannung</strong> ein (Bereich <code>V=</code> oder <code>20 V DC</code>). Halte die <strong>schwarze Messleitung</strong> an die &minus;Schiene (GND) und die <strong>rote Messleitung</strong> an den Punkt zwischen R<sub>1</sub> und R<sub>2</sub>.',
          'Schliesse den Arduino mit dem USB-Kabel an den PC oder eine USB-Powerbank an &ndash; jetzt fliesst Strom. Lies den Wert am Multimeter ab. Erwartung: ca. <strong>2,5 V</strong>.',
          'Variante: Tausche R<sub>2</sub> (unten) gegen einen <strong>20&nbsp;k&Omega;-Widerstand</strong> aus. Miss erneut. Erwartung: U<sub>2</sub> &asymp; <strong>3,33 V</strong>. Notiere beide Werte.'
        ]
      },
      loesung: {
        erklaerung: '<p>Mit zwei gleichen 10-k&Omega;-Widerstaenden wird die 5-V-Versorgung genau halbiert &ndash; das Multimeter zeigt ca. <strong>2,5 V</strong>. Kleine Abweichungen (z.&nbsp;B. 2,47 V oder 2,53 V) sind normal: Widerstaende haben eine Toleranz von typisch &plusmn;&nbsp;5&nbsp;% (Goldring) und die USB-Versorgungsspannung liegt selten genau bei 5,00 V.</p><p>Im Vergleichsversuch mit R<sub>2</sub> = 20 k&Omega; rechnet man nach: U<sub>2</sub> = 5 V &middot; 20/(10+20) = 5 V &middot; 2/3 &asymp; <strong>3,33 V</strong>. Auch hier sind kleine Abweichungen normal.</p><p><strong>Diagnose-Hilfen, wenn der Messwert deutlich abweicht:</strong></p><ul><li><strong>U<sub>2</sub> &asymp; 0 V:</strong> Multimeter misst direkt an der GND-Schiene, oder R<sub>2</sub> ist ueberbrueckt.</li><li><strong>U<sub>2</sub> &asymp; 5 V:</strong> Multimeter misst direkt an der +Schiene, oder R<sub>1</sub> ist ueberbrueckt.</li><li><strong>Wert wackelt stark:</strong> Multimeter steht auf Wechselspannung (V~) statt Gleichspannung (V=).</li></ul>',
        haeufige_fehler: [
          '<strong>Widerstaende vertauscht (oben/unten):</strong> Bei gleichen Widerstaenden faellt es nicht auf (beide 10 k&Omega; &rarr; immer 2,5 V), aber im Vergleichsversuch mit 20 k&Omega; merkt man\'s sofort: 1,67 V statt 3,33 V.',
          '<strong>Falsche Multimeter-Stellung:</strong> Auf Wechselspannung (V~) wackelt der Wert. Auf Widerstandsmessung (Ω) misst man gar keine Spannung.',
          '<strong>Messleitungen vertauscht:</strong> Vorzeichen wird negativ angezeigt &ndash; der Betrag stimmt aber. Bei "richtigen" Multimetern reicht es, die Klemmen zu tauschen.',
          '<strong>Arduino nicht versorgt:</strong> Ohne USB-Kabel kein Strom &rarr; Multimeter zeigt 0 V. Sieht aus wie ein Schaltungsfehler, ist aber keiner.',
          '<strong>Farbcode-Verwechslung:</strong> 10 k&Omega; = braun-schwarz-orange, 1 k&Omega; = braun-schwarz-rot. Wer 1 k&Omega; statt 10 k&Omega; nimmt, misst trotzdem 2,5 V (Verhaeltnis stimmt) &ndash; aber zieht 5 mA statt 0,25 mA, was bei laengerer Versorgung warm wird.'
        ]
      }
    }
  },

  // ===================== LEKTION 11 =====================
  {
    id: 11,
    title: 'Analoge Eingaenge',
    explanation: {
      html: `
        <h2>Analoge Eingaenge – Mehr als nur An und Aus</h2>
        <p>Bisher hast du nur mit <strong>digitalen Signalen</strong> gearbeitet: <code>HIGH</code> (an) oder <code>LOW</code> (aus). Das ist wie ein <strong>Lichtschalter</strong> – entweder an oder aus, nichts dazwischen.</p>
        <p>Aber was, wenn du wissen willst, <em>wie hell</em> es ist? Oder <em>wie weit</em> ein Drehregler aufgedreht ist? Dafuer brauchst du <strong>analoge Eingaenge</strong>.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Stell dir den Unterschied so vor: Ein <strong>Lichtschalter</strong> (digital) kann nur an oder aus. Ein <strong>Dimmer</strong> (analog) kann stufenlos von ganz dunkel bis ganz hell regeln. Analoge Eingaenge am Arduino funktionieren wie ein Dimmer – sie erkennen nicht nur "an/aus", sondern <strong>alle Werte dazwischen</strong>.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Digital vs. Analog im Vergleich</h3>
          <table class="icon-table">
            <tr><th>Eigenschaft</th><th>Digital</th><th>Analog</th></tr>
            <tr><td><strong>Moegliche Werte</strong></td><td>Nur 0 oder 1 (LOW/HIGH)</td><td>0 bis 1023 (1024 Stufen)</td></tr>
            <tr><td><strong>Befehl</strong></td><td><code>digitalRead()</code></td><td><code>analogRead()</code></td></tr>
            <tr><td><strong>Pins</strong></td><td>Digitale Pins 0–13</td><td>Analoge Pins A0–A5</td></tr>
            <tr><td><strong>Beispiel</strong></td><td>Taster (gedrueckt/nicht gedrueckt)</td><td>Potentiometer (Drehstellung)</td></tr>
            <tr><td><strong>Analogie</strong></td><td>Lichtschalter</td><td>Dimmer</td></tr>
          </table>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Was ist ein Potentiometer?</h3>
          <p>Ein <strong>Potentiometer</strong> (kurz: Poti) ist ein Drehregler – genau wie der Lautstaerkeregler an einer alten Stereoanlage. Wenn du daran drehst, aendert sich der Widerstand und damit die Spannung, die am analogen Pin ankommt.</p>
          <ul>
            <li><strong>Ganz links gedreht</strong> → Spannung = 0V → Arduino liest <code>0</code></li>
            <li><strong>Mittelstellung</strong> → Spannung = ca. 2,5V → Arduino liest ca. <code>512</code></li>
            <li><strong>Ganz rechts gedreht</strong> → Spannung = 5V → Arduino liest <code>1023</code></li>
          </ul>
        </div>

        <div class="tip-box">
          <strong>Warum 1023?</strong> Der Arduino hat einen <strong>10-Bit Analog-Digital-Wandler</strong>. Das bedeutet: Er teilt die Spannung von 0V bis 5V in 2<sup>10</sup> = <strong>1024 Stufen</strong> auf (0 bis 1023). Je hoeher die Spannung, desto hoeher der Wert.
        </div>

        <div class="warning-box">
          <strong>Achtung beim Umrechnen in Volt:</strong> Nutze <code>float volt = wert * 5.0 / 1023;</code> &ndash; mit dem Punkt bei <strong>5.0</strong>. Ohne den Punkt (<code>wert * 5 / 1023</code>) rechnet der Arduino nur mit ganzen Zahlen und schneidet die Nachkommastellen ab &ndash; statt 2,47&nbsp;V bekommst du grobe Stufen. Der Punkt macht aus der 5 eine Kommazahl.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Anschluss: Potentiometer am Arduino</h3>
          <p>Ein Poti hat <strong>3 Beinchen</strong>:</p>
          <ol class="step-list">
            <li><strong>Linkes Beinchen</strong> → an <strong>GND</strong> (Minuspol)</li>
            <li><strong>Mittleres Beinchen</strong> → an <strong>A0</strong> (analoger Eingang)</li>
            <li><strong>Rechtes Beinchen</strong> → an <strong>5V</strong> (Pluspol)</li>
          </ol>

          <svg viewBox="0 0 420 200" style="width:100%;max-width:420px;margin:1em auto;display:block;font-family:system-ui;">
            <!-- Poti Symbol -->
            <rect x="150" y="40" width="120" height="80" rx="10" fill="#e8e8e8" stroke="#999" stroke-width="2"/>
            <text x="210" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Potentiometer</text>
            <circle cx="210" cy="95" r="12" fill="#ccc" stroke="#888" stroke-width="2"/>
            <line x1="210" y1="83" x2="210" y2="90" stroke="#555" stroke-width="2"/>
            <!-- 3 Beinchen -->
            <line x1="170" y1="120" x2="170" y2="165" stroke="#333" stroke-width="2.5"/>
            <line x1="210" y1="120" x2="210" y2="165" stroke="#2980B9" stroke-width="2.5"/>
            <line x1="250" y1="120" x2="250" y2="165" stroke="#333" stroke-width="2.5"/>
            <!-- Beschriftungen -->
            <text x="170" y="185" text-anchor="middle" font-size="12" fill="#C0392B" font-weight="bold">GND</text>
            <text x="210" y="185" text-anchor="middle" font-size="12" fill="#2980B9" font-weight="bold">A0</text>
            <text x="250" y="185" text-anchor="middle" font-size="12" fill="#27AE60" font-weight="bold">5V</text>
            <!-- Pfeil fuer Drehbewegung (Bogen UNTER dem Wort, sweep=0 -> wölbt nach unten) -->
            <text x="210" y="15" text-anchor="middle" font-size="11" fill="#E67E22" font-weight="bold">Drehen</text>
            <path d="M 192 25 A 20 20 0 0 0 228 25" fill="none" stroke="#E67E22" stroke-width="2" marker-end="url(#arrowOrange9)"/>
            <defs><marker id="arrowOrange9" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M 0 0 L 8 4 L 0 8 Z" fill="#E67E22"/></marker></defs>
          </svg>
        </div>

        <div class="info-card">
          <h3>So sieht es auf dem Breadboard aus</h3>
          <svg viewBox="0 0 700 520" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:700px;margin:1em auto;display:block;background:#fdfcf6;border:1px solid #ccc;border-radius:8px;font-family:system-ui,sans-serif;">

            <!-- ===== ARDUINO UNO (oben) ===== -->
            <rect x="80" y="20" width="540" height="100" rx="10" fill="#2176AE" stroke="#1a5f8a" stroke-width="2"/>
            <text x="350" y="48" text-anchor="middle" font-size="14" fill="white" font-weight="bold">Arduino Uno</text>
            <text x="350" y="64" text-anchor="middle" font-size="9" fill="#aad" font-style="italic">Potentiometer an A0 – stufenlos 0 bis 1023</text>

            <rect x="60" y="55" width="20" height="28" rx="2" fill="#aaa" stroke="#888" stroke-width="1"/>
            <text x="70" y="73" text-anchor="middle" font-size="7" fill="#444">USB</text>

            <!-- Pin-Labels -->
            <g font-size="9" font-weight="bold" text-anchor="middle">
              <text x="180" y="93" fill="#ff5555">5V</text>
              <text x="260" y="93" fill="#f90">A0</text>
              <text x="340" y="93" fill="#ddd">GND</text>
            </g>

            <!-- Pin-Boxen (5V → Sp.7, A0 → Sp.11, GND → Sp.15) -->
            <g font-size="10" fill="white" font-weight="bold" text-anchor="middle">
              <rect x="165" y="96" width="30" height="22" rx="2" fill="#ff5555" stroke="white" stroke-width="0.5"/>
              <text x="180" y="112">5V</text>
              <rect x="245" y="96" width="30" height="22" rx="2" fill="#f90" stroke="white" stroke-width="0.5"/>
              <text x="260" y="112">A0</text>
              <rect x="325" y="96" width="30" height="22" rx="2" fill="#333" stroke="white" stroke-width="0.5"/>
              <text x="340" y="112" font-size="9">GND</text>
            </g>

            <!-- ===== KABEL: senkrecht (5V→Sp.7, A0→Sp.11, GND→Sp.15) ===== -->
            <line x1="180" y1="118" x2="180" y2="240" stroke="#EF4444" stroke-width="2.8" stroke-linecap="round"/>
            <circle cx="180" cy="240" r="3.5" fill="#EF4444" stroke="#800" stroke-width="0.8"/>
            <line x1="260" y1="118" x2="260" y2="240" stroke="#f90" stroke-width="2.8" stroke-linecap="round"/>
            <circle cx="260" cy="240" r="3.5" fill="#f90" stroke="#c60" stroke-width="0.8"/>
            <line x1="340" y1="118" x2="340" y2="240" stroke="#333" stroke-width="2.8" stroke-linecap="round"/>
            <circle cx="340" cy="240" r="3.5" fill="#333"/>

            <!-- ===== BREADBOARD ===== -->
            <rect x="20" y="180" width="660" height="260" rx="6" fill="#e8e0d0" stroke="#999" stroke-width="1.5"/>
            <text x="350" y="453" text-anchor="middle" font-size="9" fill="#444" font-weight="bold">Breadboard (32 Spalten)</text>

            <rect x="50" y="195" width="620" height="9" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="38" y="202" font-size="8" fill="#c00" font-weight="bold">+</text>
            <rect x="50" y="207" width="620" height="9" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="38" y="214" font-size="8" fill="#00c" font-weight="bold">−</text>

            <g font-size="6" fill="#888" text-anchor="middle">
              <text x="60" y="230">1</text><text x="80" y="230">2</text><text x="100" y="230">3</text><text x="120" y="230">4</text><text x="140" y="230">5</text><text x="160" y="230">6</text><text x="180" y="230">7</text><text x="200" y="230">8</text><text x="220" y="230">9</text><text x="240" y="230">10</text><text x="260" y="230">11</text><text x="280" y="230">12</text><text x="300" y="230">13</text><text x="320" y="230">14</text><text x="340" y="230">15</text><text x="360" y="230">16</text><text x="380" y="230">17</text><text x="400" y="230">18</text><text x="420" y="230">19</text><text x="440" y="230">20</text><text x="460" y="230">21</text><text x="480" y="230">22</text><text x="500" y="230">23</text><text x="520" y="230">24</text><text x="540" y="230">25</text><text x="560" y="230">26</text><text x="580" y="230">27</text><text x="600" y="230">28</text><text x="620" y="230">29</text><text x="640" y="230">30</text><text x="660" y="230">31</text>
            </g>

            <g font-size="8" fill="#666" font-style="italic">
              <text x="36" y="244">a</text><text x="36" y="258">b</text><text x="36" y="272">c</text><text x="36" y="286">d</text><text x="36" y="300">e</text>
            </g>
            <g stroke="#aaa" stroke-width="3" stroke-linecap="round" stroke-dasharray="0.1,19.9" fill="none">
              <line x1="60" y1="240" x2="660" y2="240"/>
              <line x1="60" y1="254" x2="660" y2="254"/>
              <line x1="60" y1="268" x2="660" y2="268"/>
              <line x1="60" y1="282" x2="660" y2="282"/>
              <line x1="60" y1="296" x2="660" y2="296"/>
            </g>

            <rect x="50" y="304" width="620" height="12" rx="2" fill="#d0c8b8"/>

            <g font-size="8" fill="#666" font-style="italic">
              <text x="36" y="324">f</text><text x="36" y="338">g</text><text x="36" y="352">h</text><text x="36" y="366">i</text><text x="36" y="380">j</text>
            </g>
            <g stroke="#aaa" stroke-width="3" stroke-linecap="round" stroke-dasharray="0.1,19.9" fill="none">
              <line x1="60" y1="320" x2="660" y2="320"/>
              <line x1="60" y1="334" x2="660" y2="334"/>
              <line x1="60" y1="348" x2="660" y2="348"/>
              <line x1="60" y1="362" x2="660" y2="362"/>
              <line x1="60" y1="376" x2="660" y2="376"/>
            </g>

            <rect x="50" y="389" width="620" height="9" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <rect x="50" y="401" width="620" height="9" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>

            <!-- ===== POTENTIOMETER (Sp.7, Sp.11, Sp.15, je 1 Bein) ===== -->
            <!-- 3 Beinchen als kurze Stubs zwischen Body-Top und Reihe a (keine Linien durch den Body) -->
            <circle cx="180" cy="240" r="2.5" fill="#864"/>
            <circle cx="260" cy="240" r="2.5" fill="#864"/>
            <circle cx="340" cy="240" r="2.5" fill="#864"/>
            <line x1="180" y1="240" x2="180" y2="246" stroke="#864" stroke-width="2"/>
            <line x1="260" y1="240" x2="260" y2="246" stroke="#864" stroke-width="2"/>
            <line x1="340" y1="240" x2="340" y2="246" stroke="#864" stroke-width="2"/>

            <!-- Body (deckt die Reihen-Bahn unter dem Poti ab) -->
            <rect x="160" y="246" width="200" height="44" rx="6" fill="#e8e8e8" stroke="#666" stroke-width="1.5"/>
            <text x="260" y="262" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Potentiometer</text>
            <circle cx="260" cy="276" r="8" fill="#ccc" stroke="#888" stroke-width="1.5"/>
            <line x1="260" y1="268" x2="260" y2="272" stroke="#555" stroke-width="2"/>
            <text x="260" y="282" text-anchor="middle" font-size="6" fill="#555">drehen</text>

            <!-- Anschluss-Labels unter dem Body, mit kleinen Pfeilen zur Bein-Position -->
            <line x1="180" y1="290" x2="180" y2="299" stroke="#864" stroke-width="0.8" stroke-dasharray="2 1"/>
            <line x1="260" y1="290" x2="260" y2="299" stroke="#864" stroke-width="0.8" stroke-dasharray="2 1"/>
            <line x1="340" y1="290" x2="340" y2="299" stroke="#864" stroke-width="0.8" stroke-dasharray="2 1"/>
            <text x="180" y="307" text-anchor="middle" font-size="6.5" fill="#c00" font-weight="bold">5V</text>
            <text x="260" y="307" text-anchor="middle" font-size="6.5" fill="#c60" font-weight="bold">A0</text>
            <text x="340" y="307" text-anchor="middle" font-size="6.5" fill="#333" font-weight="bold">GND</text>

            <!-- Beschriftungs-Box rechts (mit Padding unten) -->
            <rect x="430" y="240" width="220" height="100" rx="6" fill="#FFF8E1" stroke="#FFA000" stroke-width="1.5"/>
            <text x="540" y="262" text-anchor="middle" font-size="10" fill="#E65100" font-weight="bold">So funktioniert's:</text>
            <text x="440" y="282" font-size="9" fill="#555">► Drehen am Poti = Spannung ändern</text>
            <text x="440" y="298" font-size="9" fill="#555">► Links: 0 V → analogRead() = 0</text>
            <text x="440" y="314" font-size="9" fill="#555">► Mitte: 2,5 V → analogRead() = 512</text>
            <text x="440" y="330" font-size="9" fill="#555">► Rechts: 5 V → analogRead() = 1023</text>

            <!-- ===== LEGENDE ===== -->
            <rect x="20" y="460" width="660" height="50" rx="6" fill="#fff" stroke="#ddd" stroke-width="1"/>
            <text x="32" y="478" font-size="10" fill="#333" font-weight="bold">Legende – Potentiometer-Anschluss:</text>
            <line x1="32" y1="492" x2="62" y2="492" stroke="#EF4444" stroke-width="3" stroke-linecap="round"/>
            <text x="68" y="495" font-size="9" fill="#555">5V → Sp.7 (Poti linkes Bein)</text>
            <line x1="240" y1="492" x2="270" y2="492" stroke="#f90" stroke-width="3" stroke-linecap="round"/>
            <text x="276" y="495" font-size="9" fill="#555">A0 → Sp.11 (Poti Mitte)</text>
            <line x1="440" y1="492" x2="470" y2="492" stroke="#333" stroke-width="3" stroke-linecap="round"/>
            <text x="476" y="495" font-size="9" fill="#555">GND → Sp.15 (Poti rechtes Bein)</text>
            <text x="32" y="510" font-size="9" fill="#888" font-style="italic">Spannungsteiler: 5V → Poti → GND. Mittel-Abgriff = variable Spannung 0–5V an A0.</text>
            </g>
          </svg>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Der Befehl: analogRead()</h3>
          <p>Mit <code>analogRead(pin)</code> liest du den aktuellen Wert eines analogen Pins aus. Der Rueckgabewert liegt immer zwischen <strong>0</strong> und <strong>1023</strong>.</p>
        </div>

        <div class="code-card">
          <h4>POTENTIOMETER AUSLESEN + SERIAL MONITOR</h4>
          <pre><code><span class="keyword">int</span> sensorWert;  <span class="comment">// Variable fuer den Messwert</span>

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">Serial.begin</span>(<span class="value">9600</span>);  <span class="comment">// Serial Monitor starten</span>
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  sensorWert = <span class="function">analogRead</span>(<span class="value">A0</span>);  <span class="comment">// Wert von Pin A0 lesen</span>
  <span class="function">Serial.print</span>(<span class="value">"Poti-Wert: "</span>);
  <span class="function">Serial.println</span>(sensorWert);    <span class="comment">// Wert im Monitor anzeigen</span>
  <span class="function">delay</span>(<span class="value">200</span>);                     <span class="comment">// Kurz warten (5x pro Sek.)</span>
}</code></pre>
        </div>

        <div class="tip-box">
          <strong>Tipp:</strong> Oeffne den <strong>Serial Monitor</strong> (Lupe in der IDE) und dreh am Poti. Du siehst, wie sich die Zahlen live aendern – von 0 bis 1023!
        </div>

        <div class="warning-box">
          <strong>Achtung:</strong> Fuer <code>analogRead()</code> brauchst du <strong>keinen</strong> <code>pinMode()</code>-Befehl im <code>setup()</code>! Die analogen Pins sind automatisch als Eingang konfiguriert.
        </div>
      `
    },
    example: {
      title: 'Beispiel: Potentiometer auslesen',
      steps: [
        { label: 'Schaltung aufbauen', html: 'Schliesse das Potentiometer an: <strong>linkes Beinchen → GND</strong>, <strong>mittleres Beinchen → A0</strong>, <strong>rechtes Beinchen → 5V</strong>.' },
        { label: 'Code eingeben', html: 'Gib den Code von oben in die Arduino IDE ein. Vergiss nicht: <code>Serial.begin(9600)</code> im <code>setup()</code>!' },
        { label: 'Hochladen & testen', html: 'Lade den Code hoch und oeffne den <strong>Serial Monitor</strong> (Lupe oben rechts). Stelle die Baudrate auf <strong>9600</strong>.' },
        { label: 'Am Poti drehen', html: 'Dreh am Potentiometer und beobachte die Werte. <strong>Links = 0</strong>, <strong>Mitte = ~512</strong>, <strong>Rechts = 1023</strong>. Du siehst: Der Arduino kann mehr als nur An und Aus!' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welchen Wertebereich liefert analogRead() zurueck?',
        options: [
          '0 oder 1 (wie digitalRead)',
          '0 bis 255',
          '0 bis 1023',
          '0 bis 5000'
        ],
        correct: 2,
        explanation: 'Richtig! Der 10-Bit Analog-Digital-Wandler des Arduino liefert Werte von 0 (= 0V) bis 1023 (= 5V). Das sind insgesamt 1024 verschiedene Stufen.',
        wrongExplanations: {
          0: 'Nein, nur 0 oder 1 liefert digitalRead(). analogRead() misst feine Abstufungen zwischen 0 V und 5 V — sonst koennte man Sensorwerte nicht erfassen.',
          1: 'Vorsicht: 0-255 ist der Wertebereich von analogWrite() (8-Bit PWM). analogRead() arbeitet mit 10-Bit-Aufloesung: 0-1023.',
          3: 'Nein, der Arduino rechnet die 0-5 V intern in 1024 Stufen um — er liefert nicht den Millivolt-Wert, sondern eine Zahl von 0 bis 1023.'
        }
      },
      {
        type: 'matching',
        question: 'Ordne die Begriffe den richtigen Beschreibungen zu:',
        pairs: [
          { left: 'analogRead(A0)', right: 'Liest analogen Wert von Pin A0' },
          { left: 'digitalRead()', right: 'Liest nur HIGH oder LOW' },
          { left: 'Potentiometer', right: 'Drehregler mit 3 Anschluessen' },
          { left: 'Serial Monitor', right: 'Zeigt Werte auf dem Bildschirm' }
        ],
        explanation: 'Merke dir den Unterschied: analogRead() liefert feine Abstufungen von 0 bis 1023, digitalRead() nur HIGH oder LOW. Das Potentiometer ist die Hardware (der Drehregler mit 3 Anschluessen), die du ausliest, und der Serial Monitor ist dein Fenster, um die Zahlen am Bildschirm zu sehen.'
      },
      {
        type: 'ordering',
        question: 'Bringe die Schritte zum Auslesen eines Potentiometers in die richtige Reihenfolge:',
        items: [
          'Im Serial Monitor die Werte beobachten',
          'Potentiometer an GND, A0 und 5V anschliessen',
          'Im setup() Serial.begin(9600) schreiben',
          'Im loop() analogRead(A0) aufrufen'
        ],
        correctOrder: [1, 2, 3, 0],
        explanation: 'Erst kommt die Hardware: das Potentiometer an GND, A0 und 5V anschliessen. Dann die Software-Vorbereitung im setup() mit Serial.begin(9600), damit der Arduino ueberhaupt Werte senden kann. Danach im loop() den Wert mit analogRead(A0) auslesen &ndash; und erst zuletzt kannst du ihn im Serial Monitor beobachten.'
      }
    ]
  },

  // ===================== LEKTION 12 =====================
  {
    id: 12,
    title: 'PWM: Dimmen statt Schalten',
    explanation: {
      html: `
        <h2>PWM: Dimmen statt Schalten</h2>
        <p>Mit <code>digitalWrite()</code> kannst du eine LED nur <strong>ein</strong> oder <strong>aus</strong> schalten. Aber was, wenn du sie <strong>dimmen</strong> willst – also die Helligkeit stufenlos regeln? Dafuer gibt es <strong>PWM</strong> und den Befehl <code>analogWrite()</code>.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Stell dir einen <strong>Ventilator</strong> vor. Auf Stufe 1 dreht er sich langsam, auf Stufe 3 schnell. Aber der Motor kennt eigentlich nur "an" und "aus". Der Trick? Der Motor wird ganz schnell ein- und ausgeschaltet. <strong>Je laenger er an ist, desto schneller dreht er.</strong> Genau so funktioniert PWM!
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Was ist PWM?</h3>
          <p><strong>PWM</strong> steht fuer <strong>Puls-Weiten-Modulation</strong>. Der Arduino schaltet den Pin extrem schnell ein und aus – <strong>ca. 490-mal pro Sekunde</strong>. Das ist so schnell, dass du das Flackern nicht siehst. Stattdessen nimmst du eine <strong>Durchschnittshelligkeit</strong> wahr.</p>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
            <div class="info-card" style="margin:0; border-top: 3px solid #e74c3c;">
              <h3 style="font-size:0.95rem;">analogWrite(pin, 0)</h3>
              <p>Signal: Immer aus<br><strong>Helligkeit: 0%</strong><br>LED ist dunkel</p>
            </div>
            <div class="info-card" style="margin:0; border-top: 3px solid #e67e22;">
              <h3 style="font-size:0.95rem;">analogWrite(pin, 127)</h3>
              <p>Signal: 50% an, 50% aus<br><strong>Helligkeit: 50%</strong><br>LED leuchtet halb</p>
            </div>
            <div class="info-card" style="margin:0; border-top: 3px solid #f1c40f;">
              <h3 style="font-size:0.95rem;">analogWrite(pin, 200)</h3>
              <p>Signal: 78% an, 22% aus<br><strong>Helligkeit: ~78%</strong><br>LED leuchtet hell</p>
            </div>
            <div class="info-card" style="margin:0; border-top: 3px solid #2ecc71;">
              <h3 style="font-size:0.95rem;">analogWrite(pin, 255)</h3>
              <p>Signal: Immer an<br><strong>Helligkeit: 100%</strong><br>LED leuchtet voll</p>
            </div>
          </div>
        </div>

        <hr class="section-divider">

        <div class="warning-box">
          <strong>Achtung: Nur PWM-Pins!</strong><br>
          <code>analogWrite()</code> funktioniert <strong>nicht an allen Pins</strong>! Nur die Pins mit einer <strong>Tilde (~)</strong> auf dem Board koennen PWM:
          <br><br>
          <strong>PWM-Pins am Arduino Uno: ~3, ~5, ~6, ~9, ~10, ~11</strong>
          <br><br>
          Wenn du einen anderen Pin (z.B. Pin 8) verwendest, passiert nichts – die LED wird nur ganz an oder ganz aus geschaltet.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Der Befehl: analogWrite()</h3>
          <table class="icon-table">
            <tr><th>Eigenschaft</th><th>analogRead()</th><th>analogWrite()</th></tr>
            <tr><td><strong>Richtung</strong></td><td>Eingang (lesen)</td><td>Ausgang (schreiben)</td></tr>
            <tr><td><strong>Wertebereich</strong></td><td>0 – 1023</td><td>0 – 255</td></tr>
            <tr><td><strong>Pins</strong></td><td>A0 – A5</td><td>~3, ~5, ~6, ~9, ~10, ~11</td></tr>
            <tr><td><strong>Beispiel</strong></td><td>Sensor auslesen</td><td>LED dimmen</td></tr>
          </table>
        </div>

        <div class="code-card">
          <h4>LED SANFT HELLER UND DUNKLER (FADING)</h4>
          <pre><code><span class="keyword">int</span> ledPin = <span class="value">9</span>;       <span class="comment">// PWM-Pin!</span>
<span class="keyword">int</span> helligkeit = <span class="value">0</span>;   <span class="comment">// Startwert</span>
<span class="keyword">int</span> schritt = <span class="value">5</span>;      <span class="comment">// Aenderung pro Durchlauf</span>

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(ledPin, OUTPUT);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="function">analogWrite</span>(ledPin, helligkeit);  <span class="comment">// Helligkeit setzen</span>
  helligkeit = helligkeit + schritt; <span class="comment">// Helligkeit aendern</span>

  <span class="keyword">if</span> (helligkeit <= <span class="value">0</span> || helligkeit >= <span class="value">255</span>) {
    schritt = -schritt;              <span class="comment">// Richtung umkehren</span>
  }
  <span class="function">delay</span>(<span class="value">30</span>);  <span class="comment">// Kurz warten (sanfter Uebergang)</span>
}</code></pre>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die map()-Funktion: Wertebereiche umrechnen</h3>
          <p>Das Poti liefert Werte von <strong>0 bis 1023</strong>, aber <code>analogWrite()</code> braucht <strong>0 bis 255</strong>. Wie rechnest du das um? Mit <code>map()</code>!</p>
        </div>

        <div class="code-card">
          <h4>MAP() – WERTE UMRECHNEN</h4>
          <pre><code><span class="keyword">int</span> potiWert;
<span class="keyword">int</span> ledWert;

<span class="comment">// map(Eingabe, vonMin, vonMax, zuMin, zuMax)</span>
potiWert = <span class="function">analogRead</span>(<span class="value">A0</span>);                  <span class="comment">// 0 bis 1023</span>
ledWert  = <span class="function">map</span>(potiWert, <span class="value">0</span>, <span class="value">1023</span>, <span class="value">0</span>, <span class="value">255</span>);  <span class="comment">// → 0 bis 255</span></code></pre>
        </div>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> <code>map()</code> ist wie ein <strong>Waehrungsrechner</strong>. Du hast einen Betrag in Euro (0–1023) und willst ihn in Dollar (0–255) umrechnen. Die Funktion <code>map()</code> macht die Umrechnung automatisch fuer dich.
        </div>

        <div class="code-card">
          <h4>KOMPLETT: LED-HELLIGKEIT MIT POTI STEUERN</h4>
          <pre><code><span class="keyword">int</span> potiPin = <span class="value">A0</span>;  <span class="comment">// Potentiometer an A0</span>
<span class="keyword">int</span> ledPin  = <span class="value">9</span>;   <span class="comment">// LED an PWM-Pin 9</span>

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(ledPin, OUTPUT);
  <span class="function">Serial.begin</span>(<span class="value">9600</span>);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="keyword">int</span> potiWert = <span class="function">analogRead</span>(potiPin);           <span class="comment">// 0–1023</span>
  <span class="keyword">int</span> ledWert  = <span class="function">map</span>(potiWert, <span class="value">0</span>, <span class="value">1023</span>, <span class="value">0</span>, <span class="value">255</span>); <span class="comment">// → 0–255</span>

  <span class="function">analogWrite</span>(ledPin, ledWert);  <span class="comment">// LED dimmen</span>

  <span class="function">Serial.print</span>(<span class="value">"Poti: "</span>);
  <span class="function">Serial.print</span>(potiWert);
  <span class="function">Serial.print</span>(<span class="value">" → LED: "</span>);
  <span class="function">Serial.println</span>(ledWert);

  <span class="function">delay</span>(<span class="value">100</span>);
}</code></pre>
        </div>

        <div class="info-card">
          <h3>So sieht es auf dem Breadboard aus</h3>
          <svg viewBox="0 0 720 700" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:720px;margin:1em auto;display:block;background:#fdfcf6;border:1px solid #ccc;border-radius:8px;font-family:system-ui,sans-serif;">

            <!-- ===== ARDUINO UNO (oben, volle Breite) ===== -->
            <rect x="20" y="30" width="700" height="120" rx="10" fill="#2176AE" stroke="#1a5f8a" stroke-width="2"/>
            <text x="370" y="55" text-anchor="middle" font-size="16" fill="white" font-weight="bold">Arduino Uno</text>
            <text x="370" y="72" text-anchor="middle" font-size="9" fill="#aad" font-style="italic">PWM: Poti steuert LED-Helligkeit via A0 → Pin ~9</text>

            <!-- USB-Buchse links -->
            <rect x="0" y="65" width="20" height="28" rx="2" fill="#aaa" stroke="#888" stroke-width="1"/>
            <text x="10" y="83" text-anchor="middle" font-size="7" fill="#444">USB</text>

            <!-- Pin-Labels UEBER der Pin-Nummer -->
            <g font-size="9" font-weight="bold" text-anchor="middle">
              <text x="100" y="103" fill="#ff5555">Strom</text>
              <text x="180" y="103" fill="#fc6">Poti</text>
              <text x="340" y="103" fill="#6f6">LED-PWM</text>
              <text x="640" y="103" fill="#ddd">Masse</text>
            </g>

            <!-- Pin-Boxen -->
            <g font-size="10" fill="white" font-weight="bold" text-anchor="middle">
              <!-- 5V → Sp.3 (x=100) -->
              <rect x="90" y="110" width="20" height="28" rx="2" fill="#c00" stroke="white" stroke-width="0.5"/>
              <text x="100" y="129" font-size="9">5V</text>
              <!-- A0 → Sp.7 (x=180) -->
              <rect x="170" y="110" width="22" height="28" rx="2" fill="#f90" stroke="white" stroke-width="0.5"/>
              <text x="181" y="129" font-size="9">A0</text>
              <!-- Pin ~9 → Sp.15 (x=340) -->
              <rect x="328" y="110" width="24" height="28" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/>
              <text x="340" y="129" font-size="9">~9</text>
              <!-- GND → Sp.30 (x=640) -->
              <rect x="628" y="110" width="24" height="28" rx="2" fill="#333" stroke="white" stroke-width="0.5"/>
              <text x="640" y="129" font-size="9">GND</text>
            </g>

            <!-- ===== KABEL: ARDUINO -> BREADBOARD ===== -->
            <!-- 5V -> +Schiene bei Sp.3 (x=100) -->
            <line x1="100" y1="138" x2="100" y2="230" stroke="#c00" stroke-width="3" stroke-linecap="round"/>
            <circle cx="100" cy="230" r="3.5" fill="#c00"/>

            <!-- A0 -> Sp.7 Reihe e (Poti Mitte, x=180) -->
            <line x1="181" y1="138" x2="181" y2="342" stroke="#f90" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="181" cy="342" r="3.5" fill="#f90" stroke="#c60" stroke-width="0.8"/>

            <!-- Pin ~9 -> Sp.15 Reihe e (LED-Kreis Anschluss, x=340) -->
            <line x1="340" y1="138" x2="340" y2="342" stroke="#0a0" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="340" cy="342" r="3.5" fill="#0a0" stroke="#040" stroke-width="0.8"/>

            <!-- GND -> obere -Schiene (x=640) -->
            <line x1="640" y1="138" x2="640" y2="250" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <circle cx="640" cy="250" r="3.5" fill="#222"/>

            <!-- ===== BREADBOARD (unten, volle Breite) ===== -->
            <rect x="20" y="215" width="680" height="320" rx="6" fill="#e8e0d0" stroke="#999" stroke-width="1.5"/>
            <text x="360" y="550" text-anchor="middle" font-size="9" fill="#444" font-weight="bold">Breadboard (32 Spalten)</text>

            <!-- Stromschienen oben -->
            <rect x="50" y="225" width="640" height="10" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="38" y="232" font-size="8" fill="#c00" font-weight="bold">+</text>
            <!-- 5V-Label direkt AUF der +Schiene-Stripe (am rechten Ende, innerhalb der Leiste) -->
            <text x="684" y="233" text-anchor="end" font-size="7" fill="#c00" font-weight="bold">5V</text>
            <rect x="50" y="240" width="640" height="10" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="38" y="247" font-size="8" fill="#00c" font-weight="bold">&#8722;</text>
            <!-- GND-Label direkt AUF der -Schiene-Stripe (am rechten Ende, innerhalb der Leiste) -->
            <text x="684" y="248" text-anchor="end" font-size="7" fill="#00c" font-weight="bold">GND</text>

            <!-- Spaltennummern -->
            <g font-size="7" fill="#888" text-anchor="middle">
              <text x="60" y="265">1</text><text x="80" y="265">2</text><text x="100" y="265">3</text><text x="120" y="265">4</text><text x="140" y="265">5</text><text x="160" y="265">6</text><text x="180" y="265">7</text><text x="200" y="265">8</text><text x="220" y="265">9</text><text x="240" y="265">10</text><text x="260" y="265">11</text><text x="280" y="265">12</text><text x="300" y="265">13</text><text x="320" y="265">14</text><text x="340" y="265">15</text><text x="360" y="265">16</text><text x="380" y="265">17</text><text x="400" y="265">18</text><text x="420" y="265">19</text><text x="440" y="265">20</text><text x="460" y="265">21</text><text x="480" y="265">22</text><text x="500" y="265">23</text><text x="520" y="265">24</text><text x="540" y="265">25</text><text x="560" y="265">26</text><text x="580" y="265">27</text><text x="600" y="265">28</text><text x="620" y="265">29</text><text x="640" y="265">30</text><text x="660" y="265">31</text><text x="680" y="265">32</text>
            </g>

            <!-- Reihen a-e -->
            <g font-size="9" fill="#666" font-style="italic">
              <text x="36" y="282">a</text><text x="36" y="298">b</text><text x="36" y="314">c</text><text x="36" y="330">d</text><text x="36" y="346">e</text>
            </g>
            <g stroke="#aaa" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1,19.9" fill="none">
              <line x1="60" y1="278" x2="680" y2="278"/>
              <line x1="60" y1="294" x2="680" y2="294"/>
              <line x1="60" y1="310" x2="680" y2="310"/>
              <line x1="60" y1="326" x2="680" y2="326"/>
              <line x1="60" y1="342" x2="680" y2="342"/>
            </g>

            <!-- Mittelrinne -->
            <rect x="50" y="350" width="640" height="14" rx="2" fill="#d0c8b8"/>
            <text x="360" y="360" text-anchor="middle" font-size="7" fill="#aaa" font-style="italic">Mittelrinne (trennt obere und untere Haelfte)</text>

            <!-- Reihen f-j -->
            <g font-size="9" fill="#666" font-style="italic">
              <text x="36" y="376">f</text><text x="36" y="392">g</text><text x="36" y="408">h</text><text x="36" y="424">i</text><text x="36" y="440">j</text>
            </g>
            <g stroke="#aaa" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1,19.9" fill="none">
              <line x1="60" y1="372" x2="680" y2="372"/>
              <line x1="60" y1="388" x2="680" y2="388"/>
              <line x1="60" y1="404" x2="680" y2="404"/>
              <line x1="60" y1="420" x2="680" y2="420"/>
              <line x1="60" y1="436" x2="680" y2="436"/>
            </g>

            <!-- Stromschienen unten -->
            <rect x="50" y="455" width="640" height="10" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="38" y="462" font-size="8" fill="#00c" font-weight="bold">&#8722;</text>
            <rect x="50" y="470" width="640" height="10" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="38" y="477" font-size="8" fill="#c00" font-weight="bold">+</text>

            <!-- ===== BAUTEILE ===== -->

            <!-- ===== POTENTIOMETER-Bereich (Sp.3-11, Beine auf 4-Spalten-Abstand fuer Klarheit) ===== -->
            <rect x="92" y="266" width="180" height="84" rx="4" fill="none" stroke="#fc6" stroke-width="1" stroke-dasharray="4,2"/>
            <text x="182" y="200" text-anchor="middle" font-size="12" fill="#c80" font-weight="bold" stroke="white" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill">&#8595; POTENTIOMETER</text>

            <!-- Poti-Koerper: Rechteck ueber Sp.3-11 in Reihe a-d, Knopf zentriert ueber Sp.7 -->
            <rect x="90" y="276" width="180" height="48" rx="6" fill="#1a5f8a" stroke="#0a3a78" stroke-width="1.5" opacity="0.85"/>
            <text x="180" y="295" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">10 k&#937;-Potentiometer</text>
            <!-- Drehknopf -->
            <circle cx="181" cy="312" r="9" fill="#ccc" stroke="#666" stroke-width="1"/>
            <line x1="181" y1="305" x2="181" y2="312" stroke="#222" stroke-width="2" stroke-linecap="round"/>
            <!-- 3 Beine: Sp.3, Sp.7, Sp.11 in Reihe e (y=342) -->
            <line x1="100" y1="324" x2="100" y2="342" stroke="#9ca3af" stroke-width="2"/>
            <line x1="181" y1="324" x2="181" y2="342" stroke="#9ca3af" stroke-width="2"/>
            <line x1="260" y1="324" x2="260" y2="342" stroke="#9ca3af" stroke-width="2"/>
            <!-- Bein-Marker an den Pin-Loechern -->
            <circle cx="100" cy="342" r="2.5" fill="#9ca3af" stroke="#444" stroke-width="0.5"/>
            <circle cx="181" cy="342" r="2.5" fill="#9ca3af" stroke="#444" stroke-width="0.5"/>
            <circle cx="260" cy="342" r="2.5" fill="#9ca3af" stroke="#444" stroke-width="0.5"/>
            <!-- Bein-Funktion (unter dem Poti zur Klarheit) -->
            <text x="100" y="340" text-anchor="middle" font-size="6.5" fill="#c00" font-weight="bold" stroke="white" stroke-width="2" stroke-linejoin="round" paint-order="stroke fill">+5V</text>
            <text x="181" y="340" text-anchor="middle" font-size="6.5" fill="#c60" font-weight="bold" stroke="white" stroke-width="2" stroke-linejoin="round" paint-order="stroke fill">A0</text>
            <text x="260" y="340" text-anchor="middle" font-size="6.5" fill="#222" font-weight="bold" stroke="white" stroke-width="2" stroke-linejoin="round" paint-order="stroke fill">GND</text>

            <!-- Jumper Sp.3 Reihe a -> +Schiene (5V Versorgung Poti). LINKS aussen verlegt, damit das
                 rote Kabel nicht durch die blaue -Schiene-Stripe laeuft und sauber auf der roten
                 +Schiene endet (analog zur GND-Bruecke rechts in L21). -->
            <path d="M 100 280 L 40 280 L 40 230 L 60 230" stroke="#c00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <circle cx="100" cy="280" r="2.8" fill="#c00"/>
            <circle cx="60" cy="230" r="2.8" fill="#c00"/>

            <!-- Jumper Sp.11 Reihe a -> obere -Schiene (Poti-rechts zu GND) durchgezogen SCHWARZ -->
            <line x1="260" y1="280" x2="260" y2="250" stroke="#222" stroke-width="2" stroke-linecap="round"/>
            <circle cx="260" cy="280" r="2.5" fill="#222"/>
            <circle cx="260" cy="250" r="2.5" fill="#222"/>

            <!-- ===== LED-KREIS-Bereich (Sp.15-17) ===== -->
            <rect x="332" y="266" width="60" height="84" rx="4" fill="none" stroke="#6c6" stroke-width="1" stroke-dasharray="4,2"/>
            <text x="362" y="200" text-anchor="middle" font-size="12" fill="#080" font-weight="bold" stroke="white" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill">&#8595; LED (PWM)</text>

            <!-- 220Ω Widerstand horizontal Sp.15-16, Reihe c -->
            <rect x="338" y="306" width="24" height="8" rx="2" fill="#e8d0a0" stroke="#864" stroke-width="1"/>
            <line x1="344" y1="306" x2="344" y2="314" stroke="#c00" stroke-width="1.2"/>
            <line x1="349" y1="306" x2="349" y2="314" stroke="#c00" stroke-width="1.2"/>
            <line x1="354" y1="306" x2="354" y2="314" stroke="#a52" stroke-width="1.2"/>
            <line x1="358" y1="306" x2="358" y2="314" stroke="#fb0" stroke-width="1.2"/>
            <text x="350" y="304" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">220&#937;</text>
            <circle cx="340" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <circle cx="360" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <!-- Bein-Linien: Sp.15 Reihe c -> e und Sp.16 Reihe c -> a -->
            <line x1="340" y1="310" x2="340" y2="342" stroke="#864" stroke-width="1.5"/>
            <line x1="360" y1="310" x2="360" y2="282" stroke="#864" stroke-width="1.5"/>

            <!-- LED horizontal Sp.16 Anode -> Sp.17 Kathode, Reihe a -->
            <polygon points="359,274 359,286 372,280" fill="#e00" stroke="#a00" stroke-width="1.2"/>
            <line x1="372" y1="274" x2="372" y2="286" stroke="#a00" stroke-width="2"/>
            <text x="365" y="262" text-anchor="middle" font-size="7" fill="#c00" font-weight="bold">LED</text>
            <circle cx="360" cy="280" r="2.2" fill="#e00" stroke="#600" stroke-width="0.6"/>
            <circle cx="380" cy="280" r="2.2" fill="#864" stroke="#444" stroke-width="0.6"/>
            <!-- Kathoden-Jumper Sp.17 -> obere -Schiene (durchgezogen schwarz, GND-Konvention) -->
            <line x1="380" y1="280" x2="380" y2="250" stroke="#222" stroke-width="1.8" stroke-linecap="round"/>

            <!-- ===== LEGENDE ===== -->
            <rect x="20" y="560" width="680" height="120" rx="6" fill="#f0f0f0" stroke="#ccc" stroke-width="1"/>
            <text x="32" y="582" font-size="11" fill="#333" font-weight="bold">Legende &#8211; PWM: Poti steuert LED-Helligkeit:</text>

            <line x1="32" y1="604" x2="62" y2="604" stroke="#c00" stroke-width="3"/>
            <text x="68" y="607" font-size="9" fill="#555">5V &#8594; +Schiene &#8594; Sp.3 (Poti links)</text>

            <line x1="290" y1="604" x2="320" y2="604" stroke="#f90" stroke-width="2.5"/>
            <text x="326" y="607" font-size="9" fill="#555">A0 &#8594; Sp.7 (Poti Mitte = Abgriff)</text>

            <line x1="32" y1="624" x2="62" y2="624" stroke="#0a0" stroke-width="2.5"/>
            <text x="68" y="627" font-size="9" fill="#555">Pin ~9 (PWM) &#8594; Sp.15 (LED-Kreis)</text>

            <line x1="290" y1="624" x2="320" y2="624" stroke="#222" stroke-width="3"/>
            <text x="326" y="627" font-size="9" fill="#555">GND &#8594; &#8722;Schiene &#8594; Sp.11 (Poti rechts) + Sp.17 (LED Kathode)</text>

            <rect x="32" y="640" width="14" height="10" rx="1" fill="#e8d0a0" stroke="#986" stroke-width="0.8"/>
            <text x="52" y="648" font-size="9" fill="#555">220&#937; Vorwiderstand fuer LED</text>

            <text x="32" y="668" font-size="8.5" fill="#666" font-style="italic">Stromfluss: 5V &#8594; Poti &#8594; (Abgriff A0 misst Spannung) &#8594; GND. analogRead(A0) liefert 0&#8211;1023 &#8594; map() &#8594; analogWrite(9, 0&#8211;255) dimmt LED.</text>
          </svg>
        </div>

        <div class="tip-box">
          <strong>Tipp:</strong> Lade den Code hoch und dreh am Poti – du siehst im Serial Monitor die Werte UND die LED aendert live ihre Helligkeit. So wird der Zusammenhang zwischen analogRead und analogWrite greifbar!
        </div>
      `
    },
    example: {
      title: 'Beispiel: LED-Helligkeit mit Poti steuern',
      steps: [
        { label: 'Schaltung', html: '<strong>Potentiometer:</strong> Linkes Beinchen → GND, Mitte → A0, Rechts → 5V.<br><strong>LED:</strong> Langes Beinchen (+) ueber 220-Ohm-Widerstand an <strong>Pin 9</strong> (PWM!), kurzes Beinchen (-) an GND.' },
        { label: 'Code eingeben', html: 'Gib den kompletten Code von oben ein. Wichtig: Die LED <strong>muss</strong> an einem PWM-Pin haengen (mit ~ markiert).' },
        { label: 'Hochladen & testen', html: 'Lade hoch, oeffne den Serial Monitor. Dreh am Poti: <strong>Links = LED aus</strong>, <strong>Rechts = LED voll an</strong>, <strong>Mitte = LED halb hell</strong>.' },
        { label: 'Experimentieren', html: 'Aendere die Zielwerte in <code>map()</code>: z.B. <code>map(potiWert, 0, 1023, 0, 100)</code> – jetzt geht die LED maximal auf ~40% Helligkeit. So lernst du, wie <code>map()</code> funktioniert!' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welchen Wertebereich akzeptiert analogWrite()?',
        options: [
          '0 bis 1023',
          '0 oder 1 (HIGH/LOW)',
          '0 bis 255',
          '0 bis 5000'
        ],
        correct: 2,
        explanation: 'Richtig! analogWrite() verwendet einen 8-Bit-Wert: 0 (ganz aus) bis 255 (voll an). Im Gegensatz dazu liefert analogRead() Werte von 0 bis 1023.',
        wrongExplanations: {
          0: 'Vorsicht, das ist genau umgekehrt: 0-1023 ist der Bereich von analogRead() (10 Bit). analogWrite() schreibt mit nur 8 Bit (0-255).',
          1: 'Nein, nur HIGH/LOW kennt digitalWrite(). analogWrite() kann auch Zwischenwerte — genau deshalb kann es dimmen.',
          3: 'Die 0-5000 koennten an Millivolt erinnern — aber so denkt der Arduino nicht. analogWrite() arbeitet mit 256 Stufen (0-255).'
        }
      },
      {
        type: 'matching',
        question: 'Ordne die Begriffe den richtigen Beschreibungen zu:',
        pairs: [
          { left: 'PWM', right: 'Schnelles Ein-/Ausschalten fuer Dimm-Effekt' },
          { left: 'analogWrite(9, 127)', right: 'LED an Pin 9 auf halbe Helligkeit' },
          { left: 'map()', right: 'Rechnet Wertebereiche um' },
          { left: '~3, ~5, ~6, ~9, ~10, ~11', right: 'PWM-faehige Pins am Arduino Uno' }
        ],
        explanation: 'PWM ist das Prinzip (schnelles Ein-/Ausschalten), analogWrite(9, 127) ist der Befehl, der es nutzt &ndash; 127 ist etwa die Haelfte von 255, also halbe Helligkeit. map() hilft, einen Poti-Wert (0&ndash;1023) in einen analogWrite-Wert (0&ndash;255) umzurechnen. Und nur die mit ~ markierten Pins koennen PWM, deshalb haengt man dimmbare LEDs genau dort an.'
      },
      {
        type: 'multiple-choice',
        question: 'Was macht der Befehl map(512, 0, 1023, 0, 255)?',
        options: [
          'Er gibt 512 zurueck',
          'Er gibt ca. 127 zurueck (die Haelfte von 255)',
          'Er gibt 0 zurueck',
          'Er gibt 1023 zurueck'
        ],
        correct: 1,
        explanation: 'Genau! 512 ist ungefaehr die Haelfte von 1023. Die Funktion map() rechnet das proportional um: Die Haelfte von 255 ist ca. 127. So wird aus einem Poti-Wert (0–1023) ein LED-Wert (0–255).',
        wrongExplanations: {
          0: 'Nein, map() rechnet UM — sonst waere die Funktion sinnlos. Aus 512 im Bereich 0-1023 wird proportional ein Wert im Bereich 0-255: rund 127.',
          2: '0 waere nur richtig, wenn der Eingangswert auch 0 waere. 512 liegt in der Mitte des Eingangsbereichs — die Mitte des Zielbereichs ist 127.',
          3: '1023 ist der OBERE Wert des EINGANGS-Bereichs. Das Ergebnis muss aber im ZIEL-Bereich 0-255 liegen — nicht im Eingangsbereich.'
        }
      }
    ]
  },

  // ===================== LEKTION 13 =====================
  {
    id: 13,
    title: 'Lichtsensor (LDR)',
    explanation: {
      html: `
        <h2>Lichtsensor (LDR) – Helligkeit messen</h2>
        <p>In dieser Lektion lernst du einen ganz besonderen Sensor kennen: den <strong>LDR</strong> (Light Dependent Resistor = lichtabhaengiger Widerstand). Er kann messen, wie hell oder dunkel es ist.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Ein LDR funktioniert wie deine <strong>Pupille</strong>. Bei Helligkeit wird sie klein (wenig Licht reinlassen = niedriger Widerstand), bei Dunkelheit wird sie gross (viel Licht reinlassen = hoher Widerstand). Der LDR aendert seinen elektrischen Widerstand je nach Lichteinfall.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Was ist ein LDR?</h3>
          <p>Ein <strong>LDR</strong> ist ein Bauteil, das seinen <strong>Widerstand</strong> abhaengig von der Helligkeit aendert:</p>
          <table class="icon-table">
            <tr><th>Lichtsituation</th><th>Widerstand</th><th>Ergebnis</th></tr>
            <tr><td><strong>Hell</strong> (Sonne, Lampe)</td><td>Niedrig (~1 kOhm)</td><td>Viel Strom fliesst</td></tr>
            <tr><td><strong>Dunkel</strong> (Abend, abgedeckt)</td><td>Hoch (~100 kOhm)</td><td>Wenig Strom fliesst</td></tr>
          </table>
          <p style="margin-top:0.75rem;">Das Problem: Der Arduino kann keinen Widerstand direkt messen – nur <strong>Spannung</strong>. Deshalb brauchen wir einen Trick: den <strong>Spannungsteiler</strong>.</p>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Der Spannungsteiler – So misst der Arduino Licht</h3>
          <p>Ein Spannungsteiler besteht aus <strong>zwei Widerstaenden in Reihe</strong>. Die Spannung "teilt" sich zwischen ihnen auf – je nach Groesse der Widerstaende.</p>

          <div class="analogy-box">
            <strong>Alltagsanalogie:</strong> Stell dir einen <strong>Gartenschlauch mit zwei Knickstellen</strong> vor. Wenn der erste Knick locker ist (wenig Widerstand), kommt viel Wasser am Messpunkt an. Ist der erste Knick fest (viel Widerstand), kommt wenig Wasser an. Genau so teilt sich die Spannung auf.
          </div>

          <p>Fuer den LDR verwenden wir:</p>
          <ul>
            <li><strong>LDR</strong> = variabler Widerstand (aendert sich mit Licht)</li>
            <li><strong>10-kOhm-Widerstand</strong> = fester Widerstand (bleibt immer gleich)</li>
          </ul>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die Schaltung</h3>

          <svg viewBox="0 0 400 300" style="width:100%;max-width:400px;margin:1em auto;display:block;font-family:system-ui;">
            <!-- 5V Label -->
            <text x="200" y="18" text-anchor="middle" font-size="14" font-weight="bold" fill="#C0392B">5V</text>
            <!-- Vertikale Leitung von 5V -->
            <line x1="200" y1="22" x2="200" y2="55" stroke="#C0392B" stroke-width="2.5"/>
            <!-- LDR -->
            <rect x="170" y="55" width="60" height="45" rx="6" fill="#fffde7" stroke="#f9a825" stroke-width="2"/>
            <text x="200" y="78" text-anchor="middle" font-size="12" font-weight="bold" fill="#e65100">LDR</text>
            <text x="200" y="92" text-anchor="middle" font-size="9" fill="#888">variabel</text>
            <!-- Leitung LDR → Knotenpunkt -->
            <line x1="200" y1="100" x2="200" y2="130" stroke="#333" stroke-width="2.5"/>
            <!-- Knotenpunkt (Messpunkt) -->
            <circle cx="200" cy="130" r="5" fill="#2980B9"/>
            <!-- Abzweig zu A0 -->
            <line x1="200" y1="130" x2="310" y2="130" stroke="#2980B9" stroke-width="2.5"/>
            <text x="330" y="135" font-size="13" font-weight="bold" fill="#2980B9">A0</text>
            <!-- 10k Widerstand -->
            <line x1="200" y1="130" x2="200" y2="155" stroke="#333" stroke-width="2.5"/>
            <rect x="170" y="155" width="60" height="45" rx="6" fill="#f5f5f5" stroke="#888" stroke-width="2"/>
            <text x="200" y="178" text-anchor="middle" font-size="11" font-weight="bold" fill="#555">10 kOhm</text>
            <text x="200" y="192" text-anchor="middle" font-size="9" fill="#888">fest</text>
            <!-- Leitung zum GND (verlängert) -->
            <line x1="200" y1="200" x2="200" y2="255" stroke="#333" stroke-width="2.5"/>
            <!-- GND-Erdungssymbol -->
            <line x1="175" y1="257" x2="225" y2="257" stroke="#555" stroke-width="3"/>
            <line x1="182" y1="263" x2="218" y2="263" stroke="#555" stroke-width="2"/>
            <line x1="189" y1="269" x2="211" y2="269" stroke="#555" stroke-width="1"/>
            <!-- GND-Text mit Abstand unter dem Symbol -->
            <text x="200" y="288" text-anchor="middle" font-size="14" font-weight="bold" fill="#555">GND</text>
          </svg>

          <p><strong>Zusammengefasst:</strong></p>
          <ol class="step-list">
            <li><strong>5V</strong> → LDR → <strong>Analoger Pin (A0)</strong> → 10-kOhm-Widerstand → <strong>GND</strong></li>
          </ol>
        </div>

        <div class="info-card">
          <h3>So sieht es auf dem Breadboard aus</h3>
          <svg viewBox="0 0 700 580" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:700px;margin:1em auto;display:block;background:#fdfcf6;border:1px solid #ccc;border-radius:8px;font-family:system-ui,sans-serif;">

            <!-- ===== ARDUINO UNO (oben) ===== -->
            <rect x="80" y="20" width="540" height="100" rx="10" fill="#2176AE" stroke="#1a5f8a" stroke-width="2"/>
            <text x="350" y="48" text-anchor="middle" font-size="14" fill="white" font-weight="bold">Arduino Uno</text>
            <text x="350" y="64" text-anchor="middle" font-size="9" fill="#aad" font-style="italic">LDR-Nachtlicht – Spannungsteiler an A0 + LED an Pin 2</text>

            <rect x="60" y="55" width="20" height="28" rx="2" fill="#aaa" stroke="#888" stroke-width="1"/>
            <text x="70" y="73" text-anchor="middle" font-size="7" fill="#444">USB</text>

            <!-- Pin-Labels -->
            <g font-size="9" font-weight="bold" text-anchor="middle">
              <text x="140" y="93" fill="#ff5555">5V</text>
              <text x="220" y="93" fill="#f90">A0</text>
              <text x="380" y="93" fill="#6f6">LED</text>
              <text x="500" y="93" fill="#ddd">GND</text>
            </g>

            <!-- Pin-Boxen (5V→Sp.5, A0→Sp.9, Pin2→Sp.17, GND→Sp.23) -->
            <g font-size="10" fill="white" font-weight="bold" text-anchor="middle">
              <rect x="125" y="96" width="30" height="22" rx="2" fill="#ff5555" stroke="white" stroke-width="0.5"/>
              <text x="140" y="112">5V</text>
              <rect x="205" y="96" width="30" height="22" rx="2" fill="#f90" stroke="white" stroke-width="0.5"/>
              <text x="220" y="112">A0</text>
              <rect x="365" y="96" width="30" height="22" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/>
              <text x="380" y="112">2</text>
              <rect x="485" y="96" width="30" height="22" rx="2" fill="#333" stroke="white" stroke-width="0.5"/>
              <text x="500" y="112" font-size="9">GND</text>
            </g>

            <!-- ===== KABEL: senkrecht ===== -->
            <!-- 5V → Sp.5 Reihe a (LDR-Anschluss A) -->
            <line x1="140" y1="118" x2="140" y2="240" stroke="#EF4444" stroke-width="2.8" stroke-linecap="round"/>
            <circle cx="140" cy="240" r="3.5" fill="#EF4444" stroke="#800" stroke-width="0.8"/>
            <!-- A0 → Sp.9 (Knotenpunkt LDR+10k) -->
            <line x1="220" y1="118" x2="220" y2="282" stroke="#f90" stroke-width="2.8" stroke-linecap="round"/>
            <circle cx="220" cy="282" r="3.5" fill="#f90" stroke="#c60" stroke-width="0.8"/>
            <!-- Pin 2 → Sp.17 Reihe e (Widerstand-Bein 1 oben, im oberen Block) -->
            <line x1="380" y1="118" x2="380" y2="296" stroke="#0a0" stroke-width="2.8" stroke-linecap="round"/>
            <circle cx="380" cy="296" r="3.5" fill="#0a0" stroke="#040" stroke-width="0.8"/>
            <!-- GND → obere -Schiene Sp.23 -->
            <line x1="500" y1="118" x2="500" y2="210" stroke="#333" stroke-width="2.8" stroke-linecap="round"/>
            <circle cx="500" cy="210" r="3.5" fill="#333"/>

            <!-- BREADBOARD -->
            <rect x="20" y="180" width="660" height="280" rx="6" fill="#e8e0d0" stroke="#999" stroke-width="1.5"/>
            <text x="350" y="472" text-anchor="middle" font-size="9" fill="#444" font-weight="bold">Breadboard (32 Spalten)</text>

            <rect x="50" y="195" width="620" height="9" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="38" y="202" font-size="8" fill="#c00" font-weight="bold">+</text>
            <rect x="50" y="207" width="620" height="9" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="38" y="214" font-size="8" fill="#00c" font-weight="bold">−</text>

            <g font-size="6" fill="#888" text-anchor="middle">
              <text x="60" y="230">1</text><text x="80" y="230">2</text><text x="100" y="230">3</text><text x="120" y="230">4</text><text x="140" y="230">5</text><text x="160" y="230">6</text><text x="180" y="230">7</text><text x="200" y="230">8</text><text x="220" y="230">9</text><text x="240" y="230">10</text><text x="260" y="230">11</text><text x="280" y="230">12</text><text x="300" y="230">13</text><text x="320" y="230">14</text><text x="340" y="230">15</text><text x="360" y="230">16</text><text x="380" y="230">17</text><text x="400" y="230">18</text><text x="420" y="230">19</text><text x="440" y="230">20</text><text x="460" y="230">21</text><text x="480" y="230">22</text><text x="500" y="230">23</text><text x="520" y="230">24</text><text x="540" y="230">25</text><text x="560" y="230">26</text><text x="580" y="230">27</text><text x="600" y="230">28</text><text x="620" y="230">29</text><text x="640" y="230">30</text><text x="660" y="230">31</text>
            </g>

            <g font-size="8" fill="#666" font-style="italic">
              <text x="36" y="244">a</text><text x="36" y="258">b</text><text x="36" y="272">c</text><text x="36" y="286">d</text><text x="36" y="300">e</text>
            </g>
            <g stroke="#aaa" stroke-width="3" stroke-linecap="round" stroke-dasharray="0.1,19.9" fill="none">
              <line x1="60" y1="240" x2="660" y2="240"/>
              <line x1="60" y1="254" x2="660" y2="254"/>
              <line x1="60" y1="268" x2="660" y2="268"/>
              <line x1="60" y1="282" x2="660" y2="282"/>
              <line x1="60" y1="296" x2="660" y2="296"/>
            </g>

            <rect x="50" y="304" width="620" height="12" rx="2" fill="#d0c8b8"/>

            <g font-size="8" fill="#666" font-style="italic">
              <text x="36" y="324">f</text><text x="36" y="338">g</text><text x="36" y="352">h</text><text x="36" y="366">i</text><text x="36" y="380">j</text>
            </g>
            <g stroke="#aaa" stroke-width="3" stroke-linecap="round" stroke-dasharray="0.1,19.9" fill="none">
              <line x1="60" y1="320" x2="660" y2="320"/>
              <line x1="60" y1="334" x2="660" y2="334"/>
              <line x1="60" y1="348" x2="660" y2="348"/>
              <line x1="60" y1="362" x2="660" y2="362"/>
              <line x1="60" y1="376" x2="660" y2="376"/>
            </g>

            <rect x="50" y="389" width="620" height="9" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <rect x="50" y="401" width="620" height="9" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>

            <!-- ===== LDR-SPANNUNGSTEILER (Sp.5-Sp.9-Sp.13) ===== -->
            <rect x="125" y="246" width="200" height="60" rx="4" fill="#ffe8cc" opacity="0.3" stroke="#f90" stroke-width="1" stroke-dasharray="4,2"/>
            <text x="225" y="200" text-anchor="middle" font-size="11" fill="#c60" font-weight="bold" stroke="white" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill">⬇ LDR-Spannungsteiler</text>

            <!-- LDR Anschluss A Sp.5 (5V), Anschluss B Sp.9 (Knoten) -->
            <ellipse cx="180" cy="262" rx="38" ry="10" fill="#ffe066" stroke="#c90" stroke-width="1.5"/>
            <text x="180" y="266" text-anchor="middle" font-size="9" fill="#864" font-weight="bold">LDR</text>
            <!-- Sonnenstrahlen -->
            <line x1="156" y1="252" x2="152" y2="246" stroke="#c90" stroke-width="1"/>
            <line x1="180" y1="248" x2="180" y2="242" stroke="#c90" stroke-width="1"/>
            <line x1="204" y1="252" x2="208" y2="246" stroke="#c90" stroke-width="1"/>
            <circle cx="140" cy="240" r="2.5" fill="#864"/>
            <circle cx="220" cy="240" r="2.5" fill="#864"/>

            <!-- Knotenpunkt (Sp.9) markieren -->
            <circle cx="220" cy="282" r="4" fill="#f90" stroke="#c60" stroke-width="1.2"/>
            <text x="220" y="276" text-anchor="middle" font-size="6" fill="#c60" font-weight="bold">A0-Knoten</text>

            <!-- 10kΩ horizontal Sp.9 ↔ Sp.13 (Reihe c) -->
            <rect x="220" y="292" width="80" height="8" rx="2" fill="#c0a060" stroke="#864" stroke-width="1"/>
            <line x1="232" y1="292" x2="232" y2="300" stroke="#a52" stroke-width="1.2"/>
            <line x1="244" y1="292" x2="244" y2="300" stroke="#c00" stroke-width="1.2"/>
            <line x1="256" y1="292" x2="256" y2="300" stroke="#a52" stroke-width="1.2"/>
            <line x1="268" y1="292" x2="268" y2="300" stroke="#fb0" stroke-width="1.2"/>
            <text x="260" y="290" text-anchor="middle" font-size="6" fill="#654" font-weight="bold">10kΩ</text>
            <circle cx="220" cy="296" r="2.2" fill="#c0a060" stroke="#864" stroke-width="0.8"/>
            <circle cx="300" cy="296" r="2.2" fill="#c0a060" stroke="#864" stroke-width="0.8"/>
            <line x1="300" y1="296" x2="300" y2="212" stroke="#222" stroke-width="1.8" stroke-linecap="round"/>
            <text x="320" y="262" font-size="7" fill="#333" font-style="italic">→ GND</text>

            <!-- ===== LED-Kreis (Sp.17 → Sp.18 → Sp.19, alles im oberen Block, Reihen a-e) ===== -->
            <rect x="372" y="218" width="80" height="84" rx="4" fill="none" stroke="#0a0" stroke-width="1" stroke-dasharray="4,2"/>
            <text x="412" y="200" text-anchor="middle" font-size="11" fill="#080" font-weight="bold" stroke="white" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill">⬇ LED-Nachtlicht</text>

            <!-- 220Ω horizontal Sp.17 → Sp.18, Reihe c (y=268) -->
            <rect x="378" y="264" width="24" height="8" rx="2" fill="#e8d5a3" stroke="#a08050" stroke-width="1"/>
            <line x1="384" y1="264" x2="384" y2="272" stroke="#e53935" stroke-width="1.2"/>
            <line x1="389" y1="264" x2="389" y2="272" stroke="#e53935" stroke-width="1.2"/>
            <line x1="394" y1="264" x2="394" y2="272" stroke="#6d4c41" stroke-width="1.2"/>
            <text x="390" y="262" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">220Ω</text>
            <circle cx="380" cy="268" r="2.2" fill="#e8d5a3" stroke="#864" stroke-width="0.8"/>
            <circle cx="400" cy="268" r="2.2" fill="#e8d5a3" stroke="#864" stroke-width="0.8"/>
            <!-- Bein-Verbindungen: Sp.17 Reihe c → Reihe e (Pin 2 trifft hier), Sp.18 Reihe c → Reihe a (LED-Anode) -->
            <line x1="380" y1="268" x2="380" y2="296" stroke="#864" stroke-width="1.5"/>
            <line x1="400" y1="268" x2="400" y2="240" stroke="#864" stroke-width="1.5"/>
            <!-- LED horizontal Sp.18 (Anode) → Sp.19 (Kathode), Reihe a -->
            <polygon points="398,234 398,246 412,240" fill="#0c0" stroke="#090" stroke-width="1.2"/>
            <line x1="412" y1="234" x2="412" y2="246" stroke="#090" stroke-width="2"/>
            <text x="405" y="222" text-anchor="middle" font-size="7" fill="#090" font-weight="bold">LED</text>
            <circle cx="400" cy="240" r="2.2" fill="#0c0"/>
            <circle cx="420" cy="240" r="2.2" fill="#864"/>
            <!-- Sp.19 → obere -Schiene (GND-Jumper, schwarz Konvention) -->
            <line x1="420" y1="240" x2="420" y2="212" stroke="#222" stroke-width="1.8" stroke-linecap="round"/>
            <circle cx="420" cy="240" r="2.5" fill="#222"/>
            <circle cx="420" cy="212" r="2.5" fill="#222"/>

            <!-- ===== LEGENDE ===== -->
            <rect x="20" y="475" width="660" height="80" rx="6" fill="#fff" stroke="#ddd" stroke-width="1"/>
            <text x="32" y="495" font-size="10" fill="#333" font-weight="bold">Legende – LDR-Nachtlicht:</text>
            <text x="32" y="513" font-size="9" fill="#555">► LDR-Spannungsteiler: 5V → Sp.5 → LDR → Sp.9 (A0-Knoten) → 10kΩ → Sp.13 → GND-Schiene</text>
            <text x="32" y="528" font-size="9" fill="#555">► LED-Kreis: Pin 2 → Sp.17 → 220Ω → Sp.18 → LED Anode → LED Kathode → Sp.19 → GND-Schiene</text>
            <text x="32" y="545" font-size="9" fill="#666" font-style="italic">► Hell → LDR-Widerstand sinkt → A0-Wert steigt (~920) | Dunkel → A0-Wert sinkt (~100)</text>
          </svg>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Was misst der Arduino?</h3>
          <p>Der Arduino misst die Spannung am <strong>Knotenpunkt</strong> zwischen LDR und 10-kOhm-Widerstand:</p>
          <table class="icon-table">
            <tr><th>Lichtsituation</th><th>LDR-Widerstand</th><th>Spannung an A0</th><th>analogRead()-Wert</th></tr>
            <tr><td><strong>Hell</strong></td><td>Niedrig (~1 kOhm)</td><td>Hoch (~4,5V)</td><td><strong>Hoch</strong> (~920)</td></tr>
            <tr><td><strong>Dunkel</strong></td><td>Hoch (~100 kOhm)</td><td>Niedrig (~0,5V)</td><td><strong>Niedrig</strong> (~100)</td></tr>
          </table>
        </div>

        <div class="tip-box">
          <strong>Merke:</strong> Bei dieser Schaltung gilt: <strong>Hell = hoher Wert, Dunkel = niedriger Wert</strong>. Das ist logisch: Bei Helligkeit wird der LDR-Widerstand klein, also faellt fast die ganze Spannung ueber dem unteren 10-kOhm-Widerstand ab &ndash; und genau die misst der Arduino an A0. (In der Reihenschaltung fliesst durch beide Bauteile derselbe Strom; entscheidend ist, wie sich die Spannung aufteilt.)
        </div>

        <hr class="section-divider">

        <div class="code-card">
          <h4>LDR AUSLESEN + SERIAL MONITOR</h4>
          <pre><code><span class="keyword">int</span> ldrPin = <span class="value">A0</span>;     <span class="comment">// LDR an Analog-Pin A0</span>
<span class="keyword">int</span> ldrWert;          <span class="comment">// Variable fuer den Messwert</span>

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">Serial.begin</span>(<span class="value">9600</span>);  <span class="comment">// Serial Monitor starten</span>
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  ldrWert = <span class="function">analogRead</span>(ldrPin);  <span class="comment">// Lichtwert lesen</span>

  <span class="function">Serial.print</span>(<span class="value">"Helligkeit: "</span>);
  <span class="function">Serial.println</span>(ldrWert);       <span class="comment">// Wert anzeigen</span>

  <span class="function">delay</span>(<span class="value">300</span>);  <span class="comment">// 3x pro Sekunde messen</span>
}</code></pre>
        </div>

        <div class="warning-box">
          <strong>Wichtig – Vorbereitung fuer dein Pruefungsprojekt!</strong><br>
          Der LDR und der Spannungsteiler sind die Grundlage fuer die <strong>Nachtabschaltung</strong> in deinem Pruefungsprojekt. In der naechsten Lektion lernst du, wie du mit <code>if/else</code> automatisch auf die Lichtwerte reagierst – z.B. eine LED einschalten, wenn es dunkel wird!
        </div>
      `
    },
    example: {
      title: 'Beispiel: LDR-Schaltung aufbauen und testen',
      steps: [
        { label: 'Bauteile bereitlegen', html: 'Du brauchst: <strong>1x LDR</strong>, <strong>1x 10-kOhm-Widerstand</strong> (Farbcode: Braun-Schwarz-Orange) und <strong>Verbindungskabel</strong>.' },
        { label: 'Schaltung aufbauen', html: 'Verbinde auf dem Breadboard: <strong>5V → LDR → Knotenpunkt</strong>. Vom Knotenpunkt geht ein Kabel zu <strong>A0</strong> und der <strong>10-kOhm-Widerstand zu GND</strong>.' },
        { label: 'Code hochladen', html: 'Gib den Code ein und lade ihn hoch. Oeffne den Serial Monitor mit 9600 Baud.' },
        { label: 'Licht testen', html: 'Halte den LDR ins Licht → <strong>hohe Werte</strong> (700–1000). Decke ihn mit der Hand ab → <strong>niedrige Werte</strong> (50–200). Notiere dir typische Werte – du brauchst sie fuer die naechste Lektion!' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was passiert mit dem Widerstand eines LDR, wenn es dunkler wird?',
        options: [
          'Der Widerstand wird niedriger',
          'Der Widerstand wird hoeher',
          'Der Widerstand bleibt gleich',
          'Der LDR geht kaputt'
        ],
        correct: 1,
        explanation: 'Richtig! Bei Dunkelheit steigt der Widerstand des LDR stark an (bis zu 100 kOhm oder mehr). Bei Helligkeit sinkt er auf wenige kOhm. Deshalb heisst er auch "lichtabhaengiger Widerstand".',
        wrongExplanations: {
          0: 'Andersrum: Bei DUNKELHEIT steigt der LDR-Widerstand stark an (bis ueber 100 kOhm). Hell = wenig Widerstand, dunkel = viel Widerstand.',
          2: 'Doch, der LDR aendert seinen Widerstand mit dem Licht — genau das macht ihn zum Sensor. Bliebe er konstant, koennte man Helligkeit nicht messen.',
          3: 'Nein, der LDR ist sehr robust und dafuer gebaut, sich staendig zu aendern. Kaputt geht da nichts.'
        }
      },
      {
        type: 'matching',
        question: 'Ordne die Teile der LDR-Schaltung richtig zu:',
        pairs: [
          { left: '5V', right: 'An ein Ende des LDR' },
          { left: 'A0', right: 'Knotenpunkt zwischen LDR und Widerstand' },
          { left: '10-kOhm-Widerstand', right: 'Zwischen Knotenpunkt und GND' },
          { left: 'GND', right: 'Am Ende des festen Widerstands' }
        ],
        explanation: 'Das ist ein Spannungsteiler: 5V geht an den LDR, der feste 10-kOhm-Widerstand liegt zwischen Knotenpunkt und GND. Genau in der Mitte &ndash; am Knotenpunkt zwischen beiden &ndash; greift A0 die Spannung ab. Aendert sich die Helligkeit, aendert sich der LDR-Widerstand und damit die Spannung an A0, die der Arduino misst.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum braucht man den 10-kOhm-Widerstand in der LDR-Schaltung?',
        options: [
          'Damit der LDR nicht kaputt geht',
          'Um einen Spannungsteiler zu bilden, damit der Arduino eine messbare Spannung bekommt',
          'Um die LED zu schuetzen',
          'Der Widerstand ist optional und kann weggelassen werden'
        ],
        correct: 1,
        explanation: 'Genau! Der Arduino kann keinen Widerstand direkt messen, nur Spannung. Der feste 10-kOhm-Widerstand bildet zusammen mit dem LDR einen Spannungsteiler. Die Spannung am Knotenpunkt aendert sich je nach Helligkeit – und genau diese Spannung misst der Arduino.',
        wrongExplanations: {
          0: 'Der LDR braucht keinen Schutz — er ist robust und vertraegt 5 V direkt. Der 10-kOhm ist sein MESS-PARTNER im Spannungsteiler, kein Schutzwiderstand.',
          2: 'Die LED liegt in einem separaten Stromkreis. Der 10-kOhm-Widerstand sitzt in der Sensor-Schaltung und hat mit der LED nichts zu tun.',
          3: 'Doch, der Widerstand ist Pflicht. Ohne ihn liegt am A0-Pin entweder 0 V oder 5 V — und der Arduino bekaeme keinen Helligkeits-Verlauf zu sehen.'
        }
      }
    ]
  },

  // ===================== LEKTION 16 (NTC, id 31) =====================
  // RSAP-Pflicht-Lektion: NTC taucht in mehreren Pool-Aufgaben auf
  // (Temperaturanzeige, Gewaechshaus, Lueftung). Baut direkt auf L11
  // Spannungsteiler auf. Diese Lektion zeigt nur den Sensor +
  // analogRead-Auslesen. Die Kombination Sensor->Aktor (LED schalten
  // bei Schwellwert) folgt in der naechsten Lektion (Entscheidungen).
  {
    id: 31,
    title: 'NTC-Temperatursensor',
    explanation: {
      html: `
        <h2>NTC &ndash; Wenn Hitze den Widerstand schmelzen laesst</h2>
        <p>Du kennst jetzt zwei analoge Sensoren: das Potentiometer (Drehung) und den LDR (Helligkeit). Jetzt kommt der dritte im Bunde: der <strong>NTC</strong>. Er misst <strong>Temperatur</strong> &ndash; und steckt in jedem Backofen-Thermometer, in deiner Heizung, sogar in deinem Smartphone-Akku.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Stell dir ein Schokoladenstueck an einem heissen Sommertag vor. Im Kuehlschrank ist es hart (= grosser Widerstand). Auf der Hand wird es weich, fast fluessig (= kleiner Widerstand). Ein NTC funktioniert genauso: kalt &rarr; "hart" &rarr; grosser Widerstand. Heiss &rarr; "weich" &rarr; kleiner Widerstand.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Was bedeutet "NTC"?</h3>
          <p>NTC ist die englische Abkuerzung fuer <strong>N</strong>egative <strong>T</strong>emperature <strong>C</strong>oefficient. Auf deutsch: <strong>negativer Temperaturkoeffizient</strong> &ndash; also ein <strong>negativer Zusammenhang</strong> zwischen Temperatur und Widerstand (Temperatur hoch &rarr; Widerstand runter).</p>
          <table class="icon-table">
            <tr><th>Temperatur</th><th>Widerstand</th><th>Eselsbruecke</th></tr>
            <tr><td><strong>kalt</strong></td><td>hoch</td><td>"kalt = klemmt"</td></tr>
            <tr><td><strong>warm</strong></td><td>mittel</td><td>Zimmer = Nennwert (z.B. 10 k&Omega;)</td></tr>
            <tr><td><strong>heiss</strong></td><td>niedrig</td><td>"heiss = haut ab"</td></tr>
          </table>

          <div class="tip-box">
            <strong>Gegenstueck:</strong> Es gibt auch <strong>PTC-</strong>Widerstaende (<strong>P</strong>ositiver Temperatur-Koeffizient). Bei denen ist es umgekehrt &ndash; je waermer, desto hoeher der Widerstand. Im Arduino-Unterricht arbeiten wir aber fast immer mit NTCs.
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die typische NTC-Kennlinie (10 k&Omega; NTC)</h3>
          <p>Ein "10 k&Omega; NTC" hat seinen <strong>Nennwiderstand</strong> bei 25&nbsp;&deg;C &ndash; also Zimmertemperatur. Bei anderen Temperaturen sieht es ungefaehr so aus:</p>

          <table class="icon-table">
            <tr><th>Temperatur</th><th>Widerstand (ca.)</th><th>Was bedeutet das?</th></tr>
            <tr><td>0&nbsp;&deg;C</td><td>33 k&Omega;</td><td>Eiswuerfel-Test</td></tr>
            <tr><td>25&nbsp;&deg;C</td><td><strong>10 k&Omega;</strong></td><td>Zimmertemperatur (Nennwert)</td></tr>
            <tr><td>50&nbsp;&deg;C</td><td>3,6 k&Omega;</td><td>Heisses Wasser-Glas</td></tr>
            <tr><td>100&nbsp;&deg;C</td><td>1 k&Omega;</td><td>Kochend (achtung, nicht in echt machen!)</td></tr>
          </table>

          <div class="warning-box">
            <strong>Vorsicht im Unterricht:</strong> Klassische NTC-Bauteile (klein, schwarz, mit zwei langen Beinchen) vertragen Zimmertemperatur + Finger-Erwaermung problemlos. Aber sie sind <strong>keine Kochthermometer</strong> &ndash; nicht ins heisse Wasser oder gar in die Flamme halten!
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Vom Widerstand zur Spannung &ndash; der Spannungsteiler</h3>
          <p>Der Arduino kann <strong>keinen Widerstand</strong> direkt messen &ndash; nur Spannung. Also brauchen wir wieder unseren alten Freund aus Lektion 11: den <strong>Spannungsteiler</strong>.</p>

          <p>Wir bauen den NTC als <strong>untere</strong> Haelfte (R<sub>2</sub>) des Spannungsteilers, oben kommt ein fester 10-k&Omega;-Widerstand (R<sub>1</sub>). Der Mittelpunkt geht an Pin <code>A0</code> des Arduino:</p>

          <svg viewBox="0 0 460 280" style="width:100%;max-width:400px;margin:1em auto;display:block;font-family:system-ui;">
            <rect x="0" y="0" width="460" height="280" rx="8" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>

            <!-- +5V oben -->
            <line x1="170" y1="20" x2="170" y2="55" stroke="#222" stroke-width="2"/>
            <circle cx="170" cy="20" r="4" fill="#C0392B"/>
            <text x="155" y="25" text-anchor="end" font-size="12" font-weight="bold" fill="#C0392B">+5 V</text>

            <!-- R1 fest (Rechteck) -->
            <rect x="150" y="55" width="40" height="50" fill="white" stroke="#222" stroke-width="2"/>
            <text x="210" y="78" font-size="13" font-weight="bold" fill="#222">R<tspan font-size="10" baseline-shift="sub">1</tspan> = 10 k&#937;</text>
            <text x="210" y="93" font-size="10" fill="#666">(fester Widerstand)</text>

            <!-- Mittelpunkt -->
            <line x1="170" y1="105" x2="170" y2="140" stroke="#222" stroke-width="2"/>
            <circle cx="170" cy="125" r="4" fill="#2980B9"/>
            <line x1="170" y1="125" x2="320" y2="125" stroke="#2980B9" stroke-width="2"/>
            <text x="330" y="130" font-size="13" font-weight="bold" fill="#2980B9">A0 (Arduino)</text>

            <!-- NTC-Symbol: Rechteck mit Schraegstrich + "t" -->
            <rect x="150" y="140" width="40" height="50" fill="white" stroke="#222" stroke-width="2"/>
            <line x1="150" y1="190" x2="190" y2="140" stroke="#E67E22" stroke-width="2"/>
            <text x="200" y="167" font-size="11" font-weight="bold" fill="#E67E22">t&deg;</text>
            <text x="225" y="167" font-size="13" font-weight="bold" fill="#222">R<tspan font-size="10" baseline-shift="sub">2</tspan> = NTC</text>
            <text x="225" y="182" font-size="10" fill="#666">(temperaturabhaengig)</text>

            <!-- GND -->
            <line x1="170" y1="190" x2="170" y2="225" stroke="#222" stroke-width="2"/>
            <line x1="155" y1="225" x2="185" y2="225" stroke="#222" stroke-width="2.5"/>
            <line x1="160" y1="232" x2="180" y2="232" stroke="#222" stroke-width="2"/>
            <line x1="165" y1="239" x2="175" y2="239" stroke="#222" stroke-width="2"/>
            <text x="195" y="230" font-size="12" fill="#222">GND</text>

            <!-- Beschriftung U2 -->
            <text x="50" y="125" font-size="11" font-weight="bold" fill="#888">U<tspan font-size="9" baseline-shift="sub">2</tspan> = Sensor-</text>
            <text x="50" y="140" font-size="11" font-weight="bold" fill="#888">spannung</text>
            <line x1="120" y1="125" x2="165" y2="125" stroke="#888" stroke-width="1" stroke-dasharray="3 2"/>
          </svg>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Was misst der Arduino bei verschiedenen Temperaturen?</h3>
          <p>Der Arduino wandelt die Sensor-Spannung U<sub>2</sub> ueber den <strong>AD-Wandler</strong> in einen Zahlenwert zwischen 0 und 1023. Mit unserer Schaltung (R<sub>1</sub>&nbsp;=&nbsp;10&nbsp;k&Omega;, NTC = R<sub>2</sub>) ergeben sich diese ungefaehren Werte:</p>

          <table class="icon-table">
            <tr><th>Temperatur</th><th>NTC R<sub>2</sub></th><th>U<sub>2</sub></th><th>analogRead-Wert</th></tr>
            <tr><td>0&nbsp;&deg;C (kalt)</td><td>33 k&Omega;</td><td>3,84 V</td><td><strong>~ 786</strong></td></tr>
            <tr><td>25&nbsp;&deg;C (Zimmer)</td><td>10 k&Omega;</td><td>2,50 V</td><td><strong>~ 511</strong></td></tr>
            <tr><td>50&nbsp;&deg;C (warm)</td><td>3,6 k&Omega;</td><td>1,32 V</td><td><strong>~ 270</strong></td></tr>
            <tr><td>100&nbsp;&deg;C (sehr heiss)</td><td>1 k&Omega;</td><td>0,45 V</td><td><strong>~ 92</strong></td></tr>
          </table>

          <div class="tip-box">
            <strong>Merksatz:</strong> <em>Heisser Sensor, kleiner Zahlenwert.</em> Das ist die wichtigste Faustregel fuer das Programmieren. Du wirst in der naechsten Lektion damit Entscheidungen treffen (&bdquo;Wenn analogRead unter 300 &rarr; LED an").
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Wofuer braucht man NTCs in der Pruefung?</h3>
          <p>In der Realschulabschlusspruefung (RSAP) Technik BW tauchen NTCs in mehreren Aufgaben auf:</p>
          <ul>
            <li><strong>Temperaturanzeige mit RGB-LED:</strong> Rot bei Hitze, blau bei Kaelte, gruen bei Wohlfuehltemperatur.</li>
            <li><strong>Gewaechshaus-Lueftung:</strong> Wenn es zu heiss wird, oeffnet ein Servomotor das Dachfenster.</li>
            <li><strong>Lueftungs-Steuerung:</strong> Bei Hitze startet ein DC-Motor (Luefter).</li>
          </ul>
          <p>Alle drei beginnen mit dem gleichen Grundbaustein: <strong>NTC im Spannungsteiler &rarr; analogRead</strong>. Wenn du <em>diese</em> Lektion verstanden hast, hast du den Sensor-Teil all dieser Aufgaben schon im Griff.</p>
        </div>
      `
    },
    example: {
      title: 'Was passiert in der Schaltung, wenn der NTC warm wird?',
      steps: [
        {
          label: 'Ausgangslage: Zimmertemperatur (25 &deg;C)',
          html: `
            <p>Du baust die NTC-Schaltung wie oben gezeigt auf. Der Raum hat normale Zimmertemperatur. Der NTC hat in diesem Zustand seinen <strong>Nennwert von 10 k&Omega;</strong>. Damit ist die Schaltung ein <strong>symmetrischer Spannungsteiler</strong>:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
R<sub>1</sub> = 10 k&Omega; (fest)
R<sub>2</sub> = 10 k&Omega; (NTC bei 25 &deg;C)
U<sub>2</sub> = 5 V &middot; 10 / (10 + 10) = <strong>2,5 V</strong>
analogRead &asymp; 2,5 V &middot; 1023 / 5 V &asymp; <strong>511</strong></pre>
            <p>Im Serial Monitor steht: <code>511</code> (mit kleinen Schwankungen, z.&nbsp;B. 508, 513).</p>
          `
        },
        {
          label: 'Du legst den Finger auf den NTC',
          html: `
            <p>Dein Finger hat ca. 35&nbsp;&deg;C. Der NTC erwaermt sich und sein Widerstand <strong>sinkt</strong> auf ca. 7 k&Omega;:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #E67E22;">
R<sub>1</sub> = 10 k&Omega; (fest)
R<sub>2</sub> = 7 k&Omega; (NTC bei 35 &deg;C)
U<sub>2</sub> = 5 V &middot; 7 / (10 + 7) = 5 V &middot; 7/17 &asymp; <strong>2,06 V</strong>
analogRead &asymp; <strong>421</strong></pre>
            <p>Der Wert <strong>sinkt</strong> von 511 auf etwa 421. Das ist im Serial Monitor sofort sichtbar.</p>
          `
        },
        {
          label: 'Du atmest ihn an oder hauchst direkt drauf (~ 50 &deg;C)',
          html: `
            <p>Bei einem warmen Atemzug oder Foen-Hauch erhitzt sich der NTC auf etwa 50&nbsp;&deg;C. Sein Widerstand sinkt drastisch auf ca. 3,6 k&Omega;:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #C0392B;">
R<sub>2</sub> = 3,6 k&Omega; (NTC bei 50 &deg;C)
U<sub>2</sub> = 5 V &middot; 3,6 / 13,6 &asymp; <strong>1,32 V</strong>
analogRead &asymp; <strong>270</strong></pre>
            <p>Der Wert fiel deutlich. Heiss = kleiner Zahlenwert.</p>
          `
        },
        {
          label: 'NTC abkuehlen lassen (z.B. Eiswuerfel danebenhalten)',
          html: `
            <p>Wenn du den NTC vorsichtig <strong>abkuehlst</strong> (Eiswuerfel in der Hand 10&nbsp;cm daneben halten, NICHT direkt drauf!), steigt sein Widerstand &uuml;ber den Nennwert:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
R<sub>2</sub> = 20 k&Omega; (NTC bei 10 &deg;C)
U<sub>2</sub> = 5 V &middot; 20 / 30 &asymp; <strong>3,33 V</strong>
analogRead &asymp; <strong>682</strong></pre>
            <p>Der Wert <strong>steigt</strong>. Kalt = groesserer Zahlenwert. Genau dieses Verhalten kannst du in der naechsten Lektion mit <code>if</code>-Abfragen ausnutzen: <em>"Wenn Wert &lt; 300, schalte die LED ein."</em></p>
          `
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wofuer steht die Abkuerzung NTC?',
        options: [
          'New Temperature Control',
          'Negative Temperature Coefficient (Negativer Temperaturkoeffizient)',
          'Normal Temperature Component',
          'Niedrige Temperatur-Charakteristik'
        ],
        correct: 1,
        explanation: 'Richtig! NTC = Negative Temperature Coefficient. "Negativ" bedeutet hier: Temperatur und Widerstand verhalten sich gegensaetzlich &ndash; steigt das eine, sinkt das andere.',
        wrongExplanations: {
          0: 'Nein, das klingt zwar plausibel, ist aber ein Fantasie-Name. Achte in der Fachsprache immer auf den Begriff "Coefficient" (Koeffizient).',
          2: 'Nein, das gibt es so nicht. Wichtig ist das Wort "Coefficient" (Koeffizient), nicht "Component".',
          3: 'Nein, die Abkuerzung kommt aus dem Englischen, nicht aus dem Deutschen.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Wie veraendert sich der Widerstand eines NTC, wenn die Temperatur steigt?',
        options: [
          'Er wird groesser',
          'Er wird kleiner',
          'Er bleibt gleich',
          'Er wird negativ'
        ],
        correct: 1,
        explanation: 'Richtig! Bei steigender Temperatur sinkt der Widerstand eines NTC. Eselsbruecke: "Heiss = haut ab" (der Widerstand schmilzt davon).',
        wrongExplanations: {
          0: 'Das waere ein PTC (Positiver Temperaturkoeffizient) &ndash; den gibt es auch, aber er ist im Arduino-Unterricht selten. Beim NTC ist es genau umgekehrt.',
          2: 'Wenn er gleich bliebe, koennte man damit keine Temperatur messen. Der ganze Witz ist gerade die Veraenderung.',
          3: 'Widerstaende sind immer positiv. "Negativ" im Namen NTC bezieht sich auf den Zusammenhang Temp&harr;Widerstand, nicht auf den Widerstandswert selbst.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Du baust einen Spannungsteiler mit NTC als R2 (unten) und 10 kOhm fest als R1 (oben). Was passiert mit der Spannung U2 (am NTC) und damit dem analogRead-Wert, wenn der NTC erwaermt wird?',
        options: [
          'U2 steigt &rarr; analogRead steigt',
          'U2 sinkt &rarr; analogRead sinkt',
          'U2 bleibt konstant',
          'analogRead springt auf 0'
        ],
        correct: 1,
        explanation: 'Richtig! NTC waermer &rarr; R2 sinkt &rarr; kleinerer Anteil im Spannungsteiler &rarr; U2 sinkt &rarr; analogRead-Wert wird kleiner. Daraus folgt der wichtige Merksatz: "Heisser Sensor, kleiner Zahlenwert."',
        wrongExplanations: {
          0: 'Nein, andersrum: R2 sinkt &rarr; U2 sinkt &rarr; analogRead sinkt. Die Spannung folgt dem Widerstand.',
          2: 'Konstant kann sie nicht sein &ndash; sonst gaebe es ja keine Messung. Der NTC aendert sein R, also auch U2.',
          3: 'analogRead wuerde nur dann auf 0 springen, wenn U2 = 0 V (also R2 = 0). Bei normalen Temperaturen liegt der NTC zwischen 1 k&Omega; und 100 k&Omega;, U2 ist also immer zwischen 0,4 V und 4,5 V.'
        }
      },
      {
        type: 'matching',
        question: 'Ordne die Temperatur dem ungefaehren analogRead-Wert zu (Schaltung: NTC unten + 10kOhm fest oben).',
        pairs: [
          { left: '0 °C (Eiswuerfel)', right: '~ 786 (sehr hoch)' },
          { left: '25 °C (Zimmertemperatur)', right: '~ 511 (mittig)' },
          { left: '50 °C (Tasse heisses Wasser danebenhalten)', right: '~ 270 (klein)' },
          { left: '100 °C (kochend, NICHT in echt machen)', right: '~ 92 (sehr klein)' }
        ],
        explanation: 'Bei dieser Schaltung sitzt der NTC unten (= R2). Je waermer er wird, desto kleiner sein Widerstand &rarr; desto kleiner U2 &rarr; desto kleiner der analogRead-Wert. Deshalb gehoert zu 0 &deg;C der hohe Wert (~786) und zu 100 &deg;C der kleine (~92). Merksatz: heisser Sensor, kleiner Zahlenwert.'
      },
      {
        type: 'multiple-choice',
        question: 'Im Serial Monitor liest du folgenden Wert ab: analogRead = 80. Was bedeutet das fuer die Temperatur am NTC (Schaltung: NTC unten + 10kOhm fest oben)?',
        options: [
          'Der NTC ist sehr kalt',
          'Der NTC hat ungefaehr Zimmertemperatur',
          'Der NTC ist sehr heiss',
          'Der NTC ist defekt (Kurzschluss)'
        ],
        correct: 2,
        explanation: 'Richtig! Ein analogRead-Wert um 80 entspricht einer NTC-Temperatur von ca. 100 &deg;C. Merke: kleiner Zahlenwert = heisser Sensor.',
        wrongExplanations: {
          0: 'Sehr kalt waere ein grosser Wert (Richtung 800-1000). Hier ist es genau umgekehrt.',
          1: 'Zimmertemperatur liegt bei ungefaehr 511 (mittig). 80 ist deutlich darunter.',
          3: 'Bei einem Kurzschluss waere der Wert exakt 0 oder exakt 1023. 80 ist plausibel und entspricht einer realen Temperatur.'
        }
      }
    ],
    // === Praxis-Tab (Tab 4) ===
    // Erst-Kontakt mit dem NTC: Schaltung aufbauen, Serial Monitor
    // beobachten, mit dem Finger waermen. Schwellwert-Steuerung mit
    // LED kommt erst in der NAECHSTEN Lektion (Entscheidungen mit
    // Sensorwerten). So bleibt der Praxis-Teil hier fokussiert auf
    // "Sensor verstehen und auslesen".
    praxis: {
      aufgabe: {
        titel: 'NTC-Werte im Serial Monitor beobachten',
        auftrag: '<p>Baue einen NTC-Spannungsteiler an Pin <code>A0</code> des Arduino. Schreibe ein Programm, das den NTC alle halbe Sekunde ausliest und den Wert im <strong>Serial Monitor</strong> ausgibt.</p><p><strong>Deine drei Aufgaben:</strong></p><ol><li><strong>Hardware:</strong> Baue die Schaltung nach dem Schaltplan auf. Achtung: NTC kommt nach <strong>unten</strong>, der feste 10-k&Omega;-Widerstand nach oben.</li><li><strong>Software:</strong> Vervollstaendige das Code-Geruest unten. Lade es auf den Arduino.</li><li><strong>Beobachten:</strong> Oeffne den Serial Monitor (Werkzeuge &rarr; Serial Monitor, 9600 Baud) und beobachte den Wert. Halte dann den Finger auf den NTC &ndash; was passiert mit dem Wert?</li></ol>',
        lernziel: 'Du kannst einen NTC als Spannungsteiler an einen analogen Pin anschliessen, den Wert mit <code>analogRead()</code> auslesen und mit <code>Serial.println()</code> beobachten. Du verstehst, dass <em>heisser Sensor = kleiner Zahlenwert</em>.'
      },
      bauteile: [
        { name: 'Arduino Uno', anzahl: 1 },
        { name: 'Steckbrett (Breadboard)', anzahl: 1 },
        { name: 'NTC 10 kΩ', anzahl: 1, hinweis: 'Klein, schwarz, mit 2 langen Beinchen. Beine sind nicht gepolt &ndash; beliebige Reihenfolge.' },
        { name: 'Widerstand 10 kΩ', anzahl: 1, hinweis: 'Farbcode: braun-schwarz-orange' },
        { name: 'Jumper-Kabel', anzahl: 3, hinweis: 'rot (5V), schwarz (GND), gelb/gruen fuer A0' },
        { name: 'USB-Kabel', anzahl: 1, hinweis: 'Fuer Strom + Serial Monitor' }
      ],
      anschluss: {
        svg: `
          <figure class="schaltbild-figur">
            <figcaption><strong>1. Schaltplan</strong> &mdash; so funktioniert die Schaltung elektrisch:</figcaption>
            <img src="assets/lektion-31-ntc-schaltplan.svg?v=4" alt="Schaltplan NTC-Temperatursensor: 5V - 10k-Widerstand - A0-Abgriff - NTC - GND" style="max-width: 100%; height: auto;" />
          </figure>
          <figure class="schaltbild-figur">
            <figcaption><strong>2. Aufbau am Steckbrett</strong> &mdash; so sieht der echte Aufbau aus:</figcaption>
            <img src="assets/lektion-31-ntc-aufbau.svg?v=5" alt="Steckbrett-Aufbau NTC: fester 10k-Widerstand und NTC in Reihe zwischen 5V und GND, Mittelpunkt an A0" style="max-width: 100%; height: auto;" />
          </figure>`,
        schritte: [
          'Stecke das <strong>rote Jumper-Kabel</strong> in den <strong>5V-Pin</strong> des Arduino und das andere Ende in die <strong>+Schiene</strong> oben am Breadboard.',
          'Stecke das <strong>schwarze Jumper-Kabel</strong> in einen <strong>GND-Pin</strong> des Arduino und das andere Ende in die <strong>&minus;Schiene</strong> oben am Breadboard.',
          'Stecke den <strong>10&nbsp;k&Omega;-Widerstand (R<sub>1</sub>, fest)</strong> waagrecht ein: ein Bein in die <strong>+Schiene</strong>, das andere Bein in Loch <code>c5</code>.',
          'Stecke den <strong>NTC</strong> senkrecht ein: ein Beinchen in Loch <code>a5</code> (gleiche Spalte wie c5 &rarr; elektrisch verbunden = Mittelpunkt), das andere Beinchen in die <strong>&minus;Schiene</strong> (GND).',
          'Verbinde mit einem <strong>gelben oder gruenen Jumper-Kabel</strong> den <strong>Mittelpunkt</strong> (z.B. Loch <code>b5</code>, gleiche Spalte wie der NTC- und der R-Anschluss) mit Pin <code>A0</code> am Arduino.',
          'Schliesse den Arduino mit dem USB-Kabel an den Computer an. Lade dein Programm hoch (Pfeil-nach-rechts-Symbol in der IDE).',
          'Oeffne den <strong>Serial Monitor</strong> (Werkzeuge &rarr; Serial Monitor oder Lupe-Symbol oben rechts in der IDE). Stelle unten rechts <code>9600 Baud</code> ein. Es sollten Zahlen zwischen 0 und 1023 erscheinen, alle 500 ms eine neue.',
          'Halte deinen <strong>Finger</strong> direkt auf den NTC. Beobachte: Der Wert <strong>sinkt</strong>. Lass los und warte 30 Sekunden &ndash; der Wert <strong>steigt</strong> wieder zurueck.'
        ]
      },
      code_hinweise: {
        geruest:
`const int NTC_PIN = A0;

void setup() {
  // TODO: Serial-Verbindung starten mit 9600 Baud
  // Tipp: Serial.begin(?);
}

void loop() {
  // TODO: NTC-Wert auslesen und in einer Variablen speichern
  // Tipp: int wert = analogRead(?);

  // TODO: Wert im Serial Monitor ausgeben
  // Tipp: Serial.println(?);

  delay(500); // halbe Sekunde warten, dann naechste Messung
}`,
        tipps: [
          'Der Pin <code>A0</code> ist als Konstante <code>NTC_PIN</code> schon oben definiert &ndash; benutze sie statt der Zahl A0 direkt.',
          'Im <code>setup()</code> rufst du <code>Serial.begin(9600)</code> nur EINMAL auf. Im <code>loop()</code> brauchst du es nicht.',
          'Wenn du nur Serial.print statt Serial.println verwendest, kleben alle Werte in einer Zeile aneinander. Mit <strong>ln</strong> ist es eine Zeile pro Wert &ndash; viel besser lesbar.',
          'Falls der Serial Monitor leer bleibt: Pruefe die Baudrate (unten rechts muss 9600 stehen) und ob das richtige Board und der richtige Port in der IDE ausgewaehlt sind.'
        ]
      },
      loesung: {
        code:
`const int NTC_PIN = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int wert = analogRead(NTC_PIN);
  Serial.println(wert);
  delay(500);
}`,
        erklaerung: '<p>Im <code>setup()</code> wird die Serial-Verbindung mit 9600 Baud gestartet &ndash; das ist die "Geschwindigkeit" der Datenuebertragung zwischen Arduino und PC. 9600 ist der ueblichste Wert im Unterricht.</p><p>In der <code>loop()</code> liest <code>analogRead(NTC_PIN)</code> den Spannungspegel am Pin A0 und wandelt ihn in einen Zahlenwert zwischen 0 und 1023 um. Dieser Wert landet in der Variablen <code>wert</code> und wird mit <code>Serial.println()</code> an den PC geschickt. Das <code>delay(500)</code> sorgt fuer eine halbe Sekunde Pause, damit die Anzeige im Serial Monitor nicht zu schnell scrollt.</p><p><strong>Erwartete Werte (Zimmertemperatur 22-25 &deg;C):</strong> ca. 480-540 &ndash; je nach Raumtemperatur, exaktem NTC-Modell und USB-Versorgungsspannung. Bei Finger-Erwaermung sinkt der Wert in 5-10 Sekunden um 50-150 Einheiten.</p>',
        haeufige_fehler: [
          '<strong>Serial Monitor zeigt nichts:</strong> Falscher Port (Werkzeuge &rarr; Port) oder falsches Board (Werkzeuge &rarr; Board) ausgewaehlt. Auch pruefen: Stimmt die Baudrate (9600) im Monitor mit der im Code (Serial.begin(9600)) ueberein?',
          '<strong>Wert ist immer 0:</strong> Mittelpunkt des Spannungsteilers ist nicht mit A0 verbunden &ndash; oder das Mittelpunkt-Kabel steckt versehentlich in GND.',
          '<strong>Wert ist immer 1023:</strong> Mittelpunkt ist direkt mit 5V verbunden &ndash; meistens steckt das A0-Kabel an der falschen Stelle, oder der NTC ist nicht angeschlossen (offene Leitung &rarr; floating &rarr; analogRead liefert wirres Zeug, aber tendenziell hoch).',
          '<strong>Wert wackelt extrem (z.B. 200, 800, 50, 950 ...):</strong> Verbindung am Mittelpunkt ist nicht gesteckt (loses Kabel). Pin "schwimmt" elektrisch.',
          '<strong>Wert reagiert kaum auf Finger:</strong> Du hast eventuell einen falschen Sensor (PTC statt NTC, oder einen anderen Festwiderstand) eingebaut. Pruefe die Bauteile-Box: NTC sind meist klein-schwarz mit Aufdruck, einfache Widerstaende haben Farbringe.',
          '<strong>Wert sinkt zu langsam:</strong> Der NTC hat eine thermische Traegheit von einigen Sekunden &ndash; das ist normal. Bei langsamen NTCs hilft direktes Auflegen und 10-15 Sekunden warten.'
        ]
      }
    }
  },

  // ===================== LEKTION 14 =====================
  {
    id: 14,
    title: 'Entscheidungen mit Sensorwerten',
    explanation: {
      html: `
        <h2>Entscheidungen mit Sensorwerten</h2>
        <p>Du kannst jetzt analoge Werte auslesen – super! Aber was nuetzt ein Lichtsensor, wenn der Arduino nicht <strong>automatisch reagiert</strong>? In dieser Lektion verbinden wir alles: Der Arduino liest den LDR und <strong>entscheidet selbst</strong>, ob er die LED ein- oder ausschalten soll.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Denk an eine <strong>Strassenlaterne</strong>. Niemand schaltet sie manuell ein. Stattdessen hat sie einen Lichtsensor und eine einfache Regel: <em>"Wenn es dunkel genug ist → Licht an. Wenn es hell genug ist → Licht aus."</em> Genau das programmieren wir jetzt!
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>if/else mit analogen Werten</h3>
          <p>Du kennst <code>if/else</code> vielleicht schon von digitalen Eingaengen (Taster). Bei analogen Werten funktioniert es genauso – nur dass du nicht auf HIGH/LOW pruefst, sondern auf <strong>Zahlenwerte</strong>:</p>
        </div>

        <div class="code-card">
          <h4>GRUNDPRINZIP: SCHWELLENWERT</h4>
          <pre><code><span class="keyword">int</span> sensorWert = <span class="function">analogRead</span>(<span class="value">A0</span>);

<span class="keyword">if</span> (sensorWert < <span class="value">300</span>) {
  <span class="comment">// Dunkel! → LED einschalten</span>
  <span class="function">digitalWrite</span>(<span class="value">8</span>, HIGH);
} <span class="keyword">else</span> {
  <span class="comment">// Hell genug → LED ausschalten</span>
  <span class="function">digitalWrite</span>(<span class="value">8</span>, LOW);
}</code></pre>
        </div>

        <div class="info-card">
          <h3>Was ist ein Schwellenwert?</h3>
          <p>Der <strong>Schwellenwert</strong> (hier: 300) ist die Grenze, ab der der Arduino seine Entscheidung trifft. Du musst ihn selbst festlegen – am besten durch Ausprobieren:</p>
          <ol class="step-list">
            <li>LDR-Schaltung aufbauen (wie in Lektion 11)</li>
            <li>Serial Monitor oeffnen und Werte bei verschiedenen Lichtsituationen beobachten</li>
            <li>Einen Wert waehlen, der <strong>zwischen hell und dunkel</strong> liegt</li>
          </ol>

          <div class="tip-box">
            <strong>Tipp:</strong> Wenn dein LDR bei Raumlicht ca. 600 anzeigt und bei abgedecktem Sensor ca. 100, waere ein guter Schwellenwert z.B. <strong>300</strong> – also ungefaehr in der Mitte.
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Mehrere Stufen mit if / else if / else</h3>
          <p>Du kannst auch <strong>mehrere Schwellenwerte</strong> definieren, um verschiedene Reaktionen auszuloesen:</p>
        </div>

        <div class="code-card">
          <h4>DREI HELLIGKEITSSTUFEN</h4>
          <pre><code><span class="keyword">int</span> ldrWert = <span class="function">analogRead</span>(<span class="value">A0</span>);

<span class="keyword">if</span> (ldrWert < <span class="value">200</span>) {
  <span class="comment">// Sehr dunkel → rote LED an</span>
  <span class="function">Serial.println</span>(<span class="value">"Sehr dunkel!"</span>);
} <span class="keyword">else if</span> (ldrWert < <span class="value">500</span>) {
  <span class="comment">// Daemmerung → gelbe LED an</span>
  <span class="function">Serial.println</span>(<span class="value">"Daemmerung"</span>);
} <span class="keyword">else</span> {
  <span class="comment">// Hell → gruene LED an</span>
  <span class="function">Serial.println</span>(<span class="value">"Hell genug!"</span>);
}</code></pre>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Problem: Flackern an der Schwelle (Hysterese)</h3>
          <p>Stell dir vor, der Schwellenwert ist 300. Der LDR-Wert schwankt zwischen 298 und 302 – die LED geht staendig an und aus! Das nennt man <strong>Flackern</strong>.</p>

          <div class="analogy-box">
            <strong>Alltagsanalogie:</strong> Stell dir einen <strong>Thermostat</strong> vor. Er schaltet die Heizung nicht bei exakt 20 Grad ein UND aus. Stattdessen: <em>Unter 19 Grad → Heizung an. Ueber 21 Grad → Heizung aus.</em> Dieser "Puffer" verhindert staendiges Ein-/Ausschalten. Das nennt man <strong>Hysterese</strong>.
          </div>

          <p><strong>Loesung: Zwei Schwellenwerte statt einem!</strong></p>
          <ul>
            <li><strong>Einschaltschwelle:</strong> LED geht an, wenn Wert unter 250 faellt</li>
            <li><strong>Ausschaltschwelle:</strong> LED geht aus, wenn Wert ueber 350 steigt</li>
          </ul>
          <p>Dazwischen aendert sich nichts – der "Puffer" verhindert das Flackern.</p>
        </div>

        <hr class="section-divider">

        <h3>Komplettes Projekt: Automatisches Nachtlicht</h3>
        <p>Jetzt kommt alles zusammen! Dieses Programm macht genau das, was eine Strassenlaterne tut:</p>

        <div class="code-card">
          <h4>AUTOMATISCHES NACHTLICHT (MIT HYSTERESE)</h4>
          <pre><code><span class="keyword">int</span> ldrPin     = <span class="value">A0</span>;   <span class="comment">// LDR-Spannungsteiler an A0</span>
<span class="keyword">int</span> ledPin     = <span class="value">8</span>;    <span class="comment">// LED an Pin 8</span>
<span class="keyword">int</span> schwelleAn = <span class="value">250</span>;  <span class="comment">// LED an, wenn dunkler als 250</span>
<span class="keyword">int</span> schwelleAus= <span class="value">350</span>;  <span class="comment">// LED aus, wenn heller als 350</span>

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(ledPin, OUTPUT);
  <span class="function">Serial.begin</span>(<span class="value">9600</span>);
  <span class="function">Serial.println</span>(<span class="value">"Nachtlicht gestartet!"</span>);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="keyword">int</span> helligkeit = <span class="function">analogRead</span>(ldrPin);  <span class="comment">// Lichtwert lesen</span>

  <span class="keyword">if</span> (helligkeit < schwelleAn) {
    <span class="function">digitalWrite</span>(ledPin, HIGH);  <span class="comment">// Dunkel → LED an</span>
    <span class="function">Serial.print</span>(<span class="value">"DUNKEL → LED AN  | Wert: "</span>);
  }
  <span class="keyword">else if</span> (helligkeit > schwelleAus) {
    <span class="function">digitalWrite</span>(ledPin, LOW);   <span class="comment">// Hell → LED aus</span>
    <span class="function">Serial.print</span>(<span class="value">"HELL  → LED AUS | Wert: "</span>);
  }
  <span class="keyword">else</span> {
    <span class="comment">// Zwischen 250 und 350: nichts aendern!</span>
    <span class="function">Serial.print</span>(<span class="value">"Puffer-Zone      | Wert: "</span>);
  }

  <span class="function">Serial.println</span>(helligkeit);
  <span class="function">delay</span>(<span class="value">300</span>);
}</code></pre>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.25rem 0;">
          <div class="info-card" style="margin:0; border-top: 3px solid #e74c3c;">
            <h3>Ohne Hysterese</h3>
            <p>Ein Schwellenwert: 300<br>
            LED flackert, wenn LDR-Wert um 300 schwankt<br>
            <strong>Problem: Nervig und unzuverlaessig</strong></p>
          </div>
          <div class="info-card" style="margin:0; border-top: 3px solid #27AE60;">
            <h3>Mit Hysterese</h3>
            <p>Zwei Schwellenwerte: 250 und 350<br>
            LED schaltet stabil, Puffer dazwischen<br>
            <strong>Loesung: Sauberes Schalten!</strong></p>
          </div>
        </div>

        <div class="tip-box">
          <strong>Tipp fuer die Pruefung:</strong> Die Hysterese ist ein Profi-Trick, der zeigt, dass du mitdenkst. In deinem Pruefungsprojekt (Ampel mit Nachtabschaltung) kannst du damit verhindern, dass die Ampel bei Daemmerung staendig zwischen Normal- und Nachtmodus wechselt.
        </div>

        <div class="warning-box">
          <strong>Achtung beim Testen:</strong> Die Schwellenwerte (250 und 350) sind Beispielwerte! Jeder LDR ist etwas anders. Lies zuerst mit dem Serial Monitor deine tatsaechlichen Werte ab und passe die Schwellen an deine Umgebung an.
        </div>
      `
    },
    example: {
      title: 'Beispiel: Nachtlicht aufbauen und testen',
      steps: [
        { label: 'Schaltung aufbauen', html: '<strong>LDR-Spannungsteiler:</strong> 5V → LDR → A0 → 10 kOhm → GND (wie Lektion 11).<br><strong>LED:</strong> Pin 8 → 220-Ohm-Widerstand → LED → GND.' },
        { label: 'Schwellenwerte ermitteln', html: 'Lade zuerst nur den LDR-Auslesecode aus Lektion 11 hoch. Notiere die Werte bei <strong>Raumlicht</strong> (~600) und <strong>abgedecktem Sensor</strong> (~100). Waehle deinen Schwellenwert dazwischen.' },
        { label: 'Nachtlicht-Code hochladen', html: 'Passe <code>schwelleAn</code> und <code>schwelleAus</code> an deine Werte an. Lade den Code hoch.' },
        { label: 'Testen', html: 'Bedecke den LDR mit der Hand → <strong>LED geht an</strong>. Nimm die Hand weg → <strong>LED geht aus</strong>. Beobachte im Serial Monitor, wie die Puffer-Zone das Flackern verhindert!' },
        { label: 'Erweiterungsidee', html: 'Statt einer einfachen LED koenntest du die LED auch <strong>dimmen</strong>: Je dunkler es wird, desto heller die LED. Dafuer kombinierst du <code>analogRead()</code>, <code>map()</code> und <code>analogWrite()</code> aus der PWM-Lektion (Dimmen statt Schalten)!' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ist der Vorteil von Hysterese beim Nachtlicht?',
        options: [
          'Die LED leuchtet heller',
          'Man braucht keinen Widerstand',
          'Die LED flackert nicht bei Werten nahe am Schwellenwert',
          'Der Arduino verbraucht weniger Strom'
        ],
        correct: 2,
        explanation: 'Richtig! Hysterese verwendet zwei Schwellenwerte statt einem. Dadurch entsteht eine "Puffer-Zone", in der sich nichts aendert. Das verhindert das nervige Flackern, wenn der Sensorwert um den Schwellenwert herum schwankt.',
        wrongExplanations: {
          0: 'Helligkeit ist eine Eigenschaft der LED + ihres Vorwiderstands — nicht der Steuer-Logik. Hysterese aendert nur das SCHALT-Verhalten.',
          1: 'Doch — den 220-Ohm-Vorwiderstand fuer die LED brauchst du weiterhin. Hysterese ist ein reines Software-Konzept und ersetzt keine Hardware.',
          3: 'Der Stromverbrauch aendert sich nicht messbar. Hysterese spart kein Strom, sondern verhindert nur das visuelle Flackern am Schwellenwert.'
        }
      },
      {
        type: 'ordering',
        question: 'Bringe die Schritte zum Erstellen eines Nachtlichts in die richtige Reihenfolge:',
        items: [
          'Schwellenwerte im Code anpassen',
          'LDR-Spannungsteiler und LED aufbauen',
          'if/else-Logik programmieren',
          'Mit Serial Monitor Lichtwerte bei hell/dunkel ablesen'
        ],
        correctOrder: [1, 3, 0, 2],
        explanation: 'Zuerst baust du die Hardware auf (LDR-Spannungsteiler und LED). Dann liest du im Serial Monitor ab, welche Werte bei hell und bei dunkel wirklich herauskommen &ndash; denn die haengen von deinem LDR und der Beleuchtung ab. Erst mit diesen echten Messwerten kannst du sinnvolle Schwellenwerte festlegen und zuletzt die if/else-Logik programmieren, die die LED schaltet.'
      },
      {
        type: 'multiple-choice',
        question: 'Im Nachtlicht-Code steht: if (helligkeit &lt; 250). Welche Aussage stimmt?',
        options: [
          'Wenn der LDR-Wert groesser als 250 ist, geht die LED an',
          'Wenn es dunkel ist (niedriger Wert), geht die LED an',
          'Die LED geht immer an, egal welcher Wert',
          '250 ist die maximale Helligkeit der LED'
        ],
        correct: 1,
        explanation: 'Genau! Bei unserer Schaltung bedeutet ein niedriger analogRead()-Wert, dass es dunkel ist. Wenn der Wert unter 250 faellt (= dunkel), wird die LED eingeschaltet. Das ist die Grundlogik eines automatischen Nachtlichts.',
        wrongExplanations: {
          0: 'Andersrum: Der Vergleich &lt; 250 prueft, ob der Wert KLEINER ist. Die LED geht also bei NIEDRIGEN Werten an — und niedrig bedeutet bei dieser Schaltung dunkel.',
          2: 'Nein, das if traegt eine Bedingung: Nur wenn helligkeit &lt; 250 ist die Bedingung wahr. Bei Tageslicht ist der Wert hoch und die LED bleibt aus.',
          3: '250 ist hier ein SCHWELLENWERT fuer den Sensor (LDR), kein LED-Wert. Die LED kennt in dieser Schaltung nur HIGH oder LOW.'
        }
      }
    ]
  }
];
