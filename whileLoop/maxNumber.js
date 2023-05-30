//Напишете функция, която до получаване на командата "Stop", чете цели числа и намира най-голямото измежду тях. Въвежда се по едно число на ред. 

function maxNum(input){
    let maxNumber=Number.MIN_SAFE_INTEGER;
    let index=0;
    let curInput=input[index];

    while(curInput !=="Stop"){
        let inputAsNumber=Number(curInput);
        if(inputAsNumber> maxNumber){
            maxNumber=inputAsNumber;
        }
        index++;
        curInput=input[index];
    }
    console.log(maxNumber);

}
maxNum(["45","-20","7","99","Stop"]);
