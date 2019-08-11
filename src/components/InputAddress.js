import React from "react";
import ButtonCancel from './ButtonCancel'
import ButtonSubmit from './ButtonSubmit'
import SuggestBox from './SuggestBox'

function validate(address, city, postalcode) {
  // true means invalidß
  return {
    address: address.length === 0,
    city: city.length === 0,
    // postalcode: postalcode.length === 0,
  };
}

class InputAddress extends React.Component {
  state = {
    address: "",
    city: "",
    postalcode: "",
    errorMsg: "",
    touched: {
      address: false,
      city: false,
      postalcode: false,
    },
  };

  componentDidUpdate() {
    // Because our app changes height based on displayed content, we 
    // update the iframe height after DOM elements have been updated.
    pymChild.sendHeight();
  }

  handleBlur = (field) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  onChange = e => {
    this.setState({errorMsg: ""}) // clear error message
    const value = e.target.value;
    const name = e.target.name;
    // Validation for zip: only accept number, must be < 5 char
    const pat = /\D/;
    if (name === 'postalcode') {
      if (value.length > 5) {
        return
      }
      if (pat.test(value)) {
        this.setState({errorMsg: "Please only use numbers for zipcode field."})
        return
      }
    }
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    console.log("submitting...")
    e.preventDefault();
    if (!this.canBeSubmitted()) {
      this.setState({errorMsg: "Please complete address and city."})
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
    const errors = validate(this.state.address, this.state.city, this.state.postalcode);
    return (
      <div className="form__container">
        <div className="form__container-inner">
          <form onSubmit={this.handleSubmit}>
            <FormField
              label="Address"
              placeholder="Your address"
              inputType="text"
              inputName="address"
              inputValue={address}
              onChange={this.onChange}
              errors={errors}
              touched={this.state.touched}
              handleBlur={this.handleBlur}
            />
            <FormField
              label="City"
              placeholder="Your city"
              inputType="text"
              inputName="city"
              inputValue={city}
              onChange={this.onChange}
              errors={errors}
              touched={this.state.touched}
              handleBlur={this.handleBlur}
            />
            <FormField
              label="Zipcode"
              placeholder="Your zipcode"
              inputType="text"
              inputName="postalcode"
              inputValue={postalcode}
              onChange={this.onChange}
              errors={errors}
              touched={this.state.touched}
              handleBlur={this.handleBlur}
            />
            {this.state.errorMsg && <SuggestBox message={this.state.errorMsg} error={true} />}
          <div>
              <div className="field is-grouped is-grouped-centered">
                <div className="control">
                  <ButtonSubmit text="Submit"/>
                </div>
                <div className="control">
                  <ButtonCancel onClickEvt={this.props.handleBack} text="Cancel"/>
                </div>
              </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

// <div className="control">
// <Button2 text="Submit" />
// </div>
// 

export default InputAddress;

const FormField = ({
  label,
  placeholder,
  inputType,
  inputName,
  inputValue,
  onChange,
  errors,
  touched,
  handleBlur
}) => {

  const colorClass = !errors[inputName] && touched[inputName] ? 'is-success' : null

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
      onBlur={() => handleBlur(inputName)}
      />
    </div>
    </div>
)}

