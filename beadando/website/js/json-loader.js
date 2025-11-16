// js/json-loader.js

document.addEventListener('DOMContentLoaded', () => {
  const jsonPreview = document.getElementById('jsonPreview');
  const formMessage = document.getElementById('formMessage');

  // Ha nincs JSON előnézet ezen az oldalon, nincs dolgunk
  if (!jsonPreview) return;

  let users = [];

  // Megpróbáljuk betölteni a korábbi regisztrációkat (localStorage-ból)
  function loadUsers() {
    try {
      const stored = localStorage.getItem('izemlekUsers');
      if (stored) {
        users = JSON.parse(stored);
      }
    } catch (err) {
      console.error('Hiba a localStorage olvasásakor:', err);
      users = [];
    }
  }

  function saveUsers() {
    try {
      localStorage.setItem('izemlekUsers', JSON.stringify(users));
    } catch (err) {
      console.error('Hiba a localStorage írásakor:', err);
    }
  }

  function updatePreview() {
    if (!users.length) {
      jsonPreview.textContent = '// Még nincs regisztrált felhasználó.';
    } else {
      jsonPreview.textContent = JSON.stringify(users, null, 2);
    }
  }

  // Induláskor betöltjük az eddigi adatokat (ha vannak)
  loadUsers();
  updatePreview();

  // Esemény figyelése, amit a form-validate.js lő ki
  document.addEventListener('regFormValid', (e) => {
    const userData = e.detail;
    users.push(userData);
    saveUsers();
    updatePreview();

    if (formMessage) {
      formMessage.textContent = 'Sikeres “virtuális” regisztráció – lásd a JSON-t lent ☺';
      formMessage.classList.remove('error');
      formMessage.classList.add('ok');
    }
  });
});
