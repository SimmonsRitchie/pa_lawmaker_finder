import React from 'react';
import Header from './Header'
import Footer from './Footer'
import ButtonBox from './ButtonBox'
import LawmakerBox from './LawmakerBox'
import MessageBox from './MessageBox'
import geolocate from '../utils/geolocate'
import InputAddress from './InputAddress'
import getCoords from '../utils/geocode'
import Loader from './Loader'

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
    message: "",
    loading: false,
    enableInputAddress: false
  };

  // Updates state to enable address forms to display
  setInputAddress = (bool) => {
    this.setState({ enableInputAddress: bool})
    console.log("input address", bool)
  }

  // Updates state with user's house and senate districts
  setDistricts = (houseDistrict, senateDistrict) => {
    this.setState({
      houseDistrict,
      senateDistrict,
    })
  }

  // Updates action/error message displayed to user
  setMessage = (message) => {
    this.setState({message})
  }

  // Updates loading status
  setLoader = (bool) => {
    this.setState({loading: bool})
  }

  // Determines user's districts based on their device's lat/long
  handleGeolocate = () => {
    this.setInputAddress(false)
    geolocate(this.setDistricts, this.setMessage, this.setLoader)
  }

  render() {
    return (
      <div className="container__main">
      <Header />
      <ButtonBox 
        handleGeolocate={this.handleGeolocate} 
        setInputAddress={this.setInputAddress}
      />
      <MessageBox message={this.state.message}/>
      <Loader display={this.state.loading}/>
      {this.state.enableInputAddress && <InputAddress />}
      {(this.state.houseDistrict || this.state.senateDistrict) && 
        <LawmakerBox 
        houseDistrict={this.state.houseDistrict} 
        senateDistrict={this.state.senateDistrict} 
      />}
      <Footer/>
    </div>
    )
  }
}

export default Main
