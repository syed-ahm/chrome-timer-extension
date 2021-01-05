function addTimer(hours, mins, sec) {
    var milis = 0;
    hours = Number(hours);
    mins = Number(mins);
    sec = Number(sec);

    milis = sec*1000;
    milis += mins*1000*60;
    milis += hours*1000*60*60;

    setTimeout( () => {
        var audio = new Audio();
        audio.src = "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a";
        audio.play();
    }, milis);
} 

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == 'timer') {
        addTimer(request.hour, request.minu, request.sec);
    }
    sendResponse();
});


