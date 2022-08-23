function fruitShop(input) {
  let fruit = String(input[0]);
  let dayOfWeek = String(input[1]);
  let quantity = Number(input[2]);
  let rezult = 0;

  if (
    dayOfWeek === "Monday" ||
    dayOfWeek === "Tuesday" ||
    dayOfWeek === "Wednesday" ||
    dayOfWeek === "Thursday" ||
    dayOfWeek === "Friday"
  ) {
    switch (fruit) {
      case "banana":
        rezult = quantity * 2.5;
        break;
      case "apple":
        rezult = quantity * 1.2;
        break;
      case "orange":
        rezult = quantity * 0.85;
        break;
      case "grapefruit":
        rezult = quantity * 1.45;
        break;
      case "kiwi":
        rezult = quantity * 2.7;
        break;
      case "pineapple":
        rezult = quantity * 5.5;
        break;
      case "grapes":
        rezult = quantity * 3.85;
        break;
    }
  } else if (dayOfWeek === "Sunday" || dayOfWeek === "Saturday") {
    switch (fruit) {
      case "banana":
        rezult = quantity * 2.7;
        break;
      case "apple":
        rezult = quantity * 1.25;
        break;
      case "orange":
        rezult = quantity * 0.9;
        break;
      case "grapefruit":
        rezult = quantity * 1.6;
        break;
      case "kiwi":
        rezult = quantity * 3.0;
        break;
      case "pineapple":
        rezult = quantity * 5.6;
        break;
      case "grapes":
        rezult = quantity * 4.2;
        break;
    }
  }
  if (rezult === 0) {
    console.log("error");
  } else {
    console.log(`${rezult.toFixed(2)}`);
  }
}