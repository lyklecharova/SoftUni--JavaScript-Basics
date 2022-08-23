function cinemaTickets(input) {
    let index = 0;

    let command = input[index];
    index += 1;

    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let ticketCounter = 0;

    while (command !== "Finish") {
        let name = command;
        let freeSpace = Number(input[index]);
        index += 1;

        let type = input[index];
        index += 1;

        let tempTicket = 0;
        while (type !== "End") {
            switch (type) {
                case "student": studentTicket += 1; break;
                case "standard": standardTicket += 1; break;
                case "kid": kidTicket += 1; break;
            }
            tempTicket += 1;

            if (tempTicket >= freeSpace) {
                break;
            }
            type = input[index];
            index += 1;
        }

        let capacity = tempTicket / freeSpace * 100;
        console.log(`${name} - ${(capacity).toFixed(2)}% full.`);
        ticketCounter += tempTicket;
        command = input[index];
        index += 1;
    }
    let studentPercentage = studentTicket / ticketCounter * 100;
    let standardPercentage = standardTicket / ticketCounter * 100;
    let kidPercentage = kidTicket / ticketCounter * 100;

    console.log(`Total tickets: ${ticketCounter}`);

    console.log(`${(studentPercentage).toFixed(2)}% student tickets.`);
    console.log(`${(standardPercentage).toFixed(2)}% standard tickets.`);
    console.log(`${(kidPercentage).toFixed(2)}% kids tickets.`);

}


