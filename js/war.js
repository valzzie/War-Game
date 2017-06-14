function Game () {
  this.deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13];
  this.human = "Bob";
  this.martian = "Martian";
  this.humanrandomDeck= [];
  this.martianrandomDeck=[];
  this.martiandrawnCard=0;
  this.humandrawnCard=0;
  this.martianScore=0;
  this.humanScore=0;

  this.shuffleTheDeck = function(){
  console.log("We are in the shuffleTheDeck");
  for(var i=0; i<this.deck.length;i++){

  if(this.deck.length > 0){//while deck length is not 0
  var randomNum1 = Math.floor(Math.random() * this.deck.length);
  var randomNum2 = Math.floor(Math.random() * this.deck.length);

          this.humanrandomDeck.push(this.deck[(randomNum1)]);
          this.martianrandomDeck.push(this.deck[(randomNum2)]);
          this.drawTheCard();
            }

          }
          //Successful Test
        //  console.log("humanrandom deck:",this.humanrandomDeck);
          //console.log("martianrandom deck:",this.martianrandomDeck);
        //  console.log("deck",this.deck);
      };


      this.drawTheCard = function(){
console.log("We are in the drawTheCard");

        if(this.humanrandomDeck.length > 0){//>0 not working
          console.log("drawTheCard function");
        this.humandrawnCard= this.humanrandomDeck.splice(0,1);
        this.martiandrawnCard= this.martianrandomDeck.splice(0,1);
        //this.determineTheScore();
      }else{
        //this.determineTheWinner();
        console.log("determineTheWinner inside of drawTheCard");
      }
      //Successful Test
      // console.log("humandrawnCard: ",this.humandrawnCard);//0
      // console.log("martiandrawnCard: ", this.martiandrawnCard);//0
          };

      this.determineTheScore = function(){
      console.log("We are in the determineTheScore");
        if(this.martiandrawnCard[0]>this.humandrawnCard[0]){
          this.martianScore+=1;
          this.drawTheCard();
      }else if(this.humandrawnCard[0]>this.martiandrawnCard[0]){
      this.humanScore+=1;
       this.drawTheCard();
    }
    //Succeful Test
    // console.log("humandrawnCard: ",this.humandrawnCard);//0
    // console.log("martiandrawnCard: ", this.martiandrawnCard);//0
    // console.log("martianscore:", this.martianScore);
    // console.log("humanscore:", this.humanScore);
        };

        this.determineTheWinner= function(){
console.log("We are in the determineTheWinner inside determineTheWinner");
          if(this.martianScore> this.humanScore){
            console.log("The Martians have won");
          }else if(this.humanScore> this.martianScore){
            console.log("The Humans have won");
          }else{
            console.log("Its a tie");
          }
        };
        //Testing the whole run through
        //  console.log("humanrandom deck:",this.humanrandomDeck);
        //   console.log("martianrandom deck:",this.martianrandomDeck);
        //   console.log("humandrawnCard: ",this.humandrawnCard);//0
        //   console.log("martiandrawnCard: ", this.martiandrawnCard);//0
        //   console.log("martianscore:", this.martianScore);
        //   console.log("humanscore:", this.humanScore);

        // Successful Test
        // console.log("We are in the determineTheWinner");
        // console.log("humandrawnCard: ",this.humandrawnCard);//0
        // console.log("martiandrawnCard: ", this.martiandrawnCard);//0
        // console.log("martianscore:", this.martianScore);
        // console.log("humanscore:", this.humanScore);
      }

      var myGame = new Game();
      myGame.shuffleTheDeck();
    //  myGame.drawTheCard();
