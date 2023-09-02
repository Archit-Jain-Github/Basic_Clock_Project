let a;
let date;
let day;
let time;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
setInterval(() => {
    setInterval
        a = new Date();
        date = a.getDate() + "/" + (a.getMonth()+1)+ "/" + a.getFullYear();
        day = weekday[a.getDay()];
        time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();

        document.getElementById('time').innerHTML = time ;
        document.getElementById('day').innerHTML = day ;
        document.getElementById('date').innerHTML = date ;
}, 1000);