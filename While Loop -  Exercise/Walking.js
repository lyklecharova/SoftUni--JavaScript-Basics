function walking(input) {
  let index = 0;
  let command = input[index];

  let sumSteps = 0;

  while (command !== "Going home") {
    command = Number(input[index]);
    sumSteps += command;
    if (sumSteps >= 10000) {
      console.log("Goal reached! Good job!");
      console.log(`${sumSteps - 10000} steps over the goal!`);
      break;
    }
    index += 1;
    command = input[index];
  }

  if (command === "Going home") {
    sumSteps += Number(input[index + 1]);
    if (sumSteps < 10000) {
      console.log(`${10000 - sumSteps} more steps to reach goal.`);
    } else {
      console.log("Goal reached! Good job!");
      console.log(`${sumSteps - 10000} steps over the goal!`);
    }
  }
}
