function myFunction() {
    var x = document.getElementById("nav_menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}


function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

jQuery(function($){
    $('a[href*="#"]').on('click.smoothscroll', function( e ){
        var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
        if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
        var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
        if( ! $target.length ) return;
        e.preventDefault();
            $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 700, 'swing', function(){
            window.location.hash = hash;
            });
    });
});


/* call */

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#call').fadeIn();
    } else {
        $('#call').fadeOut();
    }
});


/* banner popup */

$('[data-modal=bannerpopup]').on('click', function () {
    $('.overlay, #bannerpopup').fadeIn('slow');
});
    $('.modal__close').on('click', function () {
    $('.overlay, #bannerpopup').fadeOut('slow');
});

/* wow js */
new WOW().init();