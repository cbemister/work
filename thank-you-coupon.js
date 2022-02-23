// Thank You Page Coupon
if (pathName === "/thank-you/" || pathName === "/reviews/" ) {
	let campaign = sessionStorage.getItem("campaign");
	if (campaign === 'hot-august-nights') {
		dataLayer.push({'event': 'trackEvent','eventCategory': 'acDevelopment', 'eventAction': 'Landing Page', 'eventLabel' : 'Thank You Page Coupon'});
		jQuery('.primary-wrapper').before('<div style="border:5px dotted #bbb;width:80%;border-radius:15px;margin:0 auto;max-width:600px;margin-bottom:7rem;background: #e6e6e6;position: relative;top: 7rem;"><div style="text-align:center;padding:2rem 2rem 0"><img src="https://autocanadaprod-com.cdn-convertus.com/uploads/sites/11/2021/07/HotAugustNights_PROMO_v2.png" alt="Hot August Nights" style="width:80%"> <img src="https://autocanadaprod-com.cdn-convertus.com/uploads/sites/10/2021/07/HotAugustNights_OFFER_500.png" alt="$500 Trade-In Voucher" style="width:80%;border-top:2px solid #eb088c;padding-top:1rem;margin-top:1rem;border-bottom:2px solid #eb088c;padding-bottom:1rem;margin-bottom:1rem"></div><div style="text-align:center;padding:2rem 3rem;background-color:#f1f1f1;margin:2rem 0;font-size:smaller;"><p>AMVIC Licensed. $500 dollars will be deducted from the final purchase price of a new vehicle, customer must have a trade in vehicle for offer to be valid. Offers expire August 31, 2021. See Dealer for details.</p></div><div style="text-align:center;margin-bottom:1rem;"><p class="expire" style="color:#eb088c">Expires: August 31, 2021</p></div></div><p style="text-align:center;font-size:1.5rem;padding:2rem 5rem;"><strong>Please print or screenshot this coupon then show it to us prior to purchase.</strong></p>');
	}
	jQuery('.page-title').hide();
}
