

$(function(){

    insertAgeAfter('1994-08-08', '.character__text:contains("Возраст: ")');

    vertAccordInit('accordeon__item', 'accordeon__item-content');

    //     particlesJS.load('particles-js', 'js/particles-config.json', function() {
    //         console.log('callback - particles.js config loaded');
    // });

    ymaps.ready(init);
    var myMap;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [54.922788, 43.344844],
            zoom: 12
        });
    }

    let mapDiv = $('#map');
    let mapButton = mapDiv.parent();
    mapButton.on('click', function(event){
        event.preventDefault();
        mapDiv.bPopup({
            scrollBar:false,
            onClose: function(){
                mapDiv.appendTo(mapButton);
            }
        });
    });

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

let vertAccordInit = (accordeonItem, accordeonItemContent) => {
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

let funcAfterTelegramForm = (state, data, modalMessage, messageParent) =>{

    if(state){
        // Вывод сообщения об успешной отправке
        modalMessage.html(data);
        messageParent[0].reset();
        modalMessage.bPopup({
            modalClose: false,
            autoClose: 1500,
            scrollBar:false,
            onClose: function(){
                modalMessage.appendTo(messageParent);
            }
        });
    }
    else{
        modalMessage.html(data);
        modalMessage.bPopup({
            modalClose: false,
            autoClose: 1500,
            scrollBar:false,
            onClose: function(){
                modalMessage.appendTo(messageParent);
            }
        });
    }


};
////////////////////////////////
