// js/form-validate.js

document.addEventListener('DOMContentLoaded', () => {
  const regForm = document.getElementById('regForm');
  if (!regForm) {
    // Nem ezen az oldalon vagyunk, ahol a form van
    return;
  }

  const nameInput       = document.getElementById('name');
  const emailInput      = document.getElementById('email');
  const passwordInput   = document.getElementById('password');
  const password2Input  = document.getElementById('password2');
  const kitchenSelect   = document.getElementById('kitchen');
  const termsCheck      = document.getElementById('terms');
  const newsletterCheck = document.getElementById('newsletter');

  const nameError      = document.getElementById('nameError');
  const emailError     = document.getElementById('emailError');
  const passwordError  = document.getElementById('passwordError');
  const password2Error = document.getElementById('password2Error');
  const termsError     = document.getElementById('termsError');

  const formMessage = document.getElementById('formMessage');

  function clearErrors() {
    if (nameError)      nameError.textContent = '';
    if (emailError)     emailError.textContent = '';
    if (passwordError)  passwordError.textContent = '';
    if (password2Error) password2Error.textContent = '';
    if (termsError)     termsError.textContent = '';

    if (formMessage) {
      formMessage.textContent = '';
      formMessage.classList.remove('ok', 'error');
    }
  }

  function validateEmail(email) {
    const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return pattern.test(email);
  }

  regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    clearErrors();
    let isValid = true;

    // Név
    if (!nameInput.value.trim()) {
      if (nameError) nameError.textContent = 'A név megadása kötelező.';
      isValid = false;
    }

    // E-mail
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      if (emailError) emailError.textContent = 'Az e-mail megadása kötelező.';
      isValid = false;
    } else if (!validateEmail(emailValue)) {
      if (emailError) emailError.textContent = 'Kérlek érvényes e-mail címet adj meg.';
      isValid = false;
    }

    // Jelszó
    if (!passwordInput.value) {
      if (passwordError) passwordError.textContent = 'A jelszó megadása kötelező.';
      isValid = false;
    } else if (passwordInput.value.length < 6) {
      if (passwordError) passwordError.textContent = 'A jelszónak legalább 6 karakter hosszúnak kell lennie.';
      isValid = false;
    }

    // Jelszó ismét
    if (!password2Input.value) {
      if (password2Error) password2Error.textContent = 'Kérlek ismételd meg a jelszót.';
      isValid = false;
    } else if (passwordInput.value !== password2Input.value) {
      if (password2Error) password2Error.textContent = 'A két jelszó nem egyezik.';
      isValid = false;
    }

    // Adatkezelés
    if (!termsCheck.checked) {
      if (termsError) termsError.textContent = 'A regisztrációhoz el kell fogadnod az adatkezelést.';
      isValid = false;
    }

    if (!isValid) {
      if (formMessage) {
        formMessage.textContent = 'Kérlek javítsd a pirossal jelzett hibákat.';
        formMessage.classList.add('error');
      }
      return;
    }

    // Ha minden rendben: tiszta user objektum
    const userData = {
      nev: nameInput.value.trim(),
      email: emailValue,
      kedvencKonyha: kitchenSelect.value || null,
      hirlevelFeliratkozas: newsletterCheck.checked,
      regDatum: new Date().toISOString()
    };

    // Egyedi esemény kilövése – a JSON-t a json-loader.js fogja kezelni
    const ev = new CustomEvent('regFormValid', { detail: userData });
    document.dispatchEvent(ev);
  });
});
