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
            // Handle missing date
    		var date = document.getElementById("date").value;
            if (date == "") {
                var d = new Date();
                var year = d.getFullYear();
                var month = d.getMonth();
                var monthString = month.toString();
                if (month < 10) {
                    monthString = "0" + month.toString();
                }
                var day = d.getDay();
                var dayString = day.toString();
                if (day < 10) {
                    dayString = "0" + day.toString();
                }
                
                date = year.toString() + "-" + monthString + "-" + dayString;
            }
            
            // Handle missing time
    		var time = document.getElementById("time").value;
            if (time == "") {
                var d = new Date();
                var hours = d.getHours();
                var hoursString = hours.toString();
                if (hours < 10) {
                    hoursString = "0" + hours.toString();
                }
                var minutes = d.getMinutes();
                var minutesString = minutes.toString();
                if (minutes < 10) {
                    minutesString = "0" + minutes.toString();
                }

                time = hoursString + ":" + minutesString;
            }

    		var location = {lat: latitude, lon: longitude};
    		var ddl = document.getElementById("category");
    		var category = ddl.options[ddl.selectedIndex].value;
            //grabs the user id i think this is a better way of doing this lol
            var user  = firebase.auth().currentUser;
            var uname = "guest";
            //incase somone reprts when they are not logged in we want to have something
            if(user != null){
                uname = user.displayName
            }
    		addIncident(location, category, description, date, time, uname);
    	});
    });
}
	
function loader() {
    var myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


