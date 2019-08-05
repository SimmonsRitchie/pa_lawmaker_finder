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
    postalcode: ""
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
    const { address, city, county, postalcode } = this.state;
    return (
      <div className="form__container">
          <FormField label="Address" placeholder="Your address" inputType="text" inputName="address" inputValue={address} onChange={this.onChange}/>
          <FormField label="City" placeholder="Your city" inputType="text" inputName="city" inputValue={city} onChange={this.onChange}/>
          <FormField label="County" placeholder="Your county" inputType="text" inputName="county" inputValue={county} onChange={this.onChange}/>
          <FormField label="Zipcode" placeholder="Your zipcode" inputType="text" inputName="postalcode" inputValue={postalcode} onChange={this.onChange}/>
          <div className="form__buttonBox">
            <Button className={"button__primary"} onClick={this.props.handleBack}>&lt; Back</Button>
            <Button className={"button__primary"} onClick={this.handleSubmit}>Submit</Button>
          </div>
      </div>
    );
  }
}

export default InputAddress;


const FormField = ({label, placeholder, inputType, inputName, inputValue, onChange}) => (
  <Field>
  <Label>{label}:</Label>
  <Control>
    <Input
      onChange={onChange}
      name={inputName}
      type={inputType}
      placeholder={placeholder}
      value={inputValue}
      size="small"
      color="success"
    />
  </Control>
</Field>
)