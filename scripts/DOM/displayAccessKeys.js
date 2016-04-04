function displayAccesskeys() {
	if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	var links = document.getElementsByTagName("a");  // get all links in the document
	var akeys = new Array();
	for (var i = 0;i<links.length;i++){
		var current_link = links[i];
		if(!current_link.getAttribute("accesskey")) continue;
		var key = current_link.getAttribute("accesskey");  // get the value of the accesskey
		var text = current_link.lastChild.nodeValue;  // get the value of the link text
		akeys[key] = text;  // add them to the array
	}
	var list = document.createElement("ul");
	for (key in akeys) {
		var text = akeys[key];
		var str = key + ": " + text;
		var item = document.createElement("li");
		var item_text = document.createTextNode(str);
		item.appendChild(item_text);
		list.appendChild(item);
	}
	var header = document.createElement("h3");
	var header_text = document.createTextNode("Accesskeys");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(list);
}
addLoadEvent(displayAccesskeys);