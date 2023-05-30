/*
Напишете функция, в която Марин решава задачи от изпити докато не получи съобщение "Enough" от лектора си. При всяка решена задача той получава оценка. Функцията трябва да приключи прочитането на данни при команда "Enough" или ако Марин получи определеният брой незадоволителни оценки.
Незадоволителна е всяка оценка, която е по-малка или равна на 4.
Вход
•	На първи ред - брой незадоволителни оценки - цяло число в интервала [1…5]
•	След това многократно се четат по два реда:
o	Име на задача - текст (низ)
o	Оценка - цяло число в интервала [2…6]
Изход
•	Ако Марин стигне до командата "Enough", отпечатайте на 3 реда: 
o	"Average score: {средна оценка}"
o	"Number of problems: {броя на всички задачи}"
o	"Last problem: {името на последната задача}"
•	Ако получи определеният брой незадоволителни оценки:
o	"You need a break, {брой незадоволителни оценки} poor grades."
Средната оценка да бъде форматирана до втория знак след десетичната запетая. 

*/

function examPrep(input) {
    let index = 0;

    let maxBadGrades = Number(input[0]);
    index++;

    let problemName = input[index];
    index++;

    let problemGrade = Number(input[index]);
    index++;

    let badGrades = 0;
    let maxBadGradesReached = false;

    let gradesSum = 0;
    let gradesCount = 0;
    let lastProblem=" ";
    while (problemName !== 'Enough') {
        lastProblem=problemName;
        if (problemGrade <= 4) {
            badGrades++;
        }
        if (badGrades === maxBadGrades) {
            maxBadGradesReached = true;
            break;
        }
        gradesSum += problemGrade;
        gradesCount++;

        problemName = input[index];
        index++;

        problemGrade = Number(input[index]);
        index++;
    }

    if (maxBadGradesReached) {
        console.log(`You need a break, ${badGrades} poor grades.`);
    } else {
        let avgGrade = gradesSum / gradesCount;
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
examPrep(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
