function summerOutfits(input) {
  let degreess = Number(input[0]);
  let timeOfDay = String(input[1]);

  let outfit;
  let shoes;

  if (degreess >= 10 && degreess <= 18) {
    if (timeOfDay === "Morning") {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } else if (timeOfDay === "Afternoon" || timeOfDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (degreess > 18 && degreess <= 24) {
    if (timeOfDay === "Morning" || timeOfDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins;";
    } else if (timeOfDay === "Afternoon") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    }
  } else if (degreess >= 25) {
    if (timeOfDay === "Morning") {
      outfit = "T-shirt";
      shoes = "Sandals";
    } else if (timeOfDay === "Afternoon") {
      outfit = "Swim Suit";
      shoes = "Barefoot";
    } else if (timeOfDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }
  console.log(`It's ${degreess} degrees, get your ${outfit} and ${shoes}.`);
}
