$(document).ready(function(){
    var btnNext = $('#btnNext');
    disableNextButton();
    
    var question0 = $('#question0');
    var question1 = $('#question1');
    var question2 = $('#question2');
    var question3 = $('#question3');
    var question4 = $('#question4');
    var results = $('#results');
    var progress = $('.progress');
    var index = 0;
    var curQuestion;
    var userSubmissions = {
        submission0:'',
        submission1:'',
        submission2:'',
        submission3:'',
        submission4:''
    };
    // listen for radio button selection & enable "next" button
    $('input').click(function(event){
        // this will overwrite any previous values; we'll always have the current/latest value when user clicks "next"
        userSubmissions['submission' + index] = event.currentTarget.getAttribute('value');
        enableNextButton();
    });
    
    btnNext.click(function(){
        switch (index) {
            case 0:
                question0.addClass('hidden');
                question1.removeClass('hidden');
                break;
            case 1:
                question1.addClass('hidden');
                question2.removeClass('hidden');
                break;
            case 2:
                question2.addClass('hidden');
                question3.removeClass('hidden');
                break;
            case 3:
                question3.addClass('hidden');
                question4.removeClass('hidden');
                break;
            case 4:
                question4.addClass('hidden');
                results.removeClass('hidden');
                btnNext.addClass('hidden');
                progress.addClass('hidden');
                getScore();
                break;
            default:
                break;
        }
        disableNextButton();
        index++;
        curQuestion = index + 1;
        progress.text("Question " + curQuestion + " of 5");
    });
    
    function enableNextButton() {
        btnNext.prop('disabled', false);
    }
    
    function disableNextButton() {
        btnNext.prop('disabled', true);
    }
    
    function getScore() {
        var numCorrect = 0;
        if ('value1' == userSubmissions.submission0) {
            numCorrect++;
        } else {
            $('#review').append('<li>You missed Question 1: Is JavaScript compiled or interpreted? Correct answer: Interpreted</li>');
        }
        
        if ('value0' == userSubmissions.submission1) {
            numCorrect++;
        } else {
            $('#review').append('<li>You missed Question 2: In JavaScript, what is the result of [] + []? Correct answer: ""</li>');
        }
        
        if ('value2' == userSubmissions.submission2) {
            numCorrect++;
        } else {
            $('#review').append('<li>You missed Question 3: In JavaScript, what is the result of [] + {}? Correct answer: [object Object]</p>');
        }
        
        if ('value0' == userSubmissions.submission3) {
            numCorrect++;
        } else {
            $('#review').append('<li>You missed Question 4: In JavaScript, what is the result of {} + []? Correct answer: 0</p>');
        }
        
        if ('value3' == userSubmissions.submission4) {
            numCorrect++;
        } else {
            $('#review').append('<li>You missed Question 5: In JavaScript, what is the result of {} + {}? Correct answer: NaN</p>');
        }
        var score = numCorrect * 20;
        var txtScore = "Your Score: " + score;
        $('#score').text(txtScore);
    }
});

