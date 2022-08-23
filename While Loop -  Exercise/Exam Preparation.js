function examPreparation(input) {
  let index = 0;
  let numberOfBadGrade = Number(input[index]);
  index += 1;
  let problemName = input[index];
  let grade = 0;

  let avarageGrade = 0;
  let counter = 0;

  while (problemName !== "Enough") {
    grade = Number(input[index + 1]);
    avarageGrade += grade;
    if (grade <= 4) {
      counter += 1;
      if (numberOfBadGrade === counter) {
        console.log(`You need a break, ${numberOfBadGrade} poor grades.`);
        break;
      }
    }
    index += 2;
    problemName = input[index];
  }
  if (problemName == "Enough") {
    problemName = input[index - 2];
    console.log(
      `Average score: ${(avarageGrade / ((index - 1) / 2)).toFixed(2)}`
    );
    console.log(`Number of problems: ${(index - 1) / 2}`);
    console.log(`Last problem: ${problemName}`);
  }
}

