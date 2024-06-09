    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }

    $(document).ready(function(){
        $('.testimonial-carousel').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });

        $('.dot-btn').click(function(){
            var slideIndex = $(this).data('slide');
            $('.testimonial-carousel').slick('slickGoTo', slideIndex);
        });
    });
