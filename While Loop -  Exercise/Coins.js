function coins(input) {
  let resto = Number(input[0]);

  let counter = 0;

  while (resto >= 2) {
    resto -= 2;
    resto = Number(resto.toFixed(2));
    counter += 1;
  }

  while (resto >= 1) {
    resto -= 1;
    resto = Number(resto.toFixed(2));
    counter += 1;
  }

  while (resto >= 0.5) {
    resto -= 0.5;
    resto = Number(resto.toFixed(2));
    counter += 1;
  }

  while (resto >= 0.2) {
    resto -= 0.2;
    resto = Number(resto.toFixed(2));
    counter += 1;
  }

  while (resto >= 0.1) {
    resto -= 0.1;
    resto = Number(resto.toFixed(2));
    counter += 1;
  }

  while (resto >= 0.05) {
    resto -= 0.05;
    resto = Number(resto.toFixed(2));
    counter += 1;
  }

  while (resto >= 0.02) {
    resto -= 0.02;
    resto = Number(resto.toFixed(2));
    counter += 1;
  }

  while (resto >= 0.01) {
    resto -= 0.01;
    resto = Number(resto.toFixed(2));
    counter += 1;
  }

  console.log(counter);
}

