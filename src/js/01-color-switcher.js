import { refs } from './refs';

const {
  task01: { launchBtn, stopBtn, documentBody },
} = refs;

let timerId = null;

toggleBtnAvailability(launchBtn, stopBtn);

launchBtn.addEventListener('click', startChangeBackgroundColor);
stopBtn.addEventListener('click', stopChangeBackgroundColor);

function startChangeBackgroundColor() {
  toggleBtnAvailability(stopBtn, launchBtn);
  setBodyBackgroundColor(documentBody);

  timerId = setInterval(setBodyBackgroundColor, 1000, documentBody);
}

function stopChangeBackgroundColor() {
  clearInterval(timerId);
  toggleBtnAvailability(launchBtn, stopBtn);
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
