'use strict';
const promoJS = (function () {

	let functionality, general, dealership, website, data, currentOffers, dealershipCampaign, dynamicContent;

	functionality = {
		'indexHero': false,
		'oemLP': true,
		'oemLPnew': false,
		'epriceNew': false,
		'epriceUsed': false,
		'countdownClock': false,
		'mobileBanner': true,
		'vlpStickyBanner': false
	};

	general = {
		'currentTime': new Date(),
		'expiryDate': new Date('April 30, 2018 19:59:59')
	};

	dealership = {
		'franchise': DDC.dataLayer.site.franchises[0],
		//'name': 'Wellington Motors'
		'name': DDC.dataLayer.dealership.dealershipName
	};

	website = {
		'pageName': DDC.dataLayer.page.pageInfo.pageName,
		'layoutType': DDC.dataLayer.page.attributes.layoutType
	};

	currentOffers = [];

	data = {
		'oem': [{
			'franchise': ['chrysler'],
			'offers': {
				'tagline': 'SAVE up to $12,750 in DISCOUNTS on eligible Ram 1500 models.',
				'landingPageUrl': '/promo/national-offers.htm',
				'filterdVLP': '/new-inventory/index.htm?year=2017&make=Ram&model=1500',
				'desktopLP': 'http://pictures.dealer.com/a/autocanadatc/1331/28d60bece3a451e97750c6eb3691e43fx.jpg',
				'desktopWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/CJDR_OEM_1920x520_WB_0.jpg',
				'desktopVLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/CJDR_OEM_1200x_VLP_0.jpg',
				'mobileWB': 'http://pictures.dealer.com/a/autocanadatc/1321/f4de99edf0ea696d8edd6800caf8203dx.jpg',
				'mobileLP': 'http://pictures.dealer.com/a/autocanadatc/0823/f3c9492ed88d4ebbad00c832014aae87x.jpg',
				'offerParam': 'ram',
				'expiryDate': new Date('April 30, 2018 19:59:59')
			}
		}, {
			'franchise': ['chrysler'],
			'offers': {
				'tagline': 'SAVE up to $12,000 on eligible Dodge Grand Caravan models. ',
				'landingPageUrl': '/promo/national-offers.htm',
				'filterdVLP': '/new-inventory/index.htm?year=2017&make=Dodge&model=Grand+Caravan',
				'desktopLP': 'http://pictures.dealer.com/a/autocanadatc/0955/dc56e779e869f188e23f39cc94930dadx.jpg',
				'desktopWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/CJDR_OEM_1920x520_WB_1.jpg',
				'desktopVLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/CJDR_OEM_1200x_VLP_1.jpg',
				'mobileLP': 'http://pictures.dealer.com/a/autocanadatc/0668/b865e9cc3befbe0247074ba5793f4cb9x.jpg',
				'mobileWB': 'http://pictures.dealer.com/a/autocanadatc/0686/844a1f5e09ed25d2b0a5af582c472529x.jpg',
				'offerParam': 'dodge',
				'expiryDate': new Date('April 30, 2018 19:59:59')
			}
		}, {
			'franchise': ['chrysler'],
			'offers': {
				'tagline': 'DISCOUNTS up to 15% OFF MSRP on select Jeep Models. ',
				'landingPageUrl': '/promo/national-offers.htm',
				'filterdVLP': '/new-inventory/index.htm?make=Jeep',
				'desktopLP': 'http://pictures.dealer.com/a/autocanadatc/1974/13901cf130659b351dd3fcd57d59a68bx.jpg',
				'desktopWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/CJDR_OEM_1920x520_WB_2.jpg',
				'desktopVLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/CJDR_OEM_1200x_VLP_2.jpg',
				'mobileLP': 'http://pictures.dealer.com/a/autocanadatc/0511/69352458e78d94efd95625feba7443e8x.jpg',
				'mobileWB': 'http://pictures.dealer.com/a/autocanadatc/0762/1d958616f6274531a8eb35e421efd019x.jpg',
				'offerParam': 'jeep',
				'expiryDate': new Date('April 30, 2018 19:59:59')
			}
		}, {
			'franchise': ['chrysler'],
			'offers': {
				'tagline': '0% FINANCING RATE on NEW 2017/2018 eligible Models oac.',
				'landingPageUrl': '/promo/national-offers.htm',
				'filterdVLP': '/new-inventory/index.htm?search=Grand+Caravan+OR+Wrangler+OR+1500',
				'desktopLP': 'http://pictures.dealer.com/a/autocanadatc/0128/3e7d8ed832d15d440a992d2d26af360dx.jpg',
				'desktopWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/CJDR_OEM_1920x520_WB_3.jpg',
				'desktopVLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/CJDR_OEM_1200x_VLP_3.jpg',
				'mobileLP': 'http://pictures.dealer.com/a/autocanadatc/0372/cdbeb13cd98d4415f44de85e419bc1a4x.jpg',
				'mobileWB': 'http://pictures.dealer.com/a/autocanadatc/1747/4b7b4e5f47475232d795233a393907adx.jpg',
				'offerParam': '0percent',
				'expiryDate': new Date('April 30, 2018 19:59:59')
			}
		}, {
			'franchise': ['chrysler'],
			'offers': {
				'tagline': 'SAVE up to $9,445 on eligible Ram 2500/3500 models.',
				'landingPageUrl': '/promo/national-offers.htm',
				'filterdVLP': '/new-inventory/index.htm?search=2500+OR+3500',
				'desktopLP': null,
				'desktopWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/CJDR_OEM_1920x520_WB_4.jpg',
				'desktopVLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/CJDR_OEM_1200x_VLP_4.jpg',
				'mobileLP': null,
				'mobileWB': 'http://pictures.dealer.com/a/autocanadatc/0744/fdfed189a56a3b838b2e543baf8ccd46x.jpg',
				'offerParam': null,
				'expiryDate': new Date('April 30, 2018 19:59:59')
			}
		}, {
			'franchise': ['chrysler'],
			'offers': {
				'tagline': 'DISCOUNTS up to $8000 on eligible Pacifica models.',
				'landingPageUrl': '/promo/national-offers.htm',
				'filterdVLP': '/new-inventory/index.htm?make=Chrysler&model=Pacifica',
				'desktopLP': null,
				'desktopWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/CJDR_OEM_1920x520_WB_5.jpg',
				'desktopVLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/CJDR_OEM_1200x_VLP_5.jpg',
				'mobileWB': 'http://pictures.dealer.com/a/autocanadatc/1196/d8650bc7afddb8237aee98a3f28368aex.jpg',
				'mobileLP': null,
				'offerParam': null,
				'expiryDate': new Date('April 30, 2018 19:59:59')
			}
		}],
		'disclaimers': {
			oem: {
				'initialDisclaimer': 'The Month of Ram and Jeep No Limits Event offers apply to retail deliveries of selected new and unused models purchased from April 3, 2018 to April 30, 2018 from participating retailers. Retailer order/trade may be necessary. Offers subject to change and may be extended without notice. Although we make every effort to ensure the accuracy of the information and offers on this website, we cannot guarantee that the site will be error-free. Therefore, you should consult a participating retailer for complete details and conditions.<br><br>Purchase Prices in Ontario, Alberta, Saskatchewan, Manitoba, and British Columbia include Consumer Cash Discounts and other incentives (where applicable), freight ($1,795 - $2,495), air conditioning charge, OMVIC/AMVIC fee and tire levy and exclude taxes, licence, insurance, any retailer administration fees and other retailer charges (if applicable) and other applicable fees and charges. Quebec Purchase Prices include Consumer Cash Discounts and other incentives (where applicable), freight ($1,795 - $2,495), and air conditioning charge, and exclude only licence, insurance, duties on new tires ($15) and applicable taxes, which will be required on purchase. In the rest of Canada, Purchase Prices include Consumer Cash Discounts and other incentives (where applicable) and exclude freight ($1,795 - $2,495), air conditioning charge, licence, insurance, any retailer administration fees and other retailer charges (if applicable) and other applicable fees and taxes. Retailers may sell for less. See participating retailers for complete details.',
				'remainingDisclaimer': '<br>"Starting at" price represents the Manufacturer\'s Suggested Retail Price (MSRP) for the base model minus Total Discounts (where applicable). Price does not include taxes, freight (from $1,695 to $2,495), insurance, registration, licence, A/C charge, retailer administration fees and other charges, and new tire duties (in Quebec). Model shown may be an upgraded model. Total Discounts may vary from time to time and may vary considerably by model and trim. Total Discounts include Consumer Cash Discounts, which are applied before taxes, and/or Bonus Cash Discounts, which are applied after taxes. Retailers may sell for less. See your retailer for complete details.',
			}
		},
		'campaign': [{
			'dealerships': ['Abbotsford Volkswagen'],
			'franchises': ['volkswagen'],
			'importance': {
				'indexPosition': 1,
				'replace': false
			},
			'offers': {
				'tagline': 'VW Campaign',
				'headline': '<h5>Get Up To $2,000 Bonus Cash On Select 2018 Models<br><br>Finance Rates From 0% For Up To 36 Months</h5>',
				'landingPageUrl': '/promo/national-offers.htm',
				'filterdVLP': '/new-inventory/index.htm?year=2018&model=Tiguan',
				'desktopLPstandard': 'https://actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_940x_LP.jpg',
				'desktopLPturbo': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_1200x_LP.jpg',
				'mobileLP': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_600x_LP.jpg',
				'mobileWB': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_480x140_MWB.jpg',
				'offerParam': '',
				'disclaimer': '',
				'expiryDate': new Date('April 2, 2018 19:59:59')
			}
		}],
		'dealership': {
			'Wellington Motors': [{
				'importance': {
					'indexPosition': 0,
					'category': 'oem',
					'replace': true
				},
				'offers': {
					'tagline': '2017 RAM 1500 Now 30% Off MSRP - That\'s Up To $19,340 In Total Discounts On Select Models OAC',
					'headline': '<h5>2017 RAM 1500 Now 30% Off MSRP - That\'s Up To $19,340 In Total Discounts On Select Models OAC</h5>',
					'landingPageUrl': '/promo/national-offers.htm',
					'filterdVLP': '/certified-inventory/index.htm?year=2017&make=Ram&model=1500',
					'desktopLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0048/c36d06149c245e3fc924555be7fcdf90x.jpg',
					'desktopWB': 'https://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0791/de66e72b2f5265d6aa4393d3e3ee1ff4x.jpg',
					'desktopVLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0350/a960578565413eb000d099a27d44aab5x.jpg',
					'mobileLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1884/c995a577de2b85b5753207283db6579cx.jpg',
					'mobileWB': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0762/406b3290221e2818b76c0823ae940b35x.jpg',
					'offerParam': 'dodge',
					'disclaimer': '',
					'expiryDate': new Date('April 3, 2018 19:59:59')
				}
			}, {
				'importance': {
					'indexPosition': 2,
					'category': 'oem',
					'replace': true
				},
				'offers': {
					'tagline': 'Up To 35% Off On Select 2017 Dodge Grand Caravans',
					'headline': '<h5>Up To 35% Off On Select 2017 Dodge Grand Caravans</h5>',
					'landingPageUrl': '/promo/national-offers.htm',
					'filterdVLP': '/new-inventory/index.htm?year=2017&make=Dodge&model=Grand+Caravan',
					'desktopLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1394/6293904fa5fb8a5532fa848303d24839x.jpg',
					'desktopWB': 'https://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0487/ebed07b941d8b31e3851db233f9dc289x.jpg',
					'desktopVLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1971/00f82974a2b138fecbc123ae8956cfaax.jpg',
					'mobileLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0189/9c96e247e8248f0082dd23314c0d992ex.jpg',
					'mobileWB': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1116/dbf0094ddb680fb4ba2dfde612e1fd22x.jpg',
					'offerParam': 'dodge',
					'disclaimer': '',
					'expiryDate': new Date('April 3, 2018 19:59:59')
				}
			}],
			'Ponoka Dodge Chrysler Jeep Ram': [{
				'importance': {
					'indexPosition': 3,
					'category': '', //Set as oem if replaceing current oem offer
					'replace': false
				},
				'offers': {
					'tagline': '2017 RAM 1500 Now 30% Off MSRP - That\'s Up To $19,340 In Total Discounts On Select Models OAC',
					'headline': '<h5>2017 RAM 1500 Now 30% Off MSRP - That\'s Up To $19,340 In Total Discounts On Select Models OAC</h5>',
					'landingPageUrl': '/promo/national-offers.htm',
					'filterdVLP': '/certified-inventory/index.htm?year=2017&make=Ram&model=1500',
					'desktopLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0048/c36d06149c245e3fc924555be7fcdf90x.jpg',
					'desktopWB': 'https://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0791/de66e72b2f5265d6aa4393d3e3ee1ff4x.jpg',
					'desktopVLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0350/a960578565413eb000d099a27d44aab5x.jpg',
					'mobileLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1884/c995a577de2b85b5753207283db6579cx.jpg',
					'mobileWB': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0762/406b3290221e2818b76c0823ae940b35x.jpg',
					'offerParam': 'dodge',
					'disclaimer': '',
					'expiryDate': new Date('April 2, 2018 19:59:59')
				}
			}, {
				'importance': {
					'indexPosition': 4,
					'category': '',
					'replace': false
				},
				'offers': {
					'tagline': 'Up To 35% Off On Select 2017 Dodge Grand Caravans',
					'headline': '<h5>Up To 35% Off On Select 2017 Dodge Grand Caravans</h5>',
					'landingPageUrl': '/promo/national-offers.htm',
					'filterdVLP': '/new-inventory/index.htm?year=2017&make=Dodge&model=Grand+Caravan',
					'desktopLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1394/6293904fa5fb8a5532fa848303d24839x.jpg',
					'desktopWB': 'https://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0487/ebed07b941d8b31e3851db233f9dc289x.jpg',
					'desktopVLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1971/00f82974a2b138fecbc123ae8956cfaax.jpg',
					'mobileLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0189/9c96e247e8248f0082dd23314c0d992ex.jpg',
					'mobileWB': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1116/dbf0094ddb680fb4ba2dfde612e1fd22x.jpg',
					'offerParam': 'dodge',
					'disclaimer': '',
					'expiryDate': new Date('April 3, 2018 19:59:59')
				}
			}],

		}
	};

	// TURN OFF LANDING PAGE

	if (general.currentTime > general.expiryDate) {

		functionality.oemLP = false;

	} else {

		// LOAD CSS

		// CACHE BUSTER
		let d = new Date();
		let n = d.getTime();

		jQuery('head').append('<link rel="stylesheet" type="text/css" href="//actrader.wpengine.com/wp-content/trader/F11_PROMO/JS/F11_PROMO_CHRYSLER.css?nocache=' + n + '">');

		jQuery(".content-oem-program").show();

	}

	// ADD MOBILE BANNER CONTAINER

	if (functionality.mobileBanner === true) {

		jQuery('.ddc-content.inventory-search-form').after('<div id="mobile-pre-links-list"><div id="mobileSlideshow"></div></div');

	}


	// ADD CLASS TO LANDING PAGE



	if (jQuery('.ddc-container.main').width() > 961) {


		// TURBO
		jQuery('.chrysler.alias-sitebuilder-national-offers-1 body').addClass('chrysler-oem-program-lp-turbo');

		jQuery('.chrysler.alias-sitebuilder-promo-national-offers-1 body').addClass('chrysler-oem-program-lp-turbo');

	} else if (jQuery('.main').width() < 500) {

		//NON-TURBO
		jQuery('.chrysler.alias-sitebuilder-national-offers-1 body').addClass('chrysler-oem-program-lp-evolve');

		jQuery('.chrysler.alias-sitebuilder-promo-national-offers-1 body').addClass('chrysler-oem-program-lp-evolve');

	} else {

		//NON-TURBO
		jQuery('.chrysler.alias-sitebuilder-national-offers-1 body').addClass('chrysler-oem-program-lp');

		jQuery('.chrysler.alias-sitebuilder-promo-national-offers-1 body').addClass('chrysler-oem-program-lp');

	}

	// POPULATE CURRENT OFFERS ARRAY
	function addToCurrentOffers(offerArray) {

		for (let i = 0; i < offerArray.length; i++) {

			var currentOffer = offerArray[i].offers;

			var offerExpiryDate = offerArray[i].offers.expiryDate;

			if (general.currentTime < offerExpiryDate) {

				currentOffers.push(currentOffer);

			}

		}

	}

	addToCurrentOffers(data.oem);

	// CHECK FRANCHISE AND DEALERSHIP TARGETING
	function checkTargeting(targetArray, targetType, targetDealership) {

		for (let i = 0; i < targetArray[targetType].length; i++) {

			let result = targetArray[targetType].indexOf(targetDealership);

			if (result > -1) {

				var indexPosition = targetArray.importance.indexPosition;

				var replaceOffer = targetArray.importance.replace;

				var expiryDate = targetArray.offers.expiryDate;

				if (general.currentTime < expiryDate) {

					currentOffers.splice(indexPosition, replaceOffer, targetArray.offers);

				}

				return true;

			}
		}

	}

	// SET CAMPAIGN OFFERS
	for (let i = 0; i < data.campaign.length; i++) {

		var checkMatched = checkTargeting(data.campaign[i], 'dealerships', dealership.name);

		if (checkMatched === undefined) {

			checkTargeting(data.campaign[i], 'franchises', dealership.franchise);

		}

	}


	if (data.dealership[dealership.name] !== undefined) {


		data.dealership[dealership.name].forEach(function (currentOffer, index) {

			let indexPosition = currentOffer.importance.indexPosition;

			let replaceOffer = currentOffer.importance.replace;

			let expiryDate = currentOffer.offers.expiryDate;

			if (general.currentTime < expiryDate) {

				currentOffers.splice(indexPosition, replaceOffer, currentOffer.offers);

			}

			if (currentOffer.importance.category == 'oem') {

				data.oem.splice(indexPosition, replaceOffer, currentOffer)

			}

		});

	}


	// GET URL PARAM

	// CONTENT PERSONALIZATION JS 
	function getParameterByName(e, a) {
		a || (a = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
		var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
			r = n.exec(a);
		return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null;
	}
	dynamicContent = getParameterByName("offer");


	//        for(let i = 0; i < currentOffers.length; i++){
	//                    
	//            let currentOffers = currentOffers[i].offerParam;
	//                    
	//            console.log(currentOffers);
	//                    
	//        }

	//+++++++++++++ LANDING PAGE CONTENT PERSONALIZATION

	if (functionality.oemLP === true) {


		if (website.layoutType === "desktop" && (website.pageName === "SITEBUILDER_NATIONAL_OFFERS_1" || website.pageName === "SITEBUILDER_PROMO_NATIONAL_OFFERS_1")) {

			//Desktop JS

			// SINGLE OFFER LANDING PAGE
			jQuery('.main').prepend('<div id="default-content" class="dynamic-content"><a href="' + data.oem[0].offers.landingPageUrl + '" class="dynamic-link"  title="View Inventory" id="ext-gen2150"><img src="' + data.oem[0].offers.desktopLP + '" id="desktop-hero" alt="' + data.oem[0].offers.tagline + '" title="View Inventory"></a></div>');

			if (dynamicContent !== null) {

				data.oem.forEach(function (offer) {

					if (dynamicContent === offer.offers.offerParam) {
						jQuery("#desktop-hero").attr("src", offer.offers.desktopLP);
						jQuery("#default-content a").attr("href", offer.offers.landingPageUrl);
						jQuery("#default-content img").attr("alt", offer.offers.tagline);

					}

				});

			}

		} else if (website.layoutType === "mobile" && (website.pageName === "SITEBUILDER_NATIONAL_OFFERS_1" || website.pageName === "SITEBUILDER_PROMO_NATIONAL_OFFERS_1")) {

			//Mobile JS	

			// SINGLE OFFER LANDING PAGE

			//jQuery('.content-oem-program .oem-body-mobile').append('<div id="SlideshowContainer"><div id="newMobileLP"></div></div>');	

			jQuery('.content-oem-program .oem-body-mobile').append('<div id="default-content" class="dynamic-content"><a href="' + data.oem[0].offers.landingPageUrl + '" class="dynamic-link"  title="View Inventory" id="ext-gen2150"><img src="' + data.oem[0].offers.mobileLP + '" id="mobile-hero" alt="' + data.oem[0].offers.tagline + '" title="View Inventory"></a></div>');


			if (dynamicContent !== null) {

				data.oem.forEach(function (offer) {

					if (dynamicContent === offer.offers.offerParam) {
						jQuery("#mobile-hero").attr("src", offer.offers.mobileLP);
						jQuery("#default-content a").attr("href", offer.offers.landingPageUrl);
						jQuery("#default-content img").attr("alt", offer.offers.tagline);

					}

				});

			}

		}

		// DISCLAIMER

		jQuery('.content-oem-program.footer').append('<div class="disclaimer"><input type="checkbox" class="read-more-state" id="post-1" /><p class="read-more-wrap">' + data.disclaimers.oem.initialDisclaimer + '<span class="read-more-target">' + data.disclaimers.oem.remainingDisclaimer + '</span></p><label for="post-1" class="read-more-trigger"></label></div>');

		// SET OFFER FORM FIELD
		jQuery('.ddc-content.contact-form.type-1 input[data-id="Offer"]').val(dynamicContent ? dynamicContent : 'not specified');


	}


	if (functionality.mobileBanner === true && ((website.layoutType === "mobile") && (website.pageName === "INDEX"))) {

		for (var i = 0; i < currentOffers.length; i++) {

			$('div#mobileSlideshow').append('<a href="' + currentOffers[i].landingPageUrl + '" title="' + currentOffers[i].tagline + '" onclick="dataLayer.push({\'event\': \'trackEvent\',\'eventCategory\': \'***Slideshow Click\', \'eventAction\': \'' + currentOffers[i].landingPageUrl + '\', \'eventLabel\' : \'Position ' + (i + 1) + '\',\'eventValue\': \'undefined\' });"><img src="' + currentOffers[i].mobileWB + '" alt="' + currentOffers[i].tagline + '" /></a>');

		}

		$('div#mobileSlideshow a:first-of-type').addClass('active');

		function cycleImages() {
			var $active = $('#mobileSlideshow .active');
			var $next = ($active.next().length > 0) ? $active.next() : $('#mobileSlideshow a:first');
			$next.css('z-index', 2); //move the next image up the pile
			$active.fadeOut(1500, function () { //fade out the top image
				$active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
				$next.css('z-index', 3).addClass('active'); //make the next image the top one
			});
		}

		//$(document).ready(function () {
		// run every 3s

		if ($('div#mobileSlideshow a').length > 1) {

			setInterval(cycleImages, 3000);
		}

		//});

	}


	//+++++++++++++END MOBILE BANNER LOGIC


	function test() {
		console.log('test');
	}

	return {
		data: data,
		offerParam: dynamicContent,
		currentOffers: currentOffers
	};


})();
