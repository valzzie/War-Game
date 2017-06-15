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
            }

          }
          //Successful Test
         console.log("humanrandom deck:",this.humanrandomDeck);
          console.log("martianrandom deck:",this.martianrandomDeck);
        //  console.log("deck",this.deck);
      };


      this.drawTheCard = function(){
      console.log("We are in the drawTheCard");

        // if(this.humanrandomDeck.length > 0){//>0 not working
        //   console.log("drawTheCard function");
        this.humandrawnCard= this.humanrandomDeck.splice(0,1);
        this.martiandrawnCard= this.martianrandomDeck.splice(0,1);
        //this.determineTheScore();
      // };
      // else{
      //   this.determineTheWinner();
      // }
      //Successful Test
      console.log("humandrawnCard: ",this.humandrawnCard);//0
      console.log("martiandrawnCard: ", this.martiandrawnCard);//0
    };

      this.determineTheScore = function(){
      console.log("We are in the determineTheScore");
        if(this.martiandrawnCard[0]>this.humandrawnCard[0]){
          this.martianScore+=1;
          //this.drawTheCard();
      }else if(this.humandrawnCard[0]>this.martiandrawnCard[0]){
      this.humanScore+=1;
       //this.drawTheCard();
    }
    //Succeful Test
    // console.log("humandrawnCard: ",this.humandrawnCard);//0
    // console.log("martiandrawnCard: ", this.martiandrawnCard);//0
    // console.log("martianscore:", this.martianScore);
    // console.log("humanscore:", this.humanScore);
        };

        this.determineTheWinner= function(){
          var winner;
        console.log("We are in the determineTheWinner inside determineTheWinner");
          if(this.martianScore> this.humanScore){
            winner= "Martians have Won! Humans, life as you know it is over!";
            console.log(winner);
            //console.log("Martians Have Won! Humans, life as you know it is over!");
          }else if(this.humanScore> this.martianScore){
            winner= "ALERT!!!!: Humans Have Won! You are safe. For now...";
            console.log(winner);
            //console.log("ALERT!!!!: Humans Have Won! You are safe. For now...");
          }else{
            winner= "Its a Tie! Humans. You are safe until next time...";
            console.log(winner);
            //console.log("Its a Tie! Humans.  You are safe until next time...");
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

      // var myGame = new Game();
      // myGame.shuffleTheDeck();
    // myGame.drawTheCard();
