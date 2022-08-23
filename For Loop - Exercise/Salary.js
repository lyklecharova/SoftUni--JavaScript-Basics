function salary(input) {
  let countOpenTabs = Number(input[0]);
  let salary = Number(input[1]);

  for (let i = 1; i <= countOpenTabs + 1; i++) {
    let nameOfWebsites = String(input[i]);

    switch (nameOfWebsites) {
      case "Facebook":
        salary -= 150;
        break;
      case "Instagram":
        salary -= 100;
        break;
      case "Reddit":
        salary -= 50;
        break;
    }

    if (salary <= 0) {
      console.log("You have lost your salary.");
      break;
    }
  }

  if (salary > 0) {
    console.log(salary);
  }
}

