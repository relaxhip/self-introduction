$(function(){
	var i = 0
	function blinker(){
		if(i == 0){
			$(".blinker").text("No pain, No gain!").fadeIn(1000).delay(2000).fadeOut(1000);
			i += 1;
		}else if(i == 1){
			$(".blinker").text("If at first you don't succeed, try, try again!").fadeIn(1000).delay(2000).fadeOut(1000);
			i += 1
		}else{
			$(".blinker").text("Practice makes perfect.").fadeIn(1000).delay(2000).fadeOut(1000);
			i -= 2;
		}
	}
	setInterval(blinker,4100);

	$(".slider").slick({
				autoplay: true,
				slidesToShow: 1,
				dots: false,
				arrows: false,
	});



	//-----------CLICK EVENT------------
	$(".arrow-down").click(function(){
		$("html,body").animate({
			scrollTop:$(".profile").offset().top
		},1000);
	});
	$("nav").find("li").find("a").click(function(){
		let target = $(this).data("target");
		let _offset = $("."+target).offset().top;
		$("html,body").animate({
			scrollTop:_offset
		},1000);
	});

	$(".home").click(function(){
		$("html,body").animate({
			scrollTop:0
		},1000);

	});


	// ----------SCROLL EVENT------------- 
	// $(window).scroll(function(){
	// 	let ph = $(".profile").offset().top;
	// 	let h = $(window).scrollTop();
	// 	if(h >= ph){	
	// 	$("nav").addClass("fixed");
	// 	}else{
	// 	$("nav").removeClass("fixed");
	// 	$('nav').find('li').find('a').removeClass('here');
	// 	}
	// });
	$(window).scroll(function(){
		if($(window).scrollTop() >= 300){
			$('nav').find('li').find('a').removeClass('here');
			$("nav").show();
			$("#profile").addClass('here');
			$(".slider").css('margin-left','0');
			$(".profile-right").fadeIn(1000);
		}else{
			$(".slider").css('margin-left','-45%')
			$(".profile-right").fadeOut(1000);
			$("nav").hide();
			$("nav").find("li").find("a").removeClass("here");
		}
	});	
	$(window).scroll(function(){
		if($(window).scrollTop() >= $(".cv").offset().top){
			$('nav').find('li').find('a').removeClass('here');
			$("#cv").addClass('here');
			$(".exp").slideDown(1500);
		}else{
			$(".exp").slideUp(1000);
		}
	});	
	$(window).scroll(function(){
		if($(window).scrollTop() >= $(".skill").offset().top){
			$('nav').find('li').find('a').removeClass('here');
			$("#skill").addClass('here');
			$("#bar-1").delay(1500).css("width","380px");
			$("#bar-2").delay(1500).css("width","420px");
			$("#bar-3").delay(1500).css("width","240px");
			$("#bar-4").delay(1500).css("width","460px");
			$("#bar-5").delay(1500).css("width","160px");
			$("#bar-6").delay(1500).css("width","400px");
		}else{
			$("#bar-1").delay(1500).css("width","0");
			$("#bar-2").delay(1500).css("width","0");
			$("#bar-3").delay(1500).css("width","0");
			$("#bar-4").delay(1500).css("width","0");
			$("#bar-5").delay(1500).css("width","0");
			$("#bar-6").delay(1500).css("width","0");
		}
	});
	$(window).scroll(function(){
		if($(window).scrollTop() >= $(".contact").offset().top){
			$('nav').find('li').find('a').removeClass('here');
			$("#contact").addClass('here');	
		}
	});
});