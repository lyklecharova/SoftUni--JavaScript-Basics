function matchDates(input) {
    let text = input.shift();
    let matchesText = /\b(?<day>\d{2})([. -\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/gm
    let result = text.matchAll(matchesText);
    for (let text1 of result) {
        console.log(`Day: ${text1[1]}, Month: ${text1[3]}, Year: ${text1[4]}`)
    }

}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])

// Day: 13, Month: Jul, Year: 1928
// Day: 10, Month: Nov, Year: 1934
// Day: 25, Month: Dec, Year: 1937