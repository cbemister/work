$(document).ready(function () {
	const observer = new MutationObserver(mCallback);

	var listElm = document.querySelector('.srp-wrapper');

	// to look for changes
	const config = {
		attributes: false,
		childList: true,
		subtree: true,
	};

	observer.observe(listElm, config)

	// add click listener to video cta
	// $("[convertus-data-id='vdp__video-trigger']").on("click", observer.observe(photoGallery, config));

	function mCallback(mutations) {

		for (let mutation of mutations) {

			if (mutation?.addedNodes[0]?.classList && mutation?.addedNodes[0].classList[0] === 'vehicle-card' || mutation?.addedNodes[0]?.classList && mutation?.addedNodes[0].classList[0] === 'mb-lg') {
				jQuery('.mb-lg.grid-view.col:not(.modified)').each(function () {
	
					if (!jQuery(this).hasClass('modified')) {
						console.log(jQuery(this).find('h4.vehicle-card__title').text());
						jQuery(this).addClass('modified');
					}
				});
			}

			// console.log(mutation.addedNodes[0] ? mutation.addedNodes[0] : false);
			// let photoGalleryLoaded = mutation.addedNodes[0] ? .lastElementChild ? ._prevClass === "photo-gallery__main photo-gallery__main--video" ? true : false;
			// if (photoGalleryLoaded) {
			// 	loadYoutubeVideo();
			// 	break;
			// }
		}
	}

});
