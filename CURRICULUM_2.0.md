# Curriculum 2.0 – Lektionsstruktur (abgesegnet)

**Stand:** 2026-05-18 · **Basis:** [Recherche-Synthese](RECHERCHE_PRUEFUNG.md)
**Entscheidung Marco 2026-05-18:** 4 Konzept-Lektionen werden zu Erklär-Boxen in Nachbar-Lektionen (didaktisch stärker, situiertes Lernen). Curriculum auf **24 Lektionen** gestrafft. RGB-LED bleibt eigene Lektion (eigene Hardware).

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

## Soll-Zustand (24 Lektionen, 6 Module)

### Erklär-Boxen statt Mini-Lektionen
Vier Konzepte wandern als integrierte Lehr-Box in die nächste passende Schaltungs-Lektion:
- **`const int` (Konstanten)** → Box in L5 LEDs ansteuern (am Code-Beispiel direkt eingeführt)
- **`for`-Schleife** → Box in L7 LED-Lauflicht (entsteht aus dem Bedarf)
- **`map()`-Funktion** → Box in L13 Potentiometer (wird beim PWM-Mapping gebraucht)
- **Summer / Piezo** → Box in L21 Ampel mit Fußgängerüberweg (Akustik-Erweiterung des Projekts)

### Modul 1 – Grundlagen (4 Lektionen, unverändert)
| ID | Titel | RSAP | Status |
|---|---|---|---|
| 1 | Was ist ein Arduino? | – | ✓ vorhanden |
| 2 | Das Arduino Uno Board | – | ✓ vorhanden |
| 3 | Arduino IDE & erstes Programm | – | ✓ vorhanden |
| 4 | setup() und loop() | – | ✓ vorhanden |

### Modul 2 – Digital (6 Lektionen)
| ID | Titel | RSAP | Status |
|---|---|---|---|
| 5 | LEDs ansteuern *(+ Box: `const int`)* | basis | ✓ vorhanden (Pilot-Praxis) |
| 6 | Wechselblinker | basis | ✓ vorhanden |
| 7 | LED-Lauflicht *(+ Box: `for`-Schleife)* | basis | ✓ vorhanden |
| 8 | Taster als Eingabe (mit INPUT_PULLUP) | mehrere | ✓ erweitert |
| 9 | LED mit Taster steuern | mehrere | ✓ vorhanden |
| 10 | Einfache Ampelschaltung | Ampel | ✓ vorhanden |

### Modul 3 – Analog & Sensorik (8 Lektionen)
| ID | Titel | RSAP | Status |
|---|---|---|---|
| 11 | **Spannungsteiler verstehen** | alle analog | **NEU** (Pflicht-Brücke) |
| 12 | **AD-Wandler (0–1023)** | alle analog | **NEU** (Konzept-Lektion) |
| 13 | Analoge Eingänge / Potentiometer *(+ Box: `map()`)* | Dimmer, Treppe, Bohrmasch. | ✓ erweitert |
| 14 | PWM: Dimmen statt Schalten | Dimmer, Bohrmasch. | ✓ vorhanden |
| 15 | Lichtsensor LDR | Außenbeleucht., Fahrradl. | ✓ vorhanden |
| 16 | **NTC-Temperatursensor** | Temp.anzeige, Gewächs., Lüft. | **NEU** (RSAP-Pflicht) |
| 17 | Entscheidungen mit Sensorwerten (if/else) | alle Sensoraufgaben | ✓ vorhanden |
| 18 | **RGB-LED ansteuern** | Temperaturanzeige | **NEU** (RSAP) |

### Modul 4 – Aktoren erweitert (2 Lektionen, NEU)
| ID | Titel | RSAP | Status |
|---|---|---|---|
| 19 | **Servomotor ansteuern** | Gewächs., Scheibenw., Kurvenl. | **NEU** (RSAP-Pflicht) |
| 20 | **DC-Motor mit Transistor** | Lüftung, Bohrmasch. | **NEU** (RSAP-Pflicht) |

### Modul 5 – Prüfungsprojekte (3 Lektionen)
| ID | Titel | RSAP | Status |
|---|---|---|---|
| 21 | Ampel mit Fußgängerüberweg *(+ Box: Summer)* | Ampel | ✓ erweitert |
| 22 | Nachtabschaltung mit Lichtsensor | Außenbeleucht. | ✓ vorhanden |
| 23 | Prüfungsschaltung komplett (gelötet!) | RSAP-Pflichtteil | ✓ erweitert |

### Modul 6 – Hilfe & Referenz (1 Lektion)
| ID | Titel | Typ |
|---|---|---|
| 24 | **Fehler erkennen (Syntax/Logik/Hardware)** | NEU Lektion |

**Phase 2 (SaaS):** Glossar Arduino-Befehle, Bauteile-Bibliothek und Schaltsymbol-Trainer kommen als Datenbank-Module mit Filter/Suche — gehören nicht in Vanilla.

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
1. **L11 Spannungsteiler verstehen (Brücke)** ← Implementierung läuft (2026-05-18)
2. L16 NTC-Temperatursensor
3. L19 Servomotor ansteuern
4. L20 DC-Motor mit Transistor
5. L23 Komplettprojekt erweitern: Löten + RSAP-Pflichten explizit

**Priorität B (Curriculum-Hygiene):**
6. Erklär-Boxen einbauen: `const int` (L5) · `for`-Schleife (L7) · `map()` (L13) · Summer (L21)
7. L12 AD-Wandler · L18 RGB-LED · L24 Fehler erkennen
8. wrongExplanations für alle 24 Lektionen (Hattie d=0,73)

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
