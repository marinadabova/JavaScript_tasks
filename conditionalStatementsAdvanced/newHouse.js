/* Марин и Нели си купуват къща не далеч от София. Нели толкова много обича цветята, че Ви убеждава да напишете функция, която да изчисли колко  ще им струва, да си засадят определен брой цветя и дали наличния бюджет ще им е достатъчен. Различните цветя са с различни цени. 
цвете	Роза	Далия	Лале	Нарцис	Гладиола
Цена на брой в лева	5	3.80	2.80	3	2.50
Съществуват следните отстъпки:
•	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
•	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
•	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
•	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
•	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
Функцията получава 3 аргумента:
•	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
•	Брой цветя - цяло число в интервала [10…1000]
•	Бюджет - цяло число в интервала [50…2500]
Да се отпечата на конзолата на един ред:
•	Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."
•	Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."
Сумата да бъде форматирана до втория знак след десетичната запетая.
*/

function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrice=0;
    switch (flowerType) {
        case 'Roses':
            totalPrice=flowerCount*5;
            break;
        case 'Dahlias':
            totalPrice=flowerCount*3.80;
            break;
        case 'Tulips':
            totalPrice=flowerCount*2.80;
            break;
        case 'Narcissus':
            totalPrice=flowerCount*3;
            break;
        case 'Gladiolus':
            totalPrice=flowerCount*2.50;
            break;
    }
    if (flowerCount>80 &&flowerType==='Roses'){
        totalPrice*=0.90; 

    }else if(flowerCount>90 && flowerType==='Dahlias'){
        totalPrice*=0.85; 

    }else if(flowerCount>80 && flowerType==='Tulips'){
        totalPrice*=0.85; 
    }else if(flowerCount<120 &&flowerType==='Narcissus'){
        totalPrice*=1.15;
    }else if(flowerCount<80 &&flowerType==='Gladiolus'){
        totalPrice*=1.20;
    }


    if(budget>=totalPrice){
        let moneyLeft=budget-totalPrice;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    }else{
        let moneyNeeded=totalPrice-budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
  
}
newHouse(["Roses", "55", "250"]);
