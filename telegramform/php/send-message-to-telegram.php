<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
if (!empty($_POST['name']) && !empty($_POST['email'])){
        // if (isset($_POST['theme'])) {
        //     if (!empty($_POST['theme'])){
        //         $theme = strip_tags($_POST['theme']);
        //         $themeFieldset = "Site: ";
        //     }
        // }

        if (isset($_POST['name'])) {
            if (!empty($_POST['name'])){
                $name = strip_tags($_POST['name']);
                $nameFieldset = "From: ";
            }
        }

        if (isset($_POST['email'])) {
            if (!empty($_POST['email'])){
                $email = strip_tags($_POST['email']);
                $emailFieldset = "Email: ";
            }
        }
        if (isset($_POST['message'])) {
            if (!empty($_POST['message'])){
                $message = strip_tags($_POST['message']);
                $messageFieldset = "";
            }
        }

$token = "341544364:AAGJRY-kAkEXtJEbZXCvtDHbEIMuQYsUvGk";
$chat_id = "-228479836";
$arr = array(
    // $themeFieldset => $theme,
  $nameFieldset => $name,
  $emailFieldset => $email,
  $messageFieldset => $message
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {

  echo '<p class="success">Спасибо за отправку вашего сообщения!</p>';
    return true;
} else {
  echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
}
} else {
  echo '<p class="fail">Ошибка. Вы заполнили не все обязательные поля!</p>';
}
} else {
header ("Location: /");
}

?>
