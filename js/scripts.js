$(document).ready(function() {

  $(".m-box").addClass("m-box");

  //Hidden on page load
  $("#design-content").addClass("dropdown hidden");
  $("#content-box").addClass("content-box");

  //Dropdown hide/show for main menu
  $("#design").click(function() {
    $("#design-content, #develop, #delight, #logo, .empty").slideToggle("hidden");
  });
  // $("#develop").click(function() {
  //   $("#develop-content").toggleClass("dropdown");
  //   $("#design, #delight, #logo, .empty").slideToggle("hidden");
  // });
  // $("#delight").click(function() {
  //   $("#delight-content").toggleClass("dropdown");
  //   $("#develop, #design, #logo, .empty").slideToggle("hidden");
  // });
  // Animations
  // $("#box-container").addClass("m-scene");
  // $("#logo").addClass("scene__element scene__element--fadeinup");
});
