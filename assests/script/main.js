$(window).on("load", function () {
  pizzaLoader();
});
$(document).ready(function () {
  //on load banner text  animation
  $("#preloader").fadeOut("slow", function () {
    $(this).remove();
    $("body").removeClass("autoScroll");
  });
  $(".logo").removeClass("onLoad");

  $(".nav-mobile-icon").click(function () {
    $(this).toggleClass("active");
    $("#navbar-text").toggleClass("show_list");
    $("#navbar-text").fadeIn();
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 80) {
      $(".nav").addClass("affix");
    } else {
      $(".nav").removeClass("affix");
    }
  });
});
function pizzaLoader() {
  var Currentcount = 0;
  $("#pizza").children("g").css("opacity", "0");
  var sliceCount = $("#pizza").children("g").length;
  var loaderTimer = setInterval(() => {
    if (Currentcount <= sliceCount) {
      Currentcount++;
      $("#pizza")
        .children("g:nth-child(" + Currentcount + ")")
        .css("opacity", "1");
    } else {
      Currentcount = 0;
      $("#pizza").children("g").css("opacity", "0");
    }
  }, 200);
}
