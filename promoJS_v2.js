'use strict';
let promoJS = (function () {
	
	let functionality, general, dealership, website, offers, oemCampaign, dealershipCampaign, data;
	
	functionality = {
		'indexHero': false,
		'oemLPbasic': false,
		'oemLPadvanced': true,
		'oemLPnew': false,
		'epriceNew': false,
		'epriceUsed': false,
		'countdownClock': false,
		'mobileBanner': true,
		'holidayHours': false,
		'vlpStickyBanner': true
	}
	
	general = {
		'currenttime': new Date(),
	}
	
	dealership = {
		'franchise': DDC.dataLayer.site.franchises[0],
		'name': DDC.dataLayer.dealership.dealershipName
	}
	
	website = {
		'pageName': DDC.dataLayer.page.pageInfo.pageName,
		'layoutType': DDC.dataLayer.page.attributes.layoutType
	}

	promotions = {
		'oem': [
			{
			'franchise': ['volkswagen'], 
			'offers': 
				{	
					'tagline': 'Autobahn for All Sales Event - Rates From 0% or Get Up To $2,000 Bonus Cash',
					'headline': '<h5>Get Up To $2,000 Bonus Cash On Select 2018 Models<br><br>Finance Rates From 0% For Up To 36 Months</h5>',
					'landingPageUrl': '/promo/national-offers.htm',
					'filterdVLP': '/new-inventory/index.htm?year=2018&model=Tiguan',
					'desktopLPstandard': 'https://actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_940x_LP.jpg',
					'desktopLPturbo': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_1200x_LP.jpg',
					'mobileLP': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_600x_LP.jpg',
					'mobileWB': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_480x140_MWB.jpg',
					'expiryDate': new Date('April 2, 2018 19:59:59')
				}
			}
			 ],
		'campaign': [
			{
			'dealerships': [],
			'franchise': ['volkswagen'], 
			'importance': {
				'indexPosition': 1, 
				'replace': false
			},
			'offers': 
				{	
					'tagline': 'VW Campaign',
					'headline': '<h5>Get Up To $2,000 Bonus Cash On Select 2018 Models<br><br>Finance Rates From 0% For Up To 36 Months</h5>',
					'landingPageUrl': '/promo/national-offers.htm',
					'filterdVLP': '/new-inventory/index.htm?year=2018&model=Tiguan',
					'desktopLPstandard': 'https://actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_940x_LP.jpg',
					'desktopLPturbo': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_1200x_LP.jpg',
					'mobileLP': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_600x_LP.jpg',
					'mobileWB': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_480x140_MWB.jpg',
					'expiryDate': new Date('April 2, 2018 19:59:59')
				}
			}
			 ],
		'dealership': {
			'Abbotsford Volkswagen': [
				{
					'importance': {
						'indexPosition': 0, 
						'replace': true
					},
					'tagline': 'AVW Tagline replace',
					'headline': '<h5>Get Up To $2,000 Bonus Cash On Select 2018 Models<br><br>Finance Rates From 0% For Up To 36 Months</h5>',
					'landingPageUrl': '/promo/national-offers.htm',
					'filterdVLP': '/new-inventory/index.htm?year=2018&model=Tiguan',
					'desktopLPstandard': 'https://actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_940x_LP.jpg',
					'desktopLPturbo': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_1200x_LP.jpg',
					'mobileLP': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_600x_LP.jpg',
					'mobileWB': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_480x140_MWB.jpg',
					'expiryDate': new Date('April 2, 2018 19:59:59')

				},
				{
					'importance': {
						'indexPosition': 3, 
						'replace': false
					},
					'tagline': 'AVW Tagline add',
					'headline': '<h5>Get Up To $2,000 Bonus Cash On Select 2018 Models<br><br>Finance Rates From 0% For Up To 36 Months</h5>',
					'landingPageUrl': '/promo/national-offers.htm',
					'filterdVLP': '/new-inventory/index.htm?year=2018&model=Tiguan',
					'desktopLPstandard': 'https://actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_940x_LP.jpg',
					'desktopLPturbo': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_1200x_LP.jpg',
					'mobileLP': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_600x_LP.jpg',
					'mobileWB': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_480x140_MWB.jpg',
					'expiryDate': new Date('April 2, 2018 19:59:59')

				}
			]		
		},
		'model': {
			'volkswagen': {
				'golf': {
					'imgSrc': 'http://pictures.dealer.com/a/autocanadatc/1262/5202efe5ae4ff40bc44fd66811280574x.jpg',
					'altTag': '2017 Golf Clearout - Discounts Up To $6,000'
				},
				'jetta': {
					'imgSrc': 'http://pictures.dealer.com/a/autocanadatc/1175/f96dac5ef1ebf391f8b8f7bcc5d33ba9x.jpg',
					'altTag': '2017 Jetta Clearout - Discounts Up To $5,000'
				},
				'tiguan': {
					'imgSrc': 'http://pictures.dealer.com/a/autocanadatc/1678/3622a2afecdabe61652a6e705838a9d8x.jpg',
					'altTag': '2017 Tiguan Clearout - Discounts Up To $6,000'
				}
			} 
		}
	}

	
	
	
	
	
	offers.push(dealershipCampaign[dealership.name])
	
	function test() {
		console.log('test');
	}

	return {
		test: general
	};
	
	
})();



 


var currenttime = new Date();
var endtime = new Date("April 2, 2018 19:59:59"); //Month Days, Year HH:MM:SS

var diff = (endtime.getTime() / 1000) - (currenttime.getTime() / 1000);



//Get primary franchise name from dataLayer
var franchise = DDC.dataLayer.site.franchises[0];

//Get current dealership name from dataLayer
var dealershipName = DDC.dataLayer.dealership.dealershipName;

//PAGE PARAMS
var pageName = DDC.dataLayer.page.pageInfo.pageName;
var layoutType = DDC.dataLayer.page.attributes.layoutType;



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

	dealershipOffer[0] = {
		'offerTagline': '2017 RAM 1500 Now 25% Off MSRP - That\'s Up To $20,300 In Total Discounts On Select Models OAC',
		'landingPageUrl': '/new-inventory/index.htm?year=2017&make=Ram&model=1500',
		'desktopWB': 'http://pictures.dealer.com/a/autocanadatc/0532/41c425c2751f0b4f262b4cde3f7997a6x.jpg',
		'desktopVLP': 'http://pictures.dealer.com/a/autocanadatc/0975/723e425db237dc92910d632bafb1fb6dx.jpg',
		'desktopLP': 'http://pictures.dealer.com/a/autocanadatc/1532/8a0c07869c0820b62c5f013c20f7d03cx.jpg',
		'mobileWB': 'http://pictures.dealer.com/a/autocanadatc/0442/94829554a532f8ed400f3454d88600a2x.jpg',
		'mobileLP': 'http://pictures.dealer.com/a/autocanadatc/1220/16d7d7f1f6a8435a0751bac1cd144a27x.jpg',
		'offerParam': 'ram'
	};



	var holidayHours = {
		'Courtesy Chrysler Dodge Jeep Ram': {
			'date': {
				'23': {
					'sales': '8:30am-5:00pm',
					'parts': null,
					'service': null
				},