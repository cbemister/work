//AUTOCANADA - F11_PROMO_VOLKSWAGEN.js

//COMMENT FORMAT
// START promoname.datestart(HH:SS, DD/MM/YYY).dateend(HH:SS, DD/MM/YYY)
// END promoname.datestart(HH:SS, DD/MM/YYY).dateend(HH:SS, DD/MM/YYY)

	//===== "SET NEW DESKTOP LP IMAGE SOURCES " =====//

//Get current dealership name from dataLayer
var dealershipName = DDC.dataLayer.dealership.dealershipName;

//PAGE PARAMS
var pageName = DDC.dataLayer.page.pageInfo.pageName;
var layoutType = DDC.dataLayer.page.attributes.layoutType;

// ENABLE/DISABLE PROMOJS FUNCTIONALITY
var mobileBanner = true;
	
// VOLKSWAGEN OFFERS
var vwOffer = [];
	
	vwOffer[0] = {
	'tagline': 'Autobahn for All Sales Event - Rates From 0% or Get Up To $2,000 Bonus Cash',
	'headline': '<h5>Get Up To $2,000 Bonus Cash On Select 2018 Models<br><br>Finance Rates From 0% For Up To 36 Months</h5>',
	'landingPageUrl': '/promo/national-offers.htm',
	'filterdVLP': '/new-inventory/index.htm?year=2018&model=Tiguan',
	'desktopLPstandard': 'https://actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_940x_LP.jpg',
	'desktopLPturbo': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_1200x_LP.jpg',
	'mobileLP': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_600x_LP.jpg',
	'mobileWB': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_480x140_MWB.jpg',
	'expiryDate': new Date('April 2, 2018 19:59:59')
	};


var replaceOEMlp = {
	//'Sherwood Park Volkswagen': [],
	//'Northland Volkswagen': []
	};

//	replaceOEMlp['Sherwood Park Volkswagen'][0] = {
//		'tagline': '2017 VW Models',
//		'headline': '<h5>Discounts Up To $15,000 On Select Models</h5>',
//		'filterdVLP': '/new-inventory/index.htm?year=2017',
//		'desktopLPstandard': null,
//		'desktopLPturbo': '//pictures.dealer.com/s/sherwoodparkvolkswagentc/0417/65b92c7aa7971657d8832eae668fb779x.jpg',
//		'mobileLP': '//pictures.dealer.com/s/sherwoodparkvolkswagentc/0504/b5232aa82913715883a3759268a3d0b4x.jpg',
//		'expiryDate': new Date('February 28, 2018 19:59:59')
//	};
//
//	replaceOEMlp['Northland Volkswagen'][0] = {
//		'tagline': '2017 Jetta Trendline 1.4T',
//		'headline': '<h5>Now $215/month <br><br> With $0 Down Payment and $600 Bonus Cash</h5>',
//		'filterdVLP': '/new-inventory/index.htm?year=2017&model=Jetta',
//		'desktopLPstandard': '//pictures.dealer.com/n/northlandvolkswagentc/0365/1e84bb9754f11cafa394b3717a45fc9fx.jpg',
//		'desktopLPturbo': null,
//		'mobileLP': '//pictures.dealer.com/n/northlandvolkswagentc/1431/03564760fb1b254e6c48f3bcd767d402x.jpg',
//		'expiryDate': new Date('February 28, 2018 19:59:59')
//	};

var dealerSpecificBanner = {
	//'Sherwood Park Volkswagen': [],
	//'Northland Volkswagen': []
	};

//	dealerSpecificBanner['Sherwood Park Volkswagen'][0] = {
//		'tagline': '$99 Buck Truck - $99 Monthly Payments Up To 1 Year on Select Models',
//		'landingPageUrl': '/promo/99-buck-truck.htm',
//		'mobileWB': '//pictures.dealer.com/e/easternchryslerdodgejeeptc/0225/ac40a489a16d6be7ecba8f5b66b0d660x.jpg',
//		'priority': true, //if true adds banner infront of OEM Banner(s) 
//		'expiryDate': new Date("February 28, 2018 19:59:59") // null
//	};


var replaceOEMbanner = {
	//'Sherwood Park Volkswagen': [],
	//'Northland Volkswagen': []
	};

//	replaceOEMbanner['Sherwood Park Volkswagen'][0] = {
//		'indexPosition': 0,
//		'tagline': '2017 VW Models - Discounts Up To $15,000 On Select Models',
//		'landingPageUrl': '/new-inventory/index.htm?search=&year=2017',
//		'mobileWB': '//pictures.dealer.com/s/sherwoodparkvolkswagentc/0152/a2f5f7ea34e93cdaa2aa98b89625b518x.jpg',
//		'expiryDate': new Date('February 28, 2018 19:59:59') // null
//	};
//
//
//	replaceOEMbanner['Northland Volkswagen'][0] = {
//		'indexPosition': 0,
//		'tagline': '2017 Jetta Trendline 1.4T',
//		'landingPageUrl': '/new-inventory/index.htm?search=&year=2017&model=Jetta',
//		'mobileWB': '//pictures.dealer.com/n/northlandvolkswagentc/0003/2eba72446abdced83575581c963b167fx.jpg',
//		'expiryDate': new Date('February 28, 2018 19:59:59') // null
//	};


//===== EXTERNAL JS FILES =====//

$.getScript("https://actrader.wpengine.com/wp-content/trader/F11_TURBO_TRADER/JS/THIRD_PARTY/flipclock/flipclock.min.js");

//===== OEM PROGRAM CSS =====//

jQuery('head').append('<style type="text/css">.content-oem-program h5 {color: white;}.content-oem-program .clock-header{width:960px;margin:0 auto}.vw-oem-program-lp .oem-body-desktop .oem-offers{position: absolute; top: 596px; z-index: 99; left: -13px; background: rgb(76, 112, 136); width: 97.9%; padding: 20px; margin-left: 1.4%;}.vw-oem-program-lp .oem-body-desktop a.btn.btn-lrg.btn-primary.btn-block{width:254px;margin-left:22px;margin-top:27px}.js .vw-oem-program-lp .ddc-content.contact-form.type-1{background: rgb(0, 100, 176);margin-top: -600px;padding: 0 25px;width: 293px;margin-left: -6px;}.js .vw-oem-program-lp .ddc-content.contact-form.type-1 fieldset{margin-top:24px}.js .vw-oem-program-lp .ddc-content.contact-form.type-1 .ddc-form-group label span{color:#fff}.js .vw-oem-program-lp .ddc-content.contact-form.type-1 h3{padding-top:35px;font-weight:600;border:none;color:#fff}.js .vw-oem-program-lp .ddc-content.contact-form.type-1 .ui-button-submit{margin:15px 0; width: 70px;}.vw-oem-program-lp .oem-body-desktop .btn-primary{background-color:#ffffff;border-color:#949494}.vw-oem-program-lp .oem-body-desktop a.btn{color:#005d86;font-weight:700}.vw-oem-program-lp .oem-body-desktop .btn-primary:hover{color:#fff;background-color:#49b7e8;border-color:#79c3e6}.js .vw-oem-program-lp .ddc-content.recommendations-vehicles{margin-top:95px}.js .vw-oem-program-lp .ddc-content.recommendations-vehicles > h3{margin-left:12px;padding-top:20px;width:916px}.vw-oem-program-lp .ddc-content.recommendations-vehicles,.turbo .vw-oem-program-lp .ddc-content.recommendations-vehicles{margin-top:120px}.js.turbo .vw-oem-program-lp div > div:nth-child(2) > div.yui3-u-1-3.ddc-span4 > div {background: rgb(0, 99, 175);margin-top: -744px;width: 379PX;margin-left: -10px;padding: 56px 25px;}.vw-oem-program-lp .oem-body-mobile .oem-graphic{text-align:center} @media screen and (min-width: 1600px) {.recommendations-vehicles .original .vehicle-list-item .media {height: 170px;}}.turbo .vw-oem-program-lp .oem-body-desktop .oem-offers {left: -16px; width: 100%;}</style>');

//===== "OEM PROGRAM LP" =====//

	jQuery('.alias-sitebuilder-promo-national-offers-1 body').addClass('vw-oem-program-lp');
		
	jQuery('.vlp .inv-type-new .pricing-area, .alias-sitebuilder-promo-national-offers-1 body').addClass('vw-oem-program');

//===== "END OEM PROGRAM LP" =====//

//===== "CHANGE GET ePrice LABEL ON VLP AND VDP" =====//

// ADD DISCLAIMER BELOW PRICE ON VLP AND VDP //

// jQuery('.chrysler .inventory-listing-default .inv-type-new .hproduct[data-year="2016"] .final-price span.value').after('<div style="text-align:center;font-size:12px; color:#000;clear:both">Up To 30% off MSRP!<br>Get Your <i>Big New Deal</i>   Price Now!</div>');

// jQuery('.chrysler.vdp .inv-type-new .final-price').after('<div style="text-align:center;font-size:12px;color:#000;clear:both">Up To 30% off MSRP!<br>Get Your <i>Big New Deal</i>  Price Now!</div>');
		
// jQuery('.chrysler.vdp .inv-type-new.pricing').addClass('chrysler-oem-program-vdp-2016');
		
// SET CAMPAIGN EXPIRY DATE - DESKTOP/MOBILE - CHANGE IF WITHIN RANGE	
var currenttime = new Date();
var endtime = new Date("February 28, 2018 19:59:59"); //Month Days, Year HH:MM:SS


if ((((currenttime - endtime)/1000)/60) <= 0) {

		jQuery('.vlp .inv-type-new div[data-year="2016"] .pricing .dialog[data-eprice]').text('Get 0% Purchase Financing');
		jQuery('.alias-auto-new-details.chrysler.vdp .links-list .ddc-btn[data-href*="/eprice-form.htm"]').html('<i class="ddc-icon ddc-icon-banknote"></i>Get 0% Purchase Financing');
		jQuery('.alias-auto-new-details.chrysler.vdp .mobile .links-list .ddc-btn[data-href*="/eprice-form.htm"]').html('Get 0% Purchase Financing');
	}

//===== "END CHANGE GET ePrice LABEL ON VLP AND VDP" =====//


//===== "OEM PROGRAM COUNTDOWN CLOCK" =====//

//DATE DECLARATION
var dateOEMProgram = new Date("April 2, 2018 19:59:59"); //Month Days, Year HH:MM:SS
var now = new Date();
var diff = (dateOEMProgram.getTime()/1000) - (now.getTime()/1000);

//SHOW IF WITHIN RANGE	
if (diff >= 0) {
	
	jQuery('.ddc-content.inventory-search-form').after('<div id="mobile-pre-links-list" class="content-oem-program"><div id="mobileSlideshow"></div></div');
	jQuery(".content-oem-program, .vw-oem-program-lp .ddc-content.contact-form.type-1").show();
	
}
//jQuery(".vw-oem-program-lp .clock-header.row ").show();}

//RUN SCRIPT WHEN FLIPCLOCK IS LOADED
$.getScript("https://actrader.wpengine.com/wp-content/trader/F11_TURBO_TRADER/JS/THIRD_PARTY/flipclock/flipclock.min.js", function() {

if (jQuery(".clock-oem-program, .vw-oem-program-lp .ddc-content.contact-form.type-1")[0]){

	var clock = $('.clock-oem-program').FlipClock(diff,{
	clockFace: 'DailyCounter',
	countdown: true
	});
	} 
else {
	console.log("No OEM Clock Found");
	 }
});
//===== "END OEM PROGRAM COUNTDOWN CLOCK" =====//

//===== "OEM PROGRAM LP CONTENT" =====//


	// DEALER-SPECIFIC BANNER LOGIC

	if (replaceOEMlp[dealershipName] !== undefined ) {

		vwOffer[0] = {
			'tagline': replaceOEMlp[dealershipName][0].tagline,
			'headline': replaceOEMlp[dealershipName][0].headline,
			'filterdVLP': replaceOEMlp[dealershipName][0].filterdVLP,
			'desktopLPstandard': replaceOEMlp[dealershipName][0].desktopLPstandard,
			'desktopLPturbo': replaceOEMlp[dealershipName][0].desktopLPturbo,
			'mobileLP': replaceOEMlp[dealershipName][0].mobileLP,
		};
	}

// jQuery('.content-oem-program .clock-header .clock-heading').append('<h2>Save big with 0% financing for 84 months or no payments for 90 days. Offer ends in ...</h2>');

//jQuery('.content-oem-program .clock-header .clock-graphic').append('<a href="/promo/national-offers.htm"><img title="Find Your Next Vehicle | Drive it, you"ll get it." alt="Lease From 0% For Up To 36 Months on select models. | Drive it, you"ll get it." src="https://actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_480x140_Countdown.png"></a>');

if (jQuery('.ddc-container.main').width() > 961) {
	jQuery('.content-oem-program .oem-body-desktop .oem-graphic').append('<a href="'+ vwOffer[0].filterdVLP +'"><img title="Find Your Next Vehicle | Drive it, you"ll get it." alt="'+ vwOffer[0].tagline +'" src="'+ vwOffer[0].desktopLPturbo +'" class="turbo-graphic"></a>');

} else if (jQuery('.ddc-container.main').width() > 500 && jQuery('.ddc-container.main').width() < 961) {
	jQuery('.content-oem-program .oem-body-desktop .oem-graphic').append('<a href="'+ vwOffer[0].filterdVLP +'"><img title="Find Your Next Vehicle | Drive it, you"ll get it." alt="'+ vwOffer[0].tagline +'" src="'+ vwOffer[0].desktopLPstandard +'"></a>');
	
} else if (jQuery('.ddc-container.main').width() < 500) {
		jQuery('.content-oem-program .oem-body-mobile .oem-graphic').append('<a href="'+ vwOffer[0].filterdVLP +'"><img title="Find Your Next Vehicle | Drive it, you"ll get it." alt="'+ vwOffer[0].tagline +'" src="'+ vwOffer[0].mobileLP +'"></a>');
}
	
	jQuery('.content-oem-program .oem-body-desktop .oem-offers, .content-oem-program .oem-body-mobile .oem-offers').append('<div id="oem-offers-container" class="row"><div class="col-xs-12 col-sm-8 ">'+ vwOffer[0].headline +'<h5><strong>Other great offers available - visit us in store for details.</strong></h5></div><div class="col-xs-12 col-sm-4"><a class="btn btn-lrg btn-primary btn-block" href="'+ vwOffer[0].filterdVLP +'" title="View Inventory">View Inventory</a></div></div>');

//<span class="read-more-target">

// jQuery('.chrysler .content-oem-program.footer').append('<div><input type="checkbox" class="read-more-state" id="post-1" /><p class="read-more-wrap"></span></p><label for="post-1" class="read-more-trigger"></label></div>');

//jQuery('.content-oem-program.footer').append('<div><input type="checkbox" class="read-more-state" id="post-1" /><p class="read-more-wrap"></span></p><label for="post-1" class="read-more-trigger"></label></div>');

	jQuery('.content-oem-program.footer').append('<hr><div>0% finance rate for up to 36 months. $2,000 bonus cash applies to the 2018 Passat 2.0 TSI Comfortline, 2.0 TSI Highline, 3.6L GT and the 3.6L Highline. Highline models shown for each vehicle. Limited time lease offer available through Volkswagen Finance on approved credit, based on a new and unregistered 2018 Golf 1.8T 3-door Trendline/Tiguan 2.0T Trendline 4MOTION/Golf SportWagen 1.8T Trendline model with 5/8/5-speed manual/automatic/manual transmission. $1,645/$1,845/$1,645 freight and PDI and $100 air-conditionaling levy included in monthly payment. 60/36/60-month term at 2.49%/1.49%/2.49% APR. $0/$800/$0 down payment, $290/$480/$360 security deposit and first monthly payment due at lease inception. Total lease obligations: $14,500/$16,165/$18,480. 80,000/48,000/80,000-kilometre allowance; charge of $0.15/km for excess kilometres. PPSA fee, license, insurance, registration, any dealer or other charges, options and applicable taxes are extra. Dealer may sell for less. Dealer order/trade may be necessary. Offers end April 2, 2018 and are subject to change or cancellation without notice. Vehicle may not be exactly as shown. Visit your Volkswagen dealer for details. </div>');


//===== "END OEM PROGRAM LP CONTENT" =====//

//+++++++++++++MOBILE BANNER LOGIC

	if ((mobileBanner === true) && (DDC.dataLayer.page.attributes.layoutType === "mobile") && (DDC.dataLayer.page.pageInfo.pageName === "INDEX")) {
		
		
		
	// REPLACE OEM BANNER LOGIC
	if (replaceOEMbanner[dealershipName]) {

		for (var i = 0; i < replaceOEMbanner[dealershipName].length; i++) {

			var indexPosition = replaceOEMbanner[dealershipName][i].indexPosition;

			if (indexPosition !== undefined) {
				
				if ((replaceOEMbanner[dealershipName][i].expiryDate === null) || (currenttime < replaceOEMbanner[dealershipName][i].expiryDate)) { 
					vwOffer[indexPosition] = {
						'tagline': replaceOEMbanner[dealershipName][i].tagline,
						'landingPageUrl': replaceOEMbanner[dealershipName][i].landingPageUrl,
						'mobileWB': replaceOEMbanner[dealershipName][i].mobileWB,
					};
				}

			}

		}

	}	

	// DEALER-SPECIFIC BANNER LOGIC
	if (dealerSpecificBanner[dealershipName] !== undefined ) {

		for (var i = 0; i < dealerSpecificBanner[dealershipName].length; i++) {

			if ((dealerSpecificBanner[dealershipName][i].expiryDate === null) || (currenttime < dealerSpecificBanner[dealershipName][i].expiryDate)) {

				if (dealerSpecificBanner[dealershipName][i].priority === true) {

					vwOffer.unshift(dealerSpecificBanner[dealershipName][i]);

				} else if (dealerSpecificBanner[dealershipName][i].priority === false) {

					vwOffer.push(dealerSpecificBanner[dealershipName][i]);

				}

			}

		}
	}


		for (var i = 0; i < vwOffer.length; i++) {	

			$('div#mobileSlideshow').append('<a href="'+ vwOffer[i].landingPageUrl  + '" title="' + vwOffer[i].tagline + '" onclick="dataLayer.push({\'event\': \'trackEvent\',\'eventCategory\': \'***Slideshow Click\', \'eventAction\': \''+ vwOffer[i].landingPageUrl  + '\', \'eventLabel\' : \'Position '+ (i + 1) + '\',\'eventValue\': \'undefined\' });"><img src="' + vwOffer[i].mobileWB + '" alt="' + vwOffer[i].tagline + '" /></a>');

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

			setInterval('cycleImages()', 3000);
		}

		//});

	}



	//+++++++++++++END MOBILE BANNER LOGIC


