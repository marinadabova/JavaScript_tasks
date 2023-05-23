/*
Да се напише функция, която получава, изчислява и отпечатва сумата от стойностите на гласните букви според таблицата по-долу:
буква	 a	e	i	o	u
стойност 1	2	3	4	5

*/

function vowelSum(input) {
    let sum = 0;
    let word=input[0];
    for (let i = 0; i < word.length; i++) {
        let curSymbol = word.charAt(i);
        switch (curSymbol) {
            case 'a':
                sum += 1;
                break;
            case 'e':
                sum += 2;
                break;
            case 'i':
                sum += 3;
                break;
            case 'o':
                sum += 4;
                break;
            case 'u':
                sum += 5;
                break;

        }
    }
    console.log(sum);
}
vowelSum(["hello"]);