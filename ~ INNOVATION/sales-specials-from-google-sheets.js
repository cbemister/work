const sheet_id = '1mFYx3CfcI-Ax1fxLGUnQYc7rmtIudvxAXKeXJhe9-V4';
const dealership = dataLayer[0].dealer.name;
const sheet_name = 'Specials';
const url = 'https://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?tqx=out:csv&sheet=' + sheet_name;
fetch(url).then(r => r.text()).then(data => csv().fromString(data)).then(data => filterData(data));

function filterData(data) {
 const rowData = data.filter(row => row.dealership.includes(dealership) && row.active === 'TRUE' && row.type === 'Sales');
 if (rowData.length) {
  writeHtml(rowData);
 } else if (jQuery('div#specials-department-sales').length) {
  jQuery('#specials-app').show();
 } else if (!rowData.length && (jQuery('div#specials-department-service').length && !jQuery('div#specials-department-sales').length)) {
  jQuery('.primary.col').append('<div class="no-results"><i class="fal fa-file no-results__icon"></i><h2 class="no-results__title">Sorry, our specials are being updated at the moment.</h2><p class="no-results__text">Contact us for the latest promotions</p><a href="/contact" class="button button--alternate button--centered" data-anl-event_action="redirect" data-anl-element_order="7" data-anl-event="cta_interaction" data-anl-element_text="Contact Us" data-anl-glb-page_type="page_type" data-anl-glb-element_color="element_color" data-anl-event_action_result="success">Contact Us</a></div>');
  jQuery('.no-results').show();
 } else {
  jQuery('.no-results').show();
 }
}

function writeHtml(data) {
 const htmlData = data.map(rowData => {
  const {
   title,
   description,
   link_url,
   web_special,
   disclaimer
  } = rowData;
  const specials_id = title.toLowerCase().replaceAll(' ', '-');
  return `<div id="${specials_id}" class="special mb-lg">
    <h4 convertus-data-id="specials__name" class="special__name">${title}</h4>
    <div class="row">
     <div class="col-lg-3 col-sm-4 col-xs-12">
      <div class="special__content">
       <strong><span class="special__content--available mb-xxs">Available For</span> <span class="special__content--time">Offers End Soon</span></strong> <a href="#" data-target="specials-v2" convertus-data-id="specials__request-form" class="button mt-md mb-xs modal-trigger"><span class="request-info">Request More Info</span></a> <a convertus-data-id="specials__cta-button" href="${link_url}" target="_self" class="button button--alternate" rel="noopener">Shop Now</a>
       <div class="special__content--description mt-xl mb-md">
        <p>${description}</p>
        <div class="disclaimer ${ disclaimer === '' ? 'hide' : '' }">
         <details>
          <summary>Disclaimer</summary>
          <p>${disclaimer}</p>
         </details>
        </div>
       </div>
       <div class="special__content--extras"><a data-target="email-special-modal" class="modal-trigger"><i class="fas fa-envelope"></i>Email a friend</a> <a class="print-special"><i class="fas fa-print"></i>Print</a></div>
      </div>
     </div>
     <div class="col-lg-9 col-sm-8 col-xs-12">
      <div class="special__image"><img src="${web_special}" alt="${title}"></div>
     </div>
    </div>
   </div>`;
 }).join('');
 //jQuery('#specials-department-sales .types__title').after(htmlData);
 if (!jQuery('div#specials-department-sales').length) {
  jQuery('#specials-v2').after('<div id="specials-app" style="display:block"><div class="transition-container"><div id="specials-department-sales" class="types"></div></div></div>');
  jQuery('#specials-department-sales.types').append(htmlData);
 } else {
  jQuery('#specials-department-sales .special').filter(':last').after(htmlData);
 }
 modifySpecialCards();
 jQuery('#specials-app').show();
}

function modifySpecialCards() {
 jQuery('.special').each(function () {
  jQuery(this).find('a.button.modal-trigger').attr('data-target', 'specials-v2');
  jQuery(this).find('.request-info').text('Request More Info');
 });
 jQuery('a[data-target="specials-v2"]').on('click', function () {
  var specialTitle = jQuery(this).closest('.row').siblings('.special__name').text();
  jQuery('input[name="special_title"]').val(specialTitle);
  var specialImage = jQuery(this).closest('.row').find('.special__image img').attr('src');
  jQuery('input[name="special_image"]').val(specialImage);
 });
 jQuery('#specials-department-parts, #specials-department-service, #specials-department-sales').on('click', function () {
  jQuery(this).find('details').removeAttr('open');
 });
}