function getRandomNumber(min, max) {
    if (max < min) {
      [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 
  
  const elements = document.querySelectorAll('.rotator__case');
  const elementsLength = elements.length;
  
  setInterval(() => {
    let currentElement = document.querySelector('.rotator__case_active');
    let newElementIndex = getRandomNumber(0, elementsLength - 1);
    let newElement = elements[newElementIndex];
    currentElement.classList.remove('rotator__case_active');
    newElement.classList.add('rotator__case_active');
  }, 1000);