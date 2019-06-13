jQuery(".hbspt-form form").find("fieldset div.field").each(function()  {

	var labelText = jQuery(this).find("label > span:first-of-type").text();
	var input = jQuery(this).find("input");
	var labelHtml = '<span class="floating-label">' + labelText + '</span>';

	var dobLabelText = jQuery(this).find("legend").text();
	var dobInput = jQuery(this).find("input");
	var dobLabelHtml = '<span class="floating-label">' + dobLabelText + '</span>';
	
	if (!dobLabelText) {
		input.after(labelHtml);
	} else {
		dobInput.after(dobLabelHtml);
	}
	
});
	 
