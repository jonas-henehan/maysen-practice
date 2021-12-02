// Shopify dev documentation for using JQuery on checkout page
// https://shopify.dev/themes/architecture/layouts/checkout-liquid#checkout-jquery

// Customize checkout input form
// https://shopify.dev/themes/architecture/layouts/checkout-liquid/customize-checkout

var no_po_box_input = /(po box)/i;
(function ($) {
    $(document).on("page:load page:change", function () {
        if (Shopify.Checkout.step === "contact_information") {
            $("[data-continue-button-content]").on("click", function (e) {
                e.preventDefault();

                // Remove the warning on a button click so it doesn't add another warning
                Checkout.$('.inputWarning').remove();

                // Check validity of input to regex pattern above
                var isValidForPOBoxAddress1 = (no_po_box_input).test($("#checkout_shipping_address_address1").val());
                var isValidForPOBoxAddress2 = (no_po_box_input).test($("#checkout_shipping_address_address2").val());

                // If either doesn't match a Po Box regex pattern
                var allPOBoxValid = isValidForPOBoxAddress1 || isValidForPOBoxAddress2;

                if (!allPOBoxValid) {
                    //Submit the form
                    Checkout.$("[data-customer-information-form]").submit();
                } else {
                    //Show a warning on the page
                    e.preventDefault();
                    Checkout.$('[data-delivery-shipping-info]').prepend("<h3 style='color: red' class='inputWarning'>WARNING: PO Box detected</h3>");
                }
            });
        }
    });
})(Checkout.$);