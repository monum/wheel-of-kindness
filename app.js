var pieces = [
  "Write a letter to a veteran! To volunteer to be a penpal, email <a href = 'mailto:vetvolunteer@boston.gov'>vetvolunteer@boston.gov</a>.",
  "Sew a face covering. Details via <a href='bostonareamaskinitiative.com',bostonareamaskinitiative.com</a>.",
  "Call an older adult. Say hello to someone you know via phone or video chat.",
  "Thank a front-line service worker! When you get groceries, or see someone who works in health care, take a moment to share gratitude.",
  "Read a book to our BPS scholars. Post your video on Twitter with the hashtag #GoodnightScholarsBPS.",
  "Organize a virtual block party! Post the playlist link on Twitter with the hashtag #BOSdanceparty",
  "Share your #IStayHomeFor story. Post a photo of someone you care about use the hashtags #BosStayHome and #IStayHomeFor.",
  "Challenge BPS Superintendent Dr. Cassellius to 10 pushups! Take a video of yourself doing 10 pushups and post online with hashtag #See10Do10Challenge."
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
    d3.select('#button').html("Your One Boston Day action will be...");
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
    d3.select('#button').html("Click here for another act of kindness!");
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
