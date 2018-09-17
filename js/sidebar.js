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
	if(sectionName === "energy"){
		if(energyClicked == false){
			document.getElementById("sidebar_energy_details").style.display = "";
			energyClicked = true;
		}else{
			document.getElementById("sidebar_energy_details").style.display = "none";
			energyClicked = false;
		}
	}
	
	if(sectionName === "gas"){
		if(gasClicked == false){
			document.getElementById("sidebar_gas_details").style.display = "";
			gasClicked = true;
		}else{
			document.getElementById("sidebar_gas_details").style.display = "none";
			gasClicked = false;
		}
	}
	
	if(sectionName === "co2"){
		if(co2Clicked == false){
			document.getElementById("sidebar_co2_details").style.display = "";
			co2Clicked = true;
		}else{
			document.getElementById("sidebar_co2_details").style.display = "none";
			co2Clicked = false;
		}
	}
	
	if(sectionName === "temp"){
		if(tempClicked == false){
			document.getElementById("sidebar_temp_details").style.display = "";
			tempClicked = true;
		}else{
			document.getElementById("sidebar_temp_details").style.display = "none";
			tempClicked = false;
		}
	}
	
	if(sectionName === "humidity"){
		if(humidityClicked == false){
			document.getElementById("sidebar_humidity_details").style.display = "";
			humidityClicked = true;
		}else{
			document.getElementById("sidebar_humidity_details").style.display = "none";
			humidityClicked = false;
		}
	}
	
	if(sectionName === "waste"){
		if(wasteClicked == false){
			document.getElementById("sidebar_waste_details").style.display = "";
			wasteClicked = true;
		}else{
			document.getElementById("sidebar_waste_details").style.display = "none";
			wasteClicked = false;
		}
	}
}