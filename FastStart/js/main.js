(function() {
    document.addEventListener('DOMContentLoaded', function() {
        //get element coordinates functions
        var getCoordsByClass = function(target) {
            var coords = document.querySelector(target).getBoundingClientRect();
            return coords;
        }
        var getCoordsByElement = function(target) {
            var coords = target.getBoundingClientRect();
            return coords;
        }
        
        //get window bottom coordinates
        var windowBottom = document.documentElement.clientHeight;
        
        //get all elements with 'animated' class
        var animatedElements = document.querySelectorAll('.animated');

        //checking if animated element shows in browser window (if true -> add class 'active')
        animatedElements.forEach(function(item, i , arr) {          
            var itemTop = getCoordsByElement(item).top;
            var itemBottom = getCoordsByElement(item).bottom;

            if (itemTop < windowBottom && itemBottom >= 0) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        //while scrolling page
        window.onscroll = function() {
            animatedElements.forEach(function(item, i , arr) {          
                var itemTop = getCoordsByElement(item).top;
                var itemBottom = getCoordsByElement(item).bottom;   
    
                if (itemTop < windowBottom && itemBottom >= 0) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            //fixing 'menu' function
            var menuTop = getCoordsByClass('.menu').top;
            console.log(menuTop);
            

            if (menuTop <= 0) {
                document.querySelector('.menu').classList.add('fixed');
            } else if (menuTop <= 0) {
                document.querySelector('.menu').classList.remove('fixed');
            }
        }
    });
})();