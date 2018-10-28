function initMap() {
	// Display map and get reference to map
	var map = myMap();

	// Wait for click
	var incidentMarker = new google.maps.Marker();
	google.maps.event.addListener(map, "click", function (event) {
    	var latitude = event.latLng.lat();
    	var longitude = event.latLng.lng();
    	
    	// Add marker at location
    	incidentMarker.setMap(null);
    	incidentMarker.setPosition(new google.maps.LatLng(latitude, longitude));
    	incidentMarker.setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png");
    	incidentMarker.setMap(map);
    	
    	// On click, remove prompt and display form
    	document.getElementById("prompt-location").remove();
    	document.getElementById("report-form").setAttribute("class", "enabled");

    	// Add new marker to database
    	var element = document.getElementById("submit");
    	element.addEventListener("click", function() {
    		var description = document.getElementById("descrip").value;
    		var location = {lat: latitude, lon: longitude};
    		var ddl = document.getElementById("category");
    		var category = ddl.options[ddl.selectedIndex].value;
    		addIncident(location, category, description);
    	});
    });
}
	


