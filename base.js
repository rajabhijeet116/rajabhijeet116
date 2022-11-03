


// function for timer project
var stop=document.getElementById('stop');
var start=document.getElementById('start');
var reset=document.getElementById('reset');

var h=document.getElementById('hour');
var m=document.getElementById('min');
var s=document.getElementById('sec');
var startTimer=null;
function timer(){
    if(h.value==0 && m.value==0 && s.value==0){
        h.value=0;
        m.value=0;
        s.value=0;
        stopTimer();
    }else if(s.value!=0){
        s.value--;
    }else if(m.value!=0 && s.value==0){
        s.value=59;
        m.value--;
    }else if(h.value!=0 && m.value==0){
        m.value=60;
        h.value--;
    };
}

function stopTimer(){
    clearInterval(startTimer)
}
start.addEventListener('click',function(){
    function startInterval(){
        startTimer=setInterval(function(){
            timer();},1000)
    }
    startInterval()
})
reset.addEventListener('click',function(){
    h.value=0;
    m.value=0;
    s.value=0;
    stopTimer();
})
stop.addEventListener('click',function(){
    stopTimer()
})






