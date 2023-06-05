/* Напишете функция, която проверява всички възможни комбинации от двойка числа в интервала от две дадени числа. На изхода се отпечатва, коя поред е първата комбинацията, чийто сбор от числата е равен на дадено магическо число. Ако няма нито една комбинация отговаряща на условието се отпечатва съобщение, че не е намерено.
Вход
Функцията получава масив от 3 елемента:
•	Първи – начало на интервала – цяло число в интервала [1...999]
•	Втори – край на интервала – цяло число в интервала [по-голямо от първото число...1000]
•	Трети – магическото число – цяло число в интервала [1...10000]
Изход
На конзолата трябва да се отпечата един ред, според резултата:
•	При първата намерена комбинация, чиито сбор на числата е равен на магическото число:
o	"Combination N:{пореден номер} ({първото число} + {второ число} = {магическото число})"
•	Ако не е намерена комбинация отговаряща на условието:
o	"{броят на всички комбинации} combinations - neither equals {магическото число}"
*/

function sumOfTwoNumbers(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNum = Number(input[2]);

    let combinationCounter = 0;
    let isValidCombination = false;

    for (let i = startInterval; i <= endInterval; i++) {
        for (let j = startInterval; j <= endInterval; j++) {
            combinationCounter++;
            let sum = i + j;
            if (sum === magicNum) {
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${magicNum})`);
                isValidCombination = true;
                break;
            }
        }
        if (isValidCombination) {
            break;
        }
    }
    if (!isValidCombination) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["1", "10", "5"]);
