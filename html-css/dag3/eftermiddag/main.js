$(document).ready(function(){
    $(".hiddenContent").hide();
    $("article").click(function(){
      $(".hiddenContent").toggle();
    });
  });