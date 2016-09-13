document.getElementById("errmessage").innerHTML = "???";
/*
var map = new AMap.Map('map-container', {
    resizeEnable: true,
    zoom:11,
    center: [116.397428, 39.90923]

});
*/

var options = {
	enableHighAccuracy: true,
	timeout: 200000,
	maximumAge: 30000
};
if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(displayPosition, handleError, options);
}
else {
	document.getElementById("errmessage").innerHTML = "shit";
}
function displayPosition(pos) {
  var map = new AMap.Map('map-container', {
      resizeEnable: true,
      zoom:11,
      center: [pos.coords.longitude, pos.coords.latitude]

  });
}
document.getElementById("timestamp").innerHTML = pos.timestamp;
function handleError(err) {
	document.getElementById("errcode").innerHTML = err.code;
	document.getElementById("errmessage").innerHTML = err.message;
}
