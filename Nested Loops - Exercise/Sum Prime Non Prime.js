function sumPrimeNonPrime(input) {
  let command = String(input[0]);
  let index = 0;

  let sumPrime = 0;
  let sumNonPrime = 0;
  let prime = 0;

  while (command !== "stop") {
    command = Math.trunc(Number(input[index]));
    if (command < 0) {
      console.log("Number is negative.");
    } else {
      if (command === 0) {
        sumNonPrime += command;
      }
      if (command === 1) {
        sumNonPrime += command;
      }
      if (command === 2) {
        sumPrime += command
      }
      if (command > 2) {
        prime = (Math.pow(2, command) - 2) / command;
        if (prime % 2 === 0) {
          sumPrime += command;
        } else {
          sumNonPrime += command;
        }
      }
    }
    index += 1;
    command = input[index];
  }
  console.log(`Sum of all prime numbers is: ${sumPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}


