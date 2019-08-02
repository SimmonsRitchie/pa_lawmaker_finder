import { checkPointWithinGeography } from './findWithin'
import senDistricts from '../../public/static/pa_sen_2017.json'
import houseDistricts from '../../public/static/pa_house_2017.json'
import {convertTopoJson} from '../utils/layerGroups'

const senDistLayerG = convertTopoJson(senDistricts)
const houseDistLayerG = convertTopoJson(houseDistricts)


// GEOLOCATION
const geolocate = () => {
  console.log("Loading...")
  // Check if geolocation functionality is available to client
  // GEOLOCATION AVAILABLE:
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      // SUCCESS
      position => {
        const userLat = position.coords.latitude;
        const userLong = position.coords.longitude;
        const posObj = {
          userLat: userLat,
          userLong: userLong
        };
        console.log(posObj);
        console.log(senDistLayerG)
        const senD = checkPointWithinGeography(userLat, userLong, senDistLayerG)
        const houseD = checkPointWithinGeography(userLat, userLong, houseDistLayerG)
        console.log("Senate district:", senD)
        console.log("House district:", houseD)
        if (senD == undefined || houseD == undefined) {
          console.log("Sorry, we couldn't find your district")
        }
        return posObj;
      },
      // ERROR
      err => {
        console.log(err);
      },
      // OPTIONS
      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 0
      }
    );
    // GEOLOCATION UNAVAILABLE:
  } else {
    console.log("Geolocation is unavailable on your browser.");
  }
};

export default geolocate;
