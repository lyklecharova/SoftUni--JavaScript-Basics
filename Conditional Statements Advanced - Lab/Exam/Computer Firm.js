function pcFirm(input) {
    let countOfPC = Number(input[0]);
  
    let rate = String;
    let possibleSold = 0;
    let averageRate = 0;
    let makedSold = 0;
    let totalSold = 0;
  
    for (i = 1; i <= countOfPC; i += 1) {
      rate = String(input[i]);
      possibleSold = Number(rate[0] + rate[1]);
      rate = rate[2];
      if (rate === "2") {
        makedSold = possibleSold * 0;
        totalSold += makedSold;
      }
      if (rate === "3") {
        makedSold = possibleSold * 0.5;
        totalSold += makedSold;
      }
      if (rate === "4") {
        makedSold = possibleSold * 0.7;
        totalSold += makedSold;
      }
      if (rate === "5") {
        makedSold = possibleSold * 0.85;
        totalSold += makedSold;
      }
      if (rate === "6") {
        totalSold += possibleSold;
      }
      averageRate += Number(rate);
    }
  
    console.log(totalSold.toFixed(2));
    console.log((averageRate / countOfPC).toFixed(2));
  }