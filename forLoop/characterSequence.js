//Напишете функция, която получава текст (стринг) и печата всеки символ от текста на отделен ред.

function charSequence(input){
    let str=input[0];
    for(let i=0;i<str.length;i++){
        console.log(str[i]);
    }
}
charSequence(["ice cream"]);