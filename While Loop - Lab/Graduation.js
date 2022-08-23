function graduation(input) {
  let index = 0;
  let nameStudents = input[index];
  index += 1;

  let averageGrade = 0;

  let grade = Number(input[index]);

  while (grade >= 4.0) {
    averageGrade += grade;
    index += 1;
    grade = Number(input[index]);
  }
  index += 1;
  grade = input[index];
  if (grade < 4.0) {
    console.log(`${nameStudents} has been excluded at ${index - 1} grade`);
  } else {
    console.log(
      `${nameStudents} graduated. Average grade: ${(
        averageGrade /
        (index - 2)
      ).toFixed(2)}`
    );
  }
}

