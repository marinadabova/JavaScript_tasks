/*Напишете функция, която отпечатва часовете в денонощието от 0:0 до 23:59, всеки на отделен ред. Часовете трябва да се изписват във формат "{час}:{минути}". */
function clock(input) {
    for (let hour = 0; hour <= 23; hour++) {
        for (let mins = 0; mins <= 59; mins++) {
            console.log(`${hour}:${mins}`);
        }
    }
}