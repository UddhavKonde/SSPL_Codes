document.addEventListener('DOMContentLoaded', function() {
	var div = document.createElement("div");
    div.id = "container";
	div.style.backgroundColor = "#97144d";
	div.style.color = "white";
	div.style.textAlign = "center";
	div.style.fontFamily = "Lato-Regular";
	div.style.fontSize = "18px";
	div.style.padding = "8px";
	
    document.body.insertBefore(div, document.body.firstChild);
	//document.getElementsByClassName("navbar-collapse").appendChild(div);
	
	
    var values = ["Select", "English", "Hindi", "Marathi"];
 
    var select = document.createElement("select");
    select.name = "language";
    select.id = "language";
	select.style.backgroundColor = "rgb(197, 74, 71)";
	select.style.borderRadius = "7px";
	select.style.padding = "3px";
 
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
 
    var label = document.createElement("label");
    label.innerHTML = "Choose your language : "
    label.htmlFor = "language";
	 
    document.getElementById("container").appendChild(label).appendChild(select);
}, false);
