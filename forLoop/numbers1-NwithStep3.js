//Напишете функция, която получава число n и отпечатва числата от 1 до n през 3.

function numbersStep3(input){
    let n=Number(input[0]);

    for(let i=1;i<=n;i+=3){
        console.log(i);
    }
}
numbersStep3(["10"]);