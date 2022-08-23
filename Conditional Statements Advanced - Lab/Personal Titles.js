function personal(input) {
    let ages = Number(input[0]);
    let gender = String(input[1]);

    if (gender === "m") {
        if (ages >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    } else {
        if (gender === "f") {
            if (ages >= 16) {
                console.log("Ms.");
            } else {
                console.log("Miss");
            }
        }
    }
}