
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

const getCoords = (location, setDistricts, setMessage, setLoader, setButtonBox) => {
  const {street, city, postalcode, state} = location
  const inputLocation = `${street}, ${city} ${postalcode} ${state}`
  setLoader(true)
  setMessage(msg.SEARCHING_FOR_LAWMAKERS, {italic: true})
  const geocoder = new Nominatim({
    secure: true, // enables ssl
  })
  geocoder.search( location )
      .then((response) => {
        setLoader(false)
        // Geocoder returns an array of the best matches, we take the first.
        const bestMatch = response[0]
          const inputLat = bestMatch.lat
          const inputLng = bestMatch.lon
          const houseDistrict = checkPointWithinGeography({inputLat, inputLng, bounds:"house"})
          const senDistrict = checkPointWithinGeography({inputLat, inputLng, bounds:"senate"})
          if (senDistrict == undefined || houseDistrict == undefined) {
            setMessage(msg.LOCATION_OUTSIDE_DISTRICTS_GEOCODE, {icon:"exclamation"})
            setButtonBox(true)
          } else {
            setDistricts( houseDistrict, senDistrict)
            setMessage(`Based on your address (${inputLocation}), your lawmakers are:`, {icon:"success"})
          }
          return
      })
      .catch((error) => {
          setLoader(false)
          setMessage(`Sorry, we couldn't locate <b>${inputLocation}</b>`, {icon:"exclamation"})
          setButtonBox(true)
          return
      })
}

export default getCoords