$(document).ready(function() {
  
  var menu = $(".nav-container .nav");
  $(".sub-button").click(function() {
    var subMenu = $(this).siblings("ul");
    subMenu.show();

    menu.animate({
      "margin-left" : "-="+menu.width()+"px"
    }, 'linear');

  });
  
  var backButton = $(".nav-container .nav li.title > .go-back");

backButton.click(function() {
    var subMenu = $(this).parent().parent();
    menu.animate({
      "margin-left" : "+="+menu.width()+"px"
    }, "linear", function() {
        subMenu.hide();
    });
  });

  $("#main-menu #about").click(function() {
    $("#main-menu #about").hide();
    $(".nav-container").show();
    $(".nav-dropdown ul").each(function() {
    });

  });


$(".page").click(function() {
  var title = $(this).text();
   $("#main-menu").hide();
    $("p.page-title").replaceWith("<p class='page-title'>" + title + "</p>");
    $("#hamburger").show();
  $("#menu-button-x").hide();
});

$("#hamburger").click(function() {
  $("#main-menu").toggle();
  $("#hamburger").hide();
  $("#menu-button-x").show();
});

$("#menu-button-x").click(function() {
  $("#main-menu").toggle();
  $("#hamburger").show();
  $("#menu-button-x").hide();
});


$("#back-to-main").click(function() {
  $("#main-menu #about").show();
  $(".nav-container").hide();
});


});
