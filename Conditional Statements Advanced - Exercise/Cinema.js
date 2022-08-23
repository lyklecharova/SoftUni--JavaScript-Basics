function cinema(input) {
    let typeProject = String(input[0]);
    let countRows = Number(input[1]);
    let countColumns = Number(input[2]);

    let totalIncomes = 0;

    if (typeProject === "Premiere") {
        totalIncomes = countRows * countColumns * 12.00;
    } else if (typeProject === "Normal") {
        totalIncomes = countRows * countColumns * 7.50;
    } else if (typeProject === "Discount") {
        totalIncomes = countRows * countColumns * 5.00;
    }
    console.log(`${totalIncomes.toFixed(2)}`);
}