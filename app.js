var pieces = [
  "<b>Write a letter to a veteran!</b> <br>To volunteer, email <a href = 'mailto:vetvolunteer@boston.gov'>vetvolunteer@boston.gov</a>.",
  "<b>Sew a face covering.</b> <br>Details via <a href='bostonareamaskinitiative.com'>bostonareamaskinitiative.com</a>.",
  "<b>Call an older adult.</b> <br>Say hello to someone you know via phone or video chat.",
  "<b>Thank a front-line service worker!</b> <br>Take a moment to share gratitude however you feel comfortable.",
  "<b>Read a book to our BPS scholars.</b> <br>Post your video on Twitter with the hashtag #GoodnightScholarsBPS.",
  "<b>Organize a virtual block party!</b> <br>Post the playlist on Twitter with the hashtag #BOSdanceparty.",
  "<b>Share your #IStayHomeFor story.</b> <br>Post a photo of someone you care about using the hashtags #BosStayHome and #IStayHomeFor.",
  "<b>Challenge BPS Superintendent Dr. Cassellius to 10 pushups!</b> <br> Post a video of yourself doing 10 pushups with the hashtag #See10Do10Challenge."
]

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
    d3.select('#button').html("Your One Boston Day action is...");
    startButton.style.pointerEvents = 'none';
    deg = -1*(22.5 + 45*getRandomInt(16,64));

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
    d3.select('#button').html("Click for another act of kindness!");
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
