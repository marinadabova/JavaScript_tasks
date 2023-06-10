/* Всяка година Дядо Коледа избира различни дестинации за почивка. Тази година той решава да прекара почивните си дни в България. Неговите верни приятели – джуджетата, му предлагат да се настани в един от най-престижните хотели, а именно "Четири сезона". По време на престоя си там, той трябва да избере между следните видове помещения, със следните цени за престой:
•	"room for one person" – 18.00 лв за нощувка
•	"apartment" – 25.00 лв за нощувка 
•	"president apartment" – 35.00 лв за нощувка
Според броят на дните, в които Дядо Коледа ще остане в хотела (пример: 11 дни = 10 нощувки) и видът на помещението, което ще избере, той може да ползва различно намаление. Намаленията спрямо дните и помещението са както следва:
вид помещение	по-малко от 10 дни	между 10 и 15 дни	повече от 15 дни
room for one person	не ползва намаление	не ползва намаление	не ползва намаление
apartment	30% от крайната цена	35% от крайната цена	50% от крайната цена
president apartment	10% от крайната цена	15% от крайната цена	20% от крайната цена

След престоя си в хотела, оценката на Дядо Коледа за услугите на хотела може да е позитивна (positive) или негативна (negative). Ако оценката му е позитивна, към цената с вече приспаднатото намаление Дядо Коледа добавя 25%  към нея. Ако оценката му е негативна приспада от цената 10%.
Вход
Входът се чете от конзолата и се състои от три реда:
•	Първи ред – дни за престой – цяло число в интервала [0...365]
•	Втори ред –  вид помещение –  "room for one person",  "apartment" или "president apartment"
•	Трети ред –  оценка - "positive"  или "negative"
Изход
На конзолата трябва да се отпечата един ред.
•	Цената за престоят му в хотела, форматирана до втория знак след десетичната запетая
*/
function santasHoliday(input) {
    let dayToStay = Number(input[0]);
    let room = input[1];
    let rating = input[2];

    let nights = dayToStay - 1;
    let price = 0;
    switch (room) {
        case "room for one person":
            price = nights * 18.00;
            break;
        case "apartment":
            price = nights * 25.00;
            if (dayToStay < 10) {
                price *= 0.70;
            } else if (dayToStay > 10 && dayToStay < 15) {
                price *= 0.65;
            } else if (dayToStay > 15) {
                price *= 0.50;
            }
            break;
        case "president apartment":
            price = nights * 35.00;
            if (dayToStay < 10) {
                price *= 0.90;
            } else if (dayToStay > 10 && dayToStay < 15) {
                price *= 0.85;
            } else if (dayToStay > 15) {
                price *= 0.80;
            }
            break;
    }
    let totalPrice = 0;

    if (rating == "positive") {
        totalPrice = (price * 0.25) + price;
        console.log(totalPrice.toFixed(2));
    } else if (rating == "negative") {
        totalPrice = price - (price * 0.10);
        console.log(totalPrice.toFixed(2));
    }
}
santasHoliday(["30",
    "president apartment",
    "negative"]);
