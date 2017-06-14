


var myGame = new Game();
console.log(myGame);
$(document).ready(function(){
  myGame.shuffleTheDeck();//invokes the function startGame from simon.js
  myGame.drawTheCard();
  $('.humanCard').onClick(function() {
    $('.humansnumber').html('drawnCard');//populates the humans Card
    $('.martiansnumber').html('drawnCard');//populates the martians card
})
});

//Random
// var myGame = new SimonGame();
// console.log(myGame);
// $(document).ready(function(){
//   myGame.startGame();//invokes the function startGame from simon.js
// });
// $('.martiansnumber').html('drawnCard');
// $('.humanssnumber').html('drawnCard');

//Simon Game Below
// $(document).ready(function(){
//   //what is going to be clicked and what happens when clicked
//   $('button').click(function(){
//     var colorJustClicked = $(this).prop('id');
//     var currentSequenceColor= myGame.sequence[myGame.userClickCount];
//     if (currentSequenceColor === colorJustClicked){
//       //sequence is correct so far
//
//       //want to increase user click count if previous one was correct.
//       myGame.userClickCount +=1;
//       if(myGame.userClickCount >= myGame.sequence.length){
//         //alert('Yeah, Sequence is Correct!');
//         //code to go to next round
//         $('body').addClass('sequence-entered');
//         setTimeout(function(){
//           $('body').removeClass('sequence-entered');
//         },1000);
//         myGame.nextRound();
//       }
//     }
//     else{
//       //game over- sequence not correct.
//       $('body').addClass('game-ended');
//       setTimeout(function(){
//         $('body').removeClass('game-ended');
//       myGame.gameOver();
//     }, 10000);
//   }
//
//   });
// });
