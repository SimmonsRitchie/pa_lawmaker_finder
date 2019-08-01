import React from "react";
import ReactAutocomplete from "react-autocomplete";

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const townNames = this.props.towns.towns.map(town => town.name)
    if (townNames.includes(this.state.value)) {
      this.props.setDistricts(this.state.value)
    } else {
      console.log("not a Pa town - invalid submission")
    }
  }

  render() {
    return (
      <div className="container__input">
        <div className="autocomplete__wrapper">
          <ReactAutocomplete
            inputProps={{ style: { width: "100%", height: "30px" } }}
            wrapperStyle={{ maxWidth: 200, height: "30px", margin: "10px" }}
            items={this.props.towns.towns}
            shouldItemRender={(item, value) =>
              item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
            }
            renderMenu={(items, value) => (
              <div className="autocomplete__menu">
                {value === "" ? "" : items.slice(0, 3)}
              </div>
            )}
            getItemValue={item => item.name}
            renderItem={(item, highlighted) => (
              <div
                key={item.name}
                style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
              >
                {item.name}
              </div>
            )}
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onSelect={value => this.setState({ value })}
          />
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default InputBox;
