import React from 'react';
import Header from './Header'
import Footer from './Footer'
import ButtonBox from './ButtonBox'
import LawmakerBox from './LawmakerBox'
import MessageBox from './MessageBox'
import geolocate from '../utils/geolocate'
import getCoords from '../utils/geocode'

const address1 = {
  street:"212 Kelker St", 
  city:"Harrisburg" ,
  county: "Dauphin",
  state: "PA", 
  country:"USA", 
  postalcode:"17102"
}
const address2 = {
  street:null, 
  city:"Harrisburg" ,
  county: "Dauphin",
  state: "PA", 
  country:"USA", 
  postalcode:null
}
// const result = getCoords(address2)


class Main extends React.Component {
  state = {
    houseDistrict: "",
    senateDistrict: "",
    message: ""
  };

  handleGeolocate = () => {
    geolocate(this.setDistricts, this.setMessage)
  }

  setDistricts = (houseDistrict, senateDistrict) => {
    this.setState({
      houseDistrict,
      senateDistrict,
    })
  }

  setMessage = (message) => {
    this.setState({message})
  }

  render() {
    return (
      <div className="container__main">
      <Header />
      <ButtonBox handleGeolocate={this.handleGeolocate}/>
      <MessageBox message={this.state.message}/>
      <LawmakerBox 
        houseDistrict={this.state.houseDistrict} 
        senateDistrict={this.state.senateDistrict} 
      />
      <Footer/>
    </div>
    )
  }
}

export default Main
