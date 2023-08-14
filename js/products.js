$(document).ready(function() {
    $(".products-block .products-choose:not(:first)").hide();

    $(".products-list li").click(function() {
        let index = $(this).index();

        $(".products-block .products-choose").hide();

        $(".products-block .products-choose").eq(index).show();
    });


   $(window).scroll(function() {
        if ($(window).scrollTop() > 165) {  
            $('.products-list').css({
                'position': 'fixed',
                'top': '60px',
              'margin-top': '20px',
                'width': '20%' 
            });
            $('.products-block').css({
                'position': 'relative',
                'left':'20%'
            });
           
        } else {
            $('.products-list').css({
                'position': 'static',
                'margin-top': '0',
                 'width': '20%'
            });
            $('.products-block').css({
                'position': 'static',
            });
        }
    });
});