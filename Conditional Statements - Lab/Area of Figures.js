function areaOfFigure(input) {
    let typeFigure = input[0];
    // let area = 0;

    if (typeFigure === "square") {
        let side = Number(input[1]);

        console.log((side * side).toFixed(3));


    } else if (typeFigure === "rectangle") {
        let side = Number(input[1]);
        let sideA = Number(input[2]);

        console.log((side * sideA).toFixed(3));

    } else if (typeFigure === "circle") {
        let radius = Number(input[1]);
        // console.log((Math.PI * radius * radius).toFixed(3));
        console.log((Math.PI * (radius ** 2)).toFixed(3))



    } else if (typeFigure === "triangle") {
        let side = Number(input[1]);
        let high = Number(input[2]);

        console.log((side * high / 2).toFixed(3));

    }

}
