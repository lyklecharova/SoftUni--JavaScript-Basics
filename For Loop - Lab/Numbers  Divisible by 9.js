function numbersDivisibleBy9(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let sum = 0;

    for (let i = firstNumber; i < secondNumber; i++) {
        if (i % 9 === 0) {
            sum += i;

        }
    }
    console.log(`The sum: ${sum}`);

    for (let j = firstNumber; j < secondNumber; j++) {
        if (j % 9 === 0) {
            console.log(j);
        }
    }
}
