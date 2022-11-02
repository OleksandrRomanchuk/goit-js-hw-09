import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import createPromise from './promiseFunc';

const {
  task03: { form },
} = refs;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  createDataObj(form);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(ifPromiseResolve)
      .catch(ifPromiseReject)
      .finally();

    delay += step;
  }
}

function createDataObj(formEl) {
  return ({ delay, step, amount } = [...formEl].reduce((dataObj, { name }) => {
    if (name) {
      dataObj[name] = Number(formEl.elements[name].value);
    }

    return dataObj;
  }, {}));
}

function ifPromiseResolve({ position, delay }) {
  Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

function ifPromiseReject({ position, delay }) {
  Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}
