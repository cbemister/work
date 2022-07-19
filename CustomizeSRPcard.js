var observeDOM = (function () {
 var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

 return function (obj, callback) {
  if (!obj || obj.nodeType !== 1) {
   return;
  }

  if (MutationObserver) {
   // define a new observer
   var mutationObserver = new MutationObserver(callback);

   // have the observer observe foo for changes in children
   mutationObserver.observe(obj, {
    childList: true,
    subtree: true
   });
   return mutationObserver;
  }

  // browser support fallback
  else if (window.addEventListener) {
   obj.addEventListener('DOMNodeInserted', callback, false);
   obj.addEventListener('DOMNodeRemoved', callback, false);
  }
 };
})();

setTimeout(function () {
 // add item
 var listElm = document.querySelector('.srp-wrapper');

 // Observe a specific DOM element:
 observeDOM(listElm, function (m) {
  var addedNodes = [],
   removedNodes = [];

  m.forEach(record => record.addedNodes.length & addedNodes.push(...record.addedNodes));

  m.forEach(record => record.removedNodes.length & removedNodes.push(...record.removedNodes));

  // RUN SCRIPTS AFTER INVENTORY LOADED 
  var inventoryCount = jQuery('.srp-wrapper .col.primary-col .row.grid-row .grid-view.col').length;

  // first condition waits for vehicle card to load

  if (addedNodes[0]?.classList && addedNodes[0].classList[0] === 'vehicle-card' || addedNodes[0]?.classList && addedNodes[0].classList[0] === 'mb-lg') {

   jQuery('.mb-lg.grid-view.col').each(function () {

    var vehicleCondition = jQuery(this).children().data('vehicle-condition');
    var vehicleYear = jQuery(this).children().data('vehicle-year');
    var vehicleMake = jQuery(this).children().data('vehicle-make');
    var vehicleModel = jQuery(this).children().data('vehicle-model');
    var vehicleInternetPrice = jQuery(this).children().data('vehicle-internet-price');

    var financeTerm = 96;
    var financeRate = 3.49;

    if (!jQuery(this).hasClass('modified')) {

     var monthlyFinancePayment = LOANCALC.monthlyPayment(vehicleInternetPrice.toString(), financeRate.toString(), financeTerm.toString());

     var weeklyFinancePayment = monthlyFinancePayment * 12 / 52;

     if (vehicleCondition === 'New' && vehicleYear === 2022 && vehicleMake === 'RAM' && vehicleModel === '1500 Classic' || vehicleCondition === 'New' && vehicleYear === 2022 && vehicleMake === 'RAM' && vehicleModel === '1500') {
      jQuery(this).find('.finance .price-block__single .price-block__price span.df.aifs').html('<span class="convertus-dollar-sign">$</span>' + weeklyFinancePayment.toFixed(0) + '</span>');
      jQuery(this).find('.finance .price-block__single span.price-block__sub').html('<span class="price-block__sub">' + financeRate + '% for 96 Months</span>');

     }

     jQuery(this).addClass('modified');

    }
   });
  }

  //console.clear();
  //console.log('Added:', addedNodes, 'Removed:', removedNodes);
 });

}, 0);
