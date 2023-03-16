$(document).ready(function() {    
    $('.dropdown-item').click(function() {
        // value = $('.dropdown-item').html();
        // newvalue = value;
        $('#dropdownMenuButton1').html($(this).html());
        // $('#dropdownMenuButton1').html(newValue);
    })
    // $('.dropdown-item').on('click',  function(){
    //     var btnObj = $(this).parent().siblings('button');
    //     $(btnObj).text($(this).text());
    //     $(btnObj).val($(this).text());
    // });

})