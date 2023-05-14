/* Напишете функция, която получава  две цели числа (N1 и N2) и оператор, с който да се извърши дадена математическа операция с тях. Възможните операции са: Събиране(+), Изваждане(-), Умножение(*), Деление(/) и Модулно деление(%). При събиране, изваждане и умножение на конзолата трябва да се отпечатат резултата и дали той е четен или нечетен. При обикновеното деление – резултата. При модулното деление – остатъка. Трябва да се има предвид, че делителят може да е равен на 0(нула), а на нула не се дели. В този случай трябва да се отпечата специално съобщениe.
Вход
Приемат се 3 аргумента,:
•	N1 – цяло число в интервала [0...40 000]
•	N2 – цяло число в интервала [0...40 000]
•	Оператор – един символ измежду: "+", "-", "*", "/", "%"
Изход
Да се отпечата на конзолата един ред:
•	Ако операцията е събиране, изваждане или умножение:
o	 "{N1} {оператор} {N2} = {резултат} – {even/odd}"
•	Ако операцията е деление:
o	"{N1} / {N2} = {резултат}" – резултатът е форматиран до вторият знак след дес.запетая
•	Ако операцията е модулно деление: 
o	"{N1} % {N2} = {остатък}"
•	В случай на деление с 0(нула): 
o	"Cannot divide {N1} by zero"
*/

function operationsBetweenNumbers(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let type = '';
    switch (operator) {
        case '+':
            result = N1 + N2;
            if (result % 2 === 0) {
                type = 'even';
            } else {
                type = 'odd';
            }
            console.log(`${N1} ${operator} ${N2} = ${result} - ${type}`);
            break;
        case '-':
            result = N1 - N2;
            if (result % 2 === 0) {
                type = 'even';
            } else {
                type = 'odd';
            }
            console.log(`${N1} ${operator} ${N2} = ${result} - ${type}`);
            break;
        case '*':
            result = N1 * N2;
            if (result % 2 === 0) {
                type = 'even';
            } else {
                type = 'odd';
            }
            console.log(`${N1} ${operator} ${N2} = ${result} - ${type}`);
            break;
        case '/':
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
                break;
            }
            result = N1 / N2;
            console.log(`${N1} ${operator} ${N2} = ${result.toFixed(2)}`);
            break;
        case '%':
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
                break;
            }
            result = N1 % N2;
            console.log(`${N1} ${operator} ${N2} = ${result}`);
            break;
    }
}
operationsBetweenNumbers(["10", "12", "+"]);
