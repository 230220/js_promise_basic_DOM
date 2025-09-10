'use strict';

// write your code here
const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  if (!logo) {
    return;
  }

  logo.addEventListener(
    'click',
    () => {
      resolve();
    },
    { once: true },
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function promiseSuccess() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

function promiseError() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

promise1.then(promiseSuccess).catch(promiseError);
promise2.then(promiseSuccess).catch(promiseError);
