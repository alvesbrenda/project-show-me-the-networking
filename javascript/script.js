//Conversor de segundo/minuto/hora/dia
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

//Colocar a data/hora do evento
let countDown = new Date('Jul 8, 2020 20:00:00').getTime(),
    x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day));
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        document.getElementById('days2').innerText = 0;
        document.getElementById('hours2').innerText = 0;
        document.getElementById('minutes2').innerText = 0;
        document.getElementById('seconds2').innerText = 0;

        if (distance < 0) {
            clearInterval(x);
            //Vai exibir o direcionamento pro evento
            document.getElementById("inicio").style.display = 'block';
            document.getElementById("tempo2").style.display = 'none';
            //Vai esconder o contador
            document.getElementById("tempo").style.display = 'none';
            document.getElementById("tempo2").style.display = 'block';
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


//Script do popup
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(window, "load", function(e) {
    //section Popup escondida
    document.getElementById("popup").style.display = 'none';

    addEvent(document, "mouseout", function(e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;


        if (!from || from.nodeName == "HTML") {
            // Aqui você coloca o seu popup
            document.getElementById("popup").style.display = 'block';
        }
    });
});


/* 
// intenção de sair
function addEvent(obj, evt, fn) {

    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }

}

// gatilho 
addEvent(document, 'mouseout', function(evt) {

    if (evt.toElement == null && evt.relatedTarget == null) {
        $('#lightbox_overlay').slideUp();
    };

}); */