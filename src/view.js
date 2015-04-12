function TextSearchView() {

}
TextSearchView.prototype.showResults = function(results) {
	showOnMap(results);
};

TextSearchView.prototype.clear = function() {
	var mapDiv = document.getElementById('map');
	mapDivClone = document.createElement('div');
	mapDiv.parentNode.insertBefore(mapDivClone, mapDiv);
	mapDiv.parentNode.removeChild(mapDiv);
	mapDivClone.id = 'map';
	mapDivClone.className = "map-div";
	
	var resultsDiv = document.getElementById('results');
	resultsDiv.innerHTML = "";
};

function showOnMap(results) {

	function createMarker(place) {
		var placeLoc = place.geometry.location;
		var marker = new google.maps.Marker({
			map: map,
			position: place.geometry.location
		});

		google.maps.event.addListener(marker, 'click', function() {
		
			 var infowindow = new google.maps.InfoWindow({
				content: place.name
			});
			infowindow.open(map, this);
		});
	}
	
	function createResultEntry(place) {
		var resultDiv = document.createElement('div');
		resultDiv.className ="search-result";
		resultDiv.innerHTML = resultTemplate(place);
		
		var resultsDiv = document.getElementById('results');
		resultsDiv.appendChild(resultDiv);
	}

	for (var i = 0; i < results.length; i++) {
		//createMarker(results[i]);
		createResultEntry(results[i]);
	}
}
