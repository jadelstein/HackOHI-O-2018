function initMap() {
	// Display map and get reference to map
	var map = myMap();

	// Wait for click
	google.maps.event.addListener(map, "click", function (event) {
    	var latitude = event.latLng.lat();
    	var longitude = event.latLng.lng();
    	
    	// Add marker at location
    	var incidentMarker = new google.maps.Marker();
    	incidentMarker.setPosition(new google.maps.LatLng(latitude, longitude));
    	incidentMarker.setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png");
    	incidentMarker.setMap(map);
    	
    	// On click, remove prompt and display form
    	document.getElementById("prompt-location").remove();
    	document.getElementById("report-form").setAttribute("class", "enabled");

    	// Add new marker to database
    });
}
	


