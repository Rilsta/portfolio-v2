$(document).ready(function() {

  //intro animation
  $("#design").addClass("m-box m-box--colorchange-one");
  $("#develop").addClass("m-box m-box--colorchange-two");
  $("#delight").addClass("m-box m-box--colorchange-three");
  $("#logo").addClass("m-box m-box--colorchange-four");
  $("#empty-five").addClass("m-box m-box--colorchange-five empty");
  $("#empty-six").addClass("m-box m-box--colorchange-six empty");
  $("#ext-links").addClass("m-box m-box--colorchange-seven");
  //Hidden on page load
  $("#design-content").addClass("dropdown hidden");
  $("#develop-content").addClass("dropdown hidden");
  $("#delight-content").addClass("dropdown hidden");
  //Preload
  // $("#content-box").addClass("content-box");
  $("#self-image").addClass("self-image");

  //Design tab class additions
  $("#wf, #pt, #mu, #ch, #se").addClass("content-box");
  $("#wf").addClass("box-image-wf");
  $("#pt").addClass("box-image-pt");
  $("#mu").addClass("box-image-mu");
  $("#ch").addClass("box-image-ch");
  $("#se").addClass("box-image-se");
  $("#wf--overlay, #pt--overlay, #mu--overlay, #ch--overlay, #se--overlay").addClass("overlay");
  $("#skill-list-box").addClass("skill-list-box");

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
});
