$(document).ready(function() {

  $(".m-box").addClass("m-box");

  //Hidden on page load
  $("#design-content").addClass("dropdown hidden");
  $("#develop-content").addClass("dropdown hidden");
  $("#delight-content").addClass("dropdown hidden");
  $("#content-box").addClass("content-box");
  $("#self-image").addClass("self-image");

  //Dropdown hide/show for main menu
  $("#design").click(function() {
    $("#design-content, #develop, #delight, #logo, .empty").slideToggle("hidden");
  });
  $("#develop").click(function() {
    $("#develop-content, #design, #delight, #logo, .empty").slideToggle("hidden");
  });
  $("#delight").click(function() {
    $("#delight-content, #design, #develop, #logo, .empty").slideToggle("hidden");
  });
  // Animations
  // $("#box-container").addClass("m-scene");
  // $("#logo").addClass("scene__element scene__element--fadeinup");
});
