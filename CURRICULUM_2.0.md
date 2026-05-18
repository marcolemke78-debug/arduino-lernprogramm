# Curriculum 2.0 – Vorschlag für die Lektionsstruktur

**Stand:** 2026-05-17 · **Basis:** [Recherche-Synthese](RECHERCHE_PRUEFUNG.md)

---

## Ist-Zustand (17 Lektionen)

| Modul | Lektionen |
|---|---|
| 1 Grundlagen | 1 Was ist Arduino · 2 Board & Breadboard · 3 IDE & erstes Programm · 4 setup()/loop() |
| 2 Digital | 5 LEDs · 6 Wechselblinker · 7 Lauflicht · 8 Taster · 9 LED+Taster · 10 Ampel |
| 3 Analog | 11 Analoge Eingänge · 12 PWM · 13 LDR · 14 Entscheidungen |
| 4 Projekt | 15 Ampel+Fußgänger · 16 Nachtabschaltung · 17 Prüfungsschaltung |

**Bilanz vs. RSAP-Pool:** 1 von 13 Aufgaben voll abgedeckt, 4 teilweise, 8 fehlen.

---

## Soll-Zustand (28 Lektionen, 6 Module)

### Modul 1 – Grundlagen (4 Lektionen, unverändert)
| ID | Titel | RSAP | Status |
|---|---|---|---|
| 1 | Was ist ein Arduino? | – | ✓ vorhanden |
| 2 | Das Arduino Uno Board | – | ✓ vorhanden |
| 3 | Arduino IDE & erstes Programm | – | ✓ vorhanden |
| 4 | setup() und loop() | – | ✓ vorhanden |

### Modul 2 – Digital (8 Lektionen)
| ID | Titel | RSAP | Status |
|---|---|---|---|
| 5 | LEDs ansteuern | basis | ✓ vorhanden (Pilot-Praxis) |
| 6 | **Konstanten (`const int`)** | – | **NEU** (didaktisch) |
| 7 | Wechselblinker | basis | ✓ vorhanden (war L6) |
| 8 | **for-Schleife als Konzept** | – | **NEU** (didaktisch) |
| 9 | LED-Lauflicht | basis | ✓ vorhanden (war L7) |
| 10 | Taster als Eingabe (mit INPUT_PULLUP) | mehrere | ✓ erweitert (war L8) |
| 11 | LED mit Taster steuern | mehrere | ✓ vorhanden (war L9) |
| 12 | Einfache Ampelschaltung | Ampel | ✓ vorhanden (war L10) |

### Modul 3 – Analog & Sensorik (9 Lektionen)
| ID | Titel | RSAP | Status |
|---|---|---|---|
| 13 | **Spannungsteiler verstehen** | alle analog | **NEU** (Pflicht-Brücke) |
| 14 | **AD-Wandler (0–1023)** | alle analog | **NEU** (Konzept-Lektion) |
| 15 | Analoge Eingänge / Potentiometer | Dimmer, Treppe, Bohrmasch. | ✓ erweitert (war L11) |
| 16 | PWM: Dimmen statt Schalten | Dimmer, Bohrmasch. | ✓ vorhanden (war L12) |
| 17 | **`map()`-Funktion** | – | **NEU** (Tool-Lektion) |
| 18 | Lichtsensor LDR | Außenbeleucht., Fahrradl. | ✓ vorhanden (war L13) |
| 19 | **NTC-Temperatursensor** | Temp.anzeige, Gewächs., Lüft. | **NEU** (RSAP-Pflicht) |
| 20 | Entscheidungen mit Sensorwerten (if/else) | alle Sensoraufgaben | ✓ vorhanden (war L14) |
| 21 | **RGB-LED ansteuern** | Temperaturanzeige | **NEU** (RSAP) |

### Modul 4 – Aktoren erweitert (3 Lektionen, NEU)
| ID | Titel | RSAP | Status |
|---|---|---|---|
| 22 | **Servomotor ansteuern** | Gewächs., Scheibenw., Kurvenl. | **NEU** (RSAP-Pflicht) |
| 23 | **DC-Motor mit Transistor** | Lüftung, Bohrmasch. | **NEU** (RSAP-Pflicht) |
| 24 | **Summer / Piezo** | Alarmanlage | **NEU** (klein) |

### Modul 5 – Prüfungsprojekte (3 Lektionen)
| ID | Titel | RSAP | Status |
|---|---|---|---|
| 25 | Ampel mit Fußgängerüberweg | Ampel | ✓ vorhanden (war L15) |
| 26 | Nachtabschaltung mit Lichtsensor | Außenbeleucht. | ✓ vorhanden (war L16) |
| 27 | Prüfungsschaltung komplett (gelötet!) | RSAP-Pflichtteil | ✓ erweitert (war L17) |

### Modul 6 – Hilfe & Referenz (1 Lektion + 3 Module)
| ID | Titel | Typ |
|---|---|---|
| 28 | **Fehler erkennen (Syntax/Logik/Hardware)** | NEU Lektion |
| – | **Glossar Arduino-Befehle** | NEU durchsuchbar |
| – | **Bauteile-Bibliothek** | NEU durchsuchbar |
| – | **Schaltsymbol-Trainer** | NEU interaktiv |

---

## Lektion-Reihenfolge: Aufbau-Logik

```
Grundlagen
  ↓
Digital-Basis (LED, Konstanten, Schleifen, Taster)
  ↓
Analog-Brücke (Spannungsteiler ← Pflicht!)
  ↓
Analog-Sensoren (Poti, PWM, map(), LDR, NTC, if/else, RGB)
  ↓
Aktoren (Servo, DC-Motor, Summer)
  ↓
Prüfungsprojekte (Ampel+Fußg., Nachtabschaltung, Komplettprojekt)
  ↓
Hilfe (Fehler, Glossar, Bauteile, Symbole)
```

---

## Roadmap-Vorschlag

### Phase 1.5 – Vanilla erweitern (vor SaaS-Transformation)
**Ziel:** Score ≥16/20 im Lernapp-Framework + RSAP-Abdeckung ≥80 %

**Priorität A (Pflicht für RSAP-Vollständigkeit):**
1. L13 Spannungsteiler verstehen (Brücke)
2. L19 NTC-Temperatursensor
3. L22 Servomotor ansteuern
4. L23 DC-Motor mit Transistor
5. L27 Lektion 17 erweitern: Löten + RSAP-Pflichten explizit

**Priorität B (Curriculum-Hygiene):**
6. L6 Konstanten · L8 for-Schleife · L17 map() · L21 RGB-LED · L24 Summer
7. L28 Fehler erkennen
8. wrongExplanations für alle 28 Lektionen (Hattie d=0,73)

**Priorität C (Nice-to-have, kann nach SaaS):**
- Glossar, Bauteile-Bibliothek, Schaltsymbol-Trainer (gehören eher in Phase 2 als Datenbank-Module)

### Phase 2 – SaaS-Transformation
Siehe [WEBAPP_ARCHITEKTUR.md](WEBAPP_ARCHITEKTUR.md)

---

## Tag-System pro Lektion (für Filter in der App)

```javascript
{
  id: 19,
  title: 'NTC-Temperatursensor',
  module: 'analog',                    // Hierarchie-Modul
  niveau: ['G', 'M'],                  // Bildungsplan-Niveau
  pruefungsrelevant: true,             // taucht im RSAP-Pool auf?
  rsap_aufgaben: [                     // welche Pool-Aufgaben?
    'Temperaturanzeige mit Farben',
    'Gewaechshaus',
    'Lueftung'
  ],
  bauteile: ['NTC', 'Widerstand 10k'], // Bauteile-Bibliothek-Refs
  arduino_befehle: ['analogRead'],     // Glossar-Refs
  voraussetzungen: [13, 14, 15],       // welche Lektionen müssen davor?
  schwierigkeit: 3,                    // 1-5, für Sortierung
}
```
