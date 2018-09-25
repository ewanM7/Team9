<html>
  <head>
    <script src="https://cdn-webgl.wrld3d.com/wrldjs/dist/latest/wrld.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.1/leaflet.css" rel="stylesheet" />
    <style>
      #floorButtons {
        position: absolute;
        z-index: 20;
      }

      #floorButtons button {
        display: block;
        width: 100%;
      }
    </style>
  </head>
  
  <body>
  <div style="position: relative">
    <div id="floorButtons">
      <button onclick="toFloor()">Go to floor</button>
      <button onclick="setEntityHighlights()">Highlight entities</button>
      <button onclick="clearEntityHighlights()">Clear entities highlights</button>
    </div>
    <div id="map" style="height: 400px"></div>

    <script>
      var map = L.Wrld.map("map", "428f42677b8a34403e10a5999da0721e", {
        center: [56.459801, -2.977928],
        zoom: 15,
        indoorsEnabled: true,
      });

      function setEntityHighlights() {

        map.indoors.setEntityHighlights("Meeting Room Small", [255, 0, 0, 128]);
        map.indoors.setEntityHighlights("Meeting Room Large", [0, 0, 255, 128]);
       
        map.indoors.setEntityHighlights(entityIdsInRange(1,40), entityHeatColor(0.55));
        map.indoors.setEntityHighlights("0001"  , entityHeatColor(1.0));  
        map.indoors.setEntityHighlights(["010","0022","0036","0037"], entityHeatColor(0.75)); 
        map.indoors.setEntityHighlights(["004","0008","0027","0031"], entityHeatColor(0.65)); 
        map.indoors.setEntityHighlights(["0011","0032","0021","0034"], entityHeatColor(0.3)); 
        map.indoors.setEntityHighlights(["0009","0039","0040","0038"], entityHeatColor(0.2));  
        
        map.indoors.setEntityHighlights(entityIdsInRange(41,120), entityHeatColor(1.0));
        map.indoors.setEntityHighlights(["0041","0042","0043","0044","0047"], entityHeatColor(0.0)); 
        
        map.indoors.setEntityHighlights(entityIdsInRange(121,191), entityHeatColor(0.0));
        
        var entitys = entityIdsInRange(192,247)

        for( var i = 0; i < entitys.length; i++ ){
          var  heat = i / entitys.length;
          console.log(heat);
          map.indoors.setEntityHighlights(entitys[i], entityHeatColor(heat));
        }
      }
      
      function entityHeatColor(heat){
        var lightness = (1.0 - heat)*255;
        var red = 255;
        return [red, lightness, lightness, 255];
      }

      function entityIdsInRange(from,to) {
        var ids = [];
        for(var i = from; i<=to; i++ ){
          var id = (i+"").padStart(4,"0");
          ids.push(id);
        }
        return ids;
      }

      function clearEntityHighlights() {
        map.indoors.clearEntityHighlights();
      }

      function toFloor() {
         map.indoors.enter("westport_house");
      }

      function onIndoorMapEntered() {
        map.indoors.setFloor(2);
        map.setView([56.459984, -2.978238], 19.2);
      }

      map.indoors.on("indoormapenter", onIndoorMapEntered);

    </script>

  </div>
  </body>
</html>