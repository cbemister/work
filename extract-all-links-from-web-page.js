var navLinksSelector = document.querySelectorAll(".navbar a");
var sliderLinksSelector = document.querySelectorAll(".slider-section a");

var navLinks = []
var sliderLinks = []

var navTable = ''
var slideTable = ''

function grab_links(linkArray, selector) {
	for (var i = 0; i < selector.length; i++) {
		var nametext = selector[i].textContent;
		var cleantext = nametext.replace(/\s+/g, ' ').trim();
		var cleanlink = selector[i].href;
		// linkArray.push([cleantext, cleanlink]);
		// CHECK CONDITION FOR DUPLICATES AND EXTERNAL LINKS 
		if (!linkArray.includes(cleanlink) && cleanlink.includes(window.location.hostname)) {
			linkArray.push(cleanlink);
		}
	};
}

grab_links(navLinks, navLinksSelector)
grab_links(sliderLinks, sliderLinksSelector)

function make_table(heading, linkArray, table, print) {

	if (table === 'navTable') {
		navTable = '<table><thead><th>' + heading + '</th></thead><tbody>'
	} else if (table === 'slideTable') {
		slideTable = '<table><thead><th>' + heading + '</th></thead><tbody>'
	}

	for (var i = 0; i < linkArray.length; i++) {

		if (table === 'navTable') {
			navTable += '<tr><td><a href="' + linkArray[i] + '" target="_blank">' + linkArray[i] + '</a></td></tr>'
		} else if (table === 'slideTable') {
			slideTable += '<tr><td><a href="' + linkArray[i] + '" target="_blank">' + linkArray[i] + '</a></td></tr>'
		}
	};

	if (print) {
		var w = window.open("");
		w.document.write(navTable + slideTable);
	}

}

make_table('Menu Links', navLinks, 'navTable', false)
make_table('Slidshow Links', sliderLinks, 'slideTable', true)



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
