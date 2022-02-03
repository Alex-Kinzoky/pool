$(document).ready(function(){
    $('.arrow-up-button').hide();
    $('.menu-block').hide()
    $('.card-help').hide()
    $('.catalog-podmenu').hide()
    $('#pool').hide()
    $('.drop-filter').hide()
    $('.product-about-info-podmenu').hide()
    $('#description').show()
    $('.delivery-podmenu').hide()
    $('#register-offer').show()
    $('.profile-podmenu').hide()
    $('#personal-data').show()
    $('.product-help').hide()
    $('#first-button').css({
        'background' : '#0044FF'
    })
    $(document).mouseup( function(e){ 
		var div = $( ".product-help" );
		if ( !div.is(e.target)  && div.has(e.target).length === 0 ) { 
			div.hide(); 
		}
        var div1 = $( ".menu-block" );
		if ( !div1.is(e.target)  && div1.has(e.target).length === 0 ) { 
			div1.hide(); 
		}
        var div2 = $( ".drop-filter" );
		if ( !div2.is(e.target)  && div2.has(e.target).length === 0 ) { 
			div2.hide(); 
		}
        var div3 = $( ".product-card" );
		if ( !div3.is(e.target)  && div3.has(e.target).length === 0 ) { 
			div3.hide(); 
		}
	});
    $('.width#first-button').click(function(){
        $('.product-help').hide()
    })
    $('.order ').click(function(){
        $('.product-help').show()
    })
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
    $('.return-profile').click(function(){
        $(location).attr('href','myprofile.html');
    })
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
    $('.catalog-menu-part').click(function(){
        if ($(this).text() == 'Как оформить заказ'){
            $('.delivery-podmenu').hide()
            $('#register-offer').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Условия оплаты'){
            $('.delivery-podmenu').hide()
            $('#condition').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Условия доставки'){
            $('.delivery-podmenu').hide()
            $('#delivery-condition').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Гарантия на товар'){
            $('.delivery-podmenu').hide()
            $('#guarantee').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Личные данные'){
            $('.profile-podmenu').hide()
            $('#personal-data').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Сменить пароль'){
            $('.profile-podmenu').hide()
            $('#change-password').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Текущие заказы'){
            $('.profile-podmenu').hide()
            $('#now-offers').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'История заказов'){
            $('.profile-podmenu').hide()
            $('#history-offers').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Корзина'){
            $('.profile-podmenu').hide()
            $('#profile-buscket').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Избранное'){
            $('.profile-podmenu').hide()
            $('#favourites').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == 'Сравнение'){
            $('.profile-podmenu').hide()
            $('#contrast').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $(this).css({
                'background' : '#0044FF'
            })
        }
    });
    $('.blue-link').click(function(){
        if ($(this).text() == '«Оплата».'){
            $('.delivery-podmenu').hide()
            $('#condition').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $('.delivery-menu').children().eq(1).find('.catalog-menu-part').css({
                'background' : '#0044FF'
            })
        }
        if ($(this).text() == '«Доставка».'){
            $('.delivery-podmenu').hide()
            $('#delivery-condition').show()
            $('.catalog-menu-part').css({
                'background' : '#101014'
            })
            $('.delivery-menu').children().eq(2).find('.catalog-menu-part').css({
                'background' : '#0044FF'
            })
        }
    })
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
        slider.addEventListener('mousemove', () => {
            console.log(`from ${sliders[0].value} to ${sliders[1].value}`);
        })
    });
    var start = (259/(sliders[0].max - sliders[0].min)) * ($('#start').val() - sliders[0].min)
    var end = (259/(sliders[1].max - sliders[1].min)) * ($('#end').val() - sliders[1].min)
    $(".range-line").css({
        'margin-left' : start,
        'width' : end-start
    })
    $(".slider").mousemove(function(){
        var start_i = (259/(sliders[0].max - sliders[0].min)) * $('#start').val() 
        var start = (259/(sliders[0].max - sliders[0].min)) * ($('#start').val() - sliders[0].min)
        var end_i = (259/(sliders[1].max - sliders[1].min)) * $('#end').val() 
        var end = (259/(sliders[1].max - sliders[1].min)) * ($('#end').val() - sliders[1].min)
        $('#start-i').attr('placeholder', 'От '+parseInt(start_i / (259/(sliders[0].max - sliders[0].min))))
        $('#end-i').attr('placeholder', 'До '+parseInt(end_i / (259/(sliders[1].max - sliders[1].min))))
        $(".range-line").css({
            'margin-left' : start,
            'width' : end-start
        })
    }) 
    $('#start-i').change(function(){
        var start = (259/(sliders[0].max - sliders[0].min)) * ($('#start-i').val() - sliders[0].min)
        $('#start').val($('#start-i').val())
        $(".range-line").css({
            'margin-left' : start,
            'width' : end-start
        })
    })
    $('#end-i').change(function(){
        var end = (259/(sliders[1].max - sliders[1].min)) * ($('#end-i').val() - sliders[1].min)
        $('#end').val($('#end-i').val())
        $(".range-line").css({
            'margin-left' : start,
            'width' : end-start
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