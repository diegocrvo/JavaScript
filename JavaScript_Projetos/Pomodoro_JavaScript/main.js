var start = document.getElementById('start');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var btnOptions = document.getElementsByClassName('btnOptions')
btnOptions[0].style.background = '#744ab8'

var modo = 'work'

// -(x)quando muda de aba com o relogio correndo não reseta o botão start.
//     -( )o botão start reseta o texto, porem sua função 'continua no pause'.
// -(x)quando dar start em uma aba e vai para outra não reseta o relogio.
// -(x)clicando em resete na aba break o relogio recebe 30 e não 5.
    

btnOptions[0].addEventListener('click', function(){
    btnOptions[0].style.background = '#744ab8'
    btnOptions[1].style.background = 'transparent'
    wm.innerText = 30;
    ws.innerText = "00";
    modo = 'work'
    start.innerText = 'START'
    stopInterval()
})

btnOptions[1].addEventListener('click', function(){
    btnOptions[1].style.background = '#744ab8'
    btnOptions[0].style.background = 'transparent'
    wm.innerText = 5;
    ws.innerText = "00";
    modo = 'break'
    start.innerText = 'START'
    stopInterval()
})

//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
        start.innerText = 'PAUSE'
    } else {
        stopInterval()
        startTimer = undefined;
        start.innerText = 'START'
    }
})

reset.addEventListener('click', function(){
    if(modo == 'work'){
        wm.innerText = 30;
        ws.innerText = "00";
    } else if(modo == 'break'){
        wm.innerText = 5;
        ws.innerText = "00";
    }
    stopInterval()
    startTimer = undefined;
    start.innerText = 'START'

})

//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Increment Counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0){
        if(modo == 'work'){
            wm.innerText = 30;
            ws.innerText = "00";
        } else if(modo == 'break'){
            wm.innerText = 5;
            ws.innerText = "00";
        }
        stopInterval()
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}

