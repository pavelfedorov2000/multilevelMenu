$(function() {

    $('.menu__list-item:nth-child(2)').on('mouseover', function(){
        $('.menu__list-item:nth-child(4)').removeClass('menu__list-item--active');
        $(this).siblings().removeClass('menu__list-item--active');
        $(this).addClass('menu__list-item--active');
        $('#submenu-2').addClass('submenu--active');
        $('#submenu-4').removeClass('submenu--active');
    });
    $('.menu__list-item:nth-child(4)').on('mouseover', function(){
        $('.menu__list-item:nth-child(2)').removeClass('menu__list-item--active');
        $(this).siblings().removeClass('menu__list-item--active');
        $(this).addClass('menu__list-item--active');
        $('#submenu-2').removeClass('submenu--active');
        $('#submenu-4').addClass('submenu--active');
    });

    $('.hamburger').on('click', function(){
        $(this).toggleClass('hamburger--active');
        $('.mobile-menu').slideToggle('300');
    });

    $('.drop-arrow').on('click', function(){
        $(this).toggleClass('drop-arrow--active');
        $(this).parent().next().slideToggle('300');
    });
});
