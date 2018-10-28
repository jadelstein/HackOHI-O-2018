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

    	// Add new marker to database on submit
    	var submit = document.getElementById("submit");
    	submit.addEventListener("click", function() {
    		var description = document.getElementById("descrip").value;
    		var date = document.getElementById("date").value;
            if (date == "") {
                date = new Date();
                date.setHours(0,0,0,0);
            }
    		var time = document.getElementById("time").value;
    		var location = {lat: latitude, lon: longitude};
    		var ddl = document.getElementById("category");
    		var category = ddl.options[ddl.selectedIndex].value;
            //grabs the user id i think this is a better way of doing this lol
            var uid = firebase.auth().currentUser.displayName;
            //incase somone reprts when they are not logged in we want to have something
            if(uid == null){
                uid = "-1"
            }
    		addIncident(location, category, description, date, time, uid);
    	});
    });
}
	
function loader() {
    var myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


