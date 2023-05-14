/* Студент трябва да отиде на изпит в определен час (например в 9:30 часа). Той идва в изпитната зала в даден час на пристигане (например 9:40). Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на изпита или до половин час преди това. Ако е пристигнал по-рано повече от 30 минути, той е подранил. Ако е дошъл след часа на изпита, той е закъснял. Напишете функция, която получава време на изпит и време на пристигане и отпечатва дали студентът е дошъл навреме, дали е подранил или е закъснял и с колко часа или минути е подранил или закъснял.
Вход
Приемат се 4 аргумента:
•	Първият съдържа час на изпита – цяло число от 0 до 23.
•	Вторият съдържа минута на изпита – цяло число от 0 до 59.
•	Третият съдържа час на пристигане – цяло число от 0 до 23.
•	Четвъртият съдържа минута на пристигане – цяло число от 0 до 59.
Изход
На първият ред отпечатайте:
•	"Late", ако студентът пристига по-късно от часа на изпита.
•	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
•	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.
Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
•	"mm minutes before the start" за идване по-рано с по-малко от 1.
•	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05".
•	 "mm minutes after the start" за закъснение под час.
•	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".

*/

function onTimeForTheExam(input) {
    let examH = Number(input[0]);
    let examM = Number(input[1]);

    let arrivalH = Number(input[2]);
    let arrivalM = Number(input[3]);

    let examTimeInMinutes = examH * 60 + examM;
    let arrivalTimeInMinutes = arrivalH * 60 + arrivalM;
    let timeDifference = examTimeInMinutes - arrivalTimeInMinutes;

    if (timeDifference < 0) {
        console.log("Late");
    } else if (timeDifference <= 30) {
        console.log("On time");
    } else {
        console.log("Early");
    }

    if (timeDifference !== 0) {
        let hours = Math.floor(Math.abs(timeDifference) / 60);
        let minutes = Math.abs(timeDifference) % 60;
        if (hours > 0) {
            console.log(`${hours}:${minutes.toString().padStart(2, "0")} hours ${timeDifference < 0 ? "after" : "before"} the start`);
        } else {
            console.log(`${minutes} minutes ${timeDifference < 0 ? "after" : "before"} the start`);
        }
    }
    
}
onTimeForTheExam(["9", "30", "9", "50"]);