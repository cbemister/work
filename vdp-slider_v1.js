'use strict';
var vdpCarousel = {
	protocal: document.location.protocol,
	tld: document.domain,
	vlp: "/all-inventory/index.htm",
	dealershipName: window.DDC.dataLayer.dealership.dealershipName,
	searchParam: "?search=",
	stockNumbersArray: [],
	stockNumbersString: "",
	index: 0,
	init: function () {
		this.getMostViewed();
		this.storeMostViewed();
		this.loadCarousel();
	},
	getMostViewed: function () {

		// ID of the Google Spreadsheet
		var spreadsheetID = "1cMqvEw-rQeKLhRIU3JMqTrCsLODjeqZlJESWdbuibik";

		// Make sure it is public or set to Anyone with link can view 
		var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

		$.getJSON(url, function (data) {

			var entry = data.feed.entry;

			$(entry).each(function () {

				if (this.gsx$profile.$t.indexOf(vdpCarousel.dealershipName) > -1) {

					$(this).each(function () {

						var stockNumbersLength = vdpCarousel.stockNumbersArray.length;

						if (stockNumbersLength < 10) {

							var stockNumber = this.gsx$stock.$t;

							//console.log('stockNumber: ' + stockNumber);

							vdpCarousel.stockNumbersArray.push(stockNumber);

						}

					});

				}

			});

		});
	},
	storeMostViewed: function () {

		$(document).ajaxStop(function () {

			vdpCarousel.stockNumbersString = vdpCarousel.stockNumbersArray.join('+OR+');

			// Save data to sessionStorage
			sessionStorage.setItem('mostViewed', vdpCarousel.stockNumbersString);

		});

	},
	loadCarousel: function () {

		//=====================================================================================
		//=====================================================================================

		var tldPrefix = "https://";
		var hostPage = "/all-inventory/index.htm?search="; // Page to pull content from
		var searchQuery = sessionStorage.getItem('mostViewed');
		var hostPageArrayContainer = ".inventoryList .item"; //the parent container that contains the array (content)
		var hostPageArray = ".hproduct .media"; //this is the item container for the array 
		var maxUnitDisplayed = 12;

		//=====================================================================================
		//-------------------------------- ASYNC LOAD CONTENT ----------------------------------
		// AJAX content into page footer

		var pathNameHost = window.location.host;
		var imgPathNamex = tldPrefix + pathNameHost + hostPage + searchQuery;

		//console.log('=========> imgPathNamex [' + imgPathNamex + ']');

		var countBlock = 0;

		jQuery.ajaxSetup({
			cache: false
		});

		//if (!jQuery.active) {

			$.ajax({
				url: imgPathNamex,
				success: function (data) {
					$(hostPageArrayContainer, data).each(function () {

						countBlock++;

						if (countBlock <= maxUnitDisplayed) {

							//--------------------
							var newImage = "";

							if (countBlock > 4) {
								newImage = $(this).find('img').data('src');
								//console.log('=========> newImage [' + newImage + ']');
							}
							//--------------------
							var divCode = $(this).find(hostPageArray).html();
							if (newImage !== "") {
								//console.log('=========> switch [' + newImage + ']');
								divCode = divCode.replace('src="/images/blank.gif', 'src="' + newImage + '"');
							}

							$('.jcarousel ul').append('<li class="jcarousel-item jcarousel-item-horizontal jcarousel-item-' + countBlock + 'jcarousel-item-' + countBlock + '-horizontal jcarousel-item-placeholder jcarousel-item-placeholder-horizontal" jcarouselindex="' + countBlock + '" style="float: left; list-style: none;  max-height: 200px;">' + divCode + '</li>');
							$('.jcarousel ul.jcarousel-list  a.btn-link').remove();
							$('.jcarousel ul.jcarousel-list  li.jcarousel-item div.mycars-vlp.large-cta').remove();

						}

					});
				}
			});

		//}

		//=====================================================================================
		//=====================================================================================
		jQuery(document).ajaxStop(function () {

			$(".jcarousel ul li a img").each(function () {

				var imgTitle = $(this).attr('title');

				console.log(this);

				$(this).after("<span class='details'>" + imgTitle + "</span>");

			});

			$(".jcarousel ul li a img.lazy-image ").each(function () {

				var imgSrc = $(this).attr('data-src');

				console.log(this);

				$(this).attr("src", imgSrc);

			});

		});

	}

};
vdpCarousel.init();


//
//
//
//
//
////</script><script src="https://actrader.acmediaworks.com/wp-content/trader/JavaScript/createCookie.js" type="text/javascript" charset="utf-8"></script><script>
//
//
////CHECK VISITOR STATUS
//(function () {
//    var visitor = readCookie("mostViewed");
//
//    if (visitorStatus == null) {
//        // do cookie doesn't exist stuff;
//		console.log('cookie doesn\'t exist')
//		newVisitor = true;
//    }
//    else {
//        // do cookie exists stuff
//		console.log('cookie exists')
//		newVisitor = false;
//		
//    }
//})();
//
//		
//		
//		
//		////STORE RECENTLY VIEWED STOCK NUMBERS
//		(function () {
//
//			if (isVDP == true) {
//				if (inMarketShopper == true) {
//					var recentlyViewed = readCookie("recentlyViewed");
//					recentlyViewed = imsCookie + '+OR+' + stockNumber;
//					createCookie('recentlyViewed', recentlyViewed, 1);
//					console.log(recentlyViewed);
//
//				} else {
//					createCookie('recentlyViewed', stockNumber, 1);
//				}
//			}
//		})();
//