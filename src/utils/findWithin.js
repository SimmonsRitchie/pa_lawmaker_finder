/* ---------------------------------------------------------------
                    MODULE: GEO UTILS
-----------------------------------------------------------------

Module for geographic functions that are useful for mapping

*/

// Third party imports
import * as turf from '@turf/turf'
const L = require('leaflet')


// -------------------- POINT WITHIN POLYGON  ---------------------------

// Using turf to checking whether point is within given geographic area

export const checkPointWithinGeography = (inputLat, inputLng, layerGroup) => {
  /* Takes lat, long and a Leaflet layer of map boundaries. Checks if lat/lng are in any of those
  shapes. If so, returns desired property on feature.properties */

  // Convert input into Turf point
  const turfPoint = turf.point([inputLng, inputLat]); // NOTE: turf takes [lng, lat] format. leaflet takes [lat, lng].
  // Declare vars here so they're in scope throughout function
  let legD = null;
  // Loop through each layer
  layerGroup.eachLayer( layer => {
    const layerCoords = layer.feature.geometry.coordinates;
    // Detecting if layer is multiline polygon. If it is, then handle loop through each of its sub-arrays to check whether
    // point is within those coords.
    if (layerCoords[0].length === 1) {
      layer.feature.geometry.coordinates.forEach((coords) => {
        const turfPoly = turf.polygon(coords);
        const pointWithinPoly = turf.booleanPointInPolygon(turfPoint, turfPoly);
        if (pointWithinPoly) {
          legD = layer.feature.properties.leg_distri;
        }
      })
    } else {
      const turfPoly = turf.polygon(layerCoords);
      const pointWithinPoly = turf.booleanPointInPolygon(turfPoint, turfPoly);
      if (pointWithinPoly) {
        legD = layer.feature.properties.leg_distri;
      }      
    }
  })
  return legD
}

