$(document).ready(function(){
   $(".button-1").click(function(){
      if($("#enquireform").css("display") == "none"){
         $("#enquireform").show();
      } else {
         $("#enquireform").hide();
      }
   });

   $(".button-richard").click(function(){
      if($("#reveal-richard").css("display") == "none"){
         $("#reveal-richard").show();
      } else {
         $("#reveal-richard").hide();
      }
   });
   $(".button-nick").click(function(){
      if($("#reveal-nick").css("display") == "none"){
         $("#reveal-nick").show();
      } else {
         $("#reveal-nick").hide();
      }
   });
   $(".button-annie").click(function(){
      if($("#reveal-annie").css("display") == "none"){
         $("#reveal-annie").show();
      } else {
         $("#reveal-annie").hide();
      }
   });
});

// then how to give a pop up saying thanks, we will get back to you.
//
//    $("submit").click(function(){
//         alert("Thank you for your enquiry. We aim to get back to all enquiries within 24hrs, so hold tight and let us work our magic");
//       }
//    });
// });

console.log("testing");
