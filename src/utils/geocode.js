
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

const getCoords = (address, setDistricts, setMessage, setLoader, setButtonBox) => {
  setLoader(true)
  setMessage(msg.SEARCHING_FOR_LAWMAKERS, {italic: true})
  const geocoder = new Nominatim({
    secure: true, // enables ssl
  })
  geocoder.search( address )
      .then((response) => {
        setLoader(false)
        // Geocoder returns an array of the best matches, we take the first.
        const bestMatch = response[0]
          const inputLat = bestMatch.lat
          const inputLng = bestMatch.lon
          const houseDistrict = checkPointWithinGeography({inputLat, inputLng, bounds:"house"})
          const senDistrict = checkPointWithinGeography({inputLat, inputLng, bounds:"senate"})
          if (senDistrict == undefined || houseDistrict == undefined) {
            setMessage(msg.LOCATION_NOT_IN_DISTRICTS)
            setButtonBox(true)
          } else {
            setDistricts( houseDistrict, senDistrict)
            setMessage(msg.SUCCESS_GEOCODE)
          }
          return
      })
      .catch((error) => {
          setLoader(false)
          setMessage(msg.LOCATION_NOT_FOUND)
          setButtonBox(true)
          return
      })
}

export default getCoords