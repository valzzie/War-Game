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
  if(this.deck.length > 0){
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


  this.drawTheHumanCard = function(){
  console.log("We are in the drawTheHumanCard");

  var cardArray = this.humanrandomDeck.splice(0,1);
  // cardArray return value will look like this = [9];
  //below is pulling the 0 index of returned result[9] so now the result will look like this= 9
  this.humandrawnCard= cardArray[0];
  //Successful Test
      console.log(this.humandrawnCard);
      return this.humandrawnCard;
    };
    this.drawTheMartianCard = function(){
    console.log("We are in the drawTheMartianCard");
      var cardArray= this.martianrandomDeck.splice(0,1);
      this.martiandrawnCard= cardArray[0];
    //Successful Test
    console.log(this.martiandrawnCard);
    return this.martiandrawnCard;
  };

  this.determineTheMartianScore = function(){
  if(this.martiandrawnCard>this.humandrawnCard){
          this.martianScore+=1;
       }
    //Succeful Test
    // console.log("humandrawnCard: ",this.humandrawnCard);//0
    // console.log("martiandrawnCard: ", this.martiandrawnCard);//0
    //troubleshooting with Nizar below:
    // console.log("determineTheMartianScore ", {
    //   // martianScore: this.martianScore,
    //   // martiandrawnCard: this.martiandrawnCard,
    //   // humandrawnCard: this.humandrawnCard
    // });
    //console.log("humanscore:", this.humanScore);
    return this.martianScore;
        };

    this.determineTheHumanScore = function(){
        // console.log("We are in the determineTheHumanScore");
          if(this.humandrawnCard>this.martiandrawnCard){
            this.humanScore+=1;
        }
        //Succeful Test
        // console.log("humandrawnCard: ",this.humandrawnCard);//0
        // console.log("martiandrawnCard: ", this.martiandrawnCard);//0

        console.log("determineTheHumanScore ", {
          humanScore: this.martianScore,
          martiandrawnCard: this.martiandrawnCard,
          humandrawnCard: this.humandrawnCard
        });
        return this.humanScore;
          };


        this.determineTheWinner= function(){
          var winner;
console.log("We are in the determineTheWinner");
          if(this.martianScore> this.humanScore){
            winner= "Martians have Won! Humans, life as you know it is over!";
console.log("Martians have Won! Humans, life as you know it is over!");
            //console.log("Martians Have Won! Humans, life as you know it is over!");
          }else if(this.humanScore> this.martianScore){
            winner= "ALERT!!!!: Humans Have Won! You are safe. For now...";
console.log("ALERT!!!!: Humans Have Won! You are safe. For now...");
            //console.log("ALERT!!!!: Humans Have Won! You are safe. For now...");
          }else{
            winner= "Its a Tie! Humans. You are safe until next time...";
console.log("Its a Tie! Humans. You are safe until next time...");
            //console.log("Its a Tie! Humans.  You are safe until next time...");
          }
          return winner;
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
