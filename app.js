  
var pieces = [
  "<b>Write letters to a veteran!</b> <br>To volunteer as a penpal, email <a href = 'mailto:vetvolunteer@boston.gov'>vetvolunteer@boston.gov</a>.",
  "<b>Sew a face mask!</b> <br>Make one for yourself or someone else. Details on <a href = 'https://www.boston.gov/news/information-face-coverings-covid-19'>boston.gov</a>.",
  "<b>Call an older adult!</b> <br>Say hello to someone you know via phone or video chat.",
  "<b>Thank a front-line worker!</b> <br>Take a moment to share gratitude however you feel comfortable.",
  "<b>Read a book to our BPS scholars!</b> <br>Post your video on social media with the hashtag #GoodnightScholarsBPS.",
  "<b>Make a 'mix tape' for your neighbors.</b> <br>Create a shared playlist of songs that you can enjoy virtually.",
  "<b>Share your #IStayHomeFor story!</b> <br>Post a photo of someone you care about using the hashtags #BosStayHome and #IStayHomeFor.",
  "<b>Make a supportive window sign.</b> <br>Share a message of hope and unity and place it facing outwards in your window."
]

var tweets = [
  "write letters to a veteran",
  "sew a face mask",
  "call an older adult",
  "thank a front-line worker",
  "read a book to our BPS scholars",
  "make a 'mix tape' for my neighbors",
  "share my IStayHomeFor story",
  "make a supportive window sign"
];

function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

(function() {
  document.addEventListener("touchstart", function() {},false);

  var wheel = document.querySelector('#wheel');
  var startButton = document.querySelector('#button');
  var tryAgainButton = document.querySelector('#try-again');

  var deg = 0;

  function click() {
    d3.select('#result').html("<b>Your One Boston Day action is...</b>");
    d3.select('#button').style('display','none');
    d3.select('#try-again').style('display','none');
    d3.select('#tweet').style('display','none');
    
    deg = -1*(22.5 + 45*getRandomInt(16,64));

    wheel.style.transition = 'all 4s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
  }

  startButton.addEventListener('click', click);
  tryAgainButton.addEventListener('click', click);

  wheel.addEventListener('transitionend', () => {
    wheel.style.transition = 'none';
    var actualDeg = deg % 360;
    var piece = Math.ceil(-1*(actualDeg)/45);

    if (piece <= 4){
      piece = piece + 4;
    } else {
      piece = piece - 4;
    }
    
    d3.select('#result').html(pieces[piece-1]);
    d3.select('#try-again').style('display','table');
    d3.select('#tweet').style('display','table');
    d3.select('#try-again-text').html("Try again!");
    var tweet_text = tweets[piece-1];
    var tweet_html = '<a href="https://twitter.com/intent/tweet?text=I am going to '+ tweet_text + ' for One Boston Day! What will you do?&button_hashtag=OneBostonDay&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-text="Test" data-show-count="false">Tweet Your Act of Kindess!</a>';
    d3.select('#tweet-text').html(tweet_html);
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
