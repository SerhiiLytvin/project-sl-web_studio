'use strict';
/* hover over contacts__link  */
const contactsLinkEnvelope = document.querySelector('.contacts__link-envelope');
const contactsLinkSmartphone = document.querySelector('.contacts__link-smartphone');

/*--Envelope--*/
contactsLinkEnvelope.addEventListener('mouseenter', () => {
   if (contactsLinkEnvelope.classList.contains('contacts__icon-envelope')) {
      contactsLinkEnvelope.classList.remove('contacts__icon-envelope');
   }
   contactsLinkEnvelope.classList.add('contacts__icon-envelope--hover');

});

contactsLinkEnvelope.addEventListener('mouseleave', (e) => {
   if (contactsLinkEnvelope.classList.contains('contacts__icon-envelope--hover')) {
      contactsLinkEnvelope.classList.remove('contacts__icon-envelope--hover');
   }
   contactsLinkEnvelope.classList.add('contacts__icon-envelope');

});

/*--Smartphone--*/
contactsLinkSmartphone.addEventListener('mouseenter', () => {
   if (contactsLinkSmartphone.classList.contains('contacts__icon-smartphone')) {
      contactsLinkSmartphone.classList.remove('contacts__icon-smartphone');
   }
   contactsLinkSmartphone.classList.add('contacts__icon-smartphone--hover');

});

contactsLinkSmartphone.addEventListener('mouseleave', () => {
   if (contactsLinkSmartphone.classList.contains('contacts__icon-smartphone--hover')) {
      contactsLinkSmartphone.classList.remove('contacts__icon-smartphone--hover');
   }
   contactsLinkSmartphone.classList.add('contacts__icon-smartphone');
});

/*--menu burger*/
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__nav').toggleClass('active');
      $('body').toggleClass('lock');
   })
})
