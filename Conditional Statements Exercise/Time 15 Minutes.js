function time(input) {
    let h = Number(input[0]);
    let m = Number(input[1]);

    let time = h * 60 + m;     // reverse hours in minutes
    time += 15;                // add 15 minutes

    let hours = Math.floor(time / 60);   // 1 hours = 60 min
    let minutes = time % 60;          // give hours

    if (hours === 24) {
        hours = 0;
    }

    if (minutes < 10) {                   // lead 0
        console.log(`${hours}:0${minutes}`);

    } else {
        console.log(`${hours}:${minutes}`);
    }

}

