//Напишете функция, която чете елементите на масив, докато не получи командата "Stop".

function readText(input) {
    let index = 0;
    let word = input[index];

    while (word !== 'Stop') {
        console.log(word);
        index++;
        word = input[index];
    }

}

readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);
