(function ($) {
    window.Plus = window.Plus || {};
    window.Plus.checkout = window.Plus.checkout || {};

    let tosURL = "https://"+window.Shopify.shop + "/policies/terms-of-service";
    let checkBoxHTML = `<div class="section__content">
                            <div class="checkbox-wrapper">
                                <div class="checkbox__input">
                                    <input name="checkout[buyer_accepts_terms]" type="hidden" value="0" autocomplete="off" required>
                                    <input class="input-checkbox" data-backup="buyer_accepts_terms" type="checkbox" value="1" name="checkout[buyer_accepts_terms]" id="checkout_buyer_accepts_terms" required >
                                </div>
                                <label class="checkbox__label" for="checkout_buyer_accepts_terms">
                                    Accept our <a style="text-decoration: underline; color: #0000EE;" target="_blank" href=`+tosURL+`>Terms and Conditions</a>
                                </label>
                            </div>
                        </div>`;


    Plus.checkout.formSettings = {
        formFooter: '[data-shipping-address]',
        mainForm: '[data-customer-information-form]'
    }

    if (Shopify.Checkout.step === 'contact_information') {
        $(document).on('page:load page:change', function () {
            Plus.checkout.addTCBox(Plus.checkout.formSettings);
        });

        Plus.checkout.addTCBox = function (settings) {
            $(settings.mainForm).removeAttr('novalidate');
            $(settings.formFooter).append(checkBoxHTML);
        }
    }

})(Checkout.$);