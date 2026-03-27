const LESSONS_PROJEKT = [
  // ===================== LEKTION 15 =====================
  {
    id: 15,
    title: 'Ampel mit Fußgängerüberweg',
    explanation: {
      html: `
        <h2>Ampel mit Fußgängerüberweg</h2>
        <p>Jetzt wird es richtig spannend: Du baust eine <strong>vollständige Ampelanlage</strong> mit einer Auto-Ampel (Rot, Gelb, Grün), einer Fußgänger-Ampel (Rot, Grün) und einem Taster, mit dem Fußgänger "Grün anfordern" können.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Denk an den Fußgängerüberweg vor deiner Schule. Die Ampel steht für Autos auf Grün. Erst wenn ein Fußgänger den Knopf drückt, wechselt sie – aber nicht sofort, sondern in einer bestimmten Reihenfolge. Genau das programmieren wir jetzt!
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Pin-Belegung</h3>
          <p>So schließt du alle Bauteile an den Arduino an:</p>
          <table class="icon-table">
            <tr><th>Pin</th><th>Bauteil</th><th>Funktion</th></tr>
            <tr><td><strong>Pin 2</strong></td><td>Rote LED (Auto)</td><td>Auto-Ampel: Rot</td></tr>
            <tr><td><strong>Pin 3</strong></td><td>Gelbe LED (Auto)</td><td>Auto-Ampel: Gelb</td></tr>
            <tr><td><strong>Pin 4</strong></td><td>Grüne LED (Auto)</td><td>Auto-Ampel: Grün</td></tr>
            <tr><td><strong>Pin 5</strong></td><td>Rote LED (Fußgänger)</td><td>Fußgänger-Ampel: Rot</td></tr>
            <tr><td><strong>Pin 6</strong></td><td>Grüne LED (Fußgänger)</td><td>Fußgänger-Ampel: Grün</td></tr>
            <tr><td><strong>Pin 7</strong></td><td>Taster</td><td>Fußgänger drückt "Grün anfordern"</td></tr>
          </table>
        </div>

        <div style="margin:1.5rem 0;text-align:center;">
          <h3>Breadboard-Aufbau: Ampel mit Fußgängerüberweg</h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 440" style="max-width:100%;height:auto;background:#f8f8f8;border:1px solid #ccc;border-radius:8px;">
            <!-- ===== BREADBOARD ===== -->
            <rect x="10" y="10" width="350" height="230" rx="6" fill="#e8e0d0" stroke="#999" stroke-width="1.5"/>
            <text x="185" y="8" text-anchor="middle" font-size="8" fill="#666">Breadboard</text>

            <!-- Obere +Schiene (rot) -->
            <rect x="30" y="22" width="310" height="10" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="22" y="30" font-size="7" fill="#c00" font-weight="bold">+</text>
            <!-- Obere -Schiene (blau) = GND -->
            <rect x="30" y="38" width="310" height="10" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="22" y="46" font-size="7" fill="#00c" font-weight="bold">−</text>

            <!-- Reihen a-e -->
            <text x="22" y="72" font-size="6" fill="#666">a</text>
            <text x="22" y="84" font-size="6" fill="#666">b</text>
            <text x="22" y="96" font-size="6" fill="#666">c</text>
            <text x="22" y="108" font-size="6" fill="#666">d</text>
            <text x="22" y="120" font-size="6" fill="#666">e</text>

            <!-- Breadboard-Loecher a-e (Spalten 1-30) als Punktlinien -->
            <g stroke="#777" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="0.1,7.8" fill="none">
              <line x1="34" y1="68" x2="324" y2="68"/>
              <line x1="34" y1="80" x2="324" y2="80"/>
              <line x1="34" y1="92" x2="324" y2="92"/>
              <line x1="34" y1="104" x2="324" y2="104"/>
              <line x1="34" y1="116" x2="324" y2="116"/>
            </g>

            <!-- Mittelrinne -->
            <rect x="30" y="124" width="310" height="8" rx="1" fill="#d0c8b8"/>

            <!-- Reihen f-j -->
            <text x="22" y="144" font-size="6" fill="#666">f</text>
            <text x="22" y="156" font-size="6" fill="#666">g</text>
            <text x="22" y="168" font-size="6" fill="#666">h</text>
            <text x="22" y="180" font-size="6" fill="#666">i</text>
            <text x="22" y="192" font-size="6" fill="#666">j</text>

            <!-- Breadboard-Loecher f-j -->
            <g stroke="#777" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="0.1,7.8" fill="none">
              <line x1="34" y1="140" x2="324" y2="140"/>
              <line x1="34" y1="152" x2="324" y2="152"/>
              <line x1="34" y1="164" x2="324" y2="164"/>
              <line x1="34" y1="176" x2="324" y2="176"/>
              <line x1="34" y1="188" x2="324" y2="188"/>
            </g>

            <!-- Untere +Schiene -->
            <rect x="30" y="206" width="310" height="10" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="22" y="214" font-size="7" fill="#c00" font-weight="bold">+</text>
            <!-- Untere -Schiene -->
            <rect x="30" y="222" width="310" height="10" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="22" y="230" font-size="7" fill="#00c" font-weight="bold">−</text>

            <!-- Spaltennummern -->
            <g font-size="5" fill="#888" text-anchor="middle">
              <text x="34" y="60">1</text><text x="44" y="60">2</text><text x="54" y="60">3</text><text x="64" y="60">4</text><text x="74" y="60">5</text><text x="84" y="60">6</text><text x="94" y="60">7</text><text x="104" y="60">8</text><text x="114" y="60">9</text><text x="124" y="60">10</text><text x="134" y="60">11</text><text x="144" y="60">12</text><text x="154" y="60">13</text><text x="164" y="60">14</text><text x="174" y="60">15</text><text x="184" y="60">16</text><text x="194" y="60">17</text><text x="204" y="60">18</text><text x="214" y="60">19</text><text x="224" y="60">20</text><text x="234" y="60">21</text><text x="244" y="60">22</text><text x="254" y="60">23</text><text x="264" y="60">24</text><text x="274" y="60">25</text><text x="284" y="60">26</text><text x="294" y="60">27</text><text x="304" y="60">28</text><text x="314" y="60">29</text><text x="324" y="60">30</text>
            </g>

            <!-- ===== BAUTEILE ===== -->

            <!-- === AUTO-AMPEL: Spalten 2-7 === -->
            <!-- Spalten-Markierungen -->
            <rect x="39" y="62" width="12" height="60" rx="2" fill="#fcc" opacity="0.3"/>
            <rect x="59" y="62" width="12" height="60" rx="2" fill="#ffc" opacity="0.3"/>
            <rect x="79" y="62" width="12" height="60" rx="2" fill="#cfc" opacity="0.3"/>

            <!-- LED rot Auto (Spalte 3, Reihe a-b): Dreieck zeigt nach rechts (Anode links=a, Kathode rechts=b) -->
            <polygon points="42,65 42,71 48,68" fill="#e00" stroke="#a00" stroke-width="0.5"/>
            <line x1="48" y1="68" x2="44" y2="80" stroke="#a00" stroke-width="1"/>
            <text x="44" y="62" text-anchor="middle" font-size="5" fill="#c00" font-weight="bold">R</text>
            <!-- 220R Widerstand (Spalte 3, Reihe c-d) -->
            <rect x="40" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="44" y="100" text-anchor="middle" font-size="4" fill="#654">220</text>
            <!-- Kathode → obere -Schiene (GND) -->
            <line x1="44" y1="80" x2="44" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <!-- LED gelb Auto (Spalte 5, Reihe a-b) -->
            <polygon points="62,65 62,71 68,68" fill="#ee0" stroke="#aa0" stroke-width="0.5"/>
            <line x1="68" y1="68" x2="64" y2="80" stroke="#aa0" stroke-width="1"/>
            <text x="64" y="62" text-anchor="middle" font-size="5" fill="#aa0" font-weight="bold">Ge</text>
            <!-- 220R -->
            <rect x="60" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="64" y="100" text-anchor="middle" font-size="4" fill="#654">220</text>
            <line x1="64" y1="80" x2="64" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <!-- LED gruen Auto (Spalte 7, Reihe a-b) -->
            <polygon points="82,65 82,71 88,68" fill="#0c0" stroke="#090" stroke-width="0.5"/>
            <line x1="88" y1="68" x2="84" y2="80" stroke="#090" stroke-width="1"/>
            <text x="84" y="62" text-anchor="middle" font-size="5" fill="#090" font-weight="bold">Gr</text>
            <!-- 220R -->
            <rect x="80" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="84" y="100" text-anchor="middle" font-size="4" fill="#654">220</text>
            <line x1="84" y1="80" x2="84" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <!-- Label Auto-Ampel -->
            <text x="64" y="125" text-anchor="middle" font-size="6" fill="#555" font-weight="bold">Auto-Ampel</text>

            <!-- === FUSSGAENGER-AMPEL: Spalten 10-13 === -->
            <rect x="119" y="62" width="12" height="60" rx="2" fill="#fcc" opacity="0.3"/>
            <rect x="139" y="62" width="12" height="60" rx="2" fill="#cfc" opacity="0.3"/>

            <!-- LED rot Fussgaenger (Spalte 10) -->
            <polygon points="122,65 122,71 128,68" fill="#e00" stroke="#a00" stroke-width="0.5"/>
            <line x1="128" y1="68" x2="124" y2="80" stroke="#a00" stroke-width="1"/>
            <text x="124" y="62" text-anchor="middle" font-size="5" fill="#c00" font-weight="bold">FR</text>
            <rect x="120" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="124" y="100" text-anchor="middle" font-size="4" fill="#654">220</text>
            <line x1="124" y1="80" x2="124" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <!-- LED gruen Fussgaenger (Spalte 12) -->
            <polygon points="142,65 142,71 148,68" fill="#0c0" stroke="#090" stroke-width="0.5"/>
            <line x1="148" y1="68" x2="144" y2="80" stroke="#090" stroke-width="1"/>
            <text x="144" y="62" text-anchor="middle" font-size="5" fill="#090" font-weight="bold">FG</text>
            <rect x="140" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="144" y="100" text-anchor="middle" font-size="4" fill="#654">220</text>
            <line x1="144" y1="80" x2="144" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <text x="134" y="125" text-anchor="middle" font-size="6" fill="#555" font-weight="bold">Fußg.-Ampel</text>

            <!-- === TASTER: Spalten 16-17 (ueber Mittelrinne) === -->
            <rect x="179" y="110" width="22" height="26" rx="3" fill="#888" stroke="#555" stroke-width="1"/>
            <circle cx="190" cy="123" r="6" fill="#aaa" stroke="#666" stroke-width="0.8"/>
            <text x="190" y="108" text-anchor="middle" font-size="5" fill="#555" font-weight="bold">Taster</text>
            <!-- Taster-Beinchen: Spalte 16 Reihe e + Spalte 17 Reihe f -->
            <line x1="184" y1="116" x2="184" y2="110" stroke="#555" stroke-width="1"/>
            <line x1="196" y1="136" x2="196" y2="142" stroke="#555" stroke-width="1"/>

            <!-- ===== ARDUINO ===== -->
            <rect x="410" y="20" width="280" height="210" rx="8" fill="#2176AE" stroke="#1a5f8a" stroke-width="2"/>
            <text x="550" y="45" text-anchor="middle" font-size="14" fill="white" font-weight="bold">Arduino Uno</text>
            <rect x="530" y="15" width="50" height="12" rx="2" fill="#aaa" stroke="#888" stroke-width="1"/>
            <text x="555" y="23" text-anchor="middle" font-size="5" fill="#555">USB</text>

            <!-- Arduino Pins -->
            <g font-size="7" fill="white" font-weight="bold">
              <rect x="420" y="65" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="445" y="75" text-anchor="middle">Pin 2</text>
              <rect x="420" y="85" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="445" y="95" text-anchor="middle">Pin 3</text>
              <rect x="420" y="105" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="445" y="115" text-anchor="middle">Pin 4</text>
              <rect x="420" y="125" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="445" y="135" text-anchor="middle">Pin 5</text>
              <rect x="420" y="145" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="445" y="155" text-anchor="middle">Pin 6</text>
              <rect x="420" y="165" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="445" y="175" text-anchor="middle">Pin 7</text>
              <rect x="420" y="195" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="445" y="205" text-anchor="middle">GND</text>
              <rect x="560" y="195" width="50" height="14" rx="2" fill="#c00"/>
              <text x="585" y="205" text-anchor="middle">5V</text>
            </g>

            <!-- ===== KABEL ===== -->
            <!-- Pin 2 → Widerstand Spalte 3 (Auto Rot) -->
            <path d="M420,72 C380,72 380,104 44,104" fill="none" stroke="#e44" stroke-width="1.5"/>
            <text x="380" y="68" font-size="5" fill="#c00">Pin2→R</text>

            <!-- Pin 3 → Widerstand Spalte 5 (Auto Gelb) -->
            <path d="M420,92 C385,92 385,104 64,104" fill="none" stroke="#cc0" stroke-width="1.5"/>
            <text x="380" y="88" font-size="5" fill="#aa0">Pin3→G</text>

            <!-- Pin 4 → Widerstand Spalte 7 (Auto Gruen) -->
            <path d="M420,112 C390,112 390,104 84,104" fill="none" stroke="#0a0" stroke-width="1.5"/>
            <text x="380" y="108" font-size="5" fill="#090">Pin4→Gr</text>

            <!-- Pin 5 → Widerstand Spalte 10 (Fussg. Rot) -->
            <path d="M420,132 C395,132 395,104 124,104" fill="none" stroke="#e44" stroke-width="1.5" stroke-dasharray="4,2"/>
            <text x="380" y="128" font-size="5" fill="#c00">Pin5→FR</text>

            <!-- Pin 6 → Widerstand Spalte 12 (Fussg. Gruen) -->
            <path d="M420,152 C398,152 398,104 144,104" fill="none" stroke="#0a0" stroke-width="1.5" stroke-dasharray="4,2"/>
            <text x="380" y="148" font-size="5" fill="#090">Pin6→FG</text>

            <!-- Pin 7 → Taster (Spalte 16, Reihe e) -->
            <path d="M420,172 C400,172 400,116 184,116" fill="none" stroke="#66f" stroke-width="1.5"/>
            <text x="380" y="168" font-size="5" fill="#44c">Pin7→Taster</text>

            <!-- GND → obere -Schiene -->
            <path d="M420,202 C375,202 375,43 340,43" fill="none" stroke="#333" stroke-width="2"/>
            <text x="345" y="52" font-size="5" fill="#333" font-weight="bold">GND</text>

            <!-- Taster anderes Bein (Spalte 17, Reihe f) → untere -Schiene → verbunden zu obere -Schiene -->
            <line x1="196" y1="142" x2="196" y2="222" stroke="#333" stroke-width="1"/>
            <line x1="196" y1="222" x2="340" y2="222" stroke="#333" stroke-width="0.8"/>
            <line x1="340" y1="222" x2="340" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>
            <text x="200" y="200" font-size="5" fill="#333">→GND</text>

            <!-- 5V-Verbindung (hier nicht noetig, nur GND) -->

            <!-- ===== LEGENDE ===== -->
            <rect x="10" y="260" width="700" height="70" rx="6" fill="#f0f0f0" stroke="#ccc" stroke-width="1"/>
            <text x="20" y="278" font-size="9" fill="#333" font-weight="bold">Legende:</text>
            <line x1="20" y1="290" x2="45" y2="290" stroke="#e44" stroke-width="2"/><text x="50" y="293" font-size="7" fill="#555">Rote LED / Signal</text>
            <line x1="150" y1="290" x2="175" y2="290" stroke="#cc0" stroke-width="2"/><text x="180" y="293" font-size="7" fill="#555">Gelbe LED</text>
            <line x1="260" y1="290" x2="285" y2="290" stroke="#0a0" stroke-width="2"/><text x="290" y="293" font-size="7" fill="#555">Grüne LED</text>
            <line x1="380" y1="290" x2="405" y2="290" stroke="#333" stroke-width="2"/><text x="410" y="293" font-size="7" fill="#555">GND (schwarz)</text>
            <line x1="510" y1="290" x2="535" y2="290" stroke="#66f" stroke-width="2"/><text x="540" y="293" font-size="7" fill="#555">Signal (Taster)</text>
            <rect x="20" y="302" width="10" height="8" rx="1" fill="#e8d0a0" stroke="#986" stroke-width="0.5"/><text x="35" y="309" font-size="7" fill="#555">220Ω Vorwiderstand</text>
            <text x="200" y="309" font-size="7" fill="#555">Gestrichelt: LED-Kathode → GND-Schiene</text>
            <text x="20" y="322" font-size="7" fill="#999">Alle LED-Kathoden (−) sind mit der oberen blauen GND-Schiene verbunden.</text>
          </svg>
        </div>

        <div class="tip-box">
          <strong>Tipp:</strong> Der Taster wird mit <code>INPUT_PULLUP</code> konfiguriert. Das bedeutet: Du brauchst keinen externen Widerstand – der Arduino hat einen eingebauten. Der Taster wird zwischen Pin 7 und GND angeschlossen. Wenn gedrückt = LOW, wenn nicht gedrückt = HIGH.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Der Ablauf der Ampelschaltung</h3>
          <p>So läuft die Ampel ab – genau wie an einer echten Kreuzung:</p>
          <ol class="step-list">
            <li><strong>Normalzustand:</strong> Auto-Ampel steht auf Grün, Fußgänger-Ampel auf Rot. Autos fahren, Fußgänger warten.</li>
            <li><strong>Taster gedrückt:</strong> Ein Fußgänger will die Straße überqueren. Die Auto-Ampel wechselt auf Gelb (2 Sekunden) und dann auf Rot.</li>
            <li><strong>Fußgänger dürfen gehen:</strong> Fußgänger-Ampel wird Grün (5 Sekunden). Dann blinkt sie 3-mal (Warnung: bald wieder Rot!). Dann wird sie Rot.</li>
            <li><strong>Autos dürfen wieder fahren:</strong> Auto-Ampel zeigt Rot-Gelb gleichzeitig (1 Sekunde) und wechselt dann auf Grün. Zurück zum Normalzustand.</li>
          </ol>
        </div>

        <div class="warning-box">
          <strong>Achtung:</strong> Zwischen Auto-Rot und Fußgänger-Grün gibt es immer eine kurze Pause (ca. 1 Sekunde). In der echten Welt ist das die Räumzeit – Autos, die noch unterwegs sind, müssen die Kreuzung erst verlassen können!
        </div>

        <hr class="section-divider">

        <h3>Der komplette Code</h3>

        <div class="info-card" style="border-top: 3px solid #F59E0B;">
          <h3>Neu: Die for-Schleife</h3>
          <p>Fuer das Blinken der Fussgaenger-LED brauchen wir eine <strong>for-Schleife</strong> – sie wiederholt etwas eine bestimmte Anzahl von Malen.</p>
          <div class="code-card">
            <h4>So funktioniert sie</h4>
            <pre><code><span class="keyword">for</span> (<span class="keyword">int</span> i = <span class="value">0</span>; i < <span class="value">3</span>; i++) {
  <span class="comment">// Dieser Block wird 3-mal ausgefuehrt</span>
}</code></pre>
          </div>
          <table class="icon-table">
            <tr><th>Teil</th><th>Bedeutung</th></tr>
            <tr><td><code>int i = 0</code></td><td>Zaehler startet bei 0</td></tr>
            <tr><td><code>i < 3</code></td><td>Weitermachen solange i kleiner als 3</td></tr>
            <tr><td><code>i++</code></td><td>Nach jedem Durchlauf: i um 1 erhoehen</td></tr>
          </table>
          <div class="analogy-box">
            <strong>Alltagsanalogie:</strong> "Klatsche 3-mal in die Haende" – du zaehlst mit: 0, 1, 2 – bei 3 hoerst du auf. Genau das macht die for-Schleife.
          </div>
        </div>

        <div class="code-card">
          <h4>AMPEL MIT FUSSGANGERUEBERWEG</h4>
          <pre><code><span class="comment">// ===== Pin-Definitionen =====</span>
<span class="keyword">int</span> autoRot    = <span class="value">2</span>;   <span class="comment">// Auto-Ampel: Rote LED</span>
<span class="keyword">int</span> autoGelb   = <span class="value">3</span>;   <span class="comment">// Auto-Ampel: Gelbe LED</span>
<span class="keyword">int</span> autoGruen  = <span class="value">4</span>;   <span class="comment">// Auto-Ampel: Gruene LED</span>
<span class="keyword">int</span> fussRot    = <span class="value">5</span>;   <span class="comment">// Fussgaenger-Ampel: Rote LED</span>
<span class="keyword">int</span> fussGruen  = <span class="value">6</span>;   <span class="comment">// Fussgaenger-Ampel: Gruene LED</span>
<span class="keyword">int</span> taster     = <span class="value">7</span>;   <span class="comment">// Taster fuer Fussgaenger</span>

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="comment">// Alle LED-Pins als Ausgang konfigurieren</span>
  <span class="function">pinMode</span>(autoRot, OUTPUT);
  <span class="function">pinMode</span>(autoGelb, OUTPUT);
  <span class="function">pinMode</span>(autoGruen, OUTPUT);
  <span class="function">pinMode</span>(fussRot, OUTPUT);
  <span class="function">pinMode</span>(fussGruen, OUTPUT);

  <span class="comment">// Taster als Eingang mit internem Pull-Up-Widerstand</span>
  <span class="function">pinMode</span>(taster, INPUT_PULLUP);

  <span class="comment">// Startzustand: Auto Gruen, Fussgaenger Rot</span>
  <span class="function">digitalWrite</span>(autoGruen, HIGH);
  <span class="function">digitalWrite</span>(fussRot, HIGH);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="comment">// Pruefen, ob der Taster gedrueckt wurde</span>
  <span class="comment">// INPUT_PULLUP: LOW = gedrueckt, HIGH = nicht gedrueckt</span>
  <span class="keyword">if</span> (<span class="function">digitalRead</span>(taster) == LOW) {
    <span class="function">delay</span>(<span class="value">200</span>);  <span class="comment">// Entprellung: kurz warten</span>

    <span class="comment">// --- Phase 1: Auto von Gruen auf Rot ---</span>
    <span class="function">digitalWrite</span>(autoGruen, LOW);   <span class="comment">// Auto Gruen aus</span>
    <span class="function">digitalWrite</span>(autoGelb, HIGH);   <span class="comment">// Auto Gelb an</span>
    <span class="function">delay</span>(<span class="value">2000</span>);                     <span class="comment">// 2 Sekunden Gelb</span>
    <span class="function">digitalWrite</span>(autoGelb, LOW);    <span class="comment">// Auto Gelb aus</span>
    <span class="function">digitalWrite</span>(autoRot, HIGH);    <span class="comment">// Auto Rot an</span>
    <span class="function">delay</span>(<span class="value">1000</span>);                     <span class="comment">// 1 Sek. Raeumzeit</span>

    <span class="comment">// --- Phase 2: Fussgaenger Gruen ---</span>
    <span class="function">digitalWrite</span>(fussRot, LOW);     <span class="comment">// Fussg. Rot aus</span>
    <span class="function">digitalWrite</span>(fussGruen, HIGH);  <span class="comment">// Fussg. Gruen an</span>
    <span class="function">delay</span>(<span class="value">5000</span>);                     <span class="comment">// 5 Sekunden Gruen</span>

    <span class="comment">// --- Phase 3: Fussgaenger blinkt (Warnung) ---</span>
    <span class="keyword">for</span> (<span class="keyword">int</span> i = <span class="value">0</span>; i < <span class="value">3</span>; i++) {
      <span class="function">digitalWrite</span>(fussGruen, LOW);
      <span class="function">delay</span>(<span class="value">400</span>);
      <span class="function">digitalWrite</span>(fussGruen, HIGH);
      <span class="function">delay</span>(<span class="value">400</span>);
    }
    <span class="function">digitalWrite</span>(fussGruen, LOW);   <span class="comment">// Fussg. Gruen aus</span>
    <span class="function">digitalWrite</span>(fussRot, HIGH);    <span class="comment">// Fussg. Rot an</span>
    <span class="function">delay</span>(<span class="value">1000</span>);                     <span class="comment">// Kurze Pause</span>

    <span class="comment">// --- Phase 4: Auto von Rot auf Gruen ---</span>
    <span class="function">digitalWrite</span>(autoGelb, HIGH);   <span class="comment">// Rot-Gelb Phase</span>
    <span class="function">delay</span>(<span class="value">1000</span>);                     <span class="comment">// 1 Sekunde</span>
    <span class="function">digitalWrite</span>(autoRot, LOW);     <span class="comment">// Auto Rot aus</span>
    <span class="function">digitalWrite</span>(autoGelb, LOW);    <span class="comment">// Auto Gelb aus</span>
    <span class="function">digitalWrite</span>(autoGruen, HIGH);  <span class="comment">// Auto Gruen an</span>
  }
}</code></pre>
        </div>

        <div class="tip-box">
          <strong>Tipp zum Verständnis:</strong> Der Code läuft in <code>loop()</code> ständig im Kreis. Solange niemand den Taster drückt, passiert nichts – die Ampel bleibt auf Auto-Grün / Fußgänger-Rot. Erst der Tastendruck löst die gesamte Ampel-Sequenz aus.
        </div>
      `
    },
    example: {
      title: 'Schritt-für-Schritt: Aufbau auf dem Steckbrett',
      steps: [
        { label: 'Schritt 1: Auto-Ampel', html: 'Stecke die <strong>rote, gelbe und grüne LED</strong> nebeneinander ins Steckbrett. Verbinde die langen Beinchen (Anode, +) über je einen <strong>220-Ohm-Widerstand</strong> mit Pin 2, 3 und 4. Die kurzen Beinchen (Kathode, -) gehen alle auf die <strong>GND-Schiene</strong>.' },
        { label: 'Schritt 2: Fußgänger-Ampel', html: 'Stecke eine <strong>rote</strong> und eine <strong>grüne LED</strong> etwas weiter rechts ein (damit man Auto- und Fußgänger-Ampel unterscheiden kann). Verbinde sie über 220-Ohm-Widerstände mit Pin 5 und Pin 6. Kathoden wieder auf GND.' },
        { label: 'Schritt 3: Taster', html: 'Stecke den <strong>Taster</strong> über die Mittelrille des Steckbretts. Verbinde ein Beinchen mit <strong>Pin 7</strong>, das diagonal gegenüberliegende mit <strong>GND</strong>. Kein externer Widerstand nötig – <code>INPUT_PULLUP</code> übernimmt das!' },
        { label: 'Schritt 4: Testen', html: 'Code hochladen. Die Auto-Ampel sollte Grün leuchten, die Fußgänger-Ampel Rot. Drücke den Taster und beobachte den kompletten Ablauf. Zähle mit: Gelb 2s, Rot, Fußgänger-Grün 5s, Blinken, Rot-Gelb 1s, Grün.' }
      ]
    },
    exercises: [
      {
        type: 'ordering',
        question: 'Bringe den Ampel-Ablauf nach dem Tastendruck in die richtige Reihenfolge:',
        items: [
          'Auto-Ampel: Rot + Gelb gleichzeitig (1 Sekunde)',
          'Fußgänger-Ampel: Grün blinkt 3-mal',
          'Auto-Ampel: Gelb (2 Sekunden)',
          'Auto-Ampel: Grün (Normalzustand)',
          'Fußgänger-Ampel: Grün (5 Sekunden)',
          'Auto-Ampel: Rot / Fußgänger-Ampel: Rot → Grün'
        ],
        correctOrder: [2, 5, 4, 1, 0, 3]
      },
      {
        type: 'multiple-choice',
        question: 'An welchem Pin ist der Taster angeschlossen und wie wird er konfiguriert?',
        options: [
          'Pin 7, INPUT (mit externem Widerstand)',
          'Pin 7, INPUT_PULLUP (mit internem Widerstand)',
          'Pin 6, OUTPUT',
          'Pin A0, INPUT'
        ],
        correct: 1,
        explanation: 'Der Taster ist an Pin 7 mit INPUT_PULLUP. Der Arduino aktiviert einen internen Pull-Up-Widerstand, sodass kein externer Widerstand nötig ist. Der Pin liest HIGH wenn nicht gedrückt und LOW wenn gedrückt.'
      },
      {
        type: 'multiple-choice',
        question: 'Warum gibt es nach Auto-Rot eine kurze Pause, bevor Fußgänger-Grün wird?',
        options: [
          'Weil der Arduino so langsam ist',
          'Weil es besser aussieht',
          'Wegen der Räumzeit – Autos müssen die Kreuzung erst verlassen können',
          'Weil die LED sonst kaputt geht'
        ],
        correct: 2,
        explanation: 'Die Räumzeit ist ein Sicherheitsfeature. In der echten Welt sind vielleicht noch Autos auf der Kreuzung, die erst durchfahren müssen, bevor Fußgänger sicher gehen können.'
      }
    ]
  },

  // ===================== LEKTION 16 =====================
  {
    id: 16,
    title: 'Nachtabschaltung mit Lichtsensor',
    explanation: {
      html: `
        <h2>Nachtabschaltung mit Lichtsensor</h2>
        <p>An echten Ampeln beobachtest du das manchmal: Nachts blinken sie nur noch gelb oder gehen komplett aus. Warum? Weil nachts kaum Verkehr ist und die Ampel Strom sparen kann. Wir bauen genau das nach – mit einem <strong>LDR (Lichtsensor)</strong>!</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Denk an eine Straßenlaterne mit Dämmerungssensor. Tagsüber ist sie aus (hell genug). Wenn es dunkel wird, schaltet sie sich automatisch ein. Unsere Ampel macht es genau umgekehrt: Sie ist nur aktiv, wenn es dunkel genug ist (= normaler Betrieb im Dunkeln). Wenn es hell ist (tagsüber an einer ruhigen Straße), "schläft" sie.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Was ist ein LDR?</h3>
          <p>Ein <strong>LDR</strong> (Light Dependent Resistor = lichtabhängiger Widerstand) ändert seinen Widerstand je nach Helligkeit:</p>
          <table class="icon-table">
            <tr><th>Helligkeit</th><th>Widerstand</th><th>analogRead()-Wert</th></tr>
            <tr><td>Sehr hell (Sonne)</td><td>Niedrig (~100 Ohm)</td><td>Hoch (z.B. 800-1000)</td></tr>
            <tr><td>Raum mit Licht</td><td>Mittel (~1-10 kOhm)</td><td>Mittel (z.B. 400-700)</td></tr>
            <tr><td>Dunkel (Nacht)</td><td>Hoch (~100 kOhm+)</td><td>Niedrig (z.B. 50-200)</td></tr>
          </table>
          <p style="margin-top: 0.75rem;">Der LDR wird an <strong>Pin A0</strong> angeschlossen – einem analogen Eingang, der Werte von 0 bis 1023 messen kann.</p>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Schaltung: LDR als Spannungsteiler</h3>
          <p>Der LDR wird zusammen mit einem <strong>10-kOhm-Widerstand</strong> als Spannungsteiler geschaltet:</p>
          <ol class="step-list">
            <li><strong>5V</strong> → LDR → <strong>Pin A0</strong> → 10-kOhm-Widerstand → <strong>GND</strong></li>
            <li>Pin A0 sitzt genau <em>zwischen</em> LDR und Festwiderstand</li>
            <li>Je heller es ist, desto höher der Wert an A0 (hell = hoher Wert, dunkel = niedriger Wert)</li>
          </ol>
        </div>

        <div style="margin:1.5rem 0;text-align:center;">
          <h3>Breadboard-Aufbau: Ampel + LDR-Nachtabschaltung</h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" style="max-width:100%;height:auto;background:#f8f8f8;border:1px solid #ccc;border-radius:8px;">
            <!-- ===== BREADBOARD ===== -->
            <rect x="10" y="10" width="370" height="230" rx="6" fill="#e8e0d0" stroke="#999" stroke-width="1.5"/>
            <text x="195" y="8" text-anchor="middle" font-size="8" fill="#666">Breadboard (wird voll!)</text>

            <!-- Obere +Schiene (rot) -->
            <rect x="30" y="22" width="330" height="10" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="22" y="30" font-size="7" fill="#c00" font-weight="bold">+</text>
            <!-- Obere -Schiene (blau) = GND -->
            <rect x="30" y="38" width="330" height="10" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="22" y="46" font-size="7" fill="#00c" font-weight="bold">−</text>

            <!-- Reihen a-e -->
            <text x="22" y="72" font-size="6" fill="#666">a</text>
            <text x="22" y="84" font-size="6" fill="#666">b</text>
            <text x="22" y="96" font-size="6" fill="#666">c</text>
            <text x="22" y="108" font-size="6" fill="#666">d</text>
            <text x="22" y="120" font-size="6" fill="#666">e</text>

            <!-- Breadboard-Loecher a-e (32 Spalten) -->
            <g stroke="#777" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="0.1,7.8" fill="none">
              <line x1="34" y1="68" x2="344" y2="68"/>
              <line x1="34" y1="80" x2="344" y2="80"/>
              <line x1="34" y1="92" x2="344" y2="92"/>
              <line x1="34" y1="104" x2="344" y2="104"/>
              <line x1="34" y1="116" x2="344" y2="116"/>
            </g>

            <!-- Mittelrinne -->
            <rect x="30" y="124" width="330" height="8" rx="1" fill="#d0c8b8"/>

            <!-- Reihen f-j -->
            <text x="22" y="144" font-size="6" fill="#666">f</text>
            <text x="22" y="156" font-size="6" fill="#666">g</text>
            <text x="22" y="168" font-size="6" fill="#666">h</text>
            <text x="22" y="180" font-size="6" fill="#666">i</text>
            <text x="22" y="192" font-size="6" fill="#666">j</text>

            <!-- Breadboard-Loecher f-j (32 Spalten) -->
            <g stroke="#777" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="0.1,7.8" fill="none">
              <line x1="34" y1="140" x2="344" y2="140"/>
              <line x1="34" y1="152" x2="344" y2="152"/>
              <line x1="34" y1="164" x2="344" y2="164"/>
              <line x1="34" y1="176" x2="344" y2="176"/>
              <line x1="34" y1="188" x2="344" y2="188"/>
            </g>

            <!-- Untere +Schiene -->
            <rect x="30" y="206" width="330" height="10" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="22" y="214" font-size="7" fill="#c00" font-weight="bold">+</text>
            <!-- Untere -Schiene -->
            <rect x="30" y="222" width="330" height="10" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="22" y="230" font-size="7" fill="#00c" font-weight="bold">−</text>

            <!-- Spaltennummern -->
            <g font-size="5" fill="#888" text-anchor="middle">
              <text x="34" y="60">1</text><text x="44" y="60">2</text><text x="54" y="60">3</text><text x="64" y="60">4</text><text x="74" y="60">5</text><text x="84" y="60">6</text><text x="94" y="60">7</text><text x="104" y="60">8</text><text x="114" y="60">9</text><text x="124" y="60">10</text><text x="134" y="60">11</text><text x="144" y="60">12</text><text x="154" y="60">13</text><text x="164" y="60">14</text><text x="174" y="60">15</text><text x="184" y="60">16</text><text x="194" y="60">17</text><text x="204" y="60">18</text><text x="214" y="60">19</text><text x="224" y="60">20</text><text x="234" y="60">21</text><text x="244" y="60">22</text><text x="254" y="60">23</text><text x="264" y="60">24</text><text x="274" y="60">25</text><text x="284" y="60">26</text><text x="294" y="60">27</text><text x="304" y="60">28</text><text x="314" y="60">29</text><text x="324" y="60">30</text><text x="334" y="60">31</text><text x="344" y="60">32</text>
            </g>

            <!-- ===== BAUTEILE ===== -->

            <!-- === AUTO-AMPEL: Spalten 2-7 === -->
            <rect x="39" y="62" width="12" height="60" rx="2" fill="#fcc" opacity="0.3"/>
            <rect x="59" y="62" width="12" height="60" rx="2" fill="#ffc" opacity="0.3"/>
            <rect x="79" y="62" width="12" height="60" rx="2" fill="#cfc" opacity="0.3"/>

            <!-- LED rot Auto (Spalte 3) -->
            <polygon points="42,65 42,71 48,68" fill="#e00" stroke="#a00" stroke-width="0.5"/>
            <line x1="48" y1="68" x2="44" y2="80" stroke="#a00" stroke-width="1"/>
            <text x="44" y="62" text-anchor="middle" font-size="5" fill="#c00" font-weight="bold">R</text>
            <rect x="40" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="44" y="100" text-anchor="middle" font-size="4" fill="#654">220</text>
            <line x1="44" y1="80" x2="44" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <!-- LED gelb Auto (Spalte 5) -->
            <polygon points="62,65 62,71 68,68" fill="#ee0" stroke="#aa0" stroke-width="0.5"/>
            <line x1="68" y1="68" x2="64" y2="80" stroke="#aa0" stroke-width="1"/>
            <text x="64" y="62" text-anchor="middle" font-size="5" fill="#aa0" font-weight="bold">Ge</text>
            <rect x="60" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="64" y="100" text-anchor="middle" font-size="4" fill="#654">220</text>
            <line x1="64" y1="80" x2="64" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <!-- LED gruen Auto (Spalte 7) -->
            <polygon points="82,65 82,71 88,68" fill="#0c0" stroke="#090" stroke-width="0.5"/>
            <line x1="88" y1="68" x2="84" y2="80" stroke="#090" stroke-width="1"/>
            <text x="84" y="62" text-anchor="middle" font-size="5" fill="#090" font-weight="bold">Gr</text>
            <rect x="80" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="84" y="100" text-anchor="middle" font-size="4" fill="#654">220</text>
            <line x1="84" y1="80" x2="84" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <text x="64" y="125" text-anchor="middle" font-size="6" fill="#555" font-weight="bold">Auto-Ampel</text>

            <!-- === FUSSGAENGER-AMPEL: Spalten 10-13 === -->
            <rect x="119" y="62" width="12" height="60" rx="2" fill="#fcc" opacity="0.3"/>
            <rect x="139" y="62" width="12" height="60" rx="2" fill="#cfc" opacity="0.3"/>

            <!-- LED rot Fussgaenger (Spalte 10) -->
            <polygon points="122,65 122,71 128,68" fill="#e00" stroke="#a00" stroke-width="0.5"/>
            <line x1="128" y1="68" x2="124" y2="80" stroke="#a00" stroke-width="1"/>
            <text x="124" y="62" text-anchor="middle" font-size="5" fill="#c00" font-weight="bold">FR</text>
            <rect x="120" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="124" y="100" text-anchor="middle" font-size="4" fill="#654">220</text>
            <line x1="124" y1="80" x2="124" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <!-- LED gruen Fussgaenger (Spalte 12) -->
            <polygon points="142,65 142,71 148,68" fill="#0c0" stroke="#090" stroke-width="0.5"/>
            <line x1="148" y1="68" x2="144" y2="80" stroke="#090" stroke-width="1"/>
            <text x="144" y="62" text-anchor="middle" font-size="5" fill="#090" font-weight="bold">FG</text>
            <rect x="140" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="144" y="100" text-anchor="middle" font-size="4" fill="#654">220</text>
            <line x1="144" y1="80" x2="144" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <text x="134" y="125" text-anchor="middle" font-size="6" fill="#555" font-weight="bold">Fußg.-Ampel</text>

            <!-- === TASTER: Spalten 16-17 (ueber Mittelrinne) === -->
            <rect x="179" y="110" width="22" height="26" rx="3" fill="#888" stroke="#555" stroke-width="1"/>
            <circle cx="190" cy="123" r="6" fill="#aaa" stroke="#666" stroke-width="0.8"/>
            <text x="190" y="108" text-anchor="middle" font-size="5" fill="#555" font-weight="bold">Taster</text>
            <line x1="184" y1="116" x2="184" y2="110" stroke="#555" stroke-width="1"/>
            <line x1="196" y1="136" x2="196" y2="142" stroke="#555" stroke-width="1"/>

            <!-- === LDR + SPANNUNGSTEILER: Spalten 22-26 (NEU!) === -->
            <rect x="239" y="62" width="52" height="130" rx="3" fill="#ffe8cc" opacity="0.3" stroke="#f90" stroke-width="0.8" stroke-dasharray="3,2"/>
            <text x="265" y="58" text-anchor="middle" font-size="6" fill="#c60" font-weight="bold">LDR-Bereich (NEU)</text>

            <!-- LDR Symbol (Spalte 23-24, Reihe a-c) -->
            <circle cx="254" cy="74" r="8" fill="#ffe066" stroke="#c90" stroke-width="1"/>
            <text x="254" y="77" text-anchor="middle" font-size="6" fill="#864" font-weight="bold">LDR</text>
            <!-- LDR Beinchen: Spalte 23 Reihe d, Spalte 24 Reihe d -->
            <line x1="248" y1="82" x2="248" y2="104" stroke="#864" stroke-width="1"/>
            <line x1="260" y1="82" x2="260" y2="104" stroke="#864" stroke-width="1"/>

            <!-- Ein Bein LDR → obere +Schiene (5V) -->
            <line x1="248" y1="104" x2="248" y2="92" stroke="#864" stroke-width="0.8"/>
            <path d="M248,92 L248,32" stroke="#c00" stroke-width="1.2" stroke-dasharray="3,1"/>
            <text x="240" y="55" font-size="4" fill="#c00">→5V</text>

            <!-- Anderes Bein LDR → Pin A0 (Spalte 24) -->
            <!-- Am Knotenpunkt (Spalte 25): nach A0 und nach 10k-Widerstand -->
            <line x1="260" y1="104" x2="274" y2="104" stroke="#f90" stroke-width="1"/>

            <!-- 10kOhm Widerstand (Spalte 25-26, Reihe d-e) -->
            <rect x="270" y="96" width="8" height="20" rx="1.5" fill="#c0a060" stroke="#865" stroke-width="0.6"/>
            <text x="274" y="108" text-anchor="middle" font-size="3.5" fill="#fff" font-weight="bold">10k</text>
            <!-- 10k → obere -Schiene (GND) -->
            <line x1="274" y1="96" x2="274" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>
            <text x="280" y="55" font-size="4" fill="#333">→GND</text>

            <!-- Knotenpunkt A0 markieren -->
            <circle cx="264" cy="104" r="2.5" fill="#f90" stroke="#c60" stroke-width="0.5"/>
            <text x="264" y="118" text-anchor="middle" font-size="5" fill="#c60" font-weight="bold">→A0</text>

            <!-- ===== ARDUINO ===== -->
            <rect x="420" y="20" width="280" height="220" rx="8" fill="#2176AE" stroke="#1a5f8a" stroke-width="2"/>
            <text x="560" y="45" text-anchor="middle" font-size="14" fill="white" font-weight="bold">Arduino Uno</text>
            <rect x="540" y="15" width="50" height="12" rx="2" fill="#aaa" stroke="#888" stroke-width="1"/>
            <text x="565" y="23" text-anchor="middle" font-size="5" fill="#555">USB</text>

            <!-- Arduino Pins -->
            <g font-size="7" fill="white" font-weight="bold">
              <rect x="430" y="60" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="455" y="70" text-anchor="middle">Pin 2</text>
              <rect x="430" y="78" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="455" y="88" text-anchor="middle">Pin 3</text>
              <rect x="430" y="96" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="455" y="106" text-anchor="middle">Pin 4</text>
              <rect x="430" y="114" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="455" y="124" text-anchor="middle">Pin 5</text>
              <rect x="430" y="132" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="455" y="142" text-anchor="middle">Pin 6</text>
              <rect x="430" y="150" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="455" y="160" text-anchor="middle">Pin 7</text>
              <rect x="430" y="178" width="50" height="14" rx="2" fill="#1a5f8a"/>
              <text x="455" y="188" text-anchor="middle">GND</text>
              <rect x="560" y="178" width="50" height="14" rx="2" fill="#c00"/>
              <text x="585" y="188" text-anchor="middle">5V</text>
              <rect x="560" y="60" width="50" height="14" rx="2" fill="#f90"/>
              <text x="585" y="70" text-anchor="middle">A0</text>
            </g>

            <!-- ===== KABEL ===== -->
            <!-- Pin 2 → Auto Rot -->
            <path d="M430,67 C395,67 395,100 44,100" fill="none" stroke="#e44" stroke-width="1.5"/>
            <!-- Pin 3 → Auto Gelb -->
            <path d="M430,85 C400,85 400,100 64,100" fill="none" stroke="#cc0" stroke-width="1.5"/>
            <!-- Pin 4 → Auto Gruen -->
            <path d="M430,103 C405,103 405,100 84,100" fill="none" stroke="#0a0" stroke-width="1.5"/>
            <!-- Pin 5 → Fussg Rot -->
            <path d="M430,121 C408,121 408,100 124,100" fill="none" stroke="#e44" stroke-width="1.5" stroke-dasharray="4,2"/>
            <!-- Pin 6 → Fussg Gruen -->
            <path d="M430,139 C410,139 410,100 144,100" fill="none" stroke="#0a0" stroke-width="1.5" stroke-dasharray="4,2"/>
            <!-- Pin 7 → Taster -->
            <path d="M430,157 C412,157 412,116 184,116" fill="none" stroke="#66f" stroke-width="1.5"/>
            <!-- GND → obere -Schiene -->
            <path d="M430,185 C390,185 390,43 360,43" fill="none" stroke="#333" stroke-width="2"/>
            <!-- 5V → obere +Schiene -->
            <path d="M560,185 C540,210 400,27 360,27" fill="none" stroke="#c00" stroke-width="1.5"/>
            <text x="365" y="30" font-size="5" fill="#c00" font-weight="bold">5V</text>
            <text x="365" y="47" font-size="5" fill="#333" font-weight="bold">GND</text>

            <!-- A0 → LDR Knotenpunkt -->
            <path d="M560,67 C500,67 400,104 264,104" fill="none" stroke="#f90" stroke-width="1.5"/>
            <text x="400" y="80" font-size="5" fill="#c60" font-weight="bold">A0→LDR</text>

            <!-- Taster → GND -->
            <line x1="196" y1="142" x2="196" y2="222" stroke="#333" stroke-width="1"/>
            <line x1="196" y1="222" x2="340" y2="222" stroke="#333" stroke-width="0.8"/>
            <line x1="340" y1="222" x2="340" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <!-- ===== LEGENDE ===== -->
            <rect x="10" y="260" width="700" height="85" rx="6" fill="#f0f0f0" stroke="#ccc" stroke-width="1"/>
            <text x="20" y="278" font-size="9" fill="#333" font-weight="bold">Legende:</text>
            <line x1="20" y1="292" x2="45" y2="292" stroke="#e44" stroke-width="2"/><text x="50" y="295" font-size="7" fill="#555">Rote LED / 5V</text>
            <line x1="150" y1="292" x2="175" y2="292" stroke="#cc0" stroke-width="2"/><text x="180" y="295" font-size="7" fill="#555">Gelbe LED</text>
            <line x1="260" y1="292" x2="285" y2="292" stroke="#0a0" stroke-width="2"/><text x="290" y="295" font-size="7" fill="#555">Gruene LED</text>
            <line x1="380" y1="292" x2="405" y2="292" stroke="#333" stroke-width="2"/><text x="410" y="295" font-size="7" fill="#555">GND (schwarz)</text>
            <line x1="510" y1="292" x2="535" y2="292" stroke="#f90" stroke-width="2"/><text x="540" y="295" font-size="7" fill="#555">A0 / LDR-Signal</text>
            <line x1="20" y1="308" x2="45" y2="308" stroke="#66f" stroke-width="2"/><text x="50" y="311" font-size="7" fill="#555">Taster-Signal</text>
            <rect x="150" y="303" width="10" height="8" rx="1" fill="#e8d0a0" stroke="#986" stroke-width="0.5"/><text x="165" y="311" font-size="7" fill="#555">220Ohm</text>
            <rect x="250" y="303" width="10" height="8" rx="1" fill="#c0a060" stroke="#865" stroke-width="0.5"/><text x="265" y="311" font-size="7" fill="#555">10kOhm</text>
            <circle cx="365" cy="307" r="5" fill="#ffe066" stroke="#c90" stroke-width="0.5"/><text x="375" y="311" font-size="7" fill="#555">LDR (Lichtsensor)</text>
            <text x="20" y="330" font-size="7" fill="#999">Erweiterung gegenueber Lektion 15: LDR-Spannungsteiler (orange markiert) an A0 hinzugefuegt.</text>
            <text x="20" y="340" font-size="7" fill="#999">5V → LDR → A0 → 10kOhm → GND. Das Board wird eng, passt aber noch!</text>
          </svg>
        </div>

        <div class="tip-box">
          <strong>Tipp: Schwellenwert kalibrieren</strong><br>
          Bevor du den Schwellenwert festlegst, lies die Werte mit dem <strong>Serial Monitor</strong> aus:
          <ol style="margin-top: 0.5rem; margin-left: 1.25rem;">
            <li>Lade einen Sketch hoch, der <code>Serial.println(analogRead(A0))</code> ausgibt</li>
            <li>Öffne den Serial Monitor (Lupe in der IDE)</li>
            <li>Notiere den Wert bei normaler Raumbeleuchtung und bei Dunkelheit (Hand über den LDR)</li>
            <li>Wähle einen Schwellenwert dazwischen – z.B. <strong>300</strong> (unter 300 = dunkel)</li>
          </ol>
        </div>

        <hr class="section-divider">

        <h3>Das Konzept im Code</h3>
        <p>Die Idee ist einfach: In der <code>loop()</code> prüfen wir <strong>zuerst</strong>, ob es dunkel genug ist. Nur dann läuft die Ampel normal. Wenn es hell ist, sind alle LEDs aus.</p>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.25rem 0;">
          <div class="info-card" style="border-top: 3px solid #e74c3c;">
            <h3>Wenn hell (Wert > Schwelle)</h3>
            <p>Alle LEDs ausschalten. Die Ampel "schläft". Kein Ampelbetrieb nötig.</p>
          </div>
          <div class="info-card" style="border-top: 3px solid #2ecc71;">
            <h3>Wenn dunkel (Wert <= Schwelle)</h3>
            <p>Normaler Ampelbetrieb: Auto Grün, Fußgänger Rot. Taster reagiert wie gewohnt.</p>
          </div>
        </div>

        <div class="code-card">
          <h4>CODE-ERWEITERUNG: LDR-ABFRAGE IN DER LOOP()</h4>
          <pre><code><span class="keyword">int</span> SCHWELLE = <span class="value">300</span>;  <span class="comment">// Schwellenwert – anpassen!</span>

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="keyword">int</span> lichtWert = <span class="function">analogRead</span>(A0);  <span class="comment">// LDR auslesen</span>

  <span class="keyword">if</span> (lichtWert <= SCHWELLE) {
    <span class="comment">// --- DUNKEL: Ampel ist aktiv ---</span>
    <span class="comment">// Normalzustand herstellen</span>
    <span class="function">digitalWrite</span>(autoGruen, HIGH);
    <span class="function">digitalWrite</span>(fussRot, HIGH);

    <span class="comment">// Auf Tastendruck pruefen</span>
    <span class="keyword">if</span> (<span class="function">digitalRead</span>(taster) == LOW) {
      <span class="comment">// ... Ampel-Sequenz wie in Lektion 13 ...</span>
    }
  } <span class="keyword">else</span> {
    <span class="comment">// --- HELL: Ampel schlaeft ---</span>
    <span class="function">digitalWrite</span>(autoRot, LOW);
    <span class="function">digitalWrite</span>(autoGelb, LOW);
    <span class="function">digitalWrite</span>(autoGruen, LOW);
    <span class="function">digitalWrite</span>(fussRot, LOW);
    <span class="function">digitalWrite</span>(fussGruen, LOW);
  }
}</code></pre>
        </div>

        <div class="warning-box">
          <strong>Achtung:</strong> Die LDR-Werte sind bei jedem Aufbau etwas anders! Kalibriere den Schwellenwert immer mit dem Serial Monitor an deinem eigenen Aufbau. Was bei deinem Nachbarn 300 ist, kann bei dir 200 oder 400 sein.
        </div>
      `
    },
    example: {
      title: 'Schritt-für-Schritt: LDR anschließen & kalibrieren',
      steps: [
        { label: 'LDR anschließen', html: 'Stecke den LDR ins Steckbrett. Ein Beinchen kommt an <strong>5V</strong>, das andere an <strong>Pin A0</strong>. Verbinde von Pin A0 aus einen <strong>10-kOhm-Widerstand</strong> nach <strong>GND</strong>. Fertig ist der Spannungsteiler!' },
        { label: 'Kalibrierungs-Sketch', html: '<pre><code>void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int wert = analogRead(A0);\n  Serial.print("LDR-Wert: ");\n  Serial.println(wert);\n  delay(500);\n}</code></pre>' },
        { label: 'Werte ablesen', html: 'Öffne den Serial Monitor. Du siehst z.B.: <strong>Raumlicht: 750</strong> und <strong>Hand drüber (dunkel): 80</strong>. Ein guter Schwellenwert wäre dann <strong>300</strong> – zwischen den beiden Werten. Unter 300 = dunkel = Ampel aktiv.' },
        { label: 'Testen', html: 'Baue den Schwellenwert in deinen Ampel-Code ein. Halte die Hand über den LDR → Ampel geht an (dunkel). Nimm die Hand weg → alle LEDs aus (hell). Klappt? Perfekt!' }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was passiert bei analogRead(A0), wenn es sehr dunkel ist?',
        options: [
          'Der Wert ist sehr niedrig (z.B. 50)',
          'Der Wert ist sehr hoch (z.B. 800)',
          'Der Wert ist immer genau 512',
          'Es kommt eine Fehlermeldung'
        ],
        correct: 0,
        explanation: 'Bei Dunkelheit hat der LDR einen hohen Widerstand. In unserer Schaltung (5V → LDR → A0 → 10k → GND) fällt dann fast die gesamte Spannung am LDR ab und am Messpunkt A0 kommt nur wenig an – der Wert wird niedrig (z.B. 50-100).'
      },
      {
        type: 'matching',
        question: 'Ordne die Begriffe den richtigen Beschreibungen zu:',
        pairs: [
          { left: 'LDR', right: 'Widerstand, der auf Licht reagiert' },
          { left: 'analogRead(A0)', right: 'Liest den Sensorwert (0-1023)' },
          { left: 'Schwellenwert', right: 'Grenze zwischen hell und dunkel' },
          { left: 'Serial Monitor', right: 'Zeigt Sensorwerte zur Kalibrierung' }
        ]
      },
      {
        type: 'multiple-choice',
        question: 'Warum muss der Schwellenwert für jeden Aufbau individuell kalibriert werden?',
        options: [
          'Weil jeder Arduino eine andere Spannung hat',
          'Weil LDR-Bauteile leicht unterschiedlich sind und die Raumhelligkeit variiert',
          'Weil der Serial Monitor nicht genau ist',
          'Weil der Code jedes Mal anders kompiliert wird'
        ],
        correct: 1,
        explanation: 'Jeder LDR hat leichte Fertigungsunterschiede, und die Beleuchtung im Raum ist nie exakt gleich. Deshalb misst man die konkreten Werte mit dem Serial Monitor und passt den Schwellenwert an die eigene Situation an.'
      }
    ]
  },

  // ===================== LEKTION 17 =====================
  {
    id: 17,
    title: 'Prüfungsschaltung komplett',
    explanation: {
      html: `
        <h2>Prüfungsschaltung komplett – Das große Finale!</h2>
        <p>Das hier ist der Moment, auf den alles hingearbeitet hat. Du kombinierst <strong>alles</strong>, was du in den vorherigen Lektionen gelernt hast, zu einer vollständigen Prüfungsschaltung: <strong>Auto-Ampel + Fußgänger-Ampel + Taster + LDR-Nachtabschaltung</strong>.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Stell dir vor, du baust ein Modellhaus. Erst hast du einzelne Wände geübt (LEDs), dann Türen mit Klinken (Taster), dann Fenster mit Lichtsensoren (LDR). Jetzt baust du das ganze Haus zusammen. Jedes Teil kennst du schon – jetzt muss alles zusammenpassen!
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Komplette Bauteilliste</h3>
          <table class="icon-table">
            <tr><th>Anzahl</th><th>Bauteil</th><th>Wozu?</th></tr>
            <tr><td>1x</td><td>Arduino Uno</td><td>Steuerung</td></tr>
            <tr><td>1x</td><td>Steckbrett (Breadboard)</td><td>Aufbau ohne Löten</td></tr>
            <tr><td>2x</td><td>Rote LED</td><td>Auto Rot + Fußgänger Rot</td></tr>
            <tr><td>1x</td><td>Gelbe LED</td><td>Auto Gelb</td></tr>
            <tr><td>2x</td><td>Grüne LED</td><td>Auto Grün + Fußgänger Grün</td></tr>
            <tr><td>5x</td><td>220-Ohm-Widerstand</td><td>Vorwiderstände für LEDs</td></tr>
            <tr><td>1x</td><td>Taster</td><td>Fußgänger-Anforderung</td></tr>
            <tr><td>1x</td><td>LDR (Fotowiderstand)</td><td>Lichtsensor für Nachtabschaltung</td></tr>
            <tr><td>1x</td><td>10-kOhm-Widerstand</td><td>Spannungsteiler für LDR</td></tr>
            <tr><td>~15x</td><td>Verbindungskabel</td><td>Alles verbinden</td></tr>
          </table>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Kompletter Schaltplan (Pin für Pin)</h3>
          <table class="icon-table">
            <tr><th>Arduino-Pin</th><th>Verbindung</th><th>Bauteil</th></tr>
            <tr><td><strong>Pin 2</strong></td><td>→ 220 Ohm → Anode (+)</td><td>Rote LED (Auto)</td></tr>
            <tr><td><strong>Pin 3</strong></td><td>→ 220 Ohm → Anode (+)</td><td>Gelbe LED (Auto)</td></tr>
            <tr><td><strong>Pin 4</strong></td><td>→ 220 Ohm → Anode (+)</td><td>Grüne LED (Auto)</td></tr>
            <tr><td><strong>Pin 5</strong></td><td>→ 220 Ohm → Anode (+)</td><td>Rote LED (Fußgänger)</td></tr>
            <tr><td><strong>Pin 6</strong></td><td>→ 220 Ohm → Anode (+)</td><td>Grüne LED (Fußgänger)</td></tr>
            <tr><td><strong>Pin 7</strong></td><td>→ Taster → GND</td><td>Taster (INPUT_PULLUP)</td></tr>
            <tr><td><strong>Pin A0</strong></td><td>→ LDR → 5V / → 10 kOhm → GND</td><td>Lichtsensor (Spannungsteiler)</td></tr>
            <tr><td><strong>GND</strong></td><td>→ alle Kathoden (-) der LEDs</td><td>Gemeinsame Masse</td></tr>
            <tr><td><strong>5V</strong></td><td>→ LDR (ein Beinchen)</td><td>Stromversorgung LDR</td></tr>
          </table>
        </div>

        <div style="margin:1.5rem 0;text-align:center;">
          <h3>Breadboard-Aufbau: Pruefungsschaltung komplett</h3>
          <p style="font-size:0.85rem;color:#666;margin-bottom:0.5rem;">Alle Bauteile auf einen Blick – sauber beschriftet fuer die Pruefung</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 500" style="max-width:100%;height:auto;background:#f8f8f8;border:1px solid #ccc;border-radius:8px;">
            <!-- ===== BREADBOARD ===== -->
            <rect x="10" y="10" width="370" height="230" rx="6" fill="#e8e0d0" stroke="#999" stroke-width="1.5"/>
            <text x="195" y="8" text-anchor="middle" font-size="8" fill="#444" font-weight="bold">Pruefungs-Breadboard</text>

            <!-- Obere +Schiene (rot, 5V) -->
            <rect x="30" y="22" width="330" height="10" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="22" y="30" font-size="7" fill="#c00" font-weight="bold">+</text>
            <text x="365" y="30" font-size="5" fill="#c00" font-weight="bold">5V</text>
            <!-- Obere -Schiene (blau, GND) -->
            <rect x="30" y="38" width="330" height="10" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="22" y="46" font-size="7" fill="#00c" font-weight="bold">−</text>
            <text x="365" y="46" font-size="5" fill="#00c" font-weight="bold">GND</text>

            <!-- Reihen a-e -->
            <text x="22" y="72" font-size="6" fill="#666">a</text>
            <text x="22" y="84" font-size="6" fill="#666">b</text>
            <text x="22" y="96" font-size="6" fill="#666">c</text>
            <text x="22" y="108" font-size="6" fill="#666">d</text>
            <text x="22" y="120" font-size="6" fill="#666">e</text>

            <!-- Breadboard-Loecher a-e (32 Spalten) -->
            <g stroke="#777" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="0.1,7.8" fill="none">
              <line x1="34" y1="68" x2="344" y2="68"/>
              <line x1="34" y1="80" x2="344" y2="80"/>
              <line x1="34" y1="92" x2="344" y2="92"/>
              <line x1="34" y1="104" x2="344" y2="104"/>
              <line x1="34" y1="116" x2="344" y2="116"/>
            </g>

            <!-- Mittelrinne -->
            <rect x="30" y="124" width="330" height="8" rx="1" fill="#d0c8b8"/>

            <!-- Reihen f-j -->
            <text x="22" y="144" font-size="6" fill="#666">f</text>
            <text x="22" y="156" font-size="6" fill="#666">g</text>
            <text x="22" y="168" font-size="6" fill="#666">h</text>
            <text x="22" y="180" font-size="6" fill="#666">i</text>
            <text x="22" y="192" font-size="6" fill="#666">j</text>

            <!-- Breadboard-Loecher f-j (32 Spalten) -->
            <g stroke="#777" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="0.1,7.8" fill="none">
              <line x1="34" y1="140" x2="344" y2="140"/>
              <line x1="34" y1="152" x2="344" y2="152"/>
              <line x1="34" y1="164" x2="344" y2="164"/>
              <line x1="34" y1="176" x2="344" y2="176"/>
              <line x1="34" y1="188" x2="344" y2="188"/>
            </g>

            <!-- Untere +Schiene -->
            <rect x="30" y="206" width="330" height="10" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="22" y="214" font-size="7" fill="#c00" font-weight="bold">+</text>
            <!-- Untere -Schiene -->
            <rect x="30" y="222" width="330" height="10" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="22" y="230" font-size="7" fill="#00c" font-weight="bold">−</text>

            <!-- Spaltennummern -->
            <g font-size="5" fill="#888" text-anchor="middle">
              <text x="34" y="60">1</text><text x="44" y="60">2</text><text x="54" y="60">3</text><text x="64" y="60">4</text><text x="74" y="60">5</text><text x="84" y="60">6</text><text x="94" y="60">7</text><text x="104" y="60">8</text><text x="114" y="60">9</text><text x="124" y="60">10</text><text x="134" y="60">11</text><text x="144" y="60">12</text><text x="154" y="60">13</text><text x="164" y="60">14</text><text x="174" y="60">15</text><text x="184" y="60">16</text><text x="194" y="60">17</text><text x="204" y="60">18</text><text x="214" y="60">19</text><text x="224" y="60">20</text><text x="234" y="60">21</text><text x="244" y="60">22</text><text x="254" y="60">23</text><text x="264" y="60">24</text><text x="274" y="60">25</text><text x="284" y="60">26</text><text x="294" y="60">27</text><text x="304" y="60">28</text><text x="314" y="60">29</text><text x="324" y="60">30</text><text x="334" y="60">31</text><text x="344" y="60">32</text>
            </g>

            <!-- ============================== -->
            <!-- BEREICH 1: AUTO-AMPEL (Sp 2-7) -->
            <!-- ============================== -->
            <rect x="38" y="56" width="54" height="74" rx="3" fill="none" stroke="#e44" stroke-width="0.8" stroke-dasharray="3,2"/>
            <text x="64" y="55" text-anchor="middle" font-size="6" fill="#c44" font-weight="bold">AUTO-AMPEL</text>

            <!-- Spalten-Markierungen -->
            <rect x="39" y="62" width="12" height="60" rx="2" fill="#fcc" opacity="0.25"/>
            <rect x="59" y="62" width="12" height="60" rx="2" fill="#ffc" opacity="0.25"/>
            <rect x="79" y="62" width="12" height="60" rx="2" fill="#cfc" opacity="0.25"/>

            <!-- LED rot Auto (Sp 3): Dreieck Anode→Kathode, Kathode nach oben zu GND -->
            <polygon points="42,65 42,71 48,68" fill="#e00" stroke="#a00" stroke-width="0.5"/>
            <line x1="48" y1="68" x2="44" y2="80" stroke="#a00" stroke-width="1"/>
            <text x="44" y="62" text-anchor="middle" font-size="4.5" fill="#c00" font-weight="bold">ROT</text>
            <!-- 220R Widerstand (Sp 3, Reihe c-d) -->
            <rect x="40" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="44" y="100" text-anchor="middle" font-size="3.5" fill="#654">220R</text>
            <!-- Kathode → obere GND-Schiene -->
            <line x1="44" y1="80" x2="44" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <!-- LED gelb Auto (Sp 5) -->
            <polygon points="62,65 62,71 68,68" fill="#ee0" stroke="#aa0" stroke-width="0.5"/>
            <line x1="68" y1="68" x2="64" y2="80" stroke="#aa0" stroke-width="1"/>
            <text x="64" y="62" text-anchor="middle" font-size="4.5" fill="#aa0" font-weight="bold">GELB</text>
            <rect x="60" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="64" y="100" text-anchor="middle" font-size="3.5" fill="#654">220R</text>
            <line x1="64" y1="80" x2="64" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <!-- LED gruen Auto (Sp 7) -->
            <polygon points="82,65 82,71 88,68" fill="#0c0" stroke="#090" stroke-width="0.5"/>
            <line x1="88" y1="68" x2="84" y2="80" stroke="#090" stroke-width="1"/>
            <text x="84" y="62" text-anchor="middle" font-size="4.5" fill="#090" font-weight="bold">GRUEN</text>
            <rect x="80" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="84" y="100" text-anchor="middle" font-size="3.5" fill="#654">220R</text>
            <line x1="84" y1="80" x2="84" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <!-- Pin-Labels an den Widerstaenden -->
            <text x="44" y="114" text-anchor="middle" font-size="4" fill="#c00">Pin2</text>
            <text x="64" y="114" text-anchor="middle" font-size="4" fill="#aa0">Pin3</text>
            <text x="84" y="114" text-anchor="middle" font-size="4" fill="#090">Pin4</text>

            <!-- ====================================== -->
            <!-- BEREICH 2: FUSSGAENGER-AMPEL (Sp 10-13) -->
            <!-- ====================================== -->
            <rect x="118" y="56" width="34" height="74" rx="3" fill="none" stroke="#66c" stroke-width="0.8" stroke-dasharray="3,2"/>
            <text x="134" y="55" text-anchor="middle" font-size="5.5" fill="#44a" font-weight="bold">FUSSG.</text>

            <rect x="119" y="62" width="12" height="60" rx="2" fill="#fcc" opacity="0.25"/>
            <rect x="139" y="62" width="12" height="60" rx="2" fill="#cfc" opacity="0.25"/>

            <!-- LED rot Fussgaenger (Sp 10) -->
            <polygon points="122,65 122,71 128,68" fill="#e00" stroke="#a00" stroke-width="0.5"/>
            <line x1="128" y1="68" x2="124" y2="80" stroke="#a00" stroke-width="1"/>
            <text x="124" y="62" text-anchor="middle" font-size="4.5" fill="#c00" font-weight="bold">F-ROT</text>
            <rect x="120" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="124" y="100" text-anchor="middle" font-size="3.5" fill="#654">220R</text>
            <line x1="124" y1="80" x2="124" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>
            <text x="124" y="114" text-anchor="middle" font-size="4" fill="#c00">Pin5</text>

            <!-- LED gruen Fussgaenger (Sp 12) -->
            <polygon points="142,65 142,71 148,68" fill="#0c0" stroke="#090" stroke-width="0.5"/>
            <line x1="148" y1="68" x2="144" y2="80" stroke="#090" stroke-width="1"/>
            <text x="144" y="62" text-anchor="middle" font-size="4.5" fill="#090" font-weight="bold">F-GR</text>
            <rect x="140" y="90" width="8" height="16" rx="1.5" fill="#e8d0a0" stroke="#986" stroke-width="0.6"/>
            <text x="144" y="100" text-anchor="middle" font-size="3.5" fill="#654">220R</text>
            <line x1="144" y1="80" x2="144" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>
            <text x="144" y="114" text-anchor="middle" font-size="4" fill="#090">Pin6</text>

            <!-- =============================== -->
            <!-- BEREICH 3: TASTER (Sp 16-17) -->
            <!-- =============================== -->
            <rect x="175" y="100" width="30" height="48" rx="3" fill="none" stroke="#66f" stroke-width="0.8" stroke-dasharray="3,2"/>
            <text x="190" y="98" text-anchor="middle" font-size="5.5" fill="#44c" font-weight="bold">TASTER</text>

            <rect x="179" y="110" width="22" height="26" rx="3" fill="#888" stroke="#555" stroke-width="1"/>
            <circle cx="190" cy="123" r="6" fill="#aaa" stroke="#666" stroke-width="0.8"/>
            <text x="190" y="155" text-anchor="middle" font-size="4" fill="#44c">Pin7 + GND</text>
            <line x1="184" y1="116" x2="184" y2="110" stroke="#555" stroke-width="1"/>
            <line x1="196" y1="136" x2="196" y2="142" stroke="#555" stroke-width="1"/>

            <!-- =========================================== -->
            <!-- BEREICH 4: LDR + SPANNUNGSTEILER (Sp 22-26) -->
            <!-- =========================================== -->
            <rect x="237" y="56" width="56" height="74" rx="3" fill="none" stroke="#f90" stroke-width="1" stroke-dasharray="3,2"/>
            <text x="265" y="55" text-anchor="middle" font-size="5.5" fill="#c60" font-weight="bold">LDR-SENSOR</text>

            <!-- LDR Symbol (Sp 23-24) -->
            <circle cx="254" cy="74" r="9" fill="#ffe066" stroke="#c90" stroke-width="1.2"/>
            <text x="254" y="72" text-anchor="middle" font-size="5" fill="#864" font-weight="bold">LDR</text>
            <text x="254" y="78" text-anchor="middle" font-size="3.5" fill="#864">(Licht)</text>
            <!-- Sonnenstrahlen-Symbol -->
            <line x1="244" y1="65" x2="240" y2="61" stroke="#c90" stroke-width="0.6"/>
            <line x1="254" y1="63" x2="254" y2="58" stroke="#c90" stroke-width="0.6"/>
            <line x1="264" y1="65" x2="268" y2="61" stroke="#c90" stroke-width="0.6"/>

            <!-- LDR Beinchen -->
            <line x1="248" y1="83" x2="248" y2="104" stroke="#864" stroke-width="1"/>
            <line x1="260" y1="83" x2="260" y2="104" stroke="#864" stroke-width="1"/>

            <!-- Bein 1 → obere +Schiene (5V) -->
            <path d="M248,92 L248,32" stroke="#c00" stroke-width="1.2" stroke-dasharray="3,1"/>
            <text x="240" y="89" font-size="3.5" fill="#c00" font-weight="bold">→5V</text>

            <!-- Knotenpunkt A0 -->
            <line x1="260" y1="104" x2="274" y2="104" stroke="#f90" stroke-width="1"/>
            <circle cx="264" cy="104" r="2.5" fill="#f90" stroke="#c60" stroke-width="0.5"/>

            <!-- 10kOhm Widerstand (Sp 25-26) -->
            <rect x="270" y="94" width="8" height="22" rx="1.5" fill="#c0a060" stroke="#865" stroke-width="0.6"/>
            <text x="274" y="106" text-anchor="middle" font-size="3.5" fill="#fff" font-weight="bold">10k</text>
            <text x="274" y="112" text-anchor="middle" font-size="3" fill="#fff">Ohm</text>
            <!-- 10k → obere GND-Schiene -->
            <line x1="274" y1="94" x2="274" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>
            <text x="282" y="88" font-size="3.5" fill="#333" font-weight="bold">→GND</text>
            <text x="264" y="120" text-anchor="middle" font-size="4.5" fill="#c60" font-weight="bold">→Pin A0</text>

            <!-- ===== ARDUINO ===== -->
            <rect x="420" y="20" width="280" height="220" rx="8" fill="#2176AE" stroke="#1a5f8a" stroke-width="2"/>
            <text x="560" y="42" text-anchor="middle" font-size="13" fill="white" font-weight="bold">Arduino Uno</text>
            <text x="560" y="53" text-anchor="middle" font-size="7" fill="#aad" font-style="italic">Pruefungsschaltung</text>
            <rect x="540" y="15" width="50" height="12" rx="2" fill="#aaa" stroke="#888" stroke-width="1"/>
            <text x="565" y="23" text-anchor="middle" font-size="5" fill="#555">USB</text>

            <!-- Arduino Pins mit ausfuehrlichen Labels -->
            <g font-size="6.5" fill="white" font-weight="bold">
              <rect x="430" y="62" width="55" height="13" rx="2" fill="#1a5f8a"/>
              <text x="457" y="72" text-anchor="middle">Pin 2</text>
              <text x="500" y="72" font-size="5" fill="#faa" font-weight="normal">Auto Rot</text>

              <rect x="430" y="79" width="55" height="13" rx="2" fill="#1a5f8a"/>
              <text x="457" y="89" text-anchor="middle">Pin 3</text>
              <text x="500" y="89" font-size="5" fill="#ff8" font-weight="normal">Auto Gelb</text>

              <rect x="430" y="96" width="55" height="13" rx="2" fill="#1a5f8a"/>
              <text x="457" y="106" text-anchor="middle">Pin 4</text>
              <text x="500" y="106" font-size="5" fill="#afa" font-weight="normal">Auto Gruen</text>

              <rect x="430" y="113" width="55" height="13" rx="2" fill="#1a5f8a"/>
              <text x="457" y="123" text-anchor="middle">Pin 5</text>
              <text x="500" y="123" font-size="5" fill="#faa" font-weight="normal">Fussg. Rot</text>

              <rect x="430" y="130" width="55" height="13" rx="2" fill="#1a5f8a"/>
              <text x="457" y="140" text-anchor="middle">Pin 6</text>
              <text x="500" y="140" font-size="5" fill="#afa" font-weight="normal">Fussg. Gruen</text>

              <rect x="430" y="147" width="55" height="13" rx="2" fill="#1a5f8a"/>
              <text x="457" y="157" text-anchor="middle">Pin 7</text>
              <text x="500" y="157" font-size="5" fill="#aaf" font-weight="normal">Taster</text>

              <rect x="430" y="175" width="55" height="13" rx="2" fill="#1a5f8a"/>
              <text x="457" y="185" text-anchor="middle">GND</text>
              <text x="500" y="185" font-size="5" fill="#ccc" font-weight="normal">Masse</text>

              <rect x="570" y="175" width="55" height="13" rx="2" fill="#c00"/>
              <text x="597" y="185" text-anchor="middle">5V</text>
              <text x="640" y="185" font-size="5" fill="#faa" font-weight="normal">Strom</text>

              <rect x="570" y="62" width="55" height="13" rx="2" fill="#f90"/>
              <text x="597" y="72" text-anchor="middle">A0</text>
              <text x="640" y="72" font-size="5" fill="#fc6" font-weight="normal">LDR-Wert</text>
            </g>

            <!-- ===== KABEL (farbcodiert) ===== -->
            <!-- Pin 2 → Auto Rot (Sp 3, Reihe e) -->
            <path d="M430,69 C395,69 395,100 44,100" fill="none" stroke="#e44" stroke-width="1.5"/>
            <!-- Pin 3 → Auto Gelb (Sp 5, Reihe e) -->
            <path d="M430,86 C400,86 400,100 64,100" fill="none" stroke="#cc0" stroke-width="1.5"/>
            <!-- Pin 4 → Auto Gruen (Sp 7, Reihe e) -->
            <path d="M430,103 C405,103 405,100 84,100" fill="none" stroke="#0a0" stroke-width="1.5"/>
            <!-- Pin 5 → Fussg. Rot (Sp 10, Reihe e) -->
            <path d="M430,120 C408,120 408,100 124,100" fill="none" stroke="#e44" stroke-width="1.5" stroke-dasharray="4,2"/>
            <!-- Pin 6 → Fussg. Gruen (Sp 12, Reihe e) -->
            <path d="M430,137 C410,137 410,100 144,100" fill="none" stroke="#0a0" stroke-width="1.5" stroke-dasharray="4,2"/>
            <!-- Pin 7 → Taster (Sp 16, Reihe e) -->
            <path d="M430,154 C412,154 412,116 184,116" fill="none" stroke="#66f" stroke-width="1.5"/>
            <!-- GND → obere -Schiene -->
            <path d="M430,182 C390,182 390,43 360,43" fill="none" stroke="#333" stroke-width="2"/>
            <!-- 5V → obere +Schiene -->
            <path d="M570,182 C550,210 410,27 360,27" fill="none" stroke="#c00" stroke-width="1.5"/>
            <!-- A0 → LDR Knotenpunkt -->
            <path d="M570,69 C510,69 410,104 264,104" fill="none" stroke="#f90" stroke-width="1.5"/>
            <!-- Taster → GND ueber untere Schiene -->
            <line x1="196" y1="142" x2="196" y2="222" stroke="#333" stroke-width="1"/>
            <line x1="196" y1="222" x2="340" y2="222" stroke="#333" stroke-width="0.8"/>
            <line x1="340" y1="222" x2="340" y2="48" stroke="#333" stroke-width="0.8" stroke-dasharray="2,1"/>

            <!-- Schienen-Labels -->
            <text x="365" y="30" font-size="5" fill="#c00" font-weight="bold">5V</text>
            <text x="365" y="46" font-size="5" fill="#00c" font-weight="bold">GND</text>

            <!-- ===== LEGENDE ===== -->
            <rect x="10" y="260" width="700" height="100" rx="6" fill="#f0f0f0" stroke="#ccc" stroke-width="1"/>
            <text x="20" y="278" font-size="9" fill="#333" font-weight="bold">Legende – Pruefungsschaltung komplett:</text>

            <!-- Zeile 1: Kabel-Farben -->
            <line x1="20" y1="294" x2="45" y2="294" stroke="#c00" stroke-width="2.5"/><text x="50" y="297" font-size="7" fill="#555">5V (rot)</text>
            <line x1="120" y1="294" x2="145" y2="294" stroke="#333" stroke-width="2.5"/><text x="150" y="297" font-size="7" fill="#555">GND (schwarz)</text>
            <line x1="240" y1="294" x2="265" y2="294" stroke="#e44" stroke-width="2"/><text x="270" y="297" font-size="7" fill="#555">LED-Rot-Signal</text>
            <line x1="370" y1="294" x2="395" y2="294" stroke="#cc0" stroke-width="2"/><text x="400" y="297" font-size="7" fill="#555">LED-Gelb-Signal</text>
            <line x1="500" y1="294" x2="525" y2="294" stroke="#0a0" stroke-width="2"/><text x="530" y="297" font-size="7" fill="#555">LED-Gruen-Signal</text>

            <!-- Zeile 2: Weitere Symbole -->
            <line x1="20" y1="312" x2="45" y2="312" stroke="#66f" stroke-width="2"/><text x="50" y="315" font-size="7" fill="#555">Taster-Signal (Pin 7)</text>
            <line x1="190" y1="312" x2="215" y2="312" stroke="#f90" stroke-width="2"/><text x="220" y="315" font-size="7" fill="#555">A0 / LDR-Signal</text>
            <rect x="360" y="307" width="12" height="8" rx="1" fill="#e8d0a0" stroke="#986" stroke-width="0.5"/><text x="377" y="315" font-size="7" fill="#555">220Ohm (5x fuer LEDs)</text>
            <rect x="530" y="307" width="12" height="8" rx="1" fill="#c0a060" stroke="#865" stroke-width="0.5"/><text x="547" y="315" font-size="7" fill="#555">10kOhm (1x fuer LDR)</text>

            <!-- Zeile 3: Zusammenfassung -->
            <text x="20" y="335" font-size="7" fill="#444" font-weight="bold">Bauteile: 5 LEDs + 5x 220Ohm + 1 Taster + 1 LDR + 1x 10kOhm = 6 Widerstaende total</text>
            <text x="20" y="348" font-size="7" fill="#999">Alle LED-Kathoden (-) gehen zur oberen blauen GND-Schiene. Taster zwischen Pin 7 und GND (INPUT_PULLUP).</text>
            <text x="20" y="358" font-size="7" fill="#999">LDR-Spannungsteiler: 5V → LDR → A0 → 10kOhm → GND. Schwellenwert mit Serial Monitor kalibrieren!</text>
          </svg>
        </div>

        <div class="tip-box">
          <strong>Kabel-Farben nutzen!</strong> Verwende wenn möglich verschiedene Farben:
          <ul style="margin-top: 0.5rem; margin-left: 1.25rem;">
            <li><strong>Rot</strong> = 5V (Stromversorgung)</li>
            <li><strong>Schwarz</strong> = GND (Masse)</li>
            <li><strong>Andere Farben</strong> = Signalleitungen (z.B. Grün für grüne LED usw.)</li>
          </ul>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Ablauf der Prüfungsschaltung</h3>
          <p>Die Gesamtlogik auf einen Blick:</p>
          <ol class="step-list">
            <li><strong>LDR prüfen:</strong> Ist es dunkel genug? (analogRead(A0) <= SCHWELLE)</li>
            <li><strong>Wenn HELL:</strong> Alle LEDs aus → Ampel "schläft" → zurück zu Schritt 1</li>
            <li><strong>Wenn DUNKEL:</strong> Normalzustand → Auto Grün, Fußgänger Rot</li>
            <li><strong>Taster prüfen:</strong> Wurde gedrückt? (digitalRead(7) == LOW)</li>
            <li><strong>Wenn NICHT gedrückt:</strong> Zurück zu Schritt 1</li>
            <li><strong>Wenn GEDRÜCKT:</strong> Ampel-Sequenz starten:
              <ul>
                <li>Auto: Grün → Gelb (2s) → Rot</li>
                <li>Räumzeit (1s)</li>
                <li>Fußgänger: Rot → Grün (5s) → Blinken (3x) → Rot</li>
                <li>Auto: Rot-Gelb (1s) → Grün</li>
              </ul>
            </li>
            <li><strong>Zurück zu Schritt 1</strong> (loop wiederholt sich)</li>
          </ol>
        </div>

        <hr class="section-divider">

        <h3>Der komplette Code</h3>

        <div class="code-card">
          <h4>PRUEFUNGSSCHALTUNG: AMPEL + FUSSGAENGER + TASTER + LDR</h4>
          <pre><code><span class="comment">// ==========================================</span>
<span class="comment">// PRUEFUNGSSCHALTUNG – Arduino Ampel komplett</span>
<span class="comment">// Auto-Ampel + Fussgaenger + Taster + LDR</span>
<span class="comment">// ==========================================</span>

<span class="comment">// --- Pin-Definitionen ---</span>
<span class="keyword">int</span> autoRot    = <span class="value">2</span>;    <span class="comment">// Auto-Ampel: Rote LED</span>
<span class="keyword">int</span> autoGelb   = <span class="value">3</span>;    <span class="comment">// Auto-Ampel: Gelbe LED</span>
<span class="keyword">int</span> autoGruen  = <span class="value">4</span>;    <span class="comment">// Auto-Ampel: Gruene LED</span>
<span class="keyword">int</span> fussRot    = <span class="value">5</span>;    <span class="comment">// Fussgaenger: Rote LED</span>
<span class="keyword">int</span> fussGruen  = <span class="value">6</span>;    <span class="comment">// Fussgaenger: Gruene LED</span>
<span class="keyword">int</span> taster     = <span class="value">7</span>;    <span class="comment">// Taster (Fussgaenger-Anforderung)</span>
<span class="keyword">int</span> ldrPin     = A0;   <span class="comment">// LDR am analogen Eingang A0</span>

<span class="comment">// --- Einstellungen ---</span>
<span class="keyword">int</span> SCHWELLE   = <span class="value">300</span>;  <span class="comment">// Schwellenwert fuer Tag/Nacht (unter 300 = dunkel)</span>
                        <span class="comment">// Mit Serial Monitor kalibrieren!</span>

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="comment">// LED-Pins als Ausgang konfigurieren</span>
  <span class="function">pinMode</span>(autoRot, OUTPUT);
  <span class="function">pinMode</span>(autoGelb, OUTPUT);
  <span class="function">pinMode</span>(autoGruen, OUTPUT);
  <span class="function">pinMode</span>(fussRot, OUTPUT);
  <span class="function">pinMode</span>(fussGruen, OUTPUT);

  <span class="comment">// Taster mit internem Pull-Up-Widerstand</span>
  <span class="function">pinMode</span>(taster, INPUT_PULLUP);

  <span class="comment">// Serial Monitor fuer LDR-Kalibrierung</span>
  <span class="function">Serial.begin</span>(<span class="value">9600</span>);
  <span class="function">Serial.println</span>(<span class="value">"Ampel gestartet!"</span>);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="comment">// LDR-Wert auslesen</span>
  <span class="keyword">int</span> lichtWert = <span class="function">analogRead</span>(ldrPin);

  <span class="comment">// Wert im Serial Monitor anzeigen (zum Kalibrieren)</span>
  <span class="function">Serial.print</span>(<span class="value">"LDR: "</span>);
  <span class="function">Serial.println</span>(lichtWert);

  <span class="comment">// ========== NACHTMODUS PRUEFEN ==========</span>
  <span class="keyword">if</span> (lichtWert <= SCHWELLE) {
    <span class="comment">// --- ES IST DUNKEL: Ampel aktiv ---</span>

    <span class="comment">// Normalzustand: Auto Gruen, Fussgaenger Rot</span>
    <span class="function">digitalWrite</span>(autoGruen, HIGH);
    <span class="function">digitalWrite</span>(fussRot, HIGH);

    <span class="comment">// Pruefen, ob Taster gedrueckt</span>
    <span class="keyword">if</span> (<span class="function">digitalRead</span>(taster) == LOW) {
      <span class="function">delay</span>(<span class="value">200</span>);  <span class="comment">// Entprellung</span>

      <span class="comment">// == PHASE 1: Auto Gruen → Gelb → Rot ==</span>
      <span class="function">digitalWrite</span>(autoGruen, LOW);
      <span class="function">digitalWrite</span>(autoGelb, HIGH);
      <span class="function">delay</span>(<span class="value">2000</span>);  <span class="comment">// 2 Sekunden Gelb</span>

      <span class="function">digitalWrite</span>(autoGelb, LOW);
      <span class="function">digitalWrite</span>(autoRot, HIGH);
      <span class="function">delay</span>(<span class="value">1000</span>);  <span class="comment">// 1 Sek. Raeumzeit</span>

      <span class="comment">// == PHASE 2: Fussgaenger Gruen ==</span>
      <span class="function">digitalWrite</span>(fussRot, LOW);
      <span class="function">digitalWrite</span>(fussGruen, HIGH);
      <span class="function">delay</span>(<span class="value">5000</span>);  <span class="comment">// 5 Sekunden Gruen</span>

      <span class="comment">// == PHASE 3: Fussgaenger blinkt ==</span>
      <span class="keyword">for</span> (<span class="keyword">int</span> i = <span class="value">0</span>; i < <span class="value">3</span>; i++) {
        <span class="function">digitalWrite</span>(fussGruen, LOW);
        <span class="function">delay</span>(<span class="value">400</span>);
        <span class="function">digitalWrite</span>(fussGruen, HIGH);
        <span class="function">delay</span>(<span class="value">400</span>);
      }
      <span class="function">digitalWrite</span>(fussGruen, LOW);
      <span class="function">digitalWrite</span>(fussRot, HIGH);
      <span class="function">delay</span>(<span class="value">1000</span>);  <span class="comment">// Kurze Pause</span>

      <span class="comment">// == PHASE 4: Auto Rot-Gelb → Gruen ==</span>
      <span class="function">digitalWrite</span>(autoGelb, HIGH);
      <span class="function">delay</span>(<span class="value">1000</span>);  <span class="comment">// 1 Sek. Rot-Gelb</span>

      <span class="function">digitalWrite</span>(autoRot, LOW);
      <span class="function">digitalWrite</span>(autoGelb, LOW);
      <span class="function">digitalWrite</span>(autoGruen, HIGH);
    }

  } <span class="keyword">else</span> {
    <span class="comment">// --- ES IST HELL: Ampel schlaeft ---</span>
    <span class="function">digitalWrite</span>(autoRot, LOW);
    <span class="function">digitalWrite</span>(autoGelb, LOW);
    <span class="function">digitalWrite</span>(autoGruen, LOW);
    <span class="function">digitalWrite</span>(fussRot, LOW);
    <span class="function">digitalWrite</span>(fussGruen, LOW);
  }

  <span class="function">delay</span>(<span class="value">100</span>);  <span class="comment">// Kurze Pause (stabiler Ablauf)</span>
}</code></pre>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Tipps für die Prüfung</h3>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
            <div class="tip-box">
              <strong>1. Systematisch aufbauen</strong><br>
              Baue nicht alles auf einmal! Gehe in dieser Reihenfolge vor:
              <ol style="margin-top: 0.5rem; margin-left: 1.25rem;">
                <li>Erst nur die Auto-Ampel (3 LEDs)</li>
                <li>Dann die Fußgänger-Ampel ergänzen</li>
                <li>Dann den Taster anschließen</li>
                <li>Zum Schluss den LDR hinzufügen</li>
              </ol>
            </div>
            <div class="tip-box">
              <strong>2. Jeden Schritt testen</strong><br>
              Nach jedem neuen Bauteil: Code hochladen und prüfen, ob es funktioniert. Fehler findest du so viel schneller, als wenn du alles auf einmal aufbaust und dann suchst.
            </div>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 0 0 1rem 0;">
            <div class="tip-box">
              <strong>3. Code kommentieren</strong><br>
              Schreibe Kommentare in deinen Code! Der Lehrer sieht daran, dass du verstehst, was du programmierst. Das gibt Punkte – auch wenn mal etwas nicht perfekt funktioniert.
            </div>
            <div class="tip-box">
              <strong>4. Kabel ordentlich</strong><br>
              Nutze Farben systematisch:
              <ul style="margin-top: 0.5rem; margin-left: 1.25rem;">
                <li><strong>Rot</strong> = 5V</li>
                <li><strong>Schwarz</strong> = GND</li>
                <li>LED-Farben passend wählen</li>
              </ul>
              Ordnung macht Eindruck und hilft beim Fehlersuchen!
            </div>
          </div>
        </div>

        <div class="warning-box">
          <strong>Häufige Fehler in der Prüfung:</strong>
          <ul style="margin-top: 0.5rem; margin-left: 1.25rem;">
            <li><strong>GND vergessen</strong> – Ohne Masse leuchtet keine LED!</li>
            <li><strong>Vorwiderstände vergessen</strong> – Ohne 220 Ohm kann die LED kaputt gehen</li>
            <li><strong>Taster falsch gesteckt</strong> – Muss über die Mittelrille des Steckbretts</li>
            <li><strong>LDR-Widerstand vertauscht</strong> – LDR an 5V, Festwiderstand an GND</li>
            <li><strong>Pin-Nummern im Code falsch</strong> – Immer mit der Verkabelung vergleichen!</li>
          </ul>
        </div>
      `
    },
    example: {
      title: 'Aufbau-Reihenfolge für die Prüfung',
      steps: [
        { label: 'Phase 1: Auto-Ampel', html: 'Stecke die <strong>3 LEDs</strong> (Rot, Gelb, Grün) für die Auto-Ampel. Jeweils 220-Ohm-Widerstand + GND. Teste mit einem Mini-Sketch: Alle 3 LEDs nacheinander an/aus. <strong>Funktioniert?</strong> Weiter!' },
        { label: 'Phase 2: Fußgänger-Ampel', html: 'Ergänze <strong>2 LEDs</strong> (Rot, Grün) für die Fußgänger-Ampel an Pin 5 und 6. Teste: Alle 5 LEDs nacheinander an/aus. <strong>Funktioniert?</strong> Weiter!' },
        { label: 'Phase 3: Taster', html: 'Schließe den <strong>Taster</strong> an Pin 7 + GND an. Lade den Ampel-Code (ohne LDR) hoch. Drücke den Taster – die komplette Ampel-Sequenz sollte ablaufen. <strong>Funktioniert?</strong> Weiter!' },
        { label: 'Phase 4: LDR', html: 'Baue den <strong>LDR-Spannungsteiler</strong> an A0 auf. Kalibriere den Schwellenwert mit dem Serial Monitor. Teste: Hand drüber (dunkel) → Ampel aktiv. Hand weg (hell) → Ampel aus. <strong>Funktioniert?</strong> Fertig!' },
        { label: 'Abschluss-Check', html: '<strong>Gehe den kompletten Ablauf einmal durch:</strong> Ampel aus (hell) → Hand über LDR → Ampel an → Taster drücken → komplette Sequenz beobachten → Hand vom LDR → Ampel aus. Alles korrekt? Dann bist du prüfungsbereit!' }
      ]
    },
    exercises: [
      {
        type: 'ordering',
        question: 'In welcher Reihenfolge solltest du die Prüfungsschaltung aufbauen?',
        items: [
          'LDR-Sensor anschließen und Schwellenwert kalibrieren',
          'Fußgänger-Ampel ergänzen (2 LEDs an Pin 5 + 6)',
          'Taster an Pin 7 anschließen und Ampel-Sequenz testen',
          'Auto-Ampel aufbauen (3 LEDs an Pin 2, 3, 4)',
          'Kompletten Code hochladen und Gesamttest durchführen'
        ],
        correctOrder: [3, 1, 2, 0, 4]
      },
      {
        type: 'multiple-choice',
        question: 'Wie viele Widerstände brauchst du insgesamt für die Prüfungsschaltung?',
        options: [
          '5 Stück (nur für die LEDs)',
          '6 Stück (5 für LEDs + 1 für den Taster)',
          '6 Stück (5 für LEDs + 1 für den LDR-Spannungsteiler)',
          '7 Stück (5 für LEDs + 1 für Taster + 1 für LDR)'
        ],
        correct: 2,
        explanation: 'Du brauchst 5x 220-Ohm-Widerstände für die 5 LEDs und 1x 10-kOhm-Widerstand für den LDR-Spannungsteiler. Der Taster braucht keinen externen Widerstand, weil wir INPUT_PULLUP verwenden – das sind also 6 Widerstände insgesamt.'
      },
      {
        type: 'multiple-choice',
        question: 'Was passiert in der Prüfungsschaltung, wenn der LDR-Wert über dem Schwellenwert liegt?',
        options: [
          'Die Ampel blinkt gelb',
          'Die Ampel wechselt auf Rot',
          'Alle LEDs gehen aus – die Ampel ist im Tagmodus deaktiviert',
          'Der Taster wird deaktiviert, aber die Ampel läuft weiter'
        ],
        correct: 2,
        explanation: 'Wenn der LDR-Wert über dem Schwellenwert liegt, bedeutet das: Es ist hell (Tag). Im Code steht dann der else-Zweig: Alle LEDs werden ausgeschaltet. Die Ampel "schläft" und reagiert auch nicht auf den Taster.'
      }
    ]
  }
];
