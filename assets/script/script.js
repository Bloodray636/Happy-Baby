$("#owl-demo-1").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoWidth: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight:true,
    dots: true,
    dotsEach: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:2,
            nav:false,
            loop:true
        }
    }
});