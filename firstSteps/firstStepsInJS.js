
//Да се напише функция, която получава цяло число и пресмята лицето на квадрат дадената страна. 
function square(input){
    let a=Number(input[0]);
    let area=a*a;
    console.log(area);

}
square(["5"]);

// Да се напише функция, която чете от конзолата реално число и го преобразува от инчове в сантиметри. За целта умножете инчовете по 2.54 (1 инч = 2.54 сантиметра).
function inchSm(input){
    let inch=input[0];
    let convert=inch * 2.54;
    console.log(convert);
}
inchSm(["7"]);

// Напишете функция, която получава име на човек и отпечатва "Hello, <name>!", където <name> е въведеното име от конзолата.
function greeting(input){
    let name=input[0];
    console.log(`Hello, ${name}!`);
}
greeting(["Niki"]);

// Напишете функция, която получава: име, фамилия, възраст и град и печата съобщение от следния вид: 
// "You are <firstName> <lastName>, a <age>-years old person from <town>."

function concatenateData(input){
    let firstName=input[0];
    let lastName=input[1];
    let age= input[2];
    let town=input[3];
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
concatenateData(['Maria','Ivanova',20,'Sofia']);

// Напишете програма, която изчислява колко часа ще са необходими на един архитект, за да изготви проектите на няколко строителни обекта. Изготвянето на един проект отнема три часа.
// Вход
// От конзолата се четат 2 реда:
// 1.	Името на архитекта - текст
// 2.	Брой на проектите, които трябва да изготви - цяло число в интервала [0 … 100]
// Изход
// На конзолата се отпечатва:
// •	"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."

function projectMaking(input){
    let name=input[0];
    let numberOfProjects=input[1];
    let hours=numberOfProjects*3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${numberOfProjects} project/s.`)
}
projectMaking(["George ", "4 "]);

// Напишете програма, която пресмята нужните разходи за закупуването на храна за кучета и котки.  Храната се пазарува от зоомагазин, като една опаковка храна за кучета е на цена 2.50 лв, а опаковка храна за котки струва 4 лв.
// Вход
// От конзолата се четат 2 реда:
// 1.	Броят на опаковките храна за кучета – цяло число в интервала [0… 100]
// 2.	Броят на опаковките храна за котки –  цяло число в интервала [0… 100]
// Изход
// На конзолата се отпечатва: 
// "{крайната сума} lv."

function zooShop(input){
    let numberPackageDog=input[0];
    let numberPackageCat=input[1];

    let dogFood=numberPackageDog*2.50;
    let catFood=numberPackageCat*4;
    let total=dogFood+catFood;
    console.log(`${total} lv.`)
}
zooShop(["5 ","4 "]);

// Божидара разполага с няколко къщи на Черноморието и желае да озелени дворовете на някои от тях, като по този начин създаде уютна обстановка и комфорт на гостите си. За целта е наела фирма.
// Напишете програма, която изчислява необходимате сума, които Божидара ще трябва да заплати на фирмата изпълнител на проекта. Цената на един кв. м. е 7.61 лв със ДДС. Понеже нейният двор е доста голям, фирмата изпълнител предлага 18% отстъпка от крайната цена.
// Вход
// От конзолата се прочита само един ред:
// 1.	Кв. метри, които ще бъдат озеленени – реално число в интервала [0.00 … 10000.00]
// Изход
// На конзолата се отпечатват два реда:
// •	"The final price is: {крайна цена на услугата} lv."
// •	"The discount is: {отстъпка} lv."

function yardGreening(input){
    let meters=input[0];
    let priceWithoutDiscount=meters*7.61;
    let discount=18/100*priceWithoutDiscount;
    let total=priceWithoutDiscount-discount;

    console.log(`The final price is: ${total} lv.`);
    console.log(`The discount is: ${discount} lv.`)

}
yardGreening(["550"]);