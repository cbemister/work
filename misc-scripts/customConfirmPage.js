$(window).load(function(){	
setFormConfirmationPage();	
});	


$(document).ready(function() {
//    console.log('referrer['+ referrer +']');
    queryFrom = document.location.search;
    if (queryFrom.indexOf('grandopening') > -1 ) {
		$('h1.ddc-page-title').text('Your RSVP has been received!');
		$('.confirm-default.ddc-content > p:first-child').text('Thank you for confirming your attendance to our Grand Opening on Thursday, May 10th.');	
    }
});

