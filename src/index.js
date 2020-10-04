// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

let popup2;
window.addEventListener("DOMContentLoaded", function () {
  // When instantiating a popup embed, you must provide the URL
  // of your typeform and your desired embed settings. If you don't
  // provide any settings, a default 'popup' embed is instantiated.

  popup2 = window.typeformEmbed.makePopup(
    "https://linikerja.typeform.com/to/hzIWlbwc",
    {
      hideHeaders: true,
      onSubmit: function () {
        // $("div[data-qa='popup-mode-popup']").parent().parent().remove();
        popup2.close();
      }
    }
  );
});

// Now we bind our buttons to open our previously instantiated
// embedded typeforms when clicked

$(document).ready(function () {
  $(".typeform-popup").on("click", function (evt) {
    popup2.open();
    evt.preventDefault();
    return false;
  });

  var toDate = $('[data-pages-countdown-date]').attr('data-pages-countdown-date');
	$(".year").countdown(toDate, function(event) {
		$(this).text(event.strftime('%Y'))
	});
	$(".month").countdown(toDate, function(event) {
		$(this).text(event.strftime('%m'))
	});
	$(".day").countdown(toDate, function(event) {
		$(this).text(event.strftime('%D'))
	});
	$(".hour").countdown(toDate, function(event) {
		$(this).text(event.strftime('%H'))
	});
	$(".minutes").countdown(toDate, function(event) {
		$(this).text(event.strftime('%M'))
	});
	$(".seconds").countdown(toDate, function(event) {
		$(this).text(event.strftime('%S'))
	});
});
