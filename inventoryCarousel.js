
//Mobile JS

$(document).ready(function () {

	// Make first image active
	$('#menu ul li.car:first').addClass('active').siblings().addClass('inactive');
	setInactive();

	function setInactive() {
		var activeCar = $('li.car.active h5').text();
		$('.row.ddc-row.ddc-row.car h2:contains(' + activeCar + ')').closest('.row').toggleClass('active');
	}
	$('.dynamic-btn').each(function () {
		var model = $(this).attr('data-model');
		var bodystyle = $(this).attr('data-bodystyle');
		var $this = $(this);
		$.ajax({
			url: '/all-inventory/index.htm?model=' + model + '&bodyStyle=' + bodystyle,
			dataType: 'html',
			success: function (html) {
				var modelWithSpace = model.replace('+', ' ');
				var qtyInStock = $(html).find('.hproduct[data-model="' + modelWithSpace + '"]').length;
				if (qtyInStock > 0) {
					$($this).attr('href', '/new-inventory/index.htm?model=' + model + '&bodyStyle=' + bodystyle);
					$(html).find('.item').each(function (index) {

						if (index < 3) {
							var vehicleImage = $(this).find('.hproduct .media a').first();
							$($this).closest('.row').find('.vehicleContainer').append(vehicleImage);
						}

					});
				} else {
                                        $($this).before('<span style="color:red; text-align:center; display: block;">Not Currently In-Stock</span>');
					$($this).text('Add Model To Form Below').css('background', '#999');
					$($this).closest('.row').find('.vehicleContainer h5').remove();

					// ADD PREFERRED MODEL TO FORM
					$($this).on('click', function (e) {
						// STORE CURRENT MODEL
						var preferredModel = $($this).siblings('h2').text();
						// ADD PREFERRED MODEL TO FORM
						$('.ddc-content.contact-form.type-1 input[data-id="Preferred Model"]').val(preferredModel);
                                                e.preventDefault();

					});

				}
			}
		});
	});
});


jQuery('#modelDropDown').on('change', function () {

	// Remove active 
	$('.row.car.active').removeClass('active');

	var selectedModel = $('select#modelDropDown option:selected').val();

	$('.row.ddc-row.ddc-row.car h2:contains(' + selectedModel + ')').closest('.row').toggleClass('active');

});







//Desktop JS

$(document).ready(function () {

//$.getScript("https://actrader.acmediaworks.com/wp-content/trader/F11_TRADER/BOOTSTRAP/js/modal.js");

// STORE FORM (OR OTHER CONTENT) IN VARIABLE
	var form = $('.ddc-content.contact-form.type-1');

	// MOVE CONTENT TO MODAL
	$('.modal-body').append(form);

	// Declare vars
	var totalWidth = 0;
	var positions = new Array();
	$('#cars .car').each(function (i) {
		// Get slider widths
		positions[i] = totalWidth;
		totalWidth += $(this).width();
		// Check widths
		if (!$(this).width()) {
			alert('Please add a width to your images');
			return false;
		}
	});
	// Set width
	$('#cars').width(totalWidth);
	// Menu item click handler
	$('#menu ul li a').click(function (e, keepScroll) {
		// Remove active class and add inactive
		$('li.car').removeClass('active').addClass('inactive');
		// Add active class to parent
		$(this).parent().addClass('active');
		var pos = $(this).parent().prevAll('.car').length;
		$('#cars').stop().animate({
			marginLeft: -positions[pos] + 'px'
		}, 450);
		// Prevent default
		e.preventDefault();
		// Stop autoscroll
		if (!autoScroll) clearInterval(itvl);
		// Remove active 
		$('.row.car.active').removeClass('active');
		setInactive();
	});
	// Make first image active
	$('#menu ul li.car:first').addClass('active').siblings().addClass('inactive');
	setInactive();
	// Auto Scroll
	var current = 1;

	function autoScroll() {
		if (current == -1) return false;
		$('#menu ul li a').eq(current % $('#menu ul li a').length).trigger('click', [true]);
		current++;
	}
	// Duration for auto scroll
	//var duration = 10;
	//var itvl = setInterval(function(){autoScroll()},duration*1000);
	function setInactive() {
		var activeCar = $('li.car.active h5').text();
		$('.row.ddc-row.ddc-row.car h2:contains(' + activeCar + ')').closest('.row').toggleClass('active');
	}
	$('.dynamic-btn').each(function () {
		var model = $(this).attr('data-model');
		var bodystyle = $(this).attr('data-bodystyle');
		var $this = $(this);
		$.ajax({
			url: '/all-inventory/index.htm?model=' + model + '&bodyStyle=' + bodystyle,
			dataType: 'html',
			success: function (html) {
				var modelWithSpace = model.replace('+', ' ');
				var qtyInStock = $(html).find('.hproduct[data-model="' + modelWithSpace + '"]').length;
				if (qtyInStock > 0) {
					$($this).attr('href', '/new-inventory/index.htm?model=' + model + '&bodyStyle=' + bodystyle);
					$(html).find('.item').each(function (index) {

						if (index < 3) {
							var vehicleImage = $(this).find('.hproduct .media a').first();
							$($this).closest('.row').find('.vehicleContainer').append(vehicleImage);
						}

					});
				} else {

					$($this).attr('data-toggle', 'modal')
					$($this).attr('data-target', '#myModal')
					$($this).text('Get More Info').css('background', '#999').addClass('not-in-stock');
					$($this).closest('.row').find('.vehicleContainer h5').remove();

					// ADD PREFERRED MODEL TO FORM
					$($this).on('click', function () {
						// STORE CURRENT MODEL
						var preferredModel = $($this).siblings('h2').text();
						// ADD PREFERRED MODEL TO FORM
						$('.ddc-content.contact-form.type-1 input[data-id="Preferred Model"]').val(preferredModel);

					});


				}
			}
		});
	});

});
