import React from "react";



class InputAddress extends React.Component {
  state = {
    address: '',
    city: '',
    zip: '',
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

export default InputAddress;

// constructor(props) {
//   super(props);
//   this.state = {
//     value: ""
//   };
// }