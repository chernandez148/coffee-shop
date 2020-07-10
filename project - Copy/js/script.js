	$(document).ready(function(){
    $('#box').click(function() {
      $('.gallery').css("display", "block");
      $('body').css("overflow", "hidden");	  
    });
});

	$(document).ready(function(){
    $('button').click(function() {
      $('.gallery').css("display", "none");
      $('body').css("overflow", "auto");	  
    });
});
        