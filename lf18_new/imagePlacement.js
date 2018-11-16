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

  $(".gallery").css("max-width", "98%");
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

  $(".gallery").css("max-width", "46%");
}

//Fixar så att bilden på generalerna byter plats beroende på skärmstorlek.
$(window).resize(function() {
  if(window.innerWidth < 430) {
    insertImgSmall();
  } else {
    insertImgLarge();
  }
});
$(window).load(function() {
  if(window.innerWidth < 430) {
    insertImgSmall();
  } else {
    insertImgLarge();
  }
});
