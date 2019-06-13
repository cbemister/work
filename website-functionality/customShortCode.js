

// DESKTOP --- REPLACE SHORTCODE WITH LOCAL PHONE NUMBER

jQuery(window).on("load", function() {

	(function(){

		var shortCode = '[Company Phone]';
		var localNumber = '204.786.3811';
		
		var featuredPhoneNumberDiv = jQuery('dl#activeStaff-item').find('dd.phone');
		var featuredPhoneNumberText = featuredPhoneNumberDiv.text();

		replacePhoneNumber(featuredPhoneNumberDiv, featuredPhoneNumberText);

		// STAFF LIST

		jQuery('.staff').each(function() {

			var phoneNumberDiv = jQuery(this).find('dd.phone');
			var phoneNumberText = phoneNumberDiv.text()

			replacePhoneNumber(phoneNumberDiv, phoneNumberText);

		});

		function replacePhoneNumber(div, text) {
			if (text.includes(shortCode)) {
				var updatedText = div.text().replace(shortCode, localNumber);
				
				div.text(updatedText);
			}
		}

	 }())

});


// MOBILE --- REPLACE SHORTCODE WITH LOCAL PHONE NUMBER

jQuery(window).on("load", function() {


	(function(){
		
		var shortCode = '[Company Phone]';
		var localNumber = '204.786.3811';

		jQuery('.staff-member').each(function(){

			var staffMemberDiv = jQuery(this).find('dd.phone a');
			var staffMemberHref = staffMemberDiv.attr('href');

			if (staffMemberHref && staffMemberHref.includes(shortCode)) {

				// Update Href
				var updatedHref = staffMemberHref.replace(shortCode, localNumber);
				staffMemberDiv.attr('href', updatedHref);

				// Update Text
				var staffMemberText = jQuery(staffMemberDiv).text();
				var updatedText = staffMemberText.replace(shortCode, localNumber);

				jQuery(staffMemberDiv).text(updatedText);
				jQuery(staffMemberDiv).prepend('<i class="ddc-icon ddc-icon-call ddc-icon-size-xlarge"></i>')

			} 

		});

	 }())
	
});
