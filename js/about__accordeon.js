$(document).ready(function() {

    $('.accordeon__item-title').click(function() {
        if (!$(this).parent().hasClass('accordeon__item--active')) {
            $('.accordeon__item').removeClass('accordeon__item--active').children('.accordeon__item-desc').slideUp(400).fadeOut(400);

            $(this).next('.accordeon__item-desc').slideDown(400).fadeIn(400);

            $(this).parent().addClass('accordeon__item--active');
        } else {
            $(this).parent().removeClass('accordeon__item--active').children('.accordeon__item-desc').slideUp(400).fadeOut(400);
        }
    });
});
