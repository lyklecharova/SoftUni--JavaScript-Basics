function fishAquarium(input) {
    length = Number(input[0]);
    width = Number(input[1]);
    height = Number(input[2]);
    percent = Number(input[3]);



    let volumeTank = length * width * height;
    let volumeLitre = volumeTank * 0.001; // volumeTank / 1 000 
    let neededLitre = volumeLitre * (1 - (percent / 100));
    console.log(neededLitre);
}

