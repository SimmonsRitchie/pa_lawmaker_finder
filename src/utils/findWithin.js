/* ---------------------------------------------------------------
                    MODULE: GEO UTILS
-----------------------------------------------------------------

Module for geographic functions that are useful for mapping
*/

// Third party imports
import * as turf from '@turf/turf'
const L = require('leaflet')
import {convertTopoJson} from '../utils/layerGroups'
import senDistricts from '../../public/static/pa_sen_2017.json'
import houseDistricts from '../../public/static/pa_house_2017.json'

// Get leaflet layer groups from GEOJSON
const houseDistLayerG = convertTopoJson(houseDistricts)
const senDistLayerG = convertTopoJson(senDistricts)

// -------------------- POINT WITHIN POLYGON  ---------------------------

// Using turf to checking whether point is within given geographic area

export const checkPointWithinGeography = ({inputLat, inputLng, bounds}={}) => {
  /* Takes lat, long and a flag ('house','senate') that determines whether you want to search 
  whether those coords are within Pa. house district or Pa. senate districts. */

  let layerGroup = null
  if (bounds == 'house') {
    layerGroup = houseDistLayerG
  } else if (bounds == 'senate') {
    layerGroup = senDistLayerG
  }

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

