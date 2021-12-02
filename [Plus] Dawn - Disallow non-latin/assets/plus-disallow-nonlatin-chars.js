// Shopify dev documentation for using JQuery on checkout page
// https://shopify.dev/themes/architecture/layouts/checkout-liquid#checkout-jquery

// Customize checkout input form
// https://shopify.dev/themes/architecture/layouts/checkout-liquid/customize-checkout

var non_latin_input = /^([a-zA-z0-9/\\''(),-\s]{2,255})$/;
(function ($) {
    $(document).on("page:load page:change", function () {
        if (Shopify.Checkout.step === "contact_information") {
            $("[data-continue-button-content]").on("click", function (e) {
                e.preventDefault();

                // Remove the warning on a button click so it doesn't add another warning
                Checkout.$('.inputWarning').remove();

                // Check validity
                var isValidLName = (non_latin_input).test($("#checkout_shipping_address_last_name").val());
                var isValidFName = (non_latin_input).test($("#checkout_shipping_address_first_name").val());
                var isValidAddress1 = (non_latin_input).test($("#checkout_shipping_address_address1").val());
                var isValidCity = (non_latin_input).test($("#checkout_shipping_address_city").val());

                // Single var to hold result of all other inputs

                var allValid = isValidLName & isValidFName & isValidAddress1 & isValidCity
                if (allValid) {
                    //Submit the form
                    Checkout.$("[data-customer-information-form]").submit();
                } else {
                    //Show a warning on the page
                    e.preventDefault();
                    Checkout.$('[data-delivery-shipping-info]').prepend("<h3 style='color: red' class='inputWarning'>WARNING: Error with contact information. Please try again</h3>");
                }
            });
        }
    });
})(Checkout.$);