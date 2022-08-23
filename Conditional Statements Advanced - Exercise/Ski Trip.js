function skiTrip(input) {
    let countDays = Number(input[0]);
    let typeOfRoom = String(input[1]);
    let grade = String(input[2]);

    let nights = countDays - 1;
    let result = 0;

    if (typeOfRoom === "room for one person") {
        result = nights * 18;
    } else if (typeOfRoom === "apartment") {
        result = nights * 25;
        if (countDays < 10) {
            result *= 0.70;
        } else if (countDays >= 10 && countDays <= 15) {
            result *= 0.65;
        } else {
            result *= 0.5;
        }
    } else if (typeOfRoom === "president apartment") {
        result = nights * 35;
        if (countDays < 10) {
            result *= 0.9;
        } else if (countDays >= 10 && countDays <= 15) {
            result *= 0.85;
        } else {
            result *= 0.80;
        }
    }

    if (grade === "positive") {
        result *= 1.25;
    } else {
        result *= 0.90;
    }

    console.log(`${result.toFixed(2)}`);
}
