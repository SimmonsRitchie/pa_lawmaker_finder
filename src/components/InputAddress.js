import React from "react";
import ButtonSecondary from './ButtonSecondary'
import ButtonSubmit from './ButtonSubmit'
import SuggestBox from './SuggestBox'
import { msg } from '../constants/displayMsg'
import {pymSendHeight} from '../utils/handlePym'

function validate({street, city}) {
  // required fields - can't be empty
  return {
    street: street.length === 0,
    city: city.length === 0,
  };
}

class InputAddress extends React.Component {
  state = {
    location: {
      street: "",
      city: "",
      postalcode: "",
    },
    errorMsg: "",
    touched: {
      street: false,
      city: false,
      postalcode: false,
    },
  };

  componentDidUpdate() {
    // Because our app changes height based on displayed content, we 
    // update the iframe height after DOM elements have been updated.
    pymSendHeight()
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
        this.setState({errorMsg: msg.ENTER_ONLY_NUMBERS_FOR_ZIPCODE})
        return
      }
    }
    this.setState( {
      location: { ...this.state.location, [name]: value}
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.canBeSubmitted()) {
      // We set all states to touched so that error/success styling appears on inputs
      const allTouched = {}
      Object.keys(this.state.touched).forEach( field => {
        allTouched[field] = true
      })
      this.setState({
        touched: {...allTouched}
      })
      this.setState({errorMsg: msg.ENTER_REQUIRED_FIELDS})
      return;
    }
    // We only expect streetes in Pennsylvania so we provide these street params
    const defaultVals = { state: "PA", country: "USA" };
    this.props.handleGeocode({ ...this.state.location, ...defaultVals });
  };

  canBeSubmitted = () => {
    const errors = validate(this.state.location);
    // checks if any fields in error obj are set to 'true'
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const { street: street, city, postalcode } = this.state.location;
    const errors = validate(this.state.location);
    return (
      <div className="form__container">
        <div className="form__container-inner">
          <form onSubmit={this.handleSubmit}>
            <div className="form__container-input">
              <FormField
                label="Address"
                placeholder="Your address"
                inputType="text"
                inputName="street"
                inputValue={street}
                onChange={this.onChange}
                errors={errors}
                touched={this.state.touched}
                handleBlur={this.handleBlur}
              />
              <FormField
                label="Your town/city"
                placeholder="Your town/city"
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
                addExtaField={"PA"}
              />
              {this.state.errorMsg && <SuggestBox message={this.state.errorMsg} error={true} />}
            </div>
          <div>
              <div className="field is-grouped is-grouped-centered">
                <div className="control">
                  <ButtonSubmit text="Submit"/>
                </div>
                <div className="control">
                  <ButtonSecondary onClickEvt={this.props.handleBack} text="Cancel"/>
                </div>
              </div>
          </div>
        </form>
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
  errors,
  touched,
  handleBlur,
  addExtaField = false
}) => {

  // Success style: input has had focus AND no errors detected
  const successClass = touched[inputName] && !errors[inputName]  ? 'is-success' : null
  // Error style: input has had focus AND error detected
  const errorClass = touched[inputName] && errors[inputName] ? 'is-danger' : null

  const addOnClass = addExtaField ? "has-addons" : ""

  return (
    <div className={`field`}>
    <label className="label">{label}:</label>
    <div className={`field ${addOnClass}`}>
    {addExtaField && 
      <div className="control">
        <div className="button is-static">{addExtaField}</div>
      </div>
    }
      <div className="control is-expanded">
        <input
        className={`input ${successClass} ${errorClass}`}
        onChange={onChange}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        value={inputValue}
        onBlur={() => handleBlur(inputName)}
        />
      </div>

    </div>
    </div>
)}

