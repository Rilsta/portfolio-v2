$(document).ready(function() {

  //intro animation
  $("#design").addClass("m-box clickable m-box--colorchange-one");
  $("#develop").addClass("m-box clickable m-box--colorchange-two");
  $("#delight").addClass("m-box clickable m-box--colorchange-three");
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
  $("#rr-content").addClass("rr-content hidden");
  $("#wf-content").addClass("wf-content hidden");
  $("#pt-content").addClass("pt-content hidden");

  //Preload
  $("#self-image").addClass("self-image");
  $("#proj-links-ch, #proj-links-se, #proj-links-lb, #proj-links-rr").addClass("proj-links");

  $("#wf, #pt, #mu, #ch, #se, #lb, #rr").addClass("thumbnail");
  $("#ph").addClass("placeholder")
  $("#wf").addClass("thumbnail-image-wf");
  $("#pt").addClass("thumbnail-image-pt");
  $("#mu").addClass("thumbnail-image-mu");
  $("#ch").addClass("thumbnail-image-ch");
  $("#se").addClass("thumbnail-image-se");
  $("#lb").addClass("thumbnail-image-lb");
  $("#rr").addClass("thumbnail-image-rr");
  $("#wf--overlay, #pt--overlay, #mu--overlay, #ch--overlay, #se--overlay, #lb--overlay, #rr--overlay").addClass("overlay");
  // $("#skill-list-box").addClass("skill-list-box");

  //Dropdown hide/show for main menu
  $("#design").click(function() {
    $("#design-content, #develop, #delight, #logo, .empty, #ext-links").slideToggle("hidden");
  });
  $("#develop").click(function() {
    $("#develop-content, #design, #delight, #logo, .empty, #ext-links").slideToggle("hidden");
  });
  $("#delight").click(function() {
    $("#delight-content, #design, #develop, #logo, .empty, #ext-links").slideToggle("hidden");
  });

  $("#wf").click(function() {
    $("#design, #pt, #wf-content").slideToggle("hidden");
  });
  $("#pt").click(function() {
    $("#design, #wf, #pt-content").slideToggle("hidden");
  });

  $("#ch").click(function() {
    $("#develop, #se, #lb, #rr, #ch-content").slideToggle("hidden");
  });
  $("#se").click(function() {
    $("#develop, #ch, #lb, #rr, #se-content").slideToggle("hidden");
  });
  $("#lb").click(function() {
    $("#develop ,#ch, #se, #rr, #lb-content").slideToggle("hidden");
  });
  $("#rr").click(function() {
    $("#develop ,#ch, #se, #lb, #rr-content").slideToggle("hidden");
  });
});
