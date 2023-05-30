/*Производителите на вендинг машини искали да направят машините си да връщат възможно най-малко монети ресто. Напишете функция, която приема сума - рестото, което трябва да се върне и изчислява с колко най-малко монети може да стане това. Монетите може да са от 2 лева, 1 лев, 50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 2 стотинки или 1 стотинка 
*/
function coins(input) {
    let change = Number(input[0]);
    let coins = Math.round(change * 100);
    let coinsReturnedCount = 0;

    while (coins > 0) {
        if (coins >= 200) {
            coinsReturnedCount++;
            coins -= 200;
        } else if (coins >= 100) {
            coinsReturnedCount++;
            coins -= 100;
        } else if (coins >= 50) {
            coinsReturnedCount++;
            coins -= 50;
        } else if (coins >= 20) {
            coinsReturnedCount++;
            coins -= 20;
        } else if (coins >= 10) {
            coinsReturnedCount++;
            coins -= 10;
        } else if (coins >= 5) {
            coinsReturnedCount++;
            coins -= 5;
        } else if (coins >= 2) {
            coinsReturnedCount++;
            coins -= 2;
        } else if (coins >= 1) {
            coinsReturnedCount++;
            coins -= 1;
        }
    }
    console.log(coinsReturnedCount);
}

coins(["1.23"]);
