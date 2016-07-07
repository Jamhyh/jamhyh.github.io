// JavaScript Document
(function () {
function Polygon(x, y, sides, size, color) {
	this.x = x;
	this.y = y;
	this.sides = sides;
	this.size = size;
	this.color = color;
}

var polygons = [];

function creatPolygon() {
	var quantity = 20 + Math.round(Math.random()*10);
	for(var i = 0; i < quantity; i++) {
		var x = Math.random()*width;
		var y = Math.random()*height;
		var sides = 3 + Math.round(Math.random()*1);
		var size = 1 + Math.random()*width*0.06;
		var color = 1 + Math.round(Math.random()*1);
		var polygon = new Polygon(x, y, sides, size, color);
		polygons.push(polygon);
	}
}

function drawPolygon(animStep) {
	context.clearRect(0, 0, width, height);
	for(var i = 0; i < polygons.length; i++) {
		if(polygons[i].color == 1) context.strokeStyle = "rgba(255,53,216,0.9)";
		if(polygons[i].color == 2) context.strokeStyle = "rgba(35,255,190,0.9)";
		context.lineWidth = 1;
		if(animStep < polygons[i].size) var currentsize = animStep;
		else var currentsize = polygons[i].size;
			
		if(polygons[i].sides == 3) {
			var rsinA = currentsize*Math.sin(Math.PI/4);
			var rcosA = currentsize*Math.cos(Math.PI/4);
			context.beginPath();
			context.moveTo(polygons[i].x, polygons[i].y - currentsize);
			context.lineTo(polygons[i].x + Math.cos(Math.PI/6)*currentsize, polygons[i].y + currentsize/2);
			context.lineTo(polygons[i].x - Math.cos(Math.PI/6)*currentsize, polygons[i].y + currentsize/2);
			//context.moveTo(polygons[i].x - rsinA, polygons[i].y + rcosA);
			//context.lineTo(polygons[i].x - Math.cos(Math.PI/6)*rcosA + rsinA/2, polygons[i].y - rcosA/2 + Math.cos(Math.PI/6)*rsinA);
			//context.lineTo(polygons[i].x + Math.cos(Math.PI/6)*rcosA + rsinA/2, polygons[i].y - rcosA/2 - Math.cos(Math.PI/6)*rsinA);
			//context.lineTo(polygons[i].x, polygons[i].y);
			context.closePath();
		}
		if(polygons[i].sides == 4) {
			var lenofside = Math.sin(Math.PI/4)*currentsize;
			context.beginPath();
			context.moveTo(polygons[i].x - lenofside, polygons[i].y - lenofside);
			context.lineTo(polygons[i].x + lenofside, polygons[i].y - lenofside);
			context.lineTo(polygons[i].x + lenofside, polygons[i].y + lenofside);
			context.lineTo(polygons[i].x - lenofside, polygons[i].y + lenofside);
			context.closePath();	
		}		
		context.stroke();
	}
	/*
	context.fillText(dPr, 10, 10);
	context.fillText(width, 10, 30);
	context.fillText(height, 100, 30);
	context.fillText(canvas.width, 10, 50);
	context.fillText(canvas.height, 100, 50);
	context.fillText(context.width, width-100, 10);
	context.fillText(context.height, width-100, height-10);
	*/
}

function animLoo() {
	drawPolygon(animStep);
	if(animStep > width*0.005) speed++;
	animStep++;
	if(animStep < width*0.06){
	setTimeout(function(){animLoo()}, speed);
	}	
}

function loadAnim() {
	creatPolygon();
	animLoo();
}

function resize() {
	headWidth = header.offsetWidth;
	headHeight = header.offsetHeight;
	width = headWidth*dPr;
	height = headHeight*dPr;
	canvas.width = width;
	canvas.height = height;
	polygons = [];
	animStep = 0;
	speed = 0;
	loadAnim();
}

var dPr = window.devicePixelRatio;
var header = document.getElementById("intro");
var headWidth = header.offsetWidth;
var headHeight = header.offsetHeight;
var canvas = document.getElementById("main-canv");
var context = canvas.getContext("2d");
//var wBSPr = context.webkitBackingStorePixelRatio;
var width = headWidth*dPr;
var height = headHeight*dPr;
canvas.width = width;
canvas.height = height;
var animStep = 0;
var speed = 0;
window.addEventListener("resize", resize);	
window.addEventListener("load", setTimeout(function(){loadAnim()}, 1000));	
})();