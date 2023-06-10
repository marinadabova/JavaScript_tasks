/* Дядо Коледа много обича да пътешества, но за съжаление се случило, така че точно преди да замине на почивка три от елените му се разболяли и трябва да ги остави. Когато заминава, той трябва да съобрази колко храна да остави на всеки един от елените, за да не останат гладни. Напишете програма, която пресмята дали оставената от Дядо Коледа храна ще е достатъчна за времето, в което него няма да го има. Всеки елен изяжда определено количество храна на ден.
Вход:
От конзолата се четат пет реда:
•	Първи ред – брой дни, в които Дядо Коледа отсъства – цяло число в интервала [1…5000]
•	Втори ред – оставена храна в килограми – цяло число в интервала [0…100000]
•	Трети ред – храна на ден за първия елен в килограми – реално число в интервала [0.00…100.00]
•	Четвърти ред – храна на ден за втория елен в килограми– реално число в интервала [0.00…100.00]
•	Пети ред – храна на ден за третия елен в килограми – реално число в интервала [0.00…100.00]
Изход:
На конзолата трябва да се отпечата на един ред:
•	Ако оставената храна Е достатъчна:
o	“{килограми, които остават} kilos of food left.”
	Резултатът трябва да е закръглен към ПО-МАЛКОТО цяло число
•	Ако оставената храна НЕ Е достатъчна:
o	“{килограми, които не  недостигат} more kilos of food are needed.”
	Резултатът трябва да е закръглен към ПО-ГОЛЯМОТО цяло число
*/
function deerOfSanta(input) {
    let countDays = Number(input[0]);
    let foodLeft = Number(input[1]);
    let foodFirstDeer = Number(input[2]);
    let foodSeondDeer = Number(input[3]);
    let foodThirdDeer = Number(input[4]);

    let allFoodFirstDeer = countDays * foodFirstDeer;
    let allFoodSecondDeer = countDays * foodSeondDeer;
    let allFoodThirdDeer = countDays * foodThirdDeer;

    let food = allFoodFirstDeer + allFoodSecondDeer + allFoodThirdDeer;

    if (food < foodLeft) {
        let kgFoodLeft = foodLeft - food;
        console.log(`${Math.floor(kgFoodLeft)} kilos of food left.`);

    } else {
        let kgFoodNeeded = food - foodLeft;
        console.log(`${Math.ceil(kgFoodNeeded)} more kilos of food are needed.`);
    }


}
deerOfSanta(["2",
    "10",
    "1",
    "1",
    "2"]);
