function footballLegue2(input) {
  let capacityStadium = Number(input[0]);
  let countFans = Number(input[1]);

  let percentageA = 0;
  let percentageB = 0;
  let percentageV = 0;
  let percentageG = 0;
  let percentageFans = 0; //according to the capacity of the stadium

  let sectorA = 0;
  let sectorB = 0;
  let sectorV = 0;
  let sectorG = 0;
  for (i = 2; i <= capacityStadium + 2; i++) {
    let sector = String(input[i]);
    switch (sector) {
      case "A":
        sectorA++;
        percentageA = (sectorA / countFans) * 100;
        break;
      case "B":
        sectorB++;
        percentageB = (sectorB / countFans) * 100;
        break;
      case "V":
        sectorV++;
        percentageV = (sectorV / countFans) * 100;
        break;
      case "G":
        sectorG++;
        percentageG = (sectorG / countFans) * 100;
        break;
    }
  }
  percentageFans = (countFans / capacityStadium) * 100;

  console.log(`${percentageA.toFixed(2)}%`);
  console.log(`${percentageB.toFixed(2)}%`);
  console.log(`${percentageV.toFixed(2)}%`);
  console.log(`${percentageG.toFixed(2)}%`);
  console.log(`${percentageFans.toFixed(2)}%`);
}

