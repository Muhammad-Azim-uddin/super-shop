$(window).scroll(function(){
    let scrollbar = $(window).scrollTop();
    // console.log(scrollbar);
    
    if (scrollbar >700) {
        $('nav').addClass('fixed');
    }
    else{
        $('nav').removeClass('fixed');
    }
})

$(".up").click(function(){
    $('html, body').animate({scrollTop: 0}, 400);
})