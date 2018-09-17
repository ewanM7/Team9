
// Change the start location of the map here.
var apikey = "428f42677b8a34403e10a5999da0721e";

var map = L.Wrld.map("map", apikey, {
center: [56.459883, -2.977495],
zoom: 18,
headingDegrees: 40,
indoorsEnabled: true
});

//var indoorControl = new WrldIndoorControl("widget-container", map);

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

searchbar.on('searchresultsupdate', (res) => {
Object.keys(map._layers).forEach(element => {
  map._layers[element].on('click', (e) => {
    modal.style.display = "block";
    markerController.selectMarker(e.target.id);
    modal.style.top = e.layerPoint.y + "px";
    modal.style.left = e.layerPoint.x + "px";
    modalText.textContent = res.results[e.target.id].title;
  });
});
});

map.indoors.on("indoormapenter", (event) => {
poiApi.searchIndoors(event.indoorMap.getIndoorMapId(), 0, (s,r)=>(console.log(r)), {});

});