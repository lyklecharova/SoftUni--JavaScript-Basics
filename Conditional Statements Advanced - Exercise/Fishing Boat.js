function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = String(input[1]);
  let countFishermen = Number(input[2]);

  let boatRent = 0;

  if (season === "Spring") {
    boatRent = 3000;
  } else if (season === "Summer" || season === "Autumn") {
    boatRent = 4200;
  } else if (season === "Winter") {
    boatRent = 2600;
  }

  if (countFishermen <= 6) {
    boatRent *= 0.9;
  } else if (countFishermen > 7 && countFishermen <= 11) {
    boatRent *= 0.85;
  } else if (countFishermen > 12) {
    boatRent *= 0.75;
  }
  if ((countFishermen % 2 === 0) & (season !== "Autumn")) {
    boatRent *= 0.95;
  }

  let diff = Math.abs(budget - boatRent);
  if (budget >= boatRent) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}

