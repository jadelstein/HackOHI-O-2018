
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
	loadIncidents(map);
	return map;
}

function loadIncidents(map) {
  var hazards = db.ref("hazards");
  hazards.orderByKey().on("child_added", function(snapshot) {
    var newMarker = new google.maps.Marker();
	newMarker.setPosition(new google.maps.LatLng(snapshot.val().loc.lat, snapshot.val().loc.lon));
	// Set color based on category
	if (snapshot.val().category == "safety") {
		newMarker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
	} else if (snapshot.val().category == "trail-closure") {
		newMarker.setIcon("http://maps.google.com/mapfiles/ms/icons/purple-dot.png");
	} else {
		newMarker.setIcon("http://maps.google.com/mapfiles/ms/icons/orange-dot.png");
	}
	
	newMarker.setClickable(true);
	var infoWindow = new google.maps.InfoWindow();
	google.maps.event.addListener(newMarker, "click", function() {
			var label = {text:snapshot.val().description, fontSize: "0pt"};
			newMarker.setLabel(label);
			infoWindow.close(map, newMarker);
			infoWindow.setContent(snapshot.val().description);
			infoWindow.setPosition(new google.maps.LatLng(snapshot.val().loc.lat, snapshot.val().loc.lon));
			infoWindow.open(map, newMarker);

	});
	newMarker.setMap(map);
  });
}

