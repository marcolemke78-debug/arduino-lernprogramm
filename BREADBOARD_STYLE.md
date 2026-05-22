# Breadboard-SVG-Style-Guide

Konsistenz-Standard für alle Aufbau-SVGs (inline in `js/lessons-*.js` + externe in `assets/`). Stand 2026-05-22, Referenz-Implementierung: **L21 Prüfungsschaltung** (vertikales Layout, projekt.js).

---

## 1. Layout-Pattern

**Vertikal:** Arduino oben, Breadboard breit unten. ViewBox typischerweise `0 0 700 520-580` (inline) bzw. `0 0 720 540-760` (externe).

```
+--------------------------------------+
|         ARDUINO UNO (oben)           |  y=20-120
|  [Pin-Labels innen am Body, y=93]    |
|  [Pin-Boxen y=96-118]                |
+--------------------------------------+
        ↓ Pin-Kabel senkrecht ↓
+--------------------------------------+
|     +Schiene (rot)   y=195           |
|     -Schiene (blau)  y=207           |
|     Reihen a-e       y=240-296       |  Breadboard (32 Spalten)
|     Mittelrinne      y=304-316       |  rect(20, 180, 660, 240+)
|     Reihen f-j       y=320-376       |
|     -Schiene (blau)  y=389           |
|     +Schiene (rot)   y=401           |
+--------------------------------------+
|  "Breadboard (32 Spalten)" Label     |  y= rect_bottom + 13-15
+--------------------------------------+
|  Legende (weiß, #ddd-Stroke)         |
+--------------------------------------+
```

---

## 2. Arduino-Body

### Inline-SVGs (Lektionen mit eigenem SVG-Code)

```html
<rect x="80" y="20" width="540" height="100" rx="10" fill="#2176AE" stroke="#1a5f8a" stroke-width="2"/>
<text x="350" y="48" text-anchor="middle" font-size="14" fill="white" font-weight="bold">Arduino Uno</text>
<text x="350" y="64" text-anchor="middle" font-size="9" fill="#aad" font-style="italic">[kurzer Hinweis-Text]</text>
<rect x="60" y="55" width="20" height="28" rx="2" fill="#aaa" stroke="#888" stroke-width="1"/>
<text x="70" y="73" text-anchor="middle" font-size="7" fill="#444">USB</text>
```

### Externe SVGs (assets/lektion-XX-...svg)

```html
<g id="arduino" transform="translate(180, 30)">
  <rect x="0" y="0" width="360" height="120" rx="10" fill="#00979d" stroke="#005c61" stroke-width="2"/>
  <rect x="355" y="20" width="35" height="30" fill="#9ea7ac" stroke="#444" stroke-width="1.5"/>
  <text x="180" y="40" text-anchor="middle" fill="#fff" font-weight="bold" font-size="15" letter-spacing="2">ARDUINO UNO</text>
  <text x="180" y="58" text-anchor="middle" fill="#cfeeed" font-size="10">[Hinweis-Text]</text>
</g>
```

---

## 3. Pin-Labels (PFLICHT INNEN am Arduino-Body)

**Position:** y=93 (inline) bzw. y=95 (externe, relativ zur Arduino-Group). ÜBER der Pin-Box, NIE darunter.

**Font:** font-size=9 (inline) / 12 (externe), font-weight=bold, text-anchor=middle.

**Farben:**

| Pin | Farbe Hex | Hinweis |
|-----|-----------|---------|
| 5V / +5V / ROT | `#ff5555` (inline) / `#ff8a8a` (externe-türkis) | Hellrot auf dunklem Body |
| GND / Masse | `#ddd` (inline) / `#eeeeee` (externe) | Hellgrau, nicht weiß |
| GELB | `#ffe033` oder `#cc0` | LED-Pin |
| GRÜN / Pin 9 PWM | `#6f6` (inline) / `#7ee9a4` (externe) | |
| A0 / Analog | `#f90` (orange) | |
| Digital-Pin (2-13) | `#ff5555` oder Pin-Farbe-matching | |
| Taster-Signal | `#66f` (Blau) oder `#aaf` | |

**Beispiel (inline):**

```html
<g font-size="9" font-weight="bold" text-anchor="middle">
  <text x="140" y="93" fill="#ff9800">Pin 13</text>
  <text x="300" y="93" fill="#ddd">GND</text>
</g>
```

**Beispiel (externe SVG mit transform):**

```html
<g font-size="12" font-weight="bold" text-anchor="middle">
  <text x="74" y="95" fill="#ff8a8a">5V</text>
  <text x="114" y="95" fill="#eeeeee">GND</text>
  <text x="254" y="95" fill="#7ee9a4">A0</text>
</g>
```

---

## 4. Pin-Boxen (am Arduino, unter den Labels)

```html
<g font-size="10" fill="white" font-weight="bold" text-anchor="middle">
  <rect x="125" y="96" width="30" height="22" rx="2" fill="#ff9800" stroke="white" stroke-width="0.5"/>
  <text x="140" y="112">13</text>
</g>
```

Pin-Box-Center exakt auf Ziel-Spalte (Sp.1 bei x=60 inline / x=40 externe, +20px pro Spalte).

---

## 5. Pin-Kabel (Arduino → Breadboard)

**Standard:** Senkrecht von Pin-Box-Bottom (y=118) bis Ziel-Reihe.

```html
<line x1="140" y1="118" x2="140" y2="296" stroke="#ff9800" stroke-width="2.8" stroke-linecap="round"/>
<circle cx="140" cy="296" r="3.5" fill="#ff9800" stroke="#c66200" stroke-width="0.8"/>
```

- stroke-width: **2.8** (inline) / **3** (externe)
- Farbe matched Pin-Label
- Endpunkt-circle r=3.5

**Sonderfall horizontales Layout (Arduino rechts):** Kabel aus UNTERER Pin-Mitte rausführen, um Label nicht zu überdecken.

---

## 6. Breadboard-Label

**Position UNTER dem Breadboard.** NIE über dem Breadboard.

```html
<text x="350" y="{rect_y_end + 13}" text-anchor="middle" font-size="9" fill="#444" font-weight="bold">Breadboard (32 Spalten)</text>
```

Beispiele:
- Breadboard-rect endet y=420 → Label y=433
- Endet y=440 → Label y=453
- Endet y=460 → Label y=472
- Endet y=535 → Label y=550

---

## 7. Jumper-Kabel auf Breadboard

**GND-Jumper zur −Schiene (durchgezogen, blau):**

```html
<line x1="240" y1="320" x2="240" y2="393" stroke="#1565C0" stroke-width="2.8" stroke-linecap="round"/>
<circle cx="240" cy="320" r="3" fill="#1565C0" stroke="#0a3a78" stroke-width="0.8"/>
<circle cx="240" cy="393" r="3.5" fill="#1565C0" stroke="#0a3a78" stroke-width="0.8"/>
<text x="260" y="385" font-size="8" fill="#0a3a78" font-weight="bold">Jumper</text>
<text x="260" y="397" font-size="7" fill="#0a3a78" font-style="italic">zur untere −Schiene (GND)</text>
```

**5V-Jumper zur +Schiene (durchgezogen, rot):**

```html
<line x1="..." x2="..." stroke="#d62828" stroke-width="2.8" stroke-linecap="round"/>
<!-- Endpunkt-Kreise in #d62828 -->
```

**Regel:** Jumper sind IMMER durchgezogen + farbig + mit Endpunkt-Kreisen. NIE gestrichelt (außer für "kommt aus anderer Lektion"-Verweise).

---

## 8. Knoten-Highlight (Spalte als gemeinsamer Knoten)

Wenn eine Spalte mehrere Bauteil-Anschlüsse verbindet (typisch in Spannungsteilern):

```html
<rect x="{col_x - 6}" y="44" width="12" height="78" rx="2" fill="#FEF3C7" opacity="0.65" stroke="#F59E0B" stroke-width="1" stroke-dasharray="3 2"/>
<text x="{col_x}" y="33" text-anchor="middle" font-size="11" font-weight="bold" fill="#B45309">M = Spalte {N}</text>
<text x="{col_x}" y="138" text-anchor="middle" font-size="7" font-style="italic" fill="#B45309">(alle Löcher a–e verbunden)</text>
```

---

## 9. Bauteil-Bereichs-Labels (Auto-Ampel, Taster, LDR-Sensor etc.)

**PFLICHT: weißer Text-Outline** gegen Kabel-Überdeckung.

```html
<text x="200" y="200" text-anchor="middle" font-size="12" fill="#c44" font-weight="bold"
      stroke="white" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke fill">
  ⬇ AUTO-AMPEL
</text>
```

Farben für Label (`fill`):
- AUTO-AMPEL: `#c44` (rot)
- FUSSGÄNGER: `#44a` (blau)
- TASTER: `#44c` (lila-blau)
- LDR-SENSOR: `#c60` (orange)
- LED-NACHTLICHT: `#080` (dunkelgrün)

---

## 10. Bauteile auf Breadboard

**Widerstand (horizontal über 2 Spalten):**

```html
<rect x="98" y="306" width="24" height="8" rx="2" fill="#e8d5a3" stroke="#a08050" stroke-width="1"/>
<!-- Farbringe (für 220Ω: rot-rot-braun-gold) -->
<line x1="104" y1="306" x2="104" y2="314" stroke="#e53935" stroke-width="1.2"/>
<line x1="109" y1="306" x2="109" y2="314" stroke="#e53935" stroke-width="1.2"/>
<line x1="114" y1="306" x2="114" y2="314" stroke="#6d4c41" stroke-width="1.2"/>
<line x1="118" y1="306" x2="118" y2="314" stroke="#c6a04a" stroke-width="1.2"/>
<text x="110" y="304" text-anchor="middle" font-size="5.5" fill="#654" font-weight="bold">220Ω</text>
<circle cx="100" cy="310" r="2.2" fill="#e8d5a3" stroke="#864" stroke-width="0.8"/>
<circle cx="120" cy="310" r="2.2" fill="#e8d5a3" stroke="#864" stroke-width="0.8"/>
```

**LED (horizontal über 2 Spalten, Anode→Kathode):**

```html
<polygon points="119,274 119,286 132,280" fill="#E74C3C" stroke="#c62828" stroke-width="1.2"/>
<line x1="132" y1="274" x2="132" y2="286" stroke="#c62828" stroke-width="2"/>
<text x="125" y="262" text-anchor="middle" font-size="7" fill="#c62828" font-weight="bold">ROT</text>
<circle cx="120" cy="280" r="2.2" fill="#E74C3C"/>
<circle cx="140" cy="280" r="2.2" fill="#864"/>
```

**Taster über Mittelrinne (2-Bein-Vereinfachung):**

- Bein 1: Sp.X Reihe e (z.B. 200, 296) — Pin-Kabel-Anschluss
- Bein 2: Sp.X+2 Reihe f (z.B. 240, 320) — diagonal gegenüber
- Taster-Rect: `(190, 292) bis (250, 328)` überspannt Mittelrinne y=304-316

NIEMALS: Taster nur in unterer Hälfte (Beine in Reihen f-j). Pin-Kabel darf NICHT durch die Mittelrinne "durchgehen".

---

## 11. Spalten/Reihen-Geometrie (inline)

- Spalten: Sp.N x-Position = `60 + (N-1) × 20` (also Sp.1 bei x=60, Sp.32 bei x=680)
- Reihen oben: a=240, b=254, c=268, d=282, e=296
- Mittelrinne: y=304-316
- Reihen unten: f=320, g=334, h=348, i=362, j=376
- Stromschienen-Mitten: obere + bei y=199.5, − bei y=211.5; untere − bei y=393.5, + bei y=405.5

## 12. Externe-SVG-Geometrie (assets/, transform translate(60, 230))

- Spalten: Sp.N relative x = `40 + (N-1) × 20` (Sp.1 bei x=40, ..., Sp.16 bei x=340)
- Reihen oben: a=47, b=65, c=83, d=101, e=119
- Mittelrinne: y=128-138
- Reihen unten: f=146, g=164, h=182, i=200
- Stromschienen: obere + bei y=17, − bei y=45; untere − bei y=213, + bei y=229

---

## 13. GND-Brücke (rechts außen)

Bei mehrteiligen Lektionen (L19/L20/L21), die obere und untere −Schiene verbinden:

```html
<path d="M 690 213 L 712 213 L 712 393 L 690 393" stroke="#333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<circle cx="690" cy="213" r="3" fill="#333"/>
<circle cx="690" cy="393" r="3" fill="#333"/>
<text x="712" y="305" text-anchor="middle" font-size="7" fill="#333" font-style="italic" font-weight="bold">GND</text>
```

---

## 14. Legende (am unteren Rand)

```html
<rect x="20" y="{viewBox_h - 60}" width="660" height="50" rx="6" fill="#fff" stroke="#ddd" stroke-width="1"/>
<text x="32" y="..." font-size="10" fill="#333" font-weight="bold">Legende – [Titel]:</text>
<!-- Pro Kabel-Farbe: kurze Linie + Beschriftung -->
```

---

## Anti-Patterns (NIE machen)

- ❌ Pin-Labels UNTER der Pin-Box (außerhalb des Arduino-Body)
- ❌ Breadboard-Label ÜBER dem Breadboard
- ❌ Taster komplett in unterer Hälfte (Reihen f-j) ohne Mittelrinnen-Überspannung
- ❌ Pin-Kabel die senkrecht durch die Mittelrinne "durchgehen"
- ❌ Bauteil-Bereichs-Labels OHNE weißen Outline (werden von Kabeln überdeckt)
- ❌ GND-Jumper gestrichelt grau (zu schwach, nicht erkennbar)
- ❌ Pin-Kabel die durch Pin-Labels durchlaufen

---

## Cache-Buster

`index.html` script-Tags + externe SVG-Refs in `lessons-*.js`. Format `?v=YYYYMMDDx` (Buchstabe inkrementieren bei jedem Push). Externe SVG-Files: `?v=N` (Zahl inkrementieren).
