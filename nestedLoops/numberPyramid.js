//Напишете функция, която получава цяло число n и отпечатва пирамида от числа, като в примерите:
/*(["7"])	1
            2 3
            4 5 6 
            7		
(["12"])	1
            2 3
            4 5 6
            7 8 9 10 
            11 12		
*/
function pyramid(input){
    let n=Number(input[0]);
    let current=1;
    let isBigger=false;
    let printCurrentLine=" ";
    for(let rows=1;rows<=n;rows++){
        for(let cols=1;cols<=rows;cols++){
            if(current>n){
                isBigger=true;
                break;
            }
            printCurrentLine+=current+" ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine=" ";
        if(isBigger){
            break;

        }
    }
}
pyramid(["7"]);