
var myGame = new Game();

$(document).ready(function(){

  $('.startbutton').click(function(){
  myGame.shuffleTheDeck();//invokes the function startGame from simon.js
  });

  $('.nextcardbutton').click(function(){

    seetheCard();
    //draws the card and populates it in one step below.
    $('#martiansdrawcard').html(myGame.drawTheMartianCard());
    $('#humansdrawcard').html(myGame.drawTheHumanCard());
    // myGame.determineTheMartianScore();
    // myGame.determineTheHumanScore();
      updatetheScore();

      setTimeout(function () {
        fliptheCard();
      }, 1000);
      //I'm not saying this correctly. How do i get the length of an array?  Look it up.
   if(this.humanrandomDeck.length <= 0){
//        myGame.determineTheWinner();
          //updateTheWinner();
          //showTheWinner;
        }
});
});
//don't need this function since incorporated it to draw and pop card in one step in jquery above.
// function populateCard(someCard) {
//   $('#martiansdrawcard').html(someCard);
//   //$('#martiansdrawcard').html('this.martiandrawnCard');//populates the humans Card
//   //$('#humansdrawcard').html('this.humandrawnCard');//populates the martians card
// }

function seetheCard() {
  // console.log('FRONT CARD');
  $(".martiancard").css('background-image', 'none');
  $(".martiancard").css({'background-color': 'white' });
  $(".humancard").css('background-image', 'none');
  $(".humancard").css({ 'background-color': 'white' });
}
function updatetheScore() {
  //can't see the martianScore/humanScore because of the scope of the variable inside the function
  // console.log(martianScore);
  // console.log(humanScore);
  $('.martianscore').html(myGame.determineTheMartianScore());
  $('.humanscore').html(myGame.determineTheHumanScore());
  // $('.martianscore').html(this.martianScore);
  // $('.humanscore').html(this.humanScore);
}

function fliptheCard() {
// console.log("I AM IN FLIPTHECARD (BACK)");
// EMPTY the number
    $('#martiansdrawcard').html(" ");
    $('#humansdrawcard').html(" ");
//     //flips the card back to the front of deck.
    $(".martiancard").css({ 'background-color': 'none' });
    $('.martiancard').css({'background-image' : 'url("./images/Swampler by Katarzyna Zalecka.jpg")'});
    $(".humancard").css({ 'background-color': 'none' });
    $('.humancard').css({'background-image' : 'url("./images/Swampler by Katarzyna Zalecka.jpg")'});





  // $(".martiancard").css({'background-image' : url('../images/Swampler by Katarzyna Zalecka.jpg'});
  // $('.martiancard').css({'background-image' : 'url("./images/Zabelin.png")'});
  // $('.martiancard').css({'background-image' : 'url("../images/Swampler by Katarzyna Zalecka.jpg")'});
// $('.buyButton_new').css('background-image','url(images/compra_mouseOver.png)');

  //$(".humancard").css({ 'background-color': 'none' });
  // $(".humancard").css('background-image', url('../images/Swampler by Katarzyna Zalecka.jpg'));
  // $(".martiancard").css({ 'background-color': 'none' });
  // $(".martiancard").css('background-image', 'url("../images/Swampler by Katarzyna Zalecka.jpg")');
  // $(".humancard").css({ 'background-color': 'none' });
  // $(".humancard").css('background-image', 'url("../images/Swampler by Katarzyna Zalecka.jpg")');
}
//populates the text depending on whose score is higher.
function updateTheWinner(){
  $('#winnerloser').html(winner);
  $('#winnerloser').html(winner);
}
function showTheWinner() {//shows the div.
  $(".winnerloser").toggleClass("visible");
}
