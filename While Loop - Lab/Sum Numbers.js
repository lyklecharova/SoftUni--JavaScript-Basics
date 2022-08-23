function sumNumbers(input) {
    let index = 0;
    let number = Number(input[index]);
    index += 1;

    let sum = 0;

    while (number > sum) {
        let num = Number(input[index]);
        index += 1
        sum += num
    }
    console.log(sum);
}
