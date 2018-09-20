var energyClicked = false;
var gasClicked = false;
var co2Clicked = false;
var tempClicked = false;
var humidityClicked = false;
var wasteClicked = false;

function hidePanel(){
    document.getElementById("map").style.width = "100%";
    document.getElementById("paneldiv").style.width = "0%";
	document.getElementById("showButton").style.visibility = "visible";
}

function showPanel(){
    document.getElementById("map").style.width = "75%";
    document.getElementById("paneldiv").style.width = "25%";
	document.getElementById("showButton").style.visibility = "hidden";
}

function showMore(sectionName){
	console.log("Function called");
	if(sectionName === "energy"){
		if(energyClicked == false){
			document.getElementById("sidebar_energy_details").style.display = "";
			document.getElementById("energyButton").innerHTML = "Λ";
			energyClicked = true;
		}else{
			document.getElementById("sidebar_energy_details").style.display = "none";
			document.getElementById("energyButton").innerHTML = "V";
			energyClicked = false;
		}
	}
	
	if(sectionName === "gas"){
		if(gasClicked == false){
			document.getElementById("sidebar_gas_details").style.display = "";
			document.getElementById("gasButton").innerHTML = "Λ";
			gasClicked = true;
		}else{
			document.getElementById("sidebar_gas_details").style.display = "none";
			document.getElementById("gasButton").innerHTML = "V";
			gasClicked = false;
		}
	}
	
	if(sectionName === "co2"){
		if(co2Clicked == false){
			document.getElementById("sidebar_co2_details").style.display = "";
			document.getElementById("co2Button").innerHTML = "Λ";
			co2Clicked = true;
		}else{
			document.getElementById("sidebar_co2_details").style.display = "none";
			document.getElementById("co2Button").innerHTML = "V";
			co2Clicked = false;
		}
	}
	
	if(sectionName === "temp"){
		if(tempClicked == false){
			document.getElementById("sidebar_temp_details").style.display = "";
			document.getElementById("tempButton").innerHTML = "Λ";
			tempClicked = true;
		}else{
			document.getElementById("sidebar_temp_details").style.display = "none";
			document.getElementById("tempButton").innerHTML = "V";
			tempClicked = false;
		}
	}
	
	if(sectionName === "humidity"){
		if(humidityClicked == false){
			document.getElementById("sidebar_humidity_details").style.display = "";
			document.getElementById("humidityButton").innerHTML = "Λ";
			humidityClicked = true;
		}else{
			document.getElementById("sidebar_humidity_details").style.display = "none";
			document.getElementById("humidityButton").innerHTML = "V";
			humidityClicked = false;
		}
	}
	
	if(sectionName === "waste"){
		if(wasteClicked == false){
			document.getElementById("sidebar_waste_details").style.display = "";
			document.getElementById("wasteButton").innerHTML = "Λ";
			wasteClicked = true;
		}else{
			document.getElementById("sidebar_waste_details").style.display = "none";
			document.getElementById("wasteButton").innerHTML = "V";
			wasteClicked = false;
		}
	}
}