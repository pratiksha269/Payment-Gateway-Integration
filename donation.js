const heading = document.querySelector(".heading");
const discription = document.querySelector(".discription");
const payButton = document.querySelector(".payment");
const container = document.querySelector(".form");
const timeline = new TimelineMax({ delay: 0.2 });

window.onload = () => {
    if (window.innerWidth < 600) {
        timeline.fromTo(container, 0.5, { width: "0%", opacity: 0 }, { width: "80%", opacity: 1 });
    } else {
        timeline.fromTo(container, 0.5, { width: "0%", opacity: 0 }, { width: "50%", opacity: 1 });
    }
    timeline.fromTo(heading, 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 });
    timeline.fromTo(discription, 0.5, { opacity: 0 }, { opacity: 1 });
    timeline.fromTo(payButton, 0.5, { opacity: 0 }, { opacity: 1 });
}

// paypal.Buttons({
//     style: {
//         color:'blue',
//         shape:'pill'
//     }
// }).render('#paypal-payment-button');

// function initPayPalButton() {
//     var description = document.querySelector('#smart-button-container #description');
//     var amount = document.querySelector('#smart-button-container #amount');
//     var descriptionError = document.querySelector('#smart-button-container #descriptionError');
//     var priceError = document.querySelector('#smart-button-container #priceLabelError');
//     var invoiceid = document.querySelector('#smart-button-container #invoiceid');
//     var invoiceidError = document.querySelector('#smart-button-container #invoiceidError');
//     var invoiceidDiv = document.querySelector('#smart-button-container #invoiceidDiv');

//     var elArr = [description, amount];

//     if (invoiceidDiv.firstChild.innerHTML.length > 1) {
//       invoiceidDiv.style.display = "block";
//     }

//     var purchase_units = [];
//     purchase_units[0] = {};
//     purchase_units[0].amount = {};

//     function validate(event) {
//       return event.value.length > 0;
//     }

//     paypal.Buttons({
//       style: {
//         color: 'blue',
//         shape: 'pill',
//         label: 'pay',
//         layout: 'horizontal',
        
//       },

//       onInit: function (data, actions) {
//         actions.disable();

//         if(invoiceidDiv.style.display === "block") {
//           elArr.push(invoiceid);
//         }

//         elArr.forEach(function (item) {
//           item.addEventListener('keyup', function (event) {
//             var result = elArr.every(validate);
//             if (result) {
//               actions.enable();
//             } else {
//               actions.disable();
//             }
//           });
//         });
//       },

//       onClick: function () {
//         if (description.value.length < 1) {
//           descriptionError.style.visibility = "visible";
//         } else {
//           descriptionError.style.visibility = "hidden";
//         }

//         if (amount.value.length < 1) {
//           priceError.style.visibility = "visible";
//         } else {
//           priceError.style.visibility = "hidden";
//         }

//         if (invoiceid.value.length < 1 && invoiceidDiv.style.display === "block") {
//           invoiceidError.style.visibility = "visible";
//         } else {
//           invoiceidError.style.visibility = "hidden";
//         }

//         purchase_units[0].description = description.value;
//         purchase_units[0].amount.value = amount.value;

//         if(invoiceid.value !== '') {
//           purchase_units[0].invoice_id = invoiceid.value;
//         }
//       },

//       createOrder: function (data, actions) {
//         return actions.order.create({
//           purchase_units: purchase_units,
//         });
//       },

//       onApprove: function (data, actions) {
//         return actions.order.capture().then(function (details) {
//           alert('Transaction completed by ' + details.payer.name.given_name + '!');
//         });
//       },

//       onError: function (err) {
//         console.log(err);
//       }
//     }).render('#paypal-button-container');
//   }
//   initPayPalButton();