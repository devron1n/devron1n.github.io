$(document).ready(function(){
    var contactButton = $('.contact');
    var menuBlock = $('.menu-block');
    var menuButton = $('.menu');
    var menuBurger = $('.menu-burger');
    var mainPic = $('.main-pic');
    var mainText = $('.main-text');
    var logo = $('.logo'); 
    var blocks = $('.block'); 

    contactButton.fadeIn(700, function() {
        $(this).css("transition", "300ms");
        menuBurger.fadeIn(700);
        menuButton.fadeIn(700, function() {
            $(this).css("transition", "300ms");
            mainPic.slideDown(700, function() {
                $(this).css("display", "flex");
                mainText.fadeIn(500);
                logo.fadeIn(500, function() {
                    blocks.fadeIn(500);
                    $('footer').fadeIn(500);
                });                 
            });
        });
    });


    var question = $('.question');

    question.click(function() {
        var displayP = $(this).find('p').css("display");

        if (displayP == "none") {
            $(this).find('p').slideDown(300, function() {
                var thisH2 = $(this).parents('.question').find('h2');

                if (thisH2.css("color") == "rgb(0, 0, 0)") {
                    $(this).parents('.question').find('h2').css("color", "rgb(109, 157, 185)"); 
                } else {
                    $(this).parents('.question').find('h2').css("color", "rgb(0, 0, 0)");
                }
            });
        } else {
            $(this).find('p').slideUp(300, function() {
                var thisH2 = $(this).parents('.question').find('h2');

                if (thisH2.css("color") == "rgb(0, 0, 0)") {
                    $(this).parents('.question').find('h2').css("color", "rgb(109, 157, 185)"); 
                } else {
                    $(this).parents('.question').find('h2').css("color", "rgb(0, 0, 0)");
                }
            });
        };
    });


    var linkWide = $('.link--wide');

    linkWide.mouseover(function (){
        $(this).css("background-color", "gray");
        $(this).find('a').css("color", "white");
        $(this).find('.arrow--before').css({
            "background": "white",
            "left": "125px"
        });
        $(this).find('.arrow--after').css({
            "border-bottom-color": "white",
            "border-right-color": "white",
            "left": "137px"
        });
    });
    linkWide.mouseout(function (){
        $(this).css("background-color", "initial");
        $(this).find('a').css("color", "initial");
        $(this).find('.arrow--before').css({
            "background": "black",
            "left": "120px"
        });
        $(this).find('.arrow--after').css({
            "border-bottom-color": "black",
            "border-right-color": "black",
            "left": "132px"
        });
    });


    menuBlock.mouseover(function (){
        menuButton.css("color", "rgb(143, 177, 197)");
        $(this).find('.menu-line--top').css("background-color", "rgb(143, 177, 197)");
        $(this).find('.menu-line--center').css("background-color", "rgb(143, 177, 197)");
        $(this).find('.menu-line--bottom').css("background-color", "rgb(143, 177, 197)");
    });
    menuBlock.mouseout(function (){
        menuButton.css("color", "black");
        $(this).find('.menu-line--top').css("background-color", "black");
        $(this).find('.menu-line--center').css("background-color", "black");
        $(this).find('.menu-line--bottom').css("background-color", "black");
    });


    menuBlock.click(function() {
        var burgerTopLine = menuBurger.find('.menu-line--top');
        var burgerCenterLine = menuBurger.find('.menu-line--center');
        var burgerBottomLine = menuBurger.find('.menu-line--bottom');

        if (burgerCenterLine.css("display") == "none") {
            burgerTopLine.css({
                "transform": "rotate(180deg)",
                "top": "0"
            });
            burgerCenterLine.css("display", "block");
            burgerBottomLine.css({
                "transform": "rotate(-180deg)",
                "bottom": "0"
            });
        } else {
            burgerTopLine.css({
                "transform": "rotate(45deg)",
                "top": "1px"
            });
            burgerCenterLine.css("display", "none");
            burgerBottomLine.css({
                "transform": "rotate(-45deg)",
                "bottom": "1px"
            });
        }
    });
});