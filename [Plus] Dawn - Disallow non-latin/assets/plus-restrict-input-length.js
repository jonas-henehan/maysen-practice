// Shopify dev documentation for using JQuery on checkout page
// https://shopify.dev/themes/architecture/layouts/checkout-liquid#checkout-jquery

// Customize checkout input form
// https://shopify.dev/themes/architecture/layouts/checkout-liquid/customize-checkout

(function ($) {
    $(document).on("page:load page:change", function () {
        if (Shopify.Checkout.step === "contact_information") {
            console.log("Loaded");
            Checkout.$(".fieldset :input").attr("maxlength", 32);

            $(".field__input").on('keyup', function() {
                $('.inputWarning').remove();

                if($(this).val().length == 32) {
                  $(this).css({"border": "1px solid red"})
                  $('[data-delivery-shipping-info]').prepend("<h3 style='color: red' class='inputWarning'>Input cannot be longer than 32 characters</h3>");
                }else{
                  $(this).removeAttr( "style" )
                  $('.inputWarning').remove();
                }
              });
        }
    });
})(Checkout.$);