var searchModel = null;
var searchView = null;
var currentLocation = {};
var map;
var resultTemplate;

function init() {
	searchModel = new TextSearch("", []);
	searchView = new TextSearchView();
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(saveLocation);
	} else {
		document.getElementById('map').innerHTML = "Geolocation is not supported by this browser.";
	}
	
	prepareResultTemplate();
}

function saveLocation(position) {
	currentLocation.latitude = position.coords.latitude;
	currentLocation.longitude = position.coords.longitude;
}

function prepareResultTemplate() {
	var request1 = new XMLHttpRequest();
	request1.open("GET", "src/tpl/result.tpl", true);
	request1.onreadystatechange = function(response) {
		if(response.target.status === 200) {
			var tempText = response.target.responseText;
		} else{
			console.debug("Error in getting template");
			var tempText = '<div class="info">	<div class="name">		<label><%=name%></label>	</div>	<div class="address">		<label><%=formatted_address%></label>	</div></div>';
		}
		resultTemplate = _.template(tempText);
	};
	request1.send();
}

function getSearchString(){
	return searchString_inp.value;
}

function getSelectedFilterOptions() {
	return [];
}

function getSearchResults() {
	var searchString = getSearchString();
	var filterOptions = getSelectedFilterOptions();
	searchModel.setSearchString(searchString, filterOptions);
	searchView.clear();
	searchModel.get(function(results){
		searchView.showResults(results);
	});
}
