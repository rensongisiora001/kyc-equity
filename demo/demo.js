   

$(document).ready(function() {
    'use strict';

    var $grid = $('.isotope-item').isotope({
        // options...
        itemSelector: '.item',
        layoutMode:'fitRows'

    });

    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });


    $('.nav-item').click(function(){
       $('.nav-item').removeClass('active');
       $(this).addClass('active');
       var selector=$(this).attr('data-filter');
       $('.isotope-item').isotope({
         filter:selector
       });
       return false;
    });
})

