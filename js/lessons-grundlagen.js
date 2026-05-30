const LESSONS_GRUNDLAGEN = [
  // ===================== LEKTION 1 =====================
  {
    id: 1,
    title: 'Was ist ein Arduino?',
    explanation: {
      html: `
        <h2>Was ist ein Arduino?</h2>
        <p>Stell dir vor, du hast eine kleine Schaltzentrale – nicht größer als eine Kreditkarte. Diese Schaltzentrale kann Lampen einschalten, Temperaturen messen, Motoren drehen lassen oder auf Knopfdruck reagieren. <strong>Das ist ein Arduino.</strong></p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Ein Arduino ist wie ein <strong>Koch mit einem einzigen Rezept</strong>: Er kann nicht spontan etwas anderes kochen, aber sein Gericht macht er perfekt – immer und immer wieder, ohne müde zu werden. Du schreibst das Rezept (= dein Programm), und der Arduino führt es aus.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Mikrocontroller vs. Computer</h3>
          <p>Dein Computer kann alles Mögliche: Videos abspielen, im Internet surfen, Spiele starten. Ein <strong>Mikrocontroller</strong> (das Herzstück des Arduino) kann immer nur <em>eine Aufgabe</em> – aber die macht er zuverlässig und ohne Pause.</p>
          <table class="icon-table">
            <tr><th>Eigenschaft</th><th>Computer</th><th>Arduino</th></tr>
            <tr><td>Größe</td><td>Groß (Laptop/PC)</td><td>Klein (Kreditkartengröße)</td></tr>
            <tr><td>Betriebssystem</td><td>Windows, macOS, Linux</td><td>Keins – nur dein Programm</td></tr>
            <tr><td>Aufgaben</td><td>Viele gleichzeitig</td><td>Eine Aufgabe, dauerhaft</td></tr>
            <tr><td>Anschlüsse</td><td>USB, HDMI, Audio</td><td>Pins für Sensoren & LEDs</td></tr>
            <tr><td>Stromverbrauch</td><td>Hoch</td><td>Sehr niedrig</td></tr>
            <tr><td>Preis</td><td>Hunderte Euro</td><td>~25 Euro</td></tr>
          </table>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Wozu braucht man das?</h3>
          <p>Überall, wo etwas automatisch gesteuert werden soll:</p>
          <ul>
            <li><strong>Ampelsteuerung</strong> – Lichter wechseln nach einem festen Ablauf</li>
            <li><strong>Bewässerungssystem</strong> – Boden zu trocken? Pumpe an!</li>
            <li><strong>Alarmanlage</strong> – Bewegung erkannt? Sirene an!</li>
            <li><strong>Nachtlicht</strong> – Dunkel? LED an. Hell? LED aus.</li>
          </ul>
        </div>

        <div class="tip-box">
          <strong>Für den Technikunterricht:</strong> Du lernst genau solche Systeme selbst zu bauen und zu programmieren – bis hin zur Prüfungsschaltung mit Ampel, Fußgängerüberweg und Lichtsensor!
        </div>
      `
    },
    example: {
      title: 'Beispiel: Arduino im Alltag',
      steps: [
        { label: 'Situation', html: 'Du möchtest, dass eine LED angeht, wenn es dunkel wird.' },
        { label: 'Was brauchst du?', html: 'Einen Arduino, einen Lichtsensor (LDR) und eine LED.' },
        { label: 'Was macht der Arduino?', html: 'Er liest ständig den Lichtsensor aus. Wenn der Wert unter einen Schwellenwert fällt (= dunkel), schaltet er die LED ein.' },
        { label: 'Das Programm', html: 'Du schreibst in der Arduino IDE ein Programm mit einer einfachen Regel: <code>wenn Helligkeit < 300 → LED an, sonst LED aus</code>.' },
        { label: 'Das Ergebnis', html: 'Der Arduino macht das Licht automatisch an, sobald es dunkel wird – ohne dass du etwas tun musst. Genau wie eine Straßenlaterne!' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was ist der Hauptunterschied zwischen einem Computer und einem Arduino?',
        options: [
          'Ein Arduino ist schneller als ein Computer',
          'Ein Arduino führt immer nur eine Aufgabe aus, ein Computer kann viele gleichzeitig',
          'Ein Arduino braucht keinen Strom',
          'Ein Arduino hat einen Bildschirm'
        ],
        correct: 1,
        explanation: 'Richtig! Ein Arduino ist ein Mikrocontroller, der für eine bestimmte Aufgabe programmiert wird und diese dauerhaft ausführt. Ein Computer kann viele Programme gleichzeitig laufen lassen.',
        wrongExplanations: {
          0: 'Andersherum: Ein Computer ist deutlich schneller. Der Arduino-Chip arbeitet mit 16 MHz, ein moderner Computer mit mehreren GHz – rund 100- bis 200-mal schneller.',
          2: 'Doch, ein Arduino braucht Strom – aber sehr wenig. Etwa so viel wie zwei bis drei kleine LEDs, also viel weniger als ein Laptop.',
          3: 'Nein, der Arduino hat keinen eingebauten Bildschirm. Er kann aber externe Displays ansteuern.'
        }
      },
      {
        type: 'matching',
        question: 'Ordne die Begriffe den richtigen Beschreibungen zu:',
        pairs: [
          { left: 'Mikrocontroller', right: 'Das Gehirn des Arduino' },
          { left: 'Programm', right: 'Die Anweisung, die der Arduino ausführt' },
          { left: 'Sensor', right: 'Misst etwas (z.B. Licht, Temperatur)' },
          { left: 'LED', right: 'Kleines Lämpchen, das leuchten kann' }
        ],
        explanation: 'Der Mikrocontroller ist der zentrale Chip, der alles steuert &ndash; deshalb das Gehirn. Das Programm sagt ihm Schritt für Schritt, was er tun soll. Ein Sensor liefert Messwerte aus der Umwelt, und eine LED ist ein Bauteil, das als sichtbares Signal leuchtet.'
      },
      {
        type: 'multiple-choice',
        question: 'Welches Projekt könnte man NICHT sinnvoll mit einem Arduino umsetzen?',
        options: [
          'Eine automatische Bewässerungsanlage',
          'Ein Videospiel mit 3D-Grafik wie auf der PlayStation',
          'Eine Alarmanlage mit Bewegungsmelder',
          'Eine Ampelsteuerung'
        ],
        correct: 1,
        explanation: 'Genau! Für aufwändige 3D-Grafik braucht man einen leistungsstarken Computer mit Grafikkarte. Der Arduino ist für einfache Steuerungsaufgaben gemacht – dafür aber perfekt.',
        wrongExplanations: {
          0: 'Doch – Bewässerung geht super! Bodenfeuchte-Sensor + Pumpe + Arduino = automatisches Gießen.',
          2: 'Doch – Bewegungsmelder + Sirene + Arduino ergeben eine funktionierende Alarmanlage.',
          3: 'Doch – eine Ampel mit 3 LEDs ist sogar ein Klassiker und wird in Modul 4 dein Prüfungsprojekt!'
        }
      }
    ]
  },

  // ===================== LEKTION 2 =====================
  {
    id: 2,
    title: 'Das Arduino Uno Board',
    explanation: {
      html: `
        <h2>Das Arduino Uno Board kennenlernen</h2>
        <p>Bevor du programmierst, musst du wissen, was auf dem Board drauf ist. Stell dir das Board vor wie ein <strong>Armaturenbrett im Auto</strong> – jeder Anschluss hat eine bestimmte Funktion.</p>

        <svg viewBox="0 0 600 380" style="width:100%;max-width:600px;margin:1em auto;display:block;font-family:system-ui;">
          <!-- Board -->
          <rect x="50" y="30" width="500" height="320" rx="12" fill="#0068B5" stroke="#004080" stroke-width="2"/>
          <!-- USB -->
          <rect x="50" y="140" width="40" height="60" rx="4" fill="#888" stroke="#555" stroke-width="1.5"/>
          <text x="30" y="175" text-anchor="end" font-size="12" fill="#333">USB</text>
          <!-- Strombuchse -->
          <rect x="50" y="250" width="35" height="40" rx="6" fill="#333" stroke="#111" stroke-width="1.5"/>
          <text x="30" y="275" text-anchor="end" font-size="12" fill="#333">Strom</text>
          <!-- Digitale Pins -->
          <g>
            <text x="300" y="22" text-anchor="middle" font-size="13" fill="#333" font-weight="bold">Digitale Pins (0–13)</text>
            <g id="digital-pins">
              <rect x="130" y="32" width="16" height="22" rx="2" fill="#222"/>
              <rect x="155" y="32" width="16" height="22" rx="2" fill="#222"/>
              <rect x="180" y="32" width="16" height="22" rx="2" fill="#222"/>
              <rect x="205" y="32" width="16" height="22" rx="2" fill="#222"/>
              <rect x="230" y="32" width="16" height="22" rx="2" fill="#222"/>
              <rect x="255" y="32" width="16" height="22" rx="2" fill="#222"/>
              <rect x="280" y="32" width="16" height="22" rx="2" fill="#222"/>
              <rect x="320" y="32" width="16" height="22" rx="2" fill="#222"/>
              <rect x="345" y="32" width="16" height="22" rx="2" fill="#222"/>
              <rect x="370" y="32" width="16" height="22" rx="2" fill="#222"/>
              <rect x="395" y="32" width="16" height="22" rx="2" fill="#222"/>
              <rect x="420" y="32" width="16" height="22" rx="2" fill="#222"/>
              <rect x="445" y="32" width="16" height="22" rx="2" fill="#222"/>
              <rect x="470" y="32" width="16" height="22" rx="2" fill="#222"/>
            </g>
            <text x="138" y="68" font-size="9" fill="#333">0</text>
            <text x="163" y="68" font-size="9" fill="#333">1</text>
            <text x="188" y="68" font-size="9" fill="#333">2</text>
            <text x="213" y="68" font-size="9" fill="#333">3</text>
            <text x="233" y="68" font-size="9" fill="#333">4</text>
            <text x="258" y="68" font-size="9" fill="#333">5</text>
            <text x="283" y="68" font-size="9" fill="#333">6</text>
            <text x="323" y="68" font-size="9" fill="#333">7</text>
            <text x="348" y="68" font-size="9" fill="#333">8</text>
            <text x="373" y="68" font-size="9" fill="#333">9</text>
            <text x="393" y="68" font-size="9" fill="#333">10</text>
            <text x="418" y="68" font-size="9" fill="#333">11</text>
            <text x="443" y="68" font-size="9" fill="#333">12</text>
            <text x="468" y="68" font-size="9" fill="#333">13</text>
          </g>
          <!-- PWM Markierung -->
          <text x="215" y="82" font-size="10" fill="#E67E22">~ = PWM (3, 5, 6, 9, 10, 11)</text>
          <!-- Analoge Pins -->
          <g>
            <text x="300" y="365" text-anchor="middle" font-size="13" fill="#333" font-weight="bold">Analoge Pins (A0–A5)</text>
            <rect x="180" y="328" width="16" height="22" rx="2" fill="#222"/>
            <rect x="210" y="328" width="16" height="22" rx="2" fill="#222"/>
            <rect x="240" y="328" width="16" height="22" rx="2" fill="#222"/>
            <rect x="270" y="328" width="16" height="22" rx="2" fill="#222"/>
            <rect x="300" y="328" width="16" height="22" rx="2" fill="#222"/>
            <rect x="330" y="328" width="16" height="22" rx="2" fill="#222"/>
            <text x="183" y="324" font-size="9" fill="#333">A0</text>
            <text x="213" y="324" font-size="9" fill="#333">A1</text>
            <text x="243" y="324" font-size="9" fill="#333">A2</text>
            <text x="273" y="324" font-size="9" fill="#333">A3</text>
            <text x="303" y="324" font-size="9" fill="#333">A4</text>
            <text x="333" y="324" font-size="9" fill="#333">A5</text>
          </g>
          <!-- Strom-Pins -->
          <g>
            <rect x="400" y="328" width="16" height="22" rx="2" fill="#C0392B"/>
            <rect x="430" y="328" width="16" height="22" rx="2" fill="#222"/>
            <rect x="460" y="328" width="16" height="22" rx="2" fill="#222"/>
            <text x="402" y="324" font-size="9" fill="#C0392B">5V</text>
            <text x="427" y="324" font-size="9" fill="#333">3.3V</text>
            <text x="460" y="324" font-size="9" fill="#333">GND</text>
          </g>
          <!-- Mikrocontroller-Chip -->
          <rect x="200" y="140" width="180" height="80" rx="4" fill="#222" stroke="#111" stroke-width="1.5"/>
          <text x="290" y="180" text-anchor="middle" font-size="13" fill="#aaa">ATmega328P</text>
          <text x="290" y="198" text-anchor="middle" font-size="10" fill="#777">Mikrocontroller</text>
          <!-- Reset-Button -->
          <circle cx="480" cy="170" r="14" fill="#C0392B" stroke="#922" stroke-width="1.5"/>
          <text x="480" y="175" text-anchor="middle" font-size="10" fill="white" font-weight="bold">RST</text>
          <text x="510" y="175" font-size="11" fill="#333">Reset</text>
          <!-- LED 13 -->
          <circle cx="480" cy="110" r="6" fill="#F1C40F" stroke="#D4AC0D" stroke-width="1"/>
          <text x="495" y="114" font-size="10" fill="#333">LED (Pin 13)</text>
          <!-- Power LED -->
          <circle cx="130" cy="300" r="6" fill="#2ECC71" stroke="#27AE60" stroke-width="1"/>
          <text x="145" y="304" font-size="10" fill="#333">Power-LED</text>
        </svg>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die wichtigsten Bereiche</h3>
          <table class="icon-table">
            <tr><th>Bereich</th><th>Was ist das?</th><th>Wozu?</th></tr>
            <tr><td><strong>USB-Anschluss</strong></td><td>Verbindung zum Computer</td><td>Programm hochladen + Strom</td></tr>
            <tr><td><strong>Strombuchse</strong></td><td>Externer Strom (7-12V)</td><td>Wenn kein Computer angeschlossen</td></tr>
            <tr><td><strong>Digitale Pins (0-13)</strong></td><td>Ein/Aus-Anschlüsse</td><td>LEDs, Taster, Buzzer</td></tr>
            <tr><td><strong>Analoge Pins (A0-A5)</strong></td><td>Mess-Anschlüsse</td><td>Sensoren (Licht, Temperatur)</td></tr>
            <tr><td><strong>PWM-Pins (~)</strong></td><td>Pins 3, 5, 6, 9, 10, 11</td><td>Dimmen, Motorsteuerung</td></tr>
            <tr><td><strong>GND</strong></td><td>Ground = Minuspol</td><td>Stromkreis schließen</td></tr>
            <tr><td><strong>5V / 3.3V</strong></td><td>Stromversorgung</td><td>Bauteile mit Strom versorgen</td></tr>
            <tr><td><strong>Reset-Button</strong></td><td>Roter Knopf</td><td>Programm neu starten</td></tr>
            <tr><td><strong>ATmega328P</strong></td><td>Der Mikrocontroller-Chip</td><td>Das "Gehirn" – führt dein Programm aus</td></tr>
          </table>
        </div>

        <div class="warning-box">
          <strong>Wichtig: GND nicht vergessen!</strong><br>
          Jeder Stromkreis braucht einen Hin- und Rückweg. Der Strom fließt vom Pin (z.B. Pin 13) durch die LED und <strong>zurück über GND</strong>. Vergisst du GND, passiert nichts – wie ein Wasserkreislauf ohne Abfluss.
        </div>

        <hr class="section-divider">

        <h3>Die Steckplatine (Breadboard)</h3>
        <p>Auf dem Breadboard baust du deine Schaltungen auf – ohne Löten! Die Kontakte sind unsichtbar miteinander verbunden:</p>

        <svg viewBox="0 0 520 320" style="width:100%;max-width:520px;margin:1em auto;display:block;font-family:system-ui;">
          <!-- Breadboard Hintergrund -->
          <rect x="10" y="10" width="500" height="300" rx="8" fill="#E8E4D8" stroke="#C4C0B0" stroke-width="2"/>

          <!-- Plus-Schiene oben (rot) -->
          <rect x="30" y="25" width="460" height="16" rx="3" fill="#FECACA" stroke="#EF4444" stroke-width="1"/>
          <text x="18" y="37" font-size="14" fill="#EF4444" font-weight="bold">+</text>
          <line x1="30" y1="33" x2="490" y2="33" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="3,3"/>
          <!-- Löcher Plus -->
          <g fill="#555">
            <circle cx="50" cy="33" r="2.5"/><circle cx="70" cy="33" r="2.5"/><circle cx="90" cy="33" r="2.5"/><circle cx="110" cy="33" r="2.5"/><circle cx="130" cy="33" r="2.5"/><circle cx="150" cy="33" r="2.5"/><circle cx="170" cy="33" r="2.5"/><circle cx="190" cy="33" r="2.5"/><circle cx="210" cy="33" r="2.5"/><circle cx="230" cy="33" r="2.5"/><circle cx="250" cy="33" r="2.5"/><circle cx="270" cy="33" r="2.5"/><circle cx="290" cy="33" r="2.5"/><circle cx="310" cy="33" r="2.5"/><circle cx="330" cy="33" r="2.5"/><circle cx="350" cy="33" r="2.5"/><circle cx="370" cy="33" r="2.5"/><circle cx="390" cy="33" r="2.5"/><circle cx="410" cy="33" r="2.5"/><circle cx="430" cy="33" r="2.5"/><circle cx="450" cy="33" r="2.5"/><circle cx="470" cy="33" r="2.5"/>
          </g>

          <!-- Minus-Schiene oben (blau) -->
          <rect x="30" y="45" width="460" height="16" rx="3" fill="#BFDBFE" stroke="#3B82F6" stroke-width="1"/>
          <text x="18" y="57" font-size="14" fill="#3B82F6" font-weight="bold">−</text>
          <line x1="30" y1="53" x2="490" y2="53" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="3,3"/>

          <!-- Mittelteil: 5er-Reihen (Abschnitt A-E) -->
          <g>
            <text x="20" y="85" font-size="10" fill="#888">a</text>
            <text x="20" y="100" font-size="10" fill="#888">b</text>
            <text x="20" y="115" font-size="10" fill="#888">c</text>
            <text x="20" y="130" font-size="10" fill="#888">d</text>
            <text x="20" y="145" font-size="10" fill="#888">e</text>
          </g>

          <!-- 5er-Reihe Beispiel (Spalte 1) - gelb markiert -->
          <rect x="46" y="74" width="12" height="78" rx="3" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5"/>
          <circle cx="52" cy="82" r="2.5" fill="#555"/>
          <circle cx="52" cy="97" r="2.5" fill="#555"/>
          <circle cx="52" cy="112" r="2.5" fill="#555"/>
          <circle cx="52" cy="127" r="2.5" fill="#555"/>
          <circle cx="52" cy="142" r="2.5" fill="#555"/>

          <!-- Weitere Spalten (nicht markiert) -->
          <g fill="#555">
            <circle cx="72" cy="82" r="2"/><circle cx="72" cy="97" r="2"/><circle cx="72" cy="112" r="2"/><circle cx="72" cy="127" r="2"/><circle cx="72" cy="142" r="2"/>
            <circle cx="92" cy="82" r="2"/><circle cx="92" cy="97" r="2"/><circle cx="92" cy="112" r="2"/><circle cx="92" cy="127" r="2"/><circle cx="92" cy="142" r="2"/>
            <circle cx="112" cy="82" r="2"/><circle cx="112" cy="97" r="2"/><circle cx="112" cy="112" r="2"/><circle cx="112" cy="127" r="2"/><circle cx="112" cy="142" r="2"/>
            <circle cx="132" cy="82" r="2"/><circle cx="132" cy="97" r="2"/><circle cx="132" cy="112" r="2"/><circle cx="132" cy="127" r="2"/><circle cx="132" cy="142" r="2"/>
            <circle cx="152" cy="82" r="2"/><circle cx="152" cy="97" r="2"/><circle cx="152" cy="112" r="2"/><circle cx="152" cy="127" r="2"/><circle cx="152" cy="142" r="2"/>
          </g>

          <!-- Mittelrinne -->
          <rect x="30" y="155" width="460" height="12" rx="2" fill="#D1D5DB"/>

          <!-- 5er-Reihen unten (f-j) -->
          <g>
            <text x="20" y="180" font-size="10" fill="#888">f</text>
            <text x="20" y="195" font-size="10" fill="#888">g</text>
            <text x="20" y="210" font-size="10" fill="#888">h</text>
            <text x="20" y="225" font-size="10" fill="#888">i</text>
            <text x="20" y="240" font-size="10" fill="#888">j</text>
          </g>
          <g fill="#555">
            <circle cx="52" cy="177" r="2"/><circle cx="52" cy="192" r="2"/><circle cx="52" cy="207" r="2"/><circle cx="52" cy="222" r="2"/><circle cx="52" cy="237" r="2"/>
            <circle cx="72" cy="177" r="2"/><circle cx="72" cy="192" r="2"/><circle cx="72" cy="207" r="2"/><circle cx="72" cy="222" r="2"/><circle cx="72" cy="237" r="2"/>
            <circle cx="92" cy="177" r="2"/><circle cx="92" cy="192" r="2"/><circle cx="92" cy="207" r="2"/><circle cx="92" cy="222" r="2"/><circle cx="92" cy="237" r="2"/>
            <circle cx="112" cy="177" r="2"/><circle cx="112" cy="192" r="2"/><circle cx="112" cy="207" r="2"/><circle cx="112" cy="222" r="2"/><circle cx="112" cy="237" r="2"/>
            <circle cx="132" cy="177" r="2"/><circle cx="132" cy="192" r="2"/><circle cx="132" cy="207" r="2"/><circle cx="132" cy="222" r="2"/><circle cx="132" cy="237" r="2"/>
            <circle cx="152" cy="177" r="2"/><circle cx="152" cy="192" r="2"/><circle cx="152" cy="207" r="2"/><circle cx="152" cy="222" r="2"/><circle cx="152" cy="237" r="2"/>
          </g>

          <!-- Minus-Schiene unten -->
          <rect x="30" y="255" width="460" height="16" rx="3" fill="#BFDBFE" stroke="#3B82F6" stroke-width="1"/>
          <text x="18" y="267" font-size="14" fill="#3B82F6" font-weight="bold">−</text>
          <!-- Plus-Schiene unten -->
          <rect x="30" y="275" width="460" height="16" rx="3" fill="#FECACA" stroke="#EF4444" stroke-width="1"/>
          <text x="18" y="287" font-size="14" fill="#EF4444" font-weight="bold">+</text>

          <!-- Legende -->
          <text x="200" y="75" font-size="11" fill="#F59E0B" font-weight="bold">← Diese 5 Löcher sind verbunden!</text>
          <text x="200" y="165" font-size="10" fill="#888">← Mittelrinne trennt oben/unten</text>
          <text x="200" y="33" font-size="10" fill="#EF4444">← Stromschiene: alle + verbunden (ganze Reihe)</text>
          <text x="200" y="53" font-size="10" fill="#3B82F6">← Stromschiene: alle − verbunden (ganze Reihe)</text>
        </svg>

        <div class="info-card">
          <h3>So funktioniert das Breadboard</h3>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div>
              <strong style="color:#EF4444">Stromschienen (+ / −)</strong>
              <p>Die langen Reihen oben und unten sind <em>über die gesamte Länge</em> verbunden. Hier legst du 5V und GND an.</p>
            </div>
            <div>
              <strong style="color:#F59E0B">5er-Reihen (a-e / f-j)</strong>
              <p>Im Mittelbereich sind immer <em>5 Löcher senkrecht</em> verbunden (eine Spalte). Die Mittelrinne trennt die obere Hälfte (a-e) von der unteren (f-j).</p>
            </div>
          </div>
        </div>

        <div class="tip-box">
          <strong>Praxis-Tipp:</strong> Steck ein Bauteil (z.B. LED) immer so ein, dass die Beinchen in <em>verschiedenen Spalten</em> stecken. Sonst sind sie kurzgeschlossen (direkt verbunden) und es funktioniert nicht.
        </div>
      `
    },
    example: {
      title: 'Beispiel: Welchen Pin für welches Bauteil?',
      steps: [
        { label: 'LED anschließen', html: 'Eine LED braucht einen <strong>digitalen Pin</strong> (z.B. Pin 8) und einen <strong>GND</strong>-Anschluss. Der Pin sagt "an" oder "aus".' },
        { label: 'Taster anschließen', html: 'Ein Taster wird auch an einen <strong>digitalen Pin</strong> angeschlossen. Der Arduino liest: "Gedrückt oder nicht?"' },
        { label: 'Lichtsensor', html: 'Ein Lichtsensor braucht einen <strong>analogen Pin</strong> (z.B. A0). Analoge Pins wandeln die gemessene Spannung (0–5V) mit 10-Bit-Auflösung in einen Wert zwischen 0 und 1023 um – nicht nur an/aus.' },
        { label: 'LED dimmen', html: 'Zum Dimmen brauchst du einen <strong>PWM-Pin</strong> (mit ~ markiert). Nur diese Pins können Zwischenwerte ausgeben.' }
      ]
    },
    exercises: [
      {
        type: 'matching',
        question: 'Ordne die Bauteile dem richtigen Pin-Typ zu:',
        pairs: [
          { left: 'LED (ein/aus)', right: 'Digitaler Pin' },
          { left: 'Lichtsensor', right: 'Analoger Pin (A0-A5)' },
          { left: 'LED dimmen', right: 'PWM-Pin (~)' },
          { left: 'Stromkreis schließen', right: 'GND' }
        ],
        explanation: 'Eine LED kennt nur an oder aus &ndash; das passt zu einem digitalen Pin. Ein Lichtsensor liefert viele Zwischenwerte, die nur ein analoger Pin (A0&ndash;A5) messen kann. Zum Dimmen braucht man einen PWM-Pin (mit ~), der schnell ein- und ausschaltet, und GND schließt den Stromkreis, damit der Strom zurückfließen kann.'
      },
      {
        type: 'multiple-choice',
        question: 'Wie viele analoge Pins hat der Arduino Uno?',
        options: ['4', '6', '8', '14'],
        correct: 1,
        explanation: 'Der Arduino Uno hat 6 analoge Pins: A0 bis A5. Sie können Spannungen zwischen 0V und 5V messen.',
        wrongExplanations: {
          0: 'Nein, 4 ist zu wenig. Schau auf das Board: A0, A1, A2, A3, A4, A5 — das sind genau 6 Pins.',
          2: 'Nein, 8 hat der Uno nicht. Größere Boards wie der Arduino Mega haben mehr analoge Pins — beim Uno sind es nur A0 bis A5.',
          3: 'Vorsicht: Die 14 sind die DIGITALEN Pins (0–13). Analog gibt es nur 6 (A0–A5) — die liegen auf der anderen Seite des Boards.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Was passiert, wenn du eine LED an einen Pin anschließt, aber GND vergisst?',
        options: [
          'Die LED leuchtet trotzdem',
          'Die LED leuchtet schwächer',
          'Nichts – der Stromkreis ist nicht geschlossen',
          'Der Arduino geht kaputt'
        ],
        correct: 2,
        explanation: 'Ohne GND ist der Stromkreis nicht geschlossen – kein Strom fließt, die LED bleibt dunkel. Wie ein Wasserkreislauf ohne Rückfluss.',
        wrongExplanations: {
          0: 'Nein, ohne Rückweg über GND fließt gar kein Strom. Die LED bleibt komplett dunkel — wie ein Wasserkreislauf ohne Abfluss.',
          1: 'Nein, schwächer leuchtet sie auch nicht. Strom ist hier nicht weniger, sondern null — der Kreis ist einfach offen.',
          3: 'Keine Panik: Wenn der Kreis offen ist, fließt nichts. Der Arduino geht erst kaputt, wenn ZU VIEL Strom fließt — z.B. Pin direkt an GND OHNE Widerstand.'
        }
      }
    ]
  },

  // ===================== LEKTION 3 =====================
  {
    id: 3,
    title: 'Die Arduino IDE & dein erstes Programm',
    explanation: {
      html: `
        <h2>Die Arduino IDE</h2>
        <p>Die <strong>Arduino IDE</strong> (Integrated Development Environment) ist das Programm auf deinem Computer, in dem du den Code für den Arduino schreibst. Stell sie dir vor wie ein <strong>Texteditor mit Superkräften</strong> – sie kann deinen Code nicht nur speichern, sondern auch auf den Arduino hochladen.</p>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Installation</h3>
          <ol class="step-list">
            <li>Gehe auf <code>arduino.cc/en/software</code></li>
            <li>Lade die Arduino IDE 2 herunter (kostenlos)</li>
            <li>Installieren, Arduino per USB anschließen</li>
            <li>Board auswählen: <strong>Arduino Uno</strong></li>
            <li>Port auswählen (wird automatisch erkannt)</li>
          </ol>
        </div>

        <div class="info-card">
          <h3>Die wichtigsten Buttons</h3>
          <table class="icon-table">
            <tr><th>Symbol</th><th>Name</th><th>Was macht es?</th></tr>
            <tr><td style="font-size:1.3rem">✓</td><td><strong>Überprüfen (Verify)</strong></td><td>Prüft, ob dein Code Fehler hat</td></tr>
            <tr><td style="font-size:1.3rem">→</td><td><strong>Hochladen (Upload)</strong></td><td>Schickt den Code auf den Arduino</td></tr>
            <tr><td style="font-size:1.3rem">🔍</td><td><strong>Serial Monitor</strong></td><td>Zeigt Nachrichten vom Arduino an</td></tr>
          </table>
        </div>

        <hr class="section-divider">

        <h3>Dein erstes Programm: Blink</h3>
        <p>Das "Hallo Welt" der Arduino-Welt ist <strong>Blink</strong> – eine LED blinken lassen. Die LED an Pin 13 ist schon auf dem Board eingebaut, du brauchst also kein zusätzliches Bauteil!</p>

        <div class="code-card">
          <h4>Blink – LED an Pin 13 blinkt</h4>
          <pre><code><span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(<span class="value">13</span>, OUTPUT);    <span class="comment">// Pin 13 als Ausgang festlegen</span>
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="function">digitalWrite</span>(<span class="value">13</span>, HIGH); <span class="comment">// LED einschalten</span>
  <span class="function">delay</span>(<span class="value">1000</span>);            <span class="comment">// 1 Sekunde warten (1000 ms)</span>
  <span class="function">digitalWrite</span>(<span class="value">13</span>, LOW);  <span class="comment">// LED ausschalten</span>
  <span class="function">delay</span>(<span class="value">1000</span>);            <span class="comment">// 1 Sekunde warten</span>
}</code></pre>
        </div>

        <div class="tip-box">
          <strong>Was passiert hier?</strong>
          <ul style="margin-top:0.5rem; margin-left:1.25rem;">
            <li><code>pinMode(13, OUTPUT)</code> – Sagt dem Arduino: "Pin 13 ist ein Ausgang."</li>
            <li><code>digitalWrite(13, HIGH)</code> – Schaltet Pin 13 an (5 Volt = LED leuchtet)</li>
            <li><code>digitalWrite(13, LOW)</code> – Schaltet Pin 13 aus (0 Volt = LED aus)</li>
            <li><code>delay(1000)</code> – Wartet 1000 Millisekunden = 1 Sekunde</li>
          </ul>
        </div>

        <div class="info-card">
          <h3>So sieht es auf dem Breadboard aus</h3>
          <p>Eine externe LED an Pin 13 – die einfachste Schaltung:</p>
          <svg viewBox="0 0 700 520" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:700px;font-family:Arial,Helvetica,sans-serif;background:#fdfcf6;border:1px solid #ccc;border-radius:8px;">

            <!-- ===== ARDUINO UNO (OBEN, vertikales Layout) ===== -->
            <rect x="80" y="20" width="540" height="100" rx="10" fill="#2176AE" stroke="#1a5f8a" stroke-width="2"/>
            <text x="350" y="48" text-anchor="middle" font-size="14" fill="white" font-weight="bold">Arduino Uno</text>
            <text x="350" y="64" text-anchor="middle" font-size="9" fill="#aad" font-style="italic">Blink-Schaltung – externe LED an Pin 13</text>

            <!-- USB-Buchse links -->
            <rect x="60" y="55" width="20" height="28" rx="2" fill="#aaa" stroke="#888" stroke-width="1"/>
            <text x="70" y="73" text-anchor="middle" font-size="7" fill="#444">USB</text>

            <!-- Pin-Labels ÜBER den Pin-Boxen (im Arduino) -->
            <g font-size="9" font-weight="bold" text-anchor="middle">
              <text x="140" y="93" fill="#ff9800">Pin 13</text>
              <text x="300" y="93" fill="#ddd">GND</text>
            </g>

            <!-- Pin-Boxen -->
            <g font-size="10" fill="white" font-weight="bold" text-anchor="middle">
              <rect x="125" y="96" width="30" height="22" rx="2" fill="#ff9800" stroke="white" stroke-width="0.5"/>
              <text x="140" y="112">13</text>
              <rect x="285" y="96" width="30" height="22" rx="2" fill="#333" stroke="white" stroke-width="0.5"/>
              <text x="300" y="112" font-size="9">GND</text>
            </g>

            <!-- ===== KABEL: senkrecht vom Arduino zum Breadboard ===== -->
            <!-- Pin 13 → Sp.5 Reihe a (Anschluss Widerstand-Bein 1) -->
            <line x1="140" y1="118" x2="140" y2="240" stroke="#ff9800" stroke-width="2.8" stroke-linecap="round"/>
            <circle cx="140" cy="240" r="3.5" fill="#ff9800" stroke="#c66200" stroke-width="0.8"/>

            <!-- GND → obere -Schiene (Sp.13, x=300) -->
            <line x1="300" y1="118" x2="300" y2="210" stroke="#333" stroke-width="2.8" stroke-linecap="round"/>
            <circle cx="300" cy="210" r="3.5" fill="#333"/>

            <!-- ===== BREADBOARD (UNTEN, volle Breite) ===== -->
            <rect x="20" y="180" width="660" height="240" rx="6" fill="#e8e0d0" stroke="#999" stroke-width="1.5"/>
            <text x="350" y="433" text-anchor="middle" font-size="9" fill="#444" font-weight="bold">Breadboard (32 Spalten)</text>

            <!-- Stromschienen oben + GND -->
            <rect x="50" y="195" width="620" height="9" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="38" y="202" font-size="8" fill="#c00" font-weight="bold">+</text>
            <rect x="50" y="207" width="620" height="9" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="38" y="214" font-size="8" fill="#00c" font-weight="bold">−</text>

            <!-- Spaltennummern (alle 32 Spalten, 20px ab x=60) -->
            <g font-size="6" fill="#888" text-anchor="middle">
              <text x="60" y="230">1</text><text x="80" y="230">2</text><text x="100" y="230">3</text><text x="120" y="230">4</text><text x="140" y="230">5</text><text x="160" y="230">6</text><text x="180" y="230">7</text><text x="200" y="230">8</text><text x="220" y="230">9</text><text x="240" y="230">10</text><text x="260" y="230">11</text><text x="280" y="230">12</text><text x="300" y="230">13</text><text x="320" y="230">14</text><text x="340" y="230">15</text><text x="360" y="230">16</text><text x="380" y="230">17</text><text x="400" y="230">18</text><text x="420" y="230">19</text><text x="440" y="230">20</text><text x="460" y="230">21</text><text x="480" y="230">22</text><text x="500" y="230">23</text><text x="520" y="230">24</text><text x="540" y="230">25</text><text x="560" y="230">26</text><text x="580" y="230">27</text><text x="600" y="230">28</text><text x="620" y="230">29</text><text x="640" y="230">30</text><text x="660" y="230">31</text>
            </g>

            <!-- Reihen a-e Beschriftung + Löcher -->
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

            <!-- Mittelrinne -->
            <rect x="50" y="304" width="620" height="12" rx="2" fill="#d0c8b8"/>
            <text x="350" y="313" text-anchor="middle" font-size="6" fill="#aaa" font-style="italic">Mittelrinne</text>

            <!-- Reihen f-j Beschriftung + Löcher -->
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

            <!-- Untere Stromschienen -->
            <rect x="50" y="389" width="620" height="9" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="38" y="396" font-size="8" fill="#00c" font-weight="bold">−</text>
            <rect x="50" y="401" width="620" height="9" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="38" y="408" font-size="8" fill="#c00" font-weight="bold">+</text>

            <!-- ===== BAUTEILE ===== -->
            <!-- Schema: Pin 13 → Sp.5 Reihe a → 220Ω horizontal Sp.5↔Sp.7 → LED horizontal Sp.7↔Sp.8 → GND-Schiene -->

            <!-- 220Ω-Widerstand horizontal: Bein 1 Sp.5 Reihe c (x=140, y=268), Bein 2 Sp.7 Reihe c (x=180, y=268) -->
            <rect x="140" y="264" width="40" height="8" rx="2" fill="#e8d5a3" stroke="#a08050" stroke-width="1"/>
            <line x1="148" y1="264" x2="148" y2="272" stroke="#e53935" stroke-width="1.2"/>
            <line x1="154" y1="264" x2="154" y2="272" stroke="#e53935" stroke-width="1.2"/>
            <line x1="160" y1="264" x2="160" y2="272" stroke="#6d4c41" stroke-width="1.2"/>
            <line x1="166" y1="264" x2="166" y2="272" stroke="#c6a04a" stroke-width="1.2"/>
            <text x="160" y="261" text-anchor="middle" font-size="6" fill="#654" font-weight="bold">220Ω</text>
            <circle cx="140" cy="268" r="2.5" fill="#e8d5a3" stroke="#864" stroke-width="0.8"/>
            <circle cx="180" cy="268" r="2.5" fill="#e8d5a3" stroke="#864" stroke-width="0.8"/>
            <!-- Beine: Sp.5 Reihe c → Reihe a (Pin-Anschluss), Sp.7 Reihe c → Reihe a (LED-Anode-Anschluss) -->
            <line x1="140" y1="268" x2="140" y2="240" stroke="#864" stroke-width="1.5"/>
            <line x1="180" y1="268" x2="180" y2="240" stroke="#864" stroke-width="1.5"/>

            <!-- LED horizontal: Anode Sp.7 Reihe a (x=180, y=240), Kathode Sp.8 Reihe a (x=200, y=240) -->
            <polygon points="178,234 178,246 192,240" fill="#ef5350" stroke="#c62828" stroke-width="1.2"/>
            <line x1="192" y1="234" x2="192" y2="246" stroke="#c62828" stroke-width="2"/>
            <text x="185" y="222" text-anchor="middle" font-size="7" fill="#c62828" font-weight="bold">LED</text>
            <!-- Lichtstrahlen -->
            <line x1="186" y1="230" x2="190" y2="222" stroke="#ff8a65" stroke-width="0.8"/>
            <line x1="194" y1="230" x2="198" y2="222" stroke="#ff8a65" stroke-width="0.8"/>
            <!-- LED-Beine -->
            <circle cx="180" cy="240" r="2.5" fill="#ef5350" stroke="#600" stroke-width="0.6"/>
            <circle cx="200" cy="240" r="2.5" fill="#864" stroke="#444" stroke-width="0.6"/>
            <!-- Kathoden-Jumper: Sp.8 Reihe a → obere -Schiene -->
            <line x1="200" y1="240" x2="200" y2="212" stroke="#222" stroke-width="1.8" stroke-linecap="round"/>

            <!-- ===== LEGENDE ===== -->
            <rect x="20" y="440" width="660" height="70" rx="6" fill="#fff" stroke="#ddd" stroke-width="1"/>
            <text x="32" y="458" font-size="10" fill="#333" font-weight="bold">Legende:</text>
            <line x1="32" y1="473" x2="62" y2="473" stroke="#ff9800" stroke-width="3" stroke-linecap="round"/>
            <text x="68" y="476" font-size="9" fill="#555">Pin 13 → Sp.5 (Signal)</text>
            <line x1="220" y1="473" x2="250" y2="473" stroke="#333" stroke-width="3" stroke-linecap="round"/>
            <text x="256" y="476" font-size="9" fill="#555">GND → −Schiene (Masse)</text>
            <line x1="430" y1="473" x2="460" y2="473" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
            <text x="466" y="476" font-size="9" fill="#555">LED-Kathode → −Schiene</text>
            <text x="32" y="496" font-size="8.5" fill="#555">Stromfluss: Pin 13 → 220Ω → LED Anode → LED Kathode → GND</text>
          </svg>
        </div>

        <div class="warning-box">
          <strong>LED richtig herum einbauen!</strong><br>
          Das <strong>lange Bein</strong> (Anode, Plus) zeigt zum Widerstand bzw. zum Pin, das <strong>kurze Bein</strong> (Kathode, Minus) zu GND. Falsch herum bleibt die LED dunkel – sie lässt Strom nur in eine Richtung durch.
        </div>

        <div class="info-card" style="border-left: 3px solid #27AE60;">
          <h3>Selber ausprobieren: Vorwiderstand &amp; LED-Strom</h3>
          <p>Eine LED braucht einen <strong>Vorwiderstand</strong>, sonst fließt zu viel Strom und sie brennt durch. Wie viel Strom fließt bei welchem Widerstand? Schieb den Regler und schau zu (Versorgung 5&nbsp;V, rote LED ca. 2&nbsp;V):</p>
          <div style="background:#f8f8f8;border:1px solid #ddd;border-radius:8px;padding:1rem;">
            <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">
              <label for="vwr-slider" style="font-weight:bold;">Vorwiderstand:</label>
              <input id="vwr-slider" type="range" min="47" max="1000" step="1" value="220" style="flex:1;min-width:180px;height:28px;" oninput="var R=+this.value;var I=(5-2)/R*1000;document.getElementById('vwr-r').textContent=R;document.getElementById('vwr-i').textContent=I.toFixed(1);var s=document.getElementById('vwr-status');var d=document.getElementById('vwr-led');if(I&gt;20){s.textContent='Zu viel Strom - die LED brennt durch!';s.style.color='#c0392b';d.style.background='#c0392b';d.style.opacity=1;}else if(I&lt;5){s.textContent='Wenig Strom - die LED leuchtet nur schwach.';s.style.color='#b8860b';d.style.background='#e74c3c';d.style.opacity=0.25;}else{s.textContent='Guter Bereich - die LED leuchtet sicher und hell genug.';s.style.color='#1e8449';d.style.background='#e74c3c';d.style.opacity=(I/20).toFixed(2);}">
              <div id="vwr-led" style="width:26px;height:26px;border-radius:50%;background:#e74c3c;opacity:0.68;box-shadow:0 0 8px #e74c3c;flex:none;"></div>
            </div>
            <p style="margin:0.8rem 0 0;">Widerstand: <strong><span id="vwr-r">220</span>&nbsp;&Omega;</strong> &rarr; Strom durch die LED: <strong><span id="vwr-i">13.6</span>&nbsp;mA</strong></p>
            <p id="vwr-status" style="margin:0.3rem 0 0;font-weight:bold;color:#1e8449;">Guter Bereich - die LED leuchtet sicher und hell genug.</p>
          </div>
          <p style="margin-top:0.8rem;">Dahinter steckt das Ohmsche Gesetz: <code>I = (5&nbsp;V &minus; 2&nbsp;V) / R</code>. Darum nimmt man für eine normale LED am Arduino meist <strong>220&nbsp;&Omega;</strong> &ndash; das ergibt rund 14&nbsp;mA: hell genug und völlig sicher.</p>
        </div>
      `
    },
    example: {
      title: 'Beispiel: Blink-Programm hochladen',
      steps: [
        { label: 'Schritt 1', html: 'Arduino per USB an den Computer anschließen.' },
        { label: 'Schritt 2', html: 'Arduino IDE öffnen und den Blink-Code eintippen (oder über Datei → Beispiele → 01.Basics → Blink laden).' },
        { label: 'Schritt 3', html: 'Auf <strong>✓ Überprüfen</strong> klicken. Unten erscheint "Kompilierung abgeschlossen" – keine Fehler!' },
        { label: 'Schritt 4', html: 'Auf <strong>→ Hochladen</strong> klicken. Die TX/RX-LEDs auf dem Board flackern kurz.' },
        { label: 'Ergebnis', html: 'Die kleine gelbe LED auf dem Board (bei Pin 13) blinkt jetzt im Sekundentakt. Geschafft!' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was macht der Befehl delay(500)?',
        options: [
          'Schaltet Pin 5 ein',
          'Wartet 500 Sekunden',
          'Wartet 500 Millisekunden (= 0,5 Sekunden)',
          'Setzt die Helligkeit auf 500'
        ],
        correct: 2,
        explanation: 'delay() wartet die angegebene Zeit in Millisekunden. 500 ms = 0,5 Sekunden = eine halbe Sekunde.',
        wrongExplanations: {
          0: 'Nein, delay() schaltet keine Pins. Pins schaltest du mit digitalWrite() oder analogWrite() — delay() pausiert nur das Programm.',
          1: 'Vorsicht: delay() arbeitet in MILLISEKUNDEN, nicht Sekunden. 500 ms = 0,5 s. Für 500 Sekunden müsstest du delay(500000) schreiben.',
          3: 'Nein, für Helligkeit (PWM-Werte 0–255) gibt es analogWrite(). delay() macht etwas ganz anderes: es wartet.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Was bedeutet digitalWrite(13, HIGH)?',
        options: [
          'Pin 13 wird als Eingang festgelegt',
          'Pin 13 wird eingeschaltet (5 Volt)',
          'Pin 13 wird auf halbe Helligkeit gesetzt',
          'Pin 13 wird ausgeschaltet'
        ],
        correct: 1,
        explanation: 'HIGH bedeutet "an" = 5 Volt am Pin. LOW wäre "aus" = 0 Volt.',
        wrongExplanations: {
          0: 'Vorsicht: Eingang oder Ausgang wird mit pinMode() festgelegt — das passiert einmalig in setup(). digitalWrite() schaltet danach den Ausgang nur noch an oder aus.',
          2: 'Nein, halbe Helligkeit gibt es bei digitalWrite() nicht — der Befehl kennt nur HIGH (an) und LOW (aus). Für Zwischenwerte brauchst du analogWrite(pin, 128).',
          3: 'Andersrum: HIGH ist AN (5 V). Ausschalten wäre digitalWrite(13, LOW). Eselsbrücke: HIGH = hohe Spannung = an.'
        }
      },
      {
        type: 'ordering',
        question: 'Bringe die Schritte zum Hochladen in die richtige Reihenfolge:',
        items: [
          'Auf "Hochladen" klicken',
          'Arduino per USB anschließen',
          'Code in der IDE schreiben',
          'Auf "Überprüfen" klicken'
        ],
        correctOrder: [1, 2, 3, 0],
        explanation: 'Zuerst muss der Arduino per USB mit dem Computer verbunden sein. Dann schreibst du den Code in der IDE. Mit "Überprüfen" testet die IDE, ob der Code fehlerfrei ist, bevor du ihn mit "Hochladen" auf den Arduino überträgst &ndash; so vermeidest du, fehlerhaften Code aufzuspielen.'
      }
    ]
  },

  // ===================== LEKTION 4 =====================
  {
    id: 4,
    title: 'setup() und loop()',
    explanation: {
      html: `
        <h2>setup() und loop() – Das Grundgerüst</h2>
        <p>Jedes Arduino-Programm (auch <strong>Sketch</strong> genannt) besteht aus <strong>drei Bereichen</strong>:</p>

        <div class="code-card">
          <h4>Die drei Bereiche eines Sketches</h4>
          <pre><code><span class="comment">// ===== BEREICH 1: VARIABLEN =====</span>
<span class="comment">// Hier legst du Namen für Pins und</span>
<span class="comment">// Speicher für Werte an (einmalig)</span>
<span class="keyword">int</span> ledPin = <span class="value">13</span>;
<span class="keyword">int</span> tasterPin = <span class="value">7</span>;

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="comment">// ===== BEREICH 2: EINRICHTUNG =====</span>
  <span class="comment">// Wird EINMAL ausgeführt (beim Start)</span>
  <span class="function">pinMode</span>(ledPin, OUTPUT);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="comment">// ===== BEREICH 3: HAUPTPROGRAMM =====</span>
  <span class="comment">// Wird ENDLOS wiederholt</span>
  <span class="function">digitalWrite</span>(ledPin, HIGH);
  <span class="function">delay</span>(<span class="value">1000</span>);
}</code></pre>
        </div>

        <div class="analogy-box">
          <strong>Alltagsanalogie: Ein Kochrezept</strong><br>
          <strong>Variablen</strong> (oben) = Die Zutatenliste – was du brauchst, bevor es losgeht<br>
          <strong>setup()</strong> = Küchengeräte vorbereiten – Ofen vorheizen, Pfanne bereitstellen → machst du <em>einmal</em><br>
          <strong>loop()</strong> = Kochen – rühren, würzen, probieren → <em>wiederholt sich</em> bis es fertig ist
        </div>

        <hr class="section-divider">

        <svg viewBox="0 0 500 260" style="width:100%;max-width:500px;margin:1em auto;display:block;font-family:system-ui;">
          <!-- Bereich 1: Variablen -->
          <rect x="10" y="10" width="480" height="60" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <text x="25" y="35" font-size="14" fill="#92400E" font-weight="bold">Bereich 1: Variablen</text>
          <text x="25" y="55" font-size="11" fill="#78350F">Pin-Nummern, Zähler, Zustände – werden VOR setup() festgelegt</text>
          <text x="460" y="45" text-anchor="end" font-size="22" fill="#F59E0B" opacity="0.5" font-weight="bold">📋</text>

          <!-- Pfeil Variablen -> setup() (Spitze nach UNTEN) -->
          <polygon points="250,85 240,75 260,75" fill="#999"/>

          <!-- Bereich 2: setup() -->
          <rect x="10" y="90" width="480" height="60" rx="8" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
          <text x="25" y="115" font-size="14" fill="#1E40AF" font-weight="bold">Bereich 2: void setup()</text>
          <text x="25" y="135" font-size="11" fill="#1E3A8A">Pins konfigurieren, Serial starten – läuft EINMAL beim Start</text>
          <text x="460" y="125" text-anchor="end" font-size="16" fill="#2563EB" opacity="0.5" font-weight="bold">1×</text>

          <!-- Pfeil setup() -> loop() (Spitze nach UNTEN) -->
          <polygon points="250,165 240,155 260,155" fill="#999"/>

          <!-- Bereich 3: loop() -->
          <rect x="10" y="170" width="480" height="60" rx="8" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <text x="25" y="195" font-size="14" fill="#166534" font-weight="bold">Bereich 3: void loop()</text>
          <text x="25" y="215" font-size="11" fill="#14532D">LEDs schalten, Sensoren lesen, reagieren – ENDLOS wiederholt</text>
          <text x="460" y="205" text-anchor="end" font-size="16" fill="#16A34A" opacity="0.5" font-weight="bold">∞</text>

          <!-- Rückpfeil loop -->
          <path d="M 495 230 C 510 230, 510 170, 495 170" stroke="#16A34A" stroke-width="2" fill="none" marker-end="url(#arrowGreen)"/>
          <defs>
            <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M 0 0 L 8 4 L 0 8 Z" fill="#16A34A"/>
            </marker>
          </defs>

          <!-- Label -->
          <text x="250" y="255" text-anchor="middle" font-size="10" fill="#999">Die Reihenfolge ist immer gleich: Variablen → setup() → loop() → loop() → loop() ...</text>
        </svg>

        <hr class="section-divider">

        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem; margin: 1.25rem 0;">
          <div class="info-card" style="border-top: 3px solid #F59E0B;">
            <h3>Variablen (oben)</h3>
            <p style="color:var(--text-light); margin-bottom:0.5rem;">Namen für Pins & Werte:</p>
            <ul>
              <li><code>int ledPin = 13;</code></li>
              <li><code>int tasterPin = 7;</code></li>
              <li><code>bool ledAn = false;</code></li>
            </ul>
          </div>
          <div class="info-card" style="border-top: 3px solid var(--accent);">
            <h3>setup()</h3>
            <p style="color:var(--text-light); margin-bottom:0.5rem;">Einmalige Einrichtung:</p>
            <ul>
              <li><code>pinMode(pin, OUTPUT)</code></li>
              <li><code>pinMode(pin, INPUT)</code></li>
              <li><code>Serial.begin(9600)</code></li>
            </ul>
          </div>
          <div class="info-card" style="border-top: 3px solid var(--success);">
            <h3>loop()</h3>
            <p style="color:var(--text-light); margin-bottom:0.5rem;">Alles was sich wiederholt:</p>
            <ul>
              <li>Sensoren auslesen</li>
              <li>LEDs schalten</li>
              <li>Auf Taster reagieren</li>
            </ul>
          </div>
        </div>

        <div class="tip-box">
          <strong>Warum Variablen oben?</strong> Wenn du <code>int ledPin = 13;</code> ganz oben hinschreibst, können sowohl setup() als auch loop() diesen Namen benutzen. Das ist wie ein <strong>Namensschild</strong> für den Pin – statt überall "13" zu schreiben, schreibst du "ledPin". Wenn du die LED später an einen anderen Pin steckst, änderst du nur eine einzige Zeile.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Kommentare</h3>
          <p>Mit <code>//</code> kannst du Kommentare schreiben. Der Arduino ignoriert sie – sie sind nur für dich als Erinnerung:</p>
          <div class="code-card" style="margin-bottom:0;">
            <pre><code><span class="comment">// Das ist ein Kommentar</span>
<span class="function">digitalWrite</span>(<span class="value">13</span>, HIGH); <span class="comment">// LED an</span></code></pre>
          </div>
        </div>

        <div class="warning-box">
          <strong>Semikolons nicht vergessen!</strong><br>
          Jeder Befehl endet mit einem <strong>Semikolon</strong> (<code>;</code>). Vergisst du es, gibt die IDE einen Fehler aus. Das ist wie der <strong>Punkt am Satzende</strong> – ohne ihn versteht der Arduino nicht, wo ein Befehl aufhört.
        </div>
      `
    },
    example: {
      title: 'Beispiel: LED mit Serial Monitor',
      steps: [
        { label: 'Der Code', html: '<pre><code>void setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(9600);\n  Serial.println("Arduino gestartet!");\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  Serial.println("LED an");\n  delay(1000);\n  digitalWrite(13, LOW);\n  Serial.println("LED aus");\n  delay(1000);\n}</code></pre>' },
        { label: 'Was passiert in setup()?', html: 'Pin 13 wird als Ausgang konfiguriert. Der Serial Monitor wird mit 9600 Baud gestartet. Einmalig wird "Arduino gestartet!" ausgegeben.' },
        { label: 'Was passiert in loop()?', html: 'Die LED geht an, "LED an" erscheint im Monitor. Nach 1 Sekunde geht sie aus, "LED aus" erscheint. Das wiederholt sich endlos.' },
        { label: 'Serial Monitor öffnen', html: 'Klicke in der IDE auf die Lupe (oben rechts). Du siehst die Nachrichten, die der Arduino sendet – super zum Debuggen!' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie oft wird der Code in setup() ausgeführt?',
        options: [
          'Gar nicht',
          'Genau einmal (beim Start)',
          'Endlos wiederholt',
          'Zweimal'
        ],
        correct: 1,
        explanation: 'setup() wird genau einmal ausgeführt – wenn der Arduino startet oder nach einem Reset. Dort richtest du alles ein.',
        wrongExplanations: {
          0: 'Doch — setup() läuft tatsächlich. Sonst wüsste der Arduino z.B. gar nicht, dass Pin 13 ein Ausgang sein soll, und nichts würde funktionieren.',
          2: 'Endlos wiederholt wird nur loop(). setup() ist die EINMALIGE Einrichtung beim Start — wie das Ofen-Vorheizen, bevor du anfängst zu kochen.',
          3: 'Nein, nur einmal. Erst wenn du den roten Reset-Button drückst (oder den Strom trennst und wieder anschließt), startet setup() neu.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Was passiert, wenn du ein Semikolon vergisst?',
        options: [
          'Der Arduino ignoriert die Zeile',
          'Die IDE zeigt einen Fehler an',
          'Die LED blinkt schneller',
          'Nichts, es funktioniert trotzdem'
        ],
        correct: 1,
        explanation: 'Ohne Semikolon kann der Arduino-Compiler den Code nicht verstehen. Du bekommst eine Fehlermeldung – meist "expected \';\' before..."',
        wrongExplanations: {
          0: 'Nein, der Compiler ignoriert keine Zeile — er bricht ab. Ohne Semikolon weiß er nicht, wo der Befehl endet, und meldet einen Fehler.',
          2: 'Nein, ein fehlendes Semikolon ist KEIN Tempo-Problem. Der Code wird gar nicht erst hochgeladen, weil die IDE ihn nicht kompilieren kann.',
          3: 'Doch, das fehlende Semikolon ist ein harter Fehler. Die Fehlermeldung lautet meist: expected \';\' before next-token.'
        }
      },
      {
        type: 'ordering',
        question: 'In welcher Reihenfolge werden diese Codezeilen ausgeführt?',
        items: [
          'loop() beginnt von vorne',
          'setup() wird ausgeführt',
          'Erster Durchlauf von loop()',
          'Arduino wird eingeschaltet'
        ],
        correctOrder: [3, 1, 2, 0],
        explanation: 'Sobald der Arduino eingeschaltet wird, läuft setup() genau einmal &ndash; hier werden die Grundeinstellungen festgelegt. Danach beginnt loop() mit dem ersten Durchlauf und wiederholt sich immer wieder von vorne, solange der Arduino Strom hat.'
      }
    ]
  }
];
