/**
 * Created by smirs on 10.12.2015.
 */

var count = 0;
var images = ["ferrari", "fi", "lotus", "manor", "mclaren", "mercedes", "redbull", "sauber", "tororosso", "williams"];
var current = {};
$(document).ready(function(){
    update();
});

function closephoto () {
    $(".modal").css("opacity", "0");
    update();
    current.removeAttr("style");
    $(".closing").hide();
}

function update () {
    var length = images.length;
    $(".image1").html("<img src='Images/small/" + images[count % length] + ".jpg' alt='" + images[count % length] + "'>");
    $(".image2").html("<img src='Images/small/" + images[(count+1)% length] + ".jpg' alt='" + images[(count+1)% length] + "'>");
    $(".image3").html("<img src='Images/small/" + images[(count+2)% length] + ".jpg' alt='" + images[(count+2)% length] + "'>");
    $(".image4").html("<img src='Images/small/" + images[(count+3)% length] + ".jpg' alt='" + images[(count+3)% length] + "'>");
}

function prev () {
    count--;
    count = (count < 0) ? count+images.length : count;
    update();
}

function next () {
    count++;
    count = count % images.length;
    update();
}

function fullsize (className) {
    $(".modal").css("opacity", "1");
    $(".loading").show();
    $(".closing").show();
    current = $(className);
    var image = $(className).children().first();
    image.hide();
    var src = image.attr("src");
    image.attr("src", (src.replace("small", "big")));
    $(className).css({"width": "100%", "height": "100%", "position": "fixed", "top": "0", "left": "0",
    "display": "flex", "align-items": "center", "justify-content": "center", "overflow": "hidden", "z-index": "2"});
    image.load(function () {
        $(".loading").hide();
        image.show();
    });
}