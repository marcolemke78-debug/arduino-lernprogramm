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
          0: 'Andersherum: Ein Computer ist deutlich schneller. Der Arduino-Chip arbeitet mit 16 MHz, ein moderner Computer mit mehreren GHz – etwa 1000× schneller.',
          2: 'Doch, ein Arduino braucht Strom – aber sehr wenig (ca. 50 mA, weniger als eine LED-Lampe).',
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
        ]
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
        { label: 'Lichtsensor', html: 'Ein Lichtsensor braucht einen <strong>analogen Pin</strong> (z.B. A0). Analoge Pins können Werte zwischen 0 und 1023 messen – nicht nur an/aus.' },
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
        ]
      },
      {
        type: 'multiple-choice',
        question: 'Wie viele analoge Pins hat der Arduino Uno?',
        options: ['4', '6', '8', '14'],
        correct: 1,
        explanation: 'Der Arduino Uno hat 6 analoge Pins: A0 bis A5. Sie können Spannungen zwischen 0V und 5V messen.'
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
        explanation: 'Ohne GND ist der Stromkreis nicht geschlossen – kein Strom fließt, die LED bleibt dunkel. Wie ein Wasserkreislauf ohne Rückfluss.'
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
          <svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:700px;font-family:Arial,Helvetica,sans-serif;background:#f8f9fa;border-radius:8px;">
            <!-- ==================== BREADBOARD ==================== -->
            <rect x="10" y="20" width="340" height="260" rx="6" fill="#e8e4d9" stroke="#bbb" stroke-width="1.5"/>
            <text x="180" y="15" text-anchor="middle" font-size="11" fill="#666">Breadboard</text>

            <!-- Obere Stromschienen -->
            <!-- + Schiene (rot) -->
            <line x1="30" y1="38" x2="330" y2="38" stroke="#e53935" stroke-width="2"/>
            <text x="20" y="42" font-size="10" fill="#e53935" font-weight="bold">+</text>
            <!-- - Schiene (blau / GND) -->
            <line x1="30" y1="54" x2="330" y2="54" stroke="#1e88e5" stroke-width="2"/>
            <text x="20" y="58" font-size="10" fill="#1e88e5" font-weight="bold">−</text>

            <!-- Obere Schienen-Loecher -->
            <g fill="none" stroke="#999" stroke-width="0.5">
              <!-- + Schiene Loecher -->
              <circle cx="60" cy="38" r="3"/><circle cx="80" cy="38" r="3"/><circle cx="100" cy="38" r="3"/>
              <circle cx="120" cy="38" r="3"/><circle cx="140" cy="38" r="3"/><circle cx="160" cy="38" r="3"/>
              <circle cx="180" cy="38" r="3"/><circle cx="200" cy="38" r="3"/><circle cx="220" cy="38" r="3"/>
              <circle cx="240" cy="38" r="3"/><circle cx="260" cy="38" r="3"/><circle cx="280" cy="38" r="3"/>
              <circle cx="300" cy="38" r="3"/>
              <!-- - Schiene Loecher -->
              <circle cx="60" cy="54" r="3"/><circle cx="80" cy="54" r="3"/><circle cx="100" cy="54" r="3"/>
              <circle cx="120" cy="54" r="3"/><circle cx="140" cy="54" r="3"/><circle cx="160" cy="54" r="3"/>
              <circle cx="180" cy="54" r="3"/><circle cx="200" cy="54" r="3"/><circle cx="220" cy="54" r="3"/>
              <circle cx="240" cy="54" r="3"/><circle cx="260" cy="54" r="3"/><circle cx="280" cy="54" r="3"/>
              <circle cx="300" cy="54" r="3"/>
            </g>

            <!-- Spaltennummern -->
            <g font-size="8" fill="#888" text-anchor="middle">
              <text x="60" y="78">1</text><text x="80" y="78">2</text><text x="100" y="78">3</text>
              <text x="120" y="78">4</text><text x="140" y="78">5</text><text x="160" y="78">6</text>
              <text x="180" y="78">7</text><text x="200" y="78">8</text><text x="220" y="78">9</text>
              <text x="240" y="78">10</text><text x="260" y="78">11</text><text x="280" y="78">12</text>
              <text x="300" y="78">13</text>
            </g>

            <!-- Reihen-Beschriftungen -->
            <g font-size="8" fill="#888">
              <text x="38" y="92">a</text><text x="38" y="108">b</text><text x="38" y="124">c</text>
              <text x="38" y="140">d</text><text x="38" y="156">e</text>
            </g>

            <!-- Mittelrinne -->
            <rect x="30" y="162" width="300" height="8" rx="2" fill="#d5d0c4"/>

            <!-- Reihen f-j Beschriftungen -->
            <g font-size="8" fill="#888">
              <text x="38" y="182">f</text><text x="38" y="198">g</text><text x="38" y="214">h</text>
              <text x="38" y="230">i</text><text x="38" y="246">j</text>
            </g>

            <!-- Untere Stromschienen -->
            <line x1="30" y1="258" x2="330" y2="258" stroke="#e53935" stroke-width="2"/>
            <text x="20" y="262" font-size="10" fill="#e53935" font-weight="bold">+</text>
            <line x1="30" y1="272" x2="330" y2="272" stroke="#1e88e5" stroke-width="2"/>
            <text x="20" y="276" font-size="10" fill="#1e88e5" font-weight="bold">−</text>

            <!-- Reihe a Loecher (y=88) -->
            <g fill="none" stroke="#999" stroke-width="0.5">
              <circle cx="60" cy="88" r="3"/><circle cx="80" cy="88" r="3"/><circle cx="100" cy="88" r="3"/>
              <circle cx="120" cy="88" r="3"/><circle cx="140" cy="88" r="3"/><circle cx="160" cy="88" r="3"/>
              <circle cx="180" cy="88" r="3"/><circle cx="200" cy="88" r="3"/><circle cx="220" cy="88" r="3"/>
              <circle cx="240" cy="88" r="3"/><circle cx="260" cy="88" r="3"/><circle cx="280" cy="88" r="3"/>
              <circle cx="300" cy="88" r="3"/>
            </g>
            <!-- Reihe b Loecher (y=104) -->
            <g fill="none" stroke="#999" stroke-width="0.5">
              <circle cx="60" cy="104" r="3"/><circle cx="80" cy="104" r="3"/><circle cx="100" cy="104" r="3"/>
              <circle cx="120" cy="104" r="3"/><circle cx="140" cy="104" r="3"/><circle cx="160" cy="104" r="3"/>
              <circle cx="180" cy="104" r="3"/><circle cx="200" cy="104" r="3"/><circle cx="220" cy="104" r="3"/>
              <circle cx="240" cy="104" r="3"/><circle cx="260" cy="104" r="3"/><circle cx="280" cy="104" r="3"/>
              <circle cx="300" cy="104" r="3"/>
            </g>
            <!-- Reihe c Loecher (y=120) -->
            <g fill="none" stroke="#999" stroke-width="0.5">
              <circle cx="60" cy="120" r="3"/><circle cx="80" cy="120" r="3"/><circle cx="100" cy="120" r="3"/>
              <circle cx="120" cy="120" r="3"/><circle cx="140" cy="120" r="3"/><circle cx="160" cy="120" r="3"/>
              <circle cx="180" cy="120" r="3"/><circle cx="200" cy="120" r="3"/><circle cx="220" cy="120" r="3"/>
              <circle cx="240" cy="120" r="3"/><circle cx="260" cy="120" r="3"/><circle cx="280" cy="120" r="3"/>
              <circle cx="300" cy="120" r="3"/>
            </g>
            <!-- Reihe d Loecher (y=136) -->
            <g fill="none" stroke="#999" stroke-width="0.5">
              <circle cx="60" cy="136" r="3"/><circle cx="80" cy="136" r="3"/><circle cx="100" cy="136" r="3"/>
              <circle cx="120" cy="136" r="3"/><circle cx="140" cy="136" r="3"/><circle cx="160" cy="136" r="3"/>
              <circle cx="180" cy="136" r="3"/><circle cx="200" cy="136" r="3"/><circle cx="220" cy="136" r="3"/>
              <circle cx="240" cy="136" r="3"/><circle cx="260" cy="136" r="3"/><circle cx="280" cy="136" r="3"/>
              <circle cx="300" cy="136" r="3"/>
            </g>
            <!-- Reihe e Loecher (y=152) -->
            <g fill="none" stroke="#999" stroke-width="0.5">
              <circle cx="60" cy="152" r="3"/><circle cx="80" cy="152" r="3"/><circle cx="100" cy="152" r="3"/>
              <circle cx="120" cy="152" r="3"/><circle cx="140" cy="152" r="3"/><circle cx="160" cy="152" r="3"/>
              <circle cx="180" cy="152" r="3"/><circle cx="200" cy="152" r="3"/><circle cx="220" cy="152" r="3"/>
              <circle cx="240" cy="152" r="3"/><circle cx="260" cy="152" r="3"/><circle cx="280" cy="152" r="3"/>
              <circle cx="300" cy="152" r="3"/>
            </g>

            <!-- ==================== BAUTEILE ==================== -->

            <!-- Widerstand: Spalte 5 Reihe d (140,136) -> Spalte 7 Reihe d (180,136) -->
            <line x1="140" y1="136" x2="148" y2="136" stroke="#777" stroke-width="2"/>
            <rect x="148" y="130" width="24" height="12" rx="2" fill="#e8d5a3" stroke="#a08050" stroke-width="1"/>
            <!-- Farbcode-Ringe -->
            <rect x="152" y="130" width="3" height="12" fill="#e53935"/>
            <rect x="157" y="130" width="3" height="12" fill="#e53935"/>
            <rect x="162" y="130" width="3" height="12" fill="#6d4c41"/>
            <rect x="167" y="130" width="3" height="12" fill="#c6a04a"/>
            <line x1="172" y1="136" x2="180" y2="136" stroke="#777" stroke-width="2"/>
            <text x="160" y="150" text-anchor="middle" font-size="7" fill="#666">220&#937;</text>

            <!-- LED: Anode Spalte 7 Reihe b (180,104), Kathode Spalte 8 Reihe b (200,104) -->
            <!-- LED-Koerper -->
            <g>
              <!-- Anode-Draht -->
              <line x1="180" y1="104" x2="184" y2="104" stroke="#777" stroke-width="1.5"/>
              <!-- Dreieck (Anode -> Kathode, zeigt nach rechts) -->
              <polygon points="184,96 196,104 184,112" fill="#ef5350" stroke="#c62828" stroke-width="0.8"/>
              <!-- Kathoden-Strich -->
              <line x1="196" y1="96" x2="196" y2="112" stroke="#c62828" stroke-width="1.5"/>
              <!-- Kathode-Draht -->
              <line x1="196" y1="104" x2="200" y2="104" stroke="#777" stroke-width="1.5"/>
              <!-- Licht-Strahlen -->
              <line x1="192" y1="93" x2="195" y2="87" stroke="#ff8a65" stroke-width="0.8"/>
              <line x1="197" y1="92" x2="201" y2="86" stroke="#ff8a65" stroke-width="0.8"/>
            </g>
            <text x="190" y="82" text-anchor="middle" font-size="7" fill="#c62828">LED</text>

            <!-- ==================== KABEL ==================== -->

            <!-- Kabel 1: Arduino Pin 13 (605,117) -> Spalte 5 Reihe a (140,88) – orange -->
            <circle cx="140" cy="88" r="3.5" fill="#ff9800"/>
            <path d="M 140 88 C 140 50, 500 50, 605 117" stroke="#ff9800" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <text x="350" y="48" font-size="7" fill="#e65100" font-weight="bold">Pin 13</text>

            <!-- Kabel 2: Spalte 8 Reihe c (200,120) -> obere -Schiene (GND-Verbindung auf Breadboard) – schwarz -->
            <circle cx="200" cy="120" r="3.5" fill="#333"/>
            <line x1="200" y1="120" x2="200" y2="54" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>

            <!-- Kabel 3: Arduino GND (485,204) -> obere -Schiene (220,54) – schwarzes Kabel -->
            <circle cx="220" cy="54" r="3.5" fill="#333"/>
            <path d="M 220 54 C 220 20, 400 20, 485 204" stroke="#333" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-dasharray="6,3"/>
            <text x="340" y="18" font-size="7" fill="#333" font-weight="bold">GND</text>

            <!-- ==================== ARDUINO ==================== -->
            <rect x="410" y="60" width="240" height="220" rx="8" fill="#1565c0" stroke="#0d47a1" stroke-width="2"/>
            <text x="530" y="90" text-anchor="middle" font-size="14" fill="white" font-weight="bold">Arduino Uno</text>

            <!-- USB-Buchse -->
            <rect x="510" y="45" width="40" height="20" rx="3" fill="#bbb" stroke="#888" stroke-width="1"/>
            <text x="530" y="59" text-anchor="middle" font-size="7" fill="#555">USB</text>

            <!-- Digital Pins Header -->
            <rect x="440" y="108" width="180" height="18" rx="3" fill="#0d47a1"/>
            <text x="530" y="105" text-anchor="middle" font-size="8" fill="#bbdefb">DIGITAL PINS</text>

            <!-- Pin-Loecher -->
            <g fill="#1a237e" stroke="#90caf9" stroke-width="0.8">
              <circle cx="455" cy="117" r="4.5"/><text x="455" y="137" text-anchor="middle" font-size="6" fill="#bbdefb">0</text>
              <circle cx="470" cy="117" r="4.5"/><text x="470" y="137" text-anchor="middle" font-size="6" fill="#bbdefb">1</text>
              <circle cx="485" cy="117" r="4.5"/><text x="485" y="137" text-anchor="middle" font-size="6" fill="#bbdefb">2</text>
              <circle cx="500" cy="117" r="4.5"/>
              <circle cx="515" cy="117" r="4.5"/>
              <circle cx="530" cy="117" r="4.5"/>
              <circle cx="545" cy="117" r="4.5"/>
              <circle cx="560" cy="117" r="4.5"/>
              <circle cx="575" cy="117" r="4.5"/>
              <circle cx="590" cy="117" r="4.5"/>
              <circle cx="605" cy="117" r="4.5"/>
            </g>

            <!-- Pin 13 hervorheben -->
            <circle cx="605" cy="117" r="5" fill="#ff9800" stroke="#fff" stroke-width="1.5"/>
            <text x="605" y="137" text-anchor="middle" font-size="7" fill="#ff9800" font-weight="bold">13</text>

            <!-- GND / Power Header -->
            <rect x="440" y="195" width="180" height="18" rx="3" fill="#0d47a1"/>
            <text x="530" y="192" text-anchor="middle" font-size="8" fill="#bbdefb">POWER</text>
            <g fill="#1a237e" stroke="#90caf9" stroke-width="0.8">
              <circle cx="455" cy="204" r="4.5"/>
              <circle cx="470" cy="204" r="4.5"/>
              <circle cx="485" cy="204" r="4.5"/>
              <circle cx="500" cy="204" r="4.5"/>
              <circle cx="515" cy="204" r="4.5"/>
              <circle cx="530" cy="204" r="4.5"/>
            </g>
            <!-- GND hervorheben -->
            <circle cx="485" cy="204" r="5" fill="#333" stroke="#fff" stroke-width="1.5"/>
            <text x="485" y="224" text-anchor="middle" font-size="7" fill="#fff" font-weight="bold">GND</text>
            <text x="455" y="224" text-anchor="middle" font-size="6" fill="#bbdefb">RST</text>
            <text x="470" y="224" text-anchor="middle" font-size="6" fill="#bbdefb">3.3V</text>
            <text x="500" y="224" text-anchor="middle" font-size="6" fill="#bbdefb">5V</text>

            <!-- Onboard LED bei Pin 13 -->
            <rect x="595" y="145" width="20" height="10" rx="2" fill="#fff9c4" stroke="#f9a825" stroke-width="0.8"/>
            <text x="605" y="153" text-anchor="middle" font-size="5" fill="#f57f17">L</text>
            <text x="605" y="165" text-anchor="middle" font-size="6" fill="#bbdefb">LED</text>

            <!-- ==================== LEGENDE ==================== -->
            <rect x="10" y="310" width="680" height="100" rx="6" fill="#fff" stroke="#ddd" stroke-width="1"/>
            <text x="20" y="330" font-size="11" fill="#333" font-weight="bold">Legende:</text>

            <!-- Kabel orange -->
            <line x1="20" y1="348" x2="50" y2="348" stroke="#ff9800" stroke-width="3" stroke-linecap="round"/>
            <text x="58" y="352" font-size="9" fill="#555">Pin 13 → Spalte 5, Reihe a (Signal)</text>

            <!-- Kabel schwarz (durchgezogen) -->
            <line x1="20" y1="368" x2="50" y2="368" stroke="#333" stroke-width="3" stroke-linecap="round"/>
            <text x="58" y="372" font-size="9" fill="#555">Spalte 8, Reihe c → obere −Schiene (GND auf Breadboard)</text>

            <!-- Kabel schwarz (gestrichelt) -->
            <line x1="20" y1="388" x2="50" y2="388" stroke="#333" stroke-width="3" stroke-linecap="round" stroke-dasharray="6,3"/>
            <text x="58" y="392" font-size="9" fill="#555">Arduino GND → obere −Schiene</text>

            <!-- Widerstand-Symbol -->
            <rect x="370" y="340" width="22" height="10" rx="2" fill="#e8d5a3" stroke="#a08050" stroke-width="1"/>
            <text x="400" y="352" font-size="9" fill="#555">220&#937; Widerstand</text>

            <!-- LED-Symbol -->
            <polygon points="370,370 382,376 370,382" fill="#ef5350" stroke="#c62828" stroke-width="0.8"/>
            <line x1="382" y1="370" x2="382" y2="382" stroke="#c62828" stroke-width="1.2"/>
            <text x="400" y="380" font-size="9" fill="#555">Rote LED (Dreieck = Anode → Kathode)</text>
          </svg>
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
        explanation: 'delay() wartet die angegebene Zeit in Millisekunden. 500 ms = 0,5 Sekunden = eine halbe Sekunde.'
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
        explanation: 'HIGH bedeutet "an" = 5 Volt am Pin. LOW wäre "aus" = 0 Volt.'
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
        correctOrder: [1, 2, 3, 0]
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

          <!-- Pfeil -->
          <polygon points="250,75 240,85 260,85" fill="#999"/>

          <!-- Bereich 2: setup() -->
          <rect x="10" y="90" width="480" height="60" rx="8" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
          <text x="25" y="115" font-size="14" fill="#1E40AF" font-weight="bold">Bereich 2: void setup()</text>
          <text x="25" y="135" font-size="11" fill="#1E3A8A">Pins konfigurieren, Serial starten – läuft EINMAL beim Start</text>
          <text x="460" y="125" text-anchor="end" font-size="16" fill="#2563EB" opacity="0.5" font-weight="bold">1×</text>

          <!-- Pfeil -->
          <polygon points="250,155 240,165 260,165" fill="#999"/>

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
        explanation: 'setup() wird genau einmal ausgeführt – wenn der Arduino startet oder nach einem Reset. Dort richtest du alles ein.'
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
        explanation: 'Ohne Semikolon kann der Arduino-Compiler den Code nicht verstehen. Du bekommst eine Fehlermeldung – meist "expected \';\' before..."'
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
        correctOrder: [3, 1, 2, 0]
      }
    ]
  }
];
