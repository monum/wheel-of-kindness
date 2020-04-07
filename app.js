function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

(function() {
  const wheel = document.querySelector('#wheel');
  const startButton = document.querySelector('#button');
  var deg = 0;

  startButton.addEventListener('click', () => {
    d3.select('#button').html("Spinning!");
    startButton.style.pointerEvents = 'none';
    deg = -1*getRandomInt(720,2880);
    
    if (!(deg % 2)){
      deg+=1;
    }

    wheel.style.transition = 'all 4s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
  });

  wheel.addEventListener('transitionend', () => {
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    var actualDeg = deg % 360;
    var piece = Math.ceil(-1*(actualDeg)/45);
    console.log(actualDeg, piece);
    d3.select('#button').html("You spun " + piece +"!<br/><br/>Click here to try again!");
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();