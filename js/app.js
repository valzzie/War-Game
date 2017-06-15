
var myGame = new Game();

$(document).ready(function(){

  $('.startbutton').click(function(){
  myGame.shuffleTheDeck();//invokes the function startGame from simon.js
  });
});
  $('.nextcardbutton').click(function(){


    seetheCard();
    //draws the card and populates it in one step below.
    $('#martiansdrawcard').html(myGame.drawTheMartianCard());
    $('#humansdrawcard').html(myGame.drawTheHumanCard());
    this.determineTheScore();
//     updatetheScore();
//     fliptheCard();
//       if(this.humanrandomDeck.length > 0){
//         myGame.drawTheCard();
//         populateTheCard();
//         seetheCard();
//         this.determineTheScore();
//         updatetheScore();
//         fliptheCard();
// }
// else{
//        this.determineTheWinner();
          //updateTheWinner();
          //showTheWinner;
// }
});
//don't need this function since incorporated it to draw and pop card in one step in jquery above.
// function populateCard(someCard) {
//   $('#martiansdrawcard').html(someCard);
//   //$('#martiansdrawcard').html('this.martiandrawnCard');//populates the humans Card
//   //$('#humansdrawcard').html('this.humandrawnCard');//populates the martians card
// }

function seetheCard() {
  $(".martiancard").css('background-image', 'none');
  $(".martiancard").css({'background-color': 'white' });
  $(".humancard").css('background-image', 'none');
  $(".humancard").css({ 'background-color': 'white' });
}
function updatetheScore() {
  $('.martianscore').html('this.martianScore');
  $('.humanscore').html('this.humanScore');
}
function fliptheCard() {
  $(".martiancard").css({ 'background-color': 'none' });
  $(".martiancard").css('background-image', 'url("../images/Swampler by Katarzyna Zalecka.jpg")');
  $(".humancard").css({ 'background-color': 'none' });
  $(".humancard").css('background-image', 'url("../images/Swampler by Katarzyna Zalecka.jpg")');
}
function updateTheWinner() {
  $('#winnerloser').html('winner');//populates the humans Card
  $('#winnerloser').html('winner');//populates the martians card
}
function showTheWinner() {
  $('#winnerloser').html('winner');//populates the humans Card
  $('#winnerloser').html('winner');//populates the martians card
}
