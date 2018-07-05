'use strict';
var searchApp = (function () {

	var resultsDisplay = false;
	var resultSelected = null;
	var searchArray = [];
	var i = 1;

	//cacheDom

	var $searchApp = $('#tireLookup');
	var $table = $searchApp.find('table');
	var $searchField = $searchApp.find('#searchField');
	var $searchBtn = $searchApp.find('#searchBtn');
	var $resetBtn = $searchApp.find('#resetBtn');
	var $showPrevious = $searchApp.find('#showPrevious');
	var $message = $searchApp.find('p#message');

	//bindEvents
	$searchBtn.on('click', searchBtnClicked);
	$showPrevious.on('click', showPrevious);
	$resetBtn.on('click', resetBtn);
	$table.on('click', 'td', getTireInfo);

	//hideTableRows

	(function () {
		$("td").parent("tr:not(.heading)").toggle();
	})();

	function toggleBtn() {
		$resetBtn.toggle();
		$searchBtn.toggle();
		$searchField.toggle();
		$('.instruction').toggle();
	}

	function searchBtnClicked() {
		var searchQuery = $searchField.val();
		if (searchQuery) {
			var capitalize = searchQuery.toUpperCase();
			//Add class for search query
			$("td:contains(" + capitalize + ")").parent().addClass(capitalize);
			searchArray.unshift(capitalize);
			//Show table results with search query 
			$("td:contains(" + capitalize + ")").parent().toggleClass('visible').toggle();
			$searchField.val('');
			toggleBtn();
			$message.text('Please select a tire to add it to the form below.');
			resultsDisplay = true;
		} else {
			$message.text('Please Try Again');
		}
	}

	function showPrevious() {
		if ((resultsDisplay === true) && (i <= 3)) {
			$('tr.' + searchArray[0] + '').toggleClass('visible').toggle();
			$message.html('Add another tire to the form if you\'d like.<br><strong>(Maximum 3 Allowed)</strong>');
			$showPrevious.toggle();
		} 
	}

	function resetBtn() {
		toggleBtn();
		if (resultsDisplay === true) {
			$("tr.visible").removeClass('visible').toggle();
			$('.ddc-content.parts-lead.type-1 input').val('');
			$message.text('');
			$showPrevious.hide();
			i = 1;
			resultsDisplay = false;
		}
	}

	function getTireInfo() {

		//var $this = this;

		resultSelected = true;

		//$(this).parent().addClass('selected');
		var partNumber = $(this).parent().find('.partNumber').text();   
		//Get year & model for form
		var yearModel = $(this).parent().find('.yearModel').text();
		var yearModelArray = yearModel.replace(' ', '&').split('&');

		if (i < 3) {
			$('input[data-id="partNumber' + i + '"]').val(partNumber);
			$message.text('Part number added to the form below.');
			$showPrevious.toggle();
		} else if (i = 3) {
			$('input[data-id="partNumber' + i + '"]').val(partNumber);
			$message.html('<strong>Please complete the form</strong><br>(No more part numbers can be added)');
			$showPrevious.toggle();
		}

		if (i === 1) {

			//Inject vehicle details into form
			$('input[data-id="Year"]').val(yearModelArray[0]);
			$('input[data-id="make"]').val('VW');
			$('input[data-id="model"]').val(yearModelArray[1]);

		}

		//Hide other table rows
		$("tr.visible").removeClass('visible').toggle();
		//Show select table row
		$(this).parent().addClass('visible').toggle();
		i++;

	}
	(function pressEnter() {
		$searchField.keypress(function (e) {
			if (e.which === 13) { //Enter key pressed
				$searchBtn.click();
			}
		});
	})();

})();