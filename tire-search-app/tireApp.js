var tireLocator = (function () {

	var currentDiv;
	var model;
	var modelClass;

	//Main Dropdown Selector
	$('select#model').on('change', function () {

		//Hide Previously Shown Tire
		$('.row.show').toggleClass('show');

		// Get Model Text Convert to Class String
		var value = this.value;
		model = $("#model option[value=" + value + "]").text();
		modelClass = model.replace('/', '-').replace(' ', '.');

		//Add Form Info
		addFormInfo();

		// Show Parts Form After Tire Displayed 
		$('.ddc-content.parts-lead.type-1').show();

	});
	//Tire Size Selector 
	$('#tireSize select').on('change', function () {

		// Get Model and Size Text
		var value = this.value;
		model = $("#tireSize option[value=" + value + "]").text().split(' ');

		//Display Div With Tire Class
		$('.row.' + model[0] + '.' + model[1] + '').toggleClass('show');

		//Add Form Info
		addFormInfo();

	});

	function addFormInfo() {

		//Display Div With Tire Class
		$('.row.' + modelClass + '').first().toggleClass('show');

		// Cache Displayed Current Displayed
		currentDiv = $('.row.' + modelClass + '.show');


		// Inject Make Into Form
		$('input[data-id="make"]').val('Audi');

		// Inject Model Into Form
		var model = currentDiv.find('.model').text().split(':');
		$('input[data-id="model"]').val(model[0]);

		// Inject Year Into Form
		var year = currentDiv.find('.year').text().split(':');
		$('input[data-id="Year"]').val(year[1]);

		// Inject partNumber Into Form
		var partNumber = currentDiv.find('.partNumber').text().split(':');
		$('input[data-id="partNumber1"]').val(partNumber[1]);

		// Inject Diameter Into Form
		var diameter = currentDiv.find('.diameter').text().split(':');
		$('input[data-id="Diameter"]').val(diameter[1]);

		// Inject Size Into Form
		var size = currentDiv.find('.size').text().split(':');
		$('input[data-id="Size"]').val(size[1]);

	}

})();
