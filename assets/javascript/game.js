function randomIntFromInterval(min,max) 
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


function initialize() {

// var currentScore = 0;

winScore = randomIntFromInterval(19, 120);
     console.log({
     winScore: winScore,
    // currentScore: currentScore
      });
      $("#placeWinScoreHere").text(winScore); 
counter = 0;
    $(".score-display").text(counter);
return winScore;
    }