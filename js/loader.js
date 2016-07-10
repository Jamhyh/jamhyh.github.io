// JavaScript Document

//pace loader controller
$(document).ready(function() {		
	//Required for loading
	$.ajax();							
	});
//Loading	
$(document).ajaxStart(function(){
	$("#loader").show();
	$("#loader-logo").show();
	});
//Complete
$(document).ajaxStop(function(){
	$("#loader").delay(1000).fadeOut(500);
	});

