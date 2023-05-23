/*Катерачи от цяла България се събират на групи и набелязват следващите върхове за изкачване. Според размера на групата, катерачите ще изкачват различни върхове.
•	Група до 5 човека – изкачват Мусала
•	Група от 6 до 12 човека – изкачват Монблан
•	Група от 13 до 25 човека – изкачват Килиманджаро
•	Група от 26 до 40 човека –  изкачват К2
•	Група от 41 или повече човека – изкачват Еверест
Да се напише програма, която изчислява процента на катерачите изкачващи всеки връх.
Вход
От конзолата се четат поредица от числа, всяко на отделен ред:
•	На първия ред – броя на групите от катерачи – цяло число в интервала [1...1000]
•	За всяка една група на отделен ред – броя на хората в групата – цяло число в интервала [1...1000]
Изход
Да се отпечатат на конзолата 5 реда, всеки от които съдържа процент между 0.00% и 100.00% с точност до втората цифра след десетичната запетая.
•	Първи ред - процентът изкачващи Мусала
•	Втори ред – процентът изкачващи Монблан
•	Трети ред – процентът изкачващи Килиманджаро
•	Четвърти ред – процентът изкачващи К2
•	Пети ред – процентът изкачващи Еверест
 */
/* 
•
•	
•	Група от 26 до 40 човека –  изкачват К2
•	Група от 41 или повече човека – изкачват Еверест
*/
function trekkingMania(input) {
    let countGroups = Number(input[0]);
    let total = 0;

    let countMusala = 0;
    let countMonblan = 0;
    let countCilimandjaro = 0;
    let countK2 = 0;
    let countEverest = 0;

    for (let i = 1; i <= countGroups; i++) {
        let countPeopleInAGroup = Number(input[i]);
        total += countPeopleInAGroup;
        if (countPeopleInAGroup <= 5) {
            countMusala += countPeopleInAGroup;
        } else if (countPeopleInAGroup >= 6 && countPeopleInAGroup <= 12) {
            countMonblan += countPeopleInAGroup;
        } else if (countPeopleInAGroup >= 13 && countPeopleInAGroup <= 25) {
            countCilimandjaro += countPeopleInAGroup;
        } else if (countPeopleInAGroup >= 26 && countPeopleInAGroup <= 40) {
            countK2 += countPeopleInAGroup;
        } else if (countPeopleInAGroup >= 41) {
            countEverest += countPeopleInAGroup;
        }
    }

    let percentMusala = (countMusala / total) * 100;
    let percentMonblan = (countMonblan / total) * 100;
    let percentCilimandjaro = (countCilimandjaro / total) * 100;
    let percentK2 = (countK2 / total) * 100;
    let percentEverest = (countEverest / total) * 100;


    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMonblan.toFixed(2)}%`);
    console.log(`${percentCilimandjaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);
}
trekkingMania(["10",
    "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
