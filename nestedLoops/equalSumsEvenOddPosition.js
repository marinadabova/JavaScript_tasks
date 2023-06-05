/* Напишете функция, която получава две шестцифрени цели числа в диапазона от 100000 до 300000. Винаги първото въведено число ще бъде по малко от второто. На конзолата да се отпечатат на 1 ред разделени с интервал всички числа, които се намират между двете, прочетени от конзолата числа и отговарят на следното условие:
•	сумата от цифрите на четни и нечетни позиции да са равни. Ако няма числа, отговарящи на условието на конзолата не се извежда резултат. 
*/
function equalSums(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = ' ';

    for (let i = startNum; i <= endNum; i++) {
        let evenPosSum = 0;
        let oddPosSum = 0;

        let curNumAsString = i.toString();

        for (let j = 0; j < curNumAsString.length; j++) {
            let curDigit = Number(curNumAsString[j]);
            let position = j + 1;

            if (position % 2 === 0) {
                evenPosSum += curDigit;
            } else {
                oddPosSum += curDigit;
            }
        }
        if (evenPosSum === oddPosSum) {
            result += curNumAsString + ' ';
        }
    }
    console.log(result);
}
equalSums(["100000", "100050"]);
