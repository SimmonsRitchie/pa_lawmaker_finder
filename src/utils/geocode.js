
const Nominatim = require('nominatim-geocoder')
import { msg } from '../constants/displayMsg'
import { checkPointWithinGeography } from './findWithin'


/* Nomatim takes as params either {q: "123 Fake St, Fakeville, Pa, USA"} for free form search or
{
  street:"123 Fake St", 
  city:"Fakeville" ,
  county: "Fake County",
  state: "PA", 
  country:"USA", 
  postalcode:"11111"
}
*/

const getCoords = (address, setDistricts, setMessage, setLoader) => {
  setLoader(true)
  setMessage(msg.SEARCHING_FOR_LAWMAKERS)
  const geocoder = new Nominatim()
  geocoder.search( address )
      .then((response) => {
        setLoader(false)
        // Geocoder returns an array of the best matches, we take the first.
        const bestMatch = response[0]
          console.log(bestMatch)
          const inputLat = bestMatch.lat
          const inputLng = bestMatch.lon
          const houseDistrict = checkPointWithinGeography({inputLat, inputLng, bounds:"house"})
          const senateDistrict = checkPointWithinGeography({inputLat, inputLng, bounds:"senate"})
          setMessage(msg.SUCCESS_GEOCODE)
          setDistricts(houseDistrict, senateDistrict)
          return
      })
      .catch((error) => {
          setLoader(false)
          setMessage(msg.LOCATION_NOT_FOUND)
          return
      })
}

export default getCoords