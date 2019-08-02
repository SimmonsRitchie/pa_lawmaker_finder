import React from "react";
import geolocate, {Geolocate} from './../utils/geolocate'

class InputAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div>
        <input></input>
        <button>Submit</button>
      </div>
    );
  }
}

export default InputBox2;
