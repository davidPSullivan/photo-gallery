//Created by DavidPaul Sullivan 4/10/2017
//Get input typed by user

$(document).ready(function() {
    $('#search').keyup(function(){

         var $search = $('#search').val().toLowerCase();

        $('.gallery-list li a img').each(function(index, captionValue){
            if($(this).attr('alt').indexOf($search) >= 0){
                $(this).closest('li').show();
            } else {
                $(this).closest('li').hide();
            }
        });

    });

});