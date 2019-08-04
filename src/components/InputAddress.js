import React from "react";
import {
  Container,
  Section,
  Form,
  Button,
  Columns
} from "react-bulma-components";
const { Input, Field, Control, Label } = Form;

class InputAddress extends React.Component {
  state = {
    address: "",
    city: "",
    county: "",
    zip: ""
  };

  onChange = e => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault()
    // We only expect addresses in Pennsylvania so we provide these address params
    const defaultVals = {state: "PA", country: "USA"}
    this.props.handleGeocode({...this.state, ...defaultVals})
  }

  render() {
    const { address, city, county, zip } = this.state;
    return (
      <div>
        <Container>
          <Field>
            <Label>Address:</Label>
            <Control>
              <Input
                onChange={this.onChange}
                name="address"
                type="text"
                placeholder="Your address"
                value={address}
              />
            </Control>
          </Field>
          <Field>
            <Label>City:</Label>
            <Control>
              <Input
                onChange={this.onChange}
                name="city"
                type="text"
                placeholder="Your city"
                value={city}
              />
            </Control>
          </Field>
          <Field>
            <Label>County:</Label>
            <Control>
              <Input
                onChange={this.onChange}
                name="county"
                type="text"
                placeholder="Your county"
                value={county}
              />
            </Control>
          </Field>
          <Field>
            <Label>Zipcode:</Label>
            <Control>
              <Input
                onChange={this.onChange}
                name="zip"
                type="number"
                placeholder="Your zipcode"
                value={zip}
              />
            </Control>
          </Field>
          <div className="form__buttonBox">
            <Button className={"button__primary"} onClick={this.props.handleBack}>&lt; Back</Button>
            <Button className={"button__primary"} onClick={this.handleSubmit}>Submit</Button>
          </div>
        </Container>
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
