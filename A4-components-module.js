//ASSIGNMENT 4 WEB COMPONENTS
//MODULE FILE
//IN THIS FILE YOU WILL CREATE YOUR CUSTOM MODULE FOR YOUR REQUIRED FUNCTIONALITY AND EXPOSE IT THROUGH A 'PUBLICLY' ACCESSIBLE METHOD.

var humberClockNs = (function(){  
    var timeString;
    var timeStart = function() {
        var today = new Date();
        var h = addZero(today.getHours());
        var m = addZero(today.getMinutes());
        var s = addZero(today.getSeconds());
        timeString = h+" : "+m+" : "+s;
        document.getElementById('time').innerHTML = timeString;
        setTimeout(timeStart, 500);
    }
    function addZero(value){
        if (value < 10) {value = "0" + value};
        return value;
    }
    var clockModule = {
        start: timeStart
    };
    return clockModule;
})();









// var date = new Date();
//     var hrs = addZero(date.getHours());
//     var min = addZero(date.getMinutes());
//     var sec = addZero(date.getSeconds());
//     function addZero(value) {
//         if (value < 10) {value = "0" + value}; 
//         return value;
//     };  
//     var clockModule = {
//         hours: hrs,
//         minutes: min,
//         seconds: sec
//     };
//     return clockModule;