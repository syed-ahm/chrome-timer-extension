$(document).ready(function(){
    $("#send").click(function(){
        chrome.runtime.sendMessage({
            type:"timer",
            minu: $("#min").val(),
            sec: $("#sec").val(),
            hour: $("#hour").val()
        })
    })
});