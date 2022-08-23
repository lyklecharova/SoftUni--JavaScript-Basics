function everest(input) {
  let index = 0;
  let command = input[index];

  let climbedMeters = 5364;

  let daysMetre = Number;

  let countDays = 1; // counter

  while (command !== "END") {
    if (command === "Yes") {
      countDays += 1;
      if (countDays > 5) {
        break;
      }
    }

    index += 1;
    daysMetre = Number(input[index]);
    climbedMeters += daysMetre;

    if (climbedMeters >= 8848) {
      break;
    }
    index += 1;
    command = input[index];
  }
  if (climbedMeters >= 8848) {
    console.log(`Goal reached for ${countDays} days!`);
  }

  if (command === "END" || countDays > 5) {
    console.log("Failed!");
    console.log(climbedMeters);
  }
}
everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
