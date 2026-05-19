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
  },
  // ===================== LEKTION 20 (DC-Motor mit Transistor, id 33) =====================
  // RSAP-Pflicht-Lektion: DC-Motor mit Transistor taucht in mehreren
  // Pool-Aufgaben auf (Lueftung, Bohrmaschine, Hebebuehne).
  // Erster Aktor mit *separater* Stromschaltung: Arduino-Pin steuert nur,
  // der Strom fuer den Motor kommt aus +5V. Drei neue Konzepte zusammen:
  // Transistor als Schalter, Basiswiderstand, Freilaufdiode.
  {
    id: 33,
    title: 'DC-Motor mit Transistor',
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
          <p>Ein Motor besteht aus einer <strong>Spule</strong>. Solange Strom fliesst, baut sich ein Magnetfeld auf. <strong>Wenn du den Strom abschaltest, baut sich dieses Magnetfeld blitzschnell wieder ab</strong> &ndash; und erzeugt dabei eine kurze, sehr hohe Spannungsspitze (oft &gt; 100 V!) in <strong>umgekehrter Richtung</strong>.</p>
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
          <h3>Wofuer wird ein DC-Motor in der Pruefung gebraucht?</h3>
          <p>In der Realschulabschlusspruefung (RSAP) Technik BW taucht der DC-Motor in mehreren Aufgaben auf:</p>

          <table class="icon-table">
            <tr><th>Anwendung</th><th>Motor-Aufgabe</th><th>Typische Steuerung</th></tr>
            <tr><td><strong>Lueftung / Geblaese</strong></td><td>Luefter an bei zu warmer Temperatur</td><td>NTC misst &rarr; bei &gt; Schwelle Motor an</td></tr>
            <tr><td><strong>Bohrmaschine</strong></td><td>Motor laeuft bei Tastendruck</td><td>Taster gedrueckt &rarr; Motor an</td></tr>
            <tr><td><strong>Hebebuehne</strong></td><td>Motor hebt eine Last</td><td>Taster druecken &rarr; Motor laeuft fuer X Sekunden</td></tr>
          </table>

          <p>In dieser Lektion lernst du den <strong>Grundbaustein</strong>: Motor mit <code>digitalWrite()</code> ein- und ausschalten. Drehzahl-Regelung mit PWM (analogWrite) folgt am Ende als Plus-Box.</p>

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
          <p>Wichtig: Du musst dafuer einen <strong>PWM-faehigen Pin</strong> waehlen (mit ~ Zeichen auf dem Arduino, z.B. Pin 3, 5, 6, 9, 10, 11). In dieser Lektion bleibt es bei Pin 9 mit <code>digitalWrite()</code> &ndash; das ist die Pruefungs-Pflicht.</p>
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
        ]
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
  }
];
