
var myGame = new Game();

$(document).ready(function(){

  $('.nextcardbutton').hide();

  $('.startbutton').click(function(){
  $(".winnerloser").css("visibility","hidden");
  myGame = new Game();
  updatetheScore();
  $(this).hide();
  $('.nextcardbutton').show();
  myGame.shuffleTheDeck();//invokes the function startGame from simon.js
  });

  $('.nextcardbutton').click(function(){
  seetheCard();
    //draws the card and populates it in one step below.
  $('#martiansdrawcard').html(myGame.drawTheMartianCard());
  $('#humansdrawcard').html(myGame.drawTheHumanCard());
  updatetheScore();

  setTimeout(function () {
  fliptheCard();
  }, 1000);

   if(myGame.humanrandomDeck.length <= 0){
   myGame.determineTheWinner();
          updateTheWinner();
          showTheWinner();
          $(".startbutton").show();
          $(".nextcardbutton").hide();
      }
});
});

//functions referred to above are below.
function seetheCard() {
  // console.log('FRONT CARD');
  $(".martiancard").css('background-image', 'none');
  $(".martiancard").css({'background-image' : 'url("./images/giphy (6).gif")'});
  $(".humancard").css('background-image', 'none');
  $(".humancard").css({'background-image' : 'url("./images/giphy (6).gif")'});
}

function updatetheScore() {
  $('.martianscore').html(myGame.determineTheMartianScore());
  $('.humanscore').html(myGame.determineTheHumanScore());
}

function fliptheCard() {
// console.log("I AM IN FLIPTHECARD (BACK)");
// EMPTY the number
    $('#martiansdrawcard').html(" ");
    $('#humansdrawcard').html(" ");
//flips the card back to the front of deck.
    $(".martiancard").css({ 'background-color': 'none' });
    $('.martiancard').css({'background-image' : 'url("./images/Swampler by Katarzyna Zalecka.jpg")'});
    $(".humancard").css({ 'background-color': 'none' });
    $('.humancard').css({'background-image' : 'url("./images/Swampler by Katarzyna Zalecka.jpg")'});
}
//populates the text depending on whose score is higher.
function updateTheWinner(){
  $('#winnerloser').html(myGame.determineTheWinner());
}

function showTheWinner() {//shows the div.
  $(".winnerloser").css("visibility","visible");
}
