$(document).ready(function(){
    var btnNext = $('#btnNext').select();
    var question0 = $('#question0').select();
    var question1 = $('#question1').select();
    var question2 = $('#question2').select();
    var question3 = $('#question3').select();
    var question4 = $('#question4').select();
    var results = $('#results').select();
    var progress = $('.progress').select();
    var index = 0;
    var curQuestion;
    
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
                break;
            default:
                break;
        }
        index++;
        curQuestion = index + 1;
        progress.text("Question " + curQuestion + " of 5");
    })
});