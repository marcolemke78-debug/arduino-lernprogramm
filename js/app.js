const LESSONS = [
  // Modul 1: Grundlagen
  { id: 1, title: 'Was ist ein Arduino?', module: 'grundlagen' },
  { id: 2, title: 'Board & Breadboard', module: 'grundlagen' },
  { id: 35, title: 'Strom, Spannung & Widerstand', module: 'grundlagen' },
  { id: 3, title: 'Die Arduino IDE & dein erstes Programm', module: 'grundlagen' },
  { id: 4, title: 'setup() und loop()', module: 'grundlagen' },
  // Modul 2: Digitale Welt
  { id: 5, title: 'LEDs ansteuern', module: 'digital' },
  { id: 6, title: 'Wechselblinker', module: 'digital' },
  { id: 7, title: 'LED-Lauflicht', module: 'digital' },
  { id: 8, title: 'Taster als Eingabe', module: 'digital' },
  { id: 9, title: 'LED mit Taster steuern', module: 'digital' },
  { id: 10, title: 'Einfache Ampelschaltung', module: 'digital' },
  // Modul 3: Analoge Welt
  { id: 30, title: 'Spannungsteiler verstehen', module: 'analog' },
  { id: 11, title: 'Analoge Eingänge', module: 'analog' },
  { id: 12, title: 'PWM: Dimmen statt Schalten', module: 'analog' },
  { id: 13, title: 'Lichtsensor (LDR)', module: 'analog' },
  { id: 31, title: 'NTC-Temperatursensor', module: 'analog' },
  { id: 14, title: 'Entscheidungen mit Sensorwerten', module: 'analog' },
  // Modul 4: Aktoren erweitert
  { id: 32, title: 'Servomotor ansteuern', module: 'aktoren' },
  { id: 33, title: 'Transistor als Schalter (Grundlagen)', module: 'aktoren' },
  { id: 34, title: 'DC-Motor mit L298N', module: 'aktoren' },
  // Modul 5: Prüfungsprojekt
  { id: 15, title: 'Ampel mit Fußgängerüberweg', module: 'projekt' },
  { id: 16, title: 'Nachtabschaltung mit Lichtsensor', module: 'projekt' },
  { id: 17, title: 'Prüfungsschaltung komplett', module: 'projekt' },
];

function navigateToLesson(id) {
  document.getElementById('progress-bar-container').style.display = '';
  document.getElementById('sidebar').classList.remove('open');
  // Wiederholungs-Box ausblenden, sobald aktiv in eine Lektion navigiert wird
  // (Fokus aufs Lernen). Sie erscheint nur als Begruessung beim App-Start;
  // die dezenten Sidebar-Badges bleiben als Dauer-Erinnerung sichtbar.
  const reviewBox = document.getElementById('review-due');
  if (reviewBox) reviewBox.style.display = 'none';
  Progress.setLastLesson(id);
  if (Progress.getStatus(id) === 'not_started') {
    Progress.setStatus(id, 'in_progress');
  }
  const allItems = document.querySelectorAll('#sidebar li');
  allItems.forEach(li => li.classList.remove('active'));
  const activeItem = document.querySelector(`#sidebar li[data-lesson-id="${id}"]`);
  if (activeItem) activeItem.classList.add('active');
  Renderer.renderLesson(id);
  Renderer.renderSidebar(LESSONS);
  Renderer.renderProgressBar();
  const newActiveItem = document.querySelector(`#sidebar li[data-lesson-id="${id}"]`);
  if (newActiveItem) newActiveItem.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  Renderer.renderSidebar(LESSONS);
  Renderer.renderProgressBar();
  const lastLesson = Progress.getLastLesson();
  navigateToLesson(lastLesson);
  // Begruessung: Faellig-Box NACH der initialen Navigation zeigen,
  // damit sie beim App-Start ueber der zuletzt geoeffneten Lektion erscheint.
  Renderer.renderReviewDue();
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
  document.getElementById('reset-progress').addEventListener('click', () => {
    if (confirm('Fortschritt wirklich zurücksetzen?')) {
      Progress.reset();
      location.reload();
    }
  });
});
