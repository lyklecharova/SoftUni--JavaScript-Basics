function cake(input) {
  let index = 2;
  let width = input[0];
  let lenght = input[1];
  let command = input[2];

  let sumPieces = 0;

  while (command !== "STOP") {
    command = Number(input[index]);
    sumPieces += command;
    if (sumPieces > width * lenght) {
      console.log(
        `No more cake left! You need ${sumPieces - width * lenght} pieces more.`
      );
      break;
    }
    index += 1;
    command = input[index];
  }

  if (command === "STOP") {
    console.log(`${width * lenght - sumPieces} pieces are left.`);
  }
}

