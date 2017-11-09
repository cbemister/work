'use strict';
var searchApp = {
	resultsDisplay: false,
	resultSelected: undefined,
	searchArray: [],
	i: 1,
	init: function () {
		this.cacheDom();
		this.bindEvents();
		this.hideTableRows();
		this.getTireInfo();
	},
	cacheDom: function () {
		this.$inputContainer = $('.tireLookup');
		this.$table = $('table');
		this.$searchField = $('#searchField');
		this.$searchBtn = $('#searchBtn');
		this.$resetBtn = $('#resetBtn');
		this.$showPrevious = $('#showPrevious');
	},
	bindEvents: function () {
		this.$searchBtn.on('click', this.searchBtnClicked.bind(this));
		this.$showPrevious.on('click', this.showPrevious.bind(this));
		this.$resetBtn.on('click', this.resetBtn.bind(this));
		//this.$table.on('click', 'td' this.getTireInfo.bind(this));
	},
	hideTableRows: function () {
		$("td").parent("tr:not(.heading)").toggle();
	},
	toggleBtn: function () {
		this.$resetBtn.toggle();
		this.$searchBtn.toggle();
		this.$searchField.toggle();
		$('.instruction').toggle();
	},
	searchBtnClicked: function () {
		var searchQuery = this.$searchField.val();
		if (searchQuery) {
			var capitalize = searchQuery.toUpperCase();
			//Add class for search query
			$("td:contains(" + capitalize + ")").parent().addClass(capitalize);
			this.searchArray.unshift(capitalize);
			//Show table results with search query 
			$("td:contains(" + capitalize + ")").parent().toggleClass('visible').toggle();
			this.$searchField.val('');
			this.toggleBtn();
			this.resultsDisplay = true;
		} else {
			this.$searchField.before('<p id="message">Please Enter a Model Name i.e. Golf </p>');
		}
	},
	showPrevious: function () {
		if (this.resultsDisplay === true) {
			$('tr.' + this.searchArray[0] + '').toggleClass('visible').toggle();
		}
	},
	resetBtn: function () {
		this.toggleBtn();
		if (this.resultsDisplay === true) {
			$("tr.visible").removeClass('visible').toggle();
			$('.ddc-content.parts-lead.type-1 input').val('');
			this.$showPrevious.toggle();
			this.i = 1;
			this.resultsDisplay = false;
		}
	},
	getTireInfo: function () {
		
		//var $this = this;
		
		this.$table.on('click', 'td', function () {
			searchApp.resultSelected = true;

			if (searchApp.resultSelected === true) {
				searchApp.$showPrevious.show();
			} else {
				searchApp.$showPrevious.hide();
			}

			//$(this).parent().addClass('selected');
			var partNumber = $(this).parent().find('.partNumber').text();
			//Get year & model for form
			var yearModel = $(this).parent().find('.yearModel').text();
			var yearModelArray = yearModel.replace(' ', '&').split('&');


			if (this.i <= 3) {
				$('input[data-id="partNumber' + this.i + '"]').val(partNumber);
				alert('Part number added to form');
			} else {
				alert('Maximium stock numbers reached');
			}

			if (this.i === 1) {

				//Inject vehicle details into form
				$('input[data-id="Year"]').val(yearModelArray[0]);
				$('input[data-id="make"]').val('VW');
				$('input[data-id="model"]').val(yearModelArray[1]);

			}

			//Hide other table rows
			$("tr.visible").removeClass('visible').toggle();
			//Show select table row
			$(this).parent().addClass('visible').toggle();
			this.i++;

		});
	},
	pressEnter: function () {
		this.searchField.keypress(function (e) {
			if (e.which === 13) { //Enter key pressed
				this.searchBtn.click();
			}
		});
	}
};
searchApp.init();