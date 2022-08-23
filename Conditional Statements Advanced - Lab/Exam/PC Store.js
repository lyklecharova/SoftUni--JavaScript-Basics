function pcStore(input){
    let priceCPU = Number(input[0]); // CPU - processor in dollars
    let priceVGA = Number(input[1]); // VGA - video graphic in dollars
    let priceRAM = Number(input[2]); // price in dollars for 1 RAM memory
    let countRAM = Number(input[3]); // RAM memory  
    let percentageDiscout = Number(input[4]);

   let CPU = priceCPU * 1.57; // in lv.
   let VGA = priceVGA * 1.57; // in lv.
   let RAM = priceRAM * 1.57; // in lv.
   let totalRAM = RAM  * countRAM;
   let priceCUPAfterDiscount = CPU -(CPU * percentageDiscout);
   let VGAAfterDisocunt = VGA - (VGA * percentageDiscout);

   let totalPrice = priceCUPAfterDiscount + VGAAfterDisocunt + totalRAM;

   console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);

}
pcStore(["200",
"100",
"80",
"1",
"0.01"])