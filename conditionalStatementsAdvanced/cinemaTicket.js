/* Да се напише функция, която получава ден от седмицата (текст) и принтира на конзолата цената на билет за кино според деня от седмицата:
Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
12	12	14	14	12	16	16
*/
function cinemaTicket(input) {
    let day = input[0];
    let price = 0;

    if (day === 'Monday' || day === 'Tuesday' || day === 'Friday') {
        price = 12;
    } else if (day === 'Wednesday' || day === 'Thursday') {
        price = 14;
    } else if (day === 'Saturday' || day === 'Sunday') {
        price = 16;
    }
    console.log(price);
}
cinemaTicket(["Monday"]);