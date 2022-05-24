(function ($) {

    $('.navigate-master ul li a').click(function (e) {
        e.preventDefault();
        var postId = $($(this).attr('href'));
        var postLocation = postId.offset().top;
        // $('html, body').animate({ scrollTop: postLocation }, 'slow');
    });

    $(window).scroll(function () {
        var scrollBar = $(this).scrollTop();

        $("section").each(function (index) {
            var elTop = $(this).offset().top;
            var elHeight = $(this).height();

            if (scrollBar >= elTop - 5 && scrollBar < elTop + elHeight) {
                // $('.navigate-master ul li').eq(index).addClass('active').siblings().removeClass('active');
                $(".navigate-master ul li:nth-child(" + (index + 1) + ")").addClass("active").siblings().removeClass("active");
            }
        });
    });

})(jQuery);