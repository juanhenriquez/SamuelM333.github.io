// window.onload = function(){
//     $(".button-collapse").sideNav();
//     smoothScroll.init({
//         easing: 'Linear',
//         updateURL: false,
//     });
// };

;(function(w, $){

    $(document).ready(function(){

        $(".button-collapse").sideNav();
        smoothScroll.init({
            easing: 'easeOutQuad',
            updateURL: false,
        });

    });

})(this, jQuery);
