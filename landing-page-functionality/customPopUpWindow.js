
var pageAlias = DDC.dataLayer.page.pageInfo.pageName;

var uuid = DDC.dataLayer.vehicles["0"].uuid;

jQuery('.inventory-detail-pricing.ddc-content.ddc-box-1').after('<a class="dialog" style="text-align: center; display: block; margin-bottom: 5px;"href="/vehiclelead-form.htm?itemId='+ uuid +'&category=AUTO&amp;parentPageAlias='+ pageAlias + '" rel="nofollow" data-width="400" data-href="/vehiclelead-form.htm?itemId=|itemId|&amp;category=|category|&amp;parentPageAlias='+ pageAlias +'">Use Promo Code</a>');