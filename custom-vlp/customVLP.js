'use strict';


var customVLP = (function () {

	//var protocal = document.location.protocol;
	//var tld = document.domain;
	var vlp = "/new-inventory/index.htm";
	var searchParam = "search=";
	var listItemsArray = [];
	var domContainer = $('ul.inventoryList.data.full.list-unstyled');
	var model = getParameterByName("model");
	var year = getParameterByName("year");
	var yearParam = "year=";
	var modelParam = "model=";
	var item = {};
	
	// CONTENT PERSONALIZATION JS 
	function getParameterByName(e, a) {
		a || (a = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
		var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
			r = n.exec(a);
		return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
	}

	//CREATE SEARCH PARAM
	
	
	
		
	if (year === null && model) {

		var searchParam = modelParam + model;

	} else if (model === null && year) {

		var searchParam = yearParam + year;

	} else if (model && year) {

		var searchParam = yearParam + year + '&' + modelParam + model;
	}
		
		
	$.when($.ajax({
			url: '/new-inventory/index.htm?' + searchParam,
			dataType: 'html',
			success: function (html) {
				var qtyInStock = $(html).find('span.vehicle-count').text();

				item.quantity = parseInt(qtyInStock);
			}
		}))
		.then(function () {
		
			// GET NUMBER OF PAGES
			//var quantity = $('span.vehicle-count').text();
			var pageQty = item.quantity / 16;
			var pageQtyInt = Math.round(pageQty);

			// CREATE SEARCH QUERY ARRAY
			var vehiclesPerPage = 16;
			var paginationArray = [];

			for (var i = 0; i <= pageQtyInt; i++) {
				var pagination = vehiclesPerPage * i;
				var searchQuery = vlp + '?start=' + pagination + '&' + searchParam;

				paginationArray.push(searchQuery);

			}
		
			$.when.apply($, paginationArray.map(function (url) {
				return $.ajax(url);
			})).done(function () {
				// there will be one argument passed to this callback for each ajax call 
				// each argument is of this form [data, statusText, jqXHR] 
				var results = [];

				for (var i = 0; i < arguments.length; i++) {
					results.push(arguments[i][0]);
					// all data is now in the results array in order
				}

				// loop through results array
				$.each(results, function (index, value) {

					var $this = this;

					// loop through each item in each results array
					$($this).find('li.item').each(function () {
						var listItem = $(this)[0].outerHTML //.parent().html();
							// REMOVE RETURN CHARACTER
						var listItemClean = listItem.replace(/\r?\n/g, "");

						// STORE LIST ITEMS IN ARRAY
						
						var currentYear = $(listItem).find('.hproduct').attr('data-year');
						var currentModel = $(listItem).find('.hproduct').attr('data-model');

							if ( (year === null && (currentModel === model)) || (model === null && (currentYear === year)) || ((currentModel === model) && (currentYear === year))  ) {

								listItemsArray.push(listItemClean);
								
								//ADD EACH LIST ITEM TO PAGE
								$(domContainer).append(listItemClean);

							} 

					});

				});
				
				// SHOW VEHICLE COUNT
				
				//13 Vehicles matching: Model: Tiguan  Year: 2017

				
				var count = $('li.item').length;
				
				//var count = 13; var year = 2017; var model = 'Golf'
				
				//$('.ddc-content.inventory-listing-default .bd').prepend('<div><div class="facet-breadcrumb-title vehicle-count "><span class="count"> ' + count + ' </span> Vehicles matching:</div> <div class="facet-breadcrumb-item"><span class="facet-breadcrumb-close-icon"></span> Year: <span class="year"> ' + year + '</span></div><div class="facet-breadcrumb-item"><span class="facet-breadcrumb-close-icon"></span>  Model: <span class="model"> ' + model + '</span></div></div>');
				
				$('.ddc-content.inventory-listing-default .bd').prepend('<div><div class="facet-breadcrumb-title vehicle-count "><span class="count"> ' + count + ' </span> Vehicles matching:</div> <div class="facet-breadcrumb-item"> Year: <span class="year"> ' + year + '</span></div><div class="facet-breadcrumb-item">  Model: <span class="model"> ' + model + '</span></div></div>');
				
				

				//loadFacets('li.item');
				
				//HIDE PRELOADER
				$('#status').hide();
				$('#preloader').hide();

				//HIDE FACET IF NULL
				$('span.model:contains(null)').closest('.facet-breadcrumb-item').hide();
				$('span.year:contains(null)').closest('.facet-breadcrumb-item').hide();
				

				showListItems();
				lazyLoad();

			});
		});
		

	//

	function showListItems() {

		$('li.item').each(function (i) {

			if (i < 4) {

				$(this).show();
			} else {
				$(this).addClass('lazyLoad');
			}
		});
	}

	function loadImages() {
		
		$('li.item').each(function(){
	
			var imgTag = $('img.lazy-image.photo.thumb');

			var imgSrc = $(this).find(imgTag).attr('data-src');

			$(this).find(imgTag).attr('src', imgSrc);
	
		});
	}
	
	
	function lazyLoad() {

		$("li.item.lazyLoad").slice(0, 4).toggleClass('lazyLoad').show();
		
		$("#loadMore").on('click', function (e) {

			e.preventDefault();
			$("li.item.lazyLoad:hidden").slice(0, 4).slideDown();
			loadImages();
			//			if ($("li.item.lazyLoad:hidden").length == 0) {
			//				$("#load").fadeOut('slow');
			//			}

			//			$('html,body').animate({
			//				scrollTop: $(this).offset().top
			//			}, 1500);
		});

	}

	$(window).scroll(function () {
		var hT = $('#loadMore').offset().top,
			hH = $('#loadMore').outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop(),
			scrolled = false;
		
		//console.log((hT-wH) , wS);
		if (wS > (hT + hH - wH)) {
			$('#loadMore').click();

		}		
		
		if (((wS + 1000) > (hT + hH - wH)) && !scrolled) {
			loadImages();
			scrolled = true;
		}
	
	});

	// Return to top button
	$('a[href=#top]').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 600);
		return false;
	});


	// MAKE ACCESSIBLE OUTSIDE FUNCTION
	return {
		model: model,
		year: year
		
		//selectedFacets: selectedFacets,
		//listItemsArray: listItemsArray,

		//paginationArray: paginationArray
	};

})();
