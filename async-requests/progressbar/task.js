
const form = document.querySelector('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
  
  const formData = new FormData(form);
  
  xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
      const percentComplete = (event.loaded / event.total) * 100;
      progress.value = percentComplete;
    }
  };
  
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Форма успешно отправлена!');
    } else {
      console.error('Произошла ошибка при отправке формы.');
    }
  }
  
  xhr.send(formData);
});