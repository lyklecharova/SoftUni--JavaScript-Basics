function sequences(input) {
  let number = Number(input[0]);

  let counter = 1;

  while (counter <= number) {
    console.log(counter);
    counter = counter * 2 + 1;
  }
}

