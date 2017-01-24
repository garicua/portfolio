
// slider
$('.bxslider').bxSlider({
    auto: true,
    mode: 'fade',
    captions: true
});

<!--anchor links-->
$(document).ready(function(){
        $("body").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

<!--hideme-->
$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.hideme').each( function(){

        var bottom_of_object = $(this).position().top + 100;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({
                'opacity':'1'

            },1000);
        }
    });
});

//form valiadation
$(function() {

    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Only alphabetical characters");

    $("#js-register-form").validate({

        rules: {
            form_name: {
                required: true,
                lettersonly: true
            },
            form_email: {
                required: true,
                email: true
            },
            form_topic: {
                required: true,
            },
            form_textarea: {
                required: true,
            }


        },

    });

});

// Animation for header
$(function() {
    header = $('.main-header'),
        letter = $('.main-header__letter'),
        h4 = $('.main-header__title h4 '),
        h1 = $('.main-header__title h1'),
        scroll = $('.main-header__scroll'),
        btn = $('.main-header__button'),
        li = $('.main-header  .navigation li'),
        tl = new TimelineMax();

    tl
        .to(header, 1.5, {autoAlpha:1, ease:Power1.easeOut})
        .from(letter, 2, {autoAlpha:0, scale:.05, ease:Power1.easeOut}, "+=0.5")
        .from(h1, 1, {autoAlpha:0, top:-150, ease:Power1.easeOut})
        .from(h4, 1, {autoAlpha:0, bottom:-50, ease:Power1.easeOut})
        .from(btn, 1, {autoAlpha:0, left: -50, ease:Power1.easeOut})
        .from(scroll, 1, {autoAlpha:0, bottom: 50, ease:Power1.easeOut})
        .staggerFrom(li, 0.3,{cycle: {
            x:[50, -50],
            scale:[0.1, 0.7]
        }, autoAlpha: 0, ease:Power1.easeOut}, 0.2)
    
    
        // .from(btn, 1, {autoAlpha:0, left:150, ease:Power1.easeOut})


});

// Animation for About
$(function() {
    h2 = $('h2'),
    li = $('.about .navigation li'),
        scrollMagicController = new ScrollMagic(),
        tlPartners = new TimelineMax();

    tlPartners
        .from(h2, 1.5, {autoAlpha:0, scale:.05, ease:Power1.easeOut})
        .staggerFrom(li, 0.3,{cycle: {
            x:[50, -50],
            scale:[0.1, 0.7]
        }, autoAlpha: 0, ease:Power1.easeOut}, 0.2)

    var scene = new ScrollScene({
        triggerElement: '.about',
        reverse: false,
        offset: 0
    })
        .setTween(tlPartners)
        .addTo(scrollMagicController);
});

// Animation for Service
$(function() {
    main = $('.service'),
    h3 = $('.service h3'),
    li = $('.service  li'),
        scrollMagicController = new ScrollMagic(),
        tlServices = new TimelineMax();

    tlServices
        .from(main, 1.5, { autoAlpha:0, ease:Power1.easeOut})
        .from(h3, 1.5, {text:"", autoAlpha:0, ease:Power1.easeOut})
        .staggerFrom(li, 0.3,{cycle: {
            x:[50, -50],
            scale:[0.1, 0.7]
        }, autoAlpha: 0, ease:Power1.easeOut}, 0.2)
        

    var scene = new ScrollScene({
        triggerElement: '.service',
        reverse: false,
        offset: 0
    })
        .setTween(tlServices)
        .addTo(scrollMagicController);
});

$(function() {
    main = $('.portfolio'),
        h3 = $('.portfolio h3'),
    ul = $('.portfolio__img ul'),
    li = $('.portfolio .navigation li'),
    li1 = $('.portfolio__img li:nth-child(1)'),
    li2 = $('.portfolio__img li:nth-child(2)'),
    li3 = $('.portfolio__img li:nth-child(3)'),
        scrollMagicController = new ScrollMagic(),
        tlPortfolio = new TimelineMax();

    tlPortfolio
        .from(main, 1.5, { autoAlpha:0, ease:Power1.easeOut})
        .from(h3, 1.5, {text:"", autoAlpha:0, ease:Power1.easeOut})
        .staggerFrom(li, 0.3,{cycle: {
            x:[50, -50],
            scale:[0.1, 0.7]
        }, autoAlpha: 0, ease:Power1.easeOut}, 0.2)
        .from(ul, 1, {autoAlpha:0, ease:Power1.easeOut})
        .from(li1, 1, {autoAlpha:0, bottom:100, ease:Power1.easeOut})
        .from(li3, 1, {autoAlpha:0, bottom:100, ease:Power1.easeOut}, '-=1')


    var scene = new ScrollScene({
        triggerElement: '.portfolio',
        reverse: false,
        offset: 0
    })
        .setTween(tlPortfolio)
        .addTo(scrollMagicController);
});

// Animation for Blog
$(function() {
    main = $('.blog'),
    h3 = $('.blog h3'),
    li = $('.blog li'),
        // right = $('.notebook__item:last-child'),
        scrollMagicController = new ScrollMagic(),
        tlBlog = new TimelineMax();

    tlBlog
        .from(main, 1.5, { autoAlpha:0, ease:Power1.easeOut})
        .from(h3, 1.5, {text:"", autoAlpha:0, ease:Power1.easeOut})
        .staggerFrom(li, 0.3,{cycle: {
            x:[50, -50],
            scale:[0.1, 0.7]
        }, autoAlpha: 0, ease:Power1.easeOut}, 0.2)

    var scene = new ScrollScene({
        triggerElement: '.blog',
        reverse: false,
        offset: 0
    })
        .setTween(tlBlog)
        .addTo(scrollMagicController);
});

// Animation for Footer
$(function() {
    main = $('.main-footer'),
        h3 = $('.main-footer h3'),
        li = $('.main-footer li'),
        form = $('form'),
        scrollMagicController = new ScrollMagic(),
        tlFooter = new TimelineMax();

    tlFooter
        .from(main, 1.5, { autoAlpha:0, ease:Power1.easeOut})
        .from(h3, 1.5, {text:"", autoAlpha:0, ease:Power1.easeOut})
        .staggerFrom(li, 0.3,{cycle: {
            x:[50, -50],
            scale:[0.1, 0.7]
        }, autoAlpha: 0, ease:Power1.easeOut}, 0.2)
        .from(form, 1.5, {scale:.05, autoAlpha:0, ease:Power1.easeOut})


    var scene = new ScrollScene({
        triggerElement: '.main-footer',
        reverse: false,
        offset: 0
    })
        .setTween(tlFooter)
        .addTo(scrollMagicController);
});
