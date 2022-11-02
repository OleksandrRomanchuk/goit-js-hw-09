const refs = {
  task01: {
    launchBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    documentBody: document.body,
  },
  task02: {
    datetimeEl: document.querySelector('input[id="datetime-picker"]'),
    startBtn: document.querySelector('button[data-start]'),
    outptuElements: document.querySelectorAll('.value'),
    timerEl: document.querySelector('.timer'),
  },
  task03: { form: document.querySelector('.form') },
};

export { refs };
