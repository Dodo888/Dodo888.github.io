/**
 * Created by smirs on 10.12.2015.
 */

var count = 0;
var images = ["ferrari", "fi", "lotus", "manor", "mclaren", "mercedes", "redbull", "sauber", "tororosso", "williams"];
var current = "";
var isFullSize = false;
$(document).ready(function(){
    update();
});

function closephoto () {
    isFullSize = false;
    $(".modal").css("opacity", "0");
    update();
    $(current).removeAttr("style");
    $(current).click(fullsize(current));
    $(".arrow").css("color", "#000");
    $(".loading").hide();
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
    if (isFullSize)
    {
        fullsize(current);
    }
}

function next () {
    count++;
    count = count % images.length;
    update();
    if (isFullSize)
    {
        fullsize(current);
    }
}

function fullsize (className) {
    isFullSize = true;
    $(".modal").css("opacity", "1");
    $(".loading").show();
    $(".closing").show();
    current = className;
    var image = $(className).children().first();
    image.hide();
    var src = image.attr("src");
    image.attr("src", (src.replace("small", "big")));
    $(className).css({"width": "100%", "height": "100%", "position": "fixed", "top": "0", "left": "0",
        "display": "flex", "align-items": "center", "justify-content": "center", "overflow": "hidden", "z-index": "2"});
    $(className).removeAttr("onclick");
    $(".arrow").css("color", "#fff");
    image.load(function () {
        $(".loading").hide();
        image.show();
    });
}