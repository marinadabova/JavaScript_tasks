/*
Напишете програма, която изчислява средната оценка на ученик от цялото му обучение. На първия ред ще получите името на ученика, а на всеки следващ ред неговите годишни оценки. Ученикът преминава в следващия клас, ако годишната му оценка е по-голяма или равна на 4.00. Ако ученикът бъде скъсан повече от един път, то той бива изключен и програмата приключва, като се отпечатва името на ученика и в кой клас бива изключен.
 При успешно завършване на 12-ти клас да се отпечата : 
"{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}"
В случай, че ученикът е изключен от училище, да се отпечата:
"{име на ученика} has been excluded at {класа, в който е бил изключен} grade"
Стойността трябва да бъде форматирана до втория знак след десетичната запетая. 

*/
function graduation(input) {
    let name = input[0];
    let grade = 1;

    let sumGrades = 0;
    let currentGrade = Number(input[grade]);
    let excluded = 0;
    while (grade <= 12) {
        if (currentGrade < 4) {
            excluded++;
        }
        if (excluded > 1) {
            console.log(`${name} has been excluded at ${grade - 1} grade`);
            break;
        }
        sumGrades += currentGrade;
        grade++;
        currentGrade = Number(input[grade]);
    }
    let avgGrade = sumGrades / 12;
    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }

}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);



