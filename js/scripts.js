$(document).ready(function() {

  $(".m-box").addClass("m-box");

  $("#design").click(function() {
    $("#design-content").toggleClass("dropdown");
    $("#develop, #delight, #logo, .empty").toggle("hidden");
  });
  $("#develop").click(function() {
    $("#develop-content").toggleClass("dropdown");
    $("#design, #delight, #logo, .empty").toggle("hidden");
  });
  $("#delight").click(function() {
    $("#delight-content").toggleClass("dropdown");
    $("#develop, #design, #logo, .empty").toggle("hidden");
  });
  // Animations
  // $("#box-container").addClass("m-scene");
  // $("#logo").addClass("scene__element scene__element--fadeinup");
});
