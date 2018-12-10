function randomIntFromInterval(min,max) 
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function assignGemValue() {
    for (i = 0; i < ((crystal.gem).length); i++) {
        var randNum = randomIntFromInterval(1, 12);
        var targetGem = crystal.gem[i];
        $(targetGem).attr("value", randNum);

        var gemVal = $(targetGem).attr("#value");

        console.log({
            randNum: randNum,
            currentCrystalGem: crystal.gem[i],
            targetGem: targetGem,
            gemVal: gemVal
            // targetGemLength: (crystal.gem).length 
        });
        // $(crystal.[gem[i]]).attr("value", randNum);

        
        // console.log({
        //     gemVal: gemVal
        // })    
    }
}