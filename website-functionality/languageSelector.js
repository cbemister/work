</script>
<style>
/* HIDE YOUTUBE WIDGET DEPENDANT ON LANGUAGE */
.ddc-content.video-youtube-player:nth-of-type(1) {visibility: hidden;}
.ddc-content.video-youtube-player:nth-of-type(2) {display: none;}

</style>
<script>
	
//HIDE YOUTUBE WIDGET DEPENDANT ON LANGUAGE
if (DDC.dataLayer.page.attributes.locale === 'en_CA') {
	jQuery('.ddc-content.video-youtube-player:nth-of-type(1)').css('visibility', 'visible');
} else {
        jQuery('.ddc-content.video-youtube-player:nth-of-type(1)').css('display', 'none');
	jQuery('.ddc-content.video-youtube-player:nth-of-type(2)').css('display', 'initial');
}
