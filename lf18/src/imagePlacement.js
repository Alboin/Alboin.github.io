function insertImgSmall()
{
  $("#gallery-div").html('').append('<img class="gallery" src="img/luciafesten-bilder/trumpet-gyckel.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/sittning.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/julgran.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/ksg-cykel.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/luciatag.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/ksg-korthus.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/blaset-sång.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/luciafest-publik.jpg">');

  $(".gallery").css("max-width", "500px");
}

function insertImgLarge()
{
  $("#gallery-div").html('').append('<img class="gallery" src="img/luciafesten-bilder/trumpet-gyckel.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/sittning.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/ksg-cykel.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/julgran.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/luciatag.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/ksg-korthus.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/blaset-sång.jpg">')
  .append('<img class="gallery" src="img/luciafesten-bilder/luciafest-publik.jpg">');

  $(".gallery").css("max-width", $(".panel-default").innerWidth()/2.1 - 20 + "px");
}

//Fixar så att bilden på generalerna byter plats beroende på skärmstorlek.
$(window).resize(function() {
  if(window.innerWidth < 430)
  {
    $(".generalerna").insertAfter("#generalerNamn").css("margin", "auto");
    $("h4.box-header").css("font-size", "1.5em");
    insertImgSmall();
  }
  else
  {
    $(".generalerna").insertBefore("#generalerText").css("margin", "10px");
    $("h4.box-header").css("font-size", "1.9em");
    insertImgLarge();
  }
});
$(window).load(function() {
  if(window.innerWidth < 430)
  {
    $(".generalerna").insertAfter("#generalerNamn").css("margin", "auto");
    $("h4.box-header").css("font-size", "1.5em");
    insertImgSmall();
  }
  else
  {
    $(".generalerna").insertBefore("#generalerText").css("margin", "10px");
    $("h4.box-header").css("font-size", "1.9em");
    insertImgLarge();
  }
});
