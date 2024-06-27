let bottles = 1.5;

function getMilk(money) {
    let bottlesToHave = Math.floor(money / bottles);
    let moneyRemaining = money % bottles;
    alert("Hurray! You bought " + bottlesToHave + " bottles!" + "Your change is " + moneyRemaining);

}

getMilk(500)