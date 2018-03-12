//AUTOCANADA - F11_PROMO_CHRYSLER.js

// ENABLE/DISABLE PROMOJS FUNCTIONALITY
var indexHero = false;
var oemLPbasic = false;
var oemLPadvanced = true;
var oemLPnew = false;
var epriceNew = false;
var epriceUsed = false;
var countdownClock = false;
var mobileBanner = true;
var holidayHours = false;
var vlpStickyBanner = true;


//Get current dealership name from dataLayer
var dealershipName = DDC.dataLayer.dealership.dealershipName;

//PAGE PARAMS
var pageName = DDC.dataLayer.page.pageInfo.pageName;
var layoutType = DDC.dataLayer.page.attributes.layoutType;

//===== CHRYSLER OEM PROGRAM CSS =====//

if (oemLPnew === true) {

	if (jQuery('.ddc-container.main').width() > 961) {
		jQuery('head').append('<style type="text/css">.chrysler-oem-program-lp button.ui-button-submit{padding: 4px 20px;background: #7a7a7a}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 fieldset{margin-top: 24px}.chrysler-oem-program-lp .recommendations-vehicles > h3{color: white}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 h3{font-weight: 600}button.ui-button-submit:hover{background: #212121}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 h3{border-width: 2px}.chrysler-oem-program-lp h1.ddc-page-title{display: none;}#newDesktopLP{position: relative;}#newDesktopLP a{position: absolute;z-index: 1;left: 50%;transform: translateX(-50%);width: 100%;}#newDesktopLP img{width: 100%;}#newDesktopLP a.active{z-index: 3;}div#LinksContainer{margin-top: 125px;}div#LinksContainer .col-sm-3{padding: 0;}div#LinksContainer .row{margin-left: 0;margin-right: 0;}div#LinksContainer a:hover{opacity: .7;-webkit-transition: opacity .15s ease-in-out;-moz-transition: opacity .15s ease-in-out;-ms-transition: opacity 2s ease-in-out;-o-transition: opacity .15s ease-in-out;transition: opacity .15s ease-in-out;}div#LinksContainer span{display: block;}div#LinksContainer span{display: block;background: #e1e1e1;padding: 5px 10px;text-align: center;color: #333331;font-weight: 600;text-transform: capitalize;}div#LinksContainer button.btn.ddc-btn.btn-primary{margin: 0 auto;display: block;background: #333; width: 150px;}#desktopSlideshow {position:relative;}#desktopSlideshow a {position:absolute;z-index:1; left: 50%;transform: translateX(-50%); width: 100%;}#desktopSlideshow img{width: 100%;}#desktopSlideshow a.active{z-index:3;}button.btn.ddc-btn.btn-primary:hover {background: #9d0a0e}.modal-content button.close {background: none; border: none; font-size: 36px; transform: translate(-3px, -7px); z-index: 100; position: absolute; right: 0;}.btn-primary:before {line-height: 2.0; color: #e70911;}.alias-inventory-listing-default-auto-new .ddc-content.slideshow-default .slideShowWrap {display:none;}</style>');
	} else if (jQuery('.ddc-container.main').width() > 500 && jQuery('.ddc-container.main').width() < 961) {
		jQuery('head').append('<style type="text/css">.chrysler-oem-program-lp button.ui-button-submit{padding: 4px 20px;background: #7a7a7a}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 fieldset{margin-top: 24px}.chrysler-oem-program-lp .recommendations-vehicles > h3{color: black}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 h3{font-weight: 600}button.ui-button-submit:hover{background: #212121}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 h3{border-width: 2px}.chrysler-oem-program-lp h1.ddc-page-title{display: none;}#newDesktopLP{position: relative;}#newDesktopLP a{position: absolute;z-index: 1;left: 50%;transform: translateX(-50%);width: 100%;}#newDesktopLP img{width: 100%;}#newDesktopLP a.active{z-index: 3;}div#LinksContainer{margin-top: 125px;}div#LinksContainer .col-sm-3{padding: 0;}div#LinksContainer .row{margin-left: 0;margin-right: 0;}div#LinksContainer a:hover{opacity: .7;-webkit-transition: opacity .15s ease-in-out;-moz-transition: opacity .15s ease-in-out;-ms-transition: opacity 2s ease-in-out;-o-transition: opacity .15s ease-in-out;transition: opacity .15s ease-in-out;}div#LinksContainer span{display: block;}div#LinksContainer span{display: block;background: #e1e1e1;padding: 5px 10px;text-align: center;color: #333331;font-weight: 600;text-transform: capitalize;}button.btn.ddc-btn.btn-primary{margin: 0 auto;display: block;background: #333;}#desktopSlideshow {position:relative;}#desktopSlideshow a {position:absolute;z-index:1; left: 50%;transform: translateX(-50%); width: 100%;}#desktopSlideshow img{width: 100%;}#desktopSlideshow a.active{z-index:3;}button.btn.ddc-btn.btn-primary:hover {background: #9d0a0e}.modal-content button.close {background: none; border: none; font-size: 36px; transform: translate(-3px, -7px); z-index: 100; position: absolute; right: 0;}.alias-inventory-listing-default-auto-new .ddc-content.slideshow-default .slideShowWrap {display:none;}</style>');
	} else if (jQuery('.ddc-container.main').width() < 500) {
		jQuery('head').append('<style type="text/css">.ddc-content.content-default[data-widget-id="1|2|3"] {display: none;}#second-offer, #third-offer {display:none;}#second-offer-mobile, #third-offer-mobile {display:none;}div#oem-offers-container {margin-top: 30px;}.mobile.ddc-container div#oem-offers-container a.btn.btn-lrg.btn-primary.btn-block {margin-top: 20px}.read-more-state {display: none;}h1.ddc-page-title {display: none;}#newMobileLP {position:relative;}#newMobileLP a {position:absolute;z-index:1; left: 50%;transform: translateX(-50%); width: 100%;}#newMobileLP img{width: 100%;}#newMobileLP a.active{z-index:3;}</style>');
	}

} else {


	if (jQuery('.ddc-container.main').width() > 961) {
		jQuery('head').append('<style type="text/css">.chrysler-oem-program-lp .ddc-content.contact-form.type-1{margin-top:-844px;width:360px;padding:120px 15px;background:#9d0a0e;margin-left:27px;border:1px outset rgb(255, 255, 255); margin-right: -1px;}.chrysler-oem-program-lp button.ddc-btn.ddc-btn-primary.pull-right.ui-button-submit{border:1px solid;padding:4px 20px;background:#7a7a7a}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 fieldset{margin-top:24px}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 .ddc-form-group label span{color:#fff}.chrysler-oem-program-lp .oem-offers h5{font-weight:700}.chrysler-oem-program-lp .recommendations-vehicles > h3{color:black}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 h3{font-weight:600}button.ddc-btn.ddc-btn-primary.pull-right.ui-button-submit:hover{background:#212121}#second-offer,#third-offer{display:none}#second-offer-mobile,#third-offer-mobile{display:none}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 h3,.chrysler-oem-program-lp .ddc-content.contact-form.type-1 span{color:white}.extra-offers{margin:15px}.chrysler-oem-program-lp .ddc-container.main a.btn.btn-lrg.btn-primary.btn-block{margin-bottom:12px}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 h3{border-color:black;border-width:2px}.chrysler-oem-program-lp .ddc-container.main a.btn.btn-lrg.btn-primary.btn-block{margin-bottom:12px}h1.ddc-page-title {display: none;}#newDesktopLP {position:relative;}#newDesktopLP a {position:absolute;z-index:1; left: 50%;transform: translateX(-50%); width: 100%;}#newDesktopLP img{width: 100%;}#newDesktopLP a.active{z-index:3;}div#LinksContainer {margin-top: 285px;}div#LinksContainer .col-sm-3 {padding: 0;}div#LinksContainer .row {margin-left: 0; margin-right: 0;}div#LinksContainer a:hover {opacity: .7;} div#LinksContainer span {display: block;}.alias-inventory-listing-default-auto-new .ddc-content.slideshow-default .slideShowWrap {display:none;}</style>');
	} else if (jQuery('.ddc-container.main').width() > 500 && jQuery('.ddc-container.main').width() < 961) {
		jQuery('head').append('<style type="text/css">.chrysler-oem-program-lp .page-bd .ddc-content.contact-form.type-1 {margin-top: -624px; padding: 44px 25px; background: #9d0a0e; border: 1px outset rgb(255, 255, 255);margin-right: -1px;}.chrysler-oem-program-lp .ddc-content.contact-form.type-1 h3, .chrysler-oem-program-lp .ddc-content.contact-form.type-1 span{color: white;}#second-offer, #third-offer {display:none;}#second-offer-mobile, #third-offer-mobile {display:none;}.extra-offers {margin: 15px;}.ddc-content.contact-form.type-1 h3{border-color: black;border-width:2px;}.ddc-container.main a.btn.btn-lrg.btn-primary.btn-block {margin-bottom: 12px;}h1.ddc-page-title {display: none;}#newDesktopLP {position:relative;}#newDesktopLP a {position:absolute;z-index:1; left: 50%;transform: translateX(-50%); width: 100%;}#newDesktopLP img{width: 100%;}#newDesktopLP a.active{z-index:3;}div#LinksContainer {position: initial; margin-top: 285px;}div#LinksContainer .col-sm-3 {padding: 0;}div#LinksContainer .row {margin-left: 0; margin-right: 0;}div#LinksContainer a:hover {opacity: .7;} div#LinksContainer span {display: block;}.alias-inventory-listing-default-auto-new .ddc-content.slideshow-default .slideShowWrap {display:none;}</style>');
	} else if (jQuery('.ddc-container.main').width() < 500) {
		jQuery('head').append('<style type="text/css">.ddc-content.content-default[data-widget-id="1|2|3"] {display: none;}#second-offer, #third-offer {display:none;}#second-offer-mobile, #third-offer-mobile {display:none;}div#oem-offers-container {margin-top: 30px;}.mobile.ddc-container div#oem-offers-container a.btn.btn-lrg.btn-primary.btn-block {margin-top: 20px}.read-more-state {display: none;}h1.ddc-page-title {display: none;}#newMobileLP {position:relative;}#newMobileLP a {position:absolute;z-index:1; left: 50%;transform: translateX(-50%); width: 100%;}#newMobileLP img{width: 100%;}#newMobileLP a.active{z-index:3;}.alias-inventory-listing-default-auto-new .ddc-content.slideshow-default .slideShowWrap {display:none;}</style>');
	}


}


//===== ADD CLASS TO LANDING PAGE =====//

jQuery('.chrysler.alias-sitebuilder-national-offers-1 body').addClass('chrysler-oem-program-lp');

jQuery('.chrysler.alias-sitebuilder-promo-national-offers-1 body').addClass('chrysler-oem-program-lp');

jQuery('.chrysler.vlp .inv-type-new .pricing-area, .alias-sitebuilder-promo-national-offers-1 body').addClass('chrysler-oem-program');

//===== END ADD CLASS TO LANDING PAGE =====//

// PLACE THIS ON BOTTOM OF BODY JS PAGE SPECIFIC: SET CAMPAIGN EXPIRY DATE - DESKTOP/MOBILE
var currenttime = new Date();
var endtime = new Date("April 2, 2018 19:59:59"); //Month Days, Year HH:MM:SS

var diff = (endtime.getTime() / 1000) - (currenttime.getTime() / 1000);
//console.log(now, diff, currenttime);
//SHOW IF WITHIN RANGE

if (diff >= 0) {

	jQuery('.ddc-content.inventory-search-form').after('<div id="mobile-pre-links-list" class="content-oem-program"><div id="mobileSlideshow"></div></div');

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

		//4th Alternative Offer
		var offerParam_4 = '1k2';
		var offerSource_4 = 'Additional $1000 Off';
		var offerTagline_4 = 'From now until the end of the month get an additional $1000 off a new vehicle purchase';
		var offerURL_4 = '/new-inventory/index.htm';
		//var landingPageURL_4 = '/promo/national-offers.htm?offer=1k';
		var desktopImgSrc_4 = 'https://pictures.dealer.com/a/autocanadatc/1103/cba8f43651b3fb2907931d69c8e85d54x.jpg';
		var mobileImgSrc_4 = 'https://pictures.dealer.com/a/autocanadatc/0892/26744d15611ad01c5ba236ad1d4977d0x.jpg';
		var disclaimer_4 = 'Vehicle for illustration purposes only. Prices are plus tax. All dealer rebates, discounts, factory incentives, prices, and interest rates are subject to change or end without notice as new retail incentive programs are announced. Additional $1,000 will be deducted from the vehicle purchase price upon the purchase of a new Chrysler, Dodge, Jeep, or RAM model. Some conditions apply. See dealer for details. Offer valid for this month only. ';

		//5th Promo Sale LP
		//var offerParam_5 = 'jeep';
		var offerSource_5 = '2017 Jeep Employee Pricing';
		var offerTagline_5 = 'Get Jeep Employee Pricing at $25 above invoice.';
		var offerURL_5 = '/new-inventory/index.htm?make=jeep&year=2017&model=&compositeType=new';
		//var landingPageURL_5 = '/promo/sale.htm?make=jeep&year=2017&model=&compositeType=new';
		var desktopImgSrc_5 = 'https://pictures.dealer.com/a/autocanadatc/0772/6c59fa60ce73255bd46ebfea2bd2cd5bx.jpg';
		var mobileImgSrc_5 = 'https://pictures.dealer.com/a/autocanadatc/1752/b116fd12e28d9bd2c3ca2afb9dfef9adx.jpg';
		var disclaimer_5 = 'Vehicle for illustration purposes only. Prices are plus tax. All dealer rebates, discounts, factory incentives, prices, and interest rates are subject to change or end without notice as new retail incentive programs are announced.  Customers are only eligible when they have received a valid FCA Canada December Dealership Employee Jeep Ambassador Program Certificate, from an eligible FCA Canada Dealership Employee. Certificate will be provided in store, while supplies last. Cannot be combined with any other offer. Some conditions apply. See dealer for details. Offers expire January 2, 2017.';

	}

	//Disclaimer

	var initialDisclaimer = 'The Month of Ram and Jeep No Limits Event offers apply to retail deliveries of selected new and unused models purchased from March 1, 2018 to April 2, 2018 from participating retailers. Retailer order/trade may be necessary. Offers subject to change and may be extended without notice. Although we make every effort to ensure the accuracy of the information and offers on this website, we cannot guarantee that the site will be error-free. Therefore, you should consult a participating retailer for complete details and conditions.<br><br>Purchase Prices in Ontario, Alberta, Saskatchewan, Manitoba, and British Columbia include Consumer Cash Discounts and other incentives (where applicable), freight ($1,795 - $2,495), air conditioning charge, OMVIC/AMVIC fee and tire levy and exclude taxes, licence, insurance, any retailer administration fees and other retailer charges (if applicable) and other applicable fees and charges. Quebec Purchase Prices include Consumer Cash Discounts and other incentives (where applicable), freight ($1,795 - $2,495), and air conditioning charge, and exclude only licence, insurance, duties on new tires ($15) and applicable taxes, which will be required on purchase. In the rest of Canada, Purchase Prices include Consumer Cash Discounts and other incentives (where applicable) and exclude freight ($1,795 - $2,495), air conditioning charge, licence, insurance, any retailer administration fees and other retailer charges (if applicable) and other applicable fees and taxes. Retailers may sell for less. See participating retailers for complete details.<br>';
	var remainingDisclaimer = '<br>"Starting at" price represents the Manufacturer\'s Suggested Retail Price (MSRP) for the base model minus Total Discounts (where applicable). Price does not include taxes, freight (from $1,695 to $2,495), insurance, registration, licence, A/C charge, retailer administration fees and other charges, and new tire duties (in Quebec). Model shown may be an upgraded model. Total Discounts may vary from time to time and may vary considerably by model and trim. Total Discounts include Consumer Cash Discounts, which are applied before taxes, and/or Bonus Cash Discounts, which are applied after taxes. Retailers may sell for less. See your retailer for complete details.';


	//===== "SET MOBILE BANNER IMAGE SOURCES " =====//

	//	var mobileBannerDetails = [];
	//	
	//	mobileBannerDetails[0] = {
	//		'imgUrl':  '/new-inventory/index.htm?search=Grand+Cherokee+OR+1500+OR+Compass+AND+%21Caravan',
	//		'tagline': '4x4 Winter Event',
	//		'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/1016/ce5d5d74ce47a0c85481f2c80ce81cbdx.jpg'
	//	};
	//	
	//	mobileBannerDetails[1] = {
	//		'imgUrl':  '/new-inventory/index.htm?year=2017&make=Dodge&model=Grand+Caravan',
	//		'tagline': 'Grand Caravan Bonus Cash',
	//		'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/1529/2d0d8197fd554c249cbce3efaa64d991x.jpg'
	//	};
	//	
	//	mobileBannerDetails[2] = {
	//		'imgUrl':  '/new-inventory/index.htm',
	//		'tagline': 'We Come To You - Test Drive, Purchase, Finance in the comfort of your own driveway.',
	//		'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0234/dc96af9616166bcf618b0c1c9b2d3e9cx.jpg'
	//	};

	//===== "SET NEW DESKTOP LP IMAGE SOURCES " =====//


	// CHRYSLER OFFERS
	var chryslerOffer = [];

	chryslerOffer[0] = {
		'offerTagline': '2017 RAM 1500 Now 25% Off MSRP - That\'s Up To $20,300 In Total Discounts On Select Models OAC',
		'landingPageUrl': '/new-inventory/index.htm?year=2017&make=Ram&model=1500',
		'desktopWB': 'http://pictures.dealer.com/a/autocanadatc/0532/41c425c2751f0b4f262b4cde3f7997a6x.jpg',
		'desktopVLP': 'http://pictures.dealer.com/a/autocanadatc/0975/723e425db237dc92910d632bafb1fb6dx.jpg',
		'desktopLP': 'http://pictures.dealer.com/a/autocanadatc/1532/8a0c07869c0820b62c5f013c20f7d03cx.jpg',
		'mobileWB': 'http://pictures.dealer.com/a/autocanadatc/0442/94829554a532f8ed400f3454d88600a2x.jpg',
		'mobileLP': 'http://pictures.dealer.com/a/autocanadatc/1220/16d7d7f1f6a8435a0751bac1cd144a27x.jpg',
		'offerParam': 'ram'
	};

	chryslerOffer[1] = {
		'offerTagline': 'Up To 15% Off MSRP On Select Models OAC',
		'landingPageUrl': '/new-inventory/index.htm?make=Jeep',
		'desktopWB': 'http://pictures.dealer.com/a/autocanadatc/0944/bc0f04e6bca30e68863d5382bc6829aax.jpg',
		'desktopVLP': 'http://pictures.dealer.com/a/autocanadatc/0268/43961186f02743126330c3c4a1f55683x.jpg',
		'desktopLP': 'http://pictures.dealer.com/a/autocanadatc/0320/07eb8607770a1041dd63fb6cf78ba4e1x.jpg',
		'mobileWB': 'http://pictures.dealer.com/a/autocanadatc/1362/63b5b00035f3e8cf74558022171da48fx.jpg',
		'mobileLP': 'http://pictures.dealer.com/a/autocanadatc/0377/43d43a59e0d08624967289a4349252c1x.jpg',
		'offerParam': 'jeep'
	};

	chryslerOffer[2] = {
		'offerTagline': 'Up To $11,000 In Total Discounts On Remaining 2017 Dodge Grand Caravans',
		'landingPageUrl': '/new-inventory/index.htm?year=2017&make=Dodge&model=Grand+Caravan',
		'desktopWB': 'http://pictures.dealer.com/a/autocanadatc/1812/95fa288ec7c3f878d67f831dea786f21x.jpg',
		'desktopVLP': 'http://pictures.dealer.com/a/autocanadatc/0027/fcd80a71f41a147faeba831f71a10a92x.jpg',
		'desktopLP': 'http://pictures.dealer.com/a/autocanadatc/0100/b48c058cd7b16bb0e748a8f41951e593x.jpg',
		'mobileWB': 'http://pictures.dealer.com/a/autocanadatc/1340/5b63e441f5e844de9fb04189d0b47fa4x.jpg',
		'mobileLP': 'http://pictures.dealer.com/a/autocanadatc/1191/4d50f32d206e7c596cad5b8714caa045x.jpg',
		'offerParam': 'dodge'
	};


	if (dealershipName === 'Ponoka Dodge Chrysler Jeep Ram') { 
	
		chryslerOffer[3] = {
			'offerTagline': 'March Lease Markdown Mania',
			'landingPageUrl': '/new-inventory/index.htm',
			'desktopVLP': 'http://pictures.dealer.com/p/ponokachryslerjeeptc/0751/e39435f33532bd3ce889e52821b1e2e9x.jpg',
			'mobileWB': 'http://pictures.dealer.com/p/ponokachryslerjeeptc/0186/571bf229753d922894be4e3b1c7a9bd2x.jpg',
			'offerParam': 'jeepMarkdown'
		};

		chryslerOffer[4] = {
			'offerTagline': 'March Lease Markdown Mania',
			'landingPageUrl': '/new-inventory/index.htm',
			'desktopVLP': 'http://pictures.dealer.com/p/ponokachryslerjeeptc/1640/bec7e08a694e9734624909f3b7945b09x.jpg',
			'mobileWB': 'http://pictures.dealer.com/p/ponokachryslerjeeptc/1427/f7186c1879131f44b960eac37a444afbx.jpg',
			'offerParam': 'ramMarkdown'
		};
	
	}
	
	if (dealershipName === 'Wellington Motors') {
		
			chryslerOffer[0] = {
				'offerTagline': '2017 RAM 1500 Now 33% Off MSRP - That\'s Up To $21,675 In Total Discounts On Select Models OAC',
				'landingPageUrl': '/certified-inventory/index.htm?year=2017&make=Ram&model=1500',				
				'desktopVLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0154/1d0f259f5a21e3ee6300b3f014f8e962x.jpg',
				'desktopLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0009/3d276414af48482f884ad74259357725x.jpg',
				'mobileWB': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0497/2ca26a9f72971a91c15f255a00e4f294x.jpg',
				'mobileLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1283/fd16a44a485894806b06b05df3219a05x.jpg',
			};

			chryslerOffer[2] = {
				'offerTagline': 'Up To 35% Off On Select 2017 Dodge Grand Caravans',
				'landingPageUrl': '/certified-inventory/index.htm?year=2017&make=Dodge&model=Grand+Caravan',
				'desktopVLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1971/00f82974a2b138fecbc123ae8956cfaax.jpg',
				'desktopLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1394/6293904fa5fb8a5532fa848303d24839x.jpg',
				'mobileWB': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1116/dbf0094ddb680fb4ba2dfde612e1fd22x.jpg',
				'mobileLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0189/9c96e247e8248f0082dd23314c0d992ex.jpg',
			};
		
	} 
	

	var replaceOEMoffer = {
		'Ponoka Dodge Chrysler Jeep Ram': [],
		'Grande Prairie Dodge Chrysler Jeep Ram': [],
		'Wellington Motors': []
	};

	if (replaceOEMoffer[dealershipName] === replaceOEMoffer['Ponoka Dodge Chrysler Jeep Ram']) {
		replaceOEMoffer['Ponoka Dodge Chrysler Jeep Ram'][0] = {
			'offerTagline': '2017 RAM 1500 Now 30% Off MSRP - That\'s Up To $23,943 In Total Discounts On Select Models OAC',
			'landingPageUrl': '/new-inventory/index.htm?year=2017&make=Ram&model=1500',
			'desktopWB': 'https://pictures.dealer.com/p/ponokachryslerjeeptc/0517/a5c6578734bf107c719e6847594b1229x.jpg',
			'desktopVLP': 'http://pictures.dealer.com/p/ponokachryslerjeeptc/0973/6930c3a13489cce6c6303ba32f0c8fc9x.jpg',
			'desktopLP': 'http://pictures.dealer.com/p/ponokachryslerjeeptc/1708/15bc39a00e8e9494dfc78ae0b170e4f4x.jpg',
			'mobileWB': 'http://pictures.dealer.com/p/ponokachryslerjeeptc/0221/c42cd0e5331e7f3f4c617afa18b053e2x.jpg',
			'mobileLP': 'http://pictures.dealer.com/p/ponokachryslerjeeptc/1787/32373ea6ff93bef045765befe5a93cefx.jpg',
			'indexPosition': 0,
			'expiryDate': new Date('April 2, 2018 19:59:59')
		};


	} else if (replaceOEMoffer[dealershipName] === replaceOEMoffer['Grande Prairie Dodge Chrysler Jeep Ram']) {
		replaceOEMoffer['Grande Prairie Dodge Chrysler Jeep Ram'][0] = {
			'offerTagline': '2017 RAM 1500 Now 35% Off MSRP - That\'s Up To $25,000 In Total Discounts On Select Models OAC',
			'landingPageUrl': '/new-inventory/index.htm?year=2017&make=Ram&model=1500',
			'desktopWB': 'https://pictures.dealer.com/g/grandeprairiechryslertc/1904/29636f1b159fe1951f2f0c3991812209x.jpg',
			'desktopVLP': 'https://pictures.dealer.com/g/grandeprairiechryslertc/1501/d8cd79bca5278dc0d1848fac10761cd6x.jpg',
			'desktopLP': 'http://pictures.dealer.com/g/grandeprairiechryslertc/1648/f594c9ee4b6fb025f5eb83d260d93f25x.jpg',
			'mobileWB': 'http://pictures.dealer.com/g/grandeprairiechryslertc/1496/29c555f742604e0dab6745396d8c0a2fx.jpg',
			'mobileLP': 'http://pictures.dealer.com/g/grandeprairiechryslertc/1529/7db4e8ca637e74acce73f58749250204x.jpg',
			'indexPosition': 0,
			'expiryDate': new Date('April 2, 2018 19:59:59')
		};
	} else if (replaceOEMoffer[dealershipName] === replaceOEMoffer['Wellington Motors']) {
		replaceOEMoffer['Wellington Motors'][0] = {
			'offerTagline': '2017 RAM 1500 Now 35% Off MSRP - That\'s Up To $25,000 In Total Discounts On Select Models OAC',
			'landingPageUrl': '/new-inventory/index.htm?year=2017&make=Ram&model=1500',
			'desktopWB': 'https://pictures.dealer.com/g/grandeprairiechryslertc/1904/29636f1b159fe1951f2f0c3991812209x.jpg',
			'desktopVLP': 'https://pictures.dealer.com/g/grandeprairiechryslertc/1501/d8cd79bca5278dc0d1848fac10761cd6x.jpg',
			'desktopLP': 'http://pictures.dealer.com/g/grandeprairiechryslertc/1648/f594c9ee4b6fb025f5eb83d260d93f25x.jpg',
			'mobileWB': 'http://pictures.dealer.com/g/grandeprairiechryslertc/1496/29c555f742604e0dab6745396d8c0a2fx.jpg',
			'mobileLP': 'http://pictures.dealer.com/g/grandeprairiechryslertc/1529/7db4e8ca637e74acce73f58749250204x.jpg',
			'indexPosition': 0,
			'expiryDate': new Date('April 2, 2018 19:59:59')
		};

	}




		//	replaceOEMoffer['Northland Volkswagen'][0] = {
		//		'tagline': '2017 Jetta Trendline 1.4T',
		//		'headline': '<h5>Now $215/month <br><br> With $0 Down Payment and $600 Bonus Cash</h5>',
		//		'filterdVLP': '/new-inventory/index.htm?year=2017&model=Jetta',
		//		'desktopLPstandard': '//pictures.dealer.com/n/northlandvolkswagentc/0365/1e84bb9754f11cafa394b3717a45fc9fx.jpg',
		//		'desktopLPturbo': null,
		//		'mobileLP': '//pictures.dealer.com/n/northlandvolkswagentc/1431/03564760fb1b254e6c48f3bcd767d402x.jpg',
		//		'expiryDate': new Date('February 28, 2018 19:59:59')
		//	};


		var dealerSpecificBanner = {
			//'Eastern Dodge Chrysler Jeep Ram': [],
			//'Ponoka Dodge Chrysler Jeep Ram': [],
			//'Grande Prairie Dodge Chrysler Jeep Ram': []
		};

		//	dealerSpecificBanner['Eastern Dodge Chrysler Jeep Ram'][0] = {
		//	'offerTagline': '$99 Buck Truck - $99 Monthly Payments Up To 1 Year on Select Models',
		//	'landingPageUrl': '/promo/99-buck-truck.htm',
		//	'mobileWB': '//pictures.dealer.com/e/easternchryslerdodgejeeptc/0225/ac40a489a16d6be7ecba8f5b66b0d660x.jpg',
		//	'priority': true,
		//	'expiryDate': new Date("February 28, 2018 19:59:59") // null
		//	};
		//	
		//	dealerSpecificBanner['Ponoka Dodge Chrysler Jeep Ram'][0] = {
		//	'offerTagline': '10% Off Mopar Accessories and Installation',
		//	'landingPageUrl': '/specials/parts.htm',
		//	'mobileWB': '//pictures.dealer.com/p/ponokachryslerjeeptc/1694/0286da7d30555b64fc000d1778746334x.jpg',
		//	'priority': false,
		//	'expiryDate': new Date("February 28, 2018 19:59:59") // null
		//	};
		//
		//	dealerSpecificBanner['Ponoka Dodge Chrysler Jeep Ram'][1] = {
		//	'offerTagline': '10% Off All Detail Packages',
		//	'landingPageUrl': '/specials/service.htm',
		//	'mobileWB': '//pictures.dealer.com/p/ponokachryslerjeeptc/0098/d29436ee2cedcbbf3de394b95e73f21bx.jpg',
		//	'priority': false,
		//	'expiryDate': new Date("February 28, 2018 19:59:59") // null
		//	};

		//NO EDITS BELOW

	
		var dynamicContent;

			// GET URL PARAM

			jQuery(document).ready(function () {

				// CONTENT PERSONALIZATION JS 
				function getParameterByName(e, a) {
					a || (a = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
					var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
						r = n.exec(a);
					return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null;
				}
				dynamicContent = getParameterByName("offer");

			});
	

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

		//+++++++++++++ NEW LANDING PAGE LOGIC

		// DESKTOP LANDING PAGE

		if ((oemLPnew === true) && (layoutType === "desktop") && ((pageName === "SITEBUILDER_NATIONAL_OFFERS_1") || (pageName === "SITEBUILDER_PROMO_NATIONAL_OFFERS_1"))) {

			// INSERT DESKTOP BANNER

			$('.content-oem-program .oem-body-desktop').append('<div id="SlideshowContainer"><div id="newDesktopLP"></div></div>');

			$('#SlideshowContainer').prepend('<div id="desktopSlideshow"></div>');


			for (var i = 0; i < chryslerOffer.length; i++) {


				$('div#newDesktopLP').append('<a href="' + chryslerOffer[i].landingPageUrl + '" title="' + chryslerOffer[i].offerTagline + '"><img src="' + chryslerOffer[i].desktopVLP + '" alt="' + chryslerOffer[i].offerTagline + '" /></a>');

			}


			$('div#newDesktopLP a:first-of-type').addClass('active');

			function cycleImages() {
				var $active = $('#newDesktopLP .active');
				var $next = ($active.next().length > 0) ? $active.next() : $('#newDesktopLP a:first');
				$next.css('z-index', 2); //move the next image up the pile
				$active.fadeOut(1500, function () { //fade out the top image
					$active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
					$next.css('z-index', 3).addClass('active'); //make the next image the top one
				});
			}

			//$(document).ready(function () {
			// run every 3s

			if ($('div#newDesktopLP a').length > 1) {

				setInterval('cycleImages()', 3000);
			}

			//});

		}

		// MOBILE LANDING PAGE

		if ((oemLPnew === true) && (layoutType === "mobile") && ((pageName === "SITEBUILDER_NATIONAL_OFFERS_1") || (pageName === "SITEBUILDER_PROMO_NATIONAL_OFFERS_1"))) {


			// INSERT MOBILE BANNER

			$('.content-oem-program .oem-body-mobile').append('<div id="SlideshowContainer"><div id="newMobileLP"></div></div>');

			for (var i = 0; i < chryslerOffer.length; i++) {

				$('div#newMobileLP').append('<a href="' + chryslerOffer[i].landingPageUrl + '" title="' + chryslerOffer[i].offerTagline + '"><img src="' + chryslerOffer[i].mobileWB + '" alt="' + chryslerOffer[i].offerTagline + '" /></a>');

			}

			$('div#newMobileLP a:first-of-type').addClass('active');

			function cycleImages() {
				var $active = $('#newMobileLP .active');
				var $next = ($active.next().length > 0) ? $active.next() : $('#newMobileLP a:first');
				$next.css('z-index', 2); //move the next image up the pile
				$active.fadeOut(1500, function () { //fade out the top image
					$active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
					$next.css('z-index', 3).addClass('active'); //make the next image the top one
				});
			}

			//$(document).ready(function () {
			// run every 3s

			if ($('div#newMobileLP a').length > 1) {

				setInterval('cycleImages()', 3000);
			}

			//});

		}

		// MOBILE LANDING PAGE

		//+++++++++++++END NEW LANDING PAGE LOGIC


		//+++++++++++++MOBILE BANNER LOGIC

		if ((mobileBanner === true) && (DDC.dataLayer.page.attributes.layoutType === "mobile")) {

			// REPLACE OEM BANNER LOGIC
			if (replaceOEMoffer[dealershipName]) {

				for (var i = 0; i < replaceOEMoffer[dealershipName].length; i++) {

					var indexPosition = replaceOEMoffer[dealershipName][i].indexPosition;

					if (indexPosition !== undefined) {

						chryslerOffer[indexPosition] = {
							'offerTagline': replaceOEMoffer[dealershipName][0].offerTagline,
							'landingPageUrl': replaceOEMoffer[dealershipName][0].landingPageUrl,
							'mobileWB': replaceOEMoffer[dealershipName][0].mobileWB,
							'desktopVLP': replaceOEMoffer[dealershipName][0].mobileWB,
							'expiryDate': new Date(replaceOEMoffer[dealershipName][0].expiryDate) // null
						};

					}

				}

			}

			// DEALER-SPECIFIC BANNER LOGIC
			if (dealerSpecificBanner[dealershipName] !== undefined) {

				for (var i = 0; i < dealerSpecificBanner[dealershipName].length; i++) {

					if (dealerSpecificBanner[dealershipName][i].expiryDate === null || currenttime < dealerSpecificBanner[dealershipName][i].expiryDate) {

						if (dealerSpecificBanner[dealershipName][i].priority === true) {

							chryslerOffer.unshift(dealerSpecificBanner[dealershipName][i]);

						} else if (dealerSpecificBanner[dealershipName][i].priority === false) {

							chryslerOffer.push(dealerSpecificBanner[dealershipName][i]);

						}

					}

				}
			}


			for (var i = 0; i < chryslerOffer.length; i++) {

				$('div#mobileSlideshow').append('<a href="' + chryslerOffer[i].landingPageUrl + '" title="' + chryslerOffer[i].offerTagline + '" onclick="dataLayer.push({\'event\': \'trackEvent\',\'eventCategory\': \'***Slideshow Click\', \'eventAction\': \'' + chryslerOffer[i].landingPageUrl + '\', \'eventLabel\' : \'Position ' + (i + 1) + '\',\'eventValue\': \'undefined\' });"><img src="' + chryslerOffer[i].mobileWB + '" alt="' + chryslerOffer[i].offerTagline + '" /></a>');

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


		//+++++++++++++ START VLP STICKY BANNER LOGIC


		if (vlpStickyBanner === true) {

			if (pageName === 'INVENTORY_LISTING_DEFAULT_AUTO_NEW') {

				//QUERY SEARCH PARAMS
				var params = DDC.dataLayer.page.pageInfo.params;
				var year = DDC.dataLayer.page.queryFacets.year;
				var make = DDC.dataLayer.page.queryFacets.make;

				if ((year === "2017") && (make === "Ram") && (params.search("1500") >= 0)) {

					var offerId = 0;

				} else if (make === "Jeep") {

					var offerId = 1;

				} else if ((year === "2017") && (make === "Dodge") && (params.search("Grand Caravan"))) {

					var offerId = 2;

				} else if ((dealershipName === 'Ponoka Dodge Chrysler Jeep Ram') && (dynamicContent === 'jeepmarkdown')) {

					var offerId = 3;
				
				} else if ((dealershipName === 'Ponoka Dodge Chrysler Jeep Ram') && (dynamicContent === 'rammarkdown')) {

					var offerId = 4;


				} else {
					//SHOW DEFAULT TRADER SLIDESHOW IF NO CONDITIONS MATCH
					jQuery(".ddc-content.slideshow-default .slideShowWrap").show();
				}

				
				if (offerId) {
					
					if (layoutType === 'desktop') {

					jQuery(".ddc-content.inventory-listing-default").prepend('<div id="vlp-fixed-banner" class="fixed"><a href="' + chryslerOffer[offerId].landingPageUrl + '" title="View Additional Offer Details"><img src="' + chryslerOffer[offerId].desktopVLP + ' " alt="' + chryslerOffer[offerId].offerTagline + '"/></a></div>');

						} else if (layoutType === 'mobile') {

							jQuery(".ddc-content.inventory-listing-default").prepend('<div id="vlp-fixed-banner" class="fixed"><a href="' + chryslerOffer[offerId].landingPageUrl + '" title="View Inventory"><img src="' + chryslerOffer[offerId].mobileWB + ' " alt="' + chryslerOffer[offerId].offerTagline + '"/></a></div>');

						}
					
					
				}


			}


		}



		//+++++++++++++ END VLP STICKY BANNER LOGIC



		//+++++++++++++ LANDING PAGE CONTENT PERSONALIZATION

		if (oemLPadvanced === true) {


			if (DDC.dataLayer.page.attributes.layoutType === "desktop") {

				//Desktop JS

				// SINGLE OFFER LANDING PAGE
				jQuery('.chrysler-oem-program-lp .main').prepend('<div id="default-content" class="dynamic-content"><a href="' + chryslerOffer[0].landingPageUrl + '" class="dynamic-link"  title="View Inventory" id="ext-gen2150"><img src="' + chryslerOffer[0].desktopLP + '" id="desktop-hero" alt="' + chryslerOffer[0].offerTagline + '" title="View Inventory"></a></div>');

				if (dynamicContent === chryslerOffer[0].offerParam) {
					jQuery("#desktop-hero").attr("src", chryslerOffer[0].desktopLP);
					jQuery("#default-content a").attr("href", chryslerOffer[0].landingPageUrl);
					jQuery("#default-content img").attr("alt", chryslerOffer[0].offerTagline);

				}
				// Check if the URL parameter is ram
				else if (dynamicContent === chryslerOffer[1].offerParam) {
					jQuery("#desktop-hero").attr("src", chryslerOffer[1].desktopLP);
					jQuery("#default-content a").attr("href", chryslerOffer[1].landingPageUrl);
					jQuery("#default-content img").attr("alt", chryslerOffer[1].offerTagline);

				} else if (dynamicContent === chryslerOffer[2].offerParam) {
					jQuery("#desktop-hero").attr("src", chryslerOffer[2].desktopLP);
					jQuery("#default-content a").attr("href", chryslerOffer[2].landingPageUrl);
					jQuery("#default-content img").attr("alt", chryslerOffer[2].offerTagline);

				}

			} else if (DDC.dataLayer.page.attributes.layoutType === "mobile") {

				//Mobile JS	

				// SINGLE OFFER LANDING PAGE
				jQuery('.chrysler-oem-program-lp .mobile.ddc-container').prepend('<div id="default-content" class="dynamic-content"><a href="' + chryslerOffer[0].landingPageUrl + '" class="dynamic-link"  title="View Inventory" id="ext-gen2150"><img src="' + chryslerOffer[0].mobileLP + '" id="mobile-hero" alt="' + chryslerOffer[0].offerTagline + '" title="View Inventory"></a></div>');

				if (dynamicContent === chryslerOffer[0].offerParam) {
					jQuery("#mobile-hero").attr("src", chryslerOffer[0].mobileLP);
					jQuery("#default-content a").attr("href", chryslerOffer[0].landingPageUrl);
					jQuery("#default-content img").attr("alt", chryslerOffer[0].offerTagline);

				}
				// Check if the URL parameter is ram
				else if (dynamicContent === chryslerOffer[1].offerParam) {
					jQuery("#mobile-hero").attr("src", chryslerOffer[1].mobileLP);
					jQuery("#default-content a").attr("href", chryslerOffer[1].landingPageUrl);
					jQuery("#default-content img").attr("alt", chryslerOffer[1].offerTagline);

				} else if (dynamicContent === chryslerOffer[2].offerParam) {
					jQuery("#mobile-hero").attr("src", chryslerOffer[2].mobileLP);
					jQuery("#default-content a").attr("href", chryslerOffer[2].landingPageUrl);
					jQuery("#default-content img").attr("alt", chryslerOffer[2].offerTagline);

				}
			}

		}
		// Desktop & Mobile JS

		// Add view all inventory cta		

		//jQuery('.content-oem-program .oem-body-desktop .oem-offers, .content-oem-program .oem-body-mobile .oem-offers').append('<div id="oem-offers-container" class="row"><div class="col-xs-12"><a class="btn btn-lrg btn-primary btn-block" href="/new-inventory/index.htm" title="View Inventory">View All New Inventory</a></div></div></div>');


		// Disclaimer

		//<span class="read-more-target">

		// jQuery('.content-oem-program.footer').append('<div><input type="checkbox" class="read-more-state" id="post-1" /><p class="read-more-wrap"></span></p><label for="post-1" class="read-more-trigger"></label></div>');

		jQuery('.content-oem-program.footer').append('<div class="disclaimer"><input type="checkbox" class="read-more-state" id="post-1" /><p class="read-more-wrap">' + initialDisclaimer + '<span class="read-more-target">' + remainingDisclaimer + '</span></p><label for="post-1" class="read-more-trigger"></label></div>');

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

		} else if (dynamicContent === offerParam_4) {

			jQuery("a.dynamic-link").attr("href", offerURL_4);
			jQuery("a.dynamic-link").attr("alt", offerTagline_4);

			jQuery('.content-oem-program.footer .disclaimer').text(disclaimer_4);

			//Inject Offer Into Form Field
			jQuery('.ddc-content.contact-form.type-1 input[data-id="Offer"]').val(offerSource_4);

			//Change Lead Source
			jQuery('input[data-id="source"]').attr('value', offerSource_4 + ' - Dealer.Com Website');

		}

		// CUSTOM LANDING PAGE TEMPLATE 

		//PROMO/SALE

		var promoSaleLP = $('html').hasClass('alias-sitebuilder-sale-1');

		if (promoSaleLP) {

			jQuery('.lpContainer a').attr('href', offerURL_5);
			jQuery('.lpContainer img.hidden-xs').attr('src', desktopImgSrc_5);
			jQuery('.lpContainer img.hidden-sm-up').attr('src', mobileImgSrc_5);
			jQuery('.lpContainer img').attr('alt', offerTagline_5);

			//Set Disclaimer
			jQuery('.disclaimer').append(disclaimer_5);

			//Change Lead Source
			jQuery('input[data-id="source"]').attr('value', offerSource_5 + ' - Dealer.Com Website');

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

	//===== START HOLIDAY HOURS JS =====//

	if (holidayHours === true) {

		var holidayHoursApp = (function () {
			//Set holiday hours
			var holidayHours = {
				'Courtesy Chrysler Dodge Jeep Ram': {
					'date': {
						'23': {
							'sales': '8:30am-5:00pm',
							'parts': null,
							'service': null
						},
						'24': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': '10:00am - 4:00pm',
							'parts': 'closed',
							'service': 'closed'
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'31': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				},
				'Dartmouth Chrysler Jeep Dodge': {
					'date': {
						'23': {
							'sales': '9:00am - 6:00pm',
							'parts': null,
							'service': null
						},
						'24': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'27': {
							'sales': '9:00am - 8:00pm',
							'parts': null,
							'service': null
						},
						'30': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'31': {
							'sales': '9:00am - 6:00pm',
							'parts': null,
							'service': null
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': '9:00am - 8:00pm',
							'parts': null,
							'service': null
						}
					}
				},
				'Tower Chrysler': {
					'date': {
						'23': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'24': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': '10:00am - 6:00pm',
							'parts': '8:30am - 3:30pm',
							'service': null
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'31': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				},
				'Toronto Chrysler': {
					'date': {
						'23': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'24': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'31': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				},
				'Wellington Motors': {
					'date': {
						'23': {
							'sales': '9:00am - 4:00pm',
							'parts': null,
							'service': null
						},
						'24': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'31': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				},
				'Moncton Chrysler Jeep Dodge': {
					'date': {
						'23': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'24': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'31': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				},
				'Ponoka Chrysler Jeep Dodge': {
					'date': {
						'23': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'24': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'31': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				},
				'Okanagan Chrysler Jeep Dodge': {
					'date': {
						'23': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'24': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'31': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				},
				'Capital Chrysler Jeep Dodge Ram Fiat': {
					'date': {
						'23': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'24': {
							'sales': '11:00am - 4:00pm',
							'parts': 'closed',
							'service': 'closed'
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': '11:00am - 4:00pm',
							'parts': 'closed',
							'service': 'closed'
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'31': {
							'sales': '11:00am - 4:00pm',
							'parts': 'closed',
							'service': 'closed'
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				},
				'Eastern Chrysler Dodge Jeep': {
					'date': {
						'23': {
							'sales': '9:00am - 6:00pm',
							'parts': '8:00am - 4:00pm',
							'service': '8:00am - 4:00pm'
						},
						'24': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': '11:00am - 4:00pm',
							'parts': 'closed',
							'service': 'closed'
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'31': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				},
				'Grande Prairie Chrysler Dodge Jeep Ram Fiat': {
					'date': {
						'23': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'24': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': '12:00pm - 5:00pm',
							'parts': 'closed',
							'service': 'closed'
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'31': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				},
				'Maple Ridge Chrysler Jeep Dodge': {
					'date': {
						'23': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'24': {
							'sales': '10:00am - 5:00pm',
							'parts': null,
							'service': null
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': '10:00am - 5:00pm',
							'parts': 'closed',
							'service': 'closed'
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'31': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				},
				'Northland Chrysler Jeep Dodge': {
					'date': {
						'23': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'24': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'31': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				},
				'Crosstown Auto Centre': {
					'date': {
						'23': {
							'sales': null,
							'parts': 'closed',
							'service': 'closed'
						},
						'24': {
							'sales': '11:00am - 4:00pm',
							'parts': null,
							'service': null
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': '10:00am - 5:00pm',
							'parts': 'closed',
							'service': 'closed'
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': null,
							'parts': 'closed',
							'service': 'closed'
						},
						'31': {
							'sales': '11:00am - 4:00pm',
							'parts': 'closed',
							'service': 'closed'
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				},
				'Airdrie Chrysler Dodge Jeep': {
					'date': {
						'23': {
							'sales': '9:00am - 5:00pm',
							'parts': null,
							'service': null
						},
						'24': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'25': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'26': {
							'sales': '9:00am - 5:00pm',
							'parts': 'closed',
							'service': 'closed'
						},
						'27': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'30': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'31': {
							'sales': null,
							'parts': null,
							'service': null
						},
						'1': {
							'sales': 'closed',
							'parts': 'closed',
							'service': 'closed'
						},
						'2': {
							'sales': null,
							'parts': null,
							'service': null
						}
					}
				}
			};
			//Get current dayOfMonth
			var d = new Date();
			var dayOfMonth = d.getDate();
			//Override day of month for testing
			//dayOfMonth = 28;  //Comment out if not in use

			//Set daysOfMonth Array to access holidayHours object
			var daysOfMonth = [23, 24, 25, 26, 27, 30, 31, 1, 2];
			//Set based on dayOfWeek from daysOfMonth 
			//ie. 23 is saturday which is 6th day of the week
			var dayOfWeekInt = [6, 7, 1, 2, 3, 6, 7, 1, 2];
			var holidayLabels = {
				'24': 'Christmas Eve',
				'25': 'Christmas Day',
				'26': 'Boxing Day',
				'31': 'New Year\'s Eve',
				'1': 'New Year\'s Day'
			};

			//Set variable to loop through daysOfWeekInt
			var i = 0;
			//Initialize week variable
			var week;

			//Set-up nav click listener
			var navClicked = function () {

				if (week === 'first') {

					jQuery('ul.navbar-nav a:contains("Parts & Service")').on('click', firstWeek(updateNavMenu));

				} else if (week === 'second') {

					jQuery('ul.navbar-nav a:contains("Parts & Service")').on('click', secondWeek(updateNavMenu));
				}
			}

			//Change Hours In One Week Interval
			//1st Week
			function firstWeek(changeNav) {
				for (i = 0; i < 5; i++) {
					var holidayLabel = holidayLabels[daysOfMonth[i]];
					changeNav(dayOfWeekInt[i], holidayLabel, daysOfMonth[i]);
				}
			}

			function secondWeek(changeNav) {

				for (i = 5; i <= 8; i++) {
					var holidayLabel = holidayLabels[daysOfMonth[i]];
					changeNav(dayOfWeekInt[i], holidayLabel, daysOfMonth[i]);
				}
			}

			if (dayOfMonth >= 21 && dayOfMonth <= 27) {
				//Set holiday week
				var week = 'first';
				//Change Hours On Page
				firstWeek(changeLabelAndHours);
				//Initiate clickListener
				navClicked();

				//2nd Week
			} else if ((dayOfMonth > 27 && dayOfMonth <= 31) || dayOfMonth <= 2) {
				//Set holiday week
				var week = 'second';
				//Change Hours On Page
				secondWeek(changeLabelAndHours);
				//Initiate clickListener
				navClicked();
			}

			//Change Daily Hours on Mobile
			if ((DDC.dataLayer.page.attributes.layoutType === 'mobile') && ((dayOfMonth >= 21 && dayOfMonth <= 31) || dayOfMonth <= 2)) {

				$(window).bind('load', function () {
					var salesHours = holidayHours[dealershipName].date[dayOfMonth].sales;
					var serviceHours = holidayHours[dealershipName].date[dayOfMonth].service;
					if (salesHours) {
						$('span.header-hours-sales-time').text(salesHours);
					}
					if (serviceHours) {
						$('span.header-hours-service-time').text(serviceHours);
					}
				});
			}

			//Update Label & Holiday Hours On Page
			function changeLabelAndHours() {
				var holidayLabel = holidayLabels[daysOfMonth[i]];
				var specialHours = holidayHours[dealershipName].date[daysOfMonth[i]].sales;
				if (holidayLabel) {
					updateLabel(dayOfWeekInt[i], holidayLabel);
				}
				if (specialHours) {
					updateHours(dayOfWeekInt[i], daysOfMonth[i]);
				}
			}
			//Change Label If Holiday
			function updateLabel(dayInt, holidayLabel) {
				jQuery("ul.ddc-list-columns.ddc-hours > li:nth-of-type(" + dayInt + ") span.key").text(holidayLabel);
			}
			//Change Hours If Different
			function updateHours(dayInt, dateInt) {
				jQuery("ul.ddc-list-columns.ddc-hours > li:nth-of-type(" + dayInt + ") span.value").text(holidayHours[dealershipName].date[dateInt].sales);
			}

			//Update Label & Holiday Hours In Nav Menu
			function updateNavMenu(dayInt, holidayLabel, dateInt) {

				//MEGAMENU AJAX HOURS HANDLER
				jQuery(document).ajaxStop(function () {
					//Change holiday label in nav menu
					jQuery("ul.ddc-list-columns.ddc-hours > li:nth-of-type(" + dayInt + ") span.key").text(holidayLabel);

					//Change hours in nav menu
					var specialHours = holidayHours[dealershipName].date[dateInt].service;

					if (specialHours) {
						//SERVICE
						jQuery("div.ajax-navigation-element[data-fragment-url*='service'] ul.ddc-list-columns.ddc-hours > li:nth-of-type(" + dayInt + ") span.value").text(specialHours);
					}
				});

			}

		})();

		//===== END HOLIDAY HOURS JS =====//

	}