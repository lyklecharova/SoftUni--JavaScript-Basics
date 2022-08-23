function timeForExam(input) {
    let hourOnTheExam = Number(input[0]);
    let minuteOnTheExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minuteArrive = Number(input[3]);

    let timeExam = hourOnTheExam * 60 + minuteOnTheExam;
    let timeArrive = hourArrive * 60 + minuteArrive;

    if (timeExam < timeArrive) {
        console.log("Late");
        let diff = Math.abs(timeExam - timeArrive);
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h > 0) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`)
            } else {
                console.log(`${h}:${m} hours after the start`)
            }
        } else {
            console.log(` ${m} minutes after the start`);
        }
    } else if (timeArrive <= timeExam &&
        Math.abs(timeExam - timeArrive) <= 30) {
        console.log("On time");
        let diff = Math.abs(timeArrive - timeExam);
        if (diff > 0) {
            console.log(`${diff} minutes before the start`);
        }
    } else {
        console.log("Early");
        let diff = Math.abs(timeExam - timeArrive);
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h > 0) {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`)
            } else {
                console.log(`${h}:${m} hours before the start`)
            }
        } else {
            console.log(` ${m} minutes before the start`);
        }
    }
}
