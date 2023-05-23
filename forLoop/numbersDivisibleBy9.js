/* Напишете функция, която получава две числа и принтира  
на конзолата, всички числа в диапазона, които се делят на 9
 без остатък, както и тяхната сума.  
 На първия ред отпечатайте сумата на числата, а на следващите редове отговарящите на условието числа.*/
function numberDevisible9(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);

    let sum = 0;
    let outputNumb = '';

    for (let i = n; i < m; i++) {
        if (i % 9 === 0) {
            sum += i
            outputNumb += `${i}\n`;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(outputNumb);
    
}
numberDevisible9(["100", "200"]);