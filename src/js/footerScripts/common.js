$(function(){

    insertAgeAfter('1994-08-08', '.character__text:contains("Возраст: ")');

    vertAccordInit('accordeon__item', 'accordeon__item-content');

//     particlesJS.load('particles-js', 'js/particles-config.json', function() {
//         console.log('callback - particles.js config loaded');
// });
});

let insertAgeAfter = (birthday, elemAfter) => { // ('1994-08-08', '.character__text:contains("Возраст: ")')
    function declOfNum(number, titles) {
        cases = [2, 0, 1, 1, 1, 2];
        return number + " " + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }
    function birthDateToAge(b) {
        var n = new Date(),
            b = new Date(b),
            age = n.getFullYear() - b.getFullYear();
        return n.setFullYear(1972) < b.setFullYear(1972) ? age - 1 : age;
    }
    let myAge = declOfNum(birthDateToAge(birthday), ['', '', '']);
    let ageText = $(elemAfter);
    $('<span id="myAge">'+myAge+'</span>').insertAfter(ageText);
};

var vertAccordInit = (accordeonItem, accordeonItemContent) => {
$('.'+accordeonItem).click(function(event) {
    let targetItem = $(event.target).parents('.'+accordeonItem);
    if (!targetItem.hasClass(accordeonItem + '--active')) {
        $('.'+accordeonItem).removeClass(accordeonItem+'--active').children('.'+accordeonItemContent).slideUp(400);

        targetItem.addClass(accordeonItem + '--active').children('.'+accordeonItemContent).slideDown(400);

    } else {
        targetItem.removeClass(accordeonItem + '--active').children('.'+accordeonItemContent).slideUp(400);
    }
});
}
