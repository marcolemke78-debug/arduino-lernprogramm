# Recherche RSAP Technik 2026 – Synthese

**Erstellt:** 2026-05-17 · **Quellen:** 3 PDFs aus `Arduino-Lernskripte/`

---

## TL;DR – die 5 wichtigsten Erkenntnisse

1. **Folie 56–59 der Te-Prüfung-PDF = Goldstück.** 13 konkrete RSAP-Aufgaben mit exakter Sensor/Aktor-Liste. Jede unserer Lektionen sollte einer dieser Aufgaben zugeordnet werden können.
2. **3 harte Curriculum-Lücken:** NTC-Sensor, Servomotor, DC-Motor mit Transistor. Diese drei Bauteile dominieren den RSAP-Pool – und fehlen komplett in unseren 17 Lektionen.
3. **Spannungsteiler** ist die fehlende Brückenlektion. Ohne ihn bleibt jede Sensor-Lektion (LDR, NTC, Poti) Magie. Alle 3 Quellen verlangen das Konzept.
4. **RSAP-Pflicht:** mind. 1 analoger externer Sensor + **gelötete Schaltung** (kein Breadboard in der echten Prüfung!). Aktuell fokussieren wir auf Breadboard – das muss in Lektion 17 explizit ergänzt werden.
5. **Lizenzen blockieren Copy-Paste.** Beide Skripte (BW + Rottweil) sind CC-BY-NC-SA → für SaaS-Phase 2 nicht direkt nutzbar. Inspirationsquelle ja, eigene Texte/SVGs Pflicht.

---

## RSAP-Prüfungsstruktur (laut Te-Prüfung-PDF, Folien 35–44)

### Praktische Prüfung – 3 Phasen, je ca. 3 Stunden
1. **Planung mit Programmcode** (PC-Raum)
2. **Fertigung** (Technikraum)
3. **Inbetriebnahme und Optimierung** (Technikraum + PC-Raum)

Gesamtdauer **9 Schulstunden**, drei Varianten: 3×3, 3+6, oder 1×9 Stunden.

### Bewertungsbogen "Niederschrift Praktische Prüfung"
4 Kriterien für den praktischen Teil, je 0–5 Punkte:
- **Planung**
- **Funktion**
- **Handwerkliche Umsetzung**
- **Steuerung / Regelung** ← unser Arduino-Bereich

Plus Prüfungsgespräch (15 Min + 5 Min Notenfindung): Realisierung + Fachlichkeit/Durchdringungstiefe.

### Harte Vorgaben (nur RSAP)
- Funktionsmodell mit **computergestützter Steuerung/Regelung** (vollständig)
- **Mind. 1 Sensor + 2 Aktoren** ODER **2 Sensoren + 1 Aktor**
- Sensoren/Aktoren **nicht im MSR-System integriert** (extern)
- **Mind. 1 externer Sensor muss analog sein**
- **Keine fliegenden Aufbauten** (Breadboard verboten)
- **Schaltungen müssen gelötet werden**
- Konstruktionsaufgabe inkl. Werkstoffbereich (Messen, Anreißen, Bohren, Sägen)

---

## Der RSAP-Aufgabenpool 2026 (Folien 57–58)

### Bautechnik
| Aufgabe | Sensoren / Aktoren | abgedeckt? |
|---|---|---|
| Alarmanlage | Summer, Taster, **Lichtschranke** | ❌ neu |
| Temperaturanzeige mit Farben | **RGB-LED**, Taster, **NTC** | ❌ neu |
| **Außenbeleuchtung** | LED/Glühlampe, Taster, **LDR** | ⚠ teilweise (L13/L16) |
| Treppenhauslicht | LED/Glühlampe, 2× Taster, **Poti** | ⚠ teilweise |
| Lüftung | **DC-Motor**, Taster, Poti/NTC | ❌ neu |
| **Dimmer** | LED weiß, Taster, **Poti** (PWM!) | ⚠ teilweise (L12) |
| Gewächshaus | **Servomotor**, Glühlampe, NTC | ❌ neu |

### Mobilität
| Aufgabe | Sensoren / Aktoren | abgedeckt? |
|---|---|---|
| **Ampel** | LEDs rot/gelb/grün, Poti | ✅ (L10/L15) |
| Scheibenwischer | **Servomotor**, Umschalter, **Regensensor** | ❌ neu |
| Kurvenlicht (Musteraufgabe) | LED weiß, Servomotor, Poti | ❌ neu |
| Automatisches Fahrradlicht | LED weiß, Umschalter, **LDR** | ⚠ teilweise |

### Produktionstechnik
| Aufgabe | Sensoren / Aktoren | abgedeckt? |
|---|---|---|
| Bohrmaschine mit einstellbarer Drehzahl | **DC-Motor**, Schalter, Poti | ❌ neu |

**Bilanz:** 1 von 13 vollständig abgedeckt, 4 teilweise, 8 fehlen komplett.

---

## Synthese der 3 Quellen

### Arduino-Skript BW (SFZ Bad Saulgau, 99 S., CC-BY-NC-SA)
**Stärken:**
- Vorkenntnisse Elektrik (LED-Aufbau, Vorwiderstand-Begründung, Ohm)
- Spannungsteiler-Messreihe mit 4 konkreten Schaltungen (S. 25–28)
- AD-Wandler-Erklärung 10 bit → 1024 Stufen → 4,9 mV (S. 29)
- Fehlermeldungs-Katalog mit Screenshots (S. 91–94)
- AB/ABL-Zweispalter (Aufgabe + Lösung getrennt) – passt zu `?teacher=1`

**Beifang:** PIR, Ultraschall, H-Brücke, Servo-Library, autonomer Roboter, Halbleiter-Physik im Anhang.

### Te-Prüfung Präsentation 2026 (67 Folien)
**Korrektur zur ursprünglichen Annahme:** Goldstück ist nicht ab Folie 62, sondern **Folien 56–59** (Aufgabenpool). Folien 62–67 sind nur noch Logistik (Raumplanung).

**Weitere relevante Folien:**
- Folie 12–14: Übersicht schriftliche Prüfung (Hell-/Dunkelschaltung als A2-Pflichtthema)
- Folie 22: Vorbereitung-Tipps (Transistor, Verstärkungsfaktor, Schwellspannungen, Spannungsteiler)
- Folie 30: Operatoren M-Niveau (auswählen, beschreiben, beurteilen, fertigen, realisieren, …)
- Folie 35–44: 3-Schul-Vergleich HSAP/WRSAP/RSAP + Bewertungsbogen
- Folie 49–50, 53: FAQs (Micro:Bit/Calliope erlaubt, Vorfertigung, Materialpool)

### LG Rottweil – Gräber 2019 (84 Skriptseiten, CC-BY-NC-SA)
**Stärken:**
- Lektions-Header-Box mit "Neue Bauelemente / Neue Befehle / Ziel" – wiederverwendbares Muster
- Spannungsteiler-Formel U_pin = R₂/(R₁+R₂) · 5V (S. 48)
- INPUT_PULLUP statt externer Pull-Down (S. 54)
- `map()`-Funktion mit Skalen-Visualisierung (S. 71)
- Fehlersuche-Tabelle (S. 82)
- Refactoring-Pattern: erst Magic Numbers, dann Konstanten, dann Unterprogramme

**Beifang:** Arduino IDE 1.0.1 Screenshots (veraltet), Lautsprecher/tone()/Melodien, L293D-Motorsteuerung, LCD I2C, Interrupts.

---

## Aktiver Wortschatz (Operatoren M-Niveau)

Sollte in der Webapp als Glossar verfügbar sein, weil das im Prüfungsgespräch abgefragt wird:

**M-Niveau-Operatoren:** auswählen, beschreiben, beurteilen, fertigen, realisieren, erklären, erläutern, erstellen, planen, reflektieren, remontieren, untersuchen, vergleichen

**AFB III (höchste Stufe):** auswerten, bewerten, entwerfen, entwickeln, optimieren

---

## Urheberrecht / Lizenz-Hinweis

| Quelle | Lizenz | Für Vanilla (GitHub Pages) | Für SaaS (kommerziell) |
|---|---|---|---|
| Skript BW (SFZ Bad Saulgau) | CC-BY-NC-SA | mit Quellenangabe OK | **NEIN** – eigene Texte/SVGs nötig |
| LG Rottweil (Gräber) | CC-BY-NC-SA | mit Quellenangabe OK | **NEIN** – eigene Texte/SVGs nötig |
| Te-Prüfung 2026 | KM BW intern | Inhalte/Vorgaben sind Fakten → Übernahme OK | Inhalte/Vorgaben sind Fakten → Übernahme OK |

**Konkrete Konsequenzen:**
- Arduino-C++-Code ist funktional gleichförmig → kein Urheberrechtsproblem
- Schaltbilder: müssen wir komplett eigen erstellen (SVG/Pillow)
- Texte: paraphrasieren, eigene Erklärungen
- Aufgabenformulierungen: eigene Worte
