import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ButtonBox from "./ButtonBox";
import LawmakerBox from "./LawmakerBox";
import MessageBox from "./MessageBox";
import geolocate from "../utils/geolocate";
import geocode from "./../utils/geocode";
import InputAddress from "./InputAddress";
import getCoords from "../utils/geocode";
import Loader from "./Loader";


class Main extends React.Component {
  state = {
    houseDistrict: "",
    senateDistrict: "",
    message: "Find out who represents you in the Pa. Legislature:",
    loading: false,
    enableInputAddress: false,
    enableButtonBox: true,
    searchMethod: null,
  };

  // Updates state to enable address forms to display
  setInputAddress = bool => {
    this.clearState();
    this.setState({ enableInputAddress: bool });
    this.setMessage("Enter your address:");
  };

  // Updates state to enable buttonBox to display
  setButtonBox = bool => {
    this.setState({ enableButtonBox: bool });
  };

  // Updates state with user's house and senate districts
  setDistricts = (houseDistrict, senateDistrict) => {
    this.setState({
      houseDistrict,
      senateDistrict
    });
  };

  // Updates action/error message displayed to user
  setMessage = message => {
    this.setState({ message });
  };

  // Updates loading status
  setLoader = bool => {
    this.setState({ loading: bool });
  };

  // resets to page load default except for enableButtonBox
  clearState = () => {
    this.setState({
      houseDistrict: "",
      senateDistrict: "",
      message: "Find out who represents you in the Pa. Legislature:",
      loading: false,
      enableInputAddress: false,
      searchMethod: null,
    })
  };

 // Handles button press: Returns to page default load display
  handleBack = (e) => {
    e.preventDefault();
    this.clearState();
    this.setButtonBox(true);
  };

  // Handles button press: Makes input form appear to enter address
  handleEnterAddress = (e) => {
    e.preventDefault();
    this.setButtonBox(false);
    this.setInputAddress(true);
  };

  // Determines user's districts based on their device's lat/long
  handleGeolocate = (e) => {
    e.preventDefault();
    this.clearState();
    this.setButtonBox(false);
    this.setState({searchMethod: "geolocate"})
    geolocate(this.setDistricts, this.setMessage, this.setLoader);
  };

  // Determines user's districts based on input address
  handleGeocode = address => {
    this.clearState();
    this.setButtonBox(false);
    this.setState({searchMethod: "geocode"})
    geocode(address, this.setDistricts, this.setMessage, this.setLoader);
  };

  render() {
    return (
      <div className="container__main">
        <Header />
        {this.state.message && <MessageBox message={this.state.message} />}
        {this.state.enableButtonBox && (
          <ButtonBox
            handleGeolocate={this.handleGeolocate}
            handleEnterAddress={this.handleEnterAddress}
          />
        )}
        <Loader display={this.state.loading} />
        {this.state.enableInputAddress && (
          <InputAddress 
            handleGeocode={this.handleGeocode} 
            handleBack={this.handleBack}
          />
        )}
        {(this.state.houseDistrict || this.state.senateDistrict) && (
          <LawmakerBox
            houseDistrict={this.state.houseDistrict}
            senateDistrict={this.state.senateDistrict}
            handleBack={this.handleBack}
            searchMethod={this.state.searchMethod}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default Main;
