//Да се напише функция, която получава число n и печата четните степени на 2 ≤ 2n: 20, 22, 24, 26, …, 2n.

function evenPowersOfTwo(input){
    let n=Number(input[0]);
    let power=1;
    for(let i=0;i<=n;i+=2){
        console.log(power);
        power*=2*2;
    }
}
evenPowersOfTwo(["3"]);