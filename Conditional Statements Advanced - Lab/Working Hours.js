function workingHours(input) {
    let hoursOfNight = Number(input[0]);
    let dayOfWeek = String(input[1]);


    if (hoursOfNight >= 10 && hoursOfNight < 18) {
        switch (dayOfWeek) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open"); break;
            // case "Sunday": console.log("closed"); break
        }

    } else {
        console.log("closed");
    }


}