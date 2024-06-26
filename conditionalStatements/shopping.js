// Петър иска да купи N видеокарти, M процесора и P на брой рам памет. Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната сметка. Важат следните цени:
// •	Видеокарта – 250 лв./бр.
// •	Процесор – 35% от цената на закупените видеокарти/бр.
// •	Рам памет – 10% от цената на закупените видеокарти/бр.
// Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.
// Вход
// Входът се състои от четири реда:
// 1.	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
// 2.	Броят видеокарти - цяло число в интервала [0…100]
// 3.	Броят процесори - цяло число в интервала [0…100]
// 4.	Броят рам памет - цяло число в интервала [0…100]
// Изход
// На конзолата се отпечатва 1 ред, който трябва да изглежда по следния начин:
// •	Ако бюджета е достатъчен:
// "You have {остатъчен бюджет} leva left!"
// •	Ако сумата надхвърля бюджета:
// "Not enough money! You need {нужна сума} leva more!"
// Резултатът да се форматира до втория знак след десетичната запетая.


function shopping(input){
    let budget=Number(input[0]);
    let videoCardCount=Number(input[1]);
    let processorCount=Number(input[2]);
    let RAM=Number(input[3]);

    let videoCardPrice=videoCardCount*250;
    let processorPrice=processorCount*(0.35*videoCardPrice);
    let RAMprice=RAM*(0.10*videoCardPrice);

    let total=videoCardPrice+processorPrice+RAMprice;
    if(videoCardCount>processorCount){
        total=total*0.85;
    }

    if(budget>=total){
        let leftMoney=budget-total;
        console.log(`You have ${leftMoney.toFixed(2)} leva left!`);
    }else{
        let neededMoney=total-budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
    }
}
shopping(["900","2","1","3"]);
