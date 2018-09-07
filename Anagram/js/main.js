$(document).ready(function(){
    var menuBurger = $('.menu-burger');
    var burger = $('.burger');
    var sideMenu = $('#side-menu');

    menuBurger.click(function() {
        var burgerTopLine = burger.find('.burger-line--top');
        var burgerCenterLine = burger.find('.burger-line--center');
        var burgerBottomLine = burger.find('.burger-line--bottom');

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

            sideMenu.css({
                "display": "none",
                "right": "-300px"
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

            sideMenu.css({
                "display": "block",
                "right": 0
            });
        }
    });
});