var blogPosts = [{
		'title': 'title 1',
		'category': 'New Vehicles',
		'article': 'This is article 1',
		'excerpt': '',
		'lang': 'fr'
	}, {
		'title': 'title 2',
		'category': 'New Vehicles',
		'article': 'This is article 2',
		'excerpt': 'This is excerpt 2',
		'lang': 'fr'
	}, {
		'title': 'title 3',
		'category': 'New Vehicles',
		'article': 'This is article 3',
		'excerpt': 'This is excerpt 3',
		'lang': 'fr'
	}, {
		'title': 'title 4',
		'category': 'New Vehicles',
		'article': 'This is article 4',
		'excerpt': 'This is excerpt 4',
		'lang': 'fr'
	}, {
		'title': 'title 5',
		'category': 'New Vehicles',
		'article': 'This is article 5',
		'excerpt': 'This is excerpt 5',
		'lang': 'fr'
	}, {
		'title': 'title 6',
		'category': 'New Vehicles',
		'article': 'This is article 6',
		'excerpt': 'This is excerpt 6',
		'lang': 'en'
	}, {
		'title': 'title 7',
		'category': 'New Vehicles',
		'article': 'This is article 7',
		'excerpt': 'This is excerpt 7',
		'lang': 'en'
	}, {
		'title': 'title 8',
		'category': 'New Vehicles',
		'article': 'This is article 8',
		'excerpt': 'This is excerpt 8',
		'lang': 'en'
	}, {
		'title': 'title 9',
		'category': 'New Vehicles',
		'article': 'This is article 9',
		'excerpt': 'This is excerpt 9',
		'lang': 'en'
	}, {
		'title': 'title 10',
		'category': 'New Vehicles',
		'article': 'This is article 10',
		'excerpt': '',
		'lang': 'en'
	}

];


var initialPageLoad = localStorage.getItem('initialPageLoad');

if (initialPageLoad === null) {

	// Load jQuery
	jQueryFunc();

	// Store jQuery in localStorage as a String
	localStorage.setItem('compressedFunc1', jQueryFunc.toString());
	localStorage.setItem('compressedFunc2', postBlogArticle.toString());


	var lang = 'fr';

	var index = 0;

	postBlogArticle(index, lang);

	localStorage.setItem('lang', lang);


	// Set index value in postBlogArticle function

	//localStorage.setItem('index', index);

	localStorage.setItem('initialPageLoad', false);



	// Set blogPosts

	localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
	
	// Store it as a String
	localStorage.setItem('compressedFunc3', getFromLocalStorage.toString());
	

}

function postBlogArticle(index, lang) {


	if (blogPosts[index].lang === lang) {

		// SET HEADING
		$('input#title').val(blogPosts[index].title);

		// SET CATEGORY INPUT

		var category = blogPosts[index].category;

		var categories = ['New Vehicles', 'Used Vehicles', 'Service', 'Administration', 'Véhicules neufs', 'Véhicules d\'occasion'];

		var categoryIndex = categories.indexOf(category);

		var inputId = ['input#cat-new-inventory', 'input#cat-pre-owned-inventory',
			'input#cat-service', 'input#cat-administration', 'input#cat-véhicules-neufs', 'input#cat-véhicules-d\'occasion'
		];

		$(inputId[categoryIndex])[0].checked = true;

		// DATE

		//$( "button.btn.btn-link" ).trigger( "click" );
		//$("a.select2-choice > span").text("01-Jan");
		//$("input.input-mini.day").val(8);
		//$("input.input-mini.year").val(2015);
		//$( "button.btn.btn-small.ok" ).trigger( "click" );


		// SET TAGS

		//$('input.input-block-level.input.typeahead').val('tag1, tag2');

		// EXCERPT OPTION

		if (blogPosts[index].excerpt === '') {
			$('iframe.cke_wysiwyg_frame.cke_reset').contents().find('body.cke_editable.cke_editable_themed.cke_contents_ltr').html(blogPosts[index].article);

		} else {

			$("input#excerpt-source-content")[0].checked = false;
			$('iframe.cke_wysiwyg_frame.cke_reset:first').contents().find('body.cke_editable.cke_editable_themed.cke_contents_ltr').html(blogPosts[index].article);
			$('iframe.cke_wysiwyg_frame.cke_reset:last').contents().find('body.cke_editable.cke_editable_themed.cke_contents_ltr').text(blogPosts[index].excerpt);

		}

		index++;

		localStorage.setItem('index', index);

		$("input#submit").trigger("click");

	} else {
		
		var compressedFunc3 = localStorage.getItem('compressedFunc3');

		// Convert the String back to a function
		var nextPost = eval('(' + compressedFunc + ')');

		// Use it
		nextPost();

	}

}


function jQueryFunc() {
	var script = document.createElement('script');
	script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
	document.getElementsByTagName('head')[0].appendChild(script);
}

function getFromLocalStorage() {

	// Get blogPosts from localStorage
	var blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

	// Get jQuery from localStorage then run
	var compressedFunc1 = localStorage.getItem('compressedFunc1');

	// Convert the String back to a function
	var jQueryUncompressed = eval('(' + compressedFunc1 + ')');

	// Use it
	jQueryUncompressed();

	//	set the index variables in storage
	var lang = localStorage.getItem('lang');

	var index = localStorage.getItem('index');

	//	get the function from storage
	var compressedFunc2 = localStorage.getItem('compressedFunc2');

	// Convert the String back to a function
	var postAdditionalBlogArticles = eval('(' + compressedFunc2 + ')');

	// Use it
	postAdditionalBlogArticles(index, lang);

}


//window.onload = function () {}