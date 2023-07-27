let value = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let linkCollection = document.querySelectorAll('.dropdown__item');

value.addEventListener('click', () => {
  list.classList.toggle('dropdown__list_active');
});

linkCollection.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    let text = event.target.textContent;
    value.textContent = text;
    list.classList.remove('dropdown__list_active');
  });
  });