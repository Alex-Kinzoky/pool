$(document).ready(function(){
    $('.arrow-up-button').hide();
    $('.menu-block').hide()
    $('.card-help').hide()
    $('.catalog-podmenu').hide()
    $('#pool').hide()
    $('.drop-filter').hide()
    $('.product-about-info-podmenu').hide()
    $('#description').show()
	$('.menu-button').click(function(){
		$('.menu-block').slideToggle(300, function(){
            $(this).show();
			//$(this).addClass("show")
            //$(this).removeClass("hide")					
		});
		return false;
	});
    $('.menu-block-close').click(function(){
		$('.menu-block').slideToggle(300, function(){
            $(this).hide()
			//$(this).removeClass("show")	
            //$(this).addClass("hide")					
		});
		return false;
	});
    $(function(){
        if ( $(window).width() > 992 ) {
            $(window).scroll(function(){
                if($(window).scrollTop() > 500) {
                    $('.arrow-up-button').show();
                } else {
                    $('.arrow-up-button').hide();
                }
            });
        } else{
            $('.arrow-up-button').hide();
        }
        if ( $(window).width() < 640 ) {
            $('.catalog-menu').hide()
            ($('#button-catalog').click(function(){
                if ($('.catalog-menu').is(':visible')){
                    $('.catalog-menu').hide()
                } else {
                    $('.catalog-menu').show()
                }
            }));
        } else {
            $('.catalog-menu').show()
        }
    });
     
    $('.arrow-up-button').click(function(){
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
    $('.help-button').click(function(){
        $('.card-help').show();
        $('.help-form').hide();
        return false;
    });
    $('.return-site').click(function(){
        $(location).attr('href','index.html');
    })
    $('.catalog-menu-part').click(function(){
        if ($(this).text() == 'Бассейны'){
            $('.catalog-podmenu-all').hide()
            $('.catalog-podmenu').show()
            $('.pool-c').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Химия для бассейнов'){
            $('.catalog-podmenu-all').hide()
            $('.catalog-podmenu').show()
            $('.chemistry').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Оборудование'){
            $('.catalog-podmenu-all').hide()
            $('.catalog-podmenu').show()
            $('.equipment').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Покрытия для бассейнов'){
            $('.catalog-podmenu-all').hide()
            $('.catalog-podmenu').show()
            $('.coverage').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
    });
    $('.color').click(function(){
        if ($(this).attr('id') == 'white') {
            $('.main-image').attr('src','images/catalog-pool.png')
        };
        if ($(this).attr('id') == 'blue'){
            $('.main-image').attr('src','images/pool-blue.png')
        };
        if ($(this).attr('id') == 'pink'){
            $('.main-image').attr('src','images/pool-pink.png')
        };
    });
    $('.product-about-title').click(function(){
        $('.product-about-title').removeClass('active');
        $('.product-about-info-podmenu').hide();
        $(this).addClass('active');
        if ($(this).is(':contains("Описание")') ){
            $('#description').show()
        };
        if ($(this).is(':contains("Все характеристики")')){
            $('#specification').show()
        };
        if ($(this).is(':contains("Оплата и доставка")')){
            $('#delivery').show()
        };
        return false;
    });
    $('.menu-left-part-text').hover(function(){
        if ($(this).is(':contains("Бассейны")')) {
            $('#pool').show()
        }
    }, function(){
        setTimeout(function(){
            if ($('#pool').is(':hover')){
                $('#pool').show()
            } else {
                $('#pool').hide()
            }
        }, 200)
    });
    $('#pool').mouseleave(function(){
        $('#pool').hide()
    })
    const sliders = document.querySelectorAll('input[type="range"]');

    sliders[0].addEventListener('input', (e) => {
        if(+sliders[0].value > +sliders[1].value){
            sliders[1].value = +sliders[0].value;
        }
    });

    sliders[1].addEventListener('input', (e) => {
        if(+sliders[1].value < +sliders[0].value){
            sliders[0].value = +sliders[1].value;
        }
    });

    sliders.forEach((slider) => {
        slider.addEventListener('change', () => {
            console.log(`from ${sliders[0].value} to ${sliders[1].value}`);
        })
    });
    var start = (259/13000) * $('#start').val()
    var end = (259/13000) * $('#end').val()
    $(".range-line").css({
        'margin-left' : start+20,
        'width' : end-start-35
    })
    $(".input-slider").change(function(){
        var start = (259/13000) * $('#start').val()
        var end = (259/13000) * $('#end').val()
        $(".range-line").css({
            'margin-left' : start+20,
            'width' : end-start-35
        })
    }) 
    $('#filter').click(function(){
        if ($('.drop-filter').is(':visible')){
            $('.drop-filter').hide()
        } else{
            $('.drop-filter').show()
        }
    });
    
});