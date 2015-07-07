'use strict';
$(function() {

  var items = $('tr.item-list td:last-child');
  var itemTotals;
  var grandTotalNoTax = 0;
  var tax;
  var shipping;
  var grandTotal;

  function getTotal() {
    $(items).each(function(i) {
      var quant = parseFloat($(this).prev().text());
      var price = parseFloat($(this).siblings('.item-price').text());
      var total = (quant * price).toFixed(2);
      $(this).text(total);
    })
    itemTotals = $('tr.item-list td:last-child');
    $(itemTotals).each(function(i) {
      var rounded = parseFloat(parseFloat($(this).text()).toFixed(2));
      grandTotalNoTax += rounded;
      $('#grand-total-no-tax').text(grandTotalNoTax);
    });
    tax = parseFloat((grandTotalNoTax * 0.096).toFixed(2));
    $('#sales-tax').text(tax);
    shipping = 15.00;
    $('#shipping').text(shipping.toFixed(2));
    grandTotal = grandTotalNoTax + tax + shipping;
    $('#grand-total').text(grandTotal.toFixed(2));
  };
  getTotal();

});