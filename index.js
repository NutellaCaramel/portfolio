emailjs.init('pWiIYMNDvxSvXRHJZ');

$(document).ready(function(){

    $('#menue').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
});

$(window).on('scroll load',function(){

    $('#menue').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() >0){
        $('.top').show();
    }else{ 
        $('.top').hide();

    }

});

$('a[href*="#"]').on('click',function(e){
    e.preventDefault();

    $('html,body').animate({

        scrollTop : $($(this).attr('href')).offset().top,

    }, 500, 
    'linear'
    
    );

});
});

document.getElementById('formulaire').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log(event);
    // these IDs from the previous steps
    emailjs.send('service_iziv41k', 'template_3aj33vp', 
    {
        from_name:event.target.children.from_name.value ,
        email:event.target.children.email.value,
        message:event.target.children.message.value
        

        
    })
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
});