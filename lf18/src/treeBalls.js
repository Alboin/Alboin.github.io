/*function reverseAnimation(element, id) {
  if($(element).attr("data-value") == 0) {
    $(element).attr("data-value", 1)
    .css("animation-duration", "1s")
    .css("animation-name", "fillScreen" + id + "1")
    .css("animation-play-state", "running")
    .css("animation-direction", "normal");
  } else {
    $(element).attr("data-value", 0)
    .css("animation-duration", "0.5s")
    .css("animation-direction", "reverse")
    .css("animation-name", "fillScreen" + id + "2");
  }
}*/

function openBall(element, id) {
  $(element).attr("data-value", 1)
  .css("animation-duration", "1s")
  .css("animation-name", "fillScreen" + id + "1")
  .css("animation-play-state", "running")
  .css("animation-direction", "normal");
}

function closeBall(id) {
  $("#ball1").attr("data-value", 0)
  .css("animation-duration", "0.5s")
  .css("animation-direction", "reverse")
  .css("animation-name", "fillScreen" + id + "2");
  console.log(id + " closed!");
}

function addBall(id, x, y, r, unit) {
  $(":root").css("--pos" + id, x + unit + y + unit).css("--rad" + id, r + unit);

  var html = "<div id='ball" + id + "' class='treeBall' data-value=0></div>";
  $("body").append(html);
  $("#ball" + id).css("animation-name", "fillscreen" + id + "1");
  $("#ball" + id).css("clip-path", "circle(" + r + unit + " at " + x + unit + " " + y + unit + ")");
  $("#ball" + id).on("click", function() {
    openBall(this, id);
    //reverseAnimation(this, id);
  });

  /*$.get("ball1.html", function(data) {
    $(this).children("#ball" + id).html(data);
  });*/

  $.get("ball1.html", function(html_string)
   {
      $("#ball" + id).html(html_string);
   },'html');

  var ss = document.styleSheets[0];
  //ss.insertRule("div { opacity: 0.8; }", 1);

  //$("@fillScreen").css("from", "")
}

addBall(1, 30, 30, 4, "%");
//addBall(2, 30, 60, 4, "%");
//addBall(3, 60, 30, 4, "%");
//addBall(4, 60, 60, 4, "%");

$(window).on("load", function(){

  $(".exit").delay(1000).on("click", function() {
    console.log("hej");
    closeBall(1);
  });
});
