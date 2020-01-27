jQuery(document).ready(function(){              
$('.collapse').on('shown.bs.collapse', function(){
	$(this).parent().find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
	setTimeout(function() {
	    $('.collapse').removeClass('show');
	    $('.card-header').addClass('collapsed');
	    $('.fas').removeClass('fa-angle-down').addClass('fa-angle-right');
	}, 30000); // accordeon will close in some seconds
}).on('hidden.bs.collapse', function(){
	$(this).parent().find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right');
});

// setTimeout(function() {
//     $('#accordion').fadeOut('fast');
// }, 1000); 
// setTimeout(function() {
//     $('#accordion').fadeIn('slow');
// }, 3000);

// if(shown.bs.collapse){
// 	setTimeout(function() {
//     $('').fadeOut('fast');
// }, 1000);
// }

});