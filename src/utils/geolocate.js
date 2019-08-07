import { checkPointWithinGeography } from './findWithin'
import { msg } from '../constants/displayMsg'


// GEOLOCATION
const geolocate = (setDistricts, setMessage, setLoader, setButtonBox) => {
  setMessage(msg.SEARCHING_FOR_LAWMAKERS_GEOLOCATION)
  // setMessage(msg.SEARCHING_FOR_LAWMAKERS)
  setLoader(true)
  // Check if geolocation functionality is available to client
  // GEOLOCATION AVAILABLE:
  console.log(window.isSecureContext)
  if (window.isSecureContext && "geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      // SUCCESS
      position => {
        setLoader(false)
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        const houseDistrict = checkPointWithinGeography({inputLat: userLat, inputLng:userLng, bounds:'house'})
        const senDistrict = checkPointWithinGeography({inputLat: userLat, inputLng:userLng, bounds:'senate'})
        if (senDistrict == undefined || houseDistrict == undefined) {
          setMessage(msg.LOCATION_OUTSIDE_DISTRICTS)
          setButtonBox(true)
        } else {
          setDistricts( houseDistrict, senDistrict)
          setMessage(msg.SUCCESS_GEOLOCATION)
        }
        return
      },
      // ERROR
      err => {
        setLoader(false)
        console.log(err);
        setMessage(msg.LOCATION_NOT_FOUND_TRY_ADDRESS)
        setButtonBox(true)
        return
      },
      // OPTIONS
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
      }
    );
    // GEOLOCATION UNAVAILABLE:
  } else {
    setLoader(false)
    setMessage(msg.GEOLOCATION_UNAVAILABLE);
    setButtonBox(true)
    return
  }
};

export default geolocate;
