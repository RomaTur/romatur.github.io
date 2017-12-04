$(document).ready(function () {
    $(".form-element").submit(function (event) {
        // event.prventDeault();
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        var message = $(formNm).find(".form__modal");
        var formTitle = $(formNm).find(".form-title");

        var url = './php/send-message-to-telegram.php';
        var data = formNm.serialize();

        var request = $.ajax({
            type: "POST",
            url: url,
            data: data
        });

        request.done(function (data) {
          // Вывод сообщения об успешной отправке
            funcAfterTelegramForm(true, data, message, formNm);
            console.log(data);
        });
        request.fail(function (jqXHR, textStatus) {
            // Вывод сообщения об ошибке отправки
            funcAfterTelegramForm(false, data, message, formNm);
            console.log(data);
        });
        return false
    });

});
