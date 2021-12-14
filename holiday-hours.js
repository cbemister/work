var holidayHours = {
	'Template': {
		'Sales': {
			'12/23/2021': {
				'label': 'December 23rd',
				'time': 'Closed'
			},
			'12/24/2021': {
				'label': 'Christmas Eve',
				'time': 'Closed'
			},
			'12/25/2021': {
				'label': 'Christmas Day',
				'time': 'Closed'
			},
			'12/26/2021': {
				'label': 'Boxing Day',
				'time': 'Closed'
			},
			'12/31/2021': {
				'label': 'New Years Eve',
				'time': 'Closed'
			},
			'1/1/2022': {
				'label': 'New Years Day',
				'time': 'Closed'
			},
			'1/2/2022': {
				'label': 'January 2nd',
				'time': 'Closed'
			},
			'1/3/2022': {
				'label': 'January 3rd',
				'time': 'Closed'
			},
		},
		'Service': {
			'12/23/2021': {
				'label': 'December 23rd',
				'time': 'Open'
			},
			'12/24/2021': {
				'label': 'Christmas Eve',
				'time': 'Open'
			},
			'12/25/2021': {
				'label': 'Christmas Day',
				'time': 'Open'
			},
			'12/26/2021': {
				'label': 'Boxing Day',
				'time': 'Open'
			},
			'12/31/2021': {
				'label': 'New Years Eve',
				'time': 'Open'
			},
			'1/1/2022': {
				'label': 'New Years Day',
				'time': 'Open'
			},
			'1/2/2022': {
				'label': 'January 2nd',
				'time': 'Open'
			},
			'1/3/2022': {
				'label': 'January 3rd',
				'time': 'Open'
			},
		},
		'Parts': {
			'12/23/2021': {
				'label': 'December 23rd',
				'time': 'Closed'
			},
			'12/24/2021': {
				'label': 'Christmas Eve',
				'time': 'Closed'
			},
			'12/25/2021': {
				'label': 'Christmas Day',
				'time': 'Closed'
			},
			'12/26/2021': {
				'label': 'Boxing Day',
				'time': 'Closed'
			},
			'12/31/2021': {
				'label': 'New Years Eve',
				'time': 'Closed'
			},
			'1/1/2022': {
				'label': 'New Years Day',
				'time': 'Closed'
			},
			'1/2/2022': {
				'label': 'January 2nd',
				'time': 'Closed'
			},
			'1/3/2022': {
				'label': 'January 3rd',
				'time': 'Closed'
			},
		}
	},
	'Parkland Chrysler Dodge Jeep Ram': {
		'Sales': {
			'12/23/2021': {
				'label': 'December 23rd',
				'time': 'Closed'
			},
			'12/24/2021': {
				'label': 'Christmas Eve',
				'time': 'Closed'
			},
			'12/25/2021': {
				'label': 'Christmas Day',
				'time': 'Closed'
			},
			'12/26/2021': {
				'label': 'Boxing Day',
				'time': 'Closed'
			},
			'12/31/2021': {
				'label': 'New Years Eve',
				'time': 'Closed'
			},
			'1/1/2022': {
				'label': 'New Years Day',
				'time': 'Closed'
			},
			'1/2/2022': {
				'label': 'January 2nd',
				'time': 'Closed'
			},
			'1/3/2022': {
				'label': 'January 3rd',
				'time': 'Closed'
			}
		}
	}
};

// SET HOLIDAY HOURS BASED ON DEALERSHIP
//var currentDealership = dataLayer[0].dealer.name;
var currentDealership = 'Template';
var hoursSelect = document.querySelector('.hours-select');
var currentDepartment = hoursSelect.options[hoursSelect.selectedIndex].text;
var currentDepartmentHours = holidayHours[currentDealership][currentDepartment];

// GRAB DATES FROM KEYS IN HOLIDAY HOURS OBJECT 
var holidayKeys = Object.keys(currentDepartmentHours);

// INIT CONTAINER VARS
var holidayHoursNotice = [],
	holidayHoursBody = [],
	holidayHoursHeader = '',
	holidayHoursFooter = '';
// SIDE BAR MARK-UP
var holidayHoursOpen = '<table class="hours hours--simple hours--holiday"><caption class="seo-hidden">Dealership hours of operation</caption><tbody>';
var holidayHoursClose = '</tbody></table>';

// SET TODAY'S DATE
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

// CHANGE DATE FOR TESTING PURPOSES

//today = mm + '/' + dd + '/' + yyyy;
today = '12/26/2021';
//today = '1/1/2022';
//today = '1/4/2022';

// CONVERT DATE STRING TO DATE OBJECT
var currentDate = new Date(today);
var startDate = new Date(holidayKeys[0]);
var endDate = new Date(holidayKeys[holidayKeys.length - 1]);

// ENABLE HOLIDAY HOURS BASED ON CURRENT DATE
var holidayHoursEnabled = currentDate < endDate ? true : false;

jQuery(document).ready(function () {

	// CREATE HOLIDAY NOTICE ON PAGE LOAD
	createSideBarNotice(currentDepartmentHours);
	setHeaderFooterHours(currentDepartmentHours);

	if (holidayHoursEnabled && currentDepartmentHours) {
		// SET HOLIDAY HOURS IN SIDEBAR
		jQuery('.sidebar__widget.sidebar-hours-of-operation-widget').append('<div id="hours--holiday">' + holidayHoursNotice + '</div>');

		jQuery('.footer__content h4.footer__title').text('Holiday Hours');
		setHeaderFooterHours(currentDepartmentHours); // IF CONDITION IS MET


		// SET EVENT LISTENER ON SELECT
		jQuery('.hours-select').change(function () {
			currentDepartment = this.options[this.selectedIndex].text // GET DEPARTEMENT LABEL
			currentDepartmentHours = holidayHours[currentDealership][currentDepartment]; // GET DEALERSHIP HOURS
			holidayHoursBody = []; // RESET CURRENT HOLIDAY HOURS
			// SET HOLIDAY HOURS BASED ON SELECTION
			createSideBarNotice(currentDepartmentHours);
			setHeaderFooterHours(currentDepartmentHours);
			jQuery('#hours--holiday').html(holidayHoursNotice); // REPLACE CURRENT HOLIDAY HOURS
		});
	}

});

function setHeaderFooterHours(selectedHours) {
	if (selectedHours[today]) {
		var holidayHoursHeader = selectedHours[today]['time'] === 'Closed' ? 'Closed Today For The Holiday' : selectedHours[today]['time']

		holidayHoursFooter = `
		<tr class="hours__row">
			<th scope="row" class="hours__day hours__day--en"><strong>${selectedHours[today]['label']}</strong></th>
			<td class="hours__time">${selectedHours[today]['time']}</td>
		</tr>`;
		// SET HOLIDAY HOURS IN HEADER
		jQuery('.header-popout label.header-popout__label').text(holidayHoursHeader);
		jQuery('.header-popout label.header-popout__label').css('cursor', 'default');
		// SET HOLIDAY HOURS IN FOOTER
		jQuery('.footer__content table.hours.hours--simple tbody').html(holidayHoursFooter);
	}
}

function createSideBarNotice(selectedHours) {
	holidayKeys.forEach((key, index) => {
		var currentHours = new Date(key);

		if (currentDate <= currentHours && (currentDate <= endDate)) {
			holidayHoursBody.push(`
			<tr class="hours__row">
				<th scope="row" class="hours__day hours__day--en"><strong>${selectedHours[key]['label']}</strong></th>
				<td class="hours__time">${selectedHours[key]['time']}</td>
			</tr>`)
			//console.log(`${key}: ${selectedHours[key]['label']}`);
		}

	});

	// Build Holidy Hours Notice Mark-Up
	holidayHoursNotice = '<h4 class="sidebar-title hours--holiday mt-md">Holiday Hours <i aria-hidden="true" class="fas fa-clock"></i></h4>' + holidayHoursOpen + holidayHoursBody.join('') + holidayHoursClose;
}
