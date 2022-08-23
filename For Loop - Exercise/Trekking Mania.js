function mania(input) {
  let countOfGroup = Number(input[0]);

  let topMusala = 0;
  let topMonblan = 0;
  let topKlimandjaro = 0;
  let topK2 = 0;
  let topEverest = 0;

  let totalCountPeople = 0;

  for (let i = 1; i < countOfGroup + 1; i++) {
    let countPeople = Number(input[i]);

    if (countPeople <= 5) {
      topMusala += countPeople;
    } else if (countPeople <= 12 && countPeople > 5) {
      topMonblan += countPeople;
    } else if (countPeople <= 25 && countPeople > 12) {
      topKlimandjaro += countPeople;
    } else if (countPeople <= 40 && countPeople > 25) {
      topK2 += countPeople;
    } else if (countPeople >= 41) {
      topEverest += countPeople;
    }

    totalCountPeople += countPeople;
  }

  console.log(`${((topMusala / totalCountPeople) * 100).toFixed(2)}%`);
  console.log(`${((topMonblan / totalCountPeople) * 100).toFixed(2)}%`);
  console.log(`${((topKlimandjaro / totalCountPeople) * 100).toFixed(2)}%`);
  console.log(`${((topK2 / totalCountPeople) * 100).toFixed(2)}%`);
  console.log(`${((topEverest / totalCountPeople) * 100).toFixed(2)}%`);
}

