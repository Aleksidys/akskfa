const revealElements = document.querySelectorAll('.reveal');

function revealElement() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight && elementBottom > 0) {
      element.classList.add('reveal_active');
    } else if (elementBottom > windowHeight) {
      element.classList.remove('reveal_active');
    }else {
      element.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', revealElement);