// Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите, които ще спечели иска да отиде на екскурзия. 
// Цени на играчките:
// •	Пъзел - 2.60 лв.
// •	Говореща кукла - 3 лв.
// •	Плюшено мече - 4.10 лв.
// •	Миньон - 8.20 лв.
// •	Камионче - 2 лв.
// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.
// Вход
// От конзолата се четат 6 реда:
// 1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
// 2.	Брой пъзели - цяло число в интервала [0… 1000]
// 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
// 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
// 5.	Брой миньони - цяло число в интервала [0 … 1000]
// 6.	Брой камиончета - цяло число в интервала [0 … 1000]
// Изход
// На конзолата се отпечатва:
// •	Ако парите са достатъчни се отпечатва:
// o	"Yes! {оставащите пари} lv left."
// •	Ако парите НЕ са достатъчни се отпечатва:
// o	"Not enough money! {недостигащите пари} lv needed."

// Резултатът трябва да се форматира до втория знак след десетичната запетая.

function toyShop(input) {
    let vacationPrice = Number(input[0]);
    let puzzelQuantity = Number(input[1]);
    let speakingDollsQuantity = Number(input[2]);
    let teddyBearsQuantity = Number(input[3]);
    let minionsQuantity = Number(input[4]);
    let trucksQuantity = Number(input[5]);

    let totalCount = puzzelQuantity + speakingDollsQuantity + teddyBearsQuantity + minionsQuantity + trucksQuantity;

    let totalPricePuzzel = puzzelQuantity * 2.60;
    let totalPriceDolls = speakingDollsQuantity * 3;
    let totalPriceTeddyBear = teddyBearsQuantity * 4.10;
    let totalPriceMinions = minionsQuantity * 8.20;
    let totalPriceTrucks = trucksQuantity * 2;

    let totalPrice = totalPriceDolls + totalPriceMinions + totalPricePuzzel + totalPriceTeddyBear + totalPriceTrucks;

    if (totalCount >= 50) {
        totalPrice = totalPrice * 0.75;
    }

    totalPrice = 0.90 * totalPrice;
    if (totalPrice >= vacationPrice) {
        let leftMoney = totalPrice - vacationPrice;
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
    } else {
        let neededMoney = vacationPrice - totalPrice;
        console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);