// JavaScript Document

// PLACE THIS ON BOTTOM OF BODY JS PAGE SPECIFIC: SET CAMPAIGN EXPIRY DATE - DESKTOP/MOBILE
var currenttime = new Date();
//var endtime = new Date("April 2, 2018 19:59:59"); //Month Days, Year HH:MM:SS

var campaignEnd = new Date("March 31, 2018 19:59:59");

var countdownDiff = (campaignEnd.getTime() / 1000) - (currenttime.getTime() / 1000);
//console.log(now, diff, currenttime);
//SHOW IF WITHIN RANGE

if (countdownDiff >= 0) {
	
	if ((layoutType === "desktop") && (pageName === "INDEX")) {
		
		jQuery('.ddc-content.slideshow-background').after('<div class="content-oem-program"><div class="clock-header row ddc-row"><div class="col-xs-12 col-sm-6"><div class="clock-graphic"></div><div class="clock-heading"></div></div><div class="col-xs-12 col-sm-6"><div class="clock-oem-program"></div></div></div></div>');
		
		jQuery('.content-oem-program .clock-header .clock-graphic').append('<a href="/promo/national-offers.htm"><img title="Dealer Invoice Pricing" src="//pictures.dealer.com/a/autocanadatc/1529/af931116908c24333bc7776634cbf86ex.jpg"></a>');
		
		
	} else if ((layoutType === "mobile") && (pageName === "INDEX")) {
		
		jQuery('#mobile-pre-links-list').after('<div class="content-oem-program"><div class="clock-header row ddc-row"><div class="col-xs-12 col-sm-6"><div class="clock-graphic"></div><div class="clock-heading"></div></div><div class="col-xs-12 col-sm-6"><div class="clock-oem-program"></div></div></div></div>');
		
	} 
	
		jQuery(".content-oem-program").show();
	
}


	//+++++++++++++ "OEM PROGRAM COUNTDOWN CLOCK"
	//RUN SCRIPT WHEN FLIPCLOCK IS LOADED
	$.getScript("https://actrader.wpengine.com/wp-content/trader/F11_TURBO_TRADER/JS/THIRD_PARTY/flipclock/flipclock.min.js", function () {

		if (jQuery(".clock-oem-program")[0]) {

			var clock = $('.clock-oem-program').FlipClock(countdownDiff, {
				clockFace: 'DailyCounter',
				countdown: true
			});
		} else {
			console.log("No OEM Clock Found");
		}
	});
	//===== "END OEM PROGRAM COUNTDOWN CLOCK" =====//