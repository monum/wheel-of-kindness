function getCurrentDate(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0
  var yyyy = today.getFullYear();
  // get month as name
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  var monthIndex = today.getMonth();
  var monthName = monthNames[monthIndex];
  return monthName + " " + dd + ", " + yyyy;
}
var pieces = [
  "<b>Be kind to the Earth!</b> <br>Bring your compost to a Project Oscar community composting bin while listening to Dr. Wonder’s new jam, <a href='https://www.youtube.com/watch?v=R17SYAVXH-I'>'Compost, not Trash'</a>.",
  "<b>Make a 'mix tape' for your neighbors.</b> <br>Create a shared playlist of songs that you can enjoy at an upcoming neighborhood block party.",
  "<b>Call an older adult!</b> <br>Say hello to someone you know via phone or video chat.",
  "<b>Thank a front-line worker!</b> <br>Take a moment to share gratitude however you feel comfortable.",
  "<b>Support a small business!</b> <br>Have lunch at a local restaurant or visit your closest Main Street businesses.",
  "<b>Take care of yourself.</b> <br>Snuggle up with your favorite book from the Boston Public Library or enjoy some time outdoors in a beautiful Boston park near you.",
  "<b>Get organized.</b> <br>Request a cleanup project in your neighborhood this summer.",
  "<b>Support the LGBTQ+ community.</b> <br>Volunteer or donate to a local organization uplifting equity."
]

var tweets = [
  "be kind to the earth",
  "make a 'mix tape' for my neighbors",
  "call an older adult",
  "thank a front-line worker",
  "support small business",
  "take care of yourself",
  "get organized",
  "support the LGBTQ+ community"
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
  var subTitle = document.querySelector('#sub-title');

  var deg = 0;

  todayDate = getCurrentDate();
  subTitle.innerHTML = todayDate;

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
