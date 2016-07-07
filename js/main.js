// JavaScript Document
$(function(){
/*
	    $(".menu-link").click(function(){
	        $("#menu").toggleClass("active");
	        $(".outer-wrap").toggleClass("active");
	    });

	    $(".back-top").click(function() {
			$('html, body').animate( {
				scrollTop: $("body").offset().top
				}, 600);
		});
*/
		$(".back-top").click(function() {
			$('html, body').animate( {
				scrollTop: 0
				}, 600);
		});
		$(".menu-button, .close-menu").click(function() {
			$("#nav-bottom ul").fadeToggle();
		});
		
		//---------
		$("#photo-no-1 img").click(function() {
			$("#display-box img").attr("src","image/DSC_1506.jpg");
			$("#display-box p").html($("#photo-no-1 .info-show").html());
		});
		$("#photo-no-2 img").click(function() {
			$("#display-box img").attr("src","image/DSC_1507.jpg");
			$("#display-box p").html($("#photo-no-2 .info-show").html());
		});
		$("#photo-no-3 img").click(function() {
			$("#display-box img").attr("src","image/DSC_2053.jpg");
			$("#display-box p").html($("#photo-no-3 .info-show").html());
		});
		$("#photo-no-4 img").click(function() {
			$("#display-box img").attr("src","image/DSC_4234.jpg");
			$("#display-box p").html($("#photo-no-4 .info-show").html());
		});
		$("#photo-no-5 img").click(function() {
			$("#display-box img").attr("src","image/DSC1178.jpg");
			$("#display-box p").html($("#photo-no-5 .info-show").html());
		});
		$("#photo-no-6 img").click(function() {
			$("#display-box img").attr("src","image/DSC1342.jpg");
			$("#display-box p").html($("#photo-no-6 .info-show").html());
		});
		$("#photo-no-7 img").click(function() {
			$("#display-box img").attr("src","image/DSC1605.jpg");
			$("#display-box p").html($("#photo-no-7 .info-show").html());
		});
		$("#photo-no-8 img").click(function() {
			$("#display-box img").attr("src","image/DSC1661.jpg");
			$("#display-box p").html($("#photo-no-8 .info-show").html());
		});
		$("#photo-no-9 img").click(function() {
			$("#display-box img").attr("src","image/DSC3364.jpg");
			$("#display-box p").html($("#photo-no-9 .info-show").html());
		});
		$("#photo-no-10 img").click(function() {
			$("#display-box img").attr("src","image/DSC3797.jpg");
			$("#display-box p").html($("#photo-no-10 .info-show").html());
		});
		$("#photo-no-11 img").click(function() {
			$("#display-box img").attr("src","image/DSC4507.jpg");
			$("#display-box p").html($("#photo-no-11 .info-show").html());
		});
		$("#photo-no-12 img").click(function() {
			$("#display-box img").attr("src","image/DSC5293.jpg");
			$("#display-box p").html($("#photo-no-12 .info-show").html());
		});
		$("#photo-no-13 img").click(function() {
			$("#display-box img").attr("src","image/DSC5372.jpg");
			$("#display-box p").html($("#photo-no-13 .info-show").html());
		});
		$("#photo-no-14 img").click(function() {
			$("#display-box img").attr("src","image/DSC6966.jpg");
			$("#display-box p").html($("#photo-no-14 .info-show").html());
		});
		$("#photo-no-15 img").click(function() {
			$("#display-box img").attr("src","image/DSC7826.jpg");
			$("#display-box p").html($("#photo-no-15 .info-show").html());
		});
		$("#photo-no-16 img").click(function() {
			$("#display-box img").attr("src","image/DSC7997.jpg");
			$("#display-box p").html($("#photo-no-16 .info-show").html());
		});
		$("#photo-no-17 img").click(function() {
			$("#display-box img").attr("src","image/DSC8459.jpg");
			$("#display-box p").html($("#photo-no-17 .info-show").html());
		});
		$("#photo-no-18 img").click(function() {
			$("#display-box img").attr("src","image/DSC8484.jpg");
			$("#display-box p").html($("#photo-no-18 .info-show").html());
		});
		//-------------
		/*
		$("#load-button-1").click(function() {
			$("#load-button-1").hide();
			$("#display-box-4 img").attr("src","image/DSC_4234.jpg");
			$("#display-box-4 p").html($("#photo-no-4 .info-show").html());
			$("#display-box-4").fadeIn();
			$("#display-box-5 img").attr("src","image/DSC1178.jpg");
			$("#display-box-5 p").html($("#photo-no-5 .info-show").html());
			$("#display-box-5").fadeIn();
			$("#display-box-6 img").attr("src","image/DSC1342.jpg");
			$("#display-box-6 p").html($("#photo-no-6 .info-show").html());
			$("#display-box-6").fadeIn();
			$("#load-button-2").fadeIn();
		});
		$("#load-button-2").click(function() {
			$("#load-button-2").hide();
			$("#display-box-7 img").attr("src","image/DSC1605.jpg");
			$("#display-box-7 p").html($("#photo-no-7 .info-show").html());
			$("#display-box-7").fadeIn();
			$("#display-box-8 img").attr("src","image/DSC1661.jpg");
			$("#display-box-8 p").html($("#photo-no-8 .info-show").html());
			$("#display-box-8").fadeIn();
			$("#display-box-9 img").attr("src","image/DSC3364.jpg");
			$("#display-box-9 p").html($("#photo-no-9 .info-show").html());
			$("#display-box-9").fadeIn();
			$("#load-button-3").fadeIn();
		});
		$("#load-button-3").click(function() {
			$("#load-button-3").hide();
			$("#display-box-10 img").attr("src","image/DSC3797.jpg");
			$("#display-box-10 p").html($("#photo-no-10 .info-show").html());
			$("#display-box-10").fadeIn();
			$("#display-box-11 img").attr("src","image/DSC4507.jpg");
			$("#display-box-11 p").html($("#photo-no-11 .info-show").html());
			$("#display-box-11").fadeIn();
			$("#display-box-12 img").attr("src","image/DSC5293.jpg");
			$("#display-box-12 p").html($("#photo-no-12 .info-show").html());
			$("#display-box-12").fadeIn();
			$("#load-button-4").fadeIn();
		});
		$("#load-button-4").click(function() {
			$("#load-button-4").hide();
			$("#display-box-13 img").attr("src","image/DSC5372.jpg");
			$("#display-box-13 p").html($("#photo-no-13 .info-show").html());
			$("#display-box-13").fadeIn();
			$("#display-box-14 img").attr("src","image/DSC6966.jpg");
			$("#display-box-14 p").html($("#photo-no-14 .info-show").html());
			$("#display-box-14").fadeIn();
			$("#display-box-15 img").attr("src","image/DSC7826.jpg");
			$("#display-box-15 p").html($("#photo-no-15 .info-show").html());
			$("#display-box-15").fadeIn();
			$("#load-button-5").fadeIn();
		});
		$("#load-button-5").click(function() {
			$("#load-button-5").hide();
			$("#display-box-16 img").attr("src","image/DSC7997.jpg");
			$("#display-box-16 p").html($("#photo-no-16 .info-show").html());
			$("#display-box-16").fadeIn();
			$("#display-box-17 img").attr("src","image/DSC8459.jpg");
			$("#display-box-17 p").html($("#photo-no-17 .info-show").html());
			$("#display-box-17").fadeIn();
			$("#display-box-18 img").attr("src","image/DSC8484.jpg");
			$("#display-box-18 p").html($("#photo-no-18 .info-show").html());
			$("#display-box-18").fadeIn();
		});
		//---------------
		*/

});
