function reverseAnimation(element, id) {
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
}

function addBall(id, x, y, r, unit) {
  $(":root").css("--pos" + id, x + unit + y + unit).css("--rad" + id, r + unit);

  var html = "<div id='ball" + id + "' class='treeBall' data-value=0></div>";
  $("body").append(html);
  $("#ball" + id).css("animation-name", "fillscreen" + id + "1");
  $("#ball" + id).css("clip-path", "circle(" + r + unit + " at " + x + unit + " " + y + unit + ")");
  $("#ball" + id).on("click", function() {
    reverseAnimation(this, id);
  });

  /*$.get("ball1.html", function(data) {
    $(this).children("#ball" + id).html(data);
  });*/
  $("#ball" + id).load("ball1.html");

  var ss = document.styleSheets[0];
  //ss.insertRule("div { opacity: 0.8; }", 1);

  //$("@fillScreen").css("from", "")
}

addBall(1, 30, 30, 4, "%");
addBall(2, 30, 60, 4, "%");
addBall(3, 60, 30, 4, "%");
addBall(4, 60, 60, 4, "%");

//addBall(1, 20, 30, 10, "%");
//addBall(2, 100, 100, 50, "%");
//addBall(3, 500, 500, 50, "px");
//addBall(4, 1000, 400, 50, "px");
