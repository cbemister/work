var holidayHoursApp = (function () {
	//Set holiday hours
	var holidayHours = {
		'Courtesy Chrysler Dodge Jeep Ram': {
			'date': {
				'23': {
					'sales': '8:30am-5:00pm',
					'parts': null,
					'service': null
				},
				'24': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'31': {
					'sales': '9-00am-6:00pm',
					'parts': null,
					'service': null
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		},
		'Dartmouth Chrysler Jeep Dodge': {
			'date': {
				'23': {
					'sales': '9:00am - 6:00pm',
					'parts': null,
					'service': null
				},
				'24': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'27': {
					'sales': '9:00am - 8:00pm',
					'parts': null,
					'service': null
				},
				'30': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'31': {
					'sales': '9:00am - 6:00pm',
					'parts': null,
					'service': null
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': '9:00am - 8:00pm',
					'parts': null,
					'service': null
				}
			}
		},
		'Tower Chrysler': {
			'date': {
				'23': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'24': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': '10:00am - 6:00pm',
					'parts': '8:30am - 3:30pm',
					'service': null
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'31': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		},
		'Toronto Chrysler': {
			'date': {
				'23': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'24': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'31': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		},
		'Wellington Motors': {
			'date': {
				'23': {
					'sales': '9:00am - 4:00pm',
					'parts': null,
					'service': null
				},
				'24': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'31': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		},
		'Moncton Chrysler Jeep Dodge': {
			'date': {
				'23': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'24': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'31': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		},
		'Ponoka Chrysler Jeep Dodge': {
			'date': {
				'23': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'24': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'31': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		},
		'Okanagan Chrysler Jeep Dodge': {
			'date': {
				'23': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'24': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'31': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		},
		'Capital Chrysler Jeep Dodge Ram Fiat': {
			'date': {
				'23': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'24': {
					'sales': '11:00am - 4:00pm',
					'parts': 'closed',
					'service': 'closed'
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': '11:00am - 4:00pm',
					'parts': 'closed',
					'service': 'closed'
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'31': {
					'sales': '11:00am - 4:00pm',
					'parts': 'closed',
					'service': 'closed'
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		},
		'Eastern Chrysler Dodge Jeep': {
			'date': {
				'23': {
					'sales': '9:00am - 6:00pm',
					'parts': '8:00am - 4:00pm',
					'service': '8:00am - 4:00pm'
				},
				'24': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': '11:00am - 4:00pm',
					'parts': 'closed',
					'service': 'closed'
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'31': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		},
		'Grande Prairie Chrysler Dodge Jeep Ram Fiat': {
			'date': {
				'23': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'24': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': '12:00pm - 5:00pm',
					'parts': 'closed',
					'service': 'closed'
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'31': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		},
		'Maple Ridge Chrysler Jeep Dodge': {
			'date': {
				'23': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'24': {
					'sales': '10:00am - 5:00pm',
					'parts': null,
					'service': null
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': '10:00am - 5:00pm',
					'parts': 'closed',
					'service': 'closed'
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'31': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		},
		'Northland Chrysler Jeep Dodge': {
			'date': {
				'23': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'24': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'31': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		},
		'Crosstown Auto Centre': {
			'date': {
				'23': {
					'sales': null,
					'parts': 'closed',
					'service': 'closed'
				},
				'24': {
					'sales': '11:00am - 4:00pm',
					'parts': null,
					'service': null
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': '10:00am - 5:00pm',
					'parts': 'closed',
					'service': 'closed'
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': null,
					'parts': 'closed',
					'service': 'closed'
				},
				'31': {
					'sales': '11:00am - 4:00pm',
					'parts': null,
					'service': null
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		},
		'Airdrie Chrysler Dodge Jeep': {
			'date': {
				'23': {
					'sales': '9:00am - 5:00pm',
					'parts': null,
					'service': null
				},
				'24': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'25': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'26': {
					'sales': '9:00am - 5:00pm',
					'parts': 'closed',
					'service': 'closed'
				},
				'27': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'30': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'31': {
					'sales': null,
					'parts': null,
					'service': null
				},
				'1': {
					'sales': 'closed',
					'parts': 'closed',
					'service': 'closed'
				},
				'2': {
					'sales': null,
					'parts': null,
					'service': null
				}
			}
		}
	};
	//Get current dayOfMonth
	var d = new Date();
	var dayOfMonth = d.getDate();
	//Override day of month for testing
	//dayOfMonth = 28;  //Comment out if not in use
	//Get current dealership name from dataLayer
	var dealershipName = DDC.dataLayer.dealership.dealershipName;
	//Set daysOfMonth Array to access holidayHours object
	var daysOfMonth = [23, 24, 25, 26, 27, 30, 31, 1, 2];
	//Set based on dayOfWeek from daysOfMonth 
	//ie. 23 is saturday which is 6th day of the week
	var dayOfWeekInt = [6, 7, 1, 2, 3, 6, 7, 1, 2];
	var holidayLabels = {
		'24': 'Christmas Eve',
		'25': 'Christmas Day',
		'26': 'Boxing Day',
		'31': 'New Year\'s Eve',
		'1': 'New Year\'s Day'
	};

	//Set variable to loop through daysOfWeekInt
	var i = 0;
	//Initialize week variable
	var week;

	//Set-up nav click listener
	var navClicked = function () {

		if (week === 'first') {

			jQuery('ul.navbar-nav a:contains("Parts & Service")').on('click', firstWeek(updateNavMenu));

		} else if (week === 'second') {

			jQuery('ul.navbar-nav a:contains("Parts & Service")').on('click', secondWeek(updateNavMenu));
		}
	}

	//Change Hours In One Week Interval
	//1st Week
	function firstWeek(changeNav) {
		for (i = 0; i < 5; i++) { 
			var holidayLabel = holidayLabels[daysOfMonth[i]];
			changeNav(dayOfWeekInt[i], holidayLabel, daysOfMonth[i]);
		}
	}

	function secondWeek(changeNav) {

		for (i = 5; i <= 8; i++) {
			var holidayLabel = holidayLabels[daysOfMonth[i]];
			changeNav(dayOfWeekInt[i], holidayLabel, daysOfMonth[i]);
		}
	}

	if (dayOfMonth >= 21 && dayOfMonth <= 27) {
		//Set holiday week
		var week = 'first';
		//Change Hours On Page
		firstWeek(changeLabelAndHours);
		//Initiate clickListener
		navClicked();

		//2nd Week
	} else if ((dayOfMonth > 27 && dayOfMonth <= 31) || dayOfMonth <= 2) {
		//Set holiday week
		var week = 'second';
		//Change Hours On Page
		secondWeek(changeLabelAndHours);
		//Initiate clickListener
		navClicked();
	}

	//Change Daily Hours on Mobile
	if ((DDC.dataLayer.page.attributes.layoutType === 'mobile') && ((dayOfMonth >= 21 && dayOfMonth <= 31) || dayOfMonth <= 2)) {

		$(window).bind('load', function () {
			var salesHours = holidayHours[dealershipName].date[dayOfMonth].sales;
			var serviceHours = holidayHours[dealershipName].date[dayOfMonth].service;
			if (salesHours) {
				$('span.header-hours-sales-time').text(salesHours);
			}
			if (serviceHours) {
				$('span.header-hours-service-time').text(serviceHours);
			}
		});
	}

	//Update Label & Holiday Hours On Page
	function changeLabelAndHours() {
		var holidayLabel = holidayLabels[daysOfMonth[i]];
		var specialHours = holidayHours[dealershipName].date[daysOfMonth[i]].sales;
		if (holidayLabel) {
			updateLabel(dayOfWeekInt[i], holidayLabel);
		}
		if (specialHours) {
			updateHours(dayOfWeekInt[i], daysOfMonth[i]);
		}
	}
	//Change Label If Holiday
	function updateLabel(dayInt, holidayLabel) {
		jQuery("ul.ddc-list-columns.ddc-hours > li:nth-of-type(" + dayInt + ") span.key").text(holidayLabel);
	}
	//Change Hours If Different
	function updateHours(dayInt, dateInt) {
		jQuery("ul.ddc-list-columns.ddc-hours > li:nth-of-type(" + dayInt + ") span.value").text(holidayHours[dealershipName].date[dateInt].sales);
	}

	//Update Label & Holiday Hours In Nav Menu
	function updateNavMenu(dayInt, holidayLabel, dateInt) {

		//MEGAMENU AJAX HOURS HANDLER
		jQuery(document).ajaxStop(function () {
			//Change holiday label in nav menu
			jQuery("ul.ddc-list-columns.ddc-hours > li:nth-of-type(" + dayInt + ") span.key").text(holidayLabel);

			//Change hours in nav menu
			var specialHours = holidayHours[dealershipName].date[dateInt].service;

			if (specialHours) {
				//SERVICE
				jQuery("div.ajax-navigation-element[data-fragment-url*='service'] ul.ddc-list-columns.ddc-hours > li:nth-of-type(" + dayInt + ") span.value").text(specialHours);
			}
		});

	}

})();
