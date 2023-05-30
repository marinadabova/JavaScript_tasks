//Напишете функция, която до получаване на командата "Stop", чете цели числа, и намира най-малкото измежду тях. Въвежда се по едно число на ред. 

function minNum(input){
    let minNumber=Number.MAX_SAFE_INTEGER;
    let index=0;
    let curInput=input[index];

    while(curInput !=="Stop"){
        let inputAsNumber=Number(curInput);
        if(inputAsNumber< minNumber){
            minNumber=inputAsNumber;
        }
        index++;
        curInput=input[index];
    }
    console.log(minNumber);

}
minNum(["45","-20","7","99","Stop"]);
