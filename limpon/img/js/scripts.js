/* Menu - Popup - hamburger*/
$(document).ready(function() {
  $(".header__navigation_mob").click(function() {
    $(".overlay").fadeIn();
  });
  $(".overlay" || ".popup-close").click(function() {
    $(".overlay").hide();
  });
});

/* <section class="team"> */
$(document).ready(function() {
  $(".ricardo__social").click(function() {
    $(".ricardo__social").hide();
    $(".ricardo__hide").fadeIn();
  });
  $(".alberto__social").click(function() {
    $(".alberto__social").hide();
    $(".alberto__hide").fadeIn();
  });
  $(".thomas__social").click(function() {
    $(".thomas__social").hide();
    $(".thomas__hide").fadeIn();
  });
});