/*Ани отива до родния си град след много дълъг период извън страната. Прибирайки се вкъщи тя вижда старата библиотека на баба си и си спомня за любимата си книга. Помогнете на Ани, като напишете функция в която тя въвежда търсената от нея книга(текст). Докато Ани не намери любимата си книга или не провери всички в библиотеката, програмата трябва да чете всеки път на нов ред името на всяка следваща книга (текст). Книгите в библиотеката са свършили щом получите текст "No More Books".
•	Ако не открие книгата да се отпечата на два реда: 
o	"The book you search is not here!"
o	"You checked {брой} books."
•	Ако открие книгата си се отпечатва един ред:
o	"You checked {брой} books and found it."  

*/
function oldBooks(input){
    let index=0;

    let searchedBook=input[index];
    index++;

    let currentBook=input[index];
    index++;
    let isFound=false;
    let booksChecked=0;
    while(currentBook !=="No More Books"){
        if(currentBook ===searchedBook){
            isFound=true;
            break;
        }
        booksChecked++;
        currentBook=input[index];
        index++;
    }
    if(isFound){
        console.log(`You checked ${booksChecked} books and found it.`);
    }else{
        console.log("The book you search is not here!");
        console.log(`You checked ${booksChecked} books.`);
    }

}
oldBooks(["Troy","Stronger","Life Style","Troy"]);
