function addClass(element,value) {
	if (!element.className) {
		element.className = value;
	} else {
		var newClassName = " " + value;
		element.className += newClassName;
	}
}