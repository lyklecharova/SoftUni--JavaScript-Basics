function sum(input) {
    timeFirst = Number(input[0]);
    timeSecond = Number(input[1]);
    timeThird = Number(input[2]);

    let totalTime = timeFirst + timeSecond + timeThird;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
