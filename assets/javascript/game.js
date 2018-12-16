$(document).ready(function () {


function randomIntFromInterval(min,max) 
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


function initialize() {

winScore = randomIntFromInterval(19, 120);
     console.log({ winScore: winScore });
                $("#placeWinScoreHere").text(winScore); 
counter = 0;
    $(".score-display").text(counter);

      
return winScore;
    }

function crystalValues() {
    
        // Create a for loop to create crystals and asssign random value between 1 -12
     for (var i = 0; i < (crystal.gemImage).length; i++) {
      var randGemVal = randomIntFromInterval(1, 12);

        // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");
      imageCrystal.addClass("crystal-image");

         // Each imageCrystal will be given a src link to the crystal image
      imageCrystal.attr("src", crystal.gemImage[i]);

         // Each imageCrystal will be given a data attribute called data-crystalValue which is a random number between 1 -12.
      imageCrystal.attr("data-crystalvalue", randGemVal);

      $(".gemRow").append(imageCrystal);
    };
}


var totWins = 0;
var totLoses = 0;
var crystal = {
        gemImage: ["assets/images/topaz.jpg", "assets/images/goldGem.jpg", "assets/images/diamond.png", "assets/images/emeraldGem.jpg"],            
        }
var counter = 0;
var winScore = 0;
    

    initialize(winScore);
    crystalValues();
 

    console.log({  winScore: winScore });

          
       $(".crystal-image").on("click", function () {

            // Determining the crystal's value requires us to extract the value from the data attribute.
            // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
            // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
           
         var crystalValue = ($(this).attr("data-crystalvalue"));

          // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
         var crystalVal = parseInt(crystalValue);
         counter += crystalVal;
           
         
         console.log({
         counter: counter,
         crystalVal: crystalVal,
         crystalValue: crystalValue,
         winScore: winScore
            });

            
         $(".score-display").text(counter);
                    
              if (counter === winScore) {
                alert("You win!");
                totWins = totWins +1;

                        console.log ({ totWins: totWins });

                    $("#total-wins").append(totWins);
                initialize();
                 }

              else if (counter > winScore) {
                alert("You lose!!");
                totLoses = totLoses + 1;

                         console.log ({ totLoses: totLoses });

                 $("#total-loses").append(totLoses);
                initialize();
                        }
            }); 
                    
 });