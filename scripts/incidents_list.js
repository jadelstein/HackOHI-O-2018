function populateTable(tableBody) {
	var incidents = db.ref("hazards");
	// Order incidents by date
	incidents.orderByChild("date").on("child_added", function(snapshot) {
  		// Create table row consisting of database data
  		var row = document.createElement("TR");

  		// Create text nodes for each value attribute
  		var date = document.createTextNode(snapshot.val().date);
  		var time = document.createTextNode(snapshot.val().time);
  		var descrip = document.createTextNode(snapshot.val().description);
  		var categ = document.createTextNode(snapshot.val().category);
      var user = document.createTextNode(snapshot.val().user);

  		// Create table detail for each attribute
  		var dateRow = document.createElement("TD");
  		var timeRow = document.createElement("TD");
  		var descripRow = document.createElement("TD");
  		var categRow = document.createElement("TD");
      var userRow =document.createElement("TD");

  		// Link everything together
  		tableBody.appendChild(row);
  		row.appendChild(dateRow);
  		row.appendChild(timeRow);
  		row.appendChild(descripRow);
  		row.appendChild(categRow);
      row.appendChild(userRow);
  		dateRow.appendChild(date);
  		timeRow.appendChild(time);
  		descripRow.appendChild(descrip);
  		categRow.appendChild(categ);
      userRow.appendChild(user);
	});
}

// Get table element
var tableBody = document.getElementById("incidents-table-body");
populateTable(tableBody);