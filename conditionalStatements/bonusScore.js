// Дадено е цяло число – начален брой точки. Върху него се начисляват бонус точки по правилата, описани по-долу. 
//Да се напише функция, която пресмята бонус точките, които получава числото и общия брой точки (числото + бонуса).
// •	Ако числото е до 100 включително, бонус точките са 5.
// •	Ако числото е между 100 и 1000, бонус точките са 20% от числото.
// •	Ако числото е по-голямо от 1000, бонус точките са 10% от числото.

// •	Допълнителни бонус точки (начисляват се отделно от предходните):
// o	За четно число  + 1 т.
// o	За число, което завършва на 5  + 2 т.

function bonusScore(input){
    let initialPoints=Number(input[0]);
    let bonusPoints=0;

    if(initialPoints<=100){
        bonusPoints=5;
    }else if(initialPoints<=1000){
        bonusPoints=0.20*initialPoints;
    }else{
        bonusPoints=0.10*initialPoints;
    }
    if(initialPoints%2===0){
        bonusPoints+=1;
    } else if(initialPoints%10===5){
        bonusPoints+=2;
    }
    console.log(bonusPoints);
    console.log(initialPoints+bonusPoints);
}
bonusScore(["211"]); 