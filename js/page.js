
// Change the start location of the map here.
var apikey = "428f42677b8a34403e10a5999da0721e";

var map = L.Wrld.map("map", apikey, {
	center: [56.459883, -2.977495],
	zoom: 18,
	headingDegrees: 40,
	indoorsEnabled: true
});

var searchbarConfig = {
	apiKey: apikey,
	outdoorSearchMenuItems: [
		{ name: "Around Me", searchTag: "", iconKey: "aroundme" }
	],
	skipYelpSearch: true,
	locationJumps: [
		{ name: "San Francisco", latLng: [37.7952, -122.4028] }
	],
};
var mapController = new MapController(map);
var poiApi = new WrldPoiApi("428f42677b8a34403e10a5999da0721e");
var searchbar = new WrldSearchbar("widget-container", map, searchbarConfig);
var markerController = new WrldMarkerController(map, { searchbar: searchbar });

// POI views are created in this MarkerController class.
var localMarkerController = new MarkerController(searchbar, markerController, mapController);

var indoorControl = new WrldIndoorControl("widget-container", map);

function changeFrame(room) {
	let iframe = '<iframe class="frame" src="https://zeno.computing.dundee.ac.uk/2018-projects/team9/thanos.html?room=' + room + '"></iframe>'
	document.getElementById('frameId').innerHTML = iframe;
}

searchbar.on('searchresultsupdate', (res) => {
	console.log(res);
	Object.keys(map._layers).forEach(element => {
		map._layers[element].on('click', (e) => {
			if (!e.target.id) return;
			modal.style.display = "block";
			markerController.selectMarker(e.target.id);
			modal.style.top = e.layerPoint.y + "px";
			modal.style.left = e.layerPoint.x + "px";
			modalText.textContent = res.results[e.target.id].title;
			let roomNr = modalText.textContent.split(' ')[1];
			changeFrame(roomNr);
		});
	});
});

map.indoors.on("indoormapenter", (event) => {
	if (event.indoorMap.getIndoorMapName() === "Westport House") {
		poiApi.searchIndoors(event.indoorMap.getIndoorMapId(), 0, (s, r) => (console.log(r)), {});
		document.getElementById("map").style.width = "75%";
		document.getElementById("paneldiv").style.width = "25%";
		document.getElementById("showButton").style.visibility = "hidden";
		searchbar.performTagSearch("", false);
	}
});

map.indoors.on("indoormapexit", (event) => {
	document.getElementById("map").style.width = "100%";
	document.getElementById("paneldiv").style.width = "0%";
	document.getElementById("showButton").style.visibility = "hidden";
});