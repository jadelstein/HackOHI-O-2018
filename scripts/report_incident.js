
// Initializes map to current location and returns reference to the map
// Creates new incident from click location on map and user entered info on form
function myMap() {
	// Array of markers
	var markersInMap = [];

	var mapProp= {
		// Default location for map is England is no location found
    	center:new google.maps.LatLng(51.508742,-0.120850),
    	zoom:15,
	};

	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	var marker = new google.maps.Marker();
	// Set location on map to current location
	navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            // Set map and marker
            map.setCenter(pos);
            marker.setPosition(map.getCenter());
    })

	// To add the marker to the map, call setMap();
	marker.setMap(map);

	//Add listener for click
	var newIncidentLoc = google.maps.event.addListener(map, "click", function (event) {
    	var latitude = event.latLng.lat();
    	var longitude = event.latLng.lng();
    	return new google.maps.LatLng({lat: latitude, lng: longitude});
	});

}

