// Set min inventory level for alert
const minLevel = 6;
// Select the element you want to monitor
const targetNode = document.querySelector('#inventory');
// Create a new MutationObserver object
const observer = new MutationObserver((mutationsList, observer) => {

 // Loop through the list of mutations
 for (let mutation of mutationsList) {
  if (mutation.type === 'childList' && mutation.addedNodes[0] ? .className === 'col-lg-4 col-sm-6 col-xs-12') { // Condition if inventory loaded
   let inventoryWrap = document.querySelector('.show-inventory__wrap .row');
   let inventoryCount;

   if (inventoryWrap !== null) {
    inventoryCount = inventoryWrap.childNodes.length;
   } else {
    inventoryCount = mutation.target.innerText.split(' ')[0]
   }

   if (inventoryCount > 0 && inventoryCount <= 6) {
    postToGoogleSheet(inventoryCount);
   }

   if (inventoryCount > 0) {
    $('#inventory').css('visibility', 'visible');
   }
   break;
  } else if (mutation.type === 'childList' && mutation.previousSibling ? .className === 'no-results') { // Condition if no results
   $('#inventory').css('display', 'none');
   $('#no-results').css('display', 'block');
   postToGoogleSheet(inventoryCount);
   break;
  }
 }
});
// observe everything except attributes
observer.observe(targetNode, {
 childList: true, // observe direct children
 subtree: true, // and lower descendants too
 characterDataOldValue: true // pass old data to callback
});

function postToGoogleSheet(inventoryCount) {
 const data = {
  "page": window.location.href,
  "count": inventoryCount,
  "title": document.querySelector('.page-title h1 span').innerText,
  "dealership": dataLayer[0].dealer.name.split(' ')[0],
  "dev": true
 };
 $.ajax({
  url: "https://script.google.com/macros/s/AKfycbzuowTgB7cKOBs_taasw7jILKm_JvXjmW25mSQzqErrksoYLmRf3Z7KdeWkrRRGcqDm3w/exec",
  method: "POST",
  dataType: "json",
  data: data,
  success: function (response) {
   console.log("Data written successfully to Google Sheet.");
  },
  error: function (xhr, status, error) {
   console.error("Error writing data to Google Sheet:", error);
  }
 });
}