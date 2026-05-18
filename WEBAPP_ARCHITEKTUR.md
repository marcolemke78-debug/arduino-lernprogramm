# Webapp-Architektur – Phase 2 SaaS-Transformation

**Stand:** 2026-05-17 · **Referenz:** Linktree-Everlast (Masterclass-Projekt)

---

## Vision

Aus der Vanilla-Lernapp (HTML/JS, GitHub Pages, single-user via localStorage) wird eine **SaaS-Webapp** mit:
- **Multi-User** (Schüler:innen, Lehrer:innen, ggf. Klassen-Accounts)
- **Persistenter Fortschritt** (Supabase statt localStorage)
- **Prüfungs-Simulator** für die 13 RSAP-Pool-Aufgaben
- **Lehrer-Dashboard** mit Schüler-Fortschritt, eigenen Aufgaben, Materialien-Bestelllisten
- **Inhalts-Bibliotheken** (Bauteile, Befehle, Fehler, Schaltsymbole) als wachstumsfähige Module

Zielgruppen:
1. **Schüler:innen** Klasse 9/10 Realschule BW, RSAP-Vorbereitung 2026 ff.
2. **Lehrer:innen** Technik BW (Premium-Account: eigene Klassen, Aufgaben anpassen)
3. **Eltern/Selbstlerner** (Free-Tier, Lernmodus)

---

## Stack (analog Linktree-Everlast)

| Schicht | Technologie |
|---|---|
| Frontend | **Next.js 16** + React 19 + TypeScript |
| Styling | **Tailwind v4** + shadcn/ui + radix-ui + lucide-react |
| Forms | react-hook-form + zod |
| Drag&Drop | dnd-kit (für Schaltplan-Builder später) |
| Toasts | sonner |
| Theming | next-themes (Dark Mode) |
| Backend | **Supabase** (Auth + Postgres + RLS + Storage für SVGs) |
| Hosting | **Vercel** |
| Repo | öffentliches GitHub (ohne Schulbuch-Inhalte) |

---

## Supabase-Schema (Vorschlag)

### Kern-Inhalte (public read, kein Auth nötig zum Lernen)

```sql
courses (
  id            uuid PK,
  slug          text unique,           -- 'arduino-rsap-2026'
  title         text,
  description   text,
  created_at    timestamptz
)

lessons (
  id                  uuid PK,
  course_id           uuid FK -> courses,
  position            int,
  module              text,             -- 'grundlagen' | 'digital' | 'analog' | 'aktoren' | 'projekt' | 'hilfe'
  title               text,
  explanation_html    text,
  example             jsonb,            -- { title, steps: [{ label, html }] }
  exercises           jsonb,            -- [{ type, question, ... }]
  praxis              jsonb,            -- { aufgabe, bauteile, anschluss, code_hinweise, loesung }
  visuals             jsonb,            -- [{ type, config }]
  pruefungsrelevant   boolean,
  rsap_aufgaben       text[],           -- Bezug zum Pool
  niveau              text[],           -- ['G', 'M']
  bauteile_refs       uuid[] FK,
  befehle_refs        uuid[] FK,
  voraussetzungen     int[],            -- Lektions-IDs
  schwierigkeit       int,              -- 1-5
  created_at          timestamptz
)
```

### Inhalts-Bibliotheken (public read)

```sql
bauteile (
  id          uuid PK,
  name        text,                     -- 'NTC 10k', 'Servo SG90'
  kategorie   text,                     -- 'sensor' | 'aktor' | 'passiv' | 'mcu'
  schaltzeichen_svg  text,              -- inline SVG
  beschreibung_html  text,
  rsap_aufgaben      text[],
  typische_code_snippets text[]
)

arduino_befehle (
  id          uuid PK,
  name        text,                     -- 'digitalWrite'
  signatur    text,                     -- 'digitalWrite(pin, value)'
  beschreibung text,
  beispiel_code text,
  kategorie   text                      -- 'digital-io' | 'analog-io' | 'serial' | 'zeit'
)

fehler_katalog (
  id          uuid PK,
  fehlerart   text,                     -- 'syntax' | 'logik' | 'hardware'
  titel       text,
  symptom     text,
  ursache_html text,
  fix_html    text,
  screenshot_url text                   -- optional in Storage
)

schaltsymbole (
  id          uuid PK,
  name        text,                     -- 'LED', 'Widerstand', 'Taster'
  svg         text,
  kategorie   text
)
```

### User-Daten (auth-protected, RLS)

```sql
profiles (
  id          uuid PK FK -> auth.users,
  rolle       text,                     -- 'schueler' | 'lehrer' | 'admin'
  klasse      text,
  schule      text
  -- RLS: only own profile readable + updatable
)

user_progress (
  user_id     uuid FK -> auth.users,
  lesson_id   uuid FK -> lessons,
  status      text,                     -- 'not_started' | 'in_progress' | 'completed'
  completed_at timestamptz,
  PRIMARY KEY (user_id, lesson_id)
  -- RLS: own progress only
)

pruefungssimulator_sessions (
  id          uuid PK,
  user_id     uuid FK,
  rsap_aufgabe text,                    -- 'Außenbeleuchtung'
  phase       text,                     -- 'planung' | 'fertigung' | 'inbetriebnahme'
  started_at  timestamptz,
  finished_at timestamptz,
  bewertung   jsonb,                    -- { planung: 4, funktion: 5, ... }
  notizen     text
  -- RLS: own + lehrer (eigene Klasse)
)
```

### Lehrer-Features (Phase 3, Premium)

```sql
classes (
  id          uuid PK,
  lehrer_id   uuid FK,
  name        text,                     -- '10b Schule am Bürgle'
  schuljahr   text,
  join_code   text unique               -- für Schüler-Beitritt
)

class_members (
  class_id    uuid FK,
  user_id     uuid FK,
  PRIMARY KEY (class_id, user_id)
)

custom_aufgaben (
  id          uuid PK,
  lehrer_id   uuid FK,
  titel       text,
  aktoren     text[],
  sensoren    text[],
  beschreibung text
  -- RLS: eigene + sichtbar für Schüler in eigener Klasse
)
```

---

## App-Module

### 1. Lernmodus (Kern)
- 28 Lektionen wie in [Curriculum 2.0](CURRICULUM_2.0.md)
- 5 Tabs pro Lektion (Erklärung, Beispiel, Übung, Praxis, Lösung)
- Filter: nach Modul / Niveau / RSAP-relevant / Bauteil
- Fortschritts-Tracking pro User

### 2. Prüfungs-Simulator
- 13 RSAP-Pool-Aufgaben durchspielen
- **3-Phasen-Workflow** mit Timer (3h Planung → 3h Fertigung → 3h Inbetriebnahme)
- Digitaler **Bewertungsbogen** (4 Kriterien × 5 Punkte)
- Aktiver-Wortschatz-Check für das Prüfungsgespräch
- Materialien-Liste pro Aufgabe

### 3. Bauteile-Bibliothek
- Durchsuchbare Liste aller Bauteile
- Pro Bauteil: Schaltzeichen, Beschreibung, RSAP-Aufgaben-Bezug, Code-Snippets, Datenblatt-Link
- Verknüpfung zurück zu Lektionen, die das Bauteil verwenden

### 4. Glossar Arduino-Befehle
- Alle Befehle (digitalWrite, analogRead, …) durchsuchbar
- Signatur, Beschreibung, Code-Beispiel
- Verknüpfung zu Lektionen

### 5. Fehler-Katalog
- Syntax / Logik / Hardware (3 Tabs)
- Symptom → Ursache → Fix
- Screenshots wo sinnvoll
- Lehrer können eigene Fehler-Einträge ergänzen (Premium)

### 6. Lehrer-Dashboard
- Klassen verwalten
- Schüler-Fortschritt einsehen
- Eigene Aufgaben aus Bausteinen zusammenklicken (RSAP-konform: 1A+2S oder 2A+1S, mind. 1 analoger externer Sensor)
- Materialien-Bestellliste pro Klasse generieren
- PDF-Export von Arbeitsblättern und Lösungen

### 7. Schaltsymbol-Trainer (optional, Phase 3)
- Interaktiv: Bauteil → Symbol zuordnen
- Eigene Schaltpläne bauen (dnd-kit)

---

## Pricing-Modell (Vorschlag)

| Tier | Preis | Features |
|---|---|---|
| Free | 0 € | Lernmodus, Bauteile, Glossar, Fehler-Katalog – alles 1-User |
| Schüler-Plus | 4,90 €/Monat oder einmalig 24,90 € bis Abi | Prüfungs-Simulator, eigene Notizen, Spaced Repetition |
| Lehrer Single | 9,90 €/Monat oder 79 €/Jahr | + Lehrer-Dashboard, 1 Klasse, AB-Export |
| Lehrer Schule | 199 €/Jahr | + unbegrenzt Klassen, Materialien-Bestelllisten, Custom-Aufgaben, Multi-Lehrer-Account |

**Begründung:** Selbstlerner günstig halten (Verbreitung), Lehrer-Tier mit klarem Mehrwert (Zeit-Ersparnis bei Korrektur + Material-Logistik).

---

## Migrations-Pfad Vanilla → SaaS

### Phase 1.5 (vor SaaS)
- Datenstrukturen in `lessons-*.js` so anpassen, dass sie 1:1 zu Supabase-JSON-Spalten passen
- Tag-System einführen (`pruefungsrelevant`, `rsap_aufgaben`, `bauteile`, `befehle`)
- ProgressStore-Adapter: Mini-API `ProgressStore.setStatus()` statt direkter localStorage-Zugriffe → später tauschbar gegen Supabase
- Bei Lektion 17 die "gelötete Schaltung"-Anforderung explizit dokumentieren
- 11 neue Lektionen ergänzen (siehe Curriculum 2.0)

### Phase 2 (SaaS-Skeleton)
- Next.js 16-Projekt via `webapp-saas-erstellen`-Skill
- Supabase-Projekt anlegen (Schema oben)
- Lektionen-Daten aus JS-Dateien → Supabase importieren (`INSERT … SELECT FROM json`)
- Auth (Email + Passwort, später ggf. OAuth Schule-Login)
- Lernmodus 1:1 portieren
- localStorage-Migration: beim ersten Login alte Progress-Daten übernehmen

### Phase 3 (Premium-Features)
- Prüfungs-Simulator
- Lehrer-Dashboard
- Schaltplan-Builder

---

## Brand / UI-Richtlinie (Entwurf)

- Klare, ruhige Optik – keine Maker-Ästhetik mit Neon
- Farbcodes:
  - Erklärung-Tab: neutral grau-blau
  - Beispiel-Tab: grün (Schritt-für-Schritt)
  - Übung-Tab: orange (Aktivität)
  - Praxis-Tab: gelb-warnend (Hardware = Vorsicht)
  - Lösung-Tab: rot (Lehrer-only)
- Schaltbilder: einheitlicher Fritzing-Stil, eigene SVG-Assets
- Mobil-tauglich: Schüler:innen nutzen Smartphones zum Wiederholen

---

## Was NICHT in der Webapp landen sollte

- **Schulbuchseiten** (Urheberrecht) – nur Verweise
- **PDF-Texte 1:1 aus Skript BW oder Rottweil** (CC-NC) – paraphrasieren
- **Fritzing-Original-Renderings** – eigene SVGs
- **Aufgabenstellungen aus offiziellen Prüfungen** – nur Pool-Themen aus der Präsentation (Fakten = OK)
