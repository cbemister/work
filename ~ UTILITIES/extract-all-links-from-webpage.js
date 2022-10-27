// SET WEB PLATFORM
var platform = 'ta'; // ta = trader, di = dealerinspire, d2c

// ADJUST DEFAULT SETTINGS IF NECESSARY
var crawlSettings = {
	'targetSpecificAreas': { // DEFAULTS TO ENTIRE PAGE
		'menu': false,
		'slideshow': false,
		'main': false
	},
	'extractLinks': {
		'promo': false,
		'vehicles': false,
		'service': false,
		'finance': false,
		'phoneNumbers': false,
	},
	'includeLinks': {
		'duplicates': false,
		'externalLinks': false
	}
}

// INITIALIZE VARIABLES
var linkArray = [],
	selectedAreas = [],
	htmlTable = '';


// WEB PLATFORM SELECTORS
var selectors = {
	'ta': {
		'all': document.querySelectorAll("a"),
		'menu': document.querySelectorAll(".navigation a"),
		'slideshow': document.querySelectorAll(".slider-widget a"),
		'main': document.querySelectorAll("main a"),

	},
	'di': {
		'all': document.querySelectorAll("a"),
		'menu': document.querySelectorAll(".navbar a"),
		'slideshow': document.querySelectorAll(".di-slider a"),
		'main': document.querySelectorAll("#whitewrap a"),
	},
	'd2c': {
		'all': document.querySelectorAll("a"),
		'menu': document.querySelectorAll(".header-menu a"),
		'slideshow': document.querySelectorAll("#slider a"),
		'main': document.querySelectorAll("main a"),
	},
}


// ADD SELECTED LINKS FROM SETTINGS
for (const [key, value] of Object.entries(crawlSettings['targetSpecificAreas'])) {
	if (value === true) {
		selectedAreas.push(key)
	}
}

function grab_links(selector) {
	for (var i = 0; i < selector.length; i++) {
		var cleanlink = selector[i].href;
		// CHECK FOR DUPLICATES, EXTERNAL LINKS, PROMO LINKS, VEHICLE LINKS, SERVICE LINKS, AND FINANCE LINKS
		if (!crawlSettings['includeLinks']['duplicates'] && linkArray.includes(cleanlink) || !crawlSettings['includeLinks']['externalLinks'] && !cleanlink.includes(window.location.hostname) || crawlSettings['extractLinks']['promo'] && !cleanlink.includes('promo') || crawlSettings['extractLinks']['vehicles'] && !cleanlink.includes('vehicles') || crawlSettings['extractLinks']['service'] && !cleanlink.includes('service') || crawlSettings['extractLinks']['finance'] && !cleanlink.includes('finance') || crawlSettings['extractLinks']['phoneNumbers'] && !cleanlink.includes('tel:')) {
			continue;
		}
		linkArray.push(cleanlink);

	}
}

// GRAB LINKS BASED ON CRAWL SETTINGS

if (selectedAreas.length === 0) {
	grab_links(selectors[platform]['all'])
} else {
	for (const section in selectedAreas) {
		grab_links(selectors[platform][selectedAreas[section]])
	}
}

function make_table(linkArray, print) {

	htmlTable = '<table><thead><th>Links</th></thead><tbody>'

	for (var i = 0; i < linkArray.length; i++) {
		htmlTable += '<tr><td><a href="' + linkArray[i] + '" target="_blank">' + linkArray[i] + '</a></td></tr>'
	};

	if (print) {
		var w = window.open("");
		// WRITE LINKS TO PAGE
		w.document.write(htmlTable);
	}

}

make_table(linkArray, true)


// **************** ORIGINAL CODE **************** //

// https://towardsdatascience.com/quickly-extract-all-links-from-a-web-page-using-javascript-and-the-browser-console-49bb6f48127b

// var x = document.querySelectorAll("a");
// var myarray = []
// for (var i=0; i<x.length; i++){
// var nametext = x[i].textContent;
// var cleantext = nametext.replace(/\s+/g, ' ').trim();
// var cleanlink = x[i].href;
// myarray.push([cleantext,cleanlink]);
// };
// function make_table() {
//     var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
//    for (var i=0; i<myarray.length; i++) {
//             table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
//     };

//     var w = window.open("");
// w.document.write(table); 
// }
// make_table()