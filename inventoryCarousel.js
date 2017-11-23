
//Mobile JS

$(document).ready(function(){
	
	// Make first image active
	$('#menu ul li.car:first').addClass('active').siblings().addClass('inactive');
	
	setInactive();
	
	// Auto Scroll
	var current=1;
	function autoScroll(){
		if(current == -1) return false;
		
		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
		current++;
	}
	
	// Duration for auto scroll
	//var duration = 10;
	//var itvl = setInterval(function(){autoScroll()},duration*1000);
	
	function setInactive() {
	
	var activeCar = $('li.car.active h5').text();

	$('.row.ddc-row.ddc-row.car h2:contains(' + activeCar + ')').closest('.row').toggleClass('active');
}

	//Dynamic Button
	$('.dynamic-btn').each(function () {
		var model = $(this).attr('data-model');
		var bodystyle = $(this).attr('data-bodystyle');
		var $this = $(this);
		$.ajax({
			url: '/new-inventory/index.htm?model=' + model + '&bodyStyle=' + bodystyle,
			dataType: 'html',
			success: function (html) {
				var qtyInStock = $(html).find('.item').length;
				if (qtyInStock > 0) {
					$($this).attr('href', '/new-inventory/index.htm?model=' + model + '&bodyStyle=' + bodystyle);
					$(html).find('.item').each(function (index) {

						if (index < 2) {
							var vehicleImage = $(this).find('.hproduct .media a').first();
							$($this).closest('.row').find('.vehicleContainer').append(vehicleImage);
						}

					});
				} else {
					$($this).text('not in-stock').css('background', '#999');
					$($this).closest('.row').find('.vehicleContainer h5').remove();

				}
			}
		});
	});
	
});

jQuery('#modelDropDown').on('change', function() {
	
	// Remove active 
	$('.row.car.active').removeClass('active');
	
	var selectedModel = $('select#modelDropDown option:selected').val();
	
	$('.row.ddc-row.ddc-row.car h2:contains(' + selectedModel + ')').closest('.row').toggleClass('active');
	
});







//Desktop JS

$(document).ready(function () {
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
	//Dynamic Button
	$('.dynamic-btn').each(function () {
		var model = $(this).attr('data-model');
		var bodystyle = $(this).attr('data-bodystyle');
		var $this = $(this);
		$.ajax({
			url: '/new-inventory/index.htm?model=' + model + '&bodyStyle=' + bodystyle,
			dataType: 'html',
			success: function (html) {
				var qtyInStock = $(html).find('.item').length;
				if (qtyInStock > 0) {
					$($this).attr('href', '/new-inventory/index.htm?model=' + model + '&bodyStyle=' + bodystyle);
					$(html).find('.item').each(function (index) {
						if (index < 2) {
							var vehicleImage = $(this).find('.hproduct .media a').first();
							$($this).closest('.row').find('.vehicleContainer').append(vehicleImage);
						}
					});
				} else {
					$($this).text('not in-stock').css('background', '#999');
					$($this).closest('.row').find('.vehicleContainer h5').remove();
				}
			}
		});
	});
});
