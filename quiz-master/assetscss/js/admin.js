jQuery(document).ready(function($) {
    // Quiz management functionality
    $('#add-quiz-btn').on('click', function() {
        // Add new quiz form logic
        console.log('Adding new quiz');
    });

    // Timer settings
    $('.timer-settings').on('change', function() {
        let minutes = $(this).val();
        $('#time-preview').text(minutes + ' minutes');
    });

    // Save quiz via AJAX
    $('.save-quiz').on('click', function(e) {
        e.preventDefault();
        let quizData = $('#quiz-form').serialize();
        
        $.ajax({
            url: ajaxurl,
            type: 'POST',
            data: {
                action: 'save_quiz',
                data: quizData,
                nonce: quizMasterAdmin.nonce
            },
            success: function(response) {
                if(response.success) {
                    alert('Quiz saved successfully!');
                }
            }
        });
    });
});