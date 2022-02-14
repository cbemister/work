var searchInput = document.getElementById('featured-vehicle-search');
var featuredVehiclesResults = null;
// Init a timeout variable to be used below
var timeout = null;

// Listen for keystroke events
searchInput.addEventListener('keyup', function (e) {
    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    clearTimeout(timeout);

    // Make a new timeout set to go off in 1000ms (1 second)
    timeout = setTimeout(function () {
        filterDisplayedVehicles(e, e.target.value)
    }, 1000);
});


function filterDisplayedVehicles(el, query) {
	var featuredVehiclesContainer = document.querySelector('.show-inventory__wrap .row');
	var resultCount = document.querySelector('#search-results-message .results-count');
	var allVehicles = [...document.querySelectorAll('.g-vehicle-card')];
	// store unfiltered vehicle results and reset if necessary
	featuredVehiclesResults = featuredVehiclesResults === null ? allVehicles : featuredVehiclesResults;
	
	var searchQuery = query.toLowerCase();
	var searchResult = featuredVehiclesResults.filter(function (card) {

	return (card.getAttribute('data-vehicle-year')  === searchQuery || card.getAttribute('data-vehicle-make').toLowerCase().search(searchQuery) > -1 || card.getAttribute('data-vehicle-model').toLowerCase().search(searchQuery) > -1 || card.getAttribute('data-vehicle-trim').toLowerCase().search(searchQuery) > -1  || card.getAttribute('data-vehicle-colour') .toLowerCase().search(searchQuery) > -1 || card.getAttribute('data-vehicle-body-style').toLowerCase().search(searchQuery) > -1 || card.getAttribute('data-vehicle-stock') === searchQuery || '' === searchQuery);
	});
	
	var htmlSearchResults = searchResult.map(function(result) {
		return nodeToString(result);
	});

	if(htmlSearchResults < 1) {
		featuredVehiclesContainer.innerHTML = '<p>No Vehicles Found. Please Try Again.</p>';
		return;
	}
	
	resultCount.innerText = htmlSearchResults.length;
	resultCount.parentElement.style.display = 'initial'
	featuredVehiclesContainer.innerHTML = htmlSearchResults.join(' ');

}

function nodeToString ( node ) {
   var tmpNode = document.createElement( 'div' );
   	tmpNode.appendChild( node.cloneNode( true ) );
	var cls = ['col-lg-4', 'col-sm-6', 'col-xs-12'];
	tmpNode.classList.add(...cls);
   	var str = tmpNode.outerHTML;
   	tmpNode = node = null; // prevent memory leaks in IE
   	return str;
}
