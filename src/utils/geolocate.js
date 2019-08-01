  // GEOLOCATION 
const geolocate = () => {

    // Check if geolocation functionality is available to client
    // GEOLOCATION AVAILABLE:
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(

      // SUCCESS
      (position) => {
        const userLat = position.coords.latitude
        const userLong = position.coords.longitude
        console.log(position)
      }, 
      // ERROR
      (err) => {
        console.log(err)
      },
      // OPTIONS
      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 0
      })
    // GEOLOCATION UNAVAILABLE:
    } else {
      console.log("Geolocation is unavailable on your browser.")
    }
  }

export default geolocate