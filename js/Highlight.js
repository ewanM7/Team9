//<script src="./js/page.js "></script>

//Stops Ajax from acting asynchronously.
$.ajaxSetup({
    async: false
});


function setEntityHighlights() {

    console.log("a");
    map.indoors.setEntityHighlights("WRLD", [255, 0, 0, 128]);
    console.log("b");
}

function entityHeatColor(heat) {
    let lightness = (1.0 - heat) * 255;
    let red = 255;
    return [red, lightness, lightness, 255];
}




let room5Poly = [
    [56.46013359367976, -2.978562867646331],
    [56.46017455683381, -2.978488176868957],
    [56.46015205618298, -2.978375364464847],
    [56.45990962133451, -2.9782881070774354],
    [56.459867909481986, -2.9783626190991543],
    [56.45989617540689, -2.9784802731830515]];


let room9Poly = [
    [56.46007893306824, -2.9786330858723935],
    [56.46013176369991, -2.978267297498063],
    [56.45986523936192, -2.9781875534836217],
    [56.459813736950835, -2.978631561106772],
    [56.459905221159595, -2.9786617677382594]];


let room19Poly = [
    
    [56.45994213147724, -2.9781872068553605],
    [56.45994772419226, -2.9781242359383646],
    [56.45997184962892, -2.9781084195030174],
    [56.45997732944791, -2.978052948882576],
    [56.45993738447493, -2.9781011805400066],
    [56.45993333612529, -2.9782291036033817]];


let floorG = {
    indoorMapId: "westport_house",
    indoorMapFloorId: 0
};

let floor1 = {
    indoorMapId: "westport_house",
    indoorMapFloorId: 1
};

let floor2 = {
    indoorMapId: "westport_house",
    indoorMapFloorId: 2
};

let floor3 = {
    indoorMapId: "westport_house",
    indoorMapFloorId: 3
};

let floor4 = {
    indoorMapId: "westport_house",
    indoorMapFloorId: 4
};

let floor5 = {
    indoorMapId: "westport_house",
    indoorMapFloorId: 5
};

let floor6 = {
    indoorMapId: "westport_house",
    indoorMapFloorId: 6
};






map.indoors.on("indoormapexit", (event) => {
    document.getElementById("map").style.width = "100%";
    document.getElementById("paneldiv").style.width = "0%";
    document.getElementById("showButton").style.visibility = "hidden";

    //setEntityHighlights();

});

map.indoors.on("indoormapenter", (event) => {
    if (event.indoorMap.getIndoorMapName() === "Westport House") {
        poiApi.searchIndoors(event.indoorMap.getIndoorMapId(), 0, (s, r) => (console.log(r)), {});
        document.getElementById("map").style.width = "75%";
        document.getElementById("paneldiv").style.width = "25%";
        document.getElementById("showButton").style.visibility = "hidden";
        searchbar.performTagSearch("", false);
        //setRoom("Room 4");
        //Works if I call it from here, but not in the switch statement.
        //setEntityHighlights();

        //setRoom("Room 3");
    }
});


function setRoom(room) {



    console.log(room);
    let poly;

    switch (room) {
        case "Room 1":
            console.log("1");
            setEntityHighlights();
            console.log("2");
            break;
        case "Room 2":
            console.log("2");
            map.indoors.setEntityHighlights("Office Space D", [255, 0, 0, 128]);
            break;
        case "Room 3":
            console.log("3");
            map.indoors.setEntityHighlights("Curtis Bank", [255, 0, 0, 128]);
            break;
        case "Room 4":
            console.log("4");
            map.indoors.setEntityHighlights("Office Space D", [255, 0, 0, 128]);
            break;
        case "Room 5":
            console.log("5");
            poly = L.polygon(room5Poly, floor1).addTo(map);
            break;
        case "Room 9":
            console.log("9");
            poly = L.polygon(room9Poly, floorG).addTo(map);
            break;
        case "Room 19":
            console.log("19");
            poly = L.polygon(room19Poly, floor6).addTo(map);
            break;

    }
}