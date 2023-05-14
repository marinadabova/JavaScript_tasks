/* Хотел предлага 2 вида стаи: студио и апартамент. Напишете функция, която изчислява цената за целия престой за студио и апартамент. Цените зависят от месеца на престоя:
Май и октомври	Юни и септември	Юли и август
Студио – 50 лв./нощувка	Студио – 75.20 лв./нощувка	Студио – 76 лв./нощувка
Апартамент – 65 лв./нощувка	Апартамент – 68.70 лв./нощувка	Апартамент – 77 лв./нощувка
Предлагат се и следните отстъпки:
•	За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
•	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
•	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
•	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.
Вход
Получават се 2 аргумента:
•	 месецът – May, June, July, August, September или October
•	броят на нощувките – цяло число в интервала [0 … 200]
Изход
Да се отпечатат на конзолата 2 реда:
•	На първия ред: “Apartment: {цена за целият престой} lv.”
•	На втория ред: “Studio: {цена за целият престой} lv.”
Цената за целия престой форматирана с точност до два знака след десетичната запетая.
*/
//May, June, July, August, September или October
function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studio = 0;
    let apartment = 0;

    if (month === 'May' || month === 'October') {
        studio = 50;
        apartment = 65;
        if (nights > 7 && nights <= 14) {
            studio *= 0.95;
        } else if (nights > 14) {
            studio *= 0.70;
            apartment *= 0.90;
        }

    } else if (month === 'June' || month === 'September') {
        studio = 75.20 ;
        apartment = 68.70;
        if (nights > 14) {
            studio *= 0.80;
            apartment *= 0.90;
        }
    } else if (month === 'July' || month === 'August') {
        studio = 76;
        apartment = 77 ;
        if (nights > 14) {
            apartment *= 0.90;
        }
    }
    studio *= nights;
    apartment *= nights;
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
