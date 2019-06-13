jQuery('h1.section_header').first().append(`<div id="modelSelector">
	<img src="http://pictures.dealer.com/a/autocanadatc/0957/b6edc423a4aef8d8c9a5fe7c52376501x.jpg" alt="Car" data-model="car" class="modelSelector">
	<img src="http://pictures.dealer.com/a/autocanadatc/0451/abc9b643cf004a29a986fec6a29a0d59x.jpg" alt="Van" data-model="van" class="modelSelector">
	<img src="http://pictures.dealer.com/a/autocanadatc/0876/3e8ad0149e88a528c5d0fb8ad5b8ae43x.jpg" alt="SUV" data-model="suv" class="modelSelector">
	<img src="http://pictures.dealer.com/a/autocanadatc/0209/c89df92f2918f6a7df681db64504b871x.jpg" alt="Truck" data-model="truck" class="modelSelector">
</div>`);


jQuery('.modelSelector').click(function(event) {
	
	var model = event.target.dataset.model;
	var option = 'option[data-reactid*="' + model + '"]';
	
	jQuery('.modelSelector').each(function() {
		
		if(jQuery(this).hasClass('selected')) {
			jQuery(this).removeClass('selected');
		}

	})
	
	jQuery(option).prop('selected', true);
	jQuery(this).addClass('selected');

});
