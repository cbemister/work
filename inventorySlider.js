//=====================================================================================
//=====================================================================================

var tldPrefix = "https://";
var hostPage = "/all-inventory/index.htm?search=subaru"; // Page to pull content from
var hostPageArrayContainer = ".inventoryList .item"; //the parent container that contains the array (content)
var hostPageArray = ".hproduct .media"; //this is the item container for the array 
var maxUnitDisplayed = 12;



//=====================================================================================
//-------------------------------- AJAX FOOTER ----------------------------------

// insert a full span block below the content and above the footer block to house the featured vehicles

//$('.page-bd').append('<div class="ddc-content inventory-featured-default " data-widget-name="inventory-featured-default" data-widget-id="inventory-featured1"><div class=" yui3-g"></div></div>');


//=====================================================================================
//-------------------------------- ASYNC LOAD CONTENT ----------------------------------
// AJAX content into page footer

var pathNameHost = window.location.host;
var imgPathNamex = tldPrefix + pathNameHost + hostPage;


//console.log('=========> imgPathNamex [' + imgPathNamex + ']');


var countBlock = 0;

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

//=====================================================================================
//=====================================================================================
jQuery(document).ajaxStop(function () {

$(".jcarousel ul li a img").each(function () {

			var imgTitle = $(this).attr('title');

			//console.log(this);
			
			$(this).after("<span class='details'>" + imgTitle + "</span>");

		});

$(".jcarousel ul li a img.lazy-image ").each(function () {

			var imgSrc = $(this).attr('data-src');

			console.log(this);
			
			$(this).attr("src", imgSrc);

		});

		
 }); 

