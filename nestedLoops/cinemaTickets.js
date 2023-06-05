/*Вашата задача е да напишете програма, която да изчислява процента на билетите за всеки тип от продадените билети: студентски(student), стандартен(standard) и детски(kid), за всички прожекции. Трябва да изчислите и колко процента от залата е запълнена за всяка една прожекция.
Вход
Входът е поредица от цели числа и текст:
•	На първия ред до получаване на командата "Finish" - име на филма – текст
•	На втори ред – свободните места в салона за всяка прожекция – цяло число [1 … 100]
•	За всеки филм, се чете по един ред до изчерпване на свободните места в залата или до получаване на командата "End":
o	Типа на закупения билет - текст ("student", "standard", "kid")
Изход
На конзолата трябва да се печатат следните редове:
•	След всеки филм да се отпечата, колко процента от кино залата е пълна
"{името на филма} - {процент запълненост на залата}% full."
•	При получаване на командата "Finish" да се отпечатат четири реда:
o	"Total tickets: {общият брой закупени билети за всички филми}"
o	"{процент на студентските билети}% student tickets."
o	"{процент на стандартните билети}% standard tickets."
o	"{процент на детските билети}% kids tickets."
 */

function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;

    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (command !== "Finish") {

        let movieName = command;
        let availablePlaces = Number(input[index]);
        index++;

        let command1 = input[index];
        index++;
        let tackenPlaces = 0;

        while (command1 !== "End") {
            let ticketType = command1;
            
            if (ticketType === 'student') {
                studentTickets++;
            } else if (ticketType === 'standard') {
                standardTickets++;
            } else {
                kidTickets++;
            }
            tackenPlaces++;

            if (tackenPlaces === availablePlaces) {
                break;
            }
            command1 = input[index];
            index++;
        }
        let percentTaken = (tackenPlaces / availablePlaces) * 100;
        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let totalTickets = studentTickets + standardTickets + kidTickets;
    console.log(`Total tickets: ${totalTickets}`);

    let studentTicketsPercent=(studentTickets/totalTickets)*100;
    let standartTicketsPercent=(standardTickets/totalTickets)*100;
    let kidsTicketsPercent=(kidTickets/totalTickets)*100;

    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standartTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTicketsPercent.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);
