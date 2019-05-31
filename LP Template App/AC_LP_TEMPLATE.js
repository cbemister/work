// AC LANDING PAGE TEMPLATE LOGIC

// INITIALIZE OPTIONAL VARIABLES

var lpTemplateActive, lpHorizontalForm, lpFormHeight, lpFormBgColour, lpFormTextColour, lpSubmitBtnBgColour, lpSubmitBtnTextColour;

$(document).ready(function () {

	// DYNAMIC VARIABLES

	if (lpHorizontalForm) {
		var formCSSTarget = '.lp-template-active .yui3-u-1.ddc-span12 .type-1.contact-form.ddc-content';
		lpHeroImage = 'https://pictures.dealer.com/a/airdriechryslerdodgejeeptc/0139/acff48a9dfd815623f9fbfe1491797f2x.jpg'; // FOR TESTING PURPOSES ONLY
	} else {
		var formCSSTarget = '.lp-template-active .yui3-u-1.ddc-span12 a.lp-hero-link + .type-1.contact-form.ddc-content';
	}


	// CONDITIONAL LOGIC 

	if (lpTemplateActive && typeof lpTemplateActive === 'boolean') {

		var isMobile = $('html').hasClass('mobile');

		// SET SUBMIT BUTTON TEXT
		jQuery("div.ddc-content.contact-form.type-1 > form  button").text(lpSubmitBtnText);

		// ADD CLASS TO ACTIVATE CSS
		$('html').addClass('lp-template-active');

		// SET DEFAULT FORM BG COLOUR
		$('.type-1.contact-form.ddc-content').addClass('btn-oem');


		if (isMobile) {
			$('.type-1.contact-form.ddc-content').before('<a href=' + lpHeroLink + ' title="View Inventory" class=""><img src="' + lpHeroImage + '" alt="Promotion"></a>');

		} else {
			if (lpHorizontalForm && typeof lpHeroImage === 'string' && typeof lpHeroLink === 'string') {
				$('.type-1.contact-form.ddc-content').after('<a href=' + lpHeroLink + ' title="View Inventory" class="lp-hero-link"><div class="content lp-hero-image"></div></a>');
			} else if (lpHeroImage && typeof lpHeroImage === 'string' && typeof lpHeroLink === 'string') {
				$('.type-1.contact-form.ddc-content').before('<a href=' + lpHeroLink + ' title="View Inventory" class="lp-hero-link"><div class="content lp-hero-image"></div><div class=" slideshow-default ddc-content"></div></a>');
			}

			if (lpHeroImage && typeof lpHeroImage === 'string') {
				// SET HERO IMAGE
				$('.lp-hero-image').css('background-image', 'url(' + lpHeroImage + ')');
			}

			// OPTIONAL SETTINGS LOGIC OTHERWISE DEFAULTS TO CSS VALUES
			if (lpFormHeight && typeof lpFormHeight === 'number' && !lpHorizontalForm) {
				// SET FORM HEIGHT
				$(formCSSTarget).css('min-height', lpFormHeight + 'px');
			} else if (lpHorizontalForm) {
				$('.lp-template-active .lp-hero-image').css('height', '300px');
			}

			if (lpFormBgColour && typeof lpFormBgColour === 'string') {
				// SET FORM BG COLOUR
				$(formCSSTarget).css('background', lpFormBgColour);
			}

			if (lpFormTextColour && typeof lpFormTextColour === 'string') {
				// SET FORM TEXT COLOUR
				$(formCSSTarget + ' .form-group.ddc-form-group span').css('color', lpFormTextColour);
				$(formCSSTarget + ' h3.widget-heading').css('color', lpFormTextColour);
			}

			if (lpSubmitBtnBgColour && typeof lpSubmitBtnBgColour === 'string') {
				// SET SUBMIT BUTTON BG COLOUR
				jQuery("div.ddc-content.contact-form.type-1 > form > div.form-group > div > button").css('background', lpSubmitBtnBgColour);
			}

			if (lpSubmitBtnTextColour && typeof lpSubmitBtnTextColour === 'string') {
				// SET SUBMIT BUTTON TEXT COLOUR
				jQuery("div.ddc-content.contact-form.type-1 > form > div.form-group > div > button").css('color', lpSubmitBtnTextColour);
			}

			//PRELOADER
			$(window).load(function () {
				$("#status").fadeOut(), $("#preloader").delay(100).fadeOut("fast"), $("body").delay(100).css({
					overflow: "visible",
					"display": "block"
				});
			});

			setTimeout(function () {
				$("#status").fadeOut(), $("#preloader").delay(100).fadeOut("fast"), $("body").delay(100).css({
					"overflow": "visible",
					"display": "block"
				});
			}, 100);

		}

		// SET BG HERO IMAGE
		if (lpHeroImage && typeof lpHeroImage === 'string') {
			// SET HERO IMAGE
			$('.lp-hero-image').css('background-image', 'url(' + lpHeroImage + ')');
		}


	}



});
