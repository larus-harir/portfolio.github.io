        $(function() {
            var $main = $("main").height();
            var $header = $("header");

            $(window).scroll(function() {
                if ($(this).scrollTop() > $main - 100) {
                    $header.stop().css({
                        "background-color": "rgb(255, 255, 255)",
                        "border-bottom": "none",
                        "box-shadow": "0 5px 7px #A4A4A4",
                    });
                    $header.stop().animate({
                        "height": "55px",
                    }, 200)
                } else {
                    $header.stop().css({
                        "background-color": "coral",
                        "border-bottom": "white 1px solid",
                        "box-shadow": "none",
                    });
                    $header.stop().animate({
                        "height": "75px",
                    }, 200)
                }
            });

            var $intro = $('#introduce').offset();
            $("#introBtn").click(function() {
                $('html, body').animate({
                    scrollTop: $intro.top
                }, 400)
            })
            var $mind = $('#mind').offset();
            $("#mindBtn").click(function() {
                $('html, body').animate({
                    scrollTop: $mind.top
                }, 400)
            })
            var $certificate = $('#certificate').offset();
            $("#certiBtn").click(function() {
                $('html, body').animate({
                    scrollTop: $certificate.top
                }, 400)
            })
            var $activity = $('#activity').offset();
            $("#actiBtn").click(function() {
                $('html, body').animate({
                    scrollTop: $activity.top
                }, 400)
            })

            $('#certificate img, #project img, #club img').hover(function() {
                    $(this).stop().css({
                        "box-shadow": "2px 4px 10px 4px coral",
                    });
                },
                function() {
                    $(this).stop().css({
                        "box-shadow": "none",
                    });
                })

            for (var i = 1; i <= 10; i++) {
                $(".con" + i.toString()).css({
                    width: "20%",
                    height: "100%",
                    backgroundColor: "white",
                })
            }

            var sc = [800, 1100, 700, 600, 500, 400, 900, 500, 1000, 700];
            for (var i = 0; i < sc.length; i++) {
                setTimeout(function(sc, i) {
                    $('.con' + (i + 1).toString()).stop().animate({
                        "transform": "scale(1.0,1.0)",
                        backgroundColor: "rgba(255, 255, 255, 0.0)",
                    }, sc[i]);
                }, sc[i], sc, i);
            }

        });
