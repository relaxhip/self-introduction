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
});