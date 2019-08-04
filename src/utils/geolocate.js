import { checkPointWithinGeography } from './findWithin'
import { msg } from '../constants/displayMsg'


// GEOLOCATION
const geolocate = (setDistricts, setMessage, setLoader) => {
  setMessage(msg.SEARCHING_FOR_LAWMAKERS)
  // setMessage(msg.SEARCHING_FOR_LAWMAKERS)
  setLoader(true)
  // Check if geolocation functionality is available to client
  // GEOLOCATION AVAILABLE:
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      // SUCCESS
      position => {
        setLoader(false)
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        const houseDistrict = checkPointWithinGeography({inputLat: userLat, inputLng:userLng, bounds:'house'})
        const senDistrict = checkPointWithinGeography({inputLat: userLat, inputLng:userLng, bounds:'senate'})
        setDistricts( houseDistrict, senDistrict)
        setMessage(msg.SUCCESS_GEOLOCATION)
        if (senDistrict == undefined || houseDistrict == undefined) {
          setMessage(msg.LOCATION_NOT_IN_DISTRICTS)
        }
        return
      },
      // ERROR
      err => {
        setLoader(false)
        console.log(err);
        setMessage(msg.LOCATION_NOT_FOUND_TRY_AGAIN)
        return
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
    return
  }
};

export default geolocate;
