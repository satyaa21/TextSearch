var remove_result={};
function mouseDownHandler_result(event) {
	var event = event || window.event;
	var result = event.target;
	if(event.target.classList.contains('results-div')) return;
	window.event.stopPropagation();

	remove_result._currentResize_ = {
		minMovement: 3,
		result: result,
		startX: window.event.x,
		startY: window.event.y,
	};

	function canStart(){
		var deltaX = window.event.x - remove_result._currentResize_.startX;
		return (Math.abs(deltaX) >= remove_result._currentResize_.minMovement);
	}

	window.onmousemove = function(){

		window.event.stopPropagation();
		window.event.preventDefault();

		if(canStart()) {
			window.onmousemove = function() {
				remove_result._currentResize_.result_clone.style.left = window.event.x - (remove_result._currentResize_.width/2) + "px";
				remove_result._currentResize_.result_clone.style.top = window.event.y - (remove_result._currentResize_.height/2) + "px";
			};
			prepareGoast();
			document.body.setAttribute("ready-for-remove", "true");
		}
	};

	window.onmouseup = function(){

		window.event.preventDefault();
		window.event.stopPropagation();

		remove_result._currentResize_.result.style.display = "";
		if(window.event.target.classList && window.event.target.classList.contains("remove-area")) {
			remove_result._currentResize_.result.parentNode.removeChild(remove_result._currentResize_.result);
		}
		
		killGoast();
		document.body.removeAttribute("ready-for-remove");

		window.onmousemove = null;
		window.onmouseup = null;
		remove_result._currentResize_ = null;
	};
}

function prepareGoast() {
	if(!remove_result._currentResize_) return;
	
	remove_result._currentResize_.result_clone = remove_result._currentResize_.result.cloneNode(true);
	remove_result._currentResize_.result.style.display = "none";
	document.body.appendChild(remove_result._currentResize_.result_clone);
	remove_result._currentResize_.result_clone.classList.add('removing-result');
	remove_result._currentResize_.width = remove_result._currentResize_.result_clone.offsetWidth;
	remove_result._currentResize_.height = remove_result._currentResize_.result_clone.offsetHeight;
}

function killGoast() {
	if(!remove_result._currentResize_) return;
	
	if(remove_result._currentResize_.result_clone) {
		remove_result._currentResize_.result_clone.parentNode.removeChild(remove_result._currentResize_.result_clone);
	}
}
