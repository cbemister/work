

/* VDP */

//Set rate and term for payment calculator

var price = DDC.dataLayer.vehicles["0"].internetPrice;

var term = null;

var rate = null;

var modelYear = DDC.dataLayer.vehicles["0"].modelYear;

var rate = 6.99;
var term;

var d = new Date();
var n = d.getFullYear();
var vehicleAge;

vehicleAge = n - modelYear; //Calculate Vehicle Age

//Set Term Based on Vehicle Age

if (vehicleAge == 0 || vehicleAge == 1) {
	term = 84;
} else if (vehicleAge == 2 || vehicleAge == 3) {
	term = 72;
} else if (vehicleAge == 4) {
	term = 60;
} else if (vehicleAge == 5) {
	term = 48;
} else if (vehicleAge == 6 || vehicleAge == 7) {
	term = 36;
}


var monthlyPymt = LOANCALC.monthlyPayment(price, rate, term);

var biWeeklyPymt = (monthlyPymt * 12) / 26;

var totalCost = (monthlyPymt * term);

totalCost = totalCost.toFixed(2);

var costOfFinance = totalCost - price;

costOfFinance = costOfFinance.toFixed(2);

monthlyPymt = monthlyPymt.toFixed(2);

biWeeklyPymt = biWeeklyPymt.toFixed(2);


if (rate == null || term == null) {} else {

	//PAYMENT CALCULATOR

	jQuery('.ddc-content.inventory-detail-pricing').after('<span class="payment">FINANCE from: <strong>$' + biWeeklyPymt + '<small> B/W OAC</small></strong></span><span class="disclaimer"><small>@ ' + rate + '% A.P.R. for ' + term + ' Months with $0 Down Payment</small><sup>1</sup></span>');

	//COMPLIANT DISCLAIMER

	jQuery(".vdp .inventory-detail-tech-specs").append("<div class='disclaimer'><sup>1</sup>Payment on " + jQuery('li.stockNumber').text() + " is based on $" + price + " less the down-payment of $0 for a total cost to finance of $" + costOfFinance + " over " + term + " months with a rate of " + rate + "% for a total bi-weekly payment $" + biWeeklyPymt + ". Total cost of financing of $<span id='total_financing'></span> for a total cost of $<span id='total_price'></span>.  The bi-weekly payment does not include sales tax.</div");

	jQuery('#total_financing').text(costOfFinance);
	jQuery('#total_price').text(totalCost);

}

window.onload = function () {


	if (DDC.dataLayer.vehicles["0"].internetPrice !== NaN || rate !== null && term !== null) {


	}
};

/* VLP */


//Set rate and term for payment calculator
var rate = 6.99;
var term;


//Create Array To Store hproduct values
var stockNumberArray = [];
var priceArray = [];
var costOfFinanceArray = [];
var biWeeklyPymtArray = [];
var termArray = [];

var itemCount = $('.hproduct').length

var d = new Date();
var n = d.getFullYear();


var vehicleAge;





jQuery(".hproduct").each(function (index) {

	var modelYear = jQuery(this).attr('data-year');
	//var dataMake = jQuery(this).attr('data-make');
	//var dataModel = jQuery(this).attr('data-model');
	//var dataTrim = jQuery(this).attr('data-trim');

	var stockNumber = jQuery(this).find(".description dl.last dt:contains('Stock #:')").next().text();
	stockNumberArray.push(stockNumber);
	
	var internetPrice = jQuery(this).find('span.internetPrice.final-price .value').text();
	var price = Number(internetPrice.replace(/[^0-9\.-]+/g, ""));
	priceArray.push(price);

	
	vehicleAge = n - modelYear;
	
	if (vehicleAge == 0 || vehicleAge == 1) {
		term = 84;
	} else if (vehicleAge == 2 || vehicleAge == 3) {
		term = 72;
	} else if (vehicleAge == 4) {
		term = 60;
	} else if (vehicleAge == 5) {
		term = 48;
	} else if (vehicleAge == 6 || vehicleAge == 7) {
		term = 36;
	}
	
	termArray.push(term);
	
	var monthlyPymt = LOANCALC.monthlyPayment(price, rate, term);

	var biWeeklyPymt = (monthlyPymt * 12) / 26;

	var totalCost = (monthlyPymt * term);

	totalCost = totalCost.toFixed(2);

	var costOfFinance = totalCost - price;

	costOfFinance = costOfFinance.toFixed(2);
	
	costOfFinance = parseInt(costOfFinance);
	
	costOfFinanceArray.push(costOfFinance);

	monthlyPymt = monthlyPymt.toFixed(2);

	biWeeklyPymt = biWeeklyPymt.toFixed(2);
	
	biWeeklyPymtArray.push(biWeeklyPymt);

	
	//PAYMENT CALCULATOR

	jQuery(this).find('.pricing-area span.eprice').before('<span class="payment">Finance From<br><strong><span class="amount">$' + biWeeklyPymt + '</span> B/W OAC</strong><sup>1</sup><br><span class="term">For ' + term + ' Months</span></span>');
	
});


//COMPLIANT DISCLAIMER

var TotalCost = priceArray[0] + costOfFinanceArray[0];

jQuery(".ddc-content.inventory-listing-default").after("<div class='disclaimer'><sup>1</sup> EXAMPLE: Payment on stock #" + stockNumberArray[0] + " is based on $" + priceArray[0] + " less the down-payment of $0 for a total cost to finance of $" + costOfFinanceArray[0] + " over " + termArray[0] + " months with a rate of " + rate + "% for a total bi-weekly payment $" + biWeeklyPymtArray[0] + ". Total cost of financing of $<span id='total_financing'>"+ costOfFinanceArray[0] +"</span> for a total cost of $<span id='total_price'>"+ TotalCost +"</span>.  The bi-weekly payment does not include sales tax.</div");


