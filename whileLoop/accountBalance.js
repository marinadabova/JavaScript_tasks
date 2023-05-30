/*Напишете функция, която пресмята колко общо пари има в сметката, след като направите определен брой вноски. Във всеки елемент ще получавате сумата, която трябва да внесете в сметката, до получаване на команда "NoMoreMoney" . При всяка получена сума на конзолата трябва да се извежда "Increase: " + сумата и тя да се прибавя в сметката. Ако получите число по-малко от 0 на конзолата трябва да се изведе "Invalid operation!" и програмата да приключи. Когато програмата приключи трябва да се принтира "Total: " + общата сума в сметката.
Всички суми, които се печатат, трябва да се форматират до втория знак след десетичната запетая.


*/

function accountBalance(input) {
    let total = 0;
    let index = 0;
    let curElement = input[index];

    while (curElement !== "NoMoreMoney") {
        let elementAsNumber = Number(curElement);
        if (elementAsNumber < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        total += elementAsNumber;
        console.log(`Increase: ${elementAsNumber.toFixed(2)}`);
        index++;
        curElement = input[index];
    }

    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
