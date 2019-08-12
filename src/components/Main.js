import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ButtonBox from "./ButtonBox";
import LawmakerBox from "./LawmakerBox";
import MessageBox from "./MessageBox";
import geolocate from "../utils/geolocate";
import geocode from "./../utils/geocode";
import InputAddress from "./InputAddress";
import Loader from "./Loader";
import {msg} from '../constants/displayMsg'

/*
TODO: Adjust pym so that when height changes, we are oriented to top of app
TODO: Hide 'use current location' button when screen width < 500px
TODO: Expand width to 772px
TODO: Add 'State: PA' button to field
*/

class Main extends React.Component {
  state = {
    houseDistrict: "",
    senateDistrict: "",
    message: {
      content: "Find out who represents you in the Pa. Legislature:",
      italic: false
    },
    loading: false,
    enableInputAddress: false,
    enableButtonBox: true,
    searchMethod: null,
  };

  componentDidUpdate() {
    // Because our app changes height based on displayed content, we 
    // update the iframe height after DOM elements have been updated.
    pymChild.sendHeight();
  }

  // Updates state to enable address forms to display
  setInputAddress = bool => {
    this.clearState();
    this.setState({ enableInputAddress: bool });
    this.setMessage(msg.INPUT_YOUR_ADDRESS);
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
  setMessage = (content="",{italic=false}={}) => {
    this.setState({ message: {
      content,
      italic
    } });
  };

  // Determines whether loading image is visible
  setLoader = bool => {
    this.setState({ loading: bool });
  };

  // resets all state to defaults except for enableButtonBox
  clearState = () => {
    this.setState({
      houseDistrict: "",
      senateDistrict: "",
      message: {
        content: "Find out who represents you in the Pa. Legislature:",
        italic: false
      },
      loading: false,
      enableInputAddress: false,
      searchMethod: null,
    })
  };

 // Handles button press: Returns app to apppearance on initial load
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
    geolocate(this.setDistricts, this.setMessage, this.setLoader, this.setButtonBox);
  };

  // Determines user's districts based on input address
  handleGeocode = address => {
    this.clearState();
    this.setButtonBox(false);
    this.setState({searchMethod: "geocode"})
    geocode(address, this.setDistricts, this.setMessage, this.setLoader, this.setButtonBox);
  };

  render() {
    return (
      <div className="container__main">
        <Header />
        {this.state.message && <MessageBox content={this.state.message.content} italic={this.state.message.italic} />}
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
            handleEnterAddress={this.handleEnterAddress}
            searchMethod={this.state.searchMethod}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default Main;
