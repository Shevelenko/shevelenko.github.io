$( document ).ready(function() {
  

  $("#home").click(function(event){
    event.preventDefault();
    $(".contact_div").hide();
    $(".how_it_works_div").hide();
    $(".video_div").show();
  });

  $("#how_it_works").click(function(event){
    event.preventDefault();
    $(".how_it_works_div").show();
    $(".contact_div").hide();
    $(".video_div").hide();
  });

  $("#who_we_are").click(function(event){
    event.preventDefault();
    // $(".video_div").show();
    // $(".contact_div").hide();
  });

  $("#contact").click(function(event){
    event.preventDefault();
    $(".contact_div").show();

    $(".video_div").hide();
    
  });
});