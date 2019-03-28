function addChairmansClubLogo(winners, departmentLayout){

	function addChairmanLogo(winners, departmentLayout) {

		//DATE DECLARATION
		var expiryDate = new Date("December 31, 2019 19:59:59"); //Month Days, Year HH:MM:SS
		var nowDate = new Date();
		var diffDate = (expiryDate.getTime() / 1000) - (nowDate.getTime() / 1000);

		//SHOW IF WITHIN RANGE	
		if (diffDate >= 0) {

			// Set winner names from list
			var winner1 = winners[0];
			var winner2 = winners[1];
			var winner3 = winners[2];
			var winner4 = winners[3];
			var winner3 = winners[2];
			var winner5 = winners[4];

			// Loop through main staff listings
				
				var staffSelector = departmentLayout ? 'div#staffList .staff dt.fn' : 'ul#staffList dt.fn';
				
				$(staffSelector).each(function (staffIndex, staffValue) {

					var staffName = $(this).find('a').attr('name');

					switch (staffValue.innerText) {
						case winner1:
							addLogoToList(this, staffValue);
							break;
						case winner2:
							addLogoToList(this, staffValue);
							break;
						case winner3:
							addLogoToList(this, staffValue);
							break;
						case winner4:
							addLogoToList(this, staffValue);
							break;
						case winner5:
							addLogoToList(this, staffValue);
							break;
						default:
							break;
					}

				});
			
		$("#staffList").after('<div class="row"><div class="col-sm-5 col-xs-12"><img src="//pictures.dealer.com/a/autocanadatc/0984/f2331a743a386bc9227740d08a5a110bx.jpg" alt="AutoCanada Chairman’s Club"/></div><div class="col-sm-7 col-xs-12"> The Chairman’s Club is AutoCanada’s most significant employee recognition program, annually showcasing the top product and service advisors across the organization. Chairman’s Club recipients are recognized for their outstanding performance in their field, going over and above to ensure you, the customer, are completely satisfied. Look for the Chairman\'s Club logo while browsing our team listing!</div>');

		}

	}

	function addLogoToList(item, staff) {
		$(item).parent().css('position', 'relative');
		$(staff).siblings('.photo').after('<img src="//pictures.dealer.com/a/autocanadatc/0520/5e3d11c9f55384173fb31bb3ea862508x.jpg" alt="Chairman\'s Club Winner" class="chairman-winner"  />');
	}
  
  addChairmanLogo(winners, departmentLayout);
  
}


