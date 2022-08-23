function histograma(input) {
  let number = Number(input[0]);

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  let p1Percentage = 0;
  let p2Percentage = 0;
  let p3Percentage = 0;
  let p4Percentage = 0;
  let p5Percentage = 0;

  for (i = 1; i <= number; i++) {
    let currentNumber = Number(input[i]);

    if (currentNumber < 200) {
      p1++;
    } else if (currentNumber >= 200 && currentNumber <= 399) {
      p2++;
    } else if (currentNumber >= 400 && currentNumber <= 599) {
      p3++;
    } else if (currentNumber >= 600 && currentNumber <= 799) {
      p4++;
    } else {
      p5++;
    }

    p1Percentage = ((p1 / number) * 100).toFixed(2);
    p2Percentage = ((p2 / number) * 100).toFixed(2);
    p3Percentage = ((p3 / number) * 100).toFixed(2);
    p4Percentage = ((p4 / number) * 100).toFixed(2);
    p5Percentage = ((p5 / number) * 100).toFixed(2);
  }

  console.log(p1Percentage + "%");
  console.log(p2Percentage + "%");
  console.log(p3Percentage + "%");
  console.log(p4Percentage + "%");
  console.log(p5Percentage + "%");
}

