import React from "react";
import Button1 from './Button1'
import SuggestBox from './SuggestBox'

function validate(address, city, county, postalcode) {
  // true means invalid
  return {
    address: address.length === 0,
    city: city.length === 0,
    postalcode: postalcode.length === 0,
  };
}

class InputAddress extends React.Component {
  state = {
    address: "",
    city: "",
    postalcode: "",
    errorMsg: ""
  };

  componentDidUpdate() {
    // Because our app changes height based on displayed content, we 
    // update the iframe height after DOM elements have been updated.
    pymChild.sendHeight();
  }

  onChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    // Validation for zip: only accept number
    const pat = /\D/;
    if (name === 'postalcode' && pat.test(value)) {
      this.setState({errorMsg: "Please only use numbers for zipcode field."})
      return
    }
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.canBeSubmitted()) {
      this.setState({errorMsg: "Please complete all fields."})
      return;
    }

    // We only expect addresses in Pennsylvania so we provide these address params
    const defaultVals = { state: "PA", country: "USA" };
    this.props.handleGeocode({ ...this.state, ...defaultVals });
  };

  canBeSubmitted = () => {
    const errors = validate(this.state.address, this.state.city, this.state.county, this.state.postalcode);
    // checks if any fields in error obj are set to 'true'
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const { address, city, county, postalcode } = this.state;
    const errors = validate(this.state.address, this.state.city, this.state.county, this.state.postalcode);
    return (
      <div className="form__container">
        <div className="form__container-inner">
          <FormField
            label="Address"
            placeholder="Your address"
            inputType="text"
            inputName="address"
            inputValue={address}
            onChange={this.onChange}
            errors={errors}
          />
          <FormField
            label="City"
            placeholder="Your city"
            inputType="text"
            inputName="city"
            inputValue={city}
            onChange={this.onChange}
            errors={errors}
          />
          <FormField
            label="Zipcode"
            placeholder="Your zipcode"
            inputType="text"
            inputName="postalcode"
            inputValue={postalcode}
            onChange={this.onChange}
            errors={errors}
          />
        </div>
        {this.state.errorMsg && <SuggestBox message={this.state.errorMsg} error={true} />}
        <div className="form__buttonBox">
          <Button1 onClickEvt={this.props.handleBack} text="Back" back={true} />
          <Button1 onClickEvt={this.handleSubmit} text="Submit" />
        </div>
      </div>
    );
  }
}

export default InputAddress;

const FormField = ({
  label,
  placeholder,
  inputType,
  inputName,
  inputValue,
  onChange,
  errors
}) => {
  const colorClass = !errors[inputName] ? 'is-success' : null
  return (
    <div className="field">
    <label className="label">{label}:</label>
    <div className="control">
      <input
      className={`input ${colorClass}`}
      onChange={onChange}
      name={inputName}
      type={inputType}
      placeholder={placeholder}
      value={inputValue}
      />
    </div>
    </div>
)}

