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
				// ADD DATA ATTRIBUTE FOR BOOTSTRAP MODEL
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