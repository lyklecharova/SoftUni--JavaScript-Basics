function operationBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = String(input[2]);

    let result = 0;
    let oddOrEven = "odd";

    if (operator === "+" ||
        operator === "-" ||
        operator === "*") {
        if (operator === "+") {
            result = n1 + n2;
        } else if (operator === "-") {
            result = n1 - n2;
        } else if (operator === "*") {
            result = n1 * n2;
        }
    }

    if (operator === "+" ||
        operator === "-" ||
        operator === "*") {
        if (result % 2 === 0) {
            oddOrEven = "even";
            console.log(`${n1} ${operator} ${n2} = ${result} - ${oddOrEven}`);
        } else {
            oddOrEven = "odd";
            console.log(`${n1} ${operator} ${n2} = ${result} - ${oddOrEven}`);
        }
    }

    if (operator === "/" || operator === "%") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else if (operator === "/") {
            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
        } else if (operator === "%") {
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`);
        }
    }


}