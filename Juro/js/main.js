$(document).ready(function(){

    $('.slider').slick({
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $("#menu").mmenu({
        "slidingSubmenus": false,
        "extensions": [
            "pagedim-black",
            "theme-dark"
        ],
        "offCanvas": {
            "position": "right"
        }
    });
});



