(() => {
    let playing = true,
      activeHole = 1;
    let dead = 0 
    let lost = 0
  
    const stop = () => playing = true,
      getHole = index => document.getElementById(`hole${index}`),
      deactivateHole = index =>
        getHole( index ).className = 'hole',
      activateHole = index =>
        getHole( index ).className = 'hole hole_has-mole',
      next = () => setTimeout(() => {
        if ( !playing ) {
          return;
        }
        deactivateHole( activeHole );
        activeHole = Math.floor( 1 + Math.random() * 9 );
        activateHole( activeHole );
        next();
      }, 800 );
  
    next();
    
    //document.getElementsByTagName("div").onclick = function() {
      document.addEventListener('click', () => {
      if (event.target.classList.contains('hole_has-mole')) {
        dead += 1;
        document.getElementById('dead').innerHTML = dead;
        if (dead === 10) {
          alert("Вы выиграли");
         dead = 0;
         document.getElementById('dead').innerHTML = dead;
         lost = 0;
         document.getElementById('lost').innerHTML = lost;
        }
      } else {
        lost += 1;
        document.getElementById('lost').innerHTML = lost;
        if(lost === 5){
          alert("Вы проиграли");
         dead = 0;
         document.getElementById('dead').innerHTML = dead;
         lost = 0;
         document.getElementById('lost').innerHTML = lost;
        }
      }
    });
  })();