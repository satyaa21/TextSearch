var resize={
	MIN_GAP: 60
};
function mouseDownHandler(event) {
	var event = event || window.event;
	if(event.target !== event.currentTarget) return;
	var area = event.target;
	window.event.stopPropagation();
	
	var previousSibling = area.previousSibling;
	while(!previousSibling.classList || !previousSibling.classList.contains('search-area')) {
		previousSibling = previousSibling.previousSibling;
	}

	resize._currentResize_ = {
		minMovement: 3,
		startX: window.event.x,
		offsets: {
			left: area.offsetLeft,
			width: area.offsetWidth
		},
		parentWidth: area.offsetWidth + previousSibling.offsetWidth
	};

	function canResize(){
		var deltaX = window.event.x - resize._currentResize_.startX;
		return (Math.abs(deltaX) >= resize._currentResize_.minMovement);
	}

	window.onmousemove = function(){

		window.event.stopPropagation();
		window.event.preventDefault();

		if(canResize()) {
			window.onmousemove = function(){

				window.event.stopPropagation();
				window.event.preventDefault();

				var maxVal = minVal = resize.MIN_GAP;

				var delta = window.event.x - resize._currentResize_.startX;
				maxVal = resize._currentResize_.parentWidth - resize.MIN_GAP;
				
				var val = resize._currentResize_.offsets.left + delta;
				if(val >= minVal && val <= maxVal) {
					previousSibling.style.width= area.style.left = val + "px";
				}
			};
		}
	};

	window.onmouseup = function(){

		window.event.preventDefault();
		window.event.stopPropagation();

		window.onmousemove = null;
		window.onmouseup = null;
		resize._currentResize_ = null;
	};

}
