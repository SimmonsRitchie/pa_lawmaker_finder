import { checkPointWithinGeography } from './findWithin'
import senDistricts from '../../public/static/pa_sen_2017.json'
import houseDistricts from '../../public/static/pa_house_2017.json'
import {convertTopoJson} from '../utils/layerGroups'
import { msg } from '../constants/displayMsg'
const senDistLayerG = convertTopoJson(senDistricts)
const houseDistLayerG = convertTopoJson(houseDistricts)


// GEOLOCATION
const geolocate = (setDistricts, setMessage, setLoader) => {
  setMessage("Searching for your location...")
  setLoader(true)
  // Check if geolocation functionality is available to client
  // GEOLOCATION AVAILABLE:
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      // SUCCESS
      position => {
        setLoader(false)
        const userLat = position.coords.latitude;
        const userLong = position.coords.longitude;
        const posObj = {
          userLat: userLat,
          userLong: userLong
        };
        const houseDistrict = checkPointWithinGeography(userLat, userLong, houseDistLayerG)
        const senDistrict = checkPointWithinGeography(userLat, userLong, senDistLayerG)
        setDistricts( houseDistrict, senDistrict)
        setMessage(`Based on your current location, your lawmakers are:`)
        if (senDistrict == undefined || houseDistrict == undefined) {
          setMessage(msg.LOCATION_NOT_IN_DISTRICTS)
        }
        return posObj;
      },
      // ERROR
      err => {
        setLoader(false)
        console.log(err);
        setMessage(msg.LOCATION_NOT_FOUND)
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
    setLoader(false)
    setMessage(msg.GEOLOCATION_UNAVAILABLE);
  }
};

export default geolocate;
