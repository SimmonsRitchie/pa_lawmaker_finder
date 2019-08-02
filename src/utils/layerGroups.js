/* ---------------------------------------------------------------
                    MODULE: LAYER GROUPS
-----------------------------------------------------------------

Handles transformation of data to layergroups

*/

// --------------------------- IMPORTS ---------------------------

// third party
import * as topojson from "topojson"
const L = require('leaflet') // trying this


// -------------------- TOPOJSON LAYER GROUP: STATES  ---------------------------

export const convertTopoJson = (topoJsonData) => {

  // EXTEND LEAFLET TO HANDLE TOPOJSON
  // Leaflet doesn't handle topoJson natively so we create a new class called 
  // TopoJSON which extends theGeoJSON class and overwrites its addData() method */
  L.TopoJSON = L.GeoJSON.extend({  
    addData: function(jsonData) {    
      if (jsonData.type === 'Topology') {
        for (let key in jsonData.objects) {
          const geojson = topojson.feature(jsonData, jsonData.objects[key]);
          L.GeoJSON.prototype.addData.call(this, geojson);
        }
      }    
      else {
        L.GeoJSON.prototype.addData.call(this, jsonData);
      }
    }  
  });

  // CONVERT TOPOJSON DATA TO LAYER GROUP
  const layerGroup = new L.TopoJSON();
  layerGroup.addData(topoJsonData);

  // SET STYLE
  layerGroup.eachLayer(layer => {
    layer.setStyle({
      fillColor: 'none',
      color: '#555',
      weight: 0,
      opacity: 0
    });
  });

  return layerGroup
}


