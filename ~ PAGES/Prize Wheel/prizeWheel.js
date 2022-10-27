//CacheDom

var $accessCode = $('#accessCode');
var $inputContainer = $accessCode.find('.inputContainer');
var $input = $inputContainer.find('input');

var $wrapper = $('#wrapper');
var $legend = $('#legend');
var $disclaimer = $('.disclaimer');

var $enterBtn = $inputContainer.find('.enterBtn');
//var $resetBtn = $accessCode.find('.resetBtn');

var prizeWheel = $('#prizeWheel')[0];

//BindEvents
$enterBtn.on('click', toggleBtn);
//$resetBtn.on('click', reset);

function toggleBtn() {
	$inputContainer.toggle();
	$resetBtn.toggle();
	$wrapper.toggle();
	$legend.toggle();
	$disclaimer.toggle();
}

function reset() {

	$('div#wheel').toggle();

	$('#inner-wheel').css({
		'transform': 'initial'
	});

	$('div#wheel').toggle();

}

(function () {
	$input.keydown(function (e) {
		if (e.which === 13) { //Enter key pressed
			$enterBtn.click();
		}
	});

})();


//set default degree (360*5)
var degree = 3600;
//number of clicks = 0
var clicks = 0;

$(document).ready(function () {

	/*WHEEL SPIN FUNCTION*/
	$('#spin').click(function () {

		//add 1 every click
		clicks++;

		//create odds for spin
		
		//1000 spin 500 tv 750 plane 
		
		//var weights = [0.05, 0, 0.4, 0.225, 0.175, 0.15]; // probabilities
		//var weights = [0.05, 0.1, 0.15, 0.175, 0.225, 0.3]; // probabilities
		var weights = [0.225, 0.175, 0.15, 0.4, 0, 0.05]; // probabilities
		var results = [0.1666666666666667, 0.3333333333333333, 0.5, 0.6666666666666666, 0.8333333333333333, 1]; // values to return

		function getRandom () {
			var num = Math.random(),
				s = 0,
				lastIndex = weights.length - 1;

			for (var i = 0; i < lastIndex; ++i) {
				s += weights[i];
				if (num < s) {
					return results[i];
				}
			}
			
			return results[lastIndex];
		};
		
		
		
		/*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
		var newDegree = degree * clicks;
		var extraDegree = Math.floor(getRandom() * (360 - 1 + 1)) + 1;
		totalDegree = newDegree + extraDegree;

		/*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
		$('#wheel .sec').each(function () {
			var t = $(this);
			var noY = 0;

			var c = 0;
			var n = 700;
			var interval = setInterval(function () {
				c++;
				if (c === n) {
					clearInterval(interval);
				}

				var aoY = t.offset().top;
				$("#txt").html(aoY);
				//console.log(aoY);

				/*23.7 is the minumum offset number that 
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore, 
				exactly aligned with the spin btn*/
				if (aoY < 23.87) {
					//console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () {
						$('#spin').removeClass('spin');
					}, 100);
				}
			}, 10);

			$('#inner-wheel').css({
				'transform': 'rotate(' + totalDegree + 'deg)'
			});

			noY = t.offset().top;

		});
		setTimeout(function () {

			var scoreArray = [];

			$("#wheel span.fa").each(function (index) {

				var P = $(this);
				var Position = P.offset();
				var Score = Position.top - 134.5; // + Position.left;

				var Prize = $(this).attr('class');

				var prizeClass = Prize.replace(/ /g, ".");

				//var prizeArray = Prize.split(' ');

				//var prizeValue = prizeArray[1].split('-');

				scoreArray.push({
					'prize': prizeClass,
					'rank': Score
				});

				scoreArray.sort(function (a, b) {
					return (a.rank > b.rank) ? 1 : ((b.rank > a.rank) ? -1 : 0);
				});

			});

			var prizeVoucher = $('span.' + scoreArray[0].prize + ' > span.prize').text();
			

			alert('Congratulations! You\'ve Won a Vouncher To Receive a ' + prizeVoucher + ' With Purchase');



			reset();


		}, 18000);

		//prizeWheel.play();

		$('#prizeWheel').get(0).play();


	});





}); //DOCUMENT READY
