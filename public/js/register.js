'use strict';
$(function() {
  $('#submit-registration').click(function(e) {
    if ($('#first').val() === '') {
      e.preventDefault();
      alert('First name cannot be blank');
    }
    if ($('#last').val() === '') {
      e.preventDefault();
      alert('Last name cannot be blank');
    }
    if ($('#email').val() === '') {
      e.preventDefault();
      alert('Email address cannot be blank');
    }
    if ($('#username').val() === '') {
      e.preventDefault();
      alert('Username cannot be blank');
    }
    if ($('#password').val() === '') {
      e.preventDefault();
      alert('Password cannot be blank');
    }
  })
});