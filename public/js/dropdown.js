'use strict';
$(function() {
  $('#browse').on('click', function() {
    $('#browse-by').toggleClass('hide-me');
  });
  $('#browse-wrapper').on('mouseleave', '#browse-by', function() {
    $('#browse-by').toggleClass('hide-me');
  })
});