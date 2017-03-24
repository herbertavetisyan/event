
/*Navigation bar*/

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    var wScroll = $(this).scrollTop();

    $('.head').css({
        'transform':'translate(0px, '+ wScroll /2 +'%)'
    });
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/***************************** Add new product row *****************/

$(document).ready(function () {
    var i = 2;

    $('#add-row').on('click', function() {
        $('#add-row').before(
            "<div class='added'>" +
            "<div class='form-inline'>" +
                "<div class='form-group'>" +
                    "<input type='text' name='product[product"+i+"][name]' />" +
                "</div><div class='form-group'>" +
            "<input style='margin-left: 4px;' name='product[product"+i+"][qty]' type='text' />" +
            "</div> <div class='form-group'> " +
            "<select name='product[product"+i+"][sizes]' class='choose-size' style='margin-top: 0;'> " +
                "<option disabled selected >Չ․միավոր</option> " +
                "<option value='հատ'>հատ</option> " +
                "<option value='ք/մ'>ք/մ</option> " +
                "<option value='կգ'>կգ</option> " +
            "</select> </div>" +
            "<div class='form-group'>" +
            "<input type='file'  name='product[product"+i+"][image]' width='100px' class='upload-image'> " +
            "</div><div class='form-group'><button type='button' style='margin-left: 4px;' class='remove-row'>X</button></div>" +
            "</div></div>");
        i++;
    });

    $('.create-tender').on('click', '.remove-row', function() {
        $(this).parents()[2].remove()
    })

});

/************************** Login and Sign up show and hide *******************************/

$(function () {
    $('.reg').on('click', function (e) {
        e.preventDefault();
        $('#login').hide();
        $('#signup').show().addClass('animated fadeIn');
    });
});

$(function () {
    $('.log-in').on('click', function (e) {
        e.preventDefault();
        $('#login').show().addClass('animated fadeIn');
        $('#signup').hide()
    })
});


/************************** Hide uplaod image based on category change *******************************/

$("#select_type").change(function(){
    if($(this).val()=== "4" || $(this).val()=== "5")
    {
        $(".products").hide();
        $(".service").show();
        $("#add-row").hide();
        $(".added").remove();
    }
    else
    {
        $(".service").hide();
        $(".select_service").val('');
        $(".products").show();
        $("#add-row").show()
    }
});



/*************************************************************************************/

/*Navbar Collapse*/
$(document).ready(function (){
    $('.nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
});
/*************************************************************************************/

/***** On Click navbar toggle change to cross sign***/
$(document).ready(function (){
    $( ".navbar-toggle" )
        .on( "click", function() {
            $(this).toggleClass( "active" );
        });
    $('.nav a').on('click', function() {
        $(".navbar-toggle" ).removeClass("active");
    });
});

/*************************************************************************************/