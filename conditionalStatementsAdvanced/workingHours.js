/* Да се напише функция, която получава час от денонощието(цяло число) и ден от седмицата(текст) и проверява дали офисът на фирма е отворен, като работното време на офисът е от 10-18 часа, от понеделник до събота включително.*/
function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if (hour >= 10 && hour <= 18) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;
            case 'Sunday':
                console.log("closed");
                break;
        }
    } else {
        console.log("closed");
    }

}
workingHours(["11", "Monday"]);