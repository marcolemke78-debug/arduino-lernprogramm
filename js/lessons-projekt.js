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
            <text x="185" y="253" text-anchor="middle" font-size="9" fill="#444" font-weight="bold">Breadboard (32 Spalten)</text>

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
            <rect x="39" y="62" width="12" height="60" rx="2" fill="#ff5555" opacity="0.3"/>
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
            <rect x="119" y="62" width="12" height="60" rx="2" fill="#ff5555" opacity="0.3"/>
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

            <!-- Arduino Pins-Header -->
            <text x="445" y="60" text-anchor="middle" font-size="7" fill="#fff" font-weight="bold" opacity="0.85">Digital-Pins</text>
            <text x="580" y="60" text-anchor="middle" font-size="7" fill="#fff" font-weight="bold" opacity="0.85">Spannung</text>

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
              <rect x="420" y="195" width="50" height="14" rx="2" fill="#333"/>
              <text x="445" y="205" text-anchor="middle">GND</text>
              <rect x="560" y="195" width="50" height="14" rx="2" fill="#c00"/>
              <text x="585" y="205" text-anchor="middle">5V</text>
            </g>

            <!-- Beschriftungen rechts neben Pin-Boxen (statt auf den Kabeln) -->
            <g font-size="6.5" font-weight="bold">
              <text x="478" y="76" fill="#c00">→ Auto Rot</text>
              <text x="478" y="96" fill="#aa0">→ Auto Gelb</text>
              <text x="478" y="116" fill="#090">→ Auto Grün</text>
              <text x="478" y="136" fill="#c00">→ Fußg. Rot</text>
              <text x="478" y="156" fill="#090">→ Fußg. Grün</text>
              <text x="478" y="176" fill="#44c">→ Taster</text>
            </g>

            <!-- ===== KABEL (gestaffelte Bahnen + versetzte horizontale Spuren = klares Flachband) ===== -->
            <!-- Pin 2 → Spalte 3 (Auto Rot) - vertikale Bahn x=406, horizontale Spur y=112 -->
            <path d="M 420 72 L 406 72 L 406 112 L 44 112 L 44 116" fill="none" stroke="#e44" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
            <circle cx="44" cy="116" r="2.5" fill="#e44"/>

            <!-- Pin 3 → Spalte 5 (Auto Gelb) - Bahn x=402, Spur y=114 -->
            <path d="M 420 92 L 402 92 L 402 114 L 64 114 L 64 116" fill="none" stroke="#cc0" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
            <circle cx="64" cy="116" r="2.5" fill="#cc0"/>

            <!-- Pin 4 → Spalte 7 (Auto Grün) - Bahn x=398, Spur y=116 (= Reihe e direkt) -->
            <path d="M 420 112 L 398 112 L 398 116 L 84 116" fill="none" stroke="#0a0" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
            <circle cx="84" cy="116" r="2.5" fill="#0a0"/>

            <!-- Pin 5 → Spalte 10 (Fußg. Rot) - Bahn x=394, Spur y=118 -->
            <path d="M 420 132 L 394 132 L 394 118 L 124 118 L 124 116" fill="none" stroke="#e44" stroke-width="1.8" stroke-dasharray="4,2" stroke-linejoin="round" stroke-linecap="round"/>
            <circle cx="124" cy="116" r="2.5" fill="#e44"/>

            <!-- Pin 6 → Spalte 12 (Fußg. Grün) - Bahn x=390, Spur y=120 -->
            <path d="M 420 152 L 390 152 L 390 120 L 144 120 L 144 116" fill="none" stroke="#0a0" stroke-width="1.8" stroke-dasharray="4,2" stroke-linejoin="round" stroke-linecap="round"/>
            <circle cx="144" cy="116" r="2.5" fill="#0a0"/>

            <!-- Pin 7 → Taster (Spalte 16, Reihe e) - Bahn x=386, Spur y=122 -->
            <path d="M 420 172 L 386 172 L 386 122 L 184 122 L 184 116" fill="none" stroke="#66f" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
            <circle cx="184" cy="116" r="2.5" fill="#66f"/>

            <!-- GND → obere -Schiene (über die rechte Bahn x=382) -->
            <path d="M 420 202 L 382 202 L 382 43 L 340 43" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
            <circle cx="340" cy="43" r="2.5" fill="#333"/>

            <!-- Taster anderes Bein (Spalte 17, Reihe f) → untere -Schiene → verbunden zu obere -Schiene -->
            <line x1="196" y1="142" x2="196" y2="222" stroke="#1565C0" stroke-width="2.2" stroke-linecap="round"/>
            <line x1="196" y1="222" x2="340" y2="222" stroke="#1565C0" stroke-width="2" stroke-linecap="round"/>
            <line x1="340" y1="222" x2="340" y2="48" stroke="#1565C0" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.7"/>
            <circle cx="196" cy="142" r="2.5" fill="#1565C0"/>
            <circle cx="340" cy="222" r="2.5" fill="#1565C0"/>
            <text x="205" y="215" font-size="7" fill="#0a3a78" font-weight="bold">→ GND</text>

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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 760" style="max-width:100%;height:auto;background:#fdfcf6;border:1px solid #ccc;border-radius:8px;">

            <!-- ===== ARDUINO UNO (oben, vertikal) ===== -->
            <rect x="20" y="30" width="700" height="120" rx="10" fill="#2176AE" stroke="#1a5f8a" stroke-width="2"/>
            <text x="370" y="55" text-anchor="middle" font-size="16" fill="white" font-weight="bold">Arduino Uno</text>
            <text x="370" y="72" text-anchor="middle" font-size="9" fill="#aad" font-style="italic">Ampel + LDR-Nachtabschaltung – Vorstufe zur Prüfungsschaltung</text>

            <rect x="0" y="65" width="20" height="28" rx="2" fill="#aaa" stroke="#888" stroke-width="1"/>
            <text x="10" y="83" text-anchor="middle" font-size="7" fill="#444">USB</text>

            <!-- Pin-Labels ÜBER den Pin-Nummern -->
            <g font-size="9" font-weight="bold" text-anchor="middle">
              <text x="100" y="103" fill="#ff5555">ROT</text>
              <text x="180" y="103" fill="#ffe033">GELB</text>
              <text x="260" y="103" fill="#6f6">GRÜN</text>
              <text x="340" y="103" fill="#ff5555">F-ROT</text>
              <text x="420" y="103" fill="#6f6">F-GRÜN</text>
              <text x="500" y="103" fill="#aaf">Taster</text>
              <text x="581" y="103" fill="#fc6">LDR</text>
              <text x="640" y="103" fill="#ddd">Masse</text>
              <text x="680" y="103" fill="#ff5555">Strom</text>
            </g>

            <!-- Pin-Boxen (zentriert über Ziel-Spalten) -->
            <g font-size="10" fill="white" font-weight="bold" text-anchor="middle">
              <rect x="90" y="110" width="20" height="28" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/><text x="100" y="129">2</text>
              <rect x="170" y="110" width="20" height="28" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/><text x="180" y="129">3</text>
              <rect x="250" y="110" width="20" height="28" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/><text x="260" y="129">4</text>
              <rect x="330" y="110" width="20" height="28" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/><text x="340" y="129">5</text>
              <rect x="410" y="110" width="20" height="28" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/><text x="420" y="129">6</text>
              <rect x="490" y="110" width="20" height="28" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/><text x="500" y="129">7</text>
              <rect x="570" y="110" width="22" height="28" rx="2" fill="#f90" stroke="white" stroke-width="0.5"/><text x="581" y="129" font-size="9">A0</text>
              <rect x="628" y="110" width="24" height="28" rx="2" fill="#333" stroke="white" stroke-width="0.5"/><text x="640" y="129" font-size="9">GND</text>
              <rect x="670" y="110" width="20" height="28" rx="2" fill="#ff5555" stroke="white" stroke-width="0.5"/><text x="680" y="129">5V</text>
            </g>

            <!-- ===== KABEL: senkrecht ===== -->
            <line x1="100" y1="138" x2="100" y2="342" stroke="#E74C3C" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="100" cy="342" r="3.5" fill="#E74C3C" stroke="#800" stroke-width="0.8"/>
            <line x1="180" y1="138" x2="180" y2="342" stroke="#cc0" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="180" cy="342" r="3.5" fill="#cc0" stroke="#660" stroke-width="0.8"/>
            <line x1="260" y1="138" x2="260" y2="342" stroke="#0a0" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="260" cy="342" r="3.5" fill="#0a0" stroke="#040" stroke-width="0.8"/>
            <line x1="340" y1="138" x2="340" y2="342" stroke="#E74C3C" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="6,3"/>
            <circle cx="340" cy="342" r="3.5" fill="#E74C3C" stroke="#800" stroke-width="0.8"/>
            <line x1="420" y1="138" x2="420" y2="342" stroke="#0a0" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="6,3"/>
            <circle cx="420" cy="342" r="3.5" fill="#0a0" stroke="#040" stroke-width="0.8"/>
            <line x1="500" y1="138" x2="500" y2="342" stroke="#66f" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="500" cy="342" r="3.5" fill="#66f" stroke="#008" stroke-width="0.8"/>
            <line x1="581" y1="138" x2="581" y2="342" stroke="#f90" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="581" cy="342" r="3.5" fill="#f90" stroke="#c60" stroke-width="0.8"/>
            <line x1="640" y1="138" x2="640" y2="250" stroke="#333" stroke-width="3" stroke-linecap="round"/>
            <circle cx="640" cy="250" r="3.5" fill="#333"/>
            <line x1="680" y1="138" x2="680" y2="230" stroke="#ff5555" stroke-width="3" stroke-linecap="round"/>
            <circle cx="680" cy="230" r="3.5" fill="#ff5555"/>

            <!-- GND-BRÜCKE rechts (verbindet obere/untere -Schiene) -->
            <path d="M 690 245 L 712 245 L 712 460 L 690 460" stroke="#333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <circle cx="690" cy="245" r="3" fill="#333"/>
            <circle cx="690" cy="460" r="3" fill="#333"/>
            <text x="712" y="355" text-anchor="middle" font-size="7" fill="#333" font-style="italic" font-weight="bold">GND</text>

            <!-- ===== BREADBOARD (32 Spalten) ===== -->
            <rect x="20" y="215" width="680" height="320" rx="6" fill="#e8e0d0" stroke="#999" stroke-width="1.5"/>
            <text x="370" y="550" text-anchor="middle" font-size="9" fill="#444" font-weight="bold">Breadboard (32 Spalten)</text>

            <rect x="50" y="225" width="640" height="10" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="38" y="232" font-size="8" fill="#c00" font-weight="bold">+</text>
            <rect x="50" y="240" width="640" height="10" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="38" y="247" font-size="8" fill="#00c" font-weight="bold">−</text>

            <g font-size="7" fill="#888" text-anchor="middle">
              <text x="60" y="265">1</text><text x="80" y="265">2</text><text x="100" y="265">3</text><text x="120" y="265">4</text><text x="140" y="265">5</text><text x="160" y="265">6</text><text x="180" y="265">7</text><text x="200" y="265">8</text><text x="220" y="265">9</text><text x="240" y="265">10</text><text x="260" y="265">11</text><text x="280" y="265">12</text><text x="300" y="265">13</text><text x="320" y="265">14</text><text x="340" y="265">15</text><text x="360" y="265">16</text><text x="380" y="265">17</text><text x="400" y="265">18</text><text x="420" y="265">19</text><text x="440" y="265">20</text><text x="460" y="265">21</text><text x="480" y="265">22</text><text x="500" y="265">23</text><text x="520" y="265">24</text><text x="540" y="265">25</text><text x="560" y="265">26</text><text x="580" y="265">27</text><text x="600" y="265">28</text><text x="620" y="265">29</text><text x="640" y="265">30</text><text x="660" y="265">31</text><text x="680" y="265">32</text>
            </g>

            <g font-size="9" fill="#666" font-style="italic">
              <text x="36" y="282">a</text><text x="36" y="298">b</text><text x="36" y="314">c</text><text x="36" y="330">d</text><text x="36" y="346">e</text>
            </g>
            <g stroke="#aaa" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1,19.9" fill="none">
              <line x1="60" y1="278" x2="680" y2="278"/><line x1="60" y1="294" x2="680" y2="294"/><line x1="60" y1="310" x2="680" y2="310"/><line x1="60" y1="326" x2="680" y2="326"/><line x1="60" y1="342" x2="680" y2="342"/>
            </g>

            <rect x="50" y="350" width="640" height="14" rx="2" fill="#d0c8b8"/>

            <g font-size="9" fill="#666" font-style="italic">
              <text x="36" y="376">f</text><text x="36" y="392">g</text><text x="36" y="408">h</text><text x="36" y="424">i</text><text x="36" y="440">j</text>
            </g>
            <g stroke="#aaa" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1,19.9" fill="none">
              <line x1="60" y1="372" x2="680" y2="372"/><line x1="60" y1="388" x2="680" y2="388"/><line x1="60" y1="404" x2="680" y2="404"/><line x1="60" y1="420" x2="680" y2="420"/><line x1="60" y1="436" x2="680" y2="436"/>
            </g>

            <rect x="50" y="455" width="640" height="10" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <rect x="50" y="470" width="640" height="10" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>

            <!-- ===== BAUTEILE: Auto-Ampel (3 LEDs, Sp.3/4/5, 7/8/9, 11/12/13) ===== -->
            <rect x="92" y="266" width="220" height="84" rx="4" fill="none" stroke="#e44" stroke-width="1" stroke-dasharray="4,2"/>
            <text x="200" y="200" text-anchor="middle" font-size="12" fill="#c44" font-weight="bold" stroke="white" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill">⬇ AUTO-AMPEL</text>

            <!-- ROT (Sp.3-4-5) -->
            <rect x="98" y="306" width="24" height="8" rx="2" fill="#e8d0a0" stroke="#864" stroke-width="1"/>
            <text x="110" y="304" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">220Ω</text>
            <circle cx="100" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <circle cx="120" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <line x1="100" y1="310" x2="100" y2="342" stroke="#864" stroke-width="1.5"/>
            <line x1="120" y1="310" x2="120" y2="282" stroke="#864" stroke-width="1.5"/>
            <polygon points="119,274 119,286 132,280" fill="#E74C3C" stroke="#a00" stroke-width="1.2"/>
            <line x1="132" y1="274" x2="132" y2="286" stroke="#a00" stroke-width="2"/>
            <text x="125" y="262" text-anchor="middle" font-size="7" fill="#c00" font-weight="bold">ROT</text>
            <circle cx="120" cy="280" r="2.2" fill="#E74C3C"/><circle cx="140" cy="280" r="2.2" fill="#864"/>
            <line x1="140" y1="280" x2="140" y2="250" stroke="#333" stroke-width="1.5" stroke-dasharray="3,1.5"/>

            <!-- GELB (Sp.7-8-9) -->
            <rect x="178" y="306" width="24" height="8" rx="2" fill="#e8d0a0" stroke="#864" stroke-width="1"/>
            <text x="190" y="304" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">220Ω</text>
            <circle cx="180" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <circle cx="200" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <line x1="180" y1="310" x2="180" y2="342" stroke="#864" stroke-width="1.5"/>
            <line x1="200" y1="310" x2="200" y2="282" stroke="#864" stroke-width="1.5"/>
            <polygon points="199,274 199,286 212,280" fill="#F1C40F" stroke="#aa0" stroke-width="1.2"/>
            <line x1="212" y1="274" x2="212" y2="286" stroke="#aa0" stroke-width="2"/>
            <text x="205" y="262" text-anchor="middle" font-size="7" fill="#aa0" font-weight="bold">GELB</text>
            <circle cx="200" cy="280" r="2.2" fill="#F1C40F"/><circle cx="220" cy="280" r="2.2" fill="#864"/>
            <line x1="220" y1="280" x2="220" y2="250" stroke="#333" stroke-width="1.5" stroke-dasharray="3,1.5"/>

            <!-- GRÜN (Sp.11-12-13) -->
            <rect x="258" y="306" width="24" height="8" rx="2" fill="#e8d0a0" stroke="#864" stroke-width="1"/>
            <text x="270" y="304" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">220Ω</text>
            <circle cx="260" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <circle cx="280" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <line x1="260" y1="310" x2="260" y2="342" stroke="#864" stroke-width="1.5"/>
            <line x1="280" y1="310" x2="280" y2="282" stroke="#864" stroke-width="1.5"/>
            <polygon points="279,274 279,286 292,280" fill="#2ECC71" stroke="#090" stroke-width="1.2"/>
            <line x1="292" y1="274" x2="292" y2="286" stroke="#090" stroke-width="2"/>
            <text x="285" y="262" text-anchor="middle" font-size="7" fill="#090" font-weight="bold">GRÜN</text>
            <circle cx="280" cy="280" r="2.2" fill="#2ECC71"/><circle cx="300" cy="280" r="2.2" fill="#864"/>
            <line x1="300" y1="280" x2="300" y2="250" stroke="#333" stroke-width="1.5" stroke-dasharray="3,1.5"/>

            <!-- ===== Fußg-Ampel (Sp.15-21) ===== -->
            <rect x="332" y="266" width="140" height="84" rx="4" fill="none" stroke="#66c" stroke-width="1" stroke-dasharray="4,2"/>
            <text x="402" y="200" text-anchor="middle" font-size="12" fill="#44a" font-weight="bold" stroke="white" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill">⬇ FUSSGÄNGER</text>

            <!-- F-ROT (Sp.15-16-17) -->
            <rect x="338" y="306" width="24" height="8" rx="2" fill="#e8d0a0" stroke="#864" stroke-width="1"/>
            <text x="350" y="304" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">220Ω</text>
            <circle cx="340" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <circle cx="360" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <line x1="340" y1="310" x2="340" y2="342" stroke="#864" stroke-width="1.5"/>
            <line x1="360" y1="310" x2="360" y2="282" stroke="#864" stroke-width="1.5"/>
            <polygon points="359,274 359,286 372,280" fill="#E74C3C" stroke="#a00" stroke-width="1.2"/>
            <line x1="372" y1="274" x2="372" y2="286" stroke="#a00" stroke-width="2"/>
            <text x="365" y="262" text-anchor="middle" font-size="7" fill="#c00" font-weight="bold">F-ROT</text>
            <circle cx="360" cy="280" r="2.2" fill="#E74C3C"/><circle cx="380" cy="280" r="2.2" fill="#864"/>
            <line x1="380" y1="280" x2="380" y2="250" stroke="#333" stroke-width="1.5" stroke-dasharray="3,1.5"/>

            <!-- F-GRÜN (Sp.19-20-21) -->
            <rect x="418" y="306" width="24" height="8" rx="2" fill="#e8d0a0" stroke="#864" stroke-width="1"/>
            <text x="430" y="304" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">220Ω</text>
            <circle cx="420" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <circle cx="440" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <line x1="420" y1="310" x2="420" y2="342" stroke="#864" stroke-width="1.5"/>
            <line x1="440" y1="310" x2="440" y2="282" stroke="#864" stroke-width="1.5"/>
            <polygon points="439,274 439,286 452,280" fill="#2ECC71" stroke="#090" stroke-width="1.2"/>
            <line x1="452" y1="274" x2="452" y2="286" stroke="#090" stroke-width="2"/>
            <text x="445" y="262" text-anchor="middle" font-size="7" fill="#090" font-weight="bold">F-GRÜN</text>
            <circle cx="440" cy="280" r="2.2" fill="#2ECC71"/><circle cx="460" cy="280" r="2.2" fill="#864"/>
            <line x1="460" y1="280" x2="460" y2="250" stroke="#333" stroke-width="1.5" stroke-dasharray="3,1.5"/>

            <!-- ===== Taster (Sp.23-24) ===== -->
            <rect x="488" y="334" width="44" height="60" rx="4" fill="none" stroke="#66f" stroke-width="1" stroke-dasharray="4,2"/>
            <text x="510" y="200" text-anchor="middle" font-size="12" fill="#44c" font-weight="bold" stroke="white" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill">⬇ TASTER</text>
            <rect x="494" y="340" width="32" height="42" rx="3" fill="#888" stroke="#555" stroke-width="1"/>
            <circle cx="510" cy="361" r="10" fill="#aaa" stroke="#666" stroke-width="1"/>
            <text x="510" y="364" text-anchor="middle" font-size="6" fill="#444">drücken</text>
            <circle cx="500" cy="342" r="2.5" fill="#888" stroke="#444" stroke-width="0.8"/>
            <circle cx="520" cy="372" r="2.5" fill="#888" stroke="#444" stroke-width="0.8"/>
            <line x1="520" y1="372" x2="520" y2="455" stroke="#333" stroke-width="1.5" stroke-dasharray="3,1.5"/>
            <text x="535" y="420" font-size="7" fill="#333" font-style="italic">→ untere GND</text>

            <!-- ===== LDR-Spannungsteiler (Sp.26-28, NEU) ===== -->
            <rect x="548" y="266" width="80" height="84" rx="4" fill="#ffe8cc" opacity="0.25" stroke="#f90" stroke-width="1" stroke-dasharray="4,2"/>
            <text x="588" y="200" text-anchor="middle" font-size="12" fill="#c60" font-weight="bold" stroke="white" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill">⬇ LDR-SENSOR (NEU!)</text>

            <ellipse cx="570" cy="280" rx="13" ry="8" fill="#ffe066" stroke="#c90" stroke-width="1.5"/>
            <text x="570" y="278" text-anchor="middle" font-size="6" fill="#864" font-weight="bold">LDR</text>
            <text x="570" y="286" text-anchor="middle" font-size="5" fill="#864">(Licht)</text>
            <line x1="556" y1="272" x2="552" y2="268" stroke="#c90" stroke-width="1"/>
            <line x1="570" y1="268" x2="570" y2="262" stroke="#c90" stroke-width="1"/>
            <line x1="584" y1="272" x2="588" y2="268" stroke="#c90" stroke-width="1"/>
            <circle cx="560" cy="280" r="2.2" fill="#864"/><circle cx="580" cy="280" r="2.2" fill="#864"/>
            <line x1="560" y1="280" x2="560" y2="250" stroke="#c00" stroke-width="1.5" stroke-dasharray="3,1.5"/>

            <circle cx="580" cy="310" r="4" fill="#f90" stroke="#c60" stroke-width="1.2"/>
            <text x="580" y="304" text-anchor="middle" font-size="6.5" fill="#c60" font-weight="bold" stroke="white" stroke-width="2.5" stroke-linejoin="round" paint-order="stroke fill">A0-Knoten</text>

            <rect x="578" y="320" width="24" height="8" rx="2" fill="#c0a060" stroke="#864" stroke-width="1"/>
            <text x="590" y="318" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">10kΩ</text>
            <circle cx="580" cy="324" r="2.2" fill="#c0a060" stroke="#864" stroke-width="0.8"/>
            <circle cx="600" cy="324" r="2.2" fill="#c0a060" stroke="#864" stroke-width="0.8"/>
            <line x1="600" y1="324" x2="600" y2="342" stroke="#864" stroke-width="1.5"/>
            <!-- GND-Jumper 10kΩ → untere -Schiene (durchgezogen blau) -->
            <line x1="600" y1="342" x2="600" y2="460" stroke="#1565C0" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="600" cy="342" r="3" fill="#1565C0" stroke="#0a3a78" stroke-width="0.8"/>
            <circle cx="600" cy="460" r="3.5" fill="#1565C0" stroke="#0a3a78" stroke-width="0.8"/>
            <text x="615" y="425" font-size="8" fill="#0a3a78" font-weight="bold">→ GND</text>

            <!-- ===== LEGENDE ===== -->
            <rect x="20" y="555" width="680" height="160" rx="6" fill="#f0f0f0" stroke="#ccc" stroke-width="1"/>
            <text x="32" y="578" font-size="11" fill="#333" font-weight="bold">Legende – Nachtabschaltung (Ampel + LDR):</text>
            <text x="32" y="600" font-size="9" fill="#555">► Jede LED: Pin → 220Ω → LED Anode → LED Kathode → obere −Schiene</text>
            <text x="32" y="618" font-size="9" fill="#555">► LDR-Spannungsteiler (NEU): 5V → LDR → A0-Knoten → 10kΩ → GND</text>
            <text x="32" y="636" font-size="9" fill="#555">► Taster zwischen Pin 7 und unterer GND-Schiene (INPUT_PULLUP)</text>
            <text x="32" y="660" font-size="9" fill="#666" font-style="italic">► Erweiterung gegenüber L19: LDR-Spannungsteiler an A0 ermöglicht Nachtabschaltung (Hell/Dunkel-Erkennung)</text>
            <text x="32" y="684" font-size="9" fill="#666" font-style="italic">► Nächste Stufe (L21): Komplettprojekt mit Löten – diese Schaltung ist die Vorstufe!</text>
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
          <h3>Was musst du in der RSAP wirklich zeigen?</h3>
          <p>Bevor wir loslegen: Die <strong>Realschulabschlussprüfung Technik</strong> (RSAP) hat ein paar harte Pflicht-Vorgaben, die du im Kopf haben musst. Wenn du eine davon vergisst, kostet das richtig Punkte.</p>

          <table class="icon-table">
            <tr><th>Pflicht</th><th>Was heißt das konkret?</th></tr>
            <tr><td><strong>Sensoren &amp; Aktoren</strong></td><td>Mindestens <strong>1 Sensor + 2 Aktoren</strong> ODER <strong>2 Sensoren + 1 Aktor</strong>. Sie müssen <em>extern</em> sein – also außerhalb des Arduino-Chips, von dir auf der Lötplatine angeschlossen.</td></tr>
            <tr><td><strong>Analoger Sensor</strong></td><td><strong>Mindestens 1</strong> externer Sensor muss <strong>analog</strong> sein (LDR, NTC, Potentiometer). Reines Taster-Setup reicht nicht!</td></tr>
            <tr><td><strong>Schaltung gelötet</strong></td><td><strong>Kein Breadboard in der Prüfung!</strong> Du baust deine Schaltung auf einer Lötplatine auf. Dazu kommt unten Sektion 4.</td></tr>
            <tr><td><strong>Konstruktion</strong></td><td>Werkstoffbereich: <strong>Messen, Anreißen</strong> <em>(= mit Stahlspitze markieren, wo gebohrt/gesägt wird)</em><strong>, Bohren, Sägen</strong>. Das Modell muss neben der Elektronik auch handwerklich entstanden sein.</td></tr>
            <tr><td><strong>Vollständig</strong></td><td><strong>Computergestützte Steuerung oder Regelung</strong> muss komplett funktionieren – nicht nur ein Teilbereich.</td></tr>
          </table>

          <h4 style="margin-top:1.25rem;">Bewertungsbogen Praxis – 4 Kriterien, je 0–5 Punkte</h4>
          <ul class="step-list">
            <li><strong>Planung</strong> – Schaltplan, Pin-Belegung, Materialliste sauber dokumentiert</li>
            <li><strong>Funktion</strong> – Schaltung erfüllt die Aufgabenstellung, alle Zustände werden korrekt durchlaufen</li>
            <li><strong>Handwerkliche Umsetzung</strong> – saubere Lötstellen, ordentliche Verdrahtung, stabiler Aufbau</li>
            <li><strong>Steuerung / Regelung</strong> ← <strong>das ist unser Arduino-Bereich</strong>: kommentierter Code, sinnvolle Bedingungen, Sensorwerte ausgewertet, Reaktion korrekt</li>
          </ul>
        </div>

        <div class="tip-box">
          <strong>Wie erfüllt die Ampel-Schaltung unten diese Pflichten?</strong>
          <ul style="margin-top:0.5rem; margin-left:1.25rem;">
            <li>2 Sensoren (LDR analog + Taster digital) ✅</li>
            <li>5 Aktoren (5 LEDs) ✅</li>
            <li>Analoger Sensor: LDR ✅</li>
            <li>Steuerung mit if/else + Zustandsmaschine ✅</li>
          </ul>
          Die Ampel ist also ein <strong>RSAP-konformes Projekt</strong>. Weitere Pool-Aufgaben siehe Sektion 5 unten.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Komplette Bauteilliste</h3>
          <table class="icon-table">
            <tr><th>Anzahl</th><th>Bauteil</th><th>Wozu?</th></tr>
            <tr><td>1x</td><td>Arduino Uno</td><td>Steuerung</td></tr>
            <tr><td>1x</td><td>Steckbrett (Breadboard)</td><td>nur für die <em>Test-Phase</em>! In der echten Prüfung verboten – du baust auf Lötplatine (siehe Sektion 4)</td></tr>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 760" style="max-width:100%;height:auto;background:#fdfcf6;border:1px solid #ccc;border-radius:8px;">

            <!-- =============================================== -->
            <!-- ===== ARDUINO UNO (OBEN, volle Breite) ====== -->
            <!-- Pin-Reihe gespreizt auf 80px Abstand -->
            <!-- =============================================== -->
            <rect x="20" y="30" width="700" height="120" rx="10" fill="#2176AE" stroke="#1a5f8a" stroke-width="2"/>
            <text x="370" y="55" text-anchor="middle" font-size="16" fill="white" font-weight="bold">Arduino Uno</text>
            <text x="370" y="72" text-anchor="middle" font-size="9" fill="#aad" font-style="italic">Prüfungsschaltung – RSAP-Komplettprojekt</text>

            <!-- USB-Buchse links außerhalb -->
            <rect x="0" y="65" width="20" height="28" rx="2" fill="#aaa" stroke="#888" stroke-width="1"/>
            <text x="10" y="83" text-anchor="middle" font-size="7" fill="#444">USB</text>

            <!-- Pin-Labels ÜBER der Pin-Nummer (im Arduino, ersetzen Header) -->
            <g font-size="9" font-weight="bold" text-anchor="middle">
              <text x="100" y="103" fill="#ff5555">ROT</text>
              <text x="180" y="103" fill="#ffe033">GELB</text>
              <text x="260" y="103" fill="#6f6">GRÜN</text>
              <text x="340" y="103" fill="#ff5555">F-ROT</text>
              <text x="420" y="103" fill="#6f6">F-GRÜN</text>
              <text x="500" y="103" fill="#aaf">Taster</text>
              <text x="581" y="103" fill="#fc6">LDR</text>
              <text x="640" y="103" fill="#ddd">Masse</text>
              <text x="680" y="103" fill="#ff5555">Strom</text>
            </g>

            <!-- Pins: jede Pin-Box steht EXAKT über der Ziel-Spalte (Sp 1 bei x=60, +20px pro Sp) -->
            <g font-size="10" fill="white" font-weight="bold" text-anchor="middle">
              <!-- Pin 2 → Sp.3 (x=100) -->
              <rect x="90" y="110" width="20" height="28" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/>
              <text x="100" y="129">2</text>

              <!-- Pin 3 → Sp.7 (x=180) -->
              <rect x="170" y="110" width="20" height="28" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/>
              <text x="180" y="129">3</text>

              <!-- Pin 4 → Sp.11 (x=260) -->
              <rect x="250" y="110" width="20" height="28" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/>
              <text x="260" y="129">4</text>

              <!-- Pin 5 → Sp.15 (x=340) -->
              <rect x="330" y="110" width="20" height="28" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/>
              <text x="340" y="129">5</text>

              <!-- Pin 6 → Sp.19 (x=420) -->
              <rect x="410" y="110" width="20" height="28" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/>
              <text x="420" y="129">6</text>

              <!-- Pin 7 → Sp.23 (x=500, Taster) -->
              <rect x="490" y="110" width="20" height="28" rx="2" fill="#1a5f8a" stroke="white" stroke-width="0.5"/>
              <text x="500" y="129">7</text>

              <!-- A0 → Sp.27 (x=580, LDR-Knoten) -->
              <rect x="570" y="110" width="22" height="28" rx="2" fill="#f90" stroke="white" stroke-width="0.5"/>
              <text x="581" y="129" font-size="9">A0</text>

              <!-- GND → Sp.30 (x=640) -->
              <rect x="628" y="110" width="24" height="28" rx="2" fill="#333" stroke="white" stroke-width="0.5"/>
              <text x="640" y="129" font-size="9">GND</text>

              <!-- 5V → Sp.32 (x=680) -->
              <rect x="670" y="110" width="20" height="28" rx="2" fill="#c00" stroke="white" stroke-width="0.5"/>
              <text x="680" y="129">5V</text>
            </g>


            <!-- =============================================== -->
            <!-- ===== KABEL: ARDUINO → BREADBOARD ============ -->
            <!-- Alle senkrecht, exakt über Ziel-Spalte -->
            <!-- =============================================== -->
            <!-- Pin 2 → Sp.3 Reihe e (Auto Rot, x=100) -->
            <line x1="100" y1="138" x2="100" y2="342" stroke="#e44" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="100" cy="342" r="3.5" fill="#e44" stroke="#800" stroke-width="0.8"/>

            <!-- Pin 3 → Sp.7 Reihe e (Auto Gelb, x=180) -->
            <line x1="180" y1="138" x2="180" y2="342" stroke="#cc0" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="180" cy="342" r="3.5" fill="#cc0" stroke="#660" stroke-width="0.8"/>

            <!-- Pin 4 → Sp.11 Reihe e (Auto Grün, x=260) -->
            <line x1="260" y1="138" x2="260" y2="342" stroke="#0a0" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="260" cy="342" r="3.5" fill="#0a0" stroke="#040" stroke-width="0.8"/>

            <!-- Pin 5 → Sp.15 Reihe e (Fußg Rot, gestrichelt, x=340) -->
            <line x1="340" y1="138" x2="340" y2="342" stroke="#e44" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="6,3"/>
            <circle cx="340" cy="342" r="3.5" fill="#e44" stroke="#800" stroke-width="0.8"/>

            <!-- Pin 6 → Sp.19 Reihe e (Fußg Grün, gestrichelt, x=420) -->
            <line x1="420" y1="138" x2="420" y2="342" stroke="#0a0" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="6,3"/>
            <circle cx="420" cy="342" r="3.5" fill="#0a0" stroke="#040" stroke-width="0.8"/>

            <!-- Pin 7 → Sp.23 Reihe e (Taster, x=500) -->
            <line x1="500" y1="138" x2="500" y2="342" stroke="#66f" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="500" cy="342" r="3.5" fill="#66f" stroke="#008" stroke-width="0.8"/>

            <!-- A0 → Sp.27 Reihe e (LDR-Knoten, x=580) -->
            <line x1="581" y1="138" x2="581" y2="342" stroke="#f90" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="581" cy="342" r="3.5" fill="#f90" stroke="#c60" stroke-width="0.8"/>

            <!-- GND → obere -Schiene bei Sp.30 (x=640) -->
            <line x1="640" y1="138" x2="640" y2="250" stroke="#333" stroke-width="3" stroke-linecap="round"/>
            <circle cx="640" cy="250" r="3.5" fill="#333"/>

            <!-- 5V → obere +Schiene bei Sp.32 (x=680) -->
            <line x1="680" y1="138" x2="680" y2="230" stroke="#c00" stroke-width="3" stroke-linecap="round"/>
            <circle cx="680" cy="230" r="3.5" fill="#c00"/>

            <!-- GND-BRÜCKE: obere -Schiene ↔ untere -Schiene (rechts außen, damit Taster + 10kΩ-Anschluss zur Masse haben) -->
            <path d="M 690 245 L 712 245 L 712 460 L 690 460" stroke="#333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <circle cx="690" cy="245" r="3" fill="#333"/>
            <circle cx="690" cy="460" r="3" fill="#333"/>
            <text x="712" y="355" text-anchor="middle" font-size="7" fill="#333" font-style="italic" font-weight="bold">GND</text>

            <!-- =============================================== -->
            <!-- ===== BREADBOARD (UNTEN, volle Breite) ====== -->
            <!-- =============================================== -->
            <rect x="20" y="215" width="680" height="320" rx="6" fill="#e8e0d0" stroke="#999" stroke-width="1.5"/>
            <text x="360" y="550" text-anchor="middle" font-size="9" fill="#444" font-weight="bold">Prüfungs-Breadboard (32 Spalten)</text>

            <!-- Stromschienen oben (rot=5V, blau=GND) -->
            <rect x="50" y="225" width="640" height="10" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="38" y="232" font-size="8" fill="#c00" font-weight="bold">+</text>
            <text x="696" y="232" font-size="7" fill="#c00" font-weight="bold">5V</text>
            <rect x="50" y="240" width="640" height="10" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="38" y="247" font-size="8" fill="#00c" font-weight="bold">−</text>
            <text x="696" y="247" font-size="7" fill="#00c" font-weight="bold">GND</text>

            <!-- Spaltennummern (alle 32 Spalten, 20px Abstand, ab x=60) -->
            <g font-size="7" fill="#888" text-anchor="middle">
              <text x="60" y="265">1</text><text x="80" y="265">2</text><text x="100" y="265">3</text><text x="120" y="265">4</text><text x="140" y="265">5</text><text x="160" y="265">6</text><text x="180" y="265">7</text><text x="200" y="265">8</text><text x="220" y="265">9</text><text x="240" y="265">10</text><text x="260" y="265">11</text><text x="280" y="265">12</text><text x="300" y="265">13</text><text x="320" y="265">14</text><text x="340" y="265">15</text><text x="360" y="265">16</text><text x="380" y="265">17</text><text x="400" y="265">18</text><text x="420" y="265">19</text><text x="440" y="265">20</text><text x="460" y="265">21</text><text x="480" y="265">22</text><text x="500" y="265">23</text><text x="520" y="265">24</text><text x="540" y="265">25</text><text x="560" y="265">26</text><text x="580" y="265">27</text><text x="600" y="265">28</text><text x="620" y="265">29</text><text x="640" y="265">30</text><text x="660" y="265">31</text><text x="680" y="265">32</text>
            </g>

            <!-- Reihen a-e Beschriftung -->
            <g font-size="9" fill="#666" font-style="italic">
              <text x="36" y="282">a</text><text x="36" y="298">b</text><text x="36" y="314">c</text><text x="36" y="330">d</text><text x="36" y="346">e</text>
            </g>
            <!-- Loecher Reihen a-e (32 Punkte alle 20px) -->
            <g stroke="#aaa" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1,19.9" fill="none">
              <line x1="60" y1="278" x2="680" y2="278"/>
              <line x1="60" y1="294" x2="680" y2="294"/>
              <line x1="60" y1="310" x2="680" y2="310"/>
              <line x1="60" y1="326" x2="680" y2="326"/>
              <line x1="60" y1="342" x2="680" y2="342"/>
            </g>

            <!-- Mittelrinne -->
            <rect x="50" y="350" width="640" height="14" rx="2" fill="#d0c8b8"/>
            <text x="360" y="360" text-anchor="middle" font-size="7" fill="#aaa" font-style="italic">Mittelrinne (trennt obere und untere Hälfte)</text>

            <!-- Reihen f-j Beschriftung -->
            <g font-size="9" fill="#666" font-style="italic">
              <text x="36" y="376">f</text><text x="36" y="392">g</text><text x="36" y="408">h</text><text x="36" y="424">i</text><text x="36" y="440">j</text>
            </g>
            <!-- Loecher Reihen f-j -->
            <g stroke="#aaa" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1,19.9" fill="none">
              <line x1="60" y1="372" x2="680" y2="372"/>
              <line x1="60" y1="388" x2="680" y2="388"/>
              <line x1="60" y1="404" x2="680" y2="404"/>
              <line x1="60" y1="420" x2="680" y2="420"/>
              <line x1="60" y1="436" x2="680" y2="436"/>
            </g>

            <!-- Stromschienen unten (-GND, +5V) -->
            <rect x="50" y="455" width="640" height="10" rx="2" fill="#ddf" stroke="#00c" stroke-width="0.8"/>
            <text x="38" y="462" font-size="8" fill="#00c" font-weight="bold">−</text>
            <rect x="50" y="470" width="640" height="10" rx="2" fill="#fdd" stroke="#c00" stroke-width="0.8"/>
            <text x="38" y="477" font-size="8" fill="#c00" font-weight="bold">+</text>

            <!-- ============================================== -->
            <!-- ===== BAUTEILE: alle Widerstände + LEDs liegen HORIZONTAL zwischen 2 Spalten ===== -->
            <!-- Schema pro LED-Kreis (3 Spalten): -->
            <!--   Sp.N (Pin-Anschluss) → 220Ω horizontal → Sp.N+1 (Anode) → LED → Sp.N+2 (Kathode) → GND-Schiene -->
            <!-- ============================================== -->

            <!-- ===== AUTO-AMPEL Bereich (Sp.3-13) ===== -->
            <rect x="92" y="266" width="220" height="84" rx="4" fill="none" stroke="#e44" stroke-width="1" stroke-dasharray="4,2"/>
            <text x="200" y="200" text-anchor="middle" font-size="12" fill="#c44" font-weight="bold" stroke="white" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill">⬇ AUTO-AMPEL (3 LEDs)</text>

            <!-- AUTO-ROT (Sp.3 Pin → Sp.4 Anode → Sp.5 Kathode) -->
            <!-- Widerstand 220Ω horizontal Sp.3-4, Reihe c -->
            <rect x="98" y="306" width="24" height="8" rx="2" fill="#e8d0a0" stroke="#864" stroke-width="1"/>
            <line x1="104" y1="306" x2="104" y2="314" stroke="#c00" stroke-width="1.2"/>
            <line x1="109" y1="306" x2="109" y2="314" stroke="#c00" stroke-width="1.2"/>
            <line x1="114" y1="306" x2="114" y2="314" stroke="#a52" stroke-width="1.2"/>
            <line x1="118" y1="306" x2="118" y2="314" stroke="#fb0" stroke-width="1.2"/>
            <text x="110" y="304" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">220Ω</text>
            <circle cx="100" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <circle cx="120" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <!-- Bein-Linien: Sp.3 (Pin-Anschluss von Reihe e) und Sp.4 (zur LED-Anode in Reihe a) -->
            <line x1="100" y1="310" x2="100" y2="342" stroke="#864" stroke-width="1.5"/>
            <line x1="120" y1="310" x2="120" y2="282" stroke="#864" stroke-width="1.5"/>
            <!-- LED horizontal Sp.4 Anode → Sp.5 Kathode, Reihe a -->
            <polygon points="119,274 119,286 132,280" fill="#e00" stroke="#a00" stroke-width="1.2"/>
            <line x1="132" y1="274" x2="132" y2="286" stroke="#a00" stroke-width="2"/>
            <text x="125" y="262" text-anchor="middle" font-size="7" fill="#c00" font-weight="bold">ROT</text>
            <circle cx="120" cy="280" r="2.2" fill="#e00" stroke="#600" stroke-width="0.6"/>
            <circle cx="140" cy="280" r="2.2" fill="#864" stroke="#444" stroke-width="0.6"/>
            <line x1="140" y1="280" x2="140" y2="250" stroke="#333" stroke-width="1.5" stroke-dasharray="3,1.5"/>

            <!-- AUTO-GELB (Sp.7 Pin → Sp.8 Anode → Sp.9 Kathode) -->
            <rect x="178" y="306" width="24" height="8" rx="2" fill="#e8d0a0" stroke="#864" stroke-width="1"/>
            <line x1="184" y1="306" x2="184" y2="314" stroke="#c00" stroke-width="1.2"/>
            <line x1="189" y1="306" x2="189" y2="314" stroke="#c00" stroke-width="1.2"/>
            <line x1="194" y1="306" x2="194" y2="314" stroke="#a52" stroke-width="1.2"/>
            <line x1="198" y1="306" x2="198" y2="314" stroke="#fb0" stroke-width="1.2"/>
            <text x="190" y="304" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">220Ω</text>
            <circle cx="180" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <circle cx="200" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <line x1="180" y1="310" x2="180" y2="342" stroke="#864" stroke-width="1.5"/>
            <line x1="200" y1="310" x2="200" y2="282" stroke="#864" stroke-width="1.5"/>
            <polygon points="199,274 199,286 212,280" fill="#ee0" stroke="#aa0" stroke-width="1.2"/>
            <line x1="212" y1="274" x2="212" y2="286" stroke="#aa0" stroke-width="2"/>
            <text x="205" y="262" text-anchor="middle" font-size="7" fill="#aa0" font-weight="bold">GELB</text>
            <circle cx="200" cy="280" r="2.2" fill="#ee0" stroke="#660" stroke-width="0.6"/>
            <circle cx="220" cy="280" r="2.2" fill="#864" stroke="#444" stroke-width="0.6"/>
            <line x1="220" y1="280" x2="220" y2="250" stroke="#333" stroke-width="1.5" stroke-dasharray="3,1.5"/>

            <!-- AUTO-GRÜN (Sp.11 Pin → Sp.12 Anode → Sp.13 Kathode) -->
            <rect x="258" y="306" width="24" height="8" rx="2" fill="#e8d0a0" stroke="#864" stroke-width="1"/>
            <line x1="264" y1="306" x2="264" y2="314" stroke="#c00" stroke-width="1.2"/>
            <line x1="269" y1="306" x2="269" y2="314" stroke="#c00" stroke-width="1.2"/>
            <line x1="274" y1="306" x2="274" y2="314" stroke="#a52" stroke-width="1.2"/>
            <line x1="278" y1="306" x2="278" y2="314" stroke="#fb0" stroke-width="1.2"/>
            <text x="270" y="304" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">220Ω</text>
            <circle cx="260" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <circle cx="280" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <line x1="260" y1="310" x2="260" y2="342" stroke="#864" stroke-width="1.5"/>
            <line x1="280" y1="310" x2="280" y2="282" stroke="#864" stroke-width="1.5"/>
            <polygon points="279,274 279,286 292,280" fill="#0c0" stroke="#090" stroke-width="1.2"/>
            <line x1="292" y1="274" x2="292" y2="286" stroke="#090" stroke-width="2"/>
            <text x="285" y="262" text-anchor="middle" font-size="7" fill="#090" font-weight="bold">GRÜN</text>
            <circle cx="280" cy="280" r="2.2" fill="#0c0" stroke="#040" stroke-width="0.6"/>
            <circle cx="300" cy="280" r="2.2" fill="#864" stroke="#444" stroke-width="0.6"/>
            <line x1="300" y1="280" x2="300" y2="250" stroke="#333" stroke-width="1.5" stroke-dasharray="3,1.5"/>

            <!-- ===== FUSSGÄNGER-AMPEL Bereich (Sp.15-21) ===== -->
            <rect x="332" y="266" width="140" height="84" rx="4" fill="none" stroke="#66c" stroke-width="1" stroke-dasharray="4,2"/>
            <text x="402" y="200" text-anchor="middle" font-size="12" fill="#44a" font-weight="bold" stroke="white" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill">⬇ FUSSGÄNGER (2 LEDs)</text>

            <!-- F-ROT (Sp.15 Pin → Sp.16 Anode → Sp.17 Kathode) -->
            <rect x="338" y="306" width="24" height="8" rx="2" fill="#e8d0a0" stroke="#864" stroke-width="1"/>
            <line x1="344" y1="306" x2="344" y2="314" stroke="#c00" stroke-width="1.2"/>
            <line x1="349" y1="306" x2="349" y2="314" stroke="#c00" stroke-width="1.2"/>
            <line x1="354" y1="306" x2="354" y2="314" stroke="#a52" stroke-width="1.2"/>
            <line x1="358" y1="306" x2="358" y2="314" stroke="#fb0" stroke-width="1.2"/>
            <text x="350" y="304" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">220Ω</text>
            <circle cx="340" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <circle cx="360" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <line x1="340" y1="310" x2="340" y2="342" stroke="#864" stroke-width="1.5"/>
            <line x1="360" y1="310" x2="360" y2="282" stroke="#864" stroke-width="1.5"/>
            <polygon points="359,274 359,286 372,280" fill="#e00" stroke="#a00" stroke-width="1.2"/>
            <line x1="372" y1="274" x2="372" y2="286" stroke="#a00" stroke-width="2"/>
            <text x="365" y="262" text-anchor="middle" font-size="7" fill="#c00" font-weight="bold">F-ROT</text>
            <circle cx="360" cy="280" r="2.2" fill="#e00" stroke="#600" stroke-width="0.6"/>
            <circle cx="380" cy="280" r="2.2" fill="#864" stroke="#444" stroke-width="0.6"/>
            <line x1="380" y1="280" x2="380" y2="250" stroke="#333" stroke-width="1.5" stroke-dasharray="3,1.5"/>

            <!-- F-GRÜN (Sp.19 Pin → Sp.20 Anode → Sp.21 Kathode) -->
            <rect x="418" y="306" width="24" height="8" rx="2" fill="#e8d0a0" stroke="#864" stroke-width="1"/>
            <line x1="424" y1="306" x2="424" y2="314" stroke="#c00" stroke-width="1.2"/>
            <line x1="429" y1="306" x2="429" y2="314" stroke="#c00" stroke-width="1.2"/>
            <line x1="434" y1="306" x2="434" y2="314" stroke="#a52" stroke-width="1.2"/>
            <line x1="438" y1="306" x2="438" y2="314" stroke="#fb0" stroke-width="1.2"/>
            <text x="430" y="304" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">220Ω</text>
            <circle cx="420" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <circle cx="440" cy="310" r="2.2" fill="#e8d0a0" stroke="#864" stroke-width="0.8"/>
            <line x1="420" y1="310" x2="420" y2="342" stroke="#864" stroke-width="1.5"/>
            <line x1="440" y1="310" x2="440" y2="282" stroke="#864" stroke-width="1.5"/>
            <polygon points="439,274 439,286 452,280" fill="#0c0" stroke="#090" stroke-width="1.2"/>
            <line x1="452" y1="274" x2="452" y2="286" stroke="#090" stroke-width="2"/>
            <text x="445" y="262" text-anchor="middle" font-size="7" fill="#090" font-weight="bold">F-GRÜN</text>
            <circle cx="440" cy="280" r="2.2" fill="#0c0" stroke="#040" stroke-width="0.6"/>
            <circle cx="460" cy="280" r="2.2" fill="#864" stroke="#444" stroke-width="0.6"/>
            <line x1="460" y1="280" x2="460" y2="250" stroke="#333" stroke-width="1.5" stroke-dasharray="3,1.5"/>

            <!-- ===== TASTER (Sp.23-24, über Mittelrinne) ===== -->
            <rect x="488" y="334" width="44" height="60" rx="4" fill="none" stroke="#66f" stroke-width="1" stroke-dasharray="4,2"/>
            <text x="510" y="200" text-anchor="middle" font-size="12" fill="#44c" font-weight="bold" stroke="white" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill">⬇ TASTER</text>
            <rect x="494" y="340" width="32" height="42" rx="3" fill="#888" stroke="#555" stroke-width="1"/>
            <circle cx="510" cy="361" r="10" fill="#aaa" stroke="#666" stroke-width="1"/>
            <text x="510" y="364" text-anchor="middle" font-size="6" fill="#444">drücken</text>
            <!-- Beinchen: Sp.23 Reihe e (Pin 7) + Sp.24 Reihe f (zur GND-Schiene) -->
            <circle cx="500" cy="342" r="2.5" fill="#888" stroke="#444" stroke-width="0.8"/>
            <line x1="500" y1="342" x2="500" y2="340" stroke="#555" stroke-width="1.5"/>
            <circle cx="520" cy="372" r="2.5" fill="#888" stroke="#444" stroke-width="0.8"/>
            <line x1="520" y1="382" x2="520" y2="372" stroke="#555" stroke-width="1.5"/>
            <!-- Jumper Sp.24 Reihe f → untere -Schiene (GND) -->
            <line x1="520" y1="372" x2="520" y2="455" stroke="#333" stroke-width="1.5" stroke-dasharray="3,1.5"/>
            <text x="535" y="420" font-size="7" fill="#333" font-style="italic">→ untere</text>
            <text x="535" y="430" font-size="7" fill="#333" font-style="italic">    GND-Schiene</text>

            <!-- ===== LDR-SPANNUNGSTEILER (Sp.26-28) ===== -->
            <rect x="548" y="266" width="80" height="84" rx="4" fill="none" stroke="#f90" stroke-width="1" stroke-dasharray="4,2"/>
            <text x="588" y="200" text-anchor="middle" font-size="12" fill="#c60" font-weight="bold" stroke="white" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill">⬇ LDR-SENSOR</text>

            <!-- LDR horizontal: Anschluss A Sp.26 (x=560, Reihe a), Anschluss B Sp.27 (x=580, Reihe a) -->
            <ellipse cx="570" cy="280" rx="13" ry="8" fill="#ffe066" stroke="#c90" stroke-width="1.5"/>
            <text x="570" y="278" text-anchor="middle" font-size="6" fill="#864" font-weight="bold">LDR</text>
            <text x="570" y="286" text-anchor="middle" font-size="5" fill="#864">(Licht)</text>
            <!-- Sonnenstrahlen -->
            <line x1="556" y1="272" x2="552" y2="268" stroke="#c90" stroke-width="1"/>
            <line x1="570" y1="268" x2="570" y2="262" stroke="#c90" stroke-width="1"/>
            <line x1="584" y1="272" x2="588" y2="268" stroke="#c90" stroke-width="1"/>
            <circle cx="560" cy="280" r="2.2" fill="#864"/>
            <circle cx="580" cy="280" r="2.2" fill="#864"/>
            <!-- LDR-Bein A (Sp.26) → 5V-Schiene (Jumper) -->
            <line x1="560" y1="280" x2="560" y2="250" stroke="#c00" stroke-width="1.5" stroke-dasharray="3,1.5"/>

            <!-- A0-Knotenpunkt: Sp.27 ist die Bahn die mit LDR-B (Reihe a) UND Pin A0 (Reihe e) UND 10k-Bein 1 (Reihe c) verbunden ist -->
            <circle cx="580" cy="310" r="4" fill="#f90" stroke="#c60" stroke-width="1.2"/>
            <text x="580" y="304" text-anchor="middle" font-size="6.5" fill="#c60" font-weight="bold" stroke="white" stroke-width="2.5" stroke-linejoin="round" paint-order="stroke fill">A0-Knoten</text>

            <!-- 10kΩ Widerstand horizontal Sp.27-28, Reihe c -->
            <rect x="578" y="320" width="24" height="8" rx="2" fill="#c0a060" stroke="#864" stroke-width="1"/>
            <line x1="584" y1="320" x2="584" y2="328" stroke="#a52" stroke-width="1.2"/>
            <line x1="589" y1="320" x2="589" y2="328" stroke="#c00" stroke-width="1.2"/>
            <line x1="594" y1="320" x2="594" y2="328" stroke="#a52" stroke-width="1.2"/>
            <line x1="598" y1="320" x2="598" y2="328" stroke="#fb0" stroke-width="1.2"/>
            <text x="590" y="318" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">10kΩ</text>
            <circle cx="580" cy="324" r="2.2" fill="#c0a060" stroke="#864" stroke-width="0.8"/>
            <circle cx="600" cy="324" r="2.2" fill="#c0a060" stroke="#864" stroke-width="0.8"/>
            <line x1="600" y1="324" x2="600" y2="342" stroke="#864" stroke-width="1.5"/>
            <!-- Sp.28 Reihe e → untere -Schiene (10k zur Masse, durchgezogen blau) -->
            <line x1="600" y1="342" x2="600" y2="460" stroke="#1565C0" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="600" cy="342" r="3" fill="#1565C0" stroke="#0a3a78" stroke-width="0.8"/>
            <circle cx="600" cy="460" r="3.5" fill="#1565C0" stroke="#0a3a78" stroke-width="0.8"/>
            <text x="615" y="425" font-size="8" fill="#0a3a78" font-weight="bold">→ GND</text>

            <!-- ===== LEGENDE ===== -->
            <rect x="20" y="555" width="680" height="160" rx="6" fill="#f0f0f0" stroke="#ccc" stroke-width="1"/>
            <text x="32" y="578" font-size="11" fill="#333" font-weight="bold">Legende – Prüfungsschaltung komplett:</text>

            <!-- Zeile 1: Kabel-Farben -->
            <line x1="32" y1="600" x2="62" y2="600" stroke="#c00" stroke-width="3"/><text x="68" y="603" font-size="9" fill="#555">5V (rot)</text>
            <line x1="160" y1="600" x2="190" y2="600" stroke="#333" stroke-width="3"/><text x="196" y="603" font-size="9" fill="#555">GND (schwarz)</text>
            <line x1="300" y1="600" x2="330" y2="600" stroke="#e44" stroke-width="2.5"/><text x="336" y="603" font-size="9" fill="#555">LED-Rot-Signal</text>
            <line x1="450" y1="600" x2="480" y2="600" stroke="#cc0" stroke-width="2.5"/><text x="486" y="603" font-size="9" fill="#555">LED-Gelb-Signal</text>
            <line x1="580" y1="600" x2="610" y2="600" stroke="#0a0" stroke-width="2.5"/><text x="616" y="603" font-size="9" fill="#555">LED-Grün</text>

            <!-- Zeile 2 -->
            <line x1="32" y1="620" x2="62" y2="620" stroke="#66f" stroke-width="2.5"/><text x="68" y="623" font-size="9" fill="#555">Taster-Signal (Pin 7)</text>
            <line x1="230" y1="620" x2="260" y2="620" stroke="#f90" stroke-width="2.5"/><text x="266" y="623" font-size="9" fill="#555">A0 / LDR-Signal</text>
            <rect x="430" y="615" width="14" height="10" rx="1" fill="#e8d0a0" stroke="#986" stroke-width="0.8"/><text x="450" y="623" font-size="9" fill="#555">220Ω (5× für LEDs)</text>
            <rect x="600" y="615" width="14" height="10" rx="1" fill="#c0a060" stroke="#865" stroke-width="0.8"/><text x="620" y="623" font-size="9" fill="#555">10kΩ (LDR)</text>

            <!-- Zeile 3: Zusammenfassung -->
            <text x="32" y="650" font-size="9" fill="#444" font-weight="bold">Bauteile: 5 LEDs + 5× 220Ω + 1 Taster + 1 LDR + 1× 10kΩ</text>
            <text x="32" y="668" font-size="9" fill="#666">► Alle LED-Kathoden (−) gehen zur OBEREN −Schiene (GND).</text>
            <text x="32" y="684" font-size="9" fill="#666">► Taster zwischen Pin 7 und UNTERER −Schiene (INPUT_PULLUP, kein externer Widerstand).</text>
            <text x="32" y="700" font-size="9" fill="#666">► LDR-Spannungsteiler: 5V → LDR → A0-Knoten → 10kΩ → GND. Schwellenwert mit Serial Monitor kalibrieren!</text>
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
          <h3>Vom Breadboard zur gelöteten Schaltung</h3>
          <p>Der Code läuft – aber jetzt kommt der Schritt, der in der Prüfung wirklich zählt: <strong>Du musst deine Schaltung löten</strong>. Breadboards sind in der RSAP nicht erlaubt, weil Wackelkontakte die Funktion unzuverlässig machen.</p>

          <h4 style="margin-top:1.25rem;">Welche Platine? Lochraster oder Streifenraster?</h4>
          <p>Es gibt zwei verbreitete Typen. Für Schul-Projekte ist <strong>Streifenraster</strong> oft einfacher, weil schon Verbindungen vorbereitet sind:</p>

          <div style="margin:1rem 0; text-align:center;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" style="max-width:100%; height:auto; background:#f8f8f8; border:1px solid #ccc; border-radius:8px;">
              <!-- Linke Platte: Lochraster -->
              <text x="95" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Lochrasterplatine</text>
              <rect x="20" y="30" width="150" height="120" rx="4" fill="#d9b97a" stroke="#8a6e3c" stroke-width="1.5"/>
              <!-- Lochraster: 10 Spalten x 6 Reihen, Lochabstand 12 -->
              <g fill="#f5e8c8" stroke="#6a4d20" stroke-width="0.8">
                <!-- Reihen erzeugen -->
                <circle cx="35" cy="45" r="2.5"/><circle cx="50" cy="45" r="2.5"/><circle cx="65" cy="45" r="2.5"/><circle cx="80" cy="45" r="2.5"/><circle cx="95" cy="45" r="2.5"/><circle cx="110" cy="45" r="2.5"/><circle cx="125" cy="45" r="2.5"/><circle cx="140" cy="45" r="2.5"/><circle cx="155" cy="45" r="2.5"/>
                <circle cx="35" cy="60" r="2.5"/><circle cx="50" cy="60" r="2.5"/><circle cx="65" cy="60" r="2.5"/><circle cx="80" cy="60" r="2.5"/><circle cx="95" cy="60" r="2.5"/><circle cx="110" cy="60" r="2.5"/><circle cx="125" cy="60" r="2.5"/><circle cx="140" cy="60" r="2.5"/><circle cx="155" cy="60" r="2.5"/>
                <circle cx="35" cy="75" r="2.5"/><circle cx="50" cy="75" r="2.5"/><circle cx="65" cy="75" r="2.5"/><circle cx="80" cy="75" r="2.5"/><circle cx="95" cy="75" r="2.5"/><circle cx="110" cy="75" r="2.5"/><circle cx="125" cy="75" r="2.5"/><circle cx="140" cy="75" r="2.5"/><circle cx="155" cy="75" r="2.5"/>
                <circle cx="35" cy="90" r="2.5"/><circle cx="50" cy="90" r="2.5"/><circle cx="65" cy="90" r="2.5"/><circle cx="80" cy="90" r="2.5"/><circle cx="95" cy="90" r="2.5"/><circle cx="110" cy="90" r="2.5"/><circle cx="125" cy="90" r="2.5"/><circle cx="140" cy="90" r="2.5"/><circle cx="155" cy="90" r="2.5"/>
                <circle cx="35" cy="105" r="2.5"/><circle cx="50" cy="105" r="2.5"/><circle cx="65" cy="105" r="2.5"/><circle cx="80" cy="105" r="2.5"/><circle cx="95" cy="105" r="2.5"/><circle cx="110" cy="105" r="2.5"/><circle cx="125" cy="105" r="2.5"/><circle cx="140" cy="105" r="2.5"/><circle cx="155" cy="105" r="2.5"/>
                <circle cx="35" cy="120" r="2.5"/><circle cx="50" cy="120" r="2.5"/><circle cx="65" cy="120" r="2.5"/><circle cx="80" cy="120" r="2.5"/><circle cx="95" cy="120" r="2.5"/><circle cx="110" cy="120" r="2.5"/><circle cx="125" cy="120" r="2.5"/><circle cx="140" cy="120" r="2.5"/><circle cx="155" cy="120" r="2.5"/>
              </g>
              <text x="95" y="170" text-anchor="middle" font-size="9" fill="#555">Jedes Loch einzeln –</text>
              <text x="95" y="183" text-anchor="middle" font-size="9" fill="#555">Verbindungen mit Drahtbrücken</text>

              <!-- Rechte Platte: Streifenraster -->
              <text x="305" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Streifenrasterplatine</text>
              <rect x="230" y="30" width="150" height="120" rx="4" fill="#d9b97a" stroke="#8a6e3c" stroke-width="1.5"/>
              <!-- Kupferstreifen horizontal -->
              <g fill="#c87a3a" stroke="#8a3e10" stroke-width="0.5" opacity="0.7">
                <rect x="232" y="42" width="146" height="6" rx="2"/>
                <rect x="232" y="57" width="146" height="6" rx="2"/>
                <rect x="232" y="72" width="146" height="6" rx="2"/>
                <rect x="232" y="87" width="146" height="6" rx="2"/>
                <rect x="232" y="102" width="146" height="6" rx="2"/>
                <rect x="232" y="117" width="146" height="6" rx="2"/>
              </g>
              <!-- Löcher in Streifen -->
              <g fill="#f5e8c8" stroke="#6a4d20" stroke-width="0.6">
                <circle cx="245" cy="45" r="2.2"/><circle cx="260" cy="45" r="2.2"/><circle cx="275" cy="45" r="2.2"/><circle cx="290" cy="45" r="2.2"/><circle cx="305" cy="45" r="2.2"/><circle cx="320" cy="45" r="2.2"/><circle cx="335" cy="45" r="2.2"/><circle cx="350" cy="45" r="2.2"/><circle cx="365" cy="45" r="2.2"/>
                <circle cx="245" cy="60" r="2.2"/><circle cx="260" cy="60" r="2.2"/><circle cx="275" cy="60" r="2.2"/><circle cx="290" cy="60" r="2.2"/><circle cx="305" cy="60" r="2.2"/><circle cx="320" cy="60" r="2.2"/><circle cx="335" cy="60" r="2.2"/><circle cx="350" cy="60" r="2.2"/><circle cx="365" cy="60" r="2.2"/>
                <circle cx="245" cy="75" r="2.2"/><circle cx="260" cy="75" r="2.2"/><circle cx="275" cy="75" r="2.2"/><circle cx="290" cy="75" r="2.2"/><circle cx="305" cy="75" r="2.2"/><circle cx="320" cy="75" r="2.2"/><circle cx="335" cy="75" r="2.2"/><circle cx="350" cy="75" r="2.2"/><circle cx="365" cy="75" r="2.2"/>
                <circle cx="245" cy="90" r="2.2"/><circle cx="260" cy="90" r="2.2"/><circle cx="275" cy="90" r="2.2"/><circle cx="290" cy="90" r="2.2"/><circle cx="305" cy="90" r="2.2"/><circle cx="320" cy="90" r="2.2"/><circle cx="335" cy="90" r="2.2"/><circle cx="350" cy="90" r="2.2"/><circle cx="365" cy="90" r="2.2"/>
                <circle cx="245" cy="105" r="2.2"/><circle cx="260" cy="105" r="2.2"/><circle cx="275" cy="105" r="2.2"/><circle cx="290" cy="105" r="2.2"/><circle cx="305" cy="105" r="2.2"/><circle cx="320" cy="105" r="2.2"/><circle cx="335" cy="105" r="2.2"/><circle cx="350" cy="105" r="2.2"/><circle cx="365" cy="105" r="2.2"/>
                <circle cx="245" cy="120" r="2.2"/><circle cx="260" cy="120" r="2.2"/><circle cx="275" cy="120" r="2.2"/><circle cx="290" cy="120" r="2.2"/><circle cx="305" cy="120" r="2.2"/><circle cx="320" cy="120" r="2.2"/><circle cx="335" cy="120" r="2.2"/><circle cx="350" cy="120" r="2.2"/><circle cx="365" cy="120" r="2.2"/>
              </g>
              <!-- Hinweispfeil auf eine Reihe -->
              <text x="395" y="78" font-size="9" fill="#8a3e10" font-weight="bold">→</text>
              <text x="305" y="170" text-anchor="middle" font-size="9" fill="#555">Eine Reihe = ein Kupferstreifen.</text>
              <text x="305" y="183" text-anchor="middle" font-size="9" fill="#555">Alle 9 Löcher schon verbunden!</text>
            </svg>
          </div>

          <p><strong>Was heißt das beim Übertragen vom Breadboard?</strong> Beim Streifenraster musst du an manchen Stellen <strong>einen Streifen unterbrechen</strong>, weil sonst zwei Bauteile, die getrennt sein sollen, kurzgeschlossen wären. Dafür gibt es einen <em>Streifentrenner</em> (kleiner Bohrer, der den Kupferstreifen zwischen zwei Löchern auftrennt) oder du nimmst einfach einen scharfen Cuttermesser.</p>

          <h4 style="margin-top:1.5rem;">Werkzeug- und Materialliste</h4>
          <table class="icon-table">
            <tr><th>Werkzeug / Material</th><th>Was machst du damit?</th></tr>
            <tr><td>Lötkolben 30–40 Watt mit Temperaturregelung</td><td>Erhitzt Lötpad und Bauteilbein. <strong>320 °C</strong> für bleihaltiges Lot (60/40), <strong>340–360 °C</strong> für bleifreies Lot.</td></tr>
            <tr><td>Lötzinn 0,8 mm</td><td>Schmilzt durch den heißen Kolben und verbindet Pad + Bein. In der Schule meist bleihaltig (60 % Zinn, 40 % Blei) – schmilzt einfacher und niedriger.</td></tr>
            <tr><td>Streifenraster- oder Lochrasterplatine</td><td>Trägerplatine deiner Schaltung</td></tr>
            <tr><td>Seitenschneider</td><td>Knipst überstehende Bauteilbeine ab (nach dem Löten)</td></tr>
            <tr><td>Entlötlitze oder Entlötpumpe</td><td>Falls du dich verlötest – entfernt überschüssiges Lot</td></tr>
            <tr><td>Schaltdraht (isoliert, 0,5 mm²)</td><td>Drahtbrücken auf der Platine, Verbindung zum Arduino</td></tr>
            <tr><td>Multimeter</td><td>Durchgangsprüfung VOR dem Anschließen an den Arduino!</td></tr>
            <tr><td>Streifentrenner oder Cuttermesser</td><td>Unterbricht Kupferstreifen bei Streifenraster</td></tr>
          </table>

          <h4 style="margin-top:1.5rem;">Der Lötvorgang Schritt für Schritt</h4>
          <div style="margin:1rem 0; text-align:center;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180" style="max-width:100%; height:auto; background:#f8f8f8; border:1px solid #ccc; border-radius:8px;">
              <!-- Schritt 1: Bauteil platziert -->
              <text x="65" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">1. Platzieren</text>
              <!-- Platine seitlich -->
              <rect x="20" y="90" width="90" height="14" fill="#d9b97a" stroke="#8a6e3c" stroke-width="1"/>
              <!-- Lötpad oben -->
              <ellipse cx="65" cy="90" rx="7" ry="3" fill="#c87a3a" stroke="#8a3e10" stroke-width="0.5"/>
              <!-- Bauteilkörper oben -->
              <rect x="50" y="40" width="30" height="14" rx="2" fill="#3a5a8a" stroke="#1a3a6a" stroke-width="0.6"/>
              <text x="65" y="50" text-anchor="middle" font-size="6" fill="#fff">Bauteil</text>
              <!-- Bauteilbein durch Pad -->
              <line x1="65" y1="54" x2="65" y2="115" stroke="#888" stroke-width="1.4"/>
              <text x="65" y="170" text-anchor="middle" font-size="8" fill="#555">Bein durch Loch stecken</text>

              <!-- Schritt 2: Erhitzen -->
              <text x="195" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">2. Erhitzen</text>
              <rect x="150" y="90" width="90" height="14" fill="#d9b97a" stroke="#8a6e3c" stroke-width="1"/>
              <ellipse cx="195" cy="90" rx="7" ry="3" fill="#c87a3a" stroke="#8a3e10" stroke-width="0.5"/>
              <rect x="180" y="40" width="30" height="14" rx="2" fill="#3a5a8a" stroke="#1a3a6a" stroke-width="0.6"/>
              <text x="195" y="50" text-anchor="middle" font-size="6" fill="#fff">Bauteil</text>
              <line x1="195" y1="54" x2="195" y2="115" stroke="#888" stroke-width="1.4"/>
              <!-- Lötkolben (schräg von links) -->
              <polygon points="148,100 172,92 178,98 152,108" fill="#666" stroke="#333" stroke-width="0.5"/>
              <polygon points="172,92 188,87 192,93 178,98" fill="#c33" stroke="#811" stroke-width="0.5"/>
              <text x="190" y="95" font-size="6" fill="#811">Spitze</text>
              <!-- Hitzewellen -->
              <text x="195" y="118" text-anchor="middle" font-size="10" fill="#c33">∿</text>
              <text x="195" y="170" text-anchor="middle" font-size="8" fill="#555">Kolben 1 Sek. auf Pad+Bein</text>

              <!-- Schritt 3: Lot zuführen -->
              <text x="325" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">3. Lot zuführen</text>
              <rect x="280" y="90" width="90" height="14" fill="#d9b97a" stroke="#8a6e3c" stroke-width="1"/>
              <ellipse cx="325" cy="90" rx="7" ry="3" fill="#c87a3a" stroke="#8a3e10" stroke-width="0.5"/>
              <rect x="310" y="40" width="30" height="14" rx="2" fill="#3a5a8a" stroke="#1a3a6a" stroke-width="0.6"/>
              <text x="325" y="50" text-anchor="middle" font-size="6" fill="#fff">Bauteil</text>
              <line x1="325" y1="54" x2="325" y2="115" stroke="#888" stroke-width="1.4"/>
              <!-- Lot von rechts -->
              <line x1="380" y1="60" x2="338" y2="88" stroke="#aaa" stroke-width="1.4"/>
              <text x="370" y="55" font-size="7" fill="#666">Lot</text>
              <!-- Geschmolzene Lötstelle (Kegel) -->
              <polygon points="318,90 332,90 325,82" fill="#ddd" stroke="#888" stroke-width="0.5"/>
              <text x="325" y="170" text-anchor="middle" font-size="8" fill="#555">Lot von gegenüber zuführen</text>

              <!-- Schritt 4: Aushärten + abknipsen -->
              <text x="455" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">4. Fertig</text>
              <rect x="410" y="90" width="90" height="14" fill="#d9b97a" stroke="#8a6e3c" stroke-width="1"/>
              <ellipse cx="455" cy="90" rx="7" ry="3" fill="#c87a3a" stroke="#8a3e10" stroke-width="0.5"/>
              <rect x="440" y="40" width="30" height="14" rx="2" fill="#3a5a8a" stroke="#1a3a6a" stroke-width="0.6"/>
              <text x="455" y="50" text-anchor="middle" font-size="6" fill="#fff">Bauteil</text>
              <line x1="455" y1="54" x2="455" y2="92" stroke="#888" stroke-width="1.4"/>
              <!-- Fertiger Lötkegel, glänzend silbrig -->
              <polygon points="446,93 464,93 455,80" fill="#e8e8e8" stroke="#666" stroke-width="0.6"/>
              <ellipse cx="453" cy="86" rx="1.5" ry="3" fill="#fff" opacity="0.7"/>
              <text x="455" y="170" text-anchor="middle" font-size="8" fill="#555">Bein abknipsen, Kontrolle</text>
            </svg>
          </div>

          <ol class="step-list">
            <li><strong>Bauteil platzieren:</strong> Stecke die Beine von oben durch die Löcher, so dass das Bauteil bündig auf der Platine sitzt. Beine auf der Lötseite leicht spreizen, damit es beim Drehen nicht herausfällt.</li>
            <li><strong>Erhitzen:</strong> Lege die Lötkolbenspitze gleichzeitig auf Lötpad und Bauteilbein. Halte ca. 1 Sekunde – beides muss heiß sein, damit das Lot anständig fließt.</li>
            <li><strong>Lot zuführen:</strong> Führe das Lötzinn von der <em>gegenüberliegenden</em> Seite zur Spitze. Das Lot schmilzt, breitet sich aus, bildet einen kleinen Kegel. <strong>Nicht zu viel!</strong> Eine Lötstelle braucht etwa 1–2 mm Lot, nicht einen Klumpen.</li>
            <li><strong>Reihenfolge wichtig:</strong> Erst das Lot wegnehmen, dann den Kolben. Sonst reißt das Lot ab und es entsteht eine schlechte Verbindung.</li>
            <li><strong>Aushärten:</strong> 2–3 Sekunden nicht bewegen! Das Lot muss erstarren, sonst wird die Stelle "kalt" (siehe unten).</li>
            <li><strong>Abknipsen:</strong> Mit dem Seitenschneider den überstehenden Bein-Rest direkt an der Lötstelle abknipsen. Augen schützen – die Stücke springen weg!</li>
            <li><strong>Sichtprüfung &amp; Multimeter:</strong> Jede Stelle ansehen (Kegelform? Glänzend?) und mit dem Multimeter Durchgangstöne prüfen, BEVOR du den Arduino anschließt.</li>
          </ol>

          <h4 style="margin-top:1.5rem;">Kalte Lötstelle vs. saubere Lötstelle – wie erkennst du den Unterschied?</h4>
          <p>Das ist der Klassiker, an dem 80 % der Schul-Schaltungen scheitern. Eine kalte Lötstelle <strong>sieht nach Lot aus</strong>, leitet aber nicht. Du suchst dich tot.</p>

          <div style="margin:1rem 0; text-align:center;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" style="max-width:100%; height:auto; background:#f8f8f8; border:1px solid #ccc; border-radius:8px;">
              <!-- Linke Seite: KALT -->
              <text x="80" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#c33">KALT</text>
              <rect x="20" y="90" width="120" height="16" fill="#d9b97a" stroke="#8a6e3c" stroke-width="1"/>
              <!-- Pad -->
              <ellipse cx="80" cy="90" rx="14" ry="4" fill="#c87a3a" stroke="#8a3e10" stroke-width="0.6"/>
              <!-- Bein -->
              <line x1="80" y1="40" x2="80" y2="120" stroke="#888" stroke-width="1.6"/>
              <!-- Lötzinn klumpig, matt, mit Spalt -->
              <path d="M 64 90 Q 60 75 80 70 Q 100 75 96 90 L 92 95 L 88 92 L 84 96 L 80 92 L 76 95 L 72 92 L 68 95 Z" fill="#9a9a9a" stroke="#555" stroke-width="0.5"/>
              <!-- Spalt zwischen Pad und Lot -->
              <line x1="66" y1="88" x2="70" y2="86" stroke="#222" stroke-width="0.7"/>
              <line x1="94" y1="88" x2="90" y2="86" stroke="#222" stroke-width="0.7"/>
              <!-- Annotation -->
              <text x="80" y="40" text-anchor="middle" font-size="8" fill="#c33">⚠</text>
              <text x="155" y="80" font-size="8" fill="#c33" font-weight="bold">Spalt!</text>
              <line x1="100" y1="86" x2="150" y2="80" stroke="#c33" stroke-width="0.6"/>
              <!-- Beschriftung -->
              <text x="80" y="140" text-anchor="middle" font-size="8" fill="#555">grau / matt / klumpig</text>
              <text x="80" y="153" text-anchor="middle" font-size="8" fill="#555">Lot haftet nicht am Pad</text>
              <text x="80" y="168" text-anchor="middle" font-size="8" fill="#c33" font-weight="bold">leitet schlecht oder gar nicht</text>

              <!-- Trenner -->
              <line x1="160" y1="35" x2="160" y2="170" stroke="#ccc" stroke-width="1" stroke-dasharray="3,2"/>

              <!-- Rechte Seite: SAUBER -->
              <text x="240" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#393">SAUBER</text>
              <rect x="180" y="90" width="120" height="16" fill="#d9b97a" stroke="#8a6e3c" stroke-width="1"/>
              <ellipse cx="240" cy="90" rx="14" ry="4" fill="#c87a3a" stroke="#8a3e10" stroke-width="0.6"/>
              <line x1="240" y1="40" x2="240" y2="120" stroke="#888" stroke-width="1.6"/>
              <!-- Sauberer Lötkegel, silbrig glänzend -->
              <path d="M 226 90 Q 240 60 254 90 Z" fill="#e8e8e8" stroke="#666" stroke-width="0.6"/>
              <!-- Glanzlicht -->
              <ellipse cx="236" cy="78" rx="1.5" ry="4" fill="#fff" opacity="0.8"/>
              <!-- Beschriftung -->
              <text x="240" y="140" text-anchor="middle" font-size="8" fill="#555">silbrig / glänzend / kegelförmig</text>
              <text x="240" y="153" text-anchor="middle" font-size="8" fill="#555">Lot umschließt Bein und Pad</text>
              <text x="240" y="168" text-anchor="middle" font-size="8" fill="#393" font-weight="bold">perfekte Verbindung</text>
            </svg>
          </div>

          <p><strong>Faustregel:</strong> Wenn deine Lötstelle aussieht wie eine kleine <em>Kuppel</em> oder ein <em>Berg mit spitzem Gipfel</em>, ist sie meist kalt. Eine gute Lötstelle ist <em>kegelförmig</em>, glänzt silbrig und du siehst, dass das Lot bis zur Padkante reicht. Wenn unsicher: Nochmal heiß machen, frisches Lot dazu, kurz halten.</p>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Andere Pool-Aufgaben am Beispiel</h3>
          <p>Die Ampel oben ist nur <strong>eine von 12 Aufgaben</strong>, die in der RSAP drankommen können. Du weißt vorher nicht, welche du bekommst. Damit du das Muster beherrschst, gehen wir zwei weitere Pool-Aufgaben durch – kompakter, ohne komplettes Schaltbild. Die Tiefe für die Einzel-Bauteile findest du in den verlinkten Vorgängerlektionen.</p>

          <h4 style="margin-top:1.25rem;">Showcase 5a: Gewächshaus-Steuerung (Bautechnik)</h4>
          <p><strong>Aufgabenbeschreibung:</strong> Im Gewächshaus misst ein NTC die Innentemperatur. Bei zu warmer Luft öffnet ein Servo das Dachfenster. Bei zu kalter Luft schaltet eine Glühlampe als Heizung an.</p>

          <div style="margin:1rem 0; text-align:center;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 260" style="max-width:100%; height:auto; background:#f0f8e8; border:2px dashed #6a8d4d; border-radius:8px;">
              <!-- WIRKPRINZIP-BANNER (klar abgrenzen von echtem Schaltbild) -->
              <rect x="0" y="0" width="440" height="18" fill="#6a8d4d"/>
              <text x="220" y="13" text-anchor="middle" font-size="9" fill="white" font-weight="bold">WIRKPRINZIP – zeigt WAS passiert, nicht WIE verkabelt wird</text>

              <!-- Boden -->
              <rect x="20" y="200" width="280" height="20" fill="#8a6a3a" stroke="#5a3e1c" stroke-width="0.8"/>
              <text x="160" y="215" text-anchor="middle" font-size="7" fill="#fff">Erdboden mit Pflanzen</text>

              <!-- Gewaechshaus-Struktur: schraege Daecher -->
              <polygon points="40,200 40,120 160,60 280,120 280,200" fill="#e8f4ff" fill-opacity="0.5" stroke="#558" stroke-width="1.5"/>
              <!-- Glas-Streben -->
              <line x1="40" y1="120" x2="280" y2="120" stroke="#558" stroke-width="0.8"/>
              <line x1="160" y1="60" x2="160" y2="200" stroke="#558" stroke-width="0.4" stroke-dasharray="2,2"/>
              <line x1="40" y1="200" x2="40" y2="120" stroke="#558" stroke-width="0.8"/>
              <line x1="280" y1="200" x2="280" y2="120" stroke="#558" stroke-width="0.8"/>

              <!-- Dachfenster (Klappe halboffen, rechts oben) -->
              <polygon points="160,60 220,90 220,75 160,45" fill="#aacfe8" stroke="#446" stroke-width="0.8"/>
              <text x="195" y="68" font-size="7" fill="#224" font-weight="bold">FENSTER</text>

              <!-- Servo (auf dem Dachrahmen, klein) -->
              <rect x="218" y="83" width="14" height="10" rx="1" fill="#222" stroke="#000" stroke-width="0.5"/>
              <circle cx="225" cy="88" r="3" fill="#888"/>
              <text x="225" y="103" text-anchor="middle" font-size="6" fill="#333" font-weight="bold">Servo</text>
              <!-- Verbindung Servo zu Fenster -->
              <line x1="225" y1="85" x2="220" y2="78" stroke="#666" stroke-width="0.8" stroke-dasharray="1,1"/>

              <!-- Gluehlampe oben in der Mitte (Heizung) -->
              <circle cx="160" cy="100" r="11" fill="#ffe066" stroke="#aa6" stroke-width="1"/>
              <line x1="160" y1="111" x2="160" y2="120" stroke="#666" stroke-width="1.5"/>
              <text x="160" y="103" text-anchor="middle" font-size="6" fill="#660" font-weight="bold">LAMPE</text>
              <!-- Lichtstrahlen -->
              <line x1="148" y1="92" x2="142" y2="86" stroke="#cc6" stroke-width="0.6"/>
              <line x1="172" y1="92" x2="178" y2="86" stroke="#cc6" stroke-width="0.6"/>
              <line x1="160" y1="86" x2="160" y2="80" stroke="#cc6" stroke-width="0.6"/>

              <!-- NTC im Inneren (an Strebe) -->
              <rect x="80" y="155" width="14" height="8" rx="1" fill="#445" stroke="#223" stroke-width="0.4"/>
              <text x="87" y="161" text-anchor="middle" font-size="5" fill="#fff" font-weight="bold">NTC</text>
              <text x="87" y="173" text-anchor="middle" font-size="6" fill="#333">Temperatur</text>

              <!-- Pflanze als Symbol, sitzt auf dem Boden -->
              <line x1="220" y1="200" x2="220" y2="192" stroke="#252" stroke-width="1.5"/>
              <ellipse cx="220" cy="190" rx="8" ry="4" fill="#393"/>

              <!-- Arduino-Box rechts -->
              <rect x="330" y="80" width="90" height="100" rx="6" fill="#2176AE" stroke="#1a5f8a" stroke-width="1.5"/>
              <text x="375" y="98" text-anchor="middle" font-size="10" fill="white" font-weight="bold">Arduino</text>
              <text x="375" y="111" text-anchor="middle" font-size="6" fill="#aad">Steuerung</text>

              <!-- Pin-Labels mit Kategorie (Eingang/Ausgang) -->
              <text x="353" y="118" text-anchor="middle" font-size="5" fill="#aad" font-style="italic">Eingang (analog):</text>
              <rect x="336" y="120" width="35" height="9" rx="1" fill="#e8a"/>
              <text x="353" y="127" text-anchor="middle" font-size="6" fill="white" font-weight="bold">A0 ← NTC</text>
              <text x="353" y="140" text-anchor="middle" font-size="5" fill="#aad" font-style="italic">Ausgänge (digital):</text>
              <rect x="336" y="142" width="35" height="9" rx="1" fill="#8ae"/>
              <text x="353" y="149" text-anchor="middle" font-size="6" fill="white" font-weight="bold">Pin 9 → Servo</text>
              <rect x="336" y="154" width="35" height="9" rx="1" fill="#8ae"/>
              <text x="353" y="161" text-anchor="middle" font-size="6" fill="white" font-weight="bold">Pin 7 → Lampe</text>

              <!-- Verbindungspfeile: ALLE links von Pin-Boxen abgehend (elektrisch korrekt) -->
              <!-- NTC → A0 (Sensor liefert Wert) -->
              <path d="M 94 159 Q 200 180 336 124" fill="none" stroke="#a44" stroke-width="1.2" stroke-dasharray="3,2"/>
              <polygon points="333,121 339,121 336,127" fill="#a44"/>
              <!-- Pin 9 → Servo (Arduino steuert) -->
              <path d="M 336 146 Q 280 110 232 88" fill="none" stroke="#446" stroke-width="1.2" stroke-dasharray="3,2"/>
              <polygon points="229,85 235,85 232,91" fill="#446"/>
              <!-- Pin 7 → Lampe (Arduino steuert) -->
              <path d="M 336 158 Q 240 160 160 110" fill="none" stroke="#660" stroke-width="1.2" stroke-dasharray="3,2"/>
              <polygon points="157,107 163,107 160,113" fill="#660"/>

              <!-- Legende unten -->
              <text x="220" y="245" text-anchor="middle" font-size="8" fill="#555" font-style="italic">Wirkprinzip: NTC misst Temperatur &rarr; Arduino entscheidet &rarr; Servo oder Lampe reagiert</text>
            </svg>
          </div>

          <table class="icon-table">
            <tr><th>Bauteil</th><th>Anschluss</th></tr>
            <tr><td>Festwiderstand 10 kOhm</td><td>5V &rarr; A0 (oben im Spannungsteiler, Konvention aus L16)</td></tr>
            <tr><td>NTC (10 kOhm bei 25 &deg;C)</td><td>A0 &rarr; GND (unten im Spannungsteiler)</td></tr>
            <tr><td>Servomotor (SG90)</td><td>Signal &rarr; Pin 9 (PWM), Rot &rarr; 5V, Braun/Schwarz &rarr; GND</td></tr>
            <tr><td>Glühlampe über <strong>Relais-Modul</strong></td><td>Relais = elektronischer Schalter, der mit einem 5-V-Signal vom Arduino eine getrennte Last (z.&nbsp;B. 230 V) schaltet. Steuersignal &rarr; Pin 7. <strong>Wichtig:</strong> Die Glühlampe hängt an der <em>getrennten Lastseite</em> des Relais, niemals direkt am Arduino-Pin!</td></tr>
          </table>

          <div class="code-card">
            <h4>GEWAECHSHAUS-SKELETT</h4>
            <pre><code><span class="comment">// Pins</span>
<span class="keyword">int</span> ntcPin    = A0;
<span class="keyword">int</span> servoPin  = <span class="value">9</span>;
<span class="keyword">int</span> lampePin  = <span class="value">7</span>;

<span class="comment">// Schwellenwerte (Rohwerte vom Spannungsteiler, mit Serial Monitor kalibrieren!)</span>
<span class="comment">// NTC unten am GND, Festwiderstand 10k oben an 5V (Konvention aus L16):</span>
<span class="comment">//   warm  =&gt; NTC-Widerstand sinkt =&gt; analogRead-Wert sinkt</span>
<span class="comment">//   kalt  =&gt; NTC-Widerstand steigt =&gt; analogRead-Wert steigt</span>
<span class="keyword">int</span> SCHWELLE_HEISS = <span class="value">450</span>;  <span class="comment">// Wert UNTER 450 = warm = Fenster auf</span>
<span class="keyword">int</span> SCHWELLE_KALT  = <span class="value">700</span>;  <span class="comment">// Wert UEBER 700 = kalt = Lampe an</span>

<span class="preprocessor">#include</span> <span class="string">&lt;Servo.h&gt;</span>
Servo dachFenster;

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(lampePin, OUTPUT);
  dachFenster.<span class="function">attach</span>(servoPin);
  dachFenster.<span class="function">write</span>(<span class="value">10</span>);  <span class="comment">// Fenster zu beim Start (10&deg; statt 0&deg; vermeidet Brummen)</span>
  <span class="function">Serial.begin</span>(<span class="value">9600</span>);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="keyword">int</span> temp = <span class="function">analogRead</span>(ntcPin);
  <span class="function">Serial.println</span>(temp);

  <span class="keyword">if</span> (temp &lt; SCHWELLE_HEISS) {
    dachFenster.<span class="function">write</span>(<span class="value">90</span>);          <span class="comment">// Fenster auf</span>
    <span class="function">digitalWrite</span>(lampePin, LOW);
  } <span class="keyword">else</span> <span class="keyword">if</span> (temp &gt; SCHWELLE_KALT) {
    dachFenster.<span class="function">write</span>(<span class="value">10</span>);          <span class="comment">// Fenster zu</span>
    <span class="function">digitalWrite</span>(lampePin, HIGH);       <span class="comment">// Heizen (Pin 7 schaltet Relais!)</span>
  } <span class="keyword">else</span> {
    dachFenster.<span class="function">write</span>(<span class="value">10</span>);          <span class="comment">// Wohlfuehlzone: alles aus</span>
    <span class="function">digitalWrite</span>(lampePin, LOW);
  }
  <span class="function">delay</span>(<span class="value">500</span>);
}</code></pre>
          </div>

          <p><strong>Wenn dich dieses Projekt erwartet, schaue in:</strong> Lektion 16 (NTC verstehen und auslesen) und Lektion 19 (Servomotor ansteuern). Die Schwellwerte musst du in der Prüfung selbst kalibrieren.</p>

          <h4 style="margin-top:1.5rem;">Showcase 5b: Lüftungs-Steuerung (Bautechnik)</h4>
          <p><strong>Aufgabenbeschreibung:</strong> Ein Lüfter (DC-Motor) wird per Taster ein- und ausgeschaltet. Zusätzlich misst ein NTC die Raumtemperatur und schaltet bei Überhitzung automatisch auf volle Drehzahl.</p>

          <div style="margin:1rem 0; text-align:center;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 260" style="max-width:100%; height:auto; background:#eef0f5; border:2px dashed #6a8d4d; border-radius:8px;">
              <!-- WIRKPRINZIP-BANNER -->
              <rect x="0" y="0" width="440" height="18" fill="#6a8d4d"/>
              <text x="220" y="13" text-anchor="middle" font-size="9" fill="white" font-weight="bold">WIRKPRINZIP – zeigt WAS passiert, nicht WIE verkabelt wird</text>

              <!-- Raum-Outline -->
              <rect x="20" y="40" width="280" height="180" fill="#fafafa" stroke="#666" stroke-width="1.5"/>
              <text x="160" y="55" text-anchor="middle" font-size="8" fill="#888" font-style="italic">Raum</text>

              <!-- Decke -->
              <line x1="20" y1="65" x2="300" y2="65" stroke="#aaa" stroke-width="0.6"/>

              <!-- DC-Motor mit Luefter-Fluegeln, hängt an Decke -->
              <line x1="160" y1="65" x2="160" y2="90" stroke="#444" stroke-width="1.5"/>
              <circle cx="160" cy="95" r="8" fill="#333" stroke="#000" stroke-width="0.8"/>
              <text x="160" y="98" text-anchor="middle" font-size="5" fill="#fff" font-weight="bold">DC</text>
              <!-- Fluegel (drei Streben in 120-Grad-Anordnung, visualisiert die Drehung) -->
              <ellipse cx="160" cy="95" rx="32" ry="3.5" fill="#888" stroke="#444" stroke-width="0.5" opacity="0.6"/>
              <ellipse cx="160" cy="95" rx="32" ry="3.5" fill="#888" stroke="#444" stroke-width="0.5" opacity="0.45" transform="rotate(60 160 95)"/>
              <ellipse cx="160" cy="95" rx="32" ry="3.5" fill="#888" stroke="#444" stroke-width="0.5" opacity="0.45" transform="rotate(-60 160 95)"/>
              <text x="160" y="143" text-anchor="middle" font-size="8" fill="#333" font-weight="bold">Lüfter</text>

              <!-- Luftpfeile nach unten -->
              <path d="M 130 145 L 130 175 M 125 170 L 130 178 L 135 170" fill="none" stroke="#46a" stroke-width="1.2"/>
              <path d="M 190 145 L 190 175 M 185 170 L 190 178 L 195 170" fill="none" stroke="#46a" stroke-width="1.2"/>
              <path d="M 160 150 L 160 180 M 155 175 L 160 183 L 165 175" fill="none" stroke="#46a" stroke-width="1.2"/>

              <!-- NTC an der Wand -->
              <rect x="55" y="155" width="14" height="8" rx="1" fill="#445" stroke="#223" stroke-width="0.4"/>
              <text x="62" y="161" text-anchor="middle" font-size="5" fill="#fff" font-weight="bold">NTC</text>
              <text x="62" y="173" text-anchor="middle" font-size="6" fill="#333">Temperatur</text>

              <!-- Taster an Wand rechts -->
              <rect x="255" y="155" width="20" height="14" rx="2" fill="#888" stroke="#555" stroke-width="0.6"/>
              <circle cx="265" cy="162" r="4" fill="#bbb" stroke="#666" stroke-width="0.4"/>
              <text x="265" y="183" text-anchor="middle" font-size="6" fill="#333">Taster</text>

              <!-- Arduino rechts ausserhalb -->
              <rect x="330" y="80" width="90" height="100" rx="6" fill="#2176AE" stroke="#1a5f8a" stroke-width="1.5"/>
              <text x="375" y="98" text-anchor="middle" font-size="10" fill="white" font-weight="bold">Arduino</text>
              <text x="375" y="111" text-anchor="middle" font-size="6" fill="#aad">Steuerung</text>

              <!-- Pin-Labels mit Kategorie -->
              <text x="353" y="118" text-anchor="middle" font-size="5" fill="#aad" font-style="italic">Eingänge:</text>
              <rect x="336" y="120" width="35" height="9" rx="1" fill="#e8a"/>
              <text x="353" y="127" text-anchor="middle" font-size="6" fill="white" font-weight="bold">A0 ← NTC</text>
              <rect x="336" y="131" width="35" height="9" rx="1" fill="#e8a"/>
              <text x="353" y="138" text-anchor="middle" font-size="6" fill="white" font-weight="bold">Pin 8 ← Taster</text>
              <text x="353" y="150" text-anchor="middle" font-size="5" fill="#aad" font-style="italic">Ausgang (PWM):</text>
              <rect x="336" y="152" width="35" height="9" rx="1" fill="#8ae"/>
              <text x="353" y="159" text-anchor="middle" font-size="6" fill="white" font-weight="bold">Pin 9 → Motor</text>

              <!-- Verbindungspfeile: ALLE links von Pin-Boxen abgehend (elektrisch korrekt) -->
              <!-- NTC → A0 (Sensor) -->
              <path d="M 69 159 Q 200 200 336 124" fill="none" stroke="#a44" stroke-width="1.2" stroke-dasharray="3,2"/>
              <polygon points="333,121 339,121 336,127" fill="#a44"/>
              <!-- Taster → Pin 8 (Sensor/Eingabe) -->
              <path d="M 275 163 Q 305 150 336 135" fill="none" stroke="#446" stroke-width="1.2" stroke-dasharray="3,2"/>
              <polygon points="333,132 339,132 336,138" fill="#446"/>
              <!-- Pin 9 → Motor (Aktor) -->
              <path d="M 336 156 Q 250 140 160 95" fill="none" stroke="#660" stroke-width="1.2" stroke-dasharray="3,2"/>
              <polygon points="157,92 163,92 160,98" fill="#660"/>

              <text x="220" y="245" text-anchor="middle" font-size="8" fill="#555" font-style="italic">Wirkprinzip: Taster &rarr; an/aus &nbsp;|&nbsp; NTC misst &rarr; bei Hitze auf volle Drehzahl</text>
            </svg>
          </div>

          <table class="icon-table">
            <tr><th>Bauteil</th><th>Anschluss</th></tr>
            <tr><td>DC-Motor (max. 100 mA)</td><td>per NPN-Transistor (BC547) + Freilaufdiode an Pin 9 (PWM). Stärkerer Motor &rarr; BC337 (800 mA) oder TIP120 (5 A).</td></tr>
            <tr><td>Festwiderstand 10 kOhm</td><td>5V &rarr; A0 (oben im Spannungsteiler, Konvention aus L16)</td></tr>
            <tr><td>NTC (10 kOhm bei 25 &deg;C)</td><td>A0 &rarr; GND (unten im Spannungsteiler)</td></tr>
            <tr><td>Taster</td><td>zwischen Pin 8 und GND (INPUT_PULLUP)</td></tr>
            <tr><td>Freilaufdiode 1N4148</td><td>parallel zum Motor (Kathode/Ring an +5V) &mdash; schützt den Arduino vor Spannungsspitzen</td></tr>
          </table>

          <div class="code-card">
            <h4>LUEFTUNG-SKELETT</h4>
            <pre><code><span class="comment">// Pins</span>
<span class="keyword">int</span> ntcPin    = A0;
<span class="keyword">int</span> tasterPin = <span class="value">8</span>;
<span class="keyword">int</span> motorPin  = <span class="value">9</span>;

<span class="comment">// Zustand</span>
<span class="keyword">bool</span> lueftungAn = <span class="value">false</span>;
<span class="comment">// NTC unten am GND, Festwiderstand 10k oben an 5V (Konvention aus L16):</span>
<span class="comment">// warm =&gt; analogRead-Wert SINKT. Daher: kleiner Wert = sehr warm.</span>
<span class="keyword">int</span> SCHWELLE_HEISS = <span class="value">400</span>;  <span class="comment">// Wert UNTER 400 = sehr warm = volle Drehzahl</span>

<span class="keyword">void</span> <span class="function">setup</span>() {
  <span class="function">pinMode</span>(tasterPin, INPUT_PULLUP);
  <span class="function">pinMode</span>(motorPin, OUTPUT);
  <span class="function">Serial.begin</span>(<span class="value">9600</span>);
}

<span class="keyword">void</span> <span class="function">loop</span>() {
  <span class="comment">// Taster: ein/aus umschalten</span>
  <span class="comment">// Hinweis: vereinfacht. In der echten Pruefung Edge-Detection (alten</span>
  <span class="comment">// Zustand vs. neuen vergleichen), sonst togglet es waehrend des Druecks.</span>
  <span class="keyword">if</span> (<span class="function">digitalRead</span>(tasterPin) == LOW) {
    lueftungAn = !lueftungAn;
    <span class="function">delay</span>(<span class="value">300</span>);   <span class="comment">// Entprellung</span>
  }

  <span class="keyword">int</span> temp = <span class="function">analogRead</span>(ntcPin);
  <span class="function">Serial.println</span>(temp);

  <span class="comment">// analogWrite() ist die PWM-Drehzahlsteuerung (siehe L20 Plus-Box).</span>
  <span class="comment">// 0 = aus, 255 = volle Drehzahl. Funktioniert nur an PWM-Pins (3,5,6,9,10,11).</span>
  <span class="keyword">if</span> (temp &lt; SCHWELLE_HEISS) {
    <span class="function">analogWrite</span>(motorPin, <span class="value">255</span>);     <span class="comment">// Hitze-Notfall: volle Drehzahl</span>
  } <span class="keyword">else</span> <span class="keyword">if</span> (lueftungAn) {
    <span class="function">analogWrite</span>(motorPin, <span class="value">160</span>);     <span class="comment">// Normalbetrieb mittlere Drehzahl</span>
  } <span class="keyword">else</span> {
    <span class="function">analogWrite</span>(motorPin, <span class="value">0</span>);       <span class="comment">// Aus</span>
  }
  <span class="function">delay</span>(<span class="value">100</span>);
}</code></pre>
          </div>

          <p><strong>Wenn dich dieses Projekt erwartet, schaue in:</strong> Lektion 20 (DC-Motor mit Transistor – inklusive Freilaufdiode!) und Lektion 16 (NTC). Achtung: Transistor und Freilaufdiode sind Pflicht für den DC-Motor, sonst geht der Arduino kaputt.</p>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Querverweis: Pool-Aufgabe &harr; Lektionen</h3>
          <p>Diese Tabelle zeigt dir für jede der RSAP-Pool-Aufgaben, in welchen Lektionen du die Bauteile gelernt hast. Wenn du in der Prüfung eine Aufgabe bekommst, schlage hier nach.</p>

          <table class="icon-table">
            <tr><th>Pool-Aufgabe</th><th>Bauteile</th><th>Vorlauf-Lektionen</th><th>In dieser Lektion gezeigt?</th></tr>
            <tr><td><strong>Ampel</strong> (Mobilität)</td><td>5 LEDs, Taster, LDR</td><td>L5, L8, L10, L15, L21</td><td>&#10003; Sektion 3 (oben)</td></tr>
            <tr><td><strong>Gewächshaus</strong> (Bautechnik)</td><td>NTC, Servo, Glühlampe</td><td>L16, L19</td><td>&#10003; Sektion 5a</td></tr>
            <tr><td><strong>Lüftung</strong> (Bautechnik)</td><td>DC-Motor, NTC, Taster</td><td>L16, L20</td><td>&#10003; Sektion 5b</td></tr>
            <tr><td>Außenbeleuchtung</td><td>LED, Taster, LDR</td><td>L5, L8, L15</td><td>sinngemäß Sektion 3</td></tr>
            <tr><td>Temperaturanzeige (Farbe)</td><td>RGB-LED, Taster, NTC</td><td>L16 (RGB-LED-Lektion folgt noch)</td><td>nicht direkt – frag deine Lehrkraft, sobald die RGB-Lektion da ist</td></tr>
            <tr><td>Dimmer</td><td>LED, Taster, Poti</td><td>L13, L14</td><td>aus L13/L14</td></tr>
            <tr><td>Treppenhauslicht</td><td>LED, 2× Taster, Poti</td><td>L8, L13, L14</td><td>aus L8/L13</td></tr>
            <tr><td>Scheibenwischer</td><td>Servo, Umschalter, Regensensor</td><td>L19, (Regensensor = LDR-Variante)</td><td>aus L19</td></tr>
            <tr><td>Kurvenlicht</td><td>LED, Servo, Poti</td><td>L13, L19</td><td>aus L13/L19</td></tr>
            <tr><td>Fahrradlicht</td><td>LED, Umschalter, LDR</td><td>L8, L15</td><td>aus L15/L8</td></tr>
            <tr><td>Bohrmaschine</td><td>DC-Motor, Schalter, Poti</td><td>L13, L20</td><td>aus L20/L13</td></tr>
            <tr><td>Alarmanlage</td><td>Summer, Taster, Lichtschranke</td><td>L8, L21 (Box Summer)</td><td>Summer = Box in L21</td></tr>
          </table>

          <p style="margin-top:1rem;"><strong>Faustregel:</strong> Egal welche Aufgabe du bekommst – das Muster ist immer: Sensor messen &rarr; if/else entscheiden &rarr; Aktor schalten. Den Rest hast du in den Vorgängerlektionen schon geübt.</p>
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
            <li><strong>Kalte Lötstelle</strong> – Sieht aus wie eine Kuppel statt Kegel, grau und matt. Leitet nicht. Nochmal heiß machen, frisches Lot dazu.</li>
            <li><strong>Lötbrücke</strong> – Zu viel Lot, das benachbarte Pads verbindet. Mit Entlötlitze entfernen und neu löten.</li>
            <li><strong>Streifenraster nicht unterbrochen</strong> – Wenn zwei Bauteile auf demselben Streifen sind, die nicht verbunden sein sollen, ist alles kurzgeschlossen. Streifen mit Cutter zwischen den Löchern auftrennen.</li>
            <li><strong>Bauteil überhitzt</strong> – Lötkolben zu lange auf dem Pad. LEDs und Transistoren sterben bei >5 Sek. Lötkolben weg, abkühlen lassen.</li>
            <li><strong>DC-Motor ohne Freilaufdiode</strong> – Spannungsspitzen zerstören den Arduino. Diode 1N4148 immer parallel zum Motor (Kathode/Ring an +5V).</li>
            <li><strong>Schwellenwert nicht kalibriert</strong> – LDR/NTC-Werte unterscheiden sich je nach Raum. Mit Serial Monitor messen und im Code anpassen.</li>
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
      },
      {
        type: 'multiple-choice',
        question: 'Welche dieser Schaltungen erfüllt <strong>alle</strong> RSAP-Pflichten (Sensor-Aktor-Mix + mindestens 1 analoger Sensor)?',
        options: [
          '3 LEDs + 1 Taster',
          '2 LEDs + 1 Taster + 1 Servo',
          '1 NTC + 1 Taster + 1 DC-Motor + 1 LED',
          '2 Taster + 1 LED + 1 Summer'
        ],
        correct: 2,
        explanation: 'Diese Schaltung hat 2 Sensoren (NTC analog + Taster digital) und 2 Aktoren (DC-Motor + LED). Sensor-Aktor-Mix passt (1 Sensor + 2 Aktoren ODER 2 Sensoren + 1 Aktor – hier 2 + 2 erfüllt die Mindestpflicht). Der NTC liefert den analogen Pflicht-Sensor.',
        wrongExplanations: [
          'Sensor-Aktor-Mix passt zwar (1 Sensor + 3 Aktoren), aber der Taster ist ein <strong>digitaler</strong> Sensor. Es fehlt der Pflicht-<strong>analoge</strong> Sensor (LDR, NTC, Poti).',
          'Sensor-Aktor-Mix passt (1 Sensor + 3 Aktoren), aber der Taster ist <strong>digital</strong>. Es fehlt der Pflicht-<strong>analoge</strong> Sensor. Tausche den Taster gegen einen LDR/NTC/Poti und es würde passen.',
          null,
          'Hier sind 2 Taster (beide <strong>digital</strong>) und 2 Aktoren (LED + Summer). Sensor-Aktor-Mix passt, aber es fehlt der Pflicht-<strong>analoge</strong> Sensor. Mindestens einer der Sensoren muss LDR, NTC oder Poti sein.'
        ],
        hint: 'Prüfe zwei Pflichten: (1) mind. 1 Sensor + 2 Aktoren ODER 2 Sensoren + 1 Aktor. (2) mind. 1 Sensor muss <em>analog</em> sein (LDR, NTC, Poti) – Taster und Schalter sind digital!'
      },
      {
        type: 'multiple-choice',
        question: 'Was ist eine <strong>kalte Lötstelle</strong>?',
        options: [
          'Eine Lötstelle, die nicht warm wurde, weil der Lötkolben kaputt war',
          'Eine Lötstelle, bei der das Lot zwar erstarrt ist, aber Pad und Bein nicht richtig benetzt hat – sie sieht klumpig und matt aus und leitet schlecht oder gar nicht',
          'Eine ganz normal abgekühlte Lötstelle nach dem Löten',
          'Eine Lötstelle ohne Lot'
        ],
        correct: 1,
        explanation: 'Eine kalte Lötstelle entsteht, wenn das Lot nicht heiß genug war oder das Bauteil zu früh bewegt wurde. Das Lot erstarrt zwar, bildet aber keine richtige Legierung mit Pad und Bein. Optisch erkennt man sie an matter, klumpiger, grauer Oberfläche. Elektrisch hat sie Widerstand oder gar keinen Durchgang. Lösung: Nochmal heiß machen, frisches Lot dazu, warten bis Lot fließt.',
        wrongExplanations: [
          'Nein – wenn der Kolben kaputt wäre, würde das Lot gar nicht schmelzen und es entstünde keine Lötstelle. Eine kalte Lötstelle entsteht trotz funktionierendem Kolben, wenn das Lot zu früh erstarrt.',
          null,
          'Falsch – jede gute Lötstelle kühlt nach dem Löten ab. "Kalt" meint in diesem Zusammenhang nicht die Temperatur nachher, sondern dass das Lot nicht heiß genug wurde, um eine richtige Verbindung einzugehen.',
          'Nein – ohne Lot gibt es gar keine Lötstelle. Eine kalte Lötstelle hat Lot, aber das Lot hat sich nicht richtig mit Pad und Bein verbunden.'
        ],
        hint: 'Schau dir die SVG-Skizze oben an: KALT = klumpig, matt, grau, oft mit einem Spalt zwischen Lot und Pad. SAUBER = silbrig, glänzend, kegelförmig.'
      },
      {
        type: 'matching',
        question: 'Ordne jeder Pool-Aufgabe das wichtigste Bauteil zu, das du dafür brauchst:',
        pairs: [
          { left: 'Gewächshaus-Steuerung', right: 'NTC + Servo' },
          { left: 'Lüftung', right: 'DC-Motor mit Transistor' },
          { left: 'Ampel mit Nachtabschaltung', right: 'LDR im Spannungsteiler' },
          { left: 'Dimmer / Bohrmaschine-Drehzahl', right: 'Potentiometer + PWM' }
        ]
      },
      {
        type: 'ordering',
        question: 'In welcher Reihenfolge führst du den Lötvorgang an einer Lötstelle durch?',
        items: [
          'Lot von der gegenüberliegenden Seite zur Kolbenspitze zuführen',
          'Bauteilbein durch das Loch in der Platine stecken',
          'Überstehenden Bein-Rest mit dem Seitenschneider abknipsen',
          'Erst das Lot wegnehmen, dann den Lötkolben',
          'Lötkolben für ca. 1 Sekunde auf Pad und Bein gleichzeitig halten'
        ],
        correctOrder: [1, 4, 0, 3, 2]
      }
    ]
  }
];
