/* Напишете функция, която получава цяло число n, сумира всички негови цифри и отпечатва сумата. 
Вход
Функцията получава число n.
Изход
Да се отпечата на конзолата един ред:
"The sum of the digits is:{sum}" – където sum е сумата на отделните цифри.
*/
function sumOfNumbers(input){
    let n=input[0];
    let sum=0;
    for(let i=0;i<n.length;i++){
        sum+=Number(n[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"]);