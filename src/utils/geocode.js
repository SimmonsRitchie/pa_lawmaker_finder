
const Nominatim = require('nominatim-geocoder')

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


const getCoords = (address) => {
  console.log("Converting address to coords..")
  
  const geocoder = new Nominatim()

  geocoder.search( address )
      .then((response) => {
          console.log(response)
          return response
      })
      .catch((error) => {
          console.log(error)
          return error
      })
}

export default getCoords