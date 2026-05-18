const Progress = {
  STORAGE_KEY: 'arduino_lernprogramm_progress',
  VERSION: 2,

  // Anzahl Lektionen dynamisch aus LESSONS-Array.
  // Vermeidet hardcoded Wert beim Kopieren auf andere Lernprogramme
  // und passt sich automatisch an, wenn Lektionen ergaenzt werden.
  getTotalLessons() {
    return (typeof LESSONS !== 'undefined' && Array.isArray(LESSONS)) ? LESSONS.length : 1;
  },

  // Standard-Zustand: alle Lektionen auf not_started, letzte Lektion = 1.
  // Iteriert ueber LESSONS, damit auch nicht-zusammenhaengende IDs
  // (z.B. id 30 fuer Spannungsteiler) sauber angelegt werden.
  createDefault() {
    const data = { version: this.VERSION, lessons: {}, lastLesson: 1 };
    if (typeof LESSONS !== 'undefined' && Array.isArray(LESSONS)) {
      LESSONS.forEach(l => { data.lessons[l.id] = { status: 'not_started' }; });
    }
    return data;
  },

  // Aus localStorage laden.
  // Fallback auf Default bei: fehlendem Eintrag, kaputtem JSON, Version-Mismatch.
  load() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) {
        const data = this.createDefault();
        this.save(data);
        return data;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== this.VERSION) {
        const data = this.createDefault();
        this.save(data);
        return data;
      }
      return parsed;
    } catch (e) {
      // JSON.parse-Fehler oder sonstiges Problem -> sauberer Neustart
      const data = this.createDefault();
      this.save(data);
      return data;
    }
  },

  // Aktuellen Zustand in localStorage schreiben
  save(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  },

  // Status einer Lektion abfragen: 'not_started' | 'in_progress' | 'completed'
  getStatus(lessonId) {
    const data = this.load();
    const lesson = data.lessons[lessonId];
    return lesson ? lesson.status : 'not_started';
  },

  // Status einer Lektion setzen und direkt speichern
  setStatus(lessonId, status) {
    const data = this.load();
    if (!data.lessons[lessonId]) {
      data.lessons[lessonId] = {};
    }
    data.lessons[lessonId].status = status;
    this.save(data);
  },

  // Letzte besuchte Lektion auslesen
  getLastLesson() {
    const data = this.load();
    return data.lastLesson;
  },

  // Letzte besuchte Lektion setzen und speichern
  setLastLesson(lessonId) {
    const data = this.load();
    data.lastLesson = lessonId;
    this.save(data);
  },

  // Fortschritt komplett zuruecksetzen
  reset() {
    localStorage.removeItem(this.STORAGE_KEY);
  },

  // Prozent der abgeschlossenen Lektionen ueber alle LESSONS-Eintraege.
  // start/end werden als alte API-Parameter ignoriert (Range-Splits
  // werden nicht mehr genutzt) — Zaehlung laeuft jetzt ueber LESSONS,
  // damit auch nicht-zusammenhaengende IDs (id 30) mitzaehlen.
  getCompletionPercent(start, end) {
    if (typeof LESSONS === 'undefined' || !Array.isArray(LESSONS) || LESSONS.length === 0) return 0;
    const data = this.load();
    let completed = 0;
    LESSONS.forEach(l => {
      if (data.lessons[l.id] && data.lessons[l.id].status === 'completed') {
        completed++;
      }
    });
    return Math.round((completed / LESSONS.length) * 100);
  }
};
