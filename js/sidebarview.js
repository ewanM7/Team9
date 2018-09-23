let dataTypes = [
    {
        name: "Energy", src: "images/energy.png", id: "energyButton", lowcase: "energy", dataAverage: getDataAverage("Energy"), dataHighest: getHighestValue("Energy"), dataLowest: getLowestValue("Energy")
    },
    {
        name: "Gas", src: "images/gas.png", id: "gasButton", lowcase: "gas", dataAverage: getDataAverage("Gas"), dataHighest: getHighestValue("Gas"), dataLowest: getLowestValue("Gas")
    },
    {
        name: "CO2", src: "images/co2.png", id: "co2Button", lowcase: "co2", dataAverage: getDataAverage("CO2"), dataHighest: getHighestValue("CO2"), dataLowest: getLowestValue("CO2")
    },
    {
        name: "Temperature", src: "images/temp.png", id: "tempButton", lowcase: "temp", dataAverage: getDataAverage("Temperature"), dataHighest: getHighestValue("Temperature"), dataLowest: getLowestValue("Temperature")
    },
    {
        name: "Humidity", src: "images/humidity.png", id: "humidityButton", lowcase: "humidity", dataAverage: getDataAverage("Humidity"), dataHighest: getHighestValue("Humidity"), dataLowest: getLowestValue("Humidity")
    },
    {
        name: "Waste", src: "images/waste.png", id: "wasteButton", lowcase: "waste", dataAverage: getDataAverage("Waste"), dataHighest: getHighestValue("Waste"), dataLowest: getLowestValue("Waste")
    }
];
// let dataTypes = [
//     {
//         name: "Energy", src: "images/energy.png", id: "energyButton", lowcase: "energy", dataAverage: 'getDataAverage("Energy")', dataHighest: 'getHighestValue("Energy")', dataLowest: 'getLowestValue("Energy")'
//     },
//     {
//         name: "Gas", src: "images/gas.png", id: "gasButton", lowcase: "gas", dataAverage: 'getDataAverage("Gas")', dataHighest: 'getHighestValue("Gas")', dataLowest: 'getLowestValue("Gas")'
//     },
//     {
//         name: "CO2", src: "images/co2.png", id: "co2Button", lowcase: "co2", dataAverage: 'getDataAverage("CO2")', dataHighest: 'getHighestValue("CO2")', dataLowest: 'getLowestValue("CO2")'
//     },
//     {
//         name: "Temperature", src: "images/temp.png", id: "tempButton", lowcase: "temp", dataAverage: 'getDataAverage("Temperature")', dataHighest: 'getHighestValue("Temperature")', dataLowest: 'getLowestValue("Temperature")'
//     },
//     {
//         name: "Humidity", src: "images/humidity.png", id: "humidityButton", lowcase: "humidity", dataAverage: 'getDataAverage("Humidity")', dataHighest: 'getHighestValue("Humidity")', dataLowest: 'getLowestValue("Humidity")'
//     },
//     {
//         name: "Waste", src: "images/waste.png", id: "wasteButton", lowcase: "waste", dataAverage: 'getDataAverage("Waste")', dataHighest: 'getHighestValue("Waste")', dataLowest: 'getLowestValue("Waste")'
//     }
// ];

var wrapper = document.getElementById("sidebarTable");



var myHTML = '\
    <tr>\
      <th colspan="3" style="height:75px; text-align:center;">Westport House</th>\
      </tr>\
    ';
for (var i = 0; i < dataTypes.length; i++) {
    myHTML += '\
      <tr>\
        <td style="width:10px; border-right:0px;">\
          <img src="' + dataTypes[i].src + '"style="width: 50px;">\
        </td>\
        <td style="border-left:0px;">' + dataTypes[i].name + '</br>\
          <button id=' + dataTypes[i].id + ' onClick="showMore(\'' + dataTypes[i].lowcase + '\');console.log(getHighestValue(dataTypes[0].name).room);">V</button>\
        </td>\
        <td>' + dataTypes[i].dataAverage + ' kWh</td>\
      </tr>\
  <tr id="sidebar_' + dataTypes[i].lowcase + '_details" style="display:none;">\
    <td style="border-right:0px;"></td>\
    <td style="border-left:0px;">\
      <span class="redText">' + getHighestValue(dataTypes[i].name).room + '</span><br>\
      <span class="greenText">' + getLowestValue(dataTypes[i].name).room + '</span><br>\
    </td>\
    <td>' + getHighestValue(dataTypes[i].name).value + ' kWh<br>' + getLowestValue(dataTypes[i].name).value + ' kWh\
    </td>\
  </tr>\
  ';
}
wrapper.innerHTML = myHTML;