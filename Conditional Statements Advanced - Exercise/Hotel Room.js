function hotelRoom(input) {
  let month = String(input[0]);
  let countOvernightStays = Number(input[1]);

  let studioPrice = 0;
  let apartmentPrice = 0;

  let discountStudio = 1;
  let discountApartment = 1;

  let studio;
  let apartment;

  switch (month) {
    case "May":
    case "October":
      studio = 50;
      apartment = 65;
      break;

    case "June":
    case "September":
      studio = 75.2;
      apartment = 68.7;
      break;

    case "July":
    case "August":
      studio = 76;
      apartment = 77;
      break;
  }

  if (countOvernightStays > 7 && countOvernightStays <= 14 &&
    (month === "May" || month === "October")) {
    discountStudio = 0.95;
  } else if (countOvernightStays > 14 &&
    (month === "May" || month === "October")) {
    discountStudio = 0.7;
  } else if (countOvernightStays > 14 &&
    (month === "June" || month === "September")) {
    discountStudio = 0.8;
  }

  if (countOvernightStays > 14) {
    discountApartment = 0.9;
  }

  studioPrice = studio * countOvernightStays * discountStudio;
  apartmentPrice = apartment * countOvernightStays * discountApartment;

  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
