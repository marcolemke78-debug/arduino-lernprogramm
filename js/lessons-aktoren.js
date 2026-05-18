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
            <strong>Merkhilfe:</strong> Die <strong>aussenliegende</strong> Farbe ist immer das Signal. Die Mitte ist immer + (rot). So musst du nicht ueberlegen, wenn du den Servo umdrehst.
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
              <strong>Welcher Pin?</strong> Beliebige digitale Pins funktionieren. Beliebt sind Pin 9 oder 10. Pin 13 vermeiden (dort ist die Onboard-LED).
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
        question: 'Welche Position fahrt der Servo bei dem Befehl meinServo.write(90) an?',
        options: [
          '0 Grad (ganz links)',
          'Mittelstellung (90 Grad)',
          '180 Grad (ganz rechts)',
          'Endlos-Drehung mit 90 Umdrehungen pro Minute'
        ],
        correct: 1,
        explanation: 'Richtig! Der Zahlenwert in write() entspricht direkt dem Winkel in Grad. 0 = links, 90 = Mitte, 180 = rechts.',
        wrongExplanations: {
          0: '0 Grad waere der Befehl meinServo.write(0). Der Wert 90 fahrt mittig an.',
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
          { left: 'Scheibenwischer wischt nach links', right: 'meinServo.write(150)' },
          { left: 'Kurvenlicht geradeaus', right: 'meinServo.write(90)' }
        ]
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
            <img src="assets/lektion-32-servo-schaltplan.svg?v=5" alt="Schaltplan Servo: 5V - Servo-Versorgung, GND - Servo-Masse, Pin 9 - Servo-Signal" style="max-width: 100%; height: auto;" />
          </figure>
          <figure class="schaltbild-figur">
            <figcaption><strong>2. Aufbau am Steckbrett</strong> &mdash; so sieht der echte Aufbau aus:</figcaption>
            <img src="assets/lektion-32-servo-aufbau.svg?v=6" alt="Steckbrett-Aufbau Servo: Servo direkt mit Jumper-Kabeln an Arduino - rot zu 5V, schwarz zu GND, gelb zu Pin 9" style="max-width: 100%; height: auto;" />
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
  }
];
