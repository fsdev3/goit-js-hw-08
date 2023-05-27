const feedbackFormEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let dataForm = {};

const onInput = function (event) {
  dataForm[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
  console.log(dataForm);
};
feedbackFormEl.addEventListener('input', onInput);
window.addEventListener('load', onLoad);

function onLoad() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    return;
  }
  dataForm = JSON.parse(data);
  Object.entries(dataForm).forEach(([key, value]) => {
    feedbackFormEl.elements[key].value = value;
  });
}

feedbackFormEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.log(dataForm);
  dataForm = {};
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
