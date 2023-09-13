const answerWrapper = document.querySelector('.poll__answers');
const titleWrapper = document.querySelector('.poll__title'); 

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);

let title;

xhr.onload = function() {
  if (xhr.status === 200) {
    const responseData = JSON.parse(xhr.response);
    const answers = responseData.data.answers;
    title = responseData.data.title; 
    displayAnswers(answers, answerWrapper, titleWrapper); 
  }
}
xhr.send();


function displayAnswers(answers, answerWrapper, titleWrapper) { 

    titleWrapper.textContent = title; 
    for (let i = 0; i < answers.length; i++) {
        const btn = document.createElement('button');
        btn.classList.add('poll__answer');
        btn.textContent = answers[i];
        btn.addEventListener('click', function() {
          alert('Спасибо, ваш голос засчитан!');
        });
        answerWrapper.appendChild(btn);
      }
}