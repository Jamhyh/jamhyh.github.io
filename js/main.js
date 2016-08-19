// JavaScript Document

//jQuery
$(function(){
	//pace loader controller
	$(document).ready(function() {		
		//Required for loading
		$.ajax();							
		});
/*	
	//Loading	
	$(document).ajaxStart(function(){
		$("#loader").show();
		$("#loader-logo").show();
		});
*/
	//Complete
	$(document).ajaxStop(function(){
		$("#loader").delay(1000).fadeOut(500);
		});
		
	//back-top animation
	$(".back-top").click(function() {
		$('html, body').animate( {
			scrollTop: 0
			}, 600);
		});
	//menu animation
	$("#nav-link ul").hide();
	$("#nav").mouseenter(function() {
		$("#nav-link ul").fadeIn();
		});
	$("#nav").mouseleave(function() {
		$("#nav-link ul").fadeOut();
		});
	$(".menu-button, .close-menu").click(function() {
		$("#nav-bottom ul").fadeToggle();
		});
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
});
