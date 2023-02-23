(function () {
 emailjs.init("qjcDHhnoIC4bjqlAW");
})();
// Set min inventory level for alert
const minLevel = minInventoryLevel || 3;
// Select the element you want to monitor
const targetNode = document.querySelector('#inventory');
// Create a new MutationObserver object
const observer = new MutationObserver((mutationsList, observer) => {
 // Loop through the list of mutations
 for (let mutation of mutationsList) {
  if (mutation.type === 'childList' && mutation.addedNodes && mutation.target.innerText && mutation.target.innerText.includes('Available') && mutation.target.innerText.split(' ')[0] !== '00') {
   //const inventoryCount = mutation.target.innerText.split(' ')[0]
   const inventoryCount = document.querySelector(".show-inventory__wrap .row").childNodes.length
   if (inventoryCount < minLevel) {
    sendMail(inventoryCount);
    break;
   }
  }
 }
});
// observe everything except attributes
observer.observe(targetNode, {
 childList: true, // observe direct children
 subtree: true, // and lower descendants too
 characterDataOldValue: true // pass old data to callback
});

function sendMail(inventoryCount) {
 var params = {
  page_url: window.location.href,
  inventory_count: inventoryCount,
  dealership_name: dataLayer[0].dealer.name
 };
 const serviceID = "service_nf18v63";
 const templateID = "template_31q5udb";
 emailjs.send(serviceID, templateID, params).then(res => {
  console.log(res);
 }).catch(err => console.log(err));
}