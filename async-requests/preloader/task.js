const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

// Отправка GET-запроса для получения данных о курсе валют
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);

xhr.onload = function() {
  if (xhr.status === 200) {
    const responseData = JSON.parse(xhr.response);

    displayCurrencyRates(responseData);

    loader.classList.remove('loader_active');
  }
};

xhr.send();

function displayCurrencyRates(responseData) {
  const valuteData = responseData.response.Valute;
  for (const valuteCode in valuteData) {
    const valute = valuteData[valuteCode];

    const item = document.createElement('div');
    item.classList.add('item');
    const itemCode = document.createElement('div');
    itemCode.classList.add('item__code');
    itemCode.textContent = valute.CharCode;

    const itemValue = document.createElement('div');
    itemValue.classList.add('item__value');
    itemValue.textContent = valute.Value;

    const itemCurrency = document.createElement('div');
    itemCurrency.classList.add('item__currency');
    itemCurrency.textContent = 'руб.';

    item.appendChild(itemCode);
    item.appendChild(itemValue);
    item.appendChild(itemCurrency);

    itemsContainer.appendChild(item);
  }
}
