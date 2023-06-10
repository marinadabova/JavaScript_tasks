/* Напишете програма, която да пресмята статистика за оценки от изпит. В началото програмата получава броя на студентите явили се на изпита и за всеки студент неговата оценка. На края програмата трябва да отпечата процента студенти с оценка между 2.00 и 2.99, между 3.00 и 3.99, между 4.00 и 4.99, 5.00 или повече. Също така и средния успех на изпита.
Вход:
От конзолата се четат:
•	На първия ред – броя на студентите явили се на изпит – цяло число в интервала [1...1000]
•	За всеки един студент на отделен ред – оценката от изпита – реално число в интервала [2.00...6.00]
Изход:
Да се отпечатат на конзолата 5 реда, които съдържат следната информация:
Ред 1 -	"Top students: {процент студенти с успех 5.00 или повече}%"
Ред 2 -	"Between 4.00 and 4.99: {между 4.00 и 4.99 включително}%"
Ред 3 -	"Between 3.00 and 3.99: {между 3.00 и 3.99 включително}%"
Ред 4 -	"Fail: {по-малко от 3.00}%"
Ред 5 -	"Average: {среден успех}"
Всички числа трябва да са форматирани до втория знак след десетичната запетая.
*/
function exam(input) {
    let numberStudents = Number(input[0]);
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    let totalMarks = 0;
    for (let i = 1; i <= numberStudents; i++) {
        let mark = Number(input[i]);
        if (mark >= 5.00) {
            count1++;
        } else if (mark >= 4 && mark <= 4.99) {
            count2++;

        } else if (mark >= 3 && mark <= 3.99) {
            count3++;

        } else if (mark < 3) {
            count4++;
        }
        totalMarks = totalMarks + mark;

    }
    let percent1 = (count1 / numberStudents) * 100;
    let percent2 = (count2 / numberStudents) * 100;
    let percent3 = (count3 / numberStudents) * 100;
    let percent4 = (count4 / numberStudents) * 100;

    let avgMark = totalMarks / numberStudents;

    console.log(`Top students: ${percent1.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percent2.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percent3.toFixed(2)}%`);
    console.log(`Fail: ${percent4.toFixed(2)}%`);
    console.log(`Average: ${avgMark.toFixed(2)}`);
}
exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"]);
