let timerSeconds = 60;
  document.getElementById("timer").innerHTML = timerSeconds;
  let timer = setInterval(function() {
   timerSeconds--;
   document.getElementById("timer").innerHTML = timerSeconds;
   if (timerSeconds === 0) {
    clearInterval(timer);
    alert("Вы выиграли");
   }
  }, 1000);