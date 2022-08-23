function oldBooks(input) {
    let index = 0;
    let nameBook = input[index];
    index += 1;

    let currentBook = 0;

    while (currentBook !== "No More Books") {
        currentBook = input[index];
        if (currentBook == nameBook) {
            console.log(`You checked ${index - 1} books and found it.`);
            break;
        }
        index += 1;
    }
    if (currentBook == "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 2} books.`);
    }
}
