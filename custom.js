(function($){var $window=$(window),$carousel=$('.carousel'),$dropdown=$('.nav .dropdown-toggle'),$header=$('#header'),$projectimg=$('.project-images'),$our_team=$('.our_team_member'),$our_member=$('.member-widget-view'),$property_Grid=$('.property_slide'),$client=$('.testimonials-carousel'),$srv_slide=$('.service-slider'),$feedback_side=$('.feedback_small'),$projectnav=$('.project-thumbnail'),$brand=$('.partner-slider'),$feedback=$('.testimonial-part2'),$contact=$('#contact-form')
$landdrop=$('.lan-drop')
function handlePreloader(){if($('.loading-page').length){$('.loading-page').delay(500).fadeOut(500);$('body').removeClass('page-load');}}$('.carousel').carousel({interval:6000,pause:"hover"});$('#bs-example-navbar-collapse-1').each(function(){$dropdown.on('click',function(){if($window.width()<992){if($(this).parent('.dropdown').hasClass('visible')){$(this).parent('.dropdown').children('.dropdown-menu').first().stop(true,true).slideUp(300);$(this).parent('.dropdown').removeClass('visible');}else{$(this).parent('.dropdown').children('.dropdown-menu').stop(true,true).slideUp(300);$(this).parent('.dropdown').children('.dropdown-menu').stop(true,true).slideDown(300);$(this).parent('.dropdown').addClass('visible');}}});$window.on('resize',function(){if($window.width()>991){$('.dropdown').find('.dropdown-menu').removeAttr('style');}});});$('.top_right').each(function(){$landdrop.on('show.bs.lan-drop',function(e){$(this).find('.dropdown-menu').first().stop(true,true).slideDown(300);});$landdrop.on('hide.bs.lan-drop',function(e){$(this).find('.dropdown-menu').first().stop(true,true).slideUp(200);});});function headerStyle(){if($header.length){var windowpos=$window.scrollTop();if(windowpos>=180){$header.addClass('fixed-header');}else{$header.removeClass('fixed-header');}}}$projectimg.each(function(){$(this).on('click','.item a',function(event){event.preventDefault();$(this).parents('.project-images').find(".item a").removeClass('onlive');$(this).addClass('onlive');$(this).parents('.project-images').find(".slide-project img").attr("src",$(this).attr("href"));});});if($('.main-menu li.dropdown ul').length){$('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');$('.main-menu li.dropdown .dropdown-btn').on('click',function(){$(this).prev('ul').slideToggle(500);});$('.navigation li.dropdown > a').on('click',function(e){e.preventDefault();});}if($('.revolution-slider .tp-banner').length){jQuery('.revolution-slider .tp-banner').show().revolution({delay:10000,startwidth:1200,startheight:720,hideThumbs:600,thumbWidth:80,thumbHeight:50,thumbAmount:5,navigationType:"bullet",navigationArrows:"0",navigationStyle:"preview4",touchenabled:"on",onHoverStop:"off",swipe_velocity:0.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:false,parallax:"mouse",parallaxBgFreeze:"on",parallaxLevels:[7,4,3,2,5,4,3,2,1,0],keyboardNavigation:"off",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"on",fullScreen:"off",spinner:"spinner4",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",forceFullWidth:"on",hideThumbsOnMobile:"on",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"on",hideArrowsOnMobile:"on",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,videoJsPath:"",fullScreenOffsetContainer:""});}if($our_team.length){$our_team.owlCarousel({loop:true,margin:30,nav:true,autoplayHoverPause:false,smartSpeed:300,autoplay:false,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:2},1024:{items:3},1200:{items:4}}});}if($our_member.length){$our_member.owlCarousel({loop:true,margin:30,nav:true,autoplayHoverPause:false,smartSpeed:300,autoplay:false,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:2},1024:{items:1},1200:{items:1}}});}if($property_Grid.length){$property_Grid.owlCarousel({loop:true,margin:30,nav:true,autoplayHoverPause:false,smartSpeed:300,autoplay:false,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:2},1024:{items:3},1200:{items:3}}});}if($client.length){$client.owlCarousel({loop:true,margin:30,nav:true,autoplayHoverPause:false,autoplay:true,smartSpeed:700,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:1},760:{items:1},1024:{items:1},1200:{items:1}}});}if($feedback.length){$feedback.owlCarousel({loop:true,margin:30,nav:true,autoplayHoverPause:false,autoplay:true,smartSpeed:700,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:1},760:{items:2},1024:{items:2},1200:{items:2}}});}if($feedback_side.length){$feedback_side.owlCarousel({loop:true,margin:30,nav:true,autoplayHoverPause:true,autoplay:true,smartSpeed:700,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:1},760:{items:1},1024:{items:1},1200:{items:1}}});}if($brand.length){$brand.owlCarousel({loop:true,margin:30,nav:true,dots:false,smartSpeed:500,autoplay:4000,responsive:{0:{items:1},480:{items:2},600:{items:3},800:{items:4},1200:{items:4}}});}if($('.according_area').length){$('.according_title').on('click',function(){if($(this).hasClass('active')){$(this).addClass('active');}else{$('.according_title').removeClass('active');$('.according_details').slideUp(300);$(this).addClass('active');$(this).next('.according_details').slideDown(300);}});}function factCounter(){if($('.fact-counter').length){$('.fact-counter .achievement.animated').each(function(){var $t=$(this),n=$t.find(".counting").attr("data-stop"),r=parseInt($t.find(".counting").attr("data-speed"),10);if(!$t.hasClass("counted")){$t.addClass("counted");$({countNum:$t.find(".count-text").text()}).animate({countNum:n},{duration:r,easing:"linear",step:function(){$t.find(".counting").text(Math.floor(this.countNum));},complete:function(){$t.find(".counting").text(this.countNum);}});}var size=$(this).children('.progress-bar').attr('aria-valuenow');$(this).children('.progress-bar').css('width',size+'%');});}}if($('.photo_gallery a').length){$('.photo_gallery a').fancybox({openEffect:'elastic',closeEffect:'elastic',helpers:{media:{}}});}function enableMasonry(){if($('.sortable-masonry').length){var winDow=$(window);var $container=$('.sortable-masonry .items-container');var $filter=$('.sortable-masonry .filter-btns');$container.isotope({filter:'*',masonry:{columnWidth:1},animationOptions:{duration:1000,easing:'linear'}});$filter.find('li').on('click',function(){var selector=$(this).attr('data-filter');try{$container.isotope({filter:selector,animationOptions:{duration:1000,easing:'linear',queue:false}});}catch(err){}return false;});winDow.bind('resize',function(){var selector=$filter.find('li.active').attr('data-filter');$container.isotope({filter:selector,animationOptions:{duration:1000,easing:'linear',queue:false}});});var filterItemA=$('.sortable-masonry .filter-btns li');filterItemA.on('click',function(){var $this=$(this);if(!$this.hasClass('active')){filterItemA.removeClass('active');$this.addClass('active');}});}}enableMasonry();if($('.filter-list').length){$('.filter-list').mixItUp({});}if($('.datepicker').length){$(".datepicker").datepicker();}if($('.scroll-btn').length){$(".scroll-btn").on('click',function(e){e.preventDefault();var HeaderHeight=$('.header-lower').height();var target=$(this).attr('data-target');$('html, body').animate({scrollTop:$(target).offset().top},1000);});}var $srcicon=$('.hvr-src a'),$srcfield=$('#search');$srcicon.on('click',function(event){event.preventDefault();$srcfield.addClass('visible');event.stopPropagation();});$('.src-close').on('click',function(){$srcfield.removeClass('visible');});$srcfield.on('click',function(event){event.stopPropagation();});$window.on('click',function(e){$srcfield.removeClass('visible');});if($contact.length){$contact.validate({rules:{firstname:{required:true},lastname:{required:true},email:{required:true,email:true},subject:{required:true},message:{required:true}},messages:{firstname:"Please enter your First Name",lastname:"Please enter your Last Name",email:"Please enter valid Email",subject:"Please enter your Subject",message:"Please write your Message"},submitHandler:function(form){$('#send').attr({'disabled':'true','value':'Sending...'});$.ajax({type:"POST",url:"email.php",data:$(form).serialize(),success:function(){$('#send').removeAttr('disabled').attr('value','Send');$("#success").slideDown("slow");setTimeout(function(){$("#success").slideUp("slow");},5000);form.reset();},error:function(){$('#send').removeAttr('disabled').attr('value','Send');$("#error").slideDown("slow");setTimeout(function(){$("#error").slideUp("slow");},5000);}});return false;}});}if($('.wow').length){var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:true,live:true});wow.init();}function jumptotop(){var $scrollsize=$window.scrollTop();if($scrollsize>300){$('.scroll-to-top').fadeIn(1000);}else{$('.scroll-to-top').fadeOut(1000);}}$window.on('scroll',function(){jumptotop();headerStyle();factCounter();});$window.on('load',function(){handlePreloader();enableMasonry();});jQuery(function(){jQuery("a.video-popup").YouTubePopUp();});$("#filter_price").slider({from:1000,to:100000,step:500,smooth:true,round:0,dimension:"$",skin:"plastic"});$window.on('resize',function(){setMapHeight();});function setMapHeight(){var $body=$('body');if($body.hasClass('full-page-map')){$('#map').height($window.height()-$('header').height());}}setMapHeight();$('.form-up-btn').each(function(){$(this).on('click',function(){$('#find-location').toggleClass('open');});});$('.color-panel').each(function(){$('.on-panel').on('click',function(){$('.color-panel').toggleClass('open');});$('.color-box li').on('click',function(){$('.color-box li').removeClass('active');$(this).addClass('active');var path=$(this).data('path');var logo1=$(this).data('image');var logo2=$(this).data('target');$('#color-change').attr('href',path);$('.nav-logo').attr('src',logo1);$('.logo-bottom').attr('src',logo2);});});})(window.jQuery);