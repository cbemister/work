//AUTOCANADA - F11_PROMO_CHRYSLER.js

// ENABLE/DISABLE PROMOJS FUNCTIONALITY
var indexHero = false;
var oemLPbasic = false;
var oemLPadvanced = true;
var epriceNew = false;
var epriceUsed = false;
var countdownClock = false;
var mobileBanner = true;

//===== CHRYSLER OEM PROGRAM CSS =====//



if (jQuery('.ddc-container.main').width() > 961) {
	jQuery('head').append('<style type="text/css">.chrysler-oem-program-lp .ddc-content.contact-form.type-1{margin-top:-844px;width:360px;padding:120px 15px;background:#9d0a0e;margin-left:27px;border:1px outset rgb(255, 255, 255); margin-right: -1px;}.chrysler-oem-program-lp button.ddc-btn.ddc-btn-primary.pull-right.ui-button-submit{border:1px solid;padding:4px 20px;background:#7a7a7a}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 fieldset{margin-top:24px}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 .ddc-form-group label span{color:#fff}.chrysler-oem-program-lp .oem-offers h5{font-weight:700}.chrysler-oem-program-lp .recommendations-vehicles > h3{color:black}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 h3{font-weight:600}button.ddc-btn.ddc-btn-primary.pull-right.ui-button-submit:hover{background:#212121}#second-offer,#third-offer{display:none}#second-offer-mobile,#third-offer-mobile{display:none}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 h3,.chrysler-oem-program-lp .ddc-content.contact-form.type-1 span{color:white}.extra-offers{margin:15px}.chrysler-oem-program-lp .ddc-container.main a.btn.btn-lrg.btn-primary.btn-block{margin-bottom:12px}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 h3{border-color:black;border-width:2px}.chrysler-oem-program-lp .ddc-container.main a.btn.btn-lrg.btn-primary.btn-block{margin-bottom:12px}</style>');
} else if (jQuery('.ddc-container.main').width() > 500 && jQuery('.ddc-container.main').width() < 961) {
	jQuery('head').append('<style type="text/css">.chrysler-oem-program-lp .page-bd .ddc-content.contact-form.type-1 {margin-top: -680px; padding: 44px 25px; background: #9d0a0e; border: 1px outset rgb(255, 255, 255);margin-right: -1px;}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 h3, .chrysler-oem-program-lp .ddc-content.contact-form.type-1 span{color: white;}#second-offer, #third-offer {display:none;}#second-offer-mobile, #third-offer-mobile {display:none;}.extra-offers {margin: 15px;}.ddc-content.contact-form.type-1 h3{border-color: black;border-width:2px;}.ddc-container.main a.btn.btn-lrg.btn-primary.btn-block {margin-bottom: 12px;}</style>');
} else if (jQuery('.ddc-container.main').width() < 500) {
	jQuery('head').append('<style type="text/css">.ddc-content.content-default[data-widget-id="1|2|3"] {display: none;}#second-offer, #third-offer {display:none;}#second-offer-mobile, #third-offer-mobile {display:none;}div#oem-offers-container {margin-top: 30px;}.mobile.ddc-container div#oem-offers-container a.btn.btn-lrg.btn-primary.btn-block {margin-top: 20px}.read-more-state {display: none;}</style>');
}

//===== ADD CLASS TO LANDING PAGE =====//

jQuery('.chrysler.alias-sitebuilder-national-offers-1 body').addClass('chrysler-oem-program-lp');

jQuery('.chrysler.vlp .inv-type-new .pricing-area, .alias-sitebuilder-promo-national-offers-1 body').addClass('chrysler-oem-program');

//===== END ADD CLASS TO LANDING PAGE =====//

// PLACE THIS ON BOTTOM OF BODY JS PAGE SPECIFIC: SET CAMPAIGN EXPIRY DATE - DESKTOP/MOBILE
var currenttime = new Date();
var endtime = new Date("January 2, 2018 19:59:59"); //Month Days, Year HH:MM:SS

var diff = (endtime.getTime() / 1000) - (currenttime.getTime() / 1000);
//console.log(now, diff, currenttime);
//SHOW IF WITHIN RANGE

if (diff >= 0) {

	jQuery(".content-oem-program").show();
	
	jQuery(".clock-header").hide();
	
	//SHOW CLOCK SECTION

	if (oemLPbasic === true) {}

	//===== "NEW EPRICE BUTTON TEXT CHANGE? ENTER THE NEW TEXT HERE =====//
	var ePriceButtonTextNew = "";

	//===== "USED EPRICE BUTTON TEXT CHANGE? ENTER THE NEW TEXT HERE =====//
	var ePriceButtonTextUsed = "";

	//===== "INDEX HERO CONTENT"  =====//

	if (indexHero === true) {

		jQuery("div.hero-content-container").append('#HTML');

		jQuery(".index .index-facet-content").html('#HTML');
	}

	//===== "OEM PROGRAM LP CONTENT" =====//


	if (countdownClock === true) {
		
		jQuery(".clock-header").show();

		//CLOCK GRAPHIC CHANGE?
		jQuery('.content-oem-program .clock-header .clock-graphic').append('<a href="/promo/national-offers.htm"><img title="Dealer Invoice Pricing" src="https://pictures.dealer.com/s/sherwoodparkhyundaitc/1646/ff1b550a84bc6716d757419d121958f8x.jpg"></a>');

	}

	if (oemLPbasic === true) {

		//FORM GRAPHIC CHANGE?
		jQuery(".alias-sitebuilder-national-offers-1 .lp-wide.lp-behind img").attr("src", "#PATH");

		//DISCLAIMER TEXT CHANGE?	
		jQuery(".alias-sitebuilder-national-offers-1 .legal.disclaimer").html("#DISCLAIMER");

	}

	if (oemLPadvanced === true) {

		//Default Offer
		var offerTagline_default = 'Finance From 0% For 84 Months';
		var offerURL_default = '/new-inventory/index.htm?model=1500';
		var desktopImgSrc_default = 'https://pictures.dealer.com/a/autocanadatc/0406/ff6e611498cc5b4961beb0b40fd2b879x.jpg';
		var mobileImgSrc_default = 'https://pictures.dealer.com/a/autocanadatc/0838/d9cfcc20b4895addaea45597a4054c31x.jpg';

		//1st Alternative Offer
		var offerParam_1 = '12k';
		var offerTagline_1 = 'Get Up To $12,000 In Holiday Discounts On Select Models OAC';
		var offerSource_1 = '$12,000 In Holiday Discounts';
		var offerURL_1 = '/new-inventory/index.htm?search=&year=2017&make=Dodge&model=Grand+Caravan';
		var landingPageURL_1 = '/promo/national-offers.htm?offer=12k';
		var desktopImgSrc_1 = 'https://pictures.dealer.com/a/autocanadatc/0254/d4febc94f38500c0758b3d19b336f0c6x.jpg';
		var mobileImgSrc_1 = 'https://pictures.dealer.com/a/autocanadatc/1594/0a4a13f98db1831e70c03e51ddc056d8x.jpg';

		//2nd Alternative Offer
		var offerParam_2 = '0for84';
		var offerSource_2 = '0% Financing For Up To 84 Months';
		var offerTagline_2 = 'Get 0% Financing For Up To 84 Months On Select Models OAC';
		var offerURL_2 = '/new-inventory/index.htm?model=1500';
		var landingPageURL_2 = '/promo/national-offers.htm?offer=0for84';
		var desktopImgSrc_2 = 'https://pictures.dealer.com/a/autocanadatc/0406/ff6e611498cc5b4961beb0b40fd2b879x.jpg';
		var mobileImgSrc_2 = 'https://pictures.dealer.com/a/autocanadatc/0838/d9cfcc20b4895addaea45597a4054c31x.jpg';
		
		//3nd Alternative Offer
		var offerParam_3 = '1k';
		var offerSource_3 = '$1000 Holiday Bonus';
		var offerTagline_3 = 'Up To $1000 Holiday Bonus Towards The Purchase Of A New Vehicle';
		var offerURL_3 = '/new-inventory/index.htm';
		//var landingPageURL_3 = '/promo/national-offers.htm?offer=1k';
		var desktopImgSrc_3 = 'https://pictures.dealer.com/a/autocanadatc/1453/15197048a9c5ae80712a17846b843e09x.jpg';
		var mobileImgSrc_3 = 'https://pictures.dealer.com/a/autocanadatc/1961/06422cb9512099bccc84901ebbc0417ex.jpg';
		var disclaimer_3 = 'Images are for illustration purposes only. $1,000 bonus deducted from the purchase price of a new or used vehicle. No cash value. All dealer rebates, discounts, factory incentives, prices, and interest rates are subject to change or end without notice as new retail incentive programs are announced. Some conditions apply. See dealer for details. Offers expire December 31, 2017.';

		//Disclaimer
		
		var initialDisclaimer = 'The No Stress Holiday Shopping Event offers apply to retail deliveries of selected new and unused models purchased from December 1, 2017 to January 2, 2018. Retailer order/trade may be necessary. Offers subject to change and may be extended without notice.   The Make No Payments for 90 Days offer is available from December 1, 2017 to January 2, 2018, inclusive to retail customers who finance a select new 2017/2018 Chrysler, Dodge, Jeep, Ram or FIAT vehicle at a special fixed rate on approved credit through RBC, Scotiabank and TD Auto Finance. Monthly/bi-weekly payments will be deferred for 60 days and contracts will be extended accordingly. Interest charges will not accrue during the first 60 days of the contract. Customers will be responsible for any required down payment, license, registration and insurance costs at time of contract. A maximum of $12,000 in total discounts is available on most 2017 Dodge Grand Caravan models (excluding CVP models) and consists of $8,500 in Consumer Cash, up to $2,500 in Ultimate Family Bonus Cash, and $1,000 in Holiday Bonus Cash. Consumer Cash Discounts are applied before taxes. Some conditions apply. See dealer for complete details.<br/>';
		var remainingDisclaimer = '<br/>The No Stress Holiday Shopping Event offers apply to retail deliveries of selected new and unused models purchased from December 1, 2017 to January 2, 2018. Retailer order/trade may be necessary. Offers subject to change and may be extended without notice.   The Make No Payments for 90 Days offer is available from December 1, 2017 to January 2, 2018, inclusive to retail customers who finance a select new 2017/2018 Chrysler, Dodge, Jeep, Ram or FIAT vehicle at a special fixed rate on approved credit through RBC, Scotiabank and TD Auto Finance. Monthly/bi-weekly payments will be deferred for 60 days and contracts will be extended accordingly. Interest charges will not accrue during the first 60 days of the contract. Customers will be responsible for any required down payment, license, registration and insurance costs at time of contract.  A maximum of $12,000 in total discounts is available on select 2017 Ram 1500 models (excluding Regular Cab/Regular Cab ST) and consists of $9,500 in Consumer Cash, $1,500 in Ram Truck Loyalty/Conquest/Skilled Trades Bonus Cash, and $1,000 in Holiday Bonus Cash. Ram Truck Loyalty/Conquest/Skilled Trades Bonus Cash and is deducted from the negotiated price after taxes. Eligible customers include: 1. Current owners/lessees of a Dodge or Ram Pickup Truck or Large Van or any other manufacturer\'s Pickup Truck or Large Van. The vehicle must have been owned / leased by the eligible customer and registered in their name on or before December 1, 2017. Proof of ownership / Lease agreement will be required 2. Customers who are skilled tradesmen or are acquiring a skilled trade. This includes Licensed Tradesmen, Certified Journeymen or customers who have completed Apprenticeship Certification. A copy of the Trade License/Certification required. Proof of membership is required. Limit one $1,500 bonus cash offer per eligible truck transaction.  Some conditions apply. See dealer for complete details.';
	}
		
	//===== "SET MOBILE BANNER IMAGE SOURCES " =====//

	var mobileBannerDetails = [];
	
	mobileBannerDetails[0] = {
		'imgUrl':  landingPageURL_1,
		'tagline': offerTagline_1,
		'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0131/23cc0161f03a6e58bd1be6e6d0b17336x.jpg'
	};
	
	mobileBannerDetails[1] = {
		'imgUrl':  landingPageURL_2,
		'tagline': offerTagline_2,
		'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/1129/c8d033ef94b67a337650da63a22efc34x.jpg'
	};

	//NO EDITS BELOW


	//+++++++++++++EPRICE BUTTON TEXT CHANGE

	//+++++++ NEW +++++++	

	if (DDC.dataLayer.dealership.stateProvince !== "ON") {

		if (epriceNew === true) {

			//VLP
			jQuery('.inv-type-new .pricing .dialog[data-eprice]').text(ePriceButtonTextNew);

			//VDP
			jQuery('.alias-auto-new-details.vdp .links-list .ddc-btn[data-href*="/eprice-form.htm"]').html('<i class="ddc-icon ddc-icon-banknote"></i>' + ePriceButtonTextNew);

			//MOBILE

			//VLP
			jQuery('.mobile .inv-type-new .pricing .dialog[data-eprice]').text(ePriceButtonTextNew);

			//VDP
			jQuery('.mobile.alias-auto-new-details.vdp .links-list .ddc-btn[data-href*="/eprice-form.htm"]').text(ePriceButtonTextNew);

		}

		//+++++++ USED +++++++ 	

		if (epriceUsed === true) {

			//VLP
			jQuery('.inv-type-used .pricing .dialog[data-eprice]').text(ePriceButtonTextUsed);

			//VDP
			jQuery('.alias-auto-used-details.vdp .links-list .ddc-btn[data-href*="/eprice-form.htm"]').html('<i class="ddc-icon ddc-icon-banknote"></i>' + ePriceButtonTextUsed);

			//MOBILE

			//VLP
			jQuery('.mobile .inv-type-used .pricing .dialog[data-eprice]').text(ePriceButtonTextUsed);

			//VDP
			jQuery('.mobile.alias-auto-used-details.vdp .links-list .ddc-btn[data-href*="/eprice-form.htm"]').text(ePriceButtonTextUsed);

		}

		//+++++++++++++END EPRICE BUTTON TEXT CHANGE

	}

	//+++++++++++++MOBILE BANNER LOGIC

	if ((mobileBanner === true) && (DDC.dataLayer.page.attributes.layoutType === "mobile") && (DDC.dataLayer.page.pageInfo.pageName === "INDEX")) {

		$('.ddc-content.inventory-search-form').after('<div id="mobile-pre-links-list"><div id="mobileSlideshow"></div></div');


		for (var i = 0; i < mobileBannerDetails.length; i++) {


			$('div#mobileSlideshow').append('<a href="'+ mobileBannerDetails[i].imgUrl  + '" title="' + mobileBannerDetails[i].tagline + '"><img src="' + mobileBannerDetails[i].imgSrc + '" alt="' + mobileBannerDetails[i].tagline + '" /></a>');

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

	//+++++++++++++ LANDING PAGE CONTENT PERSONALIZATION
	
	var dynamicContent;
	
	// GET URL PARAM

		jQuery(document).ready(function () {

			// CONTENT PERSONALIZATION JS 
			function getParameterByName(e, a) {
				a || (a = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
				var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
					r = n.exec(a);
				return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
			}
			dynamicContent = getParameterByName("offer");

		});

		if (DDC.dataLayer.page.attributes.layoutType === "desktop") {

			//Desktop JS

			// SINGLE OFFER LANDING PAGE
			jQuery('.chrysler-oem-program-lp .ddc-container.main').prepend('<div id="default-content" class="dynamic-content"><a href="' + offerURL_default + '" class="dynamic-link"  title="View Inventory" id="ext-gen2150"><img src="' + desktopImgSrc_default + '" id="desktop-hero" alt="' + offerTagline_default + '" title="View Inventory"></a></div>');

			if (dynamicContent === offerParam_1) {
				jQuery("#desktop-hero").attr("src", desktopImgSrc_1);
			}
			// Check if the URL parameter is ram
			else if (dynamicContent === offerParam_2) {
				jQuery("#desktop-hero").attr("src", desktopImgSrc_2);
			}
			else if (dynamicContent === offerParam_3) {
				jQuery("#desktop-hero").attr("src", desktopImgSrc_3);
			}


		} else if (DDC.dataLayer.page.attributes.layoutType === "mobile") {

			//Mobile JS	

			// SINGLE OFFER LANDING PAGE
			jQuery('.chrysler-oem-program-lp .mobile.ddc-container').prepend('<div id="default-content" class="dynamic-content"><a href="' + offerURL_default + '" class="dynamic-link"  title="View Inventory" id="ext-gen2150"><img src="' + mobileImgSrc_default + '" id="mobile-hero" alt="' + offerTagline_default + '" title="View Inventory"></a></div>');

			if (dynamicContent === offerParam_1) {
				jQuery("#mobile-hero").attr("src", mobileImgSrc_1);

			}
			// Check if the URL parameter is ram
			else if (dynamicContent === offerParam_2) {
				jQuery("#mobile-hero").attr("src", mobileImgSrc_2);

			}
			else if (dynamicContent === offerParam_3) {
				jQuery("#mobile-hero").attr("src", mobileImgSrc_3);

			}
		} 
		
		// Desktop & Mobile JS
		
		// Add view all inventory cta		
		
		jQuery('.content-oem-program .oem-body-desktop .oem-offers, .content-oem-program .oem-body-mobile .oem-offers').append('<div id="oem-offers-container" class="row"><div class="col-xs-12"><a class="btn btn-lrg btn-primary btn-block" href="/new-inventory/index.htm" title="View Inventory">View All New Inventory</a></div></div></div>');

		
		// Disclaimer
	
		//<span class="read-more-target">

		// jQuery('.content-oem-program.footer').append('<div><input type="checkbox" class="read-more-state" id="post-1" /><p class="read-more-wrap"></span></p><label for="post-1" class="read-more-trigger"></label></div>');

		jQuery('.content-oem-program.footer').append('<div class="disclaimer"><input type="checkbox" class="read-more-state" id="post-1" /><p class="read-more-wrap">' +  initialDisclaimer + '<span class="read-more-target">' + remainingDisclaimer + '</span></p><label for="post-1" class="read-more-trigger"></label></div>');
	
		//Hide Offer Form Field
		jQuery('.ddc-content.contact-form.type-1 input[data-id="Offer"]').closest('.ddc-form-group').addClass('hide-field');
			

		// customize url and alt tag
		if (dynamicContent === offerParam_1) {

			jQuery("a.dynamic-link").attr("href", offerURL_1);
			jQuery("a.dynamic-link").attr("alt", offerTagline_1);
			
			//Inject Offer Into Form Field
			jQuery('.ddc-content.contact-form.type-1 input[data-id="Offer"]').val(offerSource_1);	

		} else if (dynamicContent === offerParam_2) {

			jQuery("a.dynamic-link").attr("href", offerURL_2);
			jQuery("a.dynamic-link").attr("alt", offerTagline_2);
			
			//Inject Offer Into Form Field
			jQuery('.ddc-content.contact-form.type-1 input[data-id="Offer"]').val(offerSource_2);	

		} else if (dynamicContent === offerParam_3) {

			jQuery("a.dynamic-link").attr("href", offerURL_3);
			jQuery("a.dynamic-link").attr("alt", offerTagline_3);
			
			jQuery('.content-oem-program.footer .disclaimer').text(disclaimer_3);
			
			//Inject Offer Into Form Field
			jQuery('.ddc-content.contact-form.type-1 input[data-id="Offer"]').val(offerSource_3);	
			
			//Change Lead Source
			jQuery('input[data-id="source"]').attr('value', offerSource_3 + ' - Dealer.Com Website');

		}



		//+++++++++++++ END LANDING PAGE CONTENT PERSONALIZATION

} // END EXPIRE CONTENT
else {

	////+++++++++++++EPRICE BUTTON TEXT CHANGE
	//jQuery('.vlp .inv-type-new .pricing .dialog[data-eprice]').text('Get ePrice');
	//jQuery('.vdp .links-list .ddc-btn[data-href*="/eprice-form.htm"]').html('<i class="ddc-icon ddc-icon-banknote"></i>Get ePrice');
	//
	////MOBILE
	//jQuery('.vdp .mobile .links-list .ddc-btn[data-href*="/eprice-form.htm"]').text('Get ePrice');
	////+++++++++++++END EPRICE BUTTON TEXT CHANGE

}

//+++++++++++++ EXTERNAL JS FILES

//COMMENT FORMAT
// START promoname.datestart(HH:SS, DD/MM/YYY).dateend(HH:SS, DD/MM/YYY)
// END promoname.datestart(HH:SS, DD/MM/YYY).dateend(HH:SS, DD/MM/YYY)

$.getScript("https://actrader.wpengine.com/wp-content/trader/F11_TURBO_TRADER/JS/THIRD_PARTY/flipclock/flipclock.min.js");

//+++++++++++++ "OEM PROGRAM COUNTDOWN CLOCK"
//RUN SCRIPT WHEN FLIPCLOCK IS LOADED
$.getScript("https://actrader.wpengine.com/wp-content/trader/F11_TURBO_TRADER/JS/THIRD_PARTY/flipclock/flipclock.min.js", function () {

	if (jQuery(".clock-oem-program")[0]) {

		var clock = $('.clock-oem-program').FlipClock(diff, {
			clockFace: 'DailyCounter',
			countdown: true
		});
	} else {
		console.log("No OEM Clock Found");
	}
});
//===== "END OEM PROGRAM COUNTDOWN CLOCK" =====//