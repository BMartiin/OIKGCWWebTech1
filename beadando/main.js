// Mobil menü vezérlés
document.getElementById('openMenu').onclick = () => {
    document.getElementById('mobileMenu').classList.add('open');
};
document.getElementById('openAccount').onclick = () => {
    document.getElementById('mobileAccount').classList.add('open');
};
document.querySelectorAll('.closeMobile').forEach(btn => {
    btn.onclick = () => {
        document.getElementById('mobileMenu').classList.remove('open');
        document.getElementById('mobileAccount').classList.remove('open');
    };
});

// Regisztráció gombok linkelése
document.querySelectorAll('.reg_button').forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = 'regisztracio.html';
    });
});

// 🔔 Belépés + Elfelejtett jelszó figyelmeztetés
const warningMessage = 'Ez a funkció jelenleg még nem elérhető. A bejelentkezés fejlesztés alatt áll.';

// Minden "Belépés" gomb (desktop + mobil)
document.querySelectorAll('.login-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert(warningMessage);
    });
});

// "Elfelejtett jelszó" link (desktop)
document.querySelectorAll('.forgot-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Az elfelejtett jelszó funkció jelenleg nem elérhető.');
    });
});