function addSnow() {
  $(".snowFlake").remove();
  var counter = 0;
  for(var i = 0; i < 100; i++) {
    $("body").delay(100).queue(function(next) {
      var pos = Math.random() * $(this).width();
      var duration = Math.random() * 8 + 4;
      var size = Math.random() * 4 + 4;
      var html = "<div id='flake" + counter + "' style='left:" + pos + "px; animation-duration: " + duration + "s; width: " + size + "px; height: " + size + "px;' class='snowFlake'></div>";
      counter = counter + 1;
      $(this).append(html);
      next();
    });

  }
}

$("body").on("click", addSnow());
