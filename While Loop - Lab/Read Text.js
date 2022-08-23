function readText(input) {
    let index = 0;
    let command = input[index];
    index += 1;
    while (command != "Stop") {
        let name = command;
        console.log(name);
        command = input[index];
        index += 1;
    }
}
