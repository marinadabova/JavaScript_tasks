// Да се напише функция, която получава парола (текст) и проверява дали дадената паролата съвпада с фразата "s3cr3t!P@ssw0rd". При съвпадение да се изведе "Welcome". При несъвпадение да се изведе "Wrong password!". 

function passwordGuess(input){
    let phrase="s3cr3t!P@ssw0rd";
    let password=input[0];
    if(phrase===password){
        console.log("Welcome");

    }else{
        console.log("Wrong password!");
    }
}
passwordGuess(["qwerty"]);