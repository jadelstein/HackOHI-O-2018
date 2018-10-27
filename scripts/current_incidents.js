function myMap() {
	var mapProp= {
    	center:new google.maps.LatLng(51.508742,-0.120850),
    	zoom:5,
	};

	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

	navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            //infoWindow.setPosition(pos);
            //infoWindow.setContent('Location found.');
            //infoWindow.open(map);
            map.setCenter(pos);
    })
}