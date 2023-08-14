//index slideshow
$(document).ready(function () {
    let index = 0;
    const images = $('.slideshow');
    const imgCount = images.length;

    for (let i = 0; i < imgCount; i++) {
        $('#contentButton').append('<li></li>');
    }

    function changeslideshow() {
        images.eq(index).siblings('.slideshow').fadeOut();
        images.eq(index).fadeIn();
         $(`#contentButton li:eq(${index})`).addClass('clicked');
         $(`#contentButton li`).not(`:eq(${index})`).removeClass('clicked');
        
        if (index < imgCount - 1) {
            index++;
        } else {
            index = 0;
        }
    }
    changeslideshow();

     let timer = setInterval(changeslideshow, 2000);
    
    $('#contentButton>li').click(function () {
        clearInterval(timer);  

        index = $(this).index();  

        changeslideshow();  
        
         timer = setInterval(changeslideshow, 2000); 
    });
});

// -------------------------------index productsCard-----------------------------------
$(document).ready(function() {
    let $productsCard = $('.index-products-card');
    // let scrollitem = $('.card-item').outerWidth() ;

    $('.item-right').click(function() {
        let currentScroll = $productsCard.scrollLeft();

        let $firstItem = $('.card-item:first');
        $productsCard.append($firstItem);

        $productsCard.scrollLeft(currentScroll);
    });

    $('.item-left').click(function() {
        let currentScroll = $productsCard.scrollLeft();

        let $lastItem = $productsCard.find('.card-item:last');
        $productsCard.prepend($lastItem);

        $productsCard.scrollLeft(currentScroll);
    });
});


//-----------------------news-----------------------------------------
$(document).ready(function() {
   let index=$('.card-container>*').length;
   let itemTop=[];
   for(let i=0;i<index;i++){
          itemTop[i]=$(`.card-container>*:eq(${i})`).offset().top-200;
        
    }
        $(window).scroll(function() {
            for(let i=0;i<index;i++){
                if ($(window).scrollTop()+600 > itemTop[i]) {  
                    $(`.card-container>*:eq(${i})`).addClass('fade-in')
                }}
            });
  
});
// 
//
// $(document).ready(function() {
    
//     $(window).scroll(function() {
//         $('.card-container > *').each(function() {
//             let itemTop = $(this).offset().top ;
//             let windowBottom = $(window).scrollTop() + 500;

//             if (windowBottom > itemTop) {
//                 $(this).addClass('fade-in');
//             }
//         });
//     });
// });










