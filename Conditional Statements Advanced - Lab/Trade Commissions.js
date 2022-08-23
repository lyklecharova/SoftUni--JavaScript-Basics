function tradeCommission(input) {
    let town = String(input[0]);
    let volumeSalese = Number(input[1]);

    let result = 0;

    if (town === "Sofia") {
        if (volumeSalese >= 0 && volumeSalese <= 500) {
            result = volumeSalese * 0.05;
        } else if (volumeSalese > 500 && volumeSalese <= 1000) {
            result = volumeSalese * 0.07;
        } else if (volumeSalese > 1000 && volumeSalese <= 10000) {
            result = volumeSalese * 0.08;
        } else if (volumeSalese > 10000) {
            result = volumeSalese * 0.12;
        }

    }

    if (town === "Varna") {
        if (volumeSalese >= 0 && volumeSalese <= 500) {
            result = volumeSalese * 0.045;
        } else if (volumeSalese > 500 && volumeSalese <= 1000) {
            result = volumeSalese * 0.075;
        } else if (volumeSalese > 1000 && volumeSalese <= 10000) {
            result = volumeSalese * 0.1;
        } else if (volumeSalese > 10000) {
            result = volumeSalese * 0.13;
        }
    }

    if (town === "Plovdiv") {
        if (volumeSalese >= 0 && volumeSalese <= 500) {
            result = volumeSalese * 0.055;
        } else if (volumeSalese > 500 && volumeSalese <= 1000) {
            result = volumeSalese * 0.08;
        } else if (volumeSalese > 1000 && volumeSalese <= 10000) {
            result = volumeSalese * 0.12;
        } else if (volumeSalese > 10000) {
            result = volumeSalese * 0.145;
        }
    }
    if (result !== 0) {
        console.log(result.toFixed(2))
    } else {
        console.log("error")
    }
}
