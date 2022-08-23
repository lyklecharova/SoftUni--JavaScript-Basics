function calculateOfDeposit(input) {
    let depositSum = Number(input[0]);
    let termOfDeposit = Number(input[1]); // mounth
    let yearPercentage = Number(input[2]);

    let interest = depositSum * (yearPercentage / 100);
    let interestForMounth = interest / 12;
    let totalSum = depositSum + termOfDeposit * interestForMounth;

    console.log(totalSum);
}
