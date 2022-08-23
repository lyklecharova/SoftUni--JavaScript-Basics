function record(input) {
    let record = Number(input[0]); // in seconds //
    let distance = Number(input[1]); // in metres //
    let time = Number(input[2]); // in seconds //

    let timeIvan = distance * time;
    let delayTime = 12.5 * (Math.floor(distance / 15)); // about Ivan //
    let totalTime = timeIvan + delayTime;

    if (totalTime >= record) {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    }


}
