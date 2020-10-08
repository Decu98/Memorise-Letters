function currentTime(){
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    minute = correctTime(minute);
    second = correctTime(second);
    var time = hour + ":" + minute + ":" + second; 
    return time;
}

function correctTime(x){
    if(x < 10){x = "0" + x};
    return x;
}

function placeClock(){
    setTimeout(placeClock,1000);
    var place = document.getElementById("clock");
    place.innerHTML = currentTime();
}

