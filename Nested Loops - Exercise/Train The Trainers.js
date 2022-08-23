function trainTheTrainers(input) {
    let index = 0;
    let people = Number(input[index]);
    index += 1;
    let command = input[index];
    index += 1;

    let counter = 0;
    let sumGrade = 0;

    while (command !== "Finish") {
        let name = command;
        counter += 1;
        let TotalGrade = 0;
        for (let i = 0; i < people; i += 1) {
            let grade = Number(input[index]);
            index += 1;
            TotalGrade += grade;
        }
        let averageGrade = TotalGrade / people;
        console.log(`${name} - ${averageGrade.toFixed(2)}.`);
        sumGrade += averageGrade;

        command = input[index];
        index += 1;

    }
    let average = sumGrade / counter
    console.log(`Student's final assessment is ${average.toFixed(2)}.`);

}
