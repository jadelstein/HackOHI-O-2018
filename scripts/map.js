
// Initializes map to current location and returns reference to the map
function myMap() {
	var mapProp= {
		// Default location for map is Google HQ if no location found
    	center:new google.maps.LatLng(37.419857, -122.078827),
    	zoom:16,

	};

	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'))
	//TO DO: Add marker identifier for each type of incident
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

	// Load all incidents thus far
	// TODO
	


	return map;
}
