/*Поканени сте от академията да напишете софтуер, който да пресмята точките за актьор/актриса. Академията ще ви даде първоначални точки за актьора. След това всеки оценяващ ще дава своята оценка. Точките, които актьора получава се формират от: дължината на името на оценяващия умножено по точките, които дава делено на две. 
Ако резултатът в някой момент надхвърли 1250.5 програмата трябва да прекъсне и да се отпечата, че дадения актьор е получил номинация.
Вход
•	Име на актьора - текст
•	Точки от академията - реално число в интервала [2.0... 450.5]
•	Брой оценяващи n - цяло число в интервала[1… 20]
На следващите n-на брой реда:
o	Име на оценяващия - текст
o	Точки от оценяващия - реално число в интервала [1.0... 50.0]
Изход
Да се отпечата на конзолата един ред:
•	Ако точките са над 1250.5:
"Congratulations, {име на актьора} got a nominee for leading role with {точки}!"
•	Ако точките не са достатъчни:
	"Sorry, {име на актьора} you need {нужни точки} more!"
Резултатът да се форматирана до първата цифра след десетичния знак!
 */

function oscarsEx(input){
	let name=input[0];
	let points=Number(input[1]);
	let n=Number(input[2]);

	let totalPoints=points;

	for(let i=0;i<n;i++){
		let nameEval=input[3+i*2];
		let pointsEval=Number(input[3+i*2+1]);
		totalPoints+=((nameEval.length*pointsEval)/2)
		if(totalPoints>1250.5){
			break;
		}
	}
	if(totalPoints>1250.5){
		console.log(`Congratulations, ${name} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
	}else{
		let pointsNeeded=1250.5-totalPoints;
		console.log(`Sorry, ${name} you need ${pointsNeeded.toFixed(1)} more!`);
	}

}
oscarsEx(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);
