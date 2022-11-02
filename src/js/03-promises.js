import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import createPromise from './promiseFunc';

const {
  task03: { form },
} = refs;

[...form.elements].forEach(({ name }) => {
  if (name) {
    name === 'amount'
      ? form.elements[name].setAttribute('min', 1)
      : form.elements[name].setAttribute('min', 0);
  }
});

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let { delay, step, amount } = createDataObj(form);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(ifPromiseResolve)
      .catch(ifPromiseReject)
      .finally();

    delay += step;
  }
}

function createDataObj(formEl) {
  return [...formEl].reduce((dataObj, { name }) => {
    if (name) {
      dataObj[name] = Number(formEl.elements[name].value);
    }

    return dataObj;
  }, {});
}

function ifPromiseResolve({ position, delay }) {
  Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

function ifPromiseReject({ position, delay }) {
  Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}
