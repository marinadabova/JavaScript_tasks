/*Пепи иска да напишете програма, чрез която да разбере кой е най-добрият играч от световното първенство. Информацията, която получавате ще бъде играч и колко гола е отбелязал. От вас се иска да отпечатате кой е играчът с най-много голове и дали е направил хет-трик. Хет-трик е, когато футболистът е вкарал 3 или повече гола. Ако футболист е вкарал 10 или повече гола, програмата трябва да спре.

Вход
От конзолата се четат по два реда до въвеждане на команда "END":
•	Име на играч – текст
•	Брой вкарани голове  – цяло положително число в интервала [1 … 10000]
Изход
На конзолата да се отпечатат 2 реда :
•	На първия ред:
     	"{име на играч} is the best player!"
•	На втория ред :
o	 Ако най-добрият футболист е направил хет-трик:
         	"He has scored {брой голове} goals and made a hat-trick !!!"
o	Ако най-добрият футболист НЕ е направил хет-трик:
                   	"He has scored {брой голове} goals."
 */
function bestPlayer(input) {
    let index = 0;
    let name = input[index];
    let playerMaxGoals = '';
    let maxGoals = 0;
    let hattick = false;
    let goals=0;
    while (name !== "END") {
        index++;
        goals = Number(input[index]);
        index++;

        if (goals > maxGoals) {
            maxGoals = goals;
            playerMaxGoals = name;
            if (goals >= 3) {
                hattick = true;
            }
        }
        if (goals >= 10) {
            break;
        }
        name = input[index];
    }
    console.log(`${playerMaxGoals} is the best player!`);
    if (hattick) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}
bestPlayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"]);

