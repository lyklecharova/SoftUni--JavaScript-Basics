function vowelsSum(input) {
  let vowels = String(input[0]);

  let sum = 0;

  for (let i = 0; i < vowels.length; i++) {
    let letter = vowels.charAt(i);

    switch (letter) {
      case "a": sum += 1; break;
      case "e": sum += 2; break;
      case "i": sum += 3; break;
      case "o": sum += 4; break;
      case "u": sum += 5; break;
    }
  }
  console.log(sum)
}



//  function vowelsSum(input) {
//   let vowels = String(input[0]);
//   let sum = 0;

//   for (let i = 0; i < vowels.length; i++) {
//     let letter = vowels.charAt(i);

//     if (letter === "a") {
//       sum += 1;
//     }

//     if (letter === "e") {
//       sum += 2;
//     }

//     if (letter === "i") {
//       sum += 3;
//     }

//     if (letter === "o") {
//       sum += 4;
//     }

//     if (letter === "u") {
//       sum += 5;
//     }
//   }
//   console.log(sum);
// }

