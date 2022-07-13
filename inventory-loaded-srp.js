var observeDOM = (function () {
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

	return function (obj, callback) {
		if (!obj || obj.nodeType !== 1) {
			return;
		}

		if (MutationObserver) {
			// define a new observer
			var mutationObserver = new MutationObserver(callback);

			// have the observer observe foo for changes in children
			mutationObserver.observe(obj, {
				childList: true,
				subtree: true
			});
			return mutationObserver;
		}

		// browser support fallback
		else if (window.addEventListener) {
			obj.addEventListener('DOMNodeInserted', callback, false);
			obj.addEventListener('DOMNodeRemoved', callback, false);
		}
	};
})();

setTimeout(function () {
	// add item
	var listElm = document.querySelector('.srp-wrapper');
	var queryString = window.location.search;
	var urlParams = new URLSearchParams(queryString);
	var model = urlParams.get('md');
	
	// Observe a specific DOM element:
	observeDOM(listElm, function (m) {
		var addedNodes = [],
			removedNodes = [];

		m.forEach(record => record.addedNodes.length & addedNodes.push(...record.addedNodes));

		m.forEach(record => record.removedNodes.length & removedNodes.push(...record.removedNodes));

		// RUN SCRIPTS AFTER INVENTORY LOADED 
		var inventoryCount = jQuery('.srp-wrapper .col.primary-col .row.grid-row .grid-view.col').length;
		
//      first condition waits for vehicle card to load
//      second condition checks if inventory is filtered
//		third condition checks if model facet is set

		if (addedNodes[0]?.classList && addedNodes[0].classList[0] === 'vehicle-card'  && jQuery('.filter-tags__single').length === 0 && model || jQuery('.filter-tags__single span').text() === 'RamRAM' ) {
			jQuery('.srp-wrapper .col.primary-col, .inventoryLink').show();
			jQuery('.inventoryLink').css('visibility', 'visible');

		}
		
		if (addedNodes[0]?.classList && addedNodes[0].classList[0] === 'srp-sort' || jQuery('.filter-tags__single').length > 1) {
			var noResults = jQuery('.no-results').length;
			if(!model || noResults || jQuery('.filter-tags__single').length > 1 && jQuery('.filter-tags__single span').text() !== 'RamRAM' ){
			   jQuery('#formContainer').show();
			   }
		}

		//console.clear();
		//console.log('Added:', addedNodes, 'Removed:', removedNodes);
	});

}, 0);
