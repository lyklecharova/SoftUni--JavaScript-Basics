function gameOfIntervals(input) {
  let courses = Number(input[0]);

  let finalResult = 0;
  let zeroToNine = 0;
  let tenToNineteen = 0;
  let twentyToTwentyNine = 0;
  let thirtyToThyrtyNine = 0;
  let fortyToFifty = 0;
  let invalidNumbers = 0;

  //let score = 0;

  for (let i = 1; i <= courses; i++) {
    let coursesNumber = Number(input[i]);

    if (coursesNumber >= 0 && coursesNumber <= 9) {
      zeroToNine++;
      finalResult += coursesNumber * 0.2;
    } else if (coursesNumber >= 10 && coursesNumber <= 19) {
      tenToNineteen++;
      finalResult += coursesNumber * 0.3;
    } else if (coursesNumber >= 20 && coursesNumber <= 29) {
      twentyToTwentyNine++;
      finalResult += coursesNumber * 0.4;
    } else if (coursesNumber >= 30 && coursesNumber <= 39) {
      thirtyToThyrtyNine++;
      finalResult += 50;
    } else if (coursesNumber >= 40 && coursesNumber <= 50) {
      fortyToFifty++;
      finalResult += 100;
    } else {
      invalidNumbers++;
      finalResult /= 2;
    }
  }
  console.log(`${finalResult.toFixed(2)}`);
  console.log(`From 0 to 9: ${((zeroToNine / courses) * 100).toFixed(2)}%`);
  console.log(
    `From 10 to 19: ${((tenToNineteen / courses) * 100).toFixed(2)}%`
  );
  console.log(
    `From 20 to 29: ${((twentyToTwentyNine / courses) * 100).toFixed(2)}%`
  );
  console.log(
    `From 30 to 39: ${((thirtyToThyrtyNine / courses) * 100).toFixed(2)}%`
  );
  console.log(`From 40 to 50: ${((fortyToFifty / courses) * 100).toFixed(2)}%`);
  console.log(
    `Invalid numbers: ${((invalidNumbers / courses) * 100).toFixed(2)}%`
  );
}

