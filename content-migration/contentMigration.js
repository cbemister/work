
var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(script);

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

blogPosts.forEach(function(post, i) {
	
	if (post.lang === 'en') {

		// SET HEADING
		$('input#title').val(post.title);

		// SET CATEGORY INPUT

		var category = post.category;

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

		if (post.excerpt === '') {
			$('iframe.cke_wysiwyg_frame.cke_reset').contents().find('body.cke_editable.cke_editable_themed.cke_contents_ltr').html(post.article);

		} else {

			$("input#excerpt-source-content")[0].checked = false;
			$('iframe.cke_wysiwyg_frame.cke_reset:first').contents().find('body.cke_editable.cke_editable_themed.cke_contents_ltr').html(post.article);
			$('iframe.cke_wysiwyg_frame.cke_reset:last').contents().find('body.cke_editable.cke_editable_themed.cke_contents_ltr').text(post.excerpt);

		}

		$("input#submit").trigger("click");
	}

});
