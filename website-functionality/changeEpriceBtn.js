//CHANGE EPRICE ON BOTH VLP VDP DESKTOP MOBILE

(function() {

	var isVLP = DDC.dataLayer.page.pageInfo.isVlp;
	var isVDP = DDC.dataLayer.page.pageInfo.isVdp;
	var isDesktop = DDC.dataLayer.page.attributes.layoutType === 'desktop';
	var isMobile = DDC.dataLayer.page.attributes.layoutType === 'mobile';

	if (isVLP) {
		
		// Desktop & Mobile VLP
		jQuery('div[data-type="used"] .pricing .dialog[data-eprice]').text('Request Quick Quote');
		
	} else if (isDesktop && isVDP) {

		// Desktop VDP
		jQuery('.vdp.alias-auto-used-details .links-list .btn[data-href*="/eprice-form.htm"]').html('<i class="ddc-icon ddc-icon-banknote"></i>Request Quick Quote');

	} else if (isMobile && isVDP) {

		// Mobile
		jQuery('.vdp.alias-auto-used-details .links-list .btn[data-href*="/eprice-form.htm"]').text('Request Quick Quote');

	}
	
}())

