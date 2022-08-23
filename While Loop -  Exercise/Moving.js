function moving(input) {
  let index = 3;
  let width = input[0];
  let lenght = input[1];
  let hight = input[2];
  let command = input[3];

  let sumOfBoxes = 0;

  while (command !== "Done") {
    command = Number(input[index]);
    sumOfBoxes += command;
    if (sumOfBoxes > width * lenght * hight) {
      console.log(
        `No more free space! You need ${sumOfBoxes - width * lenght * hight} Cubic meters more.`
      );
      break;
    }
    index += 1;
    command = input[index];
  }

  if (command === "Done") {
    console.log(`${width * lenght * hight - sumOfBoxes} Cubic meters left.`);
  }
}
