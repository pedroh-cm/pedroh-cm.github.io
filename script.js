$(document).ready(function(){
    $(window).scroll(function(){
        
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

   
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
       // aplicando novamente a rolagem suave nos itens do menu, clique
        $('html').css("scrollBehavior", "smooth");
    });

    // menu de alternância / script de navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // digitando script de animação de texto
    var typed = new Typed(".typing", {
        strings: [ "Front-end || Developer.", "JavaScript"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Front-end || Developer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // script de carrossel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
