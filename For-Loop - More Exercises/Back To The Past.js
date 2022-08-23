function backToThePast(input) {
    let inheritedMoney = Number(input[0]);
    let includedYear = Number(input[1]);

    let hisAge = 18;
    let backYear = 1800;
    let evenYear = 12000;

    for (let i = backYear; backYear <= includedYear; backYear++) {
        let oddYear = 12000 + 50 * hisAge;
        if (backYear % 2 === 0) {
            inheritedMoney -= evenYear;
        } else {
            inheritedMoney -= oddYear;
        }

        hisAge++
    }

    if (inheritedMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(inheritedMoney).toFixed(2)} dollars to survive.`);
    }
}
