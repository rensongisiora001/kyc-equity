
$(document).ready(function() {
	'use strict';

  /*-------------------------------------
  Sticky NabBar
  -------------------------------------*/
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      $('.ugf-nav-wrap').addClass('fixed');
    } else {
      $('.ugf-nav-wrap').removeClass('fixed');
    }
  });

  /*--------------------------------------------
  File Input
  --------------------------------------------*/
  function handleChange(inputId) {
    var fileUploader = document.getElementById(inputId);
    var getFile = fileUploader.files

    
    var uploadedFile = getFile[getFile.length - 1];
    readFile(uploadedFile, inputId);
      

  }

  $('.input-file').on('change', function(e) {
    handleChange(e.target.id);
  })

  function readFile(uploadedFile, inputId) {
    if (uploadedFile) {
      var reader = new FileReader();
      reader.onload = () => {
        var parent = document.getElementById('p-' + inputId);
        parent.innerHTML = `<img class="preview-content img-fluid" src=${reader.result} />`;
      };

      reader.readAsDataURL(uploadedFile);
    }
  };
  
  /*--------------------------------------------
  Country Select
  --------------------------------------------*/

  $("#country").countrySelect();

  var windowWidth = $(window).width();

  $(window).resize(function() {
    if(windowWidth != $(window).width()) {
      countryList()
    }
  });

  function countryList() {
    var screenSize = $(window).width();
    var countryInputWidth = $('#country').width();
    var countryListWidth = countryInputWidth;

    $('.kyc-form .country-list').width(countryListWidth + 86);
  }
  countryList();

  /*--------------------------------------------
  File Input
  --------------------------------------------*/

  var fileInput  = document.querySelector( ".custom-file-input" );
  var the_return = document.querySelector(".file-return");

  $(fileInput).on('change', function(event) {
    $(the_return).html(this.value);
  })


})