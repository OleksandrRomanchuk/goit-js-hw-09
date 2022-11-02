import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';

const {
  task02: { datetimeEl, startBtn, outptuElements },
} = refs;
let selectedDate = null;
let timerId = null;

// disabledEl(startBtn);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (!checkingCorrectnessDate(selectedDates[0])) return;
    selectedDate = selectedDates[0];
    enabledEl(startBtn);
    startBtn.addEventListener('click', launchTimer);
  },
};

flatpickr(datetimeEl, options);

function launchTimer() {
  disabledEl(startBtn);
  disabledEl(datetimeEl);
  updatTimeboard(selectedDate, outptuElements);

  Notify.success('Congratulations! You have successfully started the timer!');

  timerId = setInterval(updatTimeboard, 1000, selectedDate, outptuElements);
}

function updatTimeboard(time, outptuElements) {
  const convertedTime = convertMs(time - new Date());

  time - new Date() < 1000 ? clearInterval(timerId) : false;

  outptuElements.forEach(el => {
    Object.keys(convertedTime).forEach(key => {
      el.hasAttribute(`data-${key}`)
        ? (el.textContent = padStart(convertedTime[key]))
        : false;
    });
  });
}

function checkingCorrectnessDate(date) {
  disabledEl(startBtn);

  return date <= new Date()
    ? Notify.failure('Please choose a date in the future')
    : true;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function padStart(value) {
  return String(value).padStart(2, '0');
}

function disabledEl(element) {
  element.setAttribute('disabled', 'disabled');
}

function enabledEl(element) {
  element.removeAttribute('disabled', 'disabled');
}
