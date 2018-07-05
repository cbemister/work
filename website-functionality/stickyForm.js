	var ref = document.referrer;
	if (ref.indexOf("crosstown") == -1) {
		jQuery('.page-bd').css('display', 'none');
		jQuery('.container.main').append('<div>This is an exclusive offer for Venngo Members only.  Please visit <a href="http://www.venngo.com/">Venngo</a> for information on becoming a member. </div>');
	} else {
		jQuery(window).one('scroll', function () {
			// executes only once
			jQuery('.ddc-content.contact-form.type-1').prepend('<img src="//pictures.dealer.com/l/lexusontheparktc/1114/78140242032199b772b90fd1c31115acx.jpg" class="wysiwyg-image" tabindex="30000" style="" title="4 to 6% Above Cost"><p>On Select Models OAC, Depending on Availability</p>');
		});
		jQuery(window).scroll(function () {
			if (jQuery(window).scrollTop() < 200) {
				jQuery(".ddc-content.contact-form.type-1").addClass("top");
				jQuery(".ddc-content.contact-form.type-1").removeClass("middle");
				jQuery(".ddc-content.contact-form.type-1").removeClass("bottom");
				jQuery('.ddc-content.contact-form.type-1 img.wysiwyg-image, .ddc-content.contact-form.type-1 p').css('display', 'none');
			} else if (jQuery(window).scrollTop() >= 200 && jQuery(window).scrollTop() <= 1400) {
				jQuery(".ddc-content.contact-form.type-1").addClass("middle");
				jQuery(".ddc-content.contact-form.type-1").removeClass("top");
				jQuery(".ddc-content.contact-form.type-1").removeClass("bottom");
				jQuery('.ddc-content.contact-form.type-1.middle img.wysiwyg-image, .ddc-content.contact-form.type-1.middle p').fadeIn();
			} else if (jQuery(window).scrollTop() > 1400) {
				jQuery(".ddc-content.contact-form.type-1").addClass("bottom");
				jQuery(".ddc-content.contact-form.type-1").removeClass("middle");
				jQuery(".ddc-content.contact-form.type-1").removeClass("top");
			} else {}
		});
	}
