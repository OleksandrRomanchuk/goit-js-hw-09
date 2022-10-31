const refs = {
  launchBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  documentBody: document.body,
};

let timerId = null;

toggleBtnAvailability(refs.launchBtn, refs.stopBtn);

refs.launchBtn.addEventListener('click', startChangeBackgroundColor);
refs.stopBtn.addEventListener('click', stopChangeBackgroundColor);

function startChangeBackgroundColor() {
  toggleBtnAvailability(refs.stopBtn, refs.launchBtn);
  setBodyBackgroundColor(refs.documentBody);

  timerId = setInterval(setBodyBackgroundColor, 1000, refs.documentBody);
}

function stopChangeBackgroundColor() {
  clearInterval(timerId);
  toggleBtnAvailability(refs.launchBtn, refs.stopBtn);
}

function toggleBtnAvailability(enabledBtn, disabledBtn) {
  enabledBtn.removeAttribute('disabled', 'disabled');
  disabledBtn.setAttribute('disabled', 'disabled');
}

function setBodyBackgroundColor(element) {
  element.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
