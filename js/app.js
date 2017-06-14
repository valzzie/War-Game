
var myGame = new Game();

$(document).ready(function(){

  $('.startbutton').click(function(){
  myGame.shuffleTheDeck();//invokes the function startGame from simon.js
  });
});
  $('.nextcardbutton').click(function(){
    myGame.drawTheCard();
    // populateCard();
    // seetheCard();
//     determineTheScore();
//     updatetheScore();
//     fliptheCard();
//       if(this.humanrandomDeck.length > 0){//>0 not working
//         drawTheCard();
//         populateTheCard();
//         seetheCard();
//         determineTheScore();
//         updatetheScore();
//         fliptheCard();
// }
// else{
//   determineTheWinner();
// }
});

function populateCard() {
  $('#martiansdrawcard').html('this.martiandrawnCard');//populates the humans Card
  $('#humansdrawcard').html('this.humandrawnCard');//populates the martians card
}

function seetheCard() {
  $(".martiancard").css('background-image', 'none');
  $(".martiancard").css({ 'background-color': 'white' });
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
function updateTheWinner() {//work in progress
  $('#martiansdrawcard').html('this.martiandrawnCard');//populates the humans Card
  $('#humansdrawcard').html('this.humandrawnCard');//populates the martians card
}
