function journey(input) {
    let budget = Number(input[0]);
    let season = String(input[1]);

    let moneySpent = 0;

    if (budget <= 100) {
        if (season === "summer") {
            moneySpent = 0.30 * budget;
            console.log("Somewhere in Bulgaria");
            console.log(`Camp - ${moneySpent.toFixed(2)}`);
        } else if (season === "winter") {
            moneySpent = 0.70 * budget;
            console.log("Somewhere in Bulgaria");
            console.log(`Hotel - ${moneySpent.toFixed(2)}`);
        }
    }

    if (budget <= 1000 && budget > 100) {
        if (season === "summer") {
            moneySpent = 0.40 * budget;
            console.log("Somewhere in Balkans");
            console.log(`Camp - ${moneySpent.toFixed(2)}`);
        } else if (season === "winter") {
            moneySpent = 0.80 * budget;
            console.log("Somewhere in Balkans");
            console.log(`Hotel - ${moneySpent.toFixed(2)}`);
        }
    }

    if (budget > 1000) {
        moneySpent = 0.90 * budget;
        console.log("Somewhere in Europe");
        console.log(`Hotel - ${moneySpent.toFixed(2)}`);
    }
}
