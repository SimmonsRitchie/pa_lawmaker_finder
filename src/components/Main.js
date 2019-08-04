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

const address1 = {
  street: "212 Kelker St",
  city: "Harrisburg",
  county: "Dauphin",
  state: "PA",
  country: "USA",
  postalcode: "17102"
};
const address2 = {
  street: null,
  city: "Harrisburg",
  county: "Dauphin",
  state: "PA",
  country: "USA",
  postalcode: null
};
// const result = getCoords(address2)

class Main extends React.Component {
  state = {
    houseDistrict: "",
    senateDistrict: "",
    message: "",
    loading: false,
    enableInputAddress: false,
    enableButtonBox: true
  };

  // Updates state to enable address forms to display
  setInputAddress = bool => {
    this.clearState();
    this.setState({ enableInputAddress: bool });
    this.setMessage("Enter your address:");
  };

  // Updates state to enable buttonBox to display
  setButtonBox = bool => {
    this.clearState();
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
      enableInputAddress: false,
      houseDistrict: "",
      senateDistrict: "",
      message: ""
    });
  };

  handleBack = () => {
    this.clearState();
    this.setButtonBox(true);
  };

  handleEnterAddress = e => {
    e.preventDefault();
    this.setButtonBox(false);
    this.setInputAddress(true);
  };

  // Determines user's districts based on their device's lat/long
  handleGeolocate = () => {
    this.clearState();
    this.setButtonBox(false);
    geolocate(this.setDistricts, this.setMessage, this.setLoader);
  };

  // Determines user's districts based on input address
  handleGeocode = address => {
    this.clearState();
    this.setButtonBox(false);
    geocode(address, this.setDistricts, this.setMessage, this.setLoader);
  };

  render() {
    return (
      <div className="container__main">
        <Header />
        {this.state.enableButtonBox && (
          <ButtonBox
            handleGeolocate={this.handleGeolocate}
            handleEnterAddress={this.handleEnterAddress}
          />
        )}
        {this.state.message && <MessageBox message={this.state.message} />}
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
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default Main;
