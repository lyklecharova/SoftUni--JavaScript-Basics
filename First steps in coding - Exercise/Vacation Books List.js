function vacationBooksList(input) {
    let countPages = Number(input[0]); // current book
    let pages = Number(input[1]); // read for 1 hour
    let countDays = Number(input[2]); // for read a book

    let totalTime = countPages / pages;
    let neededHours = totalTime / countDays // hour on day
    console.log(neededHours);
}
