function lunchBreak(Input) {
    let nameSerials = String(Input[0]);
    let countinueEpizode = Number(Input[1]);
    let countinueBreak = Number(Input[2]);

    let timeLunch = countinueBreak * 0.125;
    let timeRest = countinueBreak * 0.25;
    let leaveTime = countinueBreak - timeLunch - timeRest;

    if (leaveTime >= countinueEpizode) {
        console.log(`You have enough time to watch ${nameSerials} and left with ${Math.ceil(leaveTime - countinueEpizode)} minutes free time.`);
    }
    if (leaveTime < countinueEpizode) {
        console.log(`You don't have enough time to watch ${nameSerials}, you need ${Math.ceil(countinueEpizode - leaveTime)} more minutes.`)
    }
}


