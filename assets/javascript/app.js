$(document).ready(function () {

$('#qAndA').hide();
    var interval;

    function countdown() {
        clearInterval(interval);
        interval = setInterval(function () {
            var timer = $('#timer').html();
            timer = timer.split(':');
            var minutes = timer[0];
            var seconds = timer[1];
            seconds -= 1;
            if (minutes < 0) return;
            else if (seconds < 0 && minutes != 0) {
                minutes -= 1;
                seconds = 59;
            }
            else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

            $('#timer').html(minutes + ':' + seconds);

            if (minutes == 0 && seconds == 0) clearInterval(interval);
        }, 1000);
    }

    $('#timer').click(function () {
        $('#timer').text("2:00");
        countdown();
        $('#qAndA').show()
    });
});




