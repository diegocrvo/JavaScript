var start = document.getElementById('start')
var reset = document.getElementById('reset')

var wm = document.getElementById('w_minutes')
var ws = document.getElementById('w_seconds')

var body = document.body
var btn = document.getElementsByClassName('btn')

var startTimer

var btnOptions = document.getElementsByClassName('btnOptions')
btnOptions[0].style.background = '#5a189a'

var modo = 'work'

btnOptions[0].addEventListener('click', function(){
    start.classList.remove('btnPress')
    btnOptions[0].style.background = '#5a189a'
    btnOptions[1].style.background = 'transparent'
    wm.innerText = 30
    ws.innerText = "00"
    modo = 'work'
    start.innerText = 'START'
    stopInterval()
    startTimer = undefined
    body.style.background = '#5a189a'
    btn[0].style.color = '#5a189a'
    btn[1].style.color = '#5a189a'
})

btnOptions[1].addEventListener('click', function(){
    start.classList.remove('btnPress')
    btnOptions[1].style.background = '#ff8500'
    btnOptions[0].style.background = 'transparent'
    wm.innerText = "05"
    ws.innerText = "00"
    modo = 'break'
    start.innerText = 'START'
    stopInterval()
    startTimer = undefined
    body.style.background = '#ff8500'
    btn[0].style.color = '#ff8500'
    btn[1].style.color = '#ff8500'
})

start.addEventListener('click', function(){
    start.classList.toggle('btnPress')
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
        start.innerText = 'PAUSE'
    } else {
        stopInterval()
        startTimer = undefined
        start.innerText = 'START'
        start.className = 'btn'
    }
})

reset.addEventListener('click', function(){
    start.classList.remove('btnPress')
    if(modo == 'work'){
        wm.innerText = 30
        ws.innerText = "00"
    } else if(modo == 'break'){
        wm.innerText = "05"
        ws.innerText = "00"
    }
    stopInterval()
    startTimer = undefined
    start.innerText = 'START'

})

//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--
        //Clock text formatting
        if(ws.innerText < 10){
            ws.innerText = '0' + ws.innerText
        }
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59
        wm.innerText--
        //Clock text formatting
        if(wm.innerText < 10){
            wm.innerText = '0' + wm.innerText
        }
    }

    if(wm.innerText == 0 && ws.innerText == 0){
        if(modo == 'work'){
            wm.innerText = 30
            ws.innerText = "00"
        } else if(modo == 'break'){
            wm.innerText = "05"
            ws.innerText = "00"
        }
        stopInterval()
    }
}

function stopInterval(){
    clearInterval(startTimer)
}

