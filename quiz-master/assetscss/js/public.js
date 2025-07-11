jQuery(document).ready(function($) {
    // Quiz timer functionality
    let timeLeft = quizMaster.time_limit * 60;
    const timer = setInterval(function() {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        
        $('#quiz-timer').text(
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        );
        
        if(timeLeft <= 0) {
            clearInterval(timer);
            $('#quiz-form').submit();
        }
    }, 1000);

    // Prevent tab closing
    window.addEventListener('beforeunload', function(e) {
        if($('#quiz-form').length) {
            e.preventDefault();
            return e.returnValue = 'Are you sure you want to leave? Your progress will be lost.';
        }
    });

    // Answer selection
    $('.quiz-answer input').on('change', function() {
        $(this).closest('.quiz-question').find('.selected').removeClass('selected');
        $(this).closest('.answer-option').addClass('selected');
    });
});