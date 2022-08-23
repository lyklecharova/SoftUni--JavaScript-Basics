function clockPartTwo() {
  for (hours = 0; hours <= 23; hours++) {
    for (minutes = 0; minutes <= 59; minutes++) {
      //console.log(`${hours} : ${minutes}`);
      for (let seconds = 0; seconds <= 59; seconds++) {
        console.log(`${hours} : ${minutes} : ${seconds}`);
      }
    }
  }
}

