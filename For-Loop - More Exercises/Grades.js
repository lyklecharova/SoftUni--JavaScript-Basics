function grades(input) {
    let countStudents = Number(input[0]);

    let topStudents = 0;
    let goodGrade = 0;
    let middleGrade = 0;
    let poorGrade = 0;
    let avarageGrade = 0;

    for (let i = 1; i < countStudents + 1; i++) {
        let gradeOfExam = Number(input[i]);
        if (gradeOfExam <= 2.99) {
            poorGrade++;
        }
        if (gradeOfExam >= 3 && gradeOfExam <= 3.99) {
            middleGrade++;
        }
        if (gradeOfExam >= 4 && gradeOfExam <= 4.99) {
            goodGrade++;
        }
        if (gradeOfExam >= 5) {
            topStudents++;
        }
        avarageGrade += gradeOfExam;

    }

    console.log(`Top students: ${((topStudents / countStudents) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((goodGrade / countStudents) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((middleGrade / countStudents) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((poorGrade / countStudents) * 100).toFixed(2)}%`);
    console.log(`Average: ${(avarageGrade / countStudents).toFixed(2)}`);
}
