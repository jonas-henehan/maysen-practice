(function ($) {
  window.Plus = window.Plus || {};
  window.Plus.checkout = window.Plus.checkout || {};

  Plus.checkout.form_settings = {
    checkout_form_footer: '.step__sections',
    footer_image_arr: [
      '#image1',
      '#image2',
      '#image3',
      '#image4',
      '#image5',
      '#image6',
      '#image7'
    ],
    payment_alignment: '#payment_alignment',
    checkout_footer_container: 'checkout_images'
  }

  $(document).on('page:load page:change', function () {
    Plus.checkout.addFooterImages(Plus.checkout.form_settings);
  });

  Plus.checkout.addFooterImages = function (settings) {
    // Add a custom container to hold the images
    $(`<div id="${settings.checkout_footer_container}" style="display: flex; justify-content: ${$(settings.payment_alignment).text()} !important; flex-direction: row; margin-top: 10px; "></div>`).insertAfter(settings.checkout_form_footer);

    settings.footer_image_arr.forEach(image_selector => {

      // Insert image containers within the custom container specified above
      let imgURL = $(image_selector).text();
      if(imgURL != 'Null') {
        $("#"+settings.checkout_footer_container).append("<img src='https:" + imgURL + "' width='50px' />");
      }
    });
  }
})(Checkout.$);
