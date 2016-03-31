function displayAbbreviations() {
	if (!document.createElement) return false;
	if (!document.getElementsByTagName) return false;
	if (!document.createTextNode) return false;
	// get all Abbreviations
	var abbreviations = document.getElementsByTagName("abbr");
	if(abbreviations.length < 1) return false;
	// create an Array to save value of each title
	var defs = new Array();
	for (var i = 0;i < abbreviations.length;i++) {
		var current_abbr = abbreviations[i];
		if (current_abbr.length < 1) return false;
		var defination = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = defination;
	}
	// create the definition list
	var dlist = document.createElement("dl");
	// loop through the definitons
	for (key in defs) {
		var definiation = defs[key];
	//create definition title
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
	//create definition description
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definiation);
		ddesc.appendChild(ddesc_text);
	// add them to the list
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length < 1) return false;
	// create a headline
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	// add description to the headline
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);