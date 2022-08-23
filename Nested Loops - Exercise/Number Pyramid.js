function numberPyramid(input) {
    let n = Number(input[0]);

    let cuurent = 1;
    let isBigger = false;
    let printCurrentLine = " ";
    for (let rows = 1; rows <= n; rows += 1) {
        for (let colums = 1; colums <= rows; colums += 1) {
            if (cuurent > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += cuurent + " ";
            cuurent += 1;
        }
        console.log(printCurrentLine);
        printCurrentLine = " ";
        if (isBigger) {
            break;
        }
    }

}