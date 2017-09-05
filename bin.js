// ///////////////////скетч отображения бинарных чисел/////////////
//
// var bin = function(bin) {
//
//     var binaryVal = ["0", "1"];
//     var fontSize = 25;
//     // var timerGo = true;
//     var binaryTable = [];
//     var positionX = 105;
//     var positionY = 145;
//     var positionYMax = positionY;
//     var strokes = 10;
//     var columns = 10;
//     var alpha = 0;
//
//     ///////////////////////////////////////////////////////////
// //заполнили массив чисел
// for (var i = 0; i < strokes; i++) {
//     binaryTable[i] = [];
//     for (var j = 0; j < columns; j++) {
//         binaryTable[i][j] = binaryVal[Math.floor(Math.random() * binaryVal.length)];
//     }
// }
//     //////////////////////////////////////////////////////////34495e
//
//     var JuraFont;
//
//
//     // console.log(strokes);
//
//
//     bin.preload = function() {
//
//         // AlegreyaSansSCFont = loadFont("../fonts/AlegreyaSansSC-Light.ttf");
//         JuraFont = bin.loadFont("assets/fonts/Jura/Jura-Light.ttf");
//         // NixieOneFont = loadFont("../fonts/NixieOne-Regular.ttf");
//         // ShareFont = loadFont("../fonts/Share-Regular.ttf");
//         document.onmousewheel = document.onwheel = function() {
//             return false;
//         };
//         document.addEventListener("MozMousePixelScroll", function() {
//             return false
//         }, false);
//         document.onkeydown = function(e) {
//             if (e.keyCode >= 33 && e.keyCode <= 40) return false;
//         }
//     }
//
//     bin.setup = function() {
//         bin.createCanvas(bin.windowWidth, bin.windowHeight);
//         bin.background(backgroundColor);
//         bin.textFont(JuraFont);
//         bin.textSize(fontSize);
//
//     }
//
//     bin.draw = function() {
//
//
//         // textFont(AlegreyaSansSCFont);
//
//         // textFont(NixieOneFont);
//         // textFont(ShareFont);
//
//
//         // textAlign(CENTER);
//         bin.clear();
//         // bin.scale(1.5, 1.5);
//         bin.background(backgroundColor);
//         // var millisecond = bin.millis();
//         // bin.fill("black");
//         // bin.text("Milliseconds \nrunning: \n" + millisecond, 5, 40);
//
//         // fill("#006973");
//
//
//
//
//
//
//
//         // bin.rect(0, 0, bin.windowWidth, bin.windowHeight);
//
//         // bin.rect(-(columns - 1) * fontSize + positionX, positionYMax - (strokes * fontSize), (columns - 0.4) * fontSize, fontSize);
//
//
//         bin.translate(bin.windowWidth / 2, bin.windowHeight / 2 - 70);
//
//         bin.fill(themeColor);
//         drawBinary();
//         positionY += 1.2;
//         pushMass();
//
//         bin.noFill();
//         bin.stroke(backgroundColor);
//         bin.strokeWeight(110);
//         bin.triangle(210, 210, -210, 210, 0, -210);
//
//         bin.stroke(themeColor);
//         bin.strokeWeight(1);
//
//         bin.scale(1.2);
//         bin.translate(0, 29);
//         bin.triangle(100, 100, -100, 100, 0, -100);
//         bin.noStroke();
//
//         // bin.blendMode(BLEND);
//
//         bin.frameRate(60);
//
//         var millisecond = bin.millis();
//         if (millisecond >= 2000) {
//             alpha = alpha + 0.02;
//             bin.background("rgba(100%,100%,100%," + alpha + ")");
//             if (alpha >= 1.4) {
//                 //начать анимацию
//                 var head = bin.select('.head');
//                 var headTextBox = bin.select('.headTextBox');
//                 var h1Head = bin.select('.h1Head');
//                 var hrHead = bin.select('.hrHead');
//                 var h2Head = bin.select('.h2Head');
//                 var imgHead = bin.select('.imgHead');
//                 var contentSkew = bin.select('.contentSkew');
//                 var content = bin.select('.content')
//                 head.addClass('headAnimation');
//                 headTextBox.addClass('headTextBoxAnimation');
//                 h1Head.addClass('h1Animation');
//                 hrHead.addClass('hrAnimation');
//                 h2Head.addClass('h2Animation');
//                 imgHead.addClass('headImgAnimation');
//                 contentSkew.addClass('contentSkewAnimation');
//                 content.addClass('contentAnimation');
//
//                 //Разрешение на прокрутку мыши
//                 document.onmousewheel = document.onwheel = function() {
//                     return true;
//                 };
//                 document.addEventListener("MozMousePixelScroll", function() {
//                     return true
//                 }, true);
//                 document.onkeydown = function(e) {
//                     if (e.keyCode >= 33 && e.keyCode <= 40) return true;
//                 }
//                 //////////////////////////////
//
//
//                 bin.remove();
//             }
//         }
//
//
//     }
//
//
//
//     bin.windowResized = function() {
//         bin.resizeCanvas(bin.windowWidth, bin.windowHeight);
//     }
//
//
//     function drawBinary() {
//
//         for (var i = 0; i < strokes; i++) {
//             for (var j = 0; j < columns; j++) {
//
//                 bin.text(binaryTable[i][j], -j * fontSize + positionX, -i * fontSize + positionY);
//             }
//         }
//     }
//
//     function pushMass() {
//
//         if (positionY >= positionYMax + fontSize) {
//             positionY = positionYMax;
//
//             for (var j = 0; j < columns; j++) {
//                 for (var i = 0; i < strokes; i++) {
//
//                     if (i < strokes - 1) {
//                         binaryTable[i][j] = binaryTable[i + 1][j];
//                     } else if (i == strokes - 1) {
//                         binaryTable[i][j] = bin.random(binaryVal);
//                     }
//
//                 }
//             }
//
//         }
//     }
//
//
//
//
// }
//
//
//
// var myp5 = new p5(bin, 'bin');
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

var binaryVal = ["0", "1"];

var binaryTable = [];

var strokes = 10;
var columns = 10;

$('.bin').height($('.editor').height() - $('.tab').height()).width($('.editor').width());
$('body').append('<p>Меня тут не было!</p>');


//заполнили массив чисел
for (var i = 0; i < strokes; i++) {
    binaryTable[i] = [];
    for (var j = 0; j < columns; j++) {
        binaryTable[i][j] = binaryVal[Math.floor(Math.random() * binaryVal.length)];
        $('.bin').text(binaryTable[i][j]);
    }
}

console.log(binaryTable);

$(window).resize(function() {
    $('.bin').height($('.editor').height() - $('.tab').height()).width($('.editor').width());
});





/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
