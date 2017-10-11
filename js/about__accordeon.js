$(document).ready(function() {

    $('ul.akkordeon1 li > p').click(function() {
        if (!$(this).hasClass('active')) {
            $('ul.akkordeon1 li > p').removeClass('active').next('div').slideUp();
            $(this).addClass('active');
            $(this).next('div').slideDown(300);
        } else {
            $(this).removeClass('active').next('div').slideUp();
        }
    });
});
