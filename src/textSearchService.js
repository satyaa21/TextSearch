
function TextSearch(searchString, filterOptions){
	this.setSearchString(searchString, filterOptions);
	this.next_page_token = null;
}
TextSearch.APIKEY = 'AIzaSyBF4NAll2YET7WrmNZj3nKSsujgKYybouA';
TextSearch.URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?';

TextSearch.prototype.setSearchString = function(searchString, filterOptions) {
	this.searchString = searchString;
	this.filterOptions = filterOptions;
};
TextSearch.prototype.get = function(callback) {
	//var Q = TextSearch.URL + this.searchString;  "&" + TextSearch.APIKEY;
	var Q = this.searchString;

	this.invoke(Q, function(results, status){
		if(status == google.maps.places.PlacesServiceStatus.OK) {
			callback(results);
		} else {
			//TODO
		}
	})
};

TextSearch.prototype.hasNext = function() {
	return (this.next_page_token !== null)
};

TextSearch.prototype.next = function(callback) {

};

TextSearch.prototype.getFilterOptions = function() {

};

TextSearch.prototype.setFilterOptions = function(filterOptions) {

};

TextSearch.prototype.filterResults = function(results) {
	
};

//Getting parse error.
TextSearch.prototype.invoke = function(Q, callback) {
	$.ajax({
		type: 'GET',
		url: Q,
		dataType : "jsonp",
		success: callback,
		error: callback
	});
};

TextSearch.prototype.invoke = function(Q, callback) {

	var pyrmont = new google.maps.LatLng(currentLocation.latitude, currentLocation.longitude);
	
	map = new google.maps.Map(document.getElementById('map'), {
		center: pyrmont,
		zoom: 15
	});

	var request = {
		location: pyrmont,
		radius: '500',
		rankBy: 'distance',
		query: Q
	};

	service = new google.maps.places.PlacesService(map);
	service.textSearch(request, callback);
}
