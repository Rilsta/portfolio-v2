$(document).ready(function() {

  //intro animation
  $("#design").addClass("m-box m-box--colorchange-one");
  $("#develop").addClass("m-box m-box--colorchange-two");
  $("#delight").addClass("m-box m-box--colorchange-three");
  $("#logo").addClass("m-box m-box--colorchange-four");
  $("#empty-five").addClass("m-box m-box--colorchange-five empty flex-top");
  $("#empty-six").addClass("m-box m-box--colorchange-six empty");
  $("#ext-links").addClass("m-box m-box--colorchange-seven");

  //removeClass intro animation delay
  setTimeout(function() {
    $("#design").removeClass("m-box--colorchange-one");
  }, 2000);
  setTimeout(function() {
    $("#develop").removeClass("m-box--colorchange-two");
  }, 2500);
  setTimeout(function() {
    $("#delight").removeClass("m-box--colorchange-three");
  }, 3000);
  setTimeout(function() {
    $("#logo").removeClass("m-box--colorchange-four");
  }, 3500);
  setTimeout(function() {
    $("#empty-five").removeClass("m-box--colorchange-five");
  }, 4000);
  setTimeout(function() {
    $("#empty-six").removeClass("m-box--colorchange-six");
  }, 4500);
  setTimeout(function() {
    $("#ext-links").removeClass("m-box--colorchange-seven");
  }, 5000);

  //Hidden on page load
  $("#design-content").addClass("dropdown hidden");
  $("#develop-content").addClass("dropdown hidden");
  $("#delight-content").addClass("dropdown hidden");
  $("#ch-content").addClass("ch-content hidden");
  $("#se-content").addClass("se-content hidden");
  $("#lb-content").addClass("lb-content hidden");

  //Preload
  $("#self-image").addClass("self-image");

  //Design tab class additions
  $("#wf, #pt, #mu, #ch, #se, #lb").addClass("content-box");
  $("#wf").addClass("box-image-wf");
  $("#pt").addClass("box-image-pt");
  $("#mu").addClass("box-image-mu");
  $("#ch").addClass("box-image-ch");
  $("#se").addClass("box-image-se");
  $("#lb").addClass("box-image-lb");
  $("#wf--overlay, #pt--overlay, #mu--overlay, #ch--overlay, #se--overlay, #lb--overlay").addClass("overlay");
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
  $("#ch").click(function() {
    $("#develop, #se, #lb, #ch-content, #ext-links").slideToggle("hidden");
  });
  $("#se").click(function() {
    $("#develop, #ch, #lb, #se-content, #ext-links").slideToggle("hidden");
  });
  $("#lb").click(function() {
    $("#develop ,#ch, #se, #lb-content, #ext-links").slideToggle("hidden");
  });
});
