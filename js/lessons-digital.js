const LESSONS_DIGITAL = [
  // ===================== LEKTION 5 =====================
  {
    id: 5,
    title: 'LEDs ansteuern',
    explanation: {
      html: `
        <h2>LEDs ansteuern mit digitalWrite()</h2>
        <p>In Lektion 3 hast du schon die eingebaute LED an Pin 13 blinken lassen. Jetzt gehen wir einen Schritt weiter: Du lernst, <strong>eigene LEDs</strong> an beliebigen Pins anzuschliessen und zu steuern.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Stell dir einen Lichtschalter vor. Du drueckst ihn rein (= <code>HIGH</code>), das Licht geht an. Du drueckst ihn raus (= <code>LOW</code>), das Licht geht aus. <code>digitalWrite()</code> ist genau dieser Schalter &ndash; nur digital gesteuert.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Der Befehl: digitalWrite()</h3>
          <p>Mit <code>digitalWrite(pin, zustand)</code> schaltest du einen digitalen Pin ein oder aus:</p>
          <table class="icon-table">
            <tr><th>Parameter</th><th>Bedeutung</th><th>Beispiel</th></tr>
            <tr><td><strong>pin</strong></td><td>Die Pin-Nummer (0&ndash;13)</td><td><code>8</code></td></tr>
            <tr><td><strong>HIGH</strong></td><td>Pin einschalten (5 Volt)</td><td>LED leuchtet</td></tr>
            <tr><td><strong>LOW</strong></td><td>Pin ausschalten (0 Volt)</td><td>LED ist aus</td></tr>
          </table>
        </div>

        <div class="warning-box">
          <strong>Nicht vergessen:</strong> Bevor du <code>digitalWrite()</code> benutzen kannst, musst du den Pin in <code>setup()</code> als Ausgang festlegen:<br>
          <code>pinMode(8, OUTPUT);</code>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Warum braucht die LED einen Vorwiderstand?</h3>
          <p>Eine LED ist empfindlich. Wenn du sie <strong>direkt</strong> an 5 Volt anschliesst, fliesst zu viel Strom &ndash; und die LED brennt durch!</p>

          <div class="analogy-box">
            <strong>Alltagsanalogie:</strong> Stell dir einen Wasserschlauch vor. Wenn du den Hahn voll aufdrehst, spritzt das Wasser ueberall hin und macht alles kaputt. Ein <strong>Vorwiderstand</strong> ist wie ein Drosselventil: Er begrenzt den Wasserfluss (= Strom) auf ein sicheres Mass.
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
            <div class="warning-box" style="margin:0;">
              <strong>Ohne Widerstand:</strong><br>
              5V &rarr; LED &rarr; GND<br>
              Zu viel Strom &rarr; LED kaputt!
            </div>
            <div class="tip-box" style="margin:0;">
              <strong>Mit Widerstand:</strong><br>
              5V &rarr; 220&Omega; &rarr; LED &rarr; GND<br>
              Strom begrenzt &rarr; LED leuchtet sicher!
            </div>
          </div>
        </div>

        <div class="tip-box">
          <strong>Faustregel:</strong> Fuer Standard-LEDs (rot, gruen, gelb) nimmst du immer einen <strong>220 Ohm Widerstand</strong>. Damit bist du auf der sicheren Seite!
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>LED-Polung: Plus und Minus erkennen</h3>
          <p>Eine LED hat zwei Beinchen &ndash; und sie funktioniert nur in <strong>einer Richtung</strong>:</p>
          <table class="icon-table">
            <tr><th>Beinchen</th><th>Name</th><th>Erkennungsmerkmal</th></tr>
            <tr><td><strong>Langes Bein</strong></td><td>Anode (+)</td><td>Strom fliesst hier REIN</td></tr>
            <tr><td><strong>Kurzes Bein</strong></td><td>Kathode (&minus;)</td><td>Strom fliesst hier RAUS (zu GND)</td></tr>
          </table>

          <div class="tip-box">
            <strong>Eselsbruecke:</strong> <em>"Plus ist laenger, weil es mehr zu bieten hat."</em> Oder: Kathode hat ein <strong>K</strong> wie <strong>K</strong>urz.
          </div>

          <div class="warning-box">
            <strong>Falsch herum eingesteckt?</strong> Die LED leuchtet einfach nicht. Keine Panik &ndash; sie geht nicht kaputt. Einfach umdrehen!
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die Schaltung: LED an Pin 8</h3>
          <p>So schliesst du eine LED korrekt an:</p>

          <svg viewBox="0 0 560 340" style="width:100%;max-width:560px;margin:1em auto;display:block;font-family:system-ui;">
            <!-- Hintergrund -->
            <rect x="0" y="0" width="560" height="340" rx="8" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>

            <!-- Titel -->
            <text x="280" y="25" text-anchor="middle" font-size="13" fill="#333" font-weight="bold">Schaltung: LED an Pin 8</text>

            <!-- Arduino (vereinfacht) -->
            <rect x="20" y="60" width="100" height="150" rx="6" fill="#0068B5" stroke="#004080" stroke-width="2"/>
            <text x="70" y="125" text-anchor="middle" font-size="13" fill="white" font-weight="bold">Arduino</text>
            <text x="70" y="142" text-anchor="middle" font-size="10" fill="#B0D4F1">Uno</text>

            <!-- Pin 8 Beschriftung -->
            <rect x="120" y="85" width="35" height="16" rx="3" fill="#222"/>
            <text x="137" y="97" text-anchor="middle" font-size="9" fill="white">Pin 8</text>

            <!-- GND Beschriftung -->
            <rect x="120" y="165" width="35" height="16" rx="3" fill="#222"/>
            <text x="137" y="177" text-anchor="middle" font-size="9" fill="white">GND</text>

            <!-- Breadboard -->
            <rect x="185" y="45" width="350" height="230" rx="6" fill="#f0ede6" stroke="#c8c3b8" stroke-width="1.5"/>
            <text x="360" y="65" text-anchor="middle" font-size="10" fill="#999">Breadboard</text>

            <!-- Plus-Schiene oben -->
            <rect x="195" y="72" width="330" height="14" rx="2" fill="#FDEAEA" stroke="#E74C3C" stroke-width="0.5"/>
            <text x="200" y="83" font-size="9" fill="#E74C3C" font-weight="bold">+</text>

            <!-- Minus-Schiene oben -->
            <rect x="195" y="88" width="330" height="14" rx="2" fill="#E8F0FE" stroke="#3498db" stroke-width="0.5"/>
            <text x="200" y="99" font-size="9" fill="#3498db" font-weight="bold">&minus;</text>

            <!-- Reihen-Markierungen (5er-Gruppen) -->
            <text x="215" y="120" font-size="8" fill="#aaa">a</text>
            <text x="215" y="133" font-size="8" fill="#aaa">b</text>
            <text x="215" y="146" font-size="8" fill="#aaa">c</text>
            <text x="215" y="159" font-size="8" fill="#aaa">d</text>
            <text x="215" y="172" font-size="8" fill="#aaa">e</text>

            <!-- Steckplaetze Reihe (5er-Gruppe bei Spalte 5) -->
            <circle cx="260" cy="117" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>
            <circle cx="260" cy="130" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>
            <circle cx="260" cy="143" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>
            <circle cx="260" cy="156" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>
            <circle cx="260" cy="169" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>

            <!-- Steckplaetze Reihe (5er-Gruppe bei Spalte 10) -->
            <circle cx="320" cy="117" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>
            <circle cx="320" cy="130" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>
            <circle cx="320" cy="143" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>
            <circle cx="320" cy="156" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>
            <circle cx="320" cy="169" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>

            <!-- Steckplaetze Reihe (5er-Gruppe bei Spalte 15) -->
            <circle cx="380" cy="117" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>
            <circle cx="380" cy="130" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>
            <circle cx="380" cy="143" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>
            <circle cx="380" cy="156" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>
            <circle cx="380" cy="169" r="3" fill="#ddd" stroke="#bbb" stroke-width="0.5"/>

            <!-- Kabel: Pin 8 zum Breadboard (rot) -->
            <line x1="155" y1="93" x2="260" y2="93" stroke="#E74C3C" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="260" y1="93" x2="260" y2="117" stroke="#E74C3C" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="260" cy="117" r="4" fill="#E74C3C"/>

            <!-- Widerstand (zwischen Spalte 5 Reihe c und Spalte 10 Reihe c) -->
            <rect x="268" y="137" width="44" height="14" rx="3" fill="#F5E6CC" stroke="#C8A96E" stroke-width="1.5"/>
            <text x="290" y="148" text-anchor="middle" font-size="9" fill="#7D5A29" font-weight="bold">220&Omega;</text>
            <!-- Widerstand-Beinchen -->
            <line x1="260" y1="143" x2="268" y2="143" stroke="#888" stroke-width="1.5"/>
            <line x1="312" y1="143" x2="320" y2="143" stroke="#888" stroke-width="1.5"/>
            <circle cx="260" cy="143" r="4" fill="#C8A96E"/>
            <circle cx="320" cy="143" r="4" fill="#C8A96E"/>

            <!-- LED -->
            <!-- Anode (langes Bein) in Spalte 10 Reihe b -->
            <circle cx="320" cy="130" r="4" fill="#FF6B6B"/>
            <!-- Kathode (kurzes Bein) in Spalte 15 Reihe b -->
            <circle cx="380" cy="130" r="4" fill="#CC4444"/>

            <!-- LED-Koerper -->
            <polygon points="325,118 365,130 325,142" fill="#FF6B6B" stroke="#CC4444" stroke-width="1.5"/>
            <line x1="365" y1="118" x2="365" y2="142" stroke="#CC4444" stroke-width="2"/>
            <!-- Leuchtlinien -->
            <line x1="358" y1="112" x2="368" y2="104" stroke="#FFD93D" stroke-width="1.5"/>
            <line x1="365" y1="115" x2="378" y2="108" stroke="#FFD93D" stroke-width="1.5"/>

            <!-- LED Anode/Kathode Beschriftungen -->
            <text x="320" y="112" text-anchor="middle" font-size="8" fill="#27AE60" font-weight="bold">+ (lang)</text>
            <text x="388" y="112" text-anchor="start" font-size="8" fill="#E74C3C" font-weight="bold">&minus; (kurz)</text>

            <!-- Verbindung LED-Beinchen -->
            <line x1="320" y1="130" x2="325" y2="130" stroke="#FF6B6B" stroke-width="1.5"/>
            <line x1="365" y1="130" x2="380" y2="130" stroke="#CC4444" stroke-width="1.5"/>

            <!-- Kabel: Kathode zur GND-Schiene (schwarz) -->
            <line x1="380" y1="130" x2="380" y2="99" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="380" cy="99" r="4" fill="#333"/>

            <!-- Kabel: GND-Schiene zum Arduino GND (schwarz) -->
            <line x1="155" y1="173" x2="200" y2="173" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="200" y1="173" x2="200" y2="99" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="200" cy="99" r="4" fill="#333"/>

            <!-- Minus-Schiene Verbindungslinie -->
            <line x1="200" y1="95" x2="380" y2="95" stroke="#333" stroke-width="1" stroke-dasharray="3,3" opacity="0.4"/>

            <!-- Stromfluss-Pfeil -->
            <text x="280" y="295" text-anchor="middle" font-size="11" fill="#0068B5" font-weight="bold">Stromfluss</text>
            <line x1="175" y1="305" x2="410" y2="305" stroke="#0068B5" stroke-width="1.5" stroke-dasharray="5,3"/>
            <polygon points="410,301 422,305 410,309" fill="#0068B5"/>
            <text x="185" y="320" font-size="9" fill="#555">Pin 8</text>
            <text x="260" y="320" font-size="9" fill="#555">Widerstand</text>
            <text x="340" y="320" font-size="9" fill="#555">LED</text>
            <text x="400" y="320" font-size="9" fill="#555">GND</text>
          </svg>

          <ol class="step-list">
            <li><strong>Pin 8</strong> mit dem <strong>Widerstand</strong> (220 &Omega;) verbinden</li>
            <li>Widerstand mit dem <strong>langen Beinchen</strong> der LED verbinden (= Plus/Anode)</li>
            <li><strong>Kurzes Beinchen</strong> der LED (= Minus/Kathode) mit <strong>GND</strong> verbinden</li>
          </ol>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Der vollstaendige Code</h3>
          <div class="code-card">
            <h4>LED an Pin 8 blinken lassen</h4>
            <pre><code><span class="keyword">int</span> ledPin = <span class="value">8</span>;  <span class="comment">// LED haengt an Pin 8</span>

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(ledPin, OUTPUT);  <span class="comment">// Pin als Ausgang</span>
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="function">digitalWrite</span>(ledPin, HIGH);  <span class="comment">// LED an</span>
  <span class="function">delay</span>(<span class="value">1000</span>);                 <span class="comment">// 1 Sekunde warten</span>
  <span class="function">digitalWrite</span>(ledPin, LOW);   <span class="comment">// LED aus</span>
  <span class="function">delay</span>(<span class="value">1000</span>);                 <span class="comment">// 1 Sekunde warten</span>
}</code></pre>
          </div>
        </div>

        <div class="tip-box">
          <strong>Guter Stil:</strong> Statt die Pin-Nummer direkt zu schreiben (<code>8</code>), speichere sie in einer <strong>Variable</strong> (<code>int ledPin = 8;</code>). So musst du bei einer Aenderung nur eine Stelle anpassen!
        </div>
      `
    },
    example: {
      title: 'Schritt fuer Schritt: LED anschliessen und programmieren',
      steps: [
        { label: 'Schaltung aufbauen', html: 'Stecke den <strong>220 Ohm Widerstand</strong> ins Breadboard. Verbinde ein Ende mit <strong>Pin 8</strong> und das andere mit dem <strong>langen Beinchen</strong> der LED.' },
        { label: 'GND verbinden', html: 'Das <strong>kurze Beinchen</strong> der LED verbindest du mit der <strong>GND-Leiste</strong> auf dem Breadboard (blaue Linie).' },
        { label: 'Code schreiben', html: 'Oeffne die Arduino IDE und tippe den Blink-Code ab. Achte auf <code>pinMode(8, OUTPUT)</code> in <code>setup()</code>.' },
        { label: 'Hochladen & testen', html: 'Klicke auf <strong>Hochladen</strong>. Die LED sollte jetzt im Sekundentakt blinken!' },
        { label: 'Experimentieren', html: 'Aendere den <code>delay()</code>-Wert: Was passiert bei <code>delay(200)</code>? Oder <code>delay(2000)</code>? So bekommst du ein Gefuehl fuer das Timing.' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Warum braucht eine LED einen Vorwiderstand?',
        options: [
          'Damit die LED heller leuchtet',
          'Damit der Strom begrenzt wird und die LED nicht durchbrennt',
          'Damit der Arduino schneller arbeitet',
          'Damit die LED blinkt'
        ],
        correct: 1,
        explanation: 'Ohne Vorwiderstand fliesst zu viel Strom durch die LED und sie brennt durch. Der Widerstand begrenzt den Strom auf ein sicheres Mass. 220 Ohm ist der Standardwert fuer die meisten LEDs.'
      },
      {
        type: 'matching',
        question: 'Ordne die Begriffe den richtigen Beschreibungen zu:',
        pairs: [
          { left: 'digitalWrite(pin, HIGH)', right: 'Pin einschalten (5V)' },
          { left: 'digitalWrite(pin, LOW)', right: 'Pin ausschalten (0V)' },
          { left: 'Anode (+)', right: 'Langes Beinchen der LED' },
          { left: 'Kathode (\u2212)', right: 'Kurzes Beinchen der LED' },
          { left: '220 Ohm', right: 'Standard-Vorwiderstand fuer LEDs' }
        ]
      },
      {
        type: 'multiple-choice',
        question: 'Welcher Code laesst eine LED an Pin 5 leuchten (nicht blinken)?',
        options: [
          'pinMode(5, INPUT); digitalWrite(5, HIGH);',
          'pinMode(5, OUTPUT); digitalWrite(5, HIGH);',
          'pinMode(5, OUTPUT); digitalRead(5);',
          'analogWrite(5, HIGH);'
        ],
        correct: 1,
        explanation: 'Zuerst wird der Pin als OUTPUT gesetzt, dann mit digitalWrite(5, HIGH) eingeschaltet. Ohne OUTPUT-Modus kann der Pin keinen Strom liefern.'
      }
    ]
  },

  // ===================== LEKTION 6 =====================
  {
    id: 6,
    title: 'Wechselblinker',
    explanation: {
      html: `
        <h2>Wechselblinker &ndash; Zwei LEDs abwechselnd blinken</h2>
        <p>Ein Blinker ist cool &ndash; aber <strong>zwei LEDs im Wechsel</strong> sind cooler! Denk an ein Polizeiauto oder einen Bahnuebergang: Immer abwechselnd links und rechts. Genau das bauen wir jetzt.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Stell dir einen Scheibenwischer vor, der links und rechts blinkt: Wenn die linke Seite leuchtet, ist die rechte dunkel &ndash; und umgekehrt. Die LEDs "teilen sich" die Aufmerksamkeit.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Das Prinzip</h3>
          <p>Wir steuern <strong>zwei LEDs</strong> an verschiedenen Pins. In jedem Schritt ist eine LED an und die andere aus:</p>
          <table class="icon-table">
            <tr><th>Zeitpunkt</th><th>LED 1 (Pin 12)</th><th>LED 2 (Pin 13)</th></tr>
            <tr><td>Schritt 1</td><td style="background:#2ECC71;color:white;text-align:center;">AN</td><td style="text-align:center;">aus</td></tr>
            <tr><td>Schritt 2</td><td style="text-align:center;">aus</td><td style="background:#E74C3C;color:white;text-align:center;">AN</td></tr>
            <tr><td>Schritt 3</td><td style="background:#2ECC71;color:white;text-align:center;">AN</td><td style="text-align:center;">aus</td></tr>
            <tr><td>...</td><td colspan="2" style="text-align:center;">endlos weiter</td></tr>
          </table>
        </div>

        <div class="tip-box">
          <strong>Warum sieht es "gleichzeitig" aus?</strong> Die Befehle <code>digitalWrite(12, HIGH)</code> und <code>digitalWrite(13, LOW)</code> stehen zwar untereinander, aber der Arduino fuehrt sie in <strong>Mikrosekunden</strong> aus &ndash; fuer unsere Augen passiert das gleichzeitig!
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die Schaltung: Zwei LEDs an Pin 12 und Pin 13</h3>

          <svg viewBox="0 0 600 380" style="width:100%;max-width:600px;margin:1em auto;display:block;font-family:system-ui;">
            <!-- Hintergrund -->
            <rect x="0" y="0" width="600" height="380" rx="8" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>

            <!-- Titel -->
            <text x="300" y="25" text-anchor="middle" font-size="13" fill="#333" font-weight="bold">Wechselblinker: 2 LEDs</text>

            <!-- Arduino -->
            <rect x="20" y="60" width="100" height="200" rx="6" fill="#0068B5" stroke="#004080" stroke-width="2"/>
            <text x="70" y="145" text-anchor="middle" font-size="13" fill="white" font-weight="bold">Arduino</text>
            <text x="70" y="162" text-anchor="middle" font-size="10" fill="#B0D4F1">Uno</text>

            <!-- Pin-Beschriftungen -->
            <rect x="120" y="90" width="40" height="16" rx="3" fill="#222"/>
            <text x="140" y="102" text-anchor="middle" font-size="8" fill="white">Pin 12</text>

            <rect x="120" y="160" width="40" height="16" rx="3" fill="#222"/>
            <text x="140" y="172" text-anchor="middle" font-size="8" fill="white">Pin 13</text>

            <rect x="120" y="230" width="40" height="16" rx="3" fill="#222"/>
            <text x="140" y="242" text-anchor="middle" font-size="8" fill="white">GND</text>

            <!-- Breadboard -->
            <rect x="190" y="50" width="380" height="270" rx="6" fill="#f0ede6" stroke="#c8c3b8" stroke-width="1.5"/>
            <text x="380" y="70" text-anchor="middle" font-size="10" fill="#999">Breadboard</text>

            <!-- Minus-Schiene -->
            <rect x="200" y="80" width="360" height="14" rx="2" fill="#E8F0FE" stroke="#3498db" stroke-width="0.5"/>
            <text x="206" y="91" font-size="9" fill="#3498db" font-weight="bold">&minus;</text>

            <!-- ===== LED 1 (gruen, Pin 12) ===== -->
            <!-- Kabel Pin 12 zum Breadboard -->
            <line x1="160" y1="98" x2="260" y2="98" stroke="#2ECC71" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="260" y1="98" x2="260" y2="130" stroke="#2ECC71" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="260" cy="130" r="4" fill="#2ECC71"/>

            <!-- Widerstand 1 -->
            <rect x="268" y="148" width="44" height="14" rx="3" fill="#F5E6CC" stroke="#C8A96E" stroke-width="1.5"/>
            <text x="290" y="159" text-anchor="middle" font-size="9" fill="#7D5A29" font-weight="bold">220&Omega;</text>
            <line x1="260" y1="155" x2="268" y2="155" stroke="#888" stroke-width="1.5"/>
            <line x1="312" y1="155" x2="330" y2="155" stroke="#888" stroke-width="1.5"/>
            <circle cx="260" cy="155" r="3" fill="#C8A96E"/>
            <circle cx="330" cy="155" r="3" fill="#C8A96E"/>

            <!-- LED 1 (gruen) -->
            <polygon points="335,140 365,155 335,170" fill="#2ECC71" stroke="#27AE60" stroke-width="1.5"/>
            <line x1="365" y1="140" x2="365" y2="170" stroke="#27AE60" stroke-width="2"/>
            <line x1="360" y1="134" x2="370" y2="126" stroke="#FFD93D" stroke-width="1.5"/>
            <line x1="367" y1="137" x2="380" y2="130" stroke="#FFD93D" stroke-width="1.5"/>
            <text x="350" y="185" text-anchor="middle" font-size="10" fill="#27AE60" font-weight="bold">LED 1</text>

            <!-- LED 1 Kathode zu GND-Schiene -->
            <line x1="365" y1="155" x2="400" y2="155" stroke="#333" stroke-width="2"/>
            <line x1="400" y1="155" x2="400" y2="91" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="400" cy="91" r="4" fill="#333"/>

            <!-- ===== LED 2 (rot, Pin 13) ===== -->
            <!-- Kabel Pin 13 zum Breadboard -->
            <line x1="160" y1="168" x2="260" y2="168" stroke="#E74C3C" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="260" y1="168" x2="260" y2="210" stroke="#E74C3C" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="260" cy="210" r="4" fill="#E74C3C"/>

            <!-- Widerstand 2 -->
            <rect x="268" y="228" width="44" height="14" rx="3" fill="#F5E6CC" stroke="#C8A96E" stroke-width="1.5"/>
            <text x="290" y="239" text-anchor="middle" font-size="9" fill="#7D5A29" font-weight="bold">220&Omega;</text>
            <line x1="260" y1="235" x2="268" y2="235" stroke="#888" stroke-width="1.5"/>
            <line x1="312" y1="235" x2="330" y2="235" stroke="#888" stroke-width="1.5"/>
            <circle cx="260" cy="235" r="3" fill="#C8A96E"/>
            <circle cx="330" cy="235" r="3" fill="#C8A96E"/>

            <!-- LED 2 (rot) -->
            <polygon points="335,220 365,235 335,250" fill="#FF6B6B" stroke="#CC4444" stroke-width="1.5"/>
            <line x1="365" y1="220" x2="365" y2="250" stroke="#CC4444" stroke-width="2"/>
            <line x1="360" y1="214" x2="370" y2="206" stroke="#FFD93D" stroke-width="1.5"/>
            <line x1="367" y1="217" x2="380" y2="210" stroke="#FFD93D" stroke-width="1.5"/>
            <text x="350" y="265" text-anchor="middle" font-size="10" fill="#E74C3C" font-weight="bold">LED 2</text>

            <!-- LED 2 Kathode zu GND-Schiene -->
            <line x1="365" y1="235" x2="440" y2="235" stroke="#333" stroke-width="2"/>
            <line x1="440" y1="235" x2="440" y2="91" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="440" cy="91" r="4" fill="#333"/>

            <!-- GND-Kabel vom Arduino zur Minus-Schiene -->
            <line x1="160" y1="238" x2="210" y2="238" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="210" y1="238" x2="210" y2="91" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="210" cy="91" r="4" fill="#333"/>

            <!-- Legende -->
            <text x="300" y="345" text-anchor="middle" font-size="10" fill="#555">Gruen = Pin 12 | Rot = Pin 13 | Schwarz = GND</text>
            <text x="300" y="360" text-anchor="middle" font-size="9" fill="#888">Beide LEDs teilen sich die GND-Schiene</text>
          </svg>

          <ol class="step-list">
            <li><strong>LED 1</strong> (gruen): Pin 12 &rarr; 220&Omega; Widerstand &rarr; LED (langes Bein) &rarr; GND</li>
            <li><strong>LED 2</strong> (rot): Pin 13 &rarr; 220&Omega; Widerstand &rarr; LED (langes Bein) &rarr; GND</li>
            <li>Beide <strong>kurze Beinchen</strong> gehen zur gleichen <strong>GND-Schiene</strong></li>
          </ol>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Der Code: Wechselblinker</h3>

          <div class="code-card">
            <h4>Zwei LEDs abwechselnd blinken</h4>
            <pre><code><span class="keyword">int</span> led1 = <span class="value">12</span>;  <span class="comment">// Gruene LED</span>
<span class="keyword">int</span> led2 = <span class="value">13</span>;  <span class="comment">// Rote LED</span>

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(led1, OUTPUT);
  <span class="function">pinMode</span>(led2, OUTPUT);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="comment">// Schritt 1: LED 1 an, LED 2 aus</span>
  <span class="function">digitalWrite</span>(led1, HIGH);
  <span class="function">digitalWrite</span>(led2, LOW);
  <span class="function">delay</span>(<span class="value">1000</span>);  <span class="comment">// 1 Sekunde warten</span>

  <span class="comment">// Schritt 2: LED 1 aus, LED 2 an</span>
  <span class="function">digitalWrite</span>(led1, LOW);
  <span class="function">digitalWrite</span>(led2, HIGH);
  <span class="function">delay</span>(<span class="value">1000</span>);  <span class="comment">// 1 Sekunde warten</span>
}</code></pre>
          </div>
        </div>

        <div class="tip-box">
          <strong>Vergleich mit dem einfachen Blink:</strong> Der Code ist fast identisch &ndash; nur dass wir jetzt <strong>zwei Pins</strong> gleichzeitig steuern. Wenn LED 1 auf HIGH geht, geht LED 2 auf LOW &ndash; und umgekehrt.
        </div>

        <div class="info-card">
          <h3>Experiment: Blinkfrequenz aendern</h3>
          <p>Aendere die <code>delay()</code>-Werte, um den Wechsel schneller oder langsamer zu machen:</p>
          <table class="icon-table">
            <tr><th>delay()-Wert</th><th>Effekt</th><th>Einsatz</th></tr>
            <tr><td><code>delay(1000)</code></td><td>1 Sekunde &ndash; ruhig</td><td>Normales Blinken</td></tr>
            <tr><td><code>delay(500)</code></td><td>0,5 Sekunden &ndash; schnell</td><td>Warnblinker</td></tr>
            <tr><td><code>delay(100)</code></td><td>0,1 Sekunden &ndash; sehr schnell</td><td>Stroboskop-Effekt</td></tr>
            <tr><td><code>delay(2000)</code></td><td>2 Sekunden &ndash; langsam</td><td>Entspanntes Blinken</td></tr>
          </table>
        </div>

        <div class="warning-box">
          <strong>Achtung bei Stroboskop:</strong> Sehr schnelles Blinken (unter 100ms) kann bei manchen Menschen Unwohlsein ausloesen. Im Unterricht lieber bei 200ms oder mehr bleiben.
        </div>
      `
    },
    example: {
      title: 'Schritt fuer Schritt: Wechselblinker aufbauen',
      steps: [
        { label: 'Zwei LEDs platzieren', html: 'Stecke <strong>zwei LEDs</strong> nebeneinander ins Breadboard. Verwende verschiedene Farben (z.B. gruen und rot), damit du sie gut unterscheiden kannst.' },
        { label: 'Widerstaende einsetzen', html: 'Jede LED bekommt einen eigenen <strong>220&Omega; Widerstand</strong>. Verbinde den Widerstand mit dem <strong>langen Beinchen</strong> (Anode).' },
        { label: 'Pins verbinden', html: 'Widerstand der LED 1 &rarr; <strong>Pin 12</strong>. Widerstand der LED 2 &rarr; <strong>Pin 13</strong>.' },
        { label: 'GND anschliessen', html: 'Beide kurzen Beinchen (Kathoden) gehen auf die <strong>GND-Schiene</strong> des Breadboards. GND-Schiene mit <strong>GND am Arduino</strong> verbinden.' },
        { label: 'Code hochladen & testen', html: 'Lade den Wechselblinker-Code hoch. Die LEDs sollten jetzt abwechselnd blinken! Probiere dann <code>delay(500)</code> statt <code>delay(1000)</code> aus.' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was passiert, wenn du delay(1000) durch delay(250) ersetzt?',
        options: [
          'Die LEDs leuchten heller',
          'Die LEDs blinken viermal so schnell (0,25 Sekunden Wechsel)',
          'Nur eine LED blinkt',
          'Der Arduino geht kaputt'
        ],
        correct: 1,
        explanation: 'delay(250) wartet nur 250 Millisekunden = 0,25 Sekunden. Die LEDs wechseln also viermal so schnell wie bei delay(1000). Alles andere bleibt gleich.'
      },
      {
        type: 'matching',
        question: 'Ordne die Code-Zeilen dem richtigen Effekt zu:',
        pairs: [
          { left: 'digitalWrite(led1, HIGH)', right: 'LED 1 einschalten' },
          { left: 'digitalWrite(led2, LOW)', right: 'LED 2 ausschalten' },
          { left: 'delay(1000)', right: '1 Sekunde warten' },
          { left: 'pinMode(led1, OUTPUT)', right: 'Pin 12 als Ausgang festlegen' }
        ]
      },
      {
        type: 'multiple-choice',
        question: 'Warum sieht es so aus, als wuerden LED 1 und LED 2 GLEICHZEITIG wechseln, obwohl die Befehle nacheinander stehen?',
        options: [
          'Weil der Arduino zwei Prozessoren hat',
          'Weil der Arduino die Befehle in Mikrosekunden ausfuehrt \u2013 zu schnell fuer unsere Augen',
          'Weil delay() beide LEDs gleichzeitig schaltet',
          'Weil die LEDs ueber Funk verbunden sind'
        ],
        correct: 1,
        explanation: 'Der Arduino arbeitet mit 16 Millionen Takten pro Sekunde. Die zwei digitalWrite()-Befehle dauern nur wenige Mikrosekunden \u2013 das ist fuer Menschen nicht wahrnehmbar. Erst das delay() danach macht eine sichtbare Pause.'
      }
    ]
  },

  // ===================== LEKTION 7 =====================
  {
    id: 7,
    title: 'LED-Lauflicht',
    explanation: {
      html: `
        <h2>LED-Lauflicht &ndash; 5 LEDs in Bewegung</h2>
        <p>Jetzt wird es richtig beeindruckend: <strong>5 LEDs</strong> leuchten nacheinander auf &ndash; wie das beruehmte Lauflicht aus <em>Knight Rider</em> oder eine Laufschrift am Bahnhof.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Stell dir die Lichter an einem Kinokassenbereich vor, die nacheinander aufleuchten und eine Richtung anzeigen. Oder die Blinker an einem Absperrfahrzeug auf der Autobahn &ndash; die LEDs "laufen" in eine Richtung.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Was wir brauchen</h3>
          <table class="icon-table">
            <tr><th>Bauteil</th><th>Anzahl</th><th>Pins</th></tr>
            <tr><td>LEDs (verschiedene Farben)</td><td>5</td><td>Pin 8, 9, 10, 11, 12</td></tr>
            <tr><td>Widerstand 220 &Omega;</td><td>5</td><td>Je einer pro LED</td></tr>
            <tr><td>Breadboard + Kabel</td><td>1</td><td>&ndash;</td></tr>
          </table>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die Schaltung: 5 LEDs in Reihe</h3>

          <svg viewBox="0 0 620 420" style="width:100%;max-width:620px;margin:1em auto;display:block;font-family:system-ui;">
            <!-- Hintergrund -->
            <rect x="0" y="0" width="620" height="420" rx="8" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>

            <!-- Titel -->
            <text x="310" y="25" text-anchor="middle" font-size="13" fill="#333" font-weight="bold">LED-Lauflicht: 5 LEDs an Pin 8&ndash;12</text>

            <!-- Arduino -->
            <rect x="15" y="45" width="80" height="320" rx="6" fill="#0068B5" stroke="#004080" stroke-width="2"/>
            <text x="55" y="195" text-anchor="middle" font-size="12" fill="white" font-weight="bold">Arduino</text>
            <text x="55" y="210" text-anchor="middle" font-size="9" fill="#B0D4F1">Uno</text>

            <!-- Pin-Beschriftungen am Arduino -->
            <rect x="95" y="65" width="35" height="14" rx="3" fill="#222"/>
            <text x="112" y="76" text-anchor="middle" font-size="7" fill="white">Pin 8</text>

            <rect x="95" y="120" width="35" height="14" rx="3" fill="#222"/>
            <text x="112" y="131" text-anchor="middle" font-size="7" fill="white">Pin 9</text>

            <rect x="95" y="175" width="35" height="14" rx="3" fill="#222"/>
            <text x="112" y="186" text-anchor="middle" font-size="7" fill="white">Pin 10</text>

            <rect x="95" y="230" width="35" height="14" rx="3" fill="#222"/>
            <text x="112" y="241" text-anchor="middle" font-size="7" fill="white">Pin 11</text>

            <rect x="95" y="285" width="35" height="14" rx="3" fill="#222"/>
            <text x="112" y="296" text-anchor="middle" font-size="7" fill="white">Pin 12</text>

            <rect x="95" y="340" width="35" height="14" rx="3" fill="#222"/>
            <text x="112" y="351" text-anchor="middle" font-size="7" fill="white">GND</text>

            <!-- Breadboard-Bereich -->
            <rect x="155" y="40" width="440" height="340" rx="6" fill="#f0ede6" stroke="#c8c3b8" stroke-width="1.5"/>

            <!-- GND-Schiene -->
            <rect x="165" y="55" width="420" height="14" rx="2" fill="#E8F0FE" stroke="#3498db" stroke-width="0.5"/>
            <text x="170" y="66" font-size="9" fill="#3498db" font-weight="bold">&minus; GND</text>

            <!-- GND-Kabel vom Arduino -->
            <line x1="130" y1="347" x2="175" y2="347" stroke="#333" stroke-width="2.5"/>
            <line x1="175" y1="347" x2="175" y2="65" stroke="#333" stroke-width="2.5"/>
            <circle cx="175" cy="65" r="3" fill="#333"/>

            <!-- LED 1 (Pin 8) - rot -->
            <line x1="130" y1="72" x2="220" y2="72" stroke="#E74C3C" stroke-width="2"/>
            <line x1="220" y1="72" x2="220" y2="95" stroke="#E74C3C" stroke-width="2"/>
            <rect x="228" y="89" width="40" height="12" rx="2" fill="#F5E6CC" stroke="#C8A96E" stroke-width="1"/>
            <text x="248" y="99" text-anchor="middle" font-size="7" fill="#7D5A29">220&Omega;</text>
            <line x1="220" y1="95" x2="228" y2="95" stroke="#888" stroke-width="1"/>
            <line x1="268" y1="95" x2="280" y2="95" stroke="#888" stroke-width="1"/>
            <polygon points="280,85 300,95 280,105" fill="#E74C3C" stroke="#C0392B" stroke-width="1"/>
            <line x1="300" y1="85" x2="300" y2="105" stroke="#C0392B" stroke-width="1.5"/>
            <line x1="300" y1="95" x2="320" y2="95" stroke="#333" stroke-width="1.5"/>
            <line x1="320" y1="95" x2="320" y2="65" stroke="#333" stroke-width="1.5"/>
            <circle cx="320" cy="65" r="3" fill="#333"/>
            <text x="290" y="118" text-anchor="middle" font-size="9" fill="#E74C3C">LED 1</text>

            <!-- LED 2 (Pin 9) - orange -->
            <line x1="130" y1="127" x2="260" y2="127" stroke="#E67E22" stroke-width="2"/>
            <line x1="260" y1="127" x2="260" y2="150" stroke="#E67E22" stroke-width="2"/>
            <rect x="268" y="144" width="40" height="12" rx="2" fill="#F5E6CC" stroke="#C8A96E" stroke-width="1"/>
            <text x="288" y="154" text-anchor="middle" font-size="7" fill="#7D5A29">220&Omega;</text>
            <line x1="260" y1="150" x2="268" y2="150" stroke="#888" stroke-width="1"/>
            <line x1="308" y1="150" x2="320" y2="150" stroke="#888" stroke-width="1"/>
            <polygon points="320,140 340,150 320,160" fill="#E67E22" stroke="#D35400" stroke-width="1"/>
            <line x1="340" y1="140" x2="340" y2="160" stroke="#D35400" stroke-width="1.5"/>
            <line x1="340" y1="150" x2="360" y2="150" stroke="#333" stroke-width="1.5"/>
            <line x1="360" y1="150" x2="360" y2="65" stroke="#333" stroke-width="1.5"/>
            <circle cx="360" cy="65" r="3" fill="#333"/>
            <text x="330" y="173" text-anchor="middle" font-size="9" fill="#E67E22">LED 2</text>

            <!-- LED 3 (Pin 10) - gelb -->
            <line x1="130" y1="182" x2="300" y2="182" stroke="#F1C40F" stroke-width="2"/>
            <line x1="300" y1="182" x2="300" y2="205" stroke="#F1C40F" stroke-width="2"/>
            <rect x="308" y="199" width="40" height="12" rx="2" fill="#F5E6CC" stroke="#C8A96E" stroke-width="1"/>
            <text x="328" y="209" text-anchor="middle" font-size="7" fill="#7D5A29">220&Omega;</text>
            <line x1="300" y1="205" x2="308" y2="205" stroke="#888" stroke-width="1"/>
            <line x1="348" y1="205" x2="360" y2="205" stroke="#888" stroke-width="1"/>
            <polygon points="360,195 380,205 360,215" fill="#F1C40F" stroke="#D4AC0D" stroke-width="1"/>
            <line x1="380" y1="195" x2="380" y2="215" stroke="#D4AC0D" stroke-width="1.5"/>
            <line x1="380" y1="205" x2="400" y2="205" stroke="#333" stroke-width="1.5"/>
            <line x1="400" y1="205" x2="400" y2="65" stroke="#333" stroke-width="1.5"/>
            <circle cx="400" cy="65" r="3" fill="#333"/>
            <text x="370" y="228" text-anchor="middle" font-size="9" fill="#D4AC0D">LED 3</text>

            <!-- LED 4 (Pin 11) - gruen -->
            <line x1="130" y1="237" x2="340" y2="237" stroke="#2ECC71" stroke-width="2"/>
            <line x1="340" y1="237" x2="340" y2="260" stroke="#2ECC71" stroke-width="2"/>
            <rect x="348" y="254" width="40" height="12" rx="2" fill="#F5E6CC" stroke="#C8A96E" stroke-width="1"/>
            <text x="368" y="264" text-anchor="middle" font-size="7" fill="#7D5A29">220&Omega;</text>
            <line x1="340" y1="260" x2="348" y2="260" stroke="#888" stroke-width="1"/>
            <line x1="388" y1="260" x2="400" y2="260" stroke="#888" stroke-width="1"/>
            <polygon points="400,250 420,260 400,270" fill="#2ECC71" stroke="#27AE60" stroke-width="1"/>
            <line x1="420" y1="250" x2="420" y2="270" stroke="#27AE60" stroke-width="1.5"/>
            <line x1="420" y1="260" x2="440" y2="260" stroke="#333" stroke-width="1.5"/>
            <line x1="440" y1="260" x2="440" y2="65" stroke="#333" stroke-width="1.5"/>
            <circle cx="440" cy="65" r="3" fill="#333"/>
            <text x="410" y="283" text-anchor="middle" font-size="9" fill="#27AE60">LED 4</text>

            <!-- LED 5 (Pin 12) - blau -->
            <line x1="130" y1="292" x2="380" y2="292" stroke="#3498db" stroke-width="2"/>
            <line x1="380" y1="292" x2="380" y2="315" stroke="#3498db" stroke-width="2"/>
            <rect x="388" y="309" width="40" height="12" rx="2" fill="#F5E6CC" stroke="#C8A96E" stroke-width="1"/>
            <text x="408" y="319" text-anchor="middle" font-size="7" fill="#7D5A29">220&Omega;</text>
            <line x1="380" y1="315" x2="388" y2="315" stroke="#888" stroke-width="1"/>
            <line x1="428" y1="315" x2="440" y2="315" stroke="#888" stroke-width="1"/>
            <polygon points="440,305 460,315 440,325" fill="#3498db" stroke="#2980b9" stroke-width="1"/>
            <line x1="460" y1="305" x2="460" y2="325" stroke="#2980b9" stroke-width="1.5"/>
            <line x1="460" y1="315" x2="480" y2="315" stroke="#333" stroke-width="1.5"/>
            <line x1="480" y1="315" x2="480" y2="65" stroke="#333" stroke-width="1.5"/>
            <circle cx="480" cy="65" r="3" fill="#333"/>
            <text x="450" y="338" text-anchor="middle" font-size="9" fill="#3498db">LED 5</text>

            <!-- Lauflicht-Pfeil -->
            <line x1="270" y1="395" x2="490" y2="395" stroke="#0068B5" stroke-width="1.5" stroke-dasharray="5,3"/>
            <polygon points="490,391 502,395 490,399" fill="#0068B5"/>
            <text x="380" y="410" text-anchor="middle" font-size="10" fill="#0068B5" font-weight="bold">Lauflicht-Richtung</text>
          </svg>

          <p>Alle 5 LEDs sind identisch aufgebaut: <strong>Pin &rarr; 220&Omega; &rarr; LED &rarr; GND</strong>. Nur die Pin-Nummern unterscheiden sich.</p>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Version 1: Einfaches Lauflicht (links &rarr; rechts)</h3>

          <div class="code-card">
            <h4>Lauflicht &ndash; eine Richtung</h4>
            <pre><code><span class="comment">// Pin-Nummern fuer 5 LEDs</span>
<span class="keyword">int</span> led1 = <span class="value">8</span>;
<span class="keyword">int</span> led2 = <span class="value">9</span>;
<span class="keyword">int</span> led3 = <span class="value">10</span>;
<span class="keyword">int</span> led4 = <span class="value">11</span>;
<span class="keyword">int</span> led5 = <span class="value">12</span>;
<span class="keyword">int</span> wartezeit = <span class="value">200</span>;  <span class="comment">// Geschwindigkeit in ms</span>

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(led1, OUTPUT);
  <span class="function">pinMode</span>(led2, OUTPUT);
  <span class="function">pinMode</span>(led3, OUTPUT);
  <span class="function">pinMode</span>(led4, OUTPUT);
  <span class="function">pinMode</span>(led5, OUTPUT);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="comment">// LED 1 aufleuchten</span>
  <span class="function">digitalWrite</span>(led1, HIGH);
  <span class="function">delay</span>(wartezeit);
  <span class="function">digitalWrite</span>(led1, LOW);

  <span class="comment">// LED 2 aufleuchten</span>
  <span class="function">digitalWrite</span>(led2, HIGH);
  <span class="function">delay</span>(wartezeit);
  <span class="function">digitalWrite</span>(led2, LOW);

  <span class="comment">// LED 3 aufleuchten</span>
  <span class="function">digitalWrite</span>(led3, HIGH);
  <span class="function">delay</span>(wartezeit);
  <span class="function">digitalWrite</span>(led3, LOW);

  <span class="comment">// LED 4 aufleuchten</span>
  <span class="function">digitalWrite</span>(led4, HIGH);
  <span class="function">delay</span>(wartezeit);
  <span class="function">digitalWrite</span>(led4, LOW);

  <span class="comment">// LED 5 aufleuchten</span>
  <span class="function">digitalWrite</span>(led5, HIGH);
  <span class="function">delay</span>(wartezeit);
  <span class="function">digitalWrite</span>(led5, LOW);
}</code></pre>
          </div>
        </div>

        <div class="warning-box">
          <strong>Faellt dir etwas auf?</strong> Der Code ist sehr <strong>lang und wiederholend</strong>! Fuer 5 LEDs schreiben wir fast das Gleiche 5x. Stell dir vor, du haettest 20 LEDs... In einer spaeteren Lektion lernst du die <strong>for-Schleife</strong> &ndash; damit wird der Code viel kuerzer!
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Version 2: Knight Rider (hin und zurueck)</h3>
          <p>Das klassische Lauflicht geht nicht nur in eine Richtung, sondern <strong>hin und zurueck</strong>:</p>

          <div class="code-card">
            <h4>Knight Rider &ndash; hin und zurueck</h4>
            <pre><code><span class="keyword">int</span> led1 = <span class="value">8</span>;
<span class="keyword">int</span> led2 = <span class="value">9</span>;
<span class="keyword">int</span> led3 = <span class="value">10</span>;
<span class="keyword">int</span> led4 = <span class="value">11</span>;
<span class="keyword">int</span> led5 = <span class="value">12</span>;
<span class="keyword">int</span> wartezeit = <span class="value">150</span>;

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(led1, OUTPUT);
  <span class="function">pinMode</span>(led2, OUTPUT);
  <span class="function">pinMode</span>(led3, OUTPUT);
  <span class="function">pinMode</span>(led4, OUTPUT);
  <span class="function">pinMode</span>(led5, OUTPUT);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="comment">// Vorwaerts: 1 &rarr; 2 &rarr; 3 &rarr; 4 &rarr; 5</span>
  <span class="function">digitalWrite</span>(led1, HIGH); <span class="function">delay</span>(wartezeit); <span class="function">digitalWrite</span>(led1, LOW);
  <span class="function">digitalWrite</span>(led2, HIGH); <span class="function">delay</span>(wartezeit); <span class="function">digitalWrite</span>(led2, LOW);
  <span class="function">digitalWrite</span>(led3, HIGH); <span class="function">delay</span>(wartezeit); <span class="function">digitalWrite</span>(led3, LOW);
  <span class="function">digitalWrite</span>(led4, HIGH); <span class="function">delay</span>(wartezeit); <span class="function">digitalWrite</span>(led4, LOW);
  <span class="function">digitalWrite</span>(led5, HIGH); <span class="function">delay</span>(wartezeit); <span class="function">digitalWrite</span>(led5, LOW);

  <span class="comment">// Rueckwaerts: 4 &rarr; 3 &rarr; 2 (ohne 5 und 1!)</span>
  <span class="function">digitalWrite</span>(led4, HIGH); <span class="function">delay</span>(wartezeit); <span class="function">digitalWrite</span>(led4, LOW);
  <span class="function">digitalWrite</span>(led3, HIGH); <span class="function">delay</span>(wartezeit); <span class="function">digitalWrite</span>(led3, LOW);
  <span class="function">digitalWrite</span>(led2, HIGH); <span class="function">delay</span>(wartezeit); <span class="function">digitalWrite</span>(led2, LOW);
}</code></pre>
          </div>

          <div class="tip-box">
            <strong>Warum ohne 5 und 1 im Rueckweg?</strong> Wenn wir LED 5 am Ende und LED 1 am Anfang doppelt zaehlen wuerden, wuerde das Lauflicht dort kurz "haengenbleiben". Durch das Auslassen wird die Bewegung fluessig.
          </div>
        </div>

        <div class="analogy-box">
          <strong>Vorschau auf spaeter:</strong> Mit einer <strong>for-Schleife</strong> und einem <strong>Array</strong> kannst du dieses Lauflicht in nur 10 Zeilen Code schreiben &ndash; egal ob 5 oder 50 LEDs! Das lernst du in den naechsten Modulen.
        </div>
      `
    },
    example: {
      title: 'Schritt fuer Schritt: Lauflicht aufbauen',
      steps: [
        { label: '5 LEDs platzieren', html: 'Stecke <strong>5 LEDs</strong> in einer Reihe ins Breadboard. Verschiedene Farben machen es uebersichtlicher!' },
        { label: 'Widerstaende', html: 'Jede LED bekommt ihren eigenen <strong>220&Omega; Widerstand</strong> am langen Beinchen (Anode).' },
        { label: 'Pins verbinden', html: 'Verbinde die Widerstaende mit den Pins: LED 1 &rarr; <strong>Pin 8</strong>, LED 2 &rarr; <strong>Pin 9</strong>, ... LED 5 &rarr; <strong>Pin 12</strong>.' },
        { label: 'GND anschliessen', html: 'Alle kurzen Beinchen (Kathoden) auf die <strong>GND-Schiene</strong>. GND-Schiene mit dem <strong>GND-Pin</strong> am Arduino verbinden.' },
        { label: 'Testen & variieren', html: 'Lade zuerst Version 1 (eine Richtung) hoch. Dann Version 2 (Knight Rider). Aendere <code>wartezeit</code>: Bei <code>50</code> wird es richtig schnell!' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie viele Widerstaende brauchst du fuer ein Lauflicht mit 5 LEDs?',
        options: [
          '1 Widerstand (die LEDs teilen sich)',
          '3 Widerstaende',
          '5 Widerstaende (einen pro LED)',
          'Gar keinen'
        ],
        correct: 2,
        explanation: 'Jede LED braucht ihren eigenen 220 Ohm Vorwiderstand. Bei 5 LEDs sind das 5 Widerstaende. So wird der Strom fuer jede LED individuell begrenzt.'
      },
      {
        type: 'matching',
        question: 'Ordne die Begriffe zu:',
        pairs: [
          { left: 'Version 1 (einfach)', right: 'LEDs leuchten nur in eine Richtung' },
          { left: 'Version 2 (Knight Rider)', right: 'LEDs leuchten hin und zurueck' },
          { left: 'wartezeit = 200', right: 'Jede LED leuchtet 0,2 Sekunden' },
          { left: 'for-Schleife (spaeter)', right: 'Macht den Code viel kuerzer' }
        ]
      },
      {
        type: 'multiple-choice',
        question: 'Warum wird im Knight-Rider-Code beim Rueckweg LED 5 und LED 1 NICHT nochmal eingeschaltet?',
        options: [
          'Weil diese LEDs kaputt gehen koennten',
          'Damit das Lauflicht an den Enden nicht kurz stehen bleibt (doppelt leuchtet)',
          'Weil der Arduino nur 3 LEDs gleichzeitig steuern kann',
          'Weil die Pins 8 und 12 nicht rueckwaerts funktionieren'
        ],
        correct: 1,
        explanation: 'LED 5 leuchtet am Ende des Vorwaerts-Laufs und LED 1 am Anfang des naechsten. Wuerden wir sie im Ruecklauf nochmal zaehlen, wuerden sie doppelt so lange leuchten und das Lauflicht wuerde dort stocken.'
      }
    ]
  },

  // ===================== LEKTION 8 =====================
  {
    id: 8,
    title: 'Taster als Eingabe',
    explanation: {
      html: `
        <h2>Taster als Eingabe &ndash; digitalRead()</h2>
        <p>Bisher hat der Arduino nur <strong>Befehle gegeben</strong> (LEDs ein/aus). Jetzt lernt er <strong>zuzuhoeren</strong>: Mit einem Taster kannst du dem Arduino eine Eingabe schicken.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Ein Taster ist wie eine <strong>Tuerklingel</strong>: Solange du drueckst, ist der Kontakt geschlossen (= Signal). Laesst du los, ist der Kontakt wieder offen (= kein Signal). Der Arduino ist die Person in der Wohnung, die auf das Klingeln wartet.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Der Befehl: digitalRead()</h3>
          <p>Mit <code>digitalRead(pin)</code> liest der Arduino den Zustand eines Pins:</p>
          <table class="icon-table">
            <tr><th>Rueckgabewert</th><th>Bedeutung</th><th>Taster-Zustand</th></tr>
            <tr><td><code>HIGH</code></td><td>5 Volt am Pin</td><td>Taster <strong>nicht</strong> gedrueckt *</td></tr>
            <tr><td><code>LOW</code></td><td>0 Volt am Pin</td><td>Taster gedrueckt *</td></tr>
          </table>
          <p style="font-size:0.85rem; color:#666;">* bei INPUT_PULLUP &ndash; die Logik ist invertiert!</p>
        </div>

        <div class="code-card">
          <h4>Taster-Zustand lesen und im Serial Monitor anzeigen</h4>
          <pre><code><span class="keyword">int</span> tasterPin = <span class="value">7</span>;
<span class="keyword">int</span> zustand;

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(tasterPin, INPUT_PULLUP);  <span class="comment">// Eingang mit Pull-up</span>
  <span class="function">Serial.begin</span>(<span class="value">9600</span>);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  zustand = <span class="function">digitalRead</span>(tasterPin);  <span class="comment">// Pin lesen</span>
  <span class="function">Serial.println</span>(zustand);            <span class="comment">// Wert anzeigen</span>
  <span class="function">delay</span>(<span class="value">100</span>);
}</code></pre>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Das Problem: Schwebender Pin (Floating)</h3>
          <p>Wenn ein Taster <strong>nicht gedrueckt</strong> ist, haengt der Pin "in der Luft" &ndash; er ist mit nichts verbunden. Das nennt man einen <strong>schwebenden Pin</strong>. Der Arduino weiss dann nicht, ob er HIGH oder LOW messen soll und gibt <strong>zufaellige Werte</strong> aus!</p>

          <div class="analogy-box">
            <strong>Alltagsanalogie:</strong> Stell dir einen Lichtschalter mit Feder vor. Ohne Feder bleibt der Schalter in irgendeiner Position stehen &ndash; mal an, mal aus, total zufaellig. Die <strong>Feder</strong> (= Pull-up-Widerstand) drueckt den Schalter immer in eine <strong>Grundstellung</strong> zurueck, solange niemand drueckt.
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die Loesung: Pull-up und Pull-down Widerstand</h3>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="info-card" style="border-top: 3px solid #3498db; margin:0;">
              <h3>Pull-up</h3>
              <p>Widerstand zieht den Pin auf <strong>HIGH</strong> (5V).</p>
              <ul>
                <li>Nicht gedrueckt &rarr; <code>HIGH</code></li>
                <li>Gedrueckt &rarr; <code>LOW</code></li>
              </ul>
              <p style="color:#666; font-size:0.85rem;">(Achtung: Logik ist invertiert!)</p>
            </div>
            <div class="info-card" style="border-top: 3px solid #e67e22; margin:0;">
              <h3>Pull-down</h3>
              <p>Widerstand zieht den Pin auf <strong>LOW</strong> (0V).</p>
              <ul>
                <li>Nicht gedrueckt &rarr; <code>LOW</code></li>
                <li>Gedrueckt &rarr; <code>HIGH</code></li>
              </ul>
              <p style="color:#666; font-size:0.85rem;">(Logik wie erwartet)</p>
            </div>
          </div>
        </div>

        <div class="tip-box">
          <strong>Die einfachste Loesung: INPUT_PULLUP</strong><br>
          Der Arduino hat <strong>eingebaute Pull-up-Widerstaende</strong>! Mit <code>pinMode(pin, INPUT_PULLUP)</code> aktivierst du ihn &ndash; <strong>kein externer Widerstand noetig</strong>. Der Taster wird einfach zwischen Pin und GND angeschlossen. Das ist die Methode, die wir im Unterricht verwenden!
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die Schaltung: Taster an Pin 7 mit INPUT_PULLUP</h3>

          <svg viewBox="0 0 480 250" style="width:100%;max-width:480px;margin:1em auto;display:block;font-family:system-ui;">
            <!-- Hintergrund -->
            <rect x="0" y="0" width="480" height="250" rx="8" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>

            <!-- Titel -->
            <text x="240" y="22" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">Taster an Pin 7 (mit INPUT_PULLUP)</text>

            <!-- Arduino -->
            <rect x="20" y="50" width="85" height="140" rx="6" fill="#0068B5" stroke="#004080" stroke-width="2"/>
            <text x="62" y="110" text-anchor="middle" font-size="12" fill="white" font-weight="bold">Arduino</text>
            <text x="62" y="126" text-anchor="middle" font-size="9" fill="#B0D4F1">Uno</text>

            <!-- Pin 7 -->
            <rect x="105" y="72" width="32" height="14" rx="3" fill="#222"/>
            <text x="121" y="83" text-anchor="middle" font-size="8" fill="white">Pin 7</text>

            <!-- GND -->
            <rect x="105" y="152" width="32" height="14" rx="3" fill="#222"/>
            <text x="121" y="163" text-anchor="middle" font-size="8" fill="white">GND</text>

            <!-- Breadboard -->
            <rect x="165" y="40" width="290" height="170" rx="6" fill="#f0ede6" stroke="#c8c3b8" stroke-width="1.5"/>
            <text x="310" y="58" text-anchor="middle" font-size="9" fill="#999">Breadboard</text>

            <!-- Signal-Kabel (blau) Pin 7 zum Taster -->
            <line x1="137" y1="79" x2="220" y2="79" stroke="#3498db" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="220" y1="79" x2="220" y2="105" stroke="#3498db" stroke-width="2.5" stroke-linecap="round"/>

            <!-- Taster auf dem Breadboard -->
            <rect x="210" y="105" width="80" height="40" rx="6" fill="#ecf0f1" stroke="#95a5a6" stroke-width="1.5"/>
            <!-- Kontakte -->
            <circle cx="230" cy="125" r="6" fill="#bdc3c7" stroke="#95a5a6" stroke-width="1"/>
            <circle cx="270" cy="125" r="6" fill="#bdc3c7" stroke="#95a5a6" stroke-width="1"/>
            <!-- Schalter-Bruecke -->
            <line x1="230" y1="119" x2="270" y2="114" stroke="#555" stroke-width="2.5"/>
            <text x="250" y="100" text-anchor="middle" font-size="11" fill="#555" font-weight="bold">Taster</text>

            <!-- GND-Kabel (schwarz) vom Taster -->
            <line x1="270" y1="125" x2="350" y2="125" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="350" y1="125" x2="350" y2="159" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="137" y1="159" x2="350" y2="159" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>

            <!-- Pull-up Hinweis -->
            <rect x="310" y="70" width="130" height="30" rx="5" fill="#EBF5FB" stroke="#3498db" stroke-width="1"/>
            <text x="375" y="83" text-anchor="middle" font-size="8" fill="#3498db" font-style="italic">Interner Pull-up aktiv</text>
            <text x="375" y="94" text-anchor="middle" font-size="8" fill="#3498db">(kein extra Widerstand!)</text>

            <!-- Legende -->
            <text x="240" y="230" text-anchor="middle" font-size="9" fill="#555">Blau = Signal-Leitung | Schwarz = GND</text>
            <text x="240" y="244" text-anchor="middle" font-size="9" fill="#888">Nur 2 Kabel noetig &ndash; so einfach!</text>
          </svg>

          <p>So einfach: Taster zwischen <strong>Pin 7</strong> und <strong>GND</strong>. Fertig! Kein externer Widerstand noetig.</p>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Exkurs: Prellen (Bouncing)</h3>
          <p>Wenn du einen Taster drueckst, "springt" der Kontakt fuer wenige Millisekunden hin und her, bevor er richtig schliesst. Das nennt man <strong>Prellen</strong>. Der Arduino ist so schnell, dass er diese Wackelkontakte mitlest!</p>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
            <div class="warning-box" style="margin:0;">
              <strong>Problem:</strong><br>
              Ein Tastendruck wird als 3&ndash;5 Druecke erkannt!
            </div>
            <div class="tip-box" style="margin:0;">
              <strong>Loesung:</strong><br>
              <code>delay(50)</code> nach dem Lesen &ndash; fertig!
            </div>
          </div>

          <p style="margin-top:1rem;">Fuer unsere Projekte reicht <code>delay(50)</code> voellig aus. Profis nutzen aufwaendigere Methoden, aber die brauchen wir erst spaeter.</p>
        </div>
      `
    },
    example: {
      title: 'Schritt fuer Schritt: Taster anschliessen',
      steps: [
        { label: 'Taster platzieren', html: 'Stecke den Taster ueber den <strong>Mittelsteg</strong> des Breadboards. Er hat vier Beinchen &ndash; je zwei sind intern verbunden.' },
        { label: 'Pin 7 verbinden', html: 'Verbinde ein Beinchen des Tasters mit <strong>Pin 7</strong> des Arduino (blaues Kabel).' },
        { label: 'GND verbinden', html: 'Verbinde das gegenueberliegende Beinchen mit <strong>GND</strong> (schwarzes Kabel). Das war&rsquo;s an Verkabelung!' },
        { label: 'Code hochladen', html: 'Lade den Code mit <code>INPUT_PULLUP</code> hoch. Oeffne den <strong>Serial Monitor</strong> (Lupe oben rechts in der IDE).' },
        { label: 'Testen', html: 'Druecke den Taster: Im Serial Monitor siehst du <code>0</code> (LOW). Laesst du los, siehst du <code>1</code> (HIGH). Die Logik ist bei INPUT_PULLUP <strong>umgekehrt</strong>!' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was gibt digitalRead() zurueck, wenn ein Taster mit INPUT_PULLUP NICHT gedrueckt ist?',
        options: [
          'LOW (0)',
          'HIGH (1)',
          'Einen zufaelligen Wert',
          'Gar nichts'
        ],
        correct: 1,
        explanation: 'Bei INPUT_PULLUP zieht der interne Widerstand den Pin auf HIGH. Erst wenn der Taster gedrueckt wird, verbindet er den Pin mit GND und der Wert wird LOW.'
      },
      {
        type: 'matching',
        question: 'Ordne die Begriffe den richtigen Erklaerungen zu:',
        pairs: [
          { left: 'digitalRead()', right: 'Liest den Zustand eines Pins (HIGH/LOW)' },
          { left: 'INPUT_PULLUP', right: 'Eingang mit internem Pull-up-Widerstand' },
          { left: 'Prellen', right: 'Kurzzeitiges Wackeln des Kontakts beim Druecken' },
          { left: 'Schwebender Pin', right: 'Pin ohne Widerstand gibt zufaellige Werte' }
        ]
      },
      {
        type: 'multiple-choice',
        question: 'Warum braucht ein Taster-Pin einen Pull-up oder Pull-down Widerstand?',
        options: [
          'Damit der Taster schneller reagiert',
          'Damit der Pin einen definierten Zustand hat, wenn der Taster nicht gedrueckt ist',
          'Damit der Arduino mehr Strom bekommt',
          'Damit die LED heller leuchtet'
        ],
        correct: 1,
        explanation: 'Ohne Widerstand "schwebt" der Pin und liefert zufaellige Werte. Der Pull-up/Pull-down gibt ihm eine klare Grundstellung (HIGH oder LOW), wenn der Taster offen ist.'
      }
    ]
  },

  // ===================== LEKTION 9 =====================
  {
    id: 9,
    title: 'LED mit Taster steuern',
    explanation: {
      html: `
        <h2>LED mit Taster steuern &ndash; if/else</h2>
        <p>Jetzt wird es spannend: Du kombinierst <strong>Eingabe</strong> (Taster) und <strong>Ausgabe</strong> (LED). Der Arduino soll <strong>Entscheidungen treffen</strong>: Wenn der Taster gedrueckt ist, geht die LED an. Sonst bleibt sie aus.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Das ist wie ein normaler Lichtschalter: <em>"Wenn Schalter an &rarr; Licht an. Wenn Schalter aus &rarr; Licht aus."</em> In der Programmierung nennt man das eine <strong>Bedingung</strong> (if/else).
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die if/else-Struktur</h3>
          <p>Mit <code>if</code> und <code>else</code> kann der Arduino Entscheidungen treffen:</p>

          <div class="code-card">
            <h4>Grundstruktur</h4>
            <pre><code><span class="keyword">if</span> (bedingung) {
  <span class="comment">// wird ausgefuehrt, WENN bedingung wahr ist</span>
} <span class="keyword">else</span> {
  <span class="comment">// wird ausgefuehrt, WENN bedingung NICHT wahr ist</span>
}</code></pre>
          </div>

          <div class="analogy-box">
            <strong>Alltagsanalogie:</strong> <code>if/else</code> ist wie eine Weiche auf der Eisenbahnstrecke: Je nach Stellung faehrt der Zug links oder rechts &ndash; aber nie beides gleichzeitig!
          </div>
        </div>

        <div class="warning-box">
          <strong>Haeufigster Fehler bei Anfaengern:</strong> Verwechsle nicht <code>=</code> (Zuweisung) mit <code>==</code> (Vergleich)!<br>
          <code>if (zustand == LOW)</code> &rarr; <strong>Richtig!</strong> Vergleicht den Wert.<br>
          <code>if (zustand = LOW)</code> &rarr; <strong>Falsch!</strong> Setzt den Wert auf LOW (und die Bedingung ist immer "wahr").<br>
          Das ist wie der Unterschied zwischen <em>"Ist die Tuer offen?"</em> (==) und <em>"Mach die Tuer auf!"</em> (=).
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Version 1: Taster gedrueckt = LED an</h3>
          <p>Die einfachste Variante &ndash; wie eine Tuerklingel: Die LED leuchtet nur, solange du den Taster haeltst.</p>

          <div class="code-card">
            <h4>Taster steuert LED direkt</h4>
            <pre><code><span class="keyword">int</span> tasterPin = <span class="value">7</span>;
<span class="keyword">int</span> ledPin = <span class="value">8</span>;

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(tasterPin, INPUT_PULLUP);  <span class="comment">// Taster mit Pull-up</span>
  <span class="function">pinMode</span>(ledPin, OUTPUT);            <span class="comment">// LED als Ausgang</span>
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="keyword">int</span> zustand = <span class="function">digitalRead</span>(tasterPin);

  <span class="keyword">if</span> (zustand == LOW) {      <span class="comment">// LOW = gedrueckt (Pull-up!)</span>
    <span class="function">digitalWrite</span>(ledPin, HIGH);  <span class="comment">// LED an</span>
  } <span class="keyword">else</span> {
    <span class="function">digitalWrite</span>(ledPin, LOW);   <span class="comment">// LED aus</span>
  }
}</code></pre>
          </div>

          <div class="tip-box">
            <strong>Warum LOW = gedrueckt?</strong> Weil wir <code>INPUT_PULLUP</code> verwenden! Der interne Widerstand zieht den Pin auf HIGH. Erst wenn der Taster gedrueckt wird, verbindet er den Pin mit GND &rarr; LOW.
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card" style="border-top: 3px solid #F59E0B;">
          <h3>Neu: bool – Wahr oder Falsch</h3>
          <p>Fuer den Toggle brauchen wir einen neuen Datentyp: <code>bool</code> (von "Boolean"). Er kann nur zwei Werte haben:</p>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="tip-box"><strong>true</strong> = wahr = an = ja</div>
            <div class="tip-box"><strong>false</strong> = falsch = aus = nein</div>
          </div>
          <p style="margin-top:0.75rem;">Mit <code>!</code> (Ausrufezeichen) kannst du den Wert umdrehen: <code>!true</code> wird zu <code>false</code> und umgekehrt. Das ist wie ein Lichtschalter – jedes Mal druecken wechselt den Zustand.</p>
        </div>

        <div class="info-card">
          <h3>Version 2: Toggle &ndash; An/Aus wechseln</h3>
          <p>Die erste Version funktioniert wie eine Tuerklingel. Viel cooler ist ein <strong>Toggle</strong>: Ein Druck = an, naechster Druck = aus. Wie ein echter Lichtschalter!</p>

          <div class="code-card">
            <h4>Toggle &ndash; LED wechselt bei jedem Druck</h4>
            <pre><code><span class="keyword">int</span> tasterPin = <span class="value">7</span>;
<span class="keyword">int</span> ledPin = <span class="value">8</span>;
<span class="keyword">bool</span> ledAn = <span class="value">false</span>;           <span class="comment">// Speichert LED-Zustand</span>
<span class="keyword">bool</span> letzterDruck = <span class="value">false</span>;   <span class="comment">// War Taster vorher gedrueckt?</span>

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(tasterPin, INPUT_PULLUP);
  <span class="function">pinMode</span>(ledPin, OUTPUT);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="keyword">bool</span> gedrueckt = (<span class="function">digitalRead</span>(tasterPin) == LOW);

  <span class="comment">// Nur reagieren bei NEUEM Druck</span>
  <span class="keyword">if</span> (gedrueckt && !letzterDruck) {
    ledAn = !ledAn;  <span class="comment">// Zustand umschalten</span>
    <span class="function">digitalWrite</span>(ledPin, ledAn);
  }

  letzterDruck = gedrueckt;
  <span class="function">delay</span>(<span class="value">50</span>);  <span class="comment">// Entprellen</span>
}</code></pre>
          </div>
        </div>

        <div class="info-card">
          <h3>Wie funktioniert der Toggle?</h3>
          <p>Der Trick ist die Variable <code>letzterDruck</code>. Sie merkt sich, ob der Taster <strong>im letzten Durchlauf</strong> gedrueckt war:</p>
          <table class="icon-table">
            <tr><th>Taster jetzt</th><th>Taster vorher</th><th>Was passiert?</th></tr>
            <tr><td>Gedrueckt</td><td>Nicht gedrueckt</td><td><strong>Umschalten!</strong> (neuer Druck)</td></tr>
            <tr><td>Gedrueckt</td><td>Gedrueckt</td><td>Nichts (Taster wird gehalten)</td></tr>
            <tr><td>Nicht gedrueckt</td><td>Gedrueckt</td><td>Nichts (losgelassen)</td></tr>
            <tr><td>Nicht gedrueckt</td><td>Nicht gedrueckt</td><td>Nichts (Ruhezustand)</td></tr>
          </table>
          <p>So wird nur <strong>einmal</strong> umgeschaltet, egal wie lange du den Taster haeltst!</p>
        </div>

        <div class="tip-box">
          <strong>Erinnerung:</strong> <code>ledAn = !ledAn</code> dreht den <code>bool</code>-Wert um. War <code>ledAn</code> vorher <code>false</code>, wird es <code>true</code> – und umgekehrt. So entsteht der Toggle-Effekt.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die komplette Schaltung: Taster + LED</h3>

          <svg viewBox="0 0 540 280" style="width:100%;max-width:540px;margin:1em auto;display:block;font-family:system-ui;">
            <!-- Hintergrund -->
            <rect x="0" y="0" width="540" height="280" rx="8" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>

            <!-- Titel -->
            <text x="270" y="22" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">Taster + LED Schaltung</text>

            <!-- Arduino -->
            <rect x="20" y="45" width="85" height="185" rx="6" fill="#0068B5" stroke="#004080" stroke-width="2"/>
            <text x="62" y="125" text-anchor="middle" font-size="12" fill="white" font-weight="bold">Arduino</text>
            <text x="62" y="141" text-anchor="middle" font-size="9" fill="#B0D4F1">Uno</text>

            <!-- Pin 7 -->
            <rect x="105" y="65" width="32" height="14" rx="3" fill="#222"/>
            <text x="121" y="76" text-anchor="middle" font-size="8" fill="white">Pin 7</text>

            <!-- Pin 8 -->
            <rect x="105" y="115" width="32" height="14" rx="3" fill="#222"/>
            <text x="121" y="126" text-anchor="middle" font-size="8" fill="white">Pin 8</text>

            <!-- GND -->
            <rect x="105" y="190" width="32" height="14" rx="3" fill="#222"/>
            <text x="121" y="201" text-anchor="middle" font-size="8" fill="white">GND</text>

            <!-- === TASTER-BEREICH (oben) === -->
            <text x="250" y="50" text-anchor="middle" font-size="10" fill="#3498db" font-weight="bold">Eingabe</text>

            <!-- Signal-Kabel blau -->
            <line x1="137" y1="72" x2="200" y2="72" stroke="#3498db" stroke-width="2.5" stroke-linecap="round"/>

            <!-- Taster -->
            <rect x="200" y="58" width="65" height="28" rx="5" fill="#ecf0f1" stroke="#95a5a6" stroke-width="1.5"/>
            <circle cx="218" cy="72" r="5" fill="#bdc3c7" stroke="#95a5a6" stroke-width="1"/>
            <circle cx="248" cy="72" r="5" fill="#bdc3c7" stroke="#95a5a6" stroke-width="1"/>
            <line x1="218" y1="67" x2="248" y2="62" stroke="#555" stroke-width="2"/>
            <text x="233" y="55" text-anchor="middle" font-size="9" fill="#555">Taster</text>

            <!-- Taster zu GND -->
            <line x1="265" y1="72" x2="320" y2="72" stroke="#333" stroke-width="2"/>

            <!-- === LED-BEREICH (mitte) === -->
            <text x="350" y="100" text-anchor="middle" font-size="10" fill="#E74C3C" font-weight="bold">Ausgabe</text>

            <!-- Kabel Pin 8 -->
            <line x1="137" y1="122" x2="200" y2="122" stroke="#E74C3C" stroke-width="2.5" stroke-linecap="round"/>

            <!-- Widerstand -->
            <rect x="200" y="114" width="50" height="16" rx="3" fill="#F5E6CC" stroke="#C8A96E" stroke-width="1.5"/>
            <text x="225" y="126" text-anchor="middle" font-size="8" fill="#7D5A29">220&Omega;</text>

            <!-- LED -->
            <line x1="250" y1="122" x2="280" y2="122" stroke="#E74C3C" stroke-width="2"/>
            <polygon points="280,110 305,122 280,134" fill="#FF6B6B" stroke="#CC4444" stroke-width="1.5"/>
            <line x1="305" y1="110" x2="305" y2="134" stroke="#CC4444" stroke-width="1.5"/>
            <text x="292" y="148" text-anchor="middle" font-size="9" fill="#E74C3C">LED</text>

            <!-- LED zu GND -->
            <line x1="305" y1="122" x2="340" y2="122" stroke="#333" stroke-width="2"/>

            <!-- Gemeinsamer GND -->
            <line x1="320" y1="72" x2="320" y2="197" stroke="#333" stroke-width="2"/>
            <line x1="340" y1="122" x2="340" y2="197" stroke="#333" stroke-width="2"/>
            <line x1="137" y1="197" x2="340" y2="197" stroke="#333" stroke-width="2"/>

            <!-- GND-Symbol -->
            <line x1="350" y1="190" x2="370" y2="190" stroke="#333" stroke-width="2"/>
            <line x1="353" y1="196" x2="367" y2="196" stroke="#333" stroke-width="1.5"/>
            <line x1="357" y1="202" x2="363" y2="202" stroke="#333" stroke-width="1"/>
            <text x="360" y="217" text-anchor="middle" font-size="8" fill="#555">GND</text>

            <!-- Legende -->
            <rect x="390" y="55" width="130" height="70" rx="5" fill="white" stroke="#dee2e6" stroke-width="1"/>
            <text x="455" y="72" text-anchor="middle" font-size="9" fill="#333" font-weight="bold">Legende</text>
            <line x1="400" y1="82" x2="420" y2="82" stroke="#3498db" stroke-width="2.5"/>
            <text x="430" y="86" font-size="8" fill="#555">Eingang (Signal)</text>
            <line x1="400" y1="97" x2="420" y2="97" stroke="#E74C3C" stroke-width="2.5"/>
            <text x="430" y="101" font-size="8" fill="#555">Ausgang (LED)</text>
            <line x1="400" y1="112" x2="420" y2="112" stroke="#333" stroke-width="2.5"/>
            <text x="430" y="116" font-size="8" fill="#555">GND</text>

            <!-- Zusammenfassung -->
            <text x="270" y="258" text-anchor="middle" font-size="10" fill="#555">Taster an Pin 7 + LED an Pin 8 &ndash; beide teilen sich GND</text>
          </svg>
        </div>
      `
    },
    example: {
      title: 'Schritt fuer Schritt: LED mit Taster steuern',
      steps: [
        { label: 'Schaltung aufbauen', html: 'Baue die Schaltung aus den letzten beiden Lektionen zusammen: <strong>Taster</strong> an Pin 7 + GND, <strong>LED</strong> mit 220&Omega; an Pin 8 + GND.' },
        { label: 'Version 1 testen', html: 'Lade den Code fuer "Taster gedrueckt = LED an". Halte den Taster &ndash; die LED leuchtet. Lass los &ndash; die LED geht aus.' },
        { label: 'Was passiert im Code?', html: '<code>digitalRead(7)</code> gibt <code>LOW</code> zurueck, wenn der Taster gedrueckt ist (wegen INPUT_PULLUP). Die <code>if</code>-Bedingung ist erfuellt &rarr; <code>digitalWrite(8, HIGH)</code>.' },
        { label: 'Version 2: Toggle', html: 'Lade den Toggle-Code hoch. Jetzt: <strong>1x druecken</strong> = LED geht an. <strong>Nochmal druecken</strong> = LED geht aus. Wie ein echter Lichtschalter!' },
        { label: 'Experimentieren', html: 'Was passiert, wenn du den <code>delay(50)</code> weglässt? Die LED flackert, weil der Taster prellt und mehrfach erkannt wird.' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was macht dieser Code?\nif (digitalRead(7) == LOW) { digitalWrite(8, HIGH); }',
        options: [
          'Wenn Pin 7 HIGH ist, wird LED an Pin 8 eingeschaltet',
          'Wenn der Taster an Pin 7 gedrueckt ist (mit Pull-up), wird LED an Pin 8 eingeschaltet',
          'Die LED an Pin 7 wird eingeschaltet',
          'Pin 7 und Pin 8 werden beide auf LOW gesetzt'
        ],
        correct: 1,
        explanation: 'Bei INPUT_PULLUP bedeutet LOW = gedrueckt. Also: Wenn Taster gedrueckt, dann LED an Pin 8 einschalten (HIGH).'
      },
      {
        type: 'matching',
        question: 'Ordne die Code-Elemente den richtigen Erklaerungen zu:',
        pairs: [
          { left: 'if (bedingung)', right: 'Prueft, ob eine Bedingung wahr ist' },
          { left: 'else', right: 'Wird ausgefuehrt, wenn Bedingung falsch ist' },
          { left: '== (doppeltes Gleich)', right: 'Vergleicht zwei Werte miteinander' },
          { left: '! (Ausrufezeichen)', right: 'Dreht einen bool-Wert um (Negation)' },
          { left: 'bool', right: 'Datentyp mit nur true oder false' }
        ]
      },
      {
        type: 'multiple-choice',
        question: 'Warum braucht der Toggle-Code die Variable "letzterDruck"?',
        options: [
          'Damit die LED heller leuchtet',
          'Damit der Arduino nur beim NEUEN Tastendruck umschaltet, nicht bei jedem loop()-Durchlauf',
          'Damit der Taster schneller reagiert',
          'Damit der Code kuerzer wird'
        ],
        correct: 1,
        explanation: 'Ohne "letzterDruck" wuerde der Arduino bei jedem loop()-Durchlauf (tausende Male pro Sekunde!) umschalten, solange der Taster gehalten wird. Die Variable stellt sicher, dass nur ein NEUER Druck erkannt wird.'
      }
    ]
  },

  // ===================== LEKTION 10 =====================
  {
    id: 10,
    title: 'Einfache Ampelschaltung',
    explanation: {
      html: `
        <h2>Einfache Ampelschaltung &ndash; Dein erstes Projekt!</h2>
        <p>Jetzt kommt alles zusammen! Du baust eine echte <strong>Ampelschaltung</strong> mit drei LEDs &ndash; genau wie an einer Strassenkreuzung. Das ist die <strong>Basis fuer dein Pruefungsprojekt in Modul 4</strong>!</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Denk an die Ampel an der naechsten Kreuzung. Sie folgt immer dem gleichen Ablauf: Rot &rarr; Rot-Gelb &rarr; Gruen &rarr; Gelb &rarr; Rot. Dieser Ablauf wiederholt sich endlos &ndash; genau wie unser Code in <code>loop()</code>!
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Was wir brauchen</h3>
          <table class="icon-table">
            <tr><th>Bauteil</th><th>Anzahl</th><th>Pin</th></tr>
            <tr><td>Rote LED</td><td>1</td><td>Pin 2</td></tr>
            <tr><td>Gelbe LED</td><td>1</td><td>Pin 3</td></tr>
            <tr><td>Gruene LED</td><td>1</td><td>Pin 4</td></tr>
            <tr><td>Widerstand 220 &Omega;</td><td>3</td><td>Je einer pro LED</td></tr>
            <tr><td>Breadboard + Kabel</td><td>1</td><td>&ndash;</td></tr>
          </table>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die Schaltung: Ampel mit 3 LEDs</h3>

          <svg viewBox="0 0 580 400" style="width:100%;max-width:580px;margin:1em auto;display:block;font-family:system-ui;">
            <!-- Hintergrund -->
            <rect x="0" y="0" width="580" height="400" rx="8" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>

            <!-- Titel -->
            <text x="250" y="25" text-anchor="middle" font-size="13" fill="#333" font-weight="bold">Ampelschaltung: 3 LEDs</text>

            <!-- Arduino -->
            <rect x="20" y="60" width="85" height="260" rx="6" fill="#0068B5" stroke="#004080" stroke-width="2"/>
            <text x="62" y="180" text-anchor="middle" font-size="12" fill="white" font-weight="bold">Arduino</text>
            <text x="62" y="196" text-anchor="middle" font-size="9" fill="#B0D4F1">Uno</text>

            <!-- Pins -->
            <rect x="105" y="90" width="32" height="14" rx="3" fill="#222"/>
            <text x="121" y="101" text-anchor="middle" font-size="8" fill="white">Pin 2</text>

            <rect x="105" y="165" width="32" height="14" rx="3" fill="#222"/>
            <text x="121" y="176" text-anchor="middle" font-size="8" fill="white">Pin 3</text>

            <rect x="105" y="240" width="32" height="14" rx="3" fill="#222"/>
            <text x="121" y="251" text-anchor="middle" font-size="8" fill="white">Pin 4</text>

            <rect x="105" y="300" width="32" height="14" rx="3" fill="#222"/>
            <text x="121" y="311" text-anchor="middle" font-size="8" fill="white">GND</text>

            <!-- Breadboard -->
            <rect x="160" y="50" width="290" height="300" rx="6" fill="#f0ede6" stroke="#c8c3b8" stroke-width="1.5"/>

            <!-- GND-Schiene -->
            <rect x="170" y="65" width="270" height="14" rx="2" fill="#E8F0FE" stroke="#3498db" stroke-width="0.5"/>
            <text x="175" y="76" font-size="9" fill="#3498db" font-weight="bold">&minus; GND</text>

            <!-- GND Kabel -->
            <line x1="137" y1="307" x2="180" y2="307" stroke="#333" stroke-width="2.5"/>
            <line x1="180" y1="307" x2="180" y2="76" stroke="#333" stroke-width="2.5"/>
            <circle cx="180" cy="76" r="3" fill="#333"/>

            <!-- ===== ROTE LED (Pin 2) ===== -->
            <line x1="137" y1="97" x2="210" y2="97" stroke="#E74C3C" stroke-width="2.5"/>
            <line x1="210" y1="97" x2="210" y2="115" stroke="#E74C3C" stroke-width="2"/>
            <!-- Widerstand -->
            <rect x="218" y="109" width="44" height="12" rx="2" fill="#F5E6CC" stroke="#C8A96E" stroke-width="1"/>
            <text x="240" y="119" text-anchor="middle" font-size="7" fill="#7D5A29">220&Omega;</text>
            <line x1="210" y1="115" x2="218" y2="115" stroke="#888" stroke-width="1.5"/>
            <line x1="262" y1="115" x2="278" y2="115" stroke="#888" stroke-width="1.5"/>
            <!-- LED rot -->
            <polygon points="278,103 302,115 278,127" fill="#E74C3C" stroke="#C0392B" stroke-width="1.5"/>
            <line x1="302" y1="103" x2="302" y2="127" stroke="#C0392B" stroke-width="2"/>
            <line x1="296" y1="97" x2="306" y2="89" stroke="#FFD93D" stroke-width="1.5"/>
            <line x1="303" y1="100" x2="316" y2="93" stroke="#FFD93D" stroke-width="1.5"/>
            <text x="290" y="140" text-anchor="middle" font-size="10" fill="#E74C3C" font-weight="bold">ROT</text>
            <!-- Kathode zu GND -->
            <line x1="302" y1="115" x2="340" y2="115" stroke="#333" stroke-width="1.5"/>
            <line x1="340" y1="115" x2="340" y2="76" stroke="#333" stroke-width="1.5"/>
            <circle cx="340" cy="76" r="3" fill="#333"/>

            <!-- ===== GELBE LED (Pin 3) ===== -->
            <line x1="137" y1="172" x2="210" y2="172" stroke="#F1C40F" stroke-width="2.5"/>
            <line x1="210" y1="172" x2="210" y2="190" stroke="#F1C40F" stroke-width="2"/>
            <!-- Widerstand -->
            <rect x="218" y="184" width="44" height="12" rx="2" fill="#F5E6CC" stroke="#C8A96E" stroke-width="1"/>
            <text x="240" y="194" text-anchor="middle" font-size="7" fill="#7D5A29">220&Omega;</text>
            <line x1="210" y1="190" x2="218" y2="190" stroke="#888" stroke-width="1.5"/>
            <line x1="262" y1="190" x2="278" y2="190" stroke="#888" stroke-width="1.5"/>
            <!-- LED gelb -->
            <polygon points="278,178 302,190 278,202" fill="#F1C40F" stroke="#D4AC0D" stroke-width="1.5"/>
            <line x1="302" y1="178" x2="302" y2="202" stroke="#D4AC0D" stroke-width="2"/>
            <line x1="296" y1="172" x2="306" y2="164" stroke="#FFD93D" stroke-width="1.5"/>
            <line x1="303" y1="175" x2="316" y2="168" stroke="#FFD93D" stroke-width="1.5"/>
            <text x="290" y="215" text-anchor="middle" font-size="10" fill="#D4AC0D" font-weight="bold">GELB</text>
            <!-- Kathode zu GND -->
            <line x1="302" y1="190" x2="370" y2="190" stroke="#333" stroke-width="1.5"/>
            <line x1="370" y1="190" x2="370" y2="76" stroke="#333" stroke-width="1.5"/>
            <circle cx="370" cy="76" r="3" fill="#333"/>

            <!-- ===== GRUENE LED (Pin 4) ===== -->
            <line x1="137" y1="247" x2="210" y2="247" stroke="#2ECC71" stroke-width="2.5"/>
            <line x1="210" y1="247" x2="210" y2="265" stroke="#2ECC71" stroke-width="2"/>
            <!-- Widerstand -->
            <rect x="218" y="259" width="44" height="12" rx="2" fill="#F5E6CC" stroke="#C8A96E" stroke-width="1"/>
            <text x="240" y="269" text-anchor="middle" font-size="7" fill="#7D5A29">220&Omega;</text>
            <line x1="210" y1="265" x2="218" y2="265" stroke="#888" stroke-width="1.5"/>
            <line x1="262" y1="265" x2="278" y2="265" stroke="#888" stroke-width="1.5"/>
            <!-- LED gruen -->
            <polygon points="278,253 302,265 278,277" fill="#2ECC71" stroke="#27AE60" stroke-width="1.5"/>
            <line x1="302" y1="253" x2="302" y2="277" stroke="#27AE60" stroke-width="2"/>
            <line x1="296" y1="247" x2="306" y2="239" stroke="#FFD93D" stroke-width="1.5"/>
            <line x1="303" y1="250" x2="316" y2="243" stroke="#FFD93D" stroke-width="1.5"/>
            <text x="290" y="290" text-anchor="middle" font-size="10" fill="#27AE60" font-weight="bold">GRUEN</text>
            <!-- Kathode zu GND -->
            <line x1="302" y1="265" x2="400" y2="265" stroke="#333" stroke-width="1.5"/>
            <line x1="400" y1="265" x2="400" y2="76" stroke="#333" stroke-width="1.5"/>
            <circle cx="400" cy="76" r="3" fill="#333"/>

            <!-- Ampel-Gehaeuse (rechts) -->
            <rect x="470" y="65" width="85" height="250" rx="12" fill="#333" stroke="#111" stroke-width="2"/>
            <circle cx="512" cy="120" r="28" fill="#4a0000" stroke="#222" stroke-width="1.5"/>
            <circle cx="512" cy="120" r="20" fill="#E74C3C" opacity="0.9"/>
            <circle cx="512" cy="192" r="28" fill="#4a4a00" stroke="#222" stroke-width="1.5"/>
            <circle cx="512" cy="192" r="20" fill="#F1C40F" opacity="0.9"/>
            <circle cx="512" cy="264" r="28" fill="#004a00" stroke="#222" stroke-width="1.5"/>
            <circle cx="512" cy="264" r="20" fill="#2ECC71" opacity="0.9"/>
            <rect x="502" y="315" width="20" height="35" fill="#555"/>

            <!-- Zuordnungspfeile -->
            <line x1="350" y1="115" x2="480" y2="120" stroke="#E74C3C" stroke-width="1" stroke-dasharray="4,3"/>
            <line x1="380" y1="190" x2="480" y2="192" stroke="#F1C40F" stroke-width="1" stroke-dasharray="4,3"/>
            <line x1="410" y1="265" x2="480" y2="264" stroke="#2ECC71" stroke-width="1" stroke-dasharray="4,3"/>

            <!-- Beschriftung Ampel -->
            <text x="512" y="365" text-anchor="middle" font-size="11" fill="#555" font-weight="bold">Ampel</text>

            <!-- Info unten -->
            <text x="250" y="380" text-anchor="middle" font-size="10" fill="#555">Jede LED hat einen eigenen 220&Omega; Widerstand</text>
            <text x="250" y="395" text-anchor="middle" font-size="9" fill="#888">Rot = Pin 2 | Gelb = Pin 3 | Gruen = Pin 4</text>
          </svg>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die deutschen Ampelphasen</h3>
          <p>Eine deutsche Ampel hat <strong>4 Phasen</strong>, die sich endlos wiederholen:</p>

          <table class="icon-table">
            <tr><th>Phase</th><th>Rot</th><th>Gelb</th><th>Gruen</th><th>Bedeutung</th><th>Dauer</th></tr>
            <tr><td><strong>1. Rot</strong></td><td style="background:#E74C3C;color:white;text-align:center;">AN</td><td style="text-align:center;">aus</td><td style="text-align:center;">aus</td><td>Halt! Stehen bleiben.</td><td>5 Sek.</td></tr>
            <tr><td><strong>2. Rot-Gelb</strong></td><td style="background:#E74C3C;color:white;text-align:center;">AN</td><td style="background:#F1C40F;text-align:center;">AN</td><td style="text-align:center;">aus</td><td>Achtung, gleich Gruen!</td><td>1 Sek.</td></tr>
            <tr><td><strong>3. Gruen</strong></td><td style="text-align:center;">aus</td><td style="text-align:center;">aus</td><td style="background:#2ECC71;text-align:center;">AN</td><td>Fahren/Gehen erlaubt.</td><td>5 Sek.</td></tr>
            <tr><td><strong>4. Gelb</strong></td><td style="text-align:center;">aus</td><td style="background:#F1C40F;text-align:center;">AN</td><td style="text-align:center;">aus</td><td>Achtung, gleich Rot!</td><td>2 Sek.</td></tr>
          </table>

          <div class="tip-box">
            <strong>Merke:</strong> Die Phase <strong>Rot-Gelb</strong> gibt es nur in Deutschland (und wenigen anderen Laendern)! In vielen Laendern springt die Ampel direkt von Rot auf Gruen.
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>delay() &ndash; Das Timing steuern</h3>
          <p>Mit <code>delay(millisekunden)</code> haeltst du das Programm an:</p>
          <table class="icon-table">
            <tr><th>Aufruf</th><th>Wartezeit</th></tr>
            <tr><td><code>delay(1000)</code></td><td>1 Sekunde</td></tr>
            <tr><td><code>delay(2000)</code></td><td>2 Sekunden</td></tr>
            <tr><td><code>delay(5000)</code></td><td>5 Sekunden</td></tr>
          </table>

          <div class="warning-box">
            <strong>Nachteil von delay():</strong> Waehrend <code>delay()</code> laeuft, kann der Arduino <strong>nichts anderes tun</strong> &ndash; er ist "eingefroren". Fuer unsere einfache Ampel ist das ok. Fuer komplexere Projekte lernt man spaeter eine bessere Methode (<code>millis()</code>).
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Der komplette Ampel-Code</h3>

          <div class="code-card">
            <h4>Ampelschaltung &ndash; Kompletter Code</h4>
            <pre><code><span class="comment">// ===== Pin-Definitionen =====</span>
<span class="keyword">int</span> rotPin   = <span class="value">2</span>;
<span class="keyword">int</span> gelbPin  = <span class="value">3</span>;
<span class="keyword">int</span> gruenPin = <span class="value">4</span>;

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(rotPin, OUTPUT);
  <span class="function">pinMode</span>(gelbPin, OUTPUT);
  <span class="function">pinMode</span>(gruenPin, OUTPUT);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="comment">// Phase 1: ROT (5 Sekunden)</span>
  <span class="function">digitalWrite</span>(rotPin, HIGH);
  <span class="function">digitalWrite</span>(gelbPin, LOW);
  <span class="function">digitalWrite</span>(gruenPin, LOW);
  <span class="function">delay</span>(<span class="value">5000</span>);

  <span class="comment">// Phase 2: ROT + GELB (1 Sekunde)</span>
  <span class="function">digitalWrite</span>(rotPin, HIGH);
  <span class="function">digitalWrite</span>(gelbPin, HIGH);
  <span class="function">digitalWrite</span>(gruenPin, LOW);
  <span class="function">delay</span>(<span class="value">1000</span>);

  <span class="comment">// Phase 3: GRUEN (5 Sekunden)</span>
  <span class="function">digitalWrite</span>(rotPin, LOW);
  <span class="function">digitalWrite</span>(gelbPin, LOW);
  <span class="function">digitalWrite</span>(gruenPin, HIGH);
  <span class="function">delay</span>(<span class="value">5000</span>);

  <span class="comment">// Phase 4: GELB (2 Sekunden)</span>
  <span class="function">digitalWrite</span>(rotPin, LOW);
  <span class="function">digitalWrite</span>(gelbPin, HIGH);
  <span class="function">digitalWrite</span>(gruenPin, LOW);
  <span class="function">delay</span>(<span class="value">2000</span>);
}</code></pre>
          </div>

          <div class="tip-box">
            <strong>Hinweis fuer die Pruefung:</strong> Dieser Code ist deine Basis fuer das <strong>Pruefungsprojekt in Modul 4</strong>! Von hier aus kannst du erweitern: Fussgaenger-Taster, Nachtmodus (blinkendes Gelb), zweite Ampel fuer die Querstrasse &ndash; das sind typische Pruefungserweiterungen.
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Code-Verbesserung: Hilfsfunktion</h3>
          <p>Der Code oben funktioniert, aber du wiederholst dich viel (4x drei <code>digitalWrite</code>-Aufrufe). Mit einer <strong>eigenen Funktion</strong> wird er uebersichtlicher:</p>

          <div class="code-card">
            <h4>Bessere Version mit Hilfsfunktion</h4>
            <pre><code><span class="keyword">int</span> rotPin   = <span class="value">2</span>;
<span class="keyword">int</span> gelbPin  = <span class="value">3</span>;
<span class="keyword">int</span> gruenPin = <span class="value">4</span>;

<span class="comment">// Eigene Funktion: Ampel schalten</span>
<span class="keyword">void</span> <span class="function">ampelSchalten</span>(<span class="keyword">bool</span> rot, <span class="keyword">bool</span> gelb, <span class="keyword">bool</span> gruen, <span class="keyword">int</span> dauer) {
  <span class="function">digitalWrite</span>(rotPin, rot);
  <span class="function">digitalWrite</span>(gelbPin, gelb);
  <span class="function">digitalWrite</span>(gruenPin, gruen);
  <span class="function">delay</span>(dauer);
}

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(rotPin, OUTPUT);
  <span class="function">pinMode</span>(gelbPin, OUTPUT);
  <span class="function">pinMode</span>(gruenPin, OUTPUT);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="function">ampelSchalten</span>(<span class="value">true</span>,  <span class="value">false</span>, <span class="value">false</span>, <span class="value">5000</span>);  <span class="comment">// Rot</span>
  <span class="function">ampelSchalten</span>(<span class="value">true</span>,  <span class="value">true</span>,  <span class="value">false</span>, <span class="value">1000</span>);  <span class="comment">// Rot-Gelb</span>
  <span class="function">ampelSchalten</span>(<span class="value">false</span>, <span class="value">false</span>, <span class="value">true</span>,  <span class="value">5000</span>);  <span class="comment">// Gruen</span>
  <span class="function">ampelSchalten</span>(<span class="value">false</span>, <span class="value">true</span>,  <span class="value">false</span>, <span class="value">2000</span>);  <span class="comment">// Gelb</span>
}</code></pre>
          </div>

          <div class="analogy-box">
            <strong>Alltagsanalogie:</strong> Statt jedes Mal zu sagen <em>"Dreh die rote Lampe an, dreh die gelbe aus, dreh die gruene aus und warte 5 Sekunden"</em>, sagst du einfach <em>"Ampel auf Rot fuer 5 Sekunden"</em>. Die Funktion <code>ampelSchalten()</code> ist wie eine Abkuerzung fuer wiederkehrende Befehle.
          </div>

          <div class="tip-box">
            <strong>Vorteil:</strong> Eigene Funktionen machen den Code <strong>kuerzer und lesbarer</strong>. Wenn du spaeter etwas aendern willst (z.B. einen Buzzer hinzufuegen), musst du nur die Funktion <code>ampelSchalten()</code> anpassen &ndash; nicht vier Stellen im Code!
          </div>
        </div>
      `
    },
    example: {
      title: 'Schritt fuer Schritt: Ampel aufbauen',
      steps: [
        { label: 'LEDs platzieren', html: 'Stecke die drei LEDs ins Breadboard: <strong>Rot</strong> oben, <strong>Gelb</strong> Mitte, <strong>Gruen</strong> unten &ndash; wie bei einer echten Ampel. Achte auf das lange Beinchen (= Plus)!' },
        { label: 'Widerstaende', html: 'Verbinde jedes lange LED-Beinchen ueber einen <strong>220&Omega; Widerstand</strong> mit dem jeweiligen Pin: Rot &rarr; Pin 2, Gelb &rarr; Pin 3, Gruen &rarr; Pin 4.' },
        { label: 'GND verbinden', html: 'Alle kurzen Beinchen kommen auf die <strong>GND-Leiste</strong> des Breadboards. Die GND-Leiste mit einem <strong>GND-Pin</strong> am Arduino verbinden.' },
        { label: 'Code hochladen', html: 'Tippe den Ampel-Code ab (oder die verbesserte Version mit Hilfsfunktion). Hochladen &ndash; und beobachten!' },
        { label: 'Ergebnis', html: 'Deine Ampel durchlaeuft jetzt den kompletten Zyklus: <strong>Rot (5s) &rarr; Rot-Gelb (1s) &rarr; Gruen (5s) &rarr; Gelb (2s)</strong> &ndash; und wieder von vorne!' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Wie viele Widerstaende brauchst du fuer eine Ampel mit 3 LEDs?',
        options: [
          '1 Widerstand fuer alle drei',
          '2 Widerstaende',
          '3 Widerstaende (einen pro LED)',
          'Gar keinen, die LEDs teilen sich den Strom'
        ],
        correct: 2,
        explanation: 'Jede LED braucht ihren eigenen 220 Ohm Vorwiderstand, damit der Strom individuell begrenzt wird. Wuerde man nur einen Widerstand fuer alle verwenden, wuerden die LEDs unterschiedlich hell leuchten.'
      },
      {
        type: 'matching',
        question: 'Ordne die Ampelphasen der richtigen LED-Kombination zu:',
        pairs: [
          { left: 'Phase 1: Rot', right: 'Nur rote LED an' },
          { left: 'Phase 2: Rot-Gelb', right: 'Rote und gelbe LED an' },
          { left: 'Phase 3: Gruen', right: 'Nur gruene LED an' },
          { left: 'Phase 4: Gelb', right: 'Nur gelbe LED an' }
        ]
      },
      {
        type: 'multiple-choice',
        question: 'In welcher Reihenfolge laufen die Ampelphasen in Deutschland ab?',
        options: [
          'Rot \u2192 Gruen \u2192 Gelb \u2192 Rot',
          'Rot \u2192 Rot-Gelb \u2192 Gruen \u2192 Gelb \u2192 Rot',
          'Rot \u2192 Gelb \u2192 Gruen \u2192 Rot-Gelb \u2192 Rot',
          'Gruen \u2192 Gelb \u2192 Rot \u2192 Rot-Gelb \u2192 Gruen'
        ],
        correct: 1,
        explanation: 'Die deutsche Ampelfolge ist: Rot (Halt) \u2192 Rot-Gelb (Achtung, gleich Gruen) \u2192 Gruen (Fahren) \u2192 Gelb (Achtung, gleich Rot). Die Rot-Gelb-Phase gibt es nur in wenigen Laendern!'
      }
    ]
  }
];
