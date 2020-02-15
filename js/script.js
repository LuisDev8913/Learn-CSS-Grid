$(document).ready(function(){
   $( "a" ).click(function( event ) {
        event.preventDefault();
    });

    /////Scroll
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1200);
        return false;
    });

   var dropdown = document.querySelector(".dropdown");
   var button = document.querySelector("#close-icon").addEventListener("click", function(){ 
   	if(dropdown.style.display === "none"){
   		dropdown.style.display = "grid";
   	}else{
   		dropdown.style.display ="none";
   		button.innerHTML = "close";
   	}
      $(this).toggleClass('open');
   }
 )
   $('.single-item').slick({
   	dots: true,
   	arrows: false,
   	autoplay: true,
   	autoplaySpeed: 4000
   });

   /////////////////Start Validation
    var form = document.forms.contact;

    $(form).submit(function (e) {
        $('.error').empty();

        var inputs = form.elements;

        for(var i = 0; i < inputs.length; i++) {
            var error = '';

            if (inputs[i].type === 'text') {
                error = validateText(inputs[i]);
            } else if (inputs[i].type === 'email') {
                error = validateEmail(inputs[i]);
            }

            if (error) {
                $(inputs[i]).closest('.error_wr').find('.error').text(error);
            }
        }

        if ($('.error:parent').length > 0) {
            e.preventDefault();
        }
    });


    function validateText(input) {
        var min = input.dataset.min,
            max = input.dataset.max,
            value =input.value.trim();

        if (value.length < min) {
            return 'Your input should be not less than ' + min + ' symbols.';
        } else if (value.length > max) {
            return 'Your input should be not longer than ' + max + ' symbols.';
        } else {
            return '';
        }
    }

    function validateEmail(input) {
        var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
            value = input.value.trim();

        if (emailRegexp.test(value)) {
            return '';
        } else {
            return 'This is not valid email.';
        }
    }
});