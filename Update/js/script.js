$(document).ready(function() {

  $(".button-1").click(function() {
    if ($("#enquireform").css("display") == "none") {
      $("#enquireform").show();
    } else {
      $("#enquireform").hide();
    }
  });
  $(".button-2").click(function() {
    if ($("#enquireform").css("display") == "none") {
      $("#enquireform").show();
    } else {
      $("#enquireform").hide();
    }
  });
  $(".hamburger").click(function() {
    if ($("#mobile").css("display") == "none") {
      $("#mobile").show();
    } else {
      $("#mobile").hide();
    }
  });
});

console.log("testing");
