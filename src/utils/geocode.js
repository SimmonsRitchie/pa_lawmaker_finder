const API_KEY = process.env.GOOGLE_API_KEY;

var googleMapsClient = require("@google/maps").createClient({
  key: API_KEY,
  Promise: Promise // 'Promise' is the native constructor.
});
import { msg } from "../constants/displayMsg";
import { checkPointWithinGeography } from "./findWithin";

const getCoords = (
  location,
  setDistricts,
  setMessage,
  setLoader,
  setButtonBox
) => {
  const { street, city, postalcode, state } = location;
  const inputLocation = `${street}, ${city} ${postalcode} ${state}`; // may use in future
  setLoader(true);
  setMessage(msg.SEARCHING_FOR_LAWMAKERS, { italic: true });
  googleMapsClient
    .geocode({ address: inputLocation })
    .asPromise()
    .then(response => {
      setLoader(false);
      // Geocoder returns an array of the best matches, we take the first.
      const bestMatch = response.json.results[0].geometry.location;
      const inputLat = bestMatch.lat;
      const inputLng = bestMatch.lng;
      const houseDistrict = checkPointWithinGeography({
        inputLat,
        inputLng,
        bounds: "house"
      });
      const senDistrict = checkPointWithinGeography({
        inputLat,
        inputLng,
        bounds: "senate"
      });
      if (senDistrict == undefined || houseDistrict == undefined) {
        setMessage(msg.LOCATION_OUTSIDE_DISTRICTS_GEOCODE, {
          icon: "exclamation"
        });
        setButtonBox(true);
      } else {
        setDistricts(houseDistrict, senDistrict);
        setMessage(msg.SUCCESS_GEOCODE, { icon: "success" });
      }
      return;
    })
    .catch(error => {
      console.log(error)
      setLoader(false);
      setMessage(msg.LOCATION_NOT_FOUND, { icon: "exclamation" });
      setButtonBox(true);
      return;
    });
};

export default getCoords;
