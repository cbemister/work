//CHRYSLER CALL TRACKING CUSTOMIZATION
$(function () {
	
	//HEADER PHONE REPLACEMENT
	var $phoneCTA = $('a.ddc-btn-nav.btn-call')[0].outerHTML
	$('li.tel.phone1 a.btn.ddc-btn.btn-success.ddc-btn-success').replaceWith($phoneCTA);

	//LIVE CHAT BUTTON TRANSITION
	var chatExpanded = false;

	$('a.btn-call').on('click', function () {

		if (!chatExpanded) {

			//$('div#iconInvite_597EA604-F7F3').css('bottom', '231px');

			$('div#iconInvite_597EA604-F7F3').animate({
				bottom: 231
			}, 375, function () {
				// Animation complete.
			});

			chatExpanded = true;

		} else {

			$('div#iconInvite_597EA604-F7F3').animate({
				bottom: 0
			}, 250, function () {
				// Animation complete.
			});

			chatExpanded = false;
		}

	});

});
