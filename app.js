var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: '',
    }
});

var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var timeID = setInterval(updateTime,1000);

updateTime ();

function updateTime () {
    var cd = new Date();
    clock.time = 
        zeroPadding(cd.getHours(), 2)+':'+
        zeroPadding(cd.getMinutes(), 2)+':'+
        zeroPadding(cd.getSeconds(), 2);

    clock.date =
        week[cd.getDay()]+' '+ 
        zeroPadding(cd.getDate(), 2)+'/'+
        zeroPadding(cd.getMonth()+1, 2)+'/'+
        zeroPadding(cd.getFullYear(), 4)
    ;
};

function zeroPadding(num, digit){
    var zero = '';
    for (var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}