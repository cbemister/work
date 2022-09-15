$(document).ready(function () {
	const vehicleDescription = $(".description-tab__description").text();
	// check if youtube link has been add to the vehicle description
	if (vehicleDescription.includes("https://www.youtube.com/watch?v=")) {
		const startingIndex = vehicleDescription.indexOf("v=") + 2; // shift two indexes 
		const youtubeID = vehicleDescription.substr(startingIndex, 11);
		const embedVideoHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeID}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

		function loadYoutubeVideo() {
			$(".video-player.photo-gallery__video").html(embedVideoHTML);
		}

		function mCallback(mutations) {

			for (let mutation of mutations) {
				let photoGalleryLoaded = mutation.addedNodes[0]?.lastElementChild?._prevClass === "photo-gallery__main photo-gallery__main--video" ? true : false;
				if (photoGalleryLoaded) {
					loadYoutubeVideo();
					break;
				}
			}
		}

		const observer = new MutationObserver(mCallback);

		// get reference to the photo gallery tag then run observer
		const photoGallery = document.querySelector(".photo-gallery");

		// to look for changes
		const config = {
			attributes: false,
			childList: true,
			subtree: true,
		};

		// add click listener to video cta
		$("[convertus-data-id='vdp__video-trigger']").on("click", observer.observe(photoGallery, config));

	} 

});
