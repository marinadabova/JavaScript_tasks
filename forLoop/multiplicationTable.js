//Напишете функция, която получава аргумент число от 1 до 10 и принтира таблицата за умножение в конзолата. 

function multiplicationTable(input){
    let num=Number(input[0]);
    for(let i=1;i<=10;i++){
        let res=i*num;
        console.log(`${i} * ${num} = ${res}`);
    }
}
multiplicationTable(["5"]);