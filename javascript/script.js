const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Jul 9, 2020 21:30:00').getTime(),
    x = setInterval(function() {


        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

        if (distance < 0) {
            clearInterval(x);
        }




    }, second)

var time = day,
    time = hour,
    time = minute,
    time = minute;

function start() {
    if (time < 10) {
        time = '0' + time;
    }
}