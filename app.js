var pieces = [
  "Write a letter to a veteran. To volunteer to be a penpal, please email <a href mailto:vetvolunteer@boston.gov>vetvolunteer@boston.gov</a>.",
  "p2",
  "p3",
  "p4",
  "p5",
  "p6",
  "p7",
  "p8"
];

function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

(function() {
  var wheel = document.querySelector('#wheel');
  var startButton = document.querySelector('#button');
  
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
    d3.select('#result').html(pieces[piece-1]);
    d3.select('#button').html("Click here to try again!");
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();