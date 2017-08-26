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

    function submitAnswers(){
        var totalQuestions = 7;
        var score = 0;
        var q1 = document.forms["quizForm"]["option1"].value;
        var q2 = document.forms["quizForm"]["option2"].value;
        var q3 = document.forms["quizForm"]["option3"].value;
        var q4 = document.forms["quizForm"]["option4"].value;
        var q5 = document.forms["quizForm"]["option5"].value;
        var q6 = document.forms["quizForm"]["option6"].value;
        var q7 = document.forms["quizForm"]["option7"].value;
        alert(q1);
        alert(q2);
        alert(q3);
        alert(q4);
        alert(q5);
        alert(q6);
        alert(q7)
    }

});




