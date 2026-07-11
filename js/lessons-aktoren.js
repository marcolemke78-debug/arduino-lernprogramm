const LESSONS_AKTOREN = [
  // ===================== LEKTION 19 (Servo, id 32) =====================
  // RSAP-Pflicht-Lektion: Servomotor taucht in mehreren Pool-Aufgaben
  // auf (Gewaechshaus-Belueftung, Scheibenwischer, Kurvenlicht).
  // Konzept-Bruch zu allen vorherigen Lektionen: erstmals Library
  // ("#include <Servo.h>"), eigene Variable fuer das Bauteil, neue
  // Befehle attach()/write().
  {
    id: 32,
    title: 'Servomotor ansteuern',
    explanation: {
      html: `
        <h2>Servomotor &ndash; ein Motor, der genau weiss, wo er ist</h2>
        <p>Bisher hast du nur LEDs ein- und ausgeschaltet. Jetzt steuerst du zum ersten Mal etwas, das sich <strong>bewegt</strong>: einen <strong>Servomotor</strong>. Mit ihm kannst du Klappen oeffnen, Roboterarme bewegen, ein Lenkrad drehen &ndash; alles auf den Grad genau.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Ein normaler Motor (z.B. in einem Mixer) ist wie ein Hund, der einfach im Kreis rennt &ndash; schnell, aber er weiss nicht, wo er aufhoert. Ein <strong>Servomotor</strong> ist wie ein dressierter Hund: Du sagst "Sitz!" und er bleibt genau in dieser Position. Du sagst "Platz auf 45 Grad rechts!" und er geht genau dahin. Das ist sein Trick: <strong>Position halten, nicht nur drehen.</strong>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Wie sieht ein Servo aus?</h3>
          <p>Im Schul-Set findest du meist einen kleinen <strong>SG90-Servo</strong>: ein quadratisches blaues Gehaeuse, etwa daumengross, mit einem kleinen weissen "Arm" oben, der sich dreht. Aus dem Servo kommt ein Kabel mit drei Adern in drei Farben:</p>

          <table class="icon-table">
            <tr><th>Kabel-Farbe</th><th>Bedeutung</th><th>Wohin am Arduino?</th></tr>
            <tr><td><span style="color:#C0392B;font-weight:bold;">rot</span></td><td>Plus / Versorgungsspannung</td><td><strong>+5V</strong></td></tr>
            <tr><td><span style="color:#222;font-weight:bold;">braun</span> (oder schwarz)</td><td>Minus / Masse</td><td><strong>GND</strong></td></tr>
            <tr><td><span style="color:#E67E22;font-weight:bold;">orange</span> (oder gelb)</td><td>Steuer-Signal</td><td>ein digitaler Pin, z.B. <strong>Pin 9</strong></td></tr>
          </table>

          <div class="tip-box">
            <strong>Merkhilfe:</strong> Die <strong>Mitte ist immer + (rot)</strong>. Die hellste Aussen-Ader (orange/gelb) ist das Signal, die dunkelste (braun/schwarz) ist GND. So musst du nicht ueberlegen, wenn du den Servo umdrehst.
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Wie spricht der Arduino mit dem Servo?</h3>
          <p>Der Arduino schickt ueber den <strong>Signal-Pin</strong> ein Muster aus kurzen Stromimpulsen. Die <strong>Laenge</strong> dieser Impulse sagt dem Servo, wo er hin soll:</p>

          <table class="icon-table">
            <tr><th>Befehl im Code</th><th>Position</th><th>Servo-Arm zeigt nach</th></tr>
            <tr><td><code>servo.write(0)</code></td><td>0&deg; (Anschlag links)</td><td>ganz nach <strong>links</strong></td></tr>
            <tr><td><code>servo.write(90)</code></td><td>90&deg; (Mitte)</td><td>nach <strong>oben</strong> (Mittelstellung)</td></tr>
            <tr><td><code>servo.write(180)</code></td><td>180&deg; (Anschlag rechts)</td><td>ganz nach <strong>rechts</strong></td></tr>
          </table>

          <p>Hobby-Servos koennen sich also <strong>180 Grad</strong> drehen &ndash; eine halbe Umdrehung. Eine ganze Umdrehung schaffen sie nicht (ausser Spezialmodelle "Continuous Rotation").</p>
        </div>

        <div class="info-card" style="border-left: 3px solid #27AE60;">
          <h3>Selber ausprobieren: Servo-Winkel</h3>
          <p>Schieb den Regler und sieh, wohin der Servo-Arm zeigt &ndash; und welchen <code>write()</code>-Wert du dafuer brauchst:</p>
          <div style="background:#f8f8f8;border:1px solid #ddd;border-radius:8px;padding:1rem;text-align:center;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120" style="max-width:260px;width:100%;height:auto;">
              <line x1="20" y1="92" x2="280" y2="92" stroke="#ccc" stroke-width="1"/>
              <text x="22" y="108" text-anchor="middle" font-size="9" fill="#777">0&deg; links</text>
              <text x="150" y="18" text-anchor="middle" font-size="9" fill="#777">90&deg; Mitte</text>
              <text x="278" y="108" text-anchor="middle" font-size="9" fill="#777">180&deg; rechts</text>
              <rect x="128" y="90" width="44" height="22" rx="3" fill="#444"/>
              <line id="sv-arm" x1="150" y1="90" x2="150" y2="32" stroke="#27AE60" stroke-width="6" stroke-linecap="round" transform="rotate(0 150 90)"/>
              <circle cx="150" cy="90" r="6" fill="#222"/>
            </svg>
            <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;margin-top:0.5rem;">
              <label for="sv-slider" style="font-weight:bold;">Winkel:</label>
              <input id="sv-slider" type="range" min="0" max="180" step="1" value="90" style="flex:1;min-width:160px;height:28px;" oninput="var a=+this.value;document.getElementById('sv-arm').setAttribute('transform','rotate('+(a-90)+' 150 90)');document.getElementById('sv-deg').textContent=a;document.getElementById('sv-code').textContent='meinServo.write('+a+');';">
            </div>
            <p style="margin:0.5rem 0 0;">Winkel: <strong><span id="sv-deg">90</span>&deg;</strong> &nbsp;&rarr;&nbsp; <code><span id="sv-code">meinServo.write(90);</span></code></p>
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Der Trick: die Servo-Library</h3>
          <p>Den genauen Pulse-Code zu schreiben waere kompliziert &ndash; deshalb gibt es die <strong>Servo-Bibliothek</strong> ("Library"), die das fuer dich macht. Du musst nur drei Dinge tun:</p>

          <ol class="step-list">
            <li>Ganz oben im Programm die Library einbinden:<br><code>#include &lt;Servo.h&gt;</code></li>
            <li>Eine "Servo-Variable" anlegen (ein Name fuer DEINEN Servo):<br><code>Servo meinServo;</code></li>
            <li>Im <code>setup()</code> dem Servo sagen, an welchem Pin er haengt:<br><code>meinServo.attach(9);</code></li>
          </ol>

          <p>Danach kannst du im Loop jederzeit eine Position anfahren:</p>
          <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
meinServo.write(0);    // ganz nach links
delay(1000);            // 1 Sekunde stehen bleiben
meinServo.write(180);  // ganz nach rechts
delay(1000);</pre>

          <div class="analogy-box">
            <strong>Bild dazu:</strong> Eine Library ist wie ein <strong>fertiges Rezeptbuch</strong>. Statt jedes Mal die Zutaten von Grund auf zu beschreiben, sagst du nur "Tiramisu, Stueck #3" &ndash; und das Buch enthaelt schon alle Details.
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Wofuer wird ein Servo in der Pruefung gebraucht?</h3>
          <p>In der Realschulabschlusspruefung (RSAP) Technik BW taucht der Servo in mehreren Aufgaben auf:</p>

          <table class="icon-table">
            <tr><th>Anwendung</th><th>Servo-Aufgabe</th><th>Typische Positionen</th></tr>
            <tr><td><strong>Gewaechshaus-Belueftung</strong></td><td>Dachfenster oeffnen/schliessen</td><td>0&deg; zu, 90&deg; offen</td></tr>
            <tr><td><strong>Scheibenwischer</strong></td><td>hin und her wischen</td><td>30&deg; bis 150&deg;</td></tr>
            <tr><td><strong>Kurvenlicht</strong></td><td>Scheinwerfer zur Seite drehen</td><td>60&deg; bis 120&deg; je nach Lenkwinkel</td></tr>
          </table>

          <p>In <strong>allen drei Faellen</strong> ist der Programmcode aehnlich: Servo anhaengen, dann je nach Sensorwert (NTC, Schalter, Poti) eine bestimmte Position anfahren. In dieser Lektion lernst du den <strong>Grundbaustein</strong> &ndash; die Verknuepfung mit Sensoren kommt spaeter.</p>
        </div>

        <div class="warning-box">
          <strong>Wichtig fuer die Sicherheit:</strong>
          <ul>
            <li>Den Servo-Arm <strong>nie von Hand drehen</strong>, solange der Servo angesteuert wird &ndash; das beschaedigt das Getriebe.</li>
            <li>Beim Anschliessen niemals <strong>Pluspol mit Signal-Pin verwechseln</strong> &ndash; das kann den Arduino-Pin durchbrennen.</li>
            <li>Im Schul-Set funktionieren SG90-Servos direkt am USB-Strom. <strong>Groessere</strong> Servos brauchen eine externe Stromversorgung &ndash; sonst startet der Arduino bei jeder Bewegung neu.</li>
          </ul>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Der Piezo-Summer &ndash; Toene ausgeben</h3>
          <p>Neben Bewegung (Servo) und Licht (LED) gibt es noch einen dritten wichtigen Aktor: den <strong>Piezo-Summer</strong> (auch "Buzzer"). Er macht aus Strom <strong>Toene</strong> &ndash; perfekt fuer Alarme, Signaltoene und Melodien.</p>

          <p>Es gibt zwei Sorten, die von aussen fast gleich aussehen:</p>
          <table class="icon-table">
            <tr><th>Typ</th><th>Innenleben</th><th>Ansteuerung</th></tr>
            <tr><td><strong>Aktiver Summer</strong></td><td>hat eine <strong>eingebaute Elektronik</strong>, die den Ton selbst erzeugt</td><td>einfach <code>digitalWrite(pin, HIGH)</code> &ndash; wie eine LED!</td></tr>
            <tr><td><strong>Passiver Summer</strong></td><td>nur eine Membran, KEINE eigene Elektronik</td><td>braucht ein Schwingungs-Signal, z.B. mit <code>tone()</code></td></tr>
          </table>

          <div class="analogy-box">
            <strong>Alltagsanalogie:</strong> Der <strong>aktive</strong> Summer ist wie eine <strong>Tuerklingel</strong>: Knopf druecken (Strom an) &rarr; sie klingelt von allein. Der <strong>passive</strong> Summer ist wie ein <strong>Lautsprecher</strong>: Er macht nur dann einen Ton, wenn du ihm das "Musiksignal" selbst lieferst.
          </div>

          <p><strong>Anschluss</strong> (einfacher geht es kaum): das <strong>+</strong>-Bein (laengeres Bein bzw. mit + markiert) an einen <strong>digitalen Pin</strong>, das <strong>&minus;</strong>-Bein an <strong>GND</strong>. Beim aktiven Summer ist <strong>kein Vorwiderstand noetig</strong> &ndash; er zieht nur wenig Strom.</p>

          <p>So laesst du einen <strong>aktiven</strong> Summer im Sekundentakt piepsen &ndash; der Code ist identisch mit dem LED-Blinken:</p>
          <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
const int summerPin = 8;

void setup() {
  pinMode(summerPin, OUTPUT);
}

void loop() {
  digitalWrite(summerPin, HIGH);  // Piep an
  delay(500);
  digitalWrite(summerPin, LOW);   // Piep aus
  delay(500);
}</pre>

          <div class="tip-box">
            <strong>Plus-Info fuer den passiven Summer:</strong> Mit <code>tone(pin, 440);</code> erzeugt der Arduino selbst die Schwingung &ndash; hier den Kammerton A (440 Schwingungen pro Sekunde). Mit <code>noTone(pin);</code> ist wieder Ruhe. So kannst du sogar Melodien programmieren.
          </div>

          <div class="tip-box">
            <strong>Pruefungskontext:</strong> Der Summer taucht typisch in der <strong>Alarmanlage</strong> auf: Ein Taster (Fensterkontakt) oder eine Lichtschranke meldet "Einbruch" &rarr; der Arduino schaltet den Summer an. Software-seitig ist das nichts anderes als: Eingang lesen, bei Alarm <code>digitalWrite(summerPin, HIGH)</code>.
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Der Ultraschall-Sensor HC-SR04 &ndash; Entfernungen messen</h3>
          <p>Streng genommen ein Sensor, aber er gehoert in viele Aktor-Aufgaben: Der <strong>HC-SR04</strong> misst <strong>Entfernungen</strong> &ndash; beruehrungslos, mit Schall, den du nicht hoeren kannst (Ultraschall).</p>

          <div class="analogy-box">
            <strong>Alltagsanalogie:</strong> Genau wie eine <strong>Fledermaus</strong>: Sie ruft, der Schall prallt am Hindernis ab, und aus der Zeit bis zum Echo weiss sie, wie weit das Hindernis weg ist. Der HC-SR04 macht exakt dasselbe.
          </div>

          <p>So funktioniert die Messung:</p>
          <ol class="step-list">
            <li>Der Arduino gibt am <strong>Trig-Pin</strong> (Trigger) einen kurzen Impuls &ndash; der Sensor sendet einen Ultraschall-"Ping" los.</li>
            <li>Der Schall fliegt zum Hindernis, wird reflektiert und kommt zurueck.</li>
            <li>Der <strong>Echo-Pin</strong> meldet dem Arduino, <strong>wie lange</strong> der Schall unterwegs war (die Laufzeit).</li>
            <li>Schall ist etwa <strong>343 m/s</strong> schnell. Also gilt: <strong>Entfernung = Laufzeit &times; Schallgeschwindigkeit &divide; 2</strong> &ndash; durch 2, weil der Schall den Weg ja <strong>hin UND zurueck</strong> fliegt!</li>
          </ol>

          <div style="background:#f8f8f8;border:1px solid #ddd;border-radius:8px;padding:1rem;text-align:center;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 130" style="max-width:300px;width:100%;height:auto;">
              <rect x="10" y="35" width="60" height="60" rx="4" fill="#2176AE"/>
              <circle cx="28" cy="55" r="9" fill="#fff"/>
              <circle cx="52" cy="55" r="9" fill="#fff"/>
              <text x="40" y="86" text-anchor="middle" font-size="9" fill="#fff">HC-SR04</text>
              <path d="M 85 45 q 8 10 0 20" stroke="#F59E0B" stroke-width="2" fill="none"/>
              <path d="M 100 38 q 12 17 0 34" stroke="#F59E0B" stroke-width="2" fill="none"/>
              <path d="M 115 31 q 16 24 0 48" stroke="#F59E0B" stroke-width="2" fill="none"/>
              <rect x="270" y="20" width="14" height="90" fill="#2E7D32"/>
              <text x="277" y="14" text-anchor="middle" font-size="9" fill="#2E7D32">Hindernis</text>
              <line x1="140" y1="50" x2="258" y2="50" stroke="#F59E0B" stroke-width="2"/>
              <polygon points="258,50 248,45 248,55" fill="#F59E0B"/>
              <text x="196" y="43" text-anchor="middle" font-size="9" fill="#F59E0B">Ping hin</text>
              <line x1="258" y1="80" x2="140" y2="80" stroke="#2176AE" stroke-width="2"/>
              <polygon points="140,80 150,75 150,85" fill="#2176AE"/>
              <text x="196" y="97" text-anchor="middle" font-size="9" fill="#2176AE">Echo zurueck</text>
            </svg>
            <p style="margin:0.5rem 0 0;font-size:0.9rem;">Der Schall fliegt <strong>hin und zurueck</strong> &ndash; deshalb wird die Laufzeit durch 2 geteilt.</p>
          </div>

          <p>Der HC-SR04 hat <strong>4 Pins</strong>:</p>
          <table class="icon-table">
            <tr><th>Pin</th><th>Wohin am Arduino?</th><th>Aufgabe</th></tr>
            <tr><td><strong>VCC</strong></td><td>5V</td><td>Stromversorgung</td></tr>
            <tr><td><strong>Trig</strong></td><td>digitaler Pin (z.B. 7)</td><td>Ping ausloesen (Ausgang vom Arduino)</td></tr>
            <tr><td><strong>Echo</strong></td><td>digitaler Pin (z.B. 6)</td><td>Laufzeit melden (Eingang zum Arduino)</td></tr>
            <tr><td><strong>GND</strong></td><td>GND</td><td>Masse</td></tr>
          </table>

          <p>So sieht der Mess-Code aus &ndash; das Herzstueck ist <code>pulseIn()</code>, das die Laufzeit in Mikrosekunden misst:</p>
          <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
digitalWrite(trigPin, LOW);
delayMicroseconds(2);
digitalWrite(trigPin, HIGH);     // kurzen Ping ausloesen
delayMicroseconds(10);
digitalWrite(trigPin, LOW);

long dauer = pulseIn(echoPin, HIGH);  // Laufzeit in Mikrosekunden
long cm = dauer / 58;                 // Umrechnung in Zentimeter</pre>

          <p><strong>Woher kommt die 58?</strong> Schall schafft 343 m/s = 0,0343 cm pro Mikrosekunde. Fuer 1 cm Entfernung braucht er hin und zurueck also 2 cm Weg, das sind 2 &divide; 0,0343 &asymp; <strong>58 Mikrosekunden</strong>. Deshalb: Laufzeit durch 58 = Entfernung in cm.</p>

          <div class="tip-box">
            <strong>Pruefungskontext:</strong> Der HC-SR04 taucht typisch als <strong>Einparkhilfe</strong> auf (je naeher das Hindernis, desto schneller piepst der Summer &ndash; da sind Summer und Ultraschall ein Team!) oder als <strong>Fuellstandsmessung</strong> (Sensor misst von oben den Abstand zur Oberflaeche, ein Servo zeigt den Fuellstand wie eine Tank-Nadel an).
          </div>
        </div>
      `
    },
    example: {
      title: 'Beispiel-Programm: Servo bewegt sich hin und her',
      steps: [
        {
          label: 'Library einbinden + Servo anlegen',
          html: `
            <p>Am <strong>allerersten</strong> Punkt deines Programms (noch vor <code>void setup()</code>) muss die Library eingebunden werden und der Servo bekommt einen Namen:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
#include &lt;Servo.h&gt;

Servo meinServo;</pre>
            <p>Damit hat dein Programm den Befehl <code>Servo</code> als neuen Bauteil-Typ kennengelernt &ndash; vergleichbar mit <code>int</code> oder <code>boolean</code>, aber speziell fuer Servos.</p>
          `
        },
        {
          label: 'Im setup(): Servo an einen Pin anhaengen',
          html: `
            <p>Der Arduino muss wissen, an welchen Pin du den Servo angeschlossen hast. Das macht die <code>attach()</code>-Methode:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
void setup() {
  meinServo.attach(9);
}</pre>
            <p>Hier sagst du: "Mein Servo namens <em>meinServo</em> haengt an <strong>Pin 9</strong>." Das machst du nur EINMAL im setup &ndash; danach weiss der Arduino immer, wo der Servo steckt.</p>
            <div class="tip-box">
              <strong>Welcher Pin?</strong> Beliebige digitale Pins funktionieren (die Servo-Bibliothek erzeugt das Signal selbst). Fuer die Pruefung nimm <strong>Pin 9</strong> &ndash; so steht es im Skript. Pin 13 vermeiden (dort ist die Onboard-LED).
            </div>
          `
        },
        {
          label: 'Im loop(): Position anfahren',
          html: `
            <p>Jetzt kannst du jederzeit eine neue Position kommandieren. Hier ein einfaches Hin-und-Her:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
void loop() {
  meinServo.write(0);
  delay(1000);
  meinServo.write(180);
  delay(1000);
}</pre>
            <p>Was passiert hier?</p>
            <ol>
              <li><code>meinServo.write(0)</code> &rarr; Servo dreht nach links</li>
              <li><code>delay(1000)</code> &rarr; 1 Sekunde warten (sonst wuerde er sofort weiterdrehen)</li>
              <li><code>meinServo.write(180)</code> &rarr; Servo dreht nach rechts</li>
              <li><code>delay(1000)</code> &rarr; 1 Sekunde warten</li>
              <li>... und dann von vorn (das ist der Job des loop)</li>
            </ol>
          `
        },
        {
          label: 'Das vollstaendige Programm',
          html: `
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #27AE60;">
#include &lt;Servo.h&gt;

Servo meinServo;

void setup() {
  meinServo.attach(9);
}

void loop() {
  meinServo.write(0);
  delay(1000);
  meinServo.write(180);
  delay(1000);
}</pre>
            <p>14 Zeilen Code, und der Servo bewegt sich endlos hin und her. Genau dieses Grundgeruest erweitern Pruefungsaufgaben spaeter um Sensoren: "Wenn NTC heiss &rarr; Servo auf 90 (Fenster auf), sonst auf 0 (Fenster zu)."</p>
          `
        },
        {
          label: 'Sanfter Sweep mit for-Schleife',
          html: `
            <p>Bisher <strong>springt</strong> der Servo hart zwischen 0&deg; und 180&deg;. Schoener ist ein <strong>sanftes Durchfahren</strong> aller Winkel &ndash; dafuer nimmst du eine <strong>for-Schleife</strong>, die eine Zaehlvariable Schritt fuer Schritt hochzaehlt:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #27AE60;">
void loop() {
  // langsam von 0 nach 180 Grad
  for (int winkel = 0; winkel &lt;= 180; winkel++) {
    meinServo.write(winkel);
    delay(15);
  }
  // und wieder zurueck von 180 nach 0
  for (int winkel = 180; winkel &gt;= 0; winkel--) {
    meinServo.write(winkel);
    delay(15);
  }
}</pre>
            <p>Die Schleife <code>for (int winkel = 0; winkel &lt;= 180; winkel++)</code> heisst: Starte bei <strong>0</strong>, zaehle nach jedem Durchlauf um <strong>1</strong> hoch (<code>winkel++</code>), und mach weiter, solange <code>winkel &lt;= 180</code> gilt. Bei jedem Schritt faehrt der Servo genau ein Grad weiter &ndash; das kurze <code>delay(15)</code> gibt ihm Zeit dafuer und macht die Bewegung fluessig.</p>
            <div class="tip-box">
              <strong>Pruefungsklassiker:</strong> Dieser "Sweep" (0&deg; &rarr; 180&deg; &rarr; 0&deg;) ist das Standard-Beispiel fuer Servo + for-Schleife. Groesseres <code>delay()</code> = langsamere Bewegung, kleineres = schnellere.
            </div>
          `
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Was unterscheidet einen Servomotor von einem normalen Gleichstrommotor?',
        options: [
          'Der Servo dreht sich schneller',
          'Der Servo kann eine bestimmte Position anfahren und dort halten',
          'Der Servo braucht keinen Strom',
          'Der Servo dreht sich nur in eine Richtung'
        ],
        correct: 1,
        explanation: 'Richtig! Der Servomotor kennt seine eigene Position und kann sie auf den Grad genau anfahren. Das ist sein Hauptmerkmal &ndash; ein DC-Motor dreht einfach nur, ohne zu wissen, wo er steht.',
        wrongExplanations: {
          0: 'Im Gegenteil &ndash; ein Servo dreht sich vergleichsweise langsam. Er ist auf Genauigkeit ausgelegt, nicht auf Geschwindigkeit.',
          2: 'Nein, der Servo braucht Strom (typisch 4-6 V). Das siehst du am roten Versorgungskabel.',
          3: 'Nein, ein Standard-Hobby-Servo kann sich um 180&deg; (eine halbe Umdrehung) in beide Richtungen drehen.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Welche drei Anschluesse hat ein Standard-Hobby-Servo (z.B. SG90)?',
        options: [
          'Plus, Minus, Erdung',
          '5V, GND, Signal',
          'Anode, Kathode, Sensor',
          'Eingang, Ausgang, Rueckmeldung'
        ],
        correct: 1,
        explanation: 'Richtig! Rot = 5V (Versorgung), Braun/Schwarz = GND (Masse), Orange/Gelb = Signal (zum digitalen Pin des Arduino).',
        wrongExplanations: {
          0: 'Erdung ist in der Hauselektrik wichtig, beim Arduino sprechen wir von "GND" (Ground = Masse). Auch fehlt hier der Signal-Pin.',
          2: 'Anode und Kathode sind LED-Begriffe. Ein Servo hat keine Polung in dem Sinne &ndash; er hat Versorgungs- und Signalanschluesse.',
          3: 'Das wuerde bei einem "intelligenten" Aktor zutreffen, der seine Position zurueckmeldet. Ein Standard-Hobby-Servo gibt aber keine Rueckmeldung.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Welche Position faehrt der Servo bei dem Befehl meinServo.write(90) an?',
        options: [
          '0 Grad (ganz links)',
          'Mittelstellung (90 Grad)',
          '180 Grad (ganz rechts)',
          'Endlos-Drehung mit 90 Umdrehungen pro Minute'
        ],
        correct: 1,
        explanation: 'Richtig! Der Zahlenwert in write() entspricht direkt dem Winkel in Grad. 0 = links, 90 = Mitte, 180 = rechts.',
        wrongExplanations: {
          0: '0 Grad waere der Befehl meinServo.write(0). Der Wert 90 faehrt die Mitte an.',
          2: '180 Grad waere meinServo.write(180). Bei 90 ist der Servo exakt in der Mitte.',
          3: 'write() definiert eine POSITION (in Grad), keine GESCHWINDIGKEIT. Ein Hobby-Servo dreht nicht endlos.'
        }
      },
      {
        type: 'matching',
        question: 'Ordne die typische Servo-Aufgabe der passenden Stellung zu.',
        pairs: [
          { left: 'Dachfenster geschlossen (Gewaechshaus)', right: 'meinServo.write(0)' },
          { left: 'Dachfenster offen (Gewaechshaus)', right: 'meinServo.write(90)' },
          { left: 'Scheibenwischer wischt nach links', right: 'meinServo.write(30)' },
          { left: 'Kurvenlicht geradeaus', right: 'meinServo.write(90)' }
        ],
        explanation: 'Der Wert in write() ist direkt der Winkel in Grad: 0 = ganz links, 90 = Mitte, 180 = ganz rechts. Geschlossen und geradeaus sind feste Endstellungen (0&deg; bzw. die Mitte 90&deg;), waehrend der Scheibenwischer mit 30&deg; nur ein Stueck nach links faehrt. So uebersetzt du jede mechanische Stellung in genau einen Zahlenwert.'
      },
      {
        type: 'multiple-choice',
        question: 'Welche Zeile muss ZWINGEND ganz oben in deinem Programm stehen, damit du den Servo-Befehl write() ueberhaupt benutzen darfst?',
        options: [
          'int servo = 9;',
          '#include &lt;Servo.h&gt;',
          'Serial.begin(9600);',
          'pinMode(9, OUTPUT);'
        ],
        correct: 1,
        explanation: 'Richtig! #include &lt;Servo.h&gt; bindet die Servo-Bibliothek ein. Ohne diese Zeile kennt der Arduino den Befehl write() nicht und gibt eine Fehlermeldung beim Hochladen.',
        wrongExplanations: {
          0: 'Das waere zwar eine plausible Variable, aber sie ersetzt nicht die Library. Ohne #include funktioniert kein Servo-Befehl.',
          2: 'Serial.begin gehoert zum Serial Monitor, nicht zum Servo. Es ist hier nicht erforderlich.',
          3: 'Bei einem Servo macht der Library-Aufruf attach() das pinMode-Setzen automatisch. Du brauchst es nicht extra zu schreiben.'
        }
      },
      {
        type: 'ordering',
        question: 'Ein Servo soll sanft hin- und herfahren (Sweep). Bringe die Schritte im <code>loop()</code> in die richtige Reihenfolge:',
        items: [
          'Hochfahren: eine for-Schleife zaehlt den Winkel von 0 auf 180',
          'Dabei jeden Winkel mit write() anfahren und kurz warten (delay)',
          'Zurueckfahren: eine for-Schleife zaehlt den Winkel von 180 auf 0',
          'Auch hier jeden Winkel anfahren - dann beginnt loop() von vorne'
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: 'Ein Sweep ist eine Hin- und Rueckbewegung: Erst zaehlt eine for-Schleife den Winkel von 0 auf 180 hoch und faehrt mit write() jeden Zwischenwert kurz an &ndash; das delay sorgt fuer die sanfte, langsame Bewegung statt eines Sprungs. Danach laeuft die zweite Schleife von 180 zurueck auf 0. Weil loop() sich endlos wiederholt, beginnt das Spiel danach wieder von vorne.'
      },
      {
        type: 'multiple-choice',
        question: 'Was bewirkt die Zeile <code>for (int winkel = 0; winkel &lt;= 180; winkel++)</code> beim Servo-Sweep?',
        options: [
          'Der Servo springt sofort auf 180 Grad',
          'Der Winkel wird Schritt fuer Schritt von 0 bis 180 hochgezaehlt - der Servo faehrt sie nacheinander an',
          'Der Servo dreht sich 180-mal komplett im Kreis',
          'Die Schleife laeuft genau einmal und stoppt sofort bei 0 Grad'
        ],
        correct: 1,
        explanation: 'Richtig! Die for-Schleife zaehlt <code>winkel</code> von 0 startend nach jedem Durchlauf um 1 hoch (<code>winkel++</code>), solange <code>winkel &lt;= 180</code> gilt. Bei jedem Wert wird <code>write(winkel)</code> aufgerufen &ndash; so faehrt der Servo alle Zwischenwinkel der Reihe nach an und bewegt sich fluessig, statt zu springen.',
        wrongExplanations: {
          0: 'Springen wuerde der Servo nur bei einem einzelnen <code>write(180)</code>. Die for-Schleife geht gerade NICHT direkt auf 180, sondern ueber alle Zwischenwerte.',
          2: 'Ein Standard-Hobby-Servo dreht maximal 180&deg;, nicht im Kreis. Die 180 ist der Endwinkel, keine Anzahl an Umdrehungen.',
          3: 'Die Schleife laeuft 181-mal (Winkel 0 bis 180), nicht einmal. <code>winkel++</code> erhoeht den Wert bei jedem Durchlauf, bis 180 erreicht ist.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Wie steuerst du einen AKTIVEN Piezo-Summer an, damit er piepst?',
        options: [
          'Mit der Servo-Library und attach()',
          'Mit digitalWrite(pin, HIGH) - genau wie eine LED',
          'Nur mit tone(), sonst bleibt er stumm',
          'Mit analogRead(), weil er ein Sensor ist'
        ],
        correct: 1,
        explanation: 'Richtig! Der aktive Summer hat eine eingebaute Elektronik, die den Ton selbst erzeugt. Du musst ihn nur mit Strom versorgen: digitalWrite(pin, HIGH) = Piep an, LOW = Piep aus. Aus Software-Sicht ist er das Gleiche wie eine LED &ndash; sogar ohne Vorwiderstand.',
        wrongExplanations: {
          0: 'Die Servo-Library ist nur fuer Servomotoren &ndash; sie erzeugt spezielle Positions-Impulse. Der aktive Summer braucht nur simples An/Aus.',
          2: 'tone() brauchst du nur beim PASSIVEN Summer, weil der keine eigene Ton-Elektronik hat. Der aktive Summer piepst schon bei einfachem HIGH.',
          3: 'Der Summer ist ein Aktor (Ausgabe), kein Sensor (Eingabe). analogRead() liest Werte ein &ndash; damit gibst du nichts aus.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Beim Ultraschall-Sensor gilt: Entfernung = Laufzeit &times; Schallgeschwindigkeit &divide; 2. Warum wird durch 2 geteilt?',
        options: [
          'Weil der Sensor zwei Augen (Sender und Empfaenger) hat',
          'Weil der Schall den Weg zweimal zuruecklegt: hin zum Hindernis UND zurueck zum Sensor',
          'Weil Ultraschall nur halb so schnell ist wie normaler Schall',
          'Weil der Arduino nur jede zweite Messung verwendet'
        ],
        correct: 1,
        explanation: 'Richtig! Die gemessene Laufzeit ist die Zeit fuer den KOMPLETTEN Weg: vom Sensor zum Hindernis und wieder zurueck. Die Entfernung zum Hindernis ist aber nur der halbe Weg &ndash; deshalb durch 2 teilen. Wie beim Echo im Gebirge: Du hoerst dein Echo nach der doppelten Strecke.',
        wrongExplanations: {
          0: 'Die zwei "Augen" sind zwar Sender und Empfaenger, aber das ist nicht der Grund fuer die 2. Es geht um den doppelten WEG des Schalls.',
          2: 'Nein, Ultraschall ist genauso schnell wie hoerbarer Schall (ca. 343 m/s) &ndash; er ist nur hoeher, nicht langsamer.',
          3: 'Der Arduino verwendet jede Messung. Die 2 steckt in der Physik: Hin- und Rueckweg zusammen sind doppelt so lang wie die Entfernung.'
        }
      },
      {
        type: 'matching',
        question: 'Ordne jedem Pin des HC-SR04 seine Funktion zu.',
        pairs: [
          { left: 'VCC', right: 'Stromversorgung (5V vom Arduino)' },
          { left: 'Trig', right: 'Ping ausloesen - Signal VOM Arduino zum Sensor' },
          { left: 'Echo', right: 'Laufzeit melden - Signal vom Sensor ZUM Arduino' },
          { left: 'GND', right: 'Masse (gemeinsamer Bezugspunkt)' }
        ],
        explanation: 'VCC und GND sind die Stromversorgung (5V und Masse). Die anderen beiden bilden ein Frage-Antwort-Paar: Ueber Trig sagt der Arduino "Miss jetzt!" (Ausgang), ueber Echo antwortet der Sensor mit der Laufzeit des Schalls (Eingang). Merkhilfe: Trig wie "Trigger" = Abzug druecken, Echo wie das Echo im Gebirge, das zurueckkommt.'
      }
    ],
    // === Praxis-Tab (Tab 4) ===
    // Klassischer Servo-Sweep zwischen 0 und 180. Bewusst ohne
    // Sensorintegration - die kommt erst in Folge-Lektionen.
    praxis: {
      aufgabe: {
        titel: 'Servo zwischen 0 und 180 Grad bewegen',
        auftrag: '<p>Schliesse einen SG90-Servo an deinen Arduino an. Schreibe ein Programm, das den Servo-Arm dauerhaft zwischen <strong>0&deg;</strong> und <strong>180&deg;</strong> hin- und her bewegt &ndash; mit einer Sekunde Pause in jeder Position.</p><p><strong>Deine drei Aufgaben:</strong></p><ol><li><strong>Hardware:</strong> Drei Kabel verbinden den Servo mit dem Arduino &ndash; ueber Breadboard oder direkt mit Jumper-Kabeln. Wichtig: <strong>Polung beachten!</strong></li><li><strong>Software:</strong> Vervollstaendige das Code-Geruest. <code>#include &lt;Servo.h&gt;</code> ist schon vorbereitet.</li><li><strong>Testen:</strong> Lade das Programm hoch und beobachte den Servo-Arm. Er sollte sich alle 1 Sekunde sichtbar bewegen.</li></ol>',
        lernziel: 'Du kannst einen Hobby-Servo elektrisch anschliessen, die Servo-Library im Code einbinden und mit <code>attach()</code> + <code>write()</code> auf bestimmte Positionen fahren lassen.'
      },
      bauteile: [
        { name: 'Arduino Uno', anzahl: 1 },
        { name: 'Steckbrett (Breadboard)', anzahl: 1, hinweis: 'Fuer saubere Stromverteilung' },
        { name: 'Servo SG90 (oder vergleichbar)', anzahl: 1, hinweis: 'Mit angeloetetem Kabel, drei Adern' },
        { name: 'Jumper-Kabel Male-Male', anzahl: 3, hinweis: 'rot, schwarz, gelb/orange' },
        { name: 'USB-Kabel', anzahl: 1, hinweis: 'Strom + Programm-Upload' }
      ],
      anschluss: {
        svg: `
          <figure class="schaltbild-figur">
            <figcaption><strong>1. Schaltplan</strong> &mdash; so funktioniert die Schaltung elektrisch:</figcaption>
            <img src="assets/lektion-32-servo-schaltplan.svg?v=6" alt="Schaltplan Servo: 5V - Servo-Versorgung, GND - Servo-Masse, Pin 9 - Servo-Signal" style="max-width: 100%; height: auto;" />
          </figure>
          <figure class="schaltbild-figur">
            <figcaption><strong>2. Aufbau am Steckbrett</strong> &mdash; so sieht der echte Aufbau aus:</figcaption>
            <img src="assets/lektion-32-servo-aufbau.svg?v=8" alt="Steckbrett-Aufbau Servo: Servo direkt mit Jumper-Kabeln an Arduino - rot zu 5V, schwarz zu GND, gelb zu Pin 9" style="max-width: 100%; height: auto;" />
          </figure>`,
        schritte: [
          'Stecke das <strong>rote Jumper-Kabel</strong> in den <strong>5V-Pin</strong> des Arduino und das andere Ende an die <strong>+Schiene</strong> oben am Breadboard.',
          'Stecke das <strong>schwarze Jumper-Kabel</strong> in einen <strong>GND-Pin</strong> des Arduino und das andere Ende an die <strong>&minus;Schiene</strong> oben am Breadboard.',
          'Stecke den Servo-Stecker (3 Pins) auf drei Male-Male-Jumper-Kabel: <strong>rotes</strong> Servokabel auf die <strong>+Schiene</strong>, <strong>braunes/schwarzes</strong> auf die <strong>&minus;Schiene</strong>, <strong>oranges/gelbes</strong> auf Loch <code>a10</code> am Breadboard.',
          'Verbinde mit einem <strong>gelben Jumper-Kabel</strong> Loch <code>b10</code> (gleiche Spalte wie das Signal-Kabel des Servos) mit <strong>Pin 9</strong> am Arduino.',
          'Pruefe noch einmal: ROT auf +Schiene, BRAUN/SCHWARZ auf -Schiene, ORANGE/GELB ueber das Breadboard zu Pin 9. <strong>Niemals</strong> die Polung vertauschen!',
          'Schliesse den Arduino mit dem USB-Kabel an den Computer. Lade dein Programm hoch.',
          'Beobachte den Servo: Der Arm sollte sich alle 1 Sekunde sichtbar bewegen &ndash; abwechselnd ganz nach links und ganz nach rechts.'
        ]
      },
      code_hinweise: {
        geruest:
`#include <Servo.h>

Servo meinServo;

void setup() {
  // TODO: Servo an Pin 9 anhaengen
  // Tipp: meinServo.attach(?);
}

void loop() {
  // TODO: Servo auf 0 Grad fahren (ganz links)
  // Tipp: meinServo.write(?);
  delay(1000); // 1 Sekunde warten

  // TODO: Servo auf 180 Grad fahren (ganz rechts)
  delay(1000); // 1 Sekunde warten
}`,
        tipps: [
          'Die Library und die Servo-Variable sind oben im Code-Geruest schon vorbereitet &ndash; du brauchst sie nicht selbst zu schreiben.',
          'In write() steht eine Zahl zwischen 0 und 180 &ndash; nichts anderes.',
          'Wenn der Servo nur einmal zuckt und dann still steht: Du hast vergessen, dass <code>loop()</code> sich endlos wiederholt &ndash; vermutlich hast du den zweiten <code>write()</code>-Befehl noch nicht ergaenzt.',
          'Wenn der Arduino bei jedem Servo-Befehl neu startet (LEDs blinken kurz): Stromversorgung reicht nicht. Dann nimm ein staerkeres USB-Netzteil oder eine externe 5V-Quelle fuer den Servo.'
        ]
      },
      loesung: {
        code:
`#include <Servo.h>

Servo meinServo;

void setup() {
  meinServo.attach(9);
}

void loop() {
  meinServo.write(0);
  delay(1000);
  meinServo.write(180);
  delay(1000);
}`,
        erklaerung: '<p>Im <code>setup()</code> wird der Servo einmalig an Pin 9 angehaengt. Das passiert nur ein einziges Mal beim Start.</p><p>In der <code>loop()</code> wird der Servo abwechselnd auf 0&deg; und 180&deg; gefahren, mit jeweils 1 Sekunde Pause dazwischen. Ohne das <code>delay()</code> wuerde der Servo sofort den naechsten Befehl bekommen &ndash; und sich nicht sichtbar bewegen koennen (mechanisch braucht er ca. 0,3 Sekunden, um 180&deg; zu fahren).</p><p><strong>Erweiterungs-Idee fuer schnellere Schueler:innen:</strong> Statt nur zwei Positionen kannst du auch mehrere Zwischenstellungen einprogrammieren, z.B. 0&deg;, 45&deg;, 90&deg;, 135&deg;, 180&deg; mit jeweils 500&nbsp;ms Pause &ndash; das sieht aus wie ein Roboterarm, der einzelne Punkte abfaehrt.</p>',
        haeufige_fehler: [
          '<strong>Servo zuckt nur kurz und macht nichts mehr:</strong> Im loop() ist nur ein <code>write()</code> &ndash; aber kein zweites. Ohne Wechsel der Position passiert nichts sichtbar.',
          '<strong>Arduino startet bei jeder Servo-Bewegung neu:</strong> USB-Strom reicht nicht. Externe 5V-Versorgung anschliessen (Servo direkt ans Netzteil, GND mit Arduino-GND verbinden).',
          '<strong>Servo brummt, bewegt sich aber nicht:</strong> Signal-Kabel ist nicht angeschlossen oder steckt am falschen Pin. Pruefen, ob der orange/gelbe Draht wirklich an Pin 9 ist und ob im Code <code>attach(9)</code> steht.',
          '<strong>Compiler-Fehler "Servo was not declared":</strong> <code>#include &lt;Servo.h&gt;</code> fehlt ganz oben im Programm.',
          '<strong>Rauch / verbrannter Geruch:</strong> Polung vertauscht! Rot und Braun verwechselt &ndash; im schlimmsten Fall ist der Servo ueber-gegrillt. Bei staerkerem Servo kann auch der Pin am Arduino kaputtgehen.',
          '<strong>Servo dreht voll durch (mehr als 180&deg;):</strong> Du hast einen "Continuous Rotation"-Servo erwischt &ndash; der ist mechanisch anders. Standard-SG90 stoppt bei 180&deg;.'
        ]
      }
    }
  },
  // ===================== LEKTION 20 (DC-Motor mit Transistor, id 33) =====================
  // RSAP-Pflicht-Lektion: DC-Motor mit Transistor taucht in mehreren
  // Pool-Aufgaben auf (Lueftung, Bohrmaschine, Hebebuehne).
  // Erster Aktor mit *separater* Stromschaltung: Arduino-Pin steuert nur,
  // der Strom fuer den Motor kommt aus +5V. Drei neue Konzepte zusammen:
  // Transistor als Schalter, Basiswiderstand, Freilaufdiode.
  {
    id: 33,
    title: 'Transistor als Schalter (Grundlagen)',
    explanation: {
      html: `
        <h2>DC-Motor &ndash; ein Motor, der einfach nur dreht</h2>
        <p>Bisher hast du LEDs und einen Servomotor angesteuert. Jetzt lernst du den <strong>Gleichstrommotor</strong> (engl. <em>DC-Motor</em>) kennen: das, was in fast jedem batteriebetriebenen Spielzeug, in der Bohrmaschine, in der Kuechenmaschine und in der Lueftungsklappe steckt. Er dreht einfach, solange Strom fliesst &ndash; und stoppt, sobald der Strom weg ist.</p>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Ein DC-Motor ist wie ein <strong>Wasserrad</strong>: Wasser kommt rein &rarr; Rad dreht. Wasser stoppt &rarr; Rad steht. Er weiss nicht, wo er steht (das war der Servo). Er dreht einfach nur. Dafuer dreht er <strong>schneller, kraeftiger und kontinuierlich</strong>.
        </div>

        <hr class="section-divider">

        <div class="warning-box">
          <strong>Wichtig vorab &ndash; das grosse Problem:</strong> Ein Arduino-Pin liefert nur etwa <strong>20 mA</strong> Dauerstrom (kurzzeitig bis 40 mA). Schon ein <strong>kleiner</strong> Hobby-DC-Motor zieht das Mehrfache davon (typisch <strong>50&ndash;100 mA</strong>), beim Anlauf kurz noch mehr. Wenn du den Motor <strong>direkt</strong> an einen Pin anschliesst, brennt der Pin durch &ndash; und damit oft der ganze Arduino. Das darf <strong>nie</strong> passieren.
          <br><br>
          <strong>Die Loesung:</strong> Ein <strong>Transistor</strong> uebernimmt den schweren Job &ndash; der Arduino-Pin steuert ihn nur.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Der Transistor &ndash; ein elektronischer Schalter</h3>
          <p>Ein Transistor (Typ <strong>BC547</strong> &ndash; klein, schwarz, mit drei Beinen) funktioniert wie ein <strong>elektrisches Relais</strong>: Ein winziges Steuer-Signal schaltet einen viel groesseren Strom.</p>

          <div class="analogy-box">
            <strong>Alltagsanalogie:</strong> Ein Transistor ist wie eine <strong>Funkfernsteuerung fuer ein Garagentor</strong>. Du druckst einen winzigen Knopf (ganz kleine Energie) &ndash; und das schwere Tor (riesige Energie) bewegt sich. Der Transistor verstaerkt also das schwache Pin-Signal so, dass es den hungrigen Motor schalten kann.
          </div>

          <p>Der BC547 hat drei Beine, jedes mit eigenem Namen:</p>
          <table class="icon-table">
            <tr><th>Bein</th><th>Kurzname</th><th>Wozu?</th></tr>
            <tr><td><strong>Basis</strong></td><td>B</td><td>Steuer-Eingang &ndash; bekommt das Signal vom Arduino-Pin</td></tr>
            <tr><td><strong>Collector</strong></td><td>C</td><td>Hier fliesst der grosse Motor-Strom rein</td></tr>
            <tr><td><strong>Emitter</strong></td><td>E</td><td>Hier fliesst der Strom raus &ndash; geht zu GND</td></tr>
          </table>

          <div class="tip-box">
            <strong>Pin-Reihenfolge beim BC547:</strong> Halte den Transistor so, dass die <strong>flache Seite</strong> mit dem Aufdruck dich anschaut, Beine zeigen nach unten. Dann sind die Beine von <strong>links nach rechts: C - B - E</strong> (Collector, Basis, Emitter). Merksatz: "<strong>C</strong>hef <strong>B</strong>efiehlt <strong>E</strong>nde". <strong>Im Zweifel:</strong> Datenblatt checken oder mit dem Multimeter im Diodentest die Basis suchen (sie hat eine Diodenstrecke zu C und zu E).
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Warum der Basiswiderstand?</h3>
          <p>Zwischen Arduino-Pin und Basis kommt ein <strong>Widerstand (1 k&Omega;)</strong>. Warum? Weil die Basis-Emitter-Strecke des Transistors wie eine Diode wirkt: einmal "geoeffnet", fliesst dort ein Strom &ndash; und ohne Widerstand wuerde dieser Strom den Arduino-Pin grillen.</p>
          <p>Der 1 k&Omega;-Widerstand begrenzt den Basis-Strom auf ca. <strong>4 mA</strong> (5 V &divide; 1000 &Omega; abzueglich 0,7 V Basis-Emitter-Spannung). Das ist fuer den Pin total ungefaehrlich, aber genug, damit der Transistor voll "aufmacht".</p>

          <div class="analogy-box">
            <strong>Bild dazu:</strong> Der Basiswiderstand ist wie eine <strong>Drossel im Wasserhahn</strong>: Du brauchst nur einen duennen Strahl auf den Hebel, um die grosse Wasserleitung zu oeffnen &ndash; nicht den vollen Druck.
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die Freilaufdiode &ndash; sonst stirbt der Transistor</h3>
          <p>Ein Motor besteht aus einer <strong>Spule</strong>. Solange Strom fliesst, baut sich ein Magnetfeld auf. <strong>Wenn du den Strom abschaltest, baut sich dieses Magnetfeld blitzschnell wieder ab</strong> &ndash; und erzeugt dabei eine kurze, sehr hohe Spannungsspitze (oft mehrere Dutzend Volt!) in <strong>umgekehrter Richtung</strong>.</p>
          <p>Bei einem kleinen Hobby-Motor sind das oft schon <strong>mehrere Dutzend Volt</strong>, bei groesseren Motoren auch ueber 100 V &ndash; in jedem Fall genug, um den Transistor in Millisekunden zu zerstoeren. Die Loesung: Eine <strong>Diode</strong> (Typ <strong>1N4148</strong> oder <strong>1N4007</strong>) parallel zum Motor, mit der <strong>Kathode (Ring) zu +5V</strong>. Im Normalbetrieb sperrt die Diode (kein Stromfluss). Aber bei der Spannungsspitze leitet sie und <strong>fuehrt die Spitze sicher zurueck</strong> zur Versorgung. Deshalb heisst sie <strong>Freilaufdiode</strong>.</p>

          <div class="analogy-box">
            <strong>Alltagsanalogie:</strong> Stell dir eine <strong>Wassersaeule in einem Rohr</strong> vor, die mit voller Geschwindigkeit fliesst. Wenn du das Ventil abrupt schliesst, prallt das Wasser zurueck (Druckstoss). In Heizungsrohren hoerst du das als "Bumm". Die Freilaufdiode ist wie ein <strong>Druckausgleichsbehaelter</strong> &ndash; sie faengt den Stoss ab, damit nichts kaputtgeht.
          </div>

          <div class="warning-box">
            <strong>Polung der Diode:</strong> Die Diode hat einen <strong>silbernen oder schwarzen Ring</strong> auf einer Seite &ndash; das ist die <strong>Kathode (Minus-Seite im normalen Stromfluss)</strong>. Der Ring zeigt in der Schaltung zur <strong>+5V-Seite</strong> des Motors. Wenn du sie falsch herum einbaust, kurzschliesst du die Stromversorgung &ndash; der Motor laeuft nicht und es kann rauchen.
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Wofuer brauchst du den Transistor als Schalter?</h3>
          <p>Ein Transistor schaltet mit einem winzigen Steuersignal einen viel groesseren Strom. Das brauchst du immer dann, wenn ein Arduino-Pin etwas Stromhungriges schalten soll &ndash; einen kleinen Motor, eine starke Lampe oder ein Relais:</p>

          <table class="icon-table">
            <tr><th>Anwendung</th><th>Aufgabe</th><th>Typische Steuerung</th></tr>
            <tr><td><strong>Lueftung / Geblaese</strong></td><td>Verbraucher an bei zu warmer Temperatur</td><td>NTC misst &rarr; bei &gt; Schwelle Transistor an</td></tr>
            <tr><td><strong>Lampe / Heizdraht</strong></td><td>starker Verbraucher an/aus</td><td>Pin schaltet ueber den Transistor</td></tr>
            <tr><td><strong>Kleiner Motor</strong></td><td>Motor laeuft bei Tastendruck</td><td>Taster gedrueckt &rarr; Transistor an</td></tr>
          </table>

          <div class="warning-box">
            <strong>Wichtig fuers RSAP:</strong> Im BW-Pruefungsskript wird der <strong>Gleichstrommotor selbst NICHT mit einem Einzeltransistor</strong>, sondern mit dem <strong>Motortreiber L298N</strong> gesteuert &ndash; das lernst du in der naechsten Lektion. Diese Lektion hier ist die <strong>Grundlage</strong>: "Transistorgrundschaltungen" sind ein eigenes Pruefungsthema (Bereich B1). Du verstehst hier, <em>wie</em> ein Transistor als Schalter arbeitet.
          </div>

          <p>In dieser Lektion lernst du den <strong>Grundbaustein</strong>: einen Verbraucher mit <code>digitalWrite()</code> ueber einen Transistor ein- und ausschalten.</p>

          <div class="tip-box">
            <strong>Hinweis fuer groessere Motoren:</strong> Der BC547 ist nur fuer Motoren bis ca. <strong>100 mA</strong> ausgelegt (Datenblatt). Fuer staerkere Motoren (Bohrmaschinen-Modell, kraeftige Geblaese) brauchst du einen staerkeren Transistor &ndash; z.B. <strong>BC337</strong> (bis 800 mA) oder <strong>TIP120</strong> (bis 5 A). Die Schaltung bleibt sonst gleich.
          </div>
        </div>

        <div class="warning-box">
          <strong>Wichtig fuer die Sicherheit:</strong>
          <ul>
            <li><strong>Nie</strong> einen Motor direkt an einen Arduino-Pin &ndash; immer ueber einen Transistor.</li>
            <li><strong>Nie</strong> die Freilaufdiode weglassen &ndash; auch bei kleinen Motoren.</li>
            <li><strong>Diode richtig herum</strong>: Ring (Kathode) zur +5V-Seite, sonst Kurzschluss.</li>
            <li><strong>Basiswiderstand nicht vergessen</strong> &ndash; sonst killt der Basis-Strom den Arduino-Pin.</li>
            <li>Bei <strong>groesseren Motoren</strong> (&gt; 200 mA) reicht der USB-Strom nicht. Dann externe 5&ndash;9 V Versorgung anschliessen und GND mit Arduino-GND verbinden.</li>
          </ul>
        </div>

        <hr class="section-divider">

        <div class="info-card" style="border-left: 3px solid #2980B9;">
          <h3>Plus-Box: Drehzahl regeln mit PWM</h3>
          <p>Erinnerst du dich an <strong>Lektion 14 (PWM)</strong>? Mit <code>analogWrite(pin, wert)</code> kannst du statt nur HIGH/LOW eine Zahl zwischen 0 und 255 schicken. Das funktioniert genauso fuer den Motor &ndash; <strong>weil der Transistor das PWM-Signal einfach mitmacht</strong>:</p>
          <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
digitalWrite(motorPin, LOW);  // Motor steht
analogWrite(motorPin, 128);   // Motor laeuft halbe Drehzahl
analogWrite(motorPin, 255);   // Motor laeuft volle Drehzahl</pre>
          <p>Wichtig: Du musst dafuer einen <strong>PWM-faehigen Pin</strong> waehlen (mit ~ Zeichen auf dem Arduino, z.B. Pin 3, 5, 6, 9, 10, 11). In dieser Grundlagen-Lektion bleibt es beim einfachen Ein-/Ausschalten mit <code>digitalWrite()</code> an Pin 9 &ndash; die Drehzahl-Regelung im Pruefungsstoff laeuft spaeter ueber den Enable-Pin (ENA) des L298N.</p>
        </div>
      `
    },
    example: {
      title: 'Beispiel-Programm: Motor 2 Sekunden an, 2 Sekunden aus',
      steps: [
        {
          label: 'Konstante fuer den Motor-Pin anlegen',
          html: `
            <p>Ganz oben im Programm legen wir uns eine Konstante an &ndash; so kannst du spaeter den Pin leicht aendern, ohne den Code zu durchsuchen:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
const int motorPin = 9;</pre>
            <p>Wichtig: Das ist <strong>nicht</strong> der Motor selbst, sondern der Pin am Arduino, an dem die <strong>Basis des Transistors</strong> haengt (ueber den 1 k&Omega;-Widerstand). Der Transistor steuert dann den Motor.</p>
          `
        },
        {
          label: 'Im setup(): Pin als Ausgang setzen',
          html: `
            <p>Der Arduino muss wissen, dass Pin 9 etwas <strong>aussenden</strong> soll &ndash; nicht etwas einlesen. Dafuer gibt es <code>pinMode()</code>:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
void setup() {
  pinMode(motorPin, OUTPUT);
}</pre>
            <p>Das machst du nur EINMAL beim Start. Danach ist Pin 9 fuer immer als Ausgang konfiguriert.</p>
            <div class="tip-box">
              <strong>Warum kein <code>attach()</code> wie beim Servo?</strong> Der Servo brauchte eine eigene Library, weil er ein spezielles Puls-Signal will. Der DC-Motor will einfach nur "Strom an/aus" &ndash; das kann der Arduino mit Bordmitteln, ohne Library.
            </div>
          `
        },
        {
          label: 'Im loop(): Motor schalten',
          html: `
            <p>Jetzt schalten wir den Motor abwechselnd an und aus &ndash; jeweils 2 Sekunden lang:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
void loop() {
  digitalWrite(motorPin, HIGH);  // Motor an
  delay(2000);                    // 2 Sekunden laufen lassen
  digitalWrite(motorPin, LOW);   // Motor aus
  delay(2000);                    // 2 Sekunden Pause
}</pre>
            <p>Was passiert hier?</p>
            <ol>
              <li><code>digitalWrite(motorPin, HIGH)</code> &rarr; Pin 9 liefert 5 V &rarr; Strom fliesst durch den Basiswiderstand in die Basis &rarr; Transistor "macht auf" &rarr; Motor laeuft.</li>
              <li><code>delay(2000)</code> &rarr; 2 Sekunden warten.</li>
              <li><code>digitalWrite(motorPin, LOW)</code> &rarr; Pin 9 liefert 0 V &rarr; kein Basis-Strom &rarr; Transistor sperrt &rarr; Motor stoppt.</li>
              <li><code>delay(2000)</code> &rarr; 2 Sekunden Pause, dann beginnt der loop wieder von vorn.</li>
            </ol>
          `
        },
        {
          label: 'Das vollstaendige Programm',
          html: `
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #27AE60;">
const int motorPin = 9;

void setup() {
  pinMode(motorPin, OUTPUT);
}

void loop() {
  digitalWrite(motorPin, HIGH);
  delay(2000);
  digitalWrite(motorPin, LOW);
  delay(2000);
}</pre>
            <p>Nur 10 Zeilen Code &ndash; und der Motor laeuft im Rhythmus. Genau dieses Grundgeruest erweitern Pruefungsaufgaben spaeter um Sensoren oder Taster: "Wenn NTC heiss &rarr; Motor an (Lueftung), sonst aus" oder "Solange Taster gedrueckt &rarr; Motor an (Bohrmaschine)".</p>

            <div class="tip-box">
              <strong>Auffaellig:</strong> Der Code sieht fast genauso aus wie eine LED-Ansteuerung aus Lektion 5! Das ist kein Zufall: Der Transistor entkoppelt die Software-Welt (Pin schaltet) vollstaendig von der Hardware-Welt (Motor laeuft). Aus Software-Sicht ist ein Motor mit Transistor das Gleiche wie eine LED.
            </div>
          `
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Warum darf ein kleiner DC-Motor NIE direkt an einen Arduino-Pin angeschlossen werden?',
        options: [
          'Weil der Motor zu langsam dreht ohne Transistor',
          'Weil der Motor zu viel Strom zieht und der Pin viel zu schwach ist - der Pin brennt durch',
          'Weil Arduino keine Motoren unterstuetzt',
          'Weil der Code dann nicht funktioniert'
        ],
        correct: 1,
        explanation: 'Richtig! Ein Arduino-Pin liefert dauerhaft nur ca. 20 mA. Schon ein kleiner Motor zieht ein Vielfaches davon. Wenn du direkt anschliesst, brennt der Pin in Sekunden durch &ndash; oft mit dem ganzen Arduino. Deshalb braucht jeder Motor einen Transistor als "Verstaerker".',
        wrongExplanations: {
          0: 'Die Drehzahl (Umdrehungen pro Minute) und die Stromstaerke (mA) sind zwei verschiedene Groessen. Der Pin geht durch zu viel Strom kaputt, nicht durch eine bestimmte Drehzahl.',
          2: 'Doch &ndash; Arduino kann Motoren steuern, aber eben nicht direkt. Der Pin gibt nur das Steuersignal, der Strom kommt aus 5V ueber einen Transistor.',
          3: 'Der Code waere identisch &ndash; das Problem ist rein elektrisch (Hardware), nicht im Programm.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Welches Bein des BC547-Transistors wird mit dem Arduino-Pin (ueber den 1 kOhm-Widerstand) verbunden?',
        options: [
          'Collector (C)',
          'Basis (B)',
          'Emitter (E)',
          'Egal - die Beine sind austauschbar'
        ],
        correct: 1,
        explanation: 'Richtig! Die Basis ist der Steuer-Eingang. Hier kommt das Signal vom Arduino an. Collector geht zum Motor, Emitter zu GND. Wenn du das vertauschst, funktioniert der Transistor nicht.',
        wrongExplanations: {
          0: 'Der Collector ist der Strom-Eingang fuer den grossen Motor-Strom, nicht das Steuer-Signal. Er wird mit dem freien Motor-Kabel verbunden (das andere Motor-Kabel geht an +5V), nicht mit dem Arduino-Pin.',
          2: 'Der Emitter ist der "Strom-Ausgang" und geht zu GND. Wenn du den Arduino-Pin hierhin legst, fliesst der gesamte Motor-Strom in den Arduino &ndash; mit fatalen Folgen.',
          3: 'Nein! Die drei Beine haben klar getrennte Aufgaben. Vertauschen fuehrt entweder zu "nichts passiert" oder zu einem zerstoerten Transistor / Arduino.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Welche Zeile schaltet den Motor an, wenn motorPin = 9 ist?',
        options: [
          'digitalRead(motorPin);',
          'analogRead(motorPin);',
          'digitalWrite(motorPin, HIGH);',
          'pinMode(motorPin, INPUT);'
        ],
        correct: 2,
        explanation: 'Richtig! digitalWrite(motorPin, HIGH) legt 5 V an Pin 9. Diese 5 V gehen ueber den Basiswiderstand an die Transistor-Basis, der Transistor "macht auf", der Motor laeuft.',
        wrongExplanations: {
          0: 'digitalRead() LIEST den Zustand eines Pins, schaltet ihn aber nicht. Das ist fuer Eingaenge gedacht (Taster), nicht fuer Ausgaenge (Motor).',
          1: 'analogRead() liest analoge Sensorwerte (0-1023) ein - z.B. vom Poti oder NTC. Mit Schalten hat das nichts zu tun.',
          3: 'pinMode(..., INPUT) waere genau falsch: Der Motor-Pin muss OUTPUT sein. Mit INPUT kann der Pin gar nichts aussenden, der Motor laeuft nie.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Was passiert ohne Freilaufdiode, wenn der Transistor den Motor abschaltet?',
        options: [
          'Der Motor laeuft langsam aus - sonst nichts',
          'Eine kurze, hohe Spannungsspitze entsteht durch die Motor-Spule und kann den Transistor zerstoeren',
          'Der Motor dreht in die falsche Richtung',
          'Der Arduino startet neu'
        ],
        correct: 1,
        explanation: 'Richtig! Der Motor ist eine Spule. Beim Abschalten baut sich das Magnetfeld blitzschnell ab und erzeugt eine Spannungsspitze (oft mehrere Dutzend Volt) in umgekehrter Richtung. Diese Spitze killt den Transistor in Millisekunden. Die Freilaufdiode leitet die Spitze sicher ab.',
        wrongExplanations: {
          0: 'Der Motor laeuft tatsaechlich kurz nach - aber das ist nicht das Problem. Das Problem ist die elektrische Spannungsspitze, die in der Spule entsteht und die Elektronik zerstoert.',
          2: 'Nein &ndash; die Drehrichtung haengt nur von der Polung der Versorgung ab. Die Spannungsspitze beim Abschalten dreht den Motor nicht um, sie schaedigt den Transistor.',
          3: 'Bei einem schweren Spannungsstoss kann das tatsaechlich passieren (USB-Versorgung bricht ein) &ndash; aber das ist nur eine Folge, nicht der Hauptgrund fuer die Diode. Auch ohne Reset stirbt der Transistor.'
        }
      },
      {
        type: 'matching',
        question: 'Ordne jedes Bauteil seiner Aufgabe in der Motor-Schaltung zu.',
        pairs: [
          { left: 'Transistor BC547', right: 'Elektronischer Schalter - schaltet grossen Motor-Strom mit kleinem Pin-Signal' },
          { left: '1 kOhm-Widerstand', right: 'Begrenzt den Basis-Strom und schuetzt den Arduino-Pin' },
          { left: 'Freilaufdiode 1N4148', right: 'Faengt die Spannungsspitze beim Abschalten ab und schuetzt den Transistor' },
          { left: 'DC-Motor', right: 'Wandelt elektrische Energie in Drehbewegung um' }
        ],
        explanation: 'Jedes Bauteil hat genau eine Schutz- oder Schaltaufgabe: Der Transistor ist der eigentliche Schalter, der mit dem schwachen Pin-Signal den grossen Motorstrom steuert. Der 1 k&Omega;-Widerstand begrenzt den Basis-Strom, damit der Arduino-Pin nicht durchbrennt. Die Freilaufdiode faengt die Spannungsspitze ab, die der Motor beim Abschalten erzeugt, und schuetzt so den Transistor. Der Motor selbst wandelt den Strom in Drehbewegung um.'
      }
    ],
    // === Praxis-Tab (Tab 4) ===
    // Klassisches DC-Motor-Schalten 2s an / 2s aus. Bewusst ohne Sensor
    // und ohne PWM - die Drehzahl-Regelung kommt nur als Plus-Box im
    // Explanation-Tab, damit der Praxis-Fokus auf der Hardware-Schaltung
    // (Transistor + Diode + Basiswiderstand) liegt.
    praxis: {
      aufgabe: {
        titel: 'DC-Motor mit Transistor schalten',
        auftrag: '<p>Baue eine Schaltung, in der ein kleiner DC-Motor abwechselnd <strong>2 Sekunden laeuft</strong> und <strong>2 Sekunden stillsteht</strong>. Verwende dafuer einen NPN-Transistor <strong>BC547</strong> als Schalter, einen <strong>1 k&Omega;-Widerstand</strong> als Basisvorwiderstand und eine <strong>Freilaufdiode (1N4148)</strong> parallel zum Motor.</p><p><strong>Deine drei Aufgaben:</strong></p><ol><li><strong>Hardware:</strong> Schaltung am Breadboard aufbauen. Polung der Diode beachten (Ring zur +5V-Seite).</li><li><strong>Software:</strong> Vervollstaendige das Code-Geruest.</li><li><strong>Testen:</strong> Lade das Programm hoch. Der Motor sollte rhythmisch laufen und stoppen.</li></ol>',
        lernziel: 'Du kannst eine vollstaendige Motor-Ansteuerung mit Transistor-Schalter aufbauen und mit <code>digitalWrite()</code> ein- und ausschalten.'
      },
      bauteile: [
        { name: 'Arduino Uno', anzahl: 1 },
        { name: 'Steckbrett (Breadboard)', anzahl: 1 },
        { name: 'Kleiner DC-Motor (3-6 V, max. 100 mA)', anzahl: 1, hinweis: 'z.B. Mabuchi RE-140 oder vergleichbarer Hobby-Motor mit max. ca. 100 mA Stromaufnahme' },
        { name: 'NPN-Transistor BC547', anzahl: 1, hinweis: 'Flache Seite zum Aufdruck: C-B-E von links' },
        { name: 'Widerstand 1 k&Omega; (braun-schwarz-rot)', anzahl: 1, hinweis: 'Basisvorwiderstand' },
        { name: 'Diode 1N4148 (oder 1N4007)', anzahl: 1, hinweis: 'Freilaufdiode, Ring = Kathode' },
        { name: 'Jumper-Kabel Male-Male', anzahl: 4, hinweis: 'fuer +5V, GND, Pin 9 und Motor-Anschluesse' },
        { name: 'USB-Kabel', anzahl: 1, hinweis: 'Strom + Programm-Upload' }
      ],
      anschluss: {
        svg: `
          <figure class="schaltbild-figur">
            <figcaption><strong>1. Schaltplan</strong> &mdash; so funktioniert die Schaltung elektrisch:</figcaption>
            <img src="assets/lektion-33-dcmotor-schaltplan.svg?v=2" alt="Schaltplan DC-Motor: 5V - Motor - Collector BC547 - Emitter - GND; Pin 9 - 1k - Basis; Freilaufdiode parallel zum Motor mit Kathode zu +5V" style="max-width: 100%; height: auto;" />
          </figure>
          <figure class="schaltbild-figur">
            <figcaption><strong>2. Aufbau am Steckbrett</strong> &mdash; so sieht der echte Aufbau aus:</figcaption>
            <img src="assets/lektion-33-dcmotor-aufbau.svg?v=4" alt="Steckbrett-Aufbau DC-Motor: BC547 mit flacher Seite nach vorn, Basiswiderstand zu Pin 9, Motor zwischen +5V und Collector, Diode parallel zum Motor" style="max-width: 100%; height: auto;" />
          </figure>`,
        schritte: [
          '<strong>Erinnerung zum Breadboard:</strong> In der oberen Haelfte sind die Reihen <code>a</code>&ndash;<code>e</code> einer <em>Spalte</em> elektrisch miteinander verbunden. Wenn du also Bauteile in Spalte 10 (in unterschiedlichen Reihen) steckst, haengen alle am selben Knoten.',
          'Stecke ein <strong>rotes Jumper-Kabel</strong> vom <strong>5V-Pin</strong> des Arduino in die <strong>+Schiene</strong> oben am Breadboard.',
          'Stecke ein <strong>schwarzes Jumper-Kabel</strong> von einem <strong>GND-Pin</strong> des Arduino in die <strong>&minus;Schiene</strong> oben am Breadboard.',
          'Setze den <strong>BC547-Transistor</strong> ins Breadboard so, dass die <strong>flache Seite</strong> dich anschaut. Die drei Beine kommen in drei nebeneinanderliegende Spalten der oberen Haelfte, alle in <strong>Reihe e</strong>. Von <strong>links</strong>: <strong>Collector (C)</strong> in <code>e10</code>, <strong>Basis (B)</strong> in <code>e11</code>, <strong>Emitter (E)</strong> in <code>e12</code>.',
          'Verbinde mit einem <strong>schwarzen Jumper-Kabel</strong> die <strong>Emitter-Spalte</strong> (z.B. <code>a12</code>, gleiche Spalte wie e12) mit der <strong>&minus;Schiene</strong> &ndash; so haengt der Emitter an GND.',
          'Stecke den <strong>1 k&Omega;-Widerstand</strong> mit einem Bein in die <strong>Basis-Spalte</strong> (z.B. <code>d11</code>, gleiche Spalte wie e11) und mit dem anderen Bein in eine <strong>freie Spalte</strong> daneben (z.B. <code>d14</code>).',
          'Verbinde mit einem <strong>gelben Jumper-Kabel</strong> die freie Spalte vom Widerstand (<code>b14</code>) mit <strong>Pin 9</strong> am Arduino.',
          'Stecke den <strong>Motor</strong> mit seinen zwei Kabeln: ein Kabel an die <strong>+Schiene</strong> (Motor-Plus an +5V), das andere Kabel in die <strong>Collector-Spalte</strong> &ndash; z.B. <code>b10</code> (gleiche Spalte wie der Collector in e10).',
          'Stecke die <strong>Diode</strong> parallel zum Motor &ndash; <strong>Achtung Polung</strong>: Der <strong>Ring</strong> der Diode (Kathode) muss zur <strong>+Schiene</strong> zeigen. Also: Ring-Bein in das +Schiene-Loch ueber Spalte 10, anderes Bein in <code>a10</code> (gleiche Spalte wie das Motor-Kabel in b10 und der Collector in e10).',
          'Pruefe alles noch einmal langsam: Transistor-Beine richtig (C-B-E von links)? Ring der Diode wirklich zur +Schiene? Widerstand zwischen Basis und Pin 9? Erst dann den Arduino per USB anschliessen.',
          'Lade das Programm hoch. Der Motor sollte sofort anlaufen, 2 Sekunden drehen, 2 Sekunden pausieren &ndash; endlos.'
        ]
      },
      code_hinweise: {
        geruest:
`const int motorPin = 9;

void setup() {
  // TODO: Pin 9 als Ausgang setzen
  // Tipp: pinMode(?, ?);
}

void loop() {
  // TODO: Motor einschalten
  // Tipp: digitalWrite(?, ?);
  delay(2000); // 2 Sekunden laufen lassen

  // TODO: Motor ausschalten
  delay(2000); // 2 Sekunden Pause
}`,
        tipps: [
          'Der Pin-Mode ist OUTPUT &ndash; Pin 9 soll etwas aussenden, nicht einlesen.',
          'Zum Einschalten gibst du HIGH (= 5 V) auf den Pin, zum Ausschalten LOW (= 0 V).',
          'Wenn der Motor gar nicht laeuft: Polung der Diode pruefen (Ring zur +5V-Seite!) &ndash; verkehrt herum schliesst sie die Versorgung kurz.',
          'Wenn der Motor laeuft, aber NIE stoppt: Du hast den zweiten <code>digitalWrite()</code>-Befehl wahrscheinlich noch nicht ergaenzt.',
          'Wenn der Arduino bei Motor-Start neu startet (LED blinkt kurz): USB-Strom ist zu schwach. Anderen USB-Port testen oder externes 5V-Netzteil.'
        ]
      },
      loesung: {
        code:
`const int motorPin = 9;

void setup() {
  pinMode(motorPin, OUTPUT);
}

void loop() {
  digitalWrite(motorPin, HIGH);
  delay(2000);
  digitalWrite(motorPin, LOW);
  delay(2000);
}`,
        erklaerung: '<p>Im <code>setup()</code> wird Pin 9 einmalig als Ausgang definiert.</p><p>In der <code>loop()</code> schaltet der Arduino den Pin abwechselnd auf HIGH (5 V &rarr; Transistor leitet &rarr; Motor an) und LOW (0 V &rarr; Transistor sperrt &rarr; Motor aus). Zwischen den Wechseln steht jeweils ein <code>delay(2000)</code> &ndash; 2 Sekunden Pause, damit der Motor sichtbar dreht und stoppt.</p><p><strong>Erweiterungs-Idee fuer schnellere Schueler:innen:</strong> Tausche <code>digitalWrite(motorPin, HIGH)</code> gegen <code>analogWrite(motorPin, 128)</code> und du hast halbe Drehzahl &ndash; weil Pin 9 PWM-faehig ist. Mit einem Poti am A0 und <code>analogWrite(motorPin, map(analogRead(A0), 0, 1023, 0, 255))</code> wird daraus ein einstellbarer Drehzahlregler.</p>',
        haeufige_fehler: [
          '<strong>Motor laeuft gar nicht und der Transistor wird heiss:</strong> Diode falsch herum eingebaut &ndash; der Ring muss zur +5V-Seite zeigen. Sofort Strom abschalten, Diode umdrehen.',
          '<strong>Motor laeuft staendig, auch wenn der Pin LOW ist:</strong> Du hast Collector und Emitter vertauscht. Beim BC547 (flache Seite zum Betrachter): C-B-E von links.',
          '<strong>Motor zuckt nur und es riecht warm:</strong> Basiswiderstand vergessen &ndash; der Pin liefert ungebremst Strom in die Basis und der Pin geht kaputt. Sofort abschalten und 1 k&Omega; nachruesten.',
          '<strong>Arduino startet bei jedem Motor-Start neu:</strong> USB-Strom reicht nicht aus. Externes 5&ndash;9 V Netzteil an Vin / 5V anschliessen (GND verbinden!) oder anderen USB-Port testen.',
          '<strong>Compiler-Fehler bei digitalWrite:</strong> Vergiss nicht das Komma zwischen Pin-Nummer und HIGH/LOW &ndash; <code>digitalWrite(motorPin, HIGH);</code> ist richtig, <code>digitalWrite(motorPin HIGH);</code> nicht.',
          '<strong>Motor knattert / dreht ruckelig:</strong> Diode fehlt oder ist defekt. Die Spannungsspitzen beim Abschalten stoeren den Transistor &ndash; immer eine 1N4148 / 1N4007 parallel zum Motor mit Ring zu +5V.'
        ]
      }
    }
  },
  // ===================== LEKTION 21 (DC-Motor mit L298N, id 34) =====================
  // RSAP-Pflicht: BW-Skript Kap. 9 steuert den Gleichstrommotor ueber den
  // Motortreiber L298N (H-Bruecke). Drehrichtung via IN1/IN2, Drehzahl via
  // analogWrite am ENA-Pin. Pin-Belegung laut Skript: ENA=10, IN1=9, IN2=8.
  {
    id: 34,
    title: 'DC-Motor mit L298N',
    explanation: {
      html: `
        <h2>DC-Motor steuern &ndash; mit dem Motortreiber L298N</h2>
        <p>In der letzten Lektion hast du gelernt, wie ein <strong>Transistor</strong> einen Verbraucher schaltet. Ein Transistor kann den Motor aber nur <strong>an- und ausschalten</strong> &ndash; er dreht immer in dieselbe Richtung. Sobald du die <strong>Drehrichtung umkehren</strong> willst (vorwaerts/rueckwaerts) oder zwei Motoren brauchst, nimmst du einen <strong>Motortreiber</strong>. Genau das macht das BW-Pruefungsskript &ndash; mit dem <strong>L298N</strong>.</p>

        <div class="warning-box">
          <strong>Pruefungsrelevant (RSAP Technik BW):</strong> Im Pruefungsskript wird der Gleichstrommotor <strong>ausschliesslich ueber den Motortreiber L298N</strong> angesteuert &ndash; nicht ueber einen Einzeltransistor. Diese Lektion bildet genau das ab.
        </div>

        <div class="analogy-box">
          <strong>Alltagsanalogie:</strong> Der L298N ist wie ein <strong>Bahnhof-Stellwerk</strong>. Der Arduino (der Fahrdienstleiter) gibt nur kleine Steuersignale &ndash; das schwere "Umstellen der Weichen" (der grosse Motorstrom) erledigt das Stellwerk. So bestimmst du mit winzigen Pin-Signalen, ob der Motor vorwaerts, rueckwaerts oder gar nicht faehrt.
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Warum ueberhaupt ein Motortreiber?</h3>
          <p>Ein Arduino-Pin liefert nur etwa <strong>20&ndash;40 mA</strong>. Die meisten Motoren brauchen ein Vielfaches davon. Der L298N hat dafuer eine <strong>eigene Motor-Stromversorgung</strong> (bis 35 V, am Modul meist bis 12 V) und schaltet daraus bis zu <strong>2 A</strong> &ndash; gesteuert durch die kleinen Arduino-Signale.</p>
          <p>Im Inneren sitzt eine <strong>H-Bruecke</strong>: vier elektronische Schalter, die den Strom <strong>in beide Richtungen</strong> durch den Motor schicken koennen. Genau daher kommt das Vorwaerts/Rueckwaerts.</p>
        </div>

        <div class="info-card">
          <h3>Anschluss an den Arduino</h3>
          <p>Drei Pins steuern einen Motor (Motor A am L298N-Modul). Im BW-Skript ist die Belegung:</p>
          <table class="icon-table">
            <tr><th>L298N-Modul</th><th>Arduino-Pin</th><th>Aufgabe</th></tr>
            <tr><td><strong>ENA</strong> (Enable A)</td><td>Pin 10 <em>(~ PWM)</em></td><td>Motor freigeben + <strong>Drehzahl</strong></td></tr>
            <tr><td><strong>IN1</strong></td><td>Pin 9</td><td><strong>Drehrichtung</strong> (mit IN2)</td></tr>
            <tr><td><strong>IN2</strong></td><td>Pin 8</td><td><strong>Drehrichtung</strong> (mit IN1)</td></tr>
          </table>

          <div style="background:#f8f8f8;border:1px solid #ddd;border-radius:8px;padding:1rem;text-align:center;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 200" style="max-width:340px;width:100%;height:auto;">
              <!-- Arduino links -->
              <rect x="10" y="30" width="70" height="140" rx="6" fill="#2176AE"/>
              <text x="45" y="52" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Arduino</text>
              <text x="70" y="80" text-anchor="end" font-size="9" fill="#fff">Pin 10</text>
              <text x="70" y="105" text-anchor="end" font-size="9" fill="#fff">Pin 9</text>
              <text x="70" y="130" text-anchor="end" font-size="9" fill="#fff">Pin 8</text>
              <text x="70" y="155" text-anchor="end" font-size="9" fill="#fff">GND</text>
              <!-- L298N-Modul Mitte -->
              <rect x="140" y="30" width="110" height="140" rx="6" fill="#eee" stroke="#555" stroke-width="2"/>
              <text x="195" y="50" text-anchor="middle" font-size="11" fill="#333" font-weight="bold">L298N</text>
              <text x="148" y="80" text-anchor="start" font-size="9" fill="#333">ENA</text>
              <text x="148" y="105" text-anchor="start" font-size="9" fill="#333">IN1</text>
              <text x="148" y="130" text-anchor="start" font-size="9" fill="#333">IN2</text>
              <text x="148" y="155" text-anchor="start" font-size="9" fill="#333">GND</text>
              <text x="242" y="90" text-anchor="end" font-size="9" fill="#333">OUT1</text>
              <text x="242" y="115" text-anchor="end" font-size="9" fill="#333">OUT2</text>
              <text x="195" y="185" text-anchor="middle" font-size="9" fill="#C0392B">12V/VCC (eigene Quelle)</text>
              <line x1="195" y1="170" x2="195" y2="177" stroke="#C0392B" stroke-width="2"/>
              <!-- Steuerleitungen Arduino -> L298N -->
              <line x1="80" y1="77" x2="140" y2="77" stroke="#F59E0B" stroke-width="2"/>
              <line x1="80" y1="102" x2="140" y2="102" stroke="#F59E0B" stroke-width="2"/>
              <line x1="80" y1="127" x2="140" y2="127" stroke="#F59E0B" stroke-width="2"/>
              <line x1="80" y1="152" x2="140" y2="152" stroke="#555" stroke-width="2"/>
              <!-- Motorleitungen L298N -> Motor -->
              <line x1="250" y1="87" x2="300" y2="87" stroke="#2E7D32" stroke-width="2"/>
              <line x1="250" y1="112" x2="300" y2="112" stroke="#2E7D32" stroke-width="2"/>
              <!-- Motor rechts -->
              <circle cx="322" cy="100" r="24" fill="#fff" stroke="#2E7D32" stroke-width="3"/>
              <text x="322" y="105" text-anchor="middle" font-size="12" fill="#2E7D32" font-weight="bold">M</text>
              <text x="322" y="142" text-anchor="middle" font-size="9" fill="#2E7D32">Motor</text>
            </svg>
            <p style="margin:0.5rem 0 0;font-size:0.9rem;"><span style="color:#F59E0B;font-weight:bold;">Orange</span> = Steuersignale vom Arduino, <span style="color:#2E7D32;font-weight:bold;">Gruen</span> = Motorstrom zum Motor, <span style="color:#C0392B;font-weight:bold;">Rot</span> = eigene Motor-Stromquelle. GND von Arduino und Modul sind verbunden.</p>
          </div>

          <div class="tip-box">
            <strong>Nicht vergessen:</strong> Der <strong>GND</strong> des L298N-Moduls muss mit dem <strong>GND des Arduino</strong> verbunden sein &ndash; sonst haben die Steuersignale keinen gemeinsamen Bezugspunkt und nichts funktioniert. Die Motorspannung (z.B. 6&ndash;12 V) kommt aus einer <strong>eigenen Quelle</strong> (Batterie/Netzteil), nicht aus dem Arduino.
          </div>
        </div>

        <hr class="section-divider">

        <div class="info-card">
          <h3>Die Drehrichtung: IN1 und IN2</h3>
          <p>Die beiden Eingaenge IN1 und IN2 legen fest, <strong>wie herum</strong> der Motor dreht:</p>
          <table class="icon-table">
            <tr><th>IN1</th><th>IN2</th><th>Motor</th></tr>
            <tr><td>HIGH</td><td>LOW</td><td>dreht in <strong>eine</strong> Richtung (z.B. rechts)</td></tr>
            <tr><td>LOW</td><td>HIGH</td><td>dreht in die <strong>andere</strong> Richtung (links)</td></tr>
            <tr><td>LOW</td><td>LOW</td><td><strong>Stopp</strong> (Motor laeuft aus)</td></tr>
            <tr><td>HIGH</td><td>HIGH</td><td><strong>Stopp</strong> (Bremse)</td></tr>
          </table>
          <p>Merke: IN1 und IN2 muessen <strong>unterschiedlich</strong> sein, damit der Motor dreht. Sind beide gleich, steht der Motor.</p>
        </div>

        <div class="info-card">
          <h3>Probiere es aus: der L298N-Simulator</h3>
          <p>Schalte IN1 und IN2 per Klick zwischen LOW und HIGH um und regle mit dem Schieberegler die Drehzahl (ENA, 0&ndash;255). Beobachte, wann der Motor dreht &ndash; und in welche Richtung!</p>
          <div style="display:flex;flex-wrap:wrap;gap:0.6rem;align-items:center;margin-bottom:0.8rem;">
            <button id="l298-in1" data-v="0" style="min-height:44px;min-width:110px;border:none;border-radius:8px;font-weight:bold;font-size:1rem;color:#fff;background:#95A5A6;cursor:pointer;" onclick="var b=this;b.dataset.v=b.dataset.v==='1'?'0':'1';b.textContent='IN1: '+(b.dataset.v==='1'?'HIGH':'LOW');b.style.background=b.dataset.v==='1'?'#E67E22':'#95A5A6';var i1=document.getElementById('l298-in1').dataset.v==='1';var i2=document.getElementById('l298-in2').dataset.v==='1';var ena=parseInt(document.getElementById('l298-ena').value,10);var pct=Math.round(ena/255*100);document.getElementById('l298-pct').textContent=pct+' %';var st=document.getElementById('l298-status');var ind=document.getElementById('l298-ind');if(i1!==i2&amp;&amp;ena&gt;0){st.textContent=i1?'Motor dreht rechts':'Motor dreht links';st.style.color='#2E7D32';ind.textContent=i1?'\\u21BB':'\\u21BA';ind.style.color=pct&gt;66?'#E67E22':(pct&gt;33?'#F5B041':'#F8C471');}else{st.textContent='Stopp';st.style.color='#C0392B';ind.textContent='\\u25A0';ind.style.color='#999';}">IN1: LOW</button>
            <button id="l298-in2" data-v="0" style="min-height:44px;min-width:110px;border:none;border-radius:8px;font-weight:bold;font-size:1rem;color:#fff;background:#95A5A6;cursor:pointer;" onclick="var b=this;b.dataset.v=b.dataset.v==='1'?'0':'1';b.textContent='IN2: '+(b.dataset.v==='1'?'HIGH':'LOW');b.style.background=b.dataset.v==='1'?'#E67E22':'#95A5A6';var i1=document.getElementById('l298-in1').dataset.v==='1';var i2=document.getElementById('l298-in2').dataset.v==='1';var ena=parseInt(document.getElementById('l298-ena').value,10);var pct=Math.round(ena/255*100);document.getElementById('l298-pct').textContent=pct+' %';var st=document.getElementById('l298-status');var ind=document.getElementById('l298-ind');if(i1!==i2&amp;&amp;ena&gt;0){st.textContent=i1?'Motor dreht rechts':'Motor dreht links';st.style.color='#2E7D32';ind.textContent=i1?'\\u21BB':'\\u21BA';ind.style.color=pct&gt;66?'#E67E22':(pct&gt;33?'#F5B041':'#F8C471');}else{st.textContent='Stopp';st.style.color='#C0392B';ind.textContent='\\u25A0';ind.style.color='#999';}">IN2: LOW</button>
          </div>
          <div style="margin-bottom:0.8rem;">
            <label for="l298-ena" style="font-weight:bold;">ENA (Drehzahl): <span id="l298-ena-wert">128</span> / 255</label><br>
            <input type="range" id="l298-ena" min="0" max="255" value="128" style="width:100%;max-width:340px;min-height:44px;" oninput="document.getElementById('l298-ena-wert').textContent=this.value;var i1=document.getElementById('l298-in1').dataset.v==='1';var i2=document.getElementById('l298-in2').dataset.v==='1';var ena=parseInt(this.value,10);var pct=Math.round(ena/255*100);document.getElementById('l298-pct').textContent=pct+' %';var st=document.getElementById('l298-status');var ind=document.getElementById('l298-ind');if(i1!==i2&amp;&amp;ena&gt;0){st.textContent=i1?'Motor dreht rechts':'Motor dreht links';st.style.color='#2E7D32';ind.textContent=i1?'\\u21BB':'\\u21BA';ind.style.color=pct&gt;66?'#E67E22':(pct&gt;33?'#F5B041':'#F8C471');}else{st.textContent='Stopp';st.style.color='#C0392B';ind.textContent='\\u25A0';ind.style.color='#999';}">
          </div>
          <div style="background:#f8f8f8;border:1px solid #ddd;border-radius:8px;padding:0.8rem;display:flex;align-items:center;gap:1rem;">
            <span id="l298-ind" style="font-size:2.2rem;line-height:1;color:#999;">&#9632;</span>
            <div>
              <div id="l298-status" style="font-weight:bold;font-size:1.1rem;color:#C0392B;">Stopp</div>
              <div>Drehzahl: <strong id="l298-pct">50 %</strong></div>
            </div>
          </div>
          <p style="font-size:0.9rem;color:#666;margin-top:0.5rem;">Tipp: Setze IN1 auf HIGH und lass IN2 auf LOW &ndash; dann dreht der Motor. Beide gleich (LOW/LOW oder HIGH/HIGH) = Stopp. Und mit ENA = 0 steht er auch bei richtiger IN-Kombination.</p>
        </div>

        <div class="info-card" style="border-left: 3px solid #2980B9;">
          <h3>Die Drehzahl: ENA mit analogWrite()</h3>
          <p>Der <strong>Enable-Pin ENA</strong> gibt den Motor frei. Schliesst du ihn an einen <strong>PWM-Pin</strong> an (Pin 10 hat ein ~), kannst du mit <code>analogWrite()</code> die Drehzahl regeln &ndash; ein Wert zwischen <strong>0 und 255</strong>:</p>
          <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
analogWrite(10, 255);   // ENA voll an  &rarr; volle Drehzahl
analogWrite(10, 128);   // ENA halb     &rarr; halbe Drehzahl
analogWrite(10, 0);     // ENA aus      &rarr; Motor steht</pre>
          <p>Genau wie beim Dimmen einer LED (PWM-Lektion): 255 ist dauerhaft HIGH, 0 dauerhaft LOW, die Werte dazwischen schalten ganz schnell ein und aus &ndash; der Motor "sieht" daraus eine mittlere Geschwindigkeit.</p>
        </div>
      `
    },
    example: {
      title: 'Beispiel-Programm: Richtungswechsel und Geschwindigkeit (aus dem BW-Skript)',
      steps: [
        {
          label: 'Pin-Konstanten anlegen',
          html: `
            <p>Ganz oben legen wir Namen fuer die drei Steuer-Pins an &ndash; genau nach der Tabelle oben:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
int pinEn  = 10;   // zu ENA (Enable A) &ndash; Drehzahl
int pinIN1 = 9;    // zu IN1            &ndash; Drehrichtung
int pinIN2 = 8;    // zu IN2            &ndash; Drehrichtung
int vmax   = 255;  // maximale Drehzahl (0..255)</pre>
          `
        },
        {
          label: 'Im setup(): Pins als Ausgang',
          html: `
            <p>Alle drei Steuer-Pins sind <strong>Ausgaenge</strong>:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #2980B9;">
void setup() {
  pinMode(pinEn, OUTPUT);
  pinMode(pinIN1, OUTPUT);
  pinMode(pinIN2, OUTPUT);
}</pre>
          `
        },
        {
          label: 'Im loop(): Drehzahl + Richtung setzen',
          html: `
            <p>Drei Befehle steuern den Motor: <code>analogWrite(pinEn, ...)</code> setzt die Drehzahl, das Paar <code>digitalWrite(pinIN1/pinIN2, ...)</code> die Richtung. So laeuft der Motor 5 Sekunden mit voller Drehzahl in eine Richtung, dann Stopp, dann halbe Drehzahl rueckwaerts:</p>
            <pre style="background:#f5f5f5;padding:0.8rem;border-left:3px solid #27AE60;">
void loop() {
  analogWrite(pinEn, vmax);       // volle Drehzahl
  digitalWrite(pinIN1, HIGH);     // Richtung 1
  digitalWrite(pinIN2, LOW);
  delay(5000);

  digitalWrite(pinIN1, LOW);      // Stopp
  digitalWrite(pinIN2, LOW);
  delay(2000);

  analogWrite(pinEn, vmax / 2);   // halbe Drehzahl
  digitalWrite(pinIN1, LOW);      // Richtung 2 (umgekehrt)
  digitalWrite(pinIN2, HIGH);
  delay(5000);

  digitalWrite(pinIN1, LOW);      // Stopp
  digitalWrite(pinIN2, LOW);
  delay(2000);
}</pre>
            <div class="tip-box">
              <strong>Muster zum Merken:</strong> Erst <code>analogWrite(ENA, ...)</code> fuer das Tempo, dann das IN1/IN2-Paar fuer die Richtung. Zum Stoppen beide IN auf LOW &ndash; oder ENA auf 0.
            </div>
          `
        }
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Warum steuert man den Gleichstrommotor im BW-Pruefungsskript ueber den L298N und nicht ueber einen einzelnen Transistor?',
        options: [
          'Weil der L298N billiger ist als ein Transistor',
          'Weil der L298N die Drehrichtung umkehren kann (H-Bruecke) und genug Strom liefert',
          'Weil ein Transistor nicht programmierbar ist',
          'Weil der Arduino sonst kein analogWrite() kann'
        ],
        correct: 1,
        explanation: 'Richtig! Der L298N enthaelt zwei H-Bruecken. Damit kann er den Strom in beide Richtungen durch den Motor schicken &ndash; der Motor dreht vorwaerts UND rueckwaerts. Ausserdem schaltet er den grossen Motorstrom aus einer eigenen Versorgung. Ein Einzeltransistor kann den Motor nur an/aus schalten, immer in dieselbe Richtung.',
        wrongExplanations: {
          0: 'Preis ist nicht der Grund &ndash; ein einzelner Transistor ist sogar guenstiger. Es geht um die Faehigkeit, die Drehrichtung umzukehren.',
          2: 'Beide werden vom Arduino per Pin-Signal gesteuert. Der Unterschied ist die H-Bruecke fuer die Drehrichtung.',
          3: 'analogWrite() funktioniert in beiden Faellen. Der entscheidende Punkt ist der Richtungswechsel ueber IN1/IN2.'
        }
      },
      {
        type: 'matching',
        question: 'Ordne die IN1/IN2-Kombination (bzw. den ENA-Wert) dem Motor-Verhalten zu.',
        pairs: [
          { left: 'IN1 = HIGH, IN2 = LOW', right: 'dreht in eine Richtung' },
          { left: 'IN1 = LOW, IN2 = HIGH', right: 'dreht in die andere Richtung' },
          { left: 'IN1 = LOW, IN2 = LOW', right: 'Stopp' },
          { left: 'analogWrite(ENA, 255)', right: 'volle Drehzahl' }
        ],
        explanation: 'IN1 und IN2 muessen unterschiedlich sein, damit der Motor dreht &ndash; ihre Reihenfolge bestimmt die Richtung. Sind beide LOW, steht der Motor. Die Drehzahl haengt nicht von IN1/IN2 ab, sondern vom Wert am ENA-Pin (analogWrite 0..255).'
      },
      {
        type: 'multiple-choice',
        question: 'Mit welchem Befehl regelst du die Drehzahl des Motors am L298N?',
        options: [
          'digitalWrite(pinIN1, HIGH);',
          'analogWrite(pinEn, 180);',
          'analogRead(pinEn);',
          'pinMode(pinEn, INPUT);'
        ],
        correct: 1,
        explanation: 'Richtig! Die Drehzahl regelst du ueber den Enable-Pin ENA mit analogWrite() und einem Wert von 0 (aus) bis 255 (voll). ENA muss dafuer an einem PWM-Pin haengen (hier Pin 10 mit ~).',
        wrongExplanations: {
          0: 'digitalWrite an IN1 setzt die Drehrichtung, nicht die Drehzahl. Es kann nur HIGH oder LOW &ndash; keine Zwischenstufen.',
          2: 'analogRead() LIEST einen Sensorwert ein. Zum Ausgeben einer Drehzahl brauchst du analogWrite() am ENA-Pin.',
          3: 'Damit machst du den Pin zum Eingang &ndash; dann kann er nichts mehr ausgeben. ENA muss OUTPUT sein.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Laut BW-Skript: An welchen Arduino-Pin gehoert der ENA-Anschluss des L298N?',
        options: [
          'Pin 8',
          'Pin 9',
          'Pin 10',
          'Pin 13 (die eingebaute LED)'
        ],
        correct: 2,
        explanation: 'Richtig! Im Skript ist ENA = Pin 10, IN1 = Pin 9, IN2 = Pin 8. Pin 10 ist ein PWM-Pin (~), deshalb kann er ueber analogWrite() die Drehzahl regeln.',
        wrongExplanations: {
          0: 'Pin 8 ist IN2 (Drehrichtung) &ndash; und Pin 8 ist kein PWM-Pin, koennte die Drehzahl also gar nicht regeln.',
          1: 'Pin 9 ist IN1 (Drehrichtung). ENA, der die Drehzahl regelt, gehoert auf den PWM-Pin 10.',
          3: 'Pin 13 wird hier nicht verwendet. Die Steuerpins sind 8, 9 und 10.'
        }
      },
      {
        type: 'multiple-choice',
        question: 'Was passiert, wenn IN1 und IN2 beide auf LOW stehen?',
        options: [
          'Der Motor dreht doppelt so schnell',
          'Der Motor steht still (das normale Stopp-Kommando)',
          'Der Arduino geht kaputt',
          'Die Drehrichtung wechselt staendig von selbst'
        ],
        correct: 1,
        explanation: 'Richtig! Eine Drehrichtung entsteht nur, wenn IN1 und IN2 unterschiedlich sind. Bei IN1 = LOW und IN2 = LOW steht der Motor &ndash; das ist das normale Stopp-Kommando.',
        wrongExplanations: {
          0: 'Die Drehzahl haengt am ENA-Pin, nicht an IN1/IN2. Gleiche IN-Werte erzeugen keine Drehung.',
          2: 'Es geht nichts kaputt &ndash; der Motor dreht einfach nicht. Der L298N ist dafuer ausgelegt.',
          3: 'Nichts wechselt von selbst. Der Motor folgt genau deinen IN1/IN2-Signalen.'
        }
      }
    ],
    praxis: {
      aufgabe: {
        titel: 'DC-Motor mit L298N ansteuern',
        auftrag: '<p>Baue die Original-Pruefungsschaltung auf: Ein <strong>DC-Motor</strong> wird ueber den <strong>Motortreiber L298N</strong> angesteuert. Der Motor soll <strong>5 Sekunden vorwaerts</strong> laufen, <strong>2 Sekunden stoppen</strong>, dann <strong>5 Sekunden rueckwaerts mit halber Geschwindigkeit</strong> drehen &ndash; und das Ganze endlos wiederholen. Pin-Belegung laut BW-Skript: <strong>ENA = Pin 10, IN1 = Pin 9, IN2 = Pin 8</strong>.</p><p><strong>Deine drei Aufgaben:</strong></p><ol><li><strong>Hardware:</strong> Arduino, L298N-Modul, Motor und externes Netzteil verkabeln. <strong>Wichtig:</strong> Der Motor wird NICHT aus dem Arduino versorgt &ndash; gemeinsame Masse nicht vergessen!</li><li><strong>Software:</strong> Vervollstaendige das Code-Geruest mit der Vorwaerts-Stopp-Rueckwaerts-Sequenz.</li><li><strong>Testen:</strong> Lade das Programm hoch und beobachte Drehrichtung und Drehzahl.</li></ol>',
        lernziel: 'Du kannst einen DC-Motor ueber die H-Bruecke L298N in beide Richtungen ansteuern: Drehrichtung mit <code>digitalWrite()</code> an IN1/IN2, Drehzahl mit <code>analogWrite()</code> am ENA-Pin.'
      },
      bauteile: [
        { name: 'Arduino Uno', anzahl: 1 },
        { name: 'Motortreiber-Modul L298N', anzahl: 1, hinweis: 'Doppel-H-Bruecke; wir nutzen Motor A (OUT1/OUT2, ENA, IN1, IN2)' },
        { name: 'DC-Motor (Gleichstrommotor)', anzahl: 1, hinweis: 'z.B. 6-12 V Getriebemotor' },
        { name: 'Externes Netzteil oder Batteriepack (6-12 V)', anzahl: 1, hinweis: 'versorgt NUR den Motor ueber den L298N &ndash; niemals den Motor aus dem Arduino speisen!' },
        { name: 'Jumper-Kabel Male-Female', anzahl: 4, hinweis: 'fuer ENA, IN1, IN2 und GND zwischen Arduino und L298N' },
        { name: 'USB-Kabel', anzahl: 1, hinweis: 'Strom fuer den Arduino + Programm-Upload' }
      ],
      anschluss: {
        svg: `
          <figure class="schaltbild-figur">
            <figcaption><strong>Verdrahtungsplan</strong> &mdash; Arduino steuert, der L298N schaltet den Motorstrom aus dem Batteriepack:</figcaption>
            <svg viewBox="0 0 760 420" role="img" aria-label="Verdrahtung: Arduino Pin 10 an ENA, Pin 9 an IN1, Pin 8 an IN2, GND an GND; L298N OUT1/OUT2 an den Motor; Batteriepack Plus an 12V, Minus an GND des L298N" style="max-width: 100%; height: auto; background: #fff;">
              <!-- Arduino links -->
              <rect x="30" y="60" width="170" height="220" rx="10" fill="#2176AE" />
              <text x="115" y="95" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">Arduino Uno</text>
              <circle cx="200" cy="130" r="5" fill="#fff" /><text x="150" y="135" text-anchor="end" fill="#fff" font-size="14">Pin 10 (~)</text>
              <circle cx="200" cy="170" r="5" fill="#fff" /><text x="150" y="175" text-anchor="end" fill="#fff" font-size="14">Pin 9</text>
              <circle cx="200" cy="210" r="5" fill="#fff" /><text x="150" y="215" text-anchor="end" fill="#fff" font-size="14">Pin 8</text>
              <circle cx="200" cy="250" r="5" fill="#fff" /><text x="150" y="255" text-anchor="end" fill="#fff" font-size="14">GND</text>
              <!-- L298N Mitte -->
              <rect x="330" y="60" width="180" height="260" rx="10" fill="#c0392b" />
              <text x="420" y="95" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">L298N</text>
              <circle cx="330" cy="130" r="5" fill="#fff" /><text x="345" y="135" fill="#fff" font-size="14">ENA</text>
              <circle cx="330" cy="170" r="5" fill="#fff" /><text x="345" y="175" fill="#fff" font-size="14">IN1</text>
              <circle cx="330" cy="210" r="5" fill="#fff" /><text x="345" y="215" fill="#fff" font-size="14">IN2</text>
              <circle cx="330" cy="250" r="5" fill="#fff" /><text x="345" y="255" fill="#fff" font-size="14">GND</text>
              <circle cx="370" cy="320" r="5" fill="#fff" /><text x="370" y="305" text-anchor="middle" fill="#fff" font-size="13">12V</text>
              <circle cx="420" cy="320" r="5" fill="#fff" /><text x="420" y="305" text-anchor="middle" fill="#fff" font-size="13">GND</text>
              <circle cx="510" cy="140" r="5" fill="#fff" /><text x="495" y="145" text-anchor="end" fill="#fff" font-size="14">OUT1</text>
              <circle cx="510" cy="190" r="5" fill="#fff" /><text x="495" y="195" text-anchor="end" fill="#fff" font-size="14">OUT2</text>
              <!-- Motor rechts -->
              <circle cx="640" cy="165" r="50" fill="#F59E0B" />
              <text x="640" y="160" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">M</text>
              <text x="640" y="180" text-anchor="middle" fill="#fff" font-size="12">DC-Motor</text>
              <!-- Batteriepack unten -->
              <rect x="320" y="360" width="200" height="45" rx="8" fill="#2E7D32" />
              <text x="420" y="388" text-anchor="middle" fill="#fff" font-size="15" font-weight="bold">Batteriepack 6-12 V</text>
              <!-- Verbindungen Arduino -> L298N -->
              <line x1="200" y1="130" x2="330" y2="130" stroke="#F59E0B" stroke-width="3" />
              <text x="265" y="122" text-anchor="middle" fill="#F59E0B" font-size="12" font-weight="bold">Pin 10 &rarr; ENA</text>
              <line x1="200" y1="170" x2="330" y2="170" stroke="#2176AE" stroke-width="3" />
              <text x="265" y="162" text-anchor="middle" fill="#2176AE" font-size="12" font-weight="bold">Pin 9 &rarr; IN1</text>
              <line x1="200" y1="210" x2="330" y2="210" stroke="#2176AE" stroke-width="3" />
              <text x="265" y="202" text-anchor="middle" fill="#2176AE" font-size="12" font-weight="bold">Pin 8 &rarr; IN2</text>
              <line x1="200" y1="250" x2="330" y2="250" stroke="#111" stroke-width="3" />
              <text x="265" y="242" text-anchor="middle" fill="#111" font-size="12" font-weight="bold">GND &harr; GND</text>
              <!-- L298N -> Motor -->
              <line x1="510" y1="140" x2="597" y2="150" stroke="#2E7D32" stroke-width="3" />
              <line x1="510" y1="190" x2="597" y2="182" stroke="#2E7D32" stroke-width="3" />
              <text x="553" y="128" text-anchor="middle" fill="#2E7D32" font-size="12" font-weight="bold">OUT1/OUT2</text>
              <!-- Batterie -> L298N -->
              <line x1="370" y1="360" x2="370" y2="320" stroke="#c0392b" stroke-width="3" />
              <text x="352" y="345" text-anchor="end" fill="#c0392b" font-size="12" font-weight="bold">+ &rarr; 12V</text>
              <line x1="420" y1="360" x2="420" y2="320" stroke="#111" stroke-width="3" />
              <text x="438" y="345" fill="#111" font-size="12" font-weight="bold">&minus; &rarr; GND</text>
            </svg>
          </figure>`,
        schritte: [
          '<strong>Bevor du steckst:</strong> Arduino vom USB trennen und Batteriepack noch NICHT anschliessen &ndash; verkabelt wird immer stromlos.',
          'Verbinde mit einem <strong>orangen Jumper-Kabel</strong> <strong>Pin 10</strong> des Arduino mit <strong>ENA</strong> am L298N. Falls auf ENA ein kleiner <strong>Jumper (Steckbruecke)</strong> steckt: abziehen, sonst laeuft der Motor immer mit Vollgas.',
          'Verbinde <strong>Pin 9</strong> mit <strong>IN1</strong> und <strong>Pin 8</strong> mit <strong>IN2</strong> am L298N.',
          'Verbinde mit einem <strong>schwarzen Jumper-Kabel</strong> einen <strong>GND-Pin</strong> des Arduino mit dem <strong>GND</strong> der L298N-Schraubklemme. <strong>Sicherheits-Check gemeinsame Masse:</strong> Arduino-GND, L298N-GND und Batterie-Minus muessen alle am selben Punkt haengen &ndash; sonst "versteht" der L298N die Arduino-Signale nicht.',
          'Schraube die beiden <strong>Motor-Kabel</strong> an <strong>OUT1</strong> und <strong>OUT2</strong> (Motor A) fest.',
          'Schliesse das <strong>Batteriepack</strong> an: <strong>Plus an die 12V-Klemme</strong>, <strong>Minus an die GND-Klemme</strong> des L298N. Kontrolliere, dass der <strong>5V-Regler-Jumper</strong> (5V_EN) auf dem Modul gesteckt ist &ndash; er erzeugt aus der Motorspannung die 5 V fuer die Logik des L298N.',
          '<strong>Letzter Sicherheits-Check vor dem Strom:</strong> Kein Kabel vom Motor oder Batteriepack fuehrt direkt zum Arduino? Plus und Minus am L298N nicht vertauscht? Erst dann Arduino per USB anschliessen.',
          'Lade das vervollstaendigte Programm hoch.',
          '<strong>Test-Beobachtung:</strong> Der Motor laeuft 5 Sekunden vorwaerts (volle Drehzahl), steht 2 Sekunden still, dreht dann 5 Sekunden <em>hoerbar langsamer</em> rueckwaerts &ndash; und beginnt von vorn. Dreht er zuerst "falsch herum", tausche einfach die beiden Motorkabel an OUT1/OUT2.'
        ]
      },
      code_hinweise: {
        geruest:
`const int pinENA = 10;  // Drehzahl (PWM)
const int pinIN1 = 9;   // Drehrichtung
const int pinIN2 = 8;   // Drehrichtung

void setup() {
  pinMode(pinENA, OUTPUT);
  pinMode(pinIN1, OUTPUT);
  pinMode(pinIN2, OUTPUT);
}

void loop() {
  // TODO: 5 Sekunden VORWAERTS mit voller Drehzahl
  // Tipp: analogWrite(pinENA, ?); dann IN1/IN2 setzen
  delay(5000);

  // TODO: 2 Sekunden STOPP
  // Tipp: beide IN-Pins auf denselben Pegel
  delay(2000);

  // TODO: 5 Sekunden RUECKWAERTS mit halber Drehzahl
  // Tipp: IN1/IN2 vertauscht + analogWrite mit halbem Wert
  delay(5000);
}`,
        tipps: [
          'Volle Drehzahl ist <code>analogWrite(pinENA, 255)</code>, halbe Drehzahl <code>analogWrite(pinENA, 128)</code>.',
          'Vorwaerts heisst: IN1 und IN2 <strong>unterschiedlich</strong> (z.B. IN1 HIGH, IN2 LOW). Rueckwaerts ist genau das vertauschte Paar.',
          'Zum Stoppen setzt du <strong>beide</strong> IN-Pins auf LOW &ndash; oder ENA auf 0.',
          'Wenn der Motor gar nicht laeuft: Steckt der 5V_EN-Jumper? Ist die gemeinsame Masse (Arduino-GND an L298N-GND) verbunden?',
          'Wenn "halbe Geschwindigkeit" kaum langsamer klingt: Pruefe, ob der ENA-Jumper wirklich abgezogen ist &ndash; sonst ueberbrueckt er dein PWM-Signal.'
        ]
      },
      loesung: {
        code:
`const int pinENA = 10;  // Drehzahl (PWM)
const int pinIN1 = 9;   // Drehrichtung
const int pinIN2 = 8;   // Drehrichtung

void setup() {
  pinMode(pinENA, OUTPUT);
  pinMode(pinIN1, OUTPUT);
  pinMode(pinIN2, OUTPUT);
}

void loop() {
  analogWrite(pinENA, 255);   // volle Drehzahl
  digitalWrite(pinIN1, HIGH); // vorwaerts
  digitalWrite(pinIN2, LOW);
  delay(5000);

  digitalWrite(pinIN1, LOW);  // Stopp
  digitalWrite(pinIN2, LOW);
  delay(2000);

  analogWrite(pinENA, 128);   // halbe Drehzahl
  digitalWrite(pinIN1, LOW);  // rueckwaerts
  digitalWrite(pinIN2, HIGH);
  delay(5000);
}`,
        erklaerung: '<p>Im <code>setup()</code> werden alle drei Steuerpins als Ausgaenge definiert.</p><p>In der <code>loop()</code> laeuft die Sequenz: Erst gibt <code>analogWrite(pinENA, 255)</code> volle Drehzahl frei, und <code>IN1 = HIGH, IN2 = LOW</code> legt die Vorwaerts-Richtung fest &ndash; 5 Sekunden. Dann stoppen beide IN-Pins auf LOW den Motor fuer 2 Sekunden. Zuletzt wird das IN-Paar vertauscht (<code>IN1 = LOW, IN2 = HIGH</code>) und <code>analogWrite(pinENA, 128)</code> halbiert die Drehzahl &ndash; 5 Sekunden rueckwaerts. Danach beginnt <code>loop()</code> automatisch von vorn.</p><p><strong>Merksatz:</strong> ENA = Gaspedal (Tempo per PWM), IN1/IN2 = Waehlhebel (vorwaerts/rueckwaerts/stopp).</p>',
        haeufige_fehler: [
          '<strong>Motor laeuft gar nicht:</strong> Gemeinsame Masse fehlt &ndash; Arduino-GND muss mit dem L298N-GND (und damit dem Batterie-Minus) verbunden sein, sonst kommen die Steuersignale nicht an.',
          '<strong>Motor laeuft immer mit Vollgas, halbe Drehzahl wirkt nicht:</strong> Der Jumper auf ENA steckt noch und ueberbrueckt dein PWM-Signal. Jumper abziehen und ENA per Kabel an Pin 10.',
          '<strong>Motor dreht in die "falsche" Richtung:</strong> Kein Software-Fehler &ndash; einfach die beiden Motorkabel an OUT1/OUT2 tauschen (oder IN1/IN2 im Code vertauschen).',
          '<strong>Arduino startet staendig neu oder Motor ruckelt:</strong> Der Motor haengt versehentlich an der Arduino-5V-Versorgung. Motorstrom kommt IMMER aus dem externen Netzteil ueber die 12V-Klemme des L298N.',
          '<strong>Motor brummt nur, dreht aber nicht:</strong> Batteriespannung zu niedrig (leere Batterien) &ndash; der L298N verschluckt selbst ca. 2 V. Frische Batterien oder Netzteil verwenden.',
          '<strong>Compiler-Fehler:</strong> <code>analogWrite(pinENA, 128);</code> braucht ein Komma zwischen Pin und Wert &ndash; und HIGH/LOW gehoeren zu <code>digitalWrite()</code>, nicht zu <code>analogWrite()</code>.'
        ]
      }
    }
  }
];
