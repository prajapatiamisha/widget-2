$(document).ready(function(){
		$('.profile-photo').hover(function() {
 		$(this).addClass('transition');
     }, function() {
 		$(this).removeClass('transition');
     });

     $('.hed-img').hover(function() {
 		$(this).addClass('transition');
     }, function() {
 		$(this).removeClass('transition');
     });
		 $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});


