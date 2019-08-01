import React from "react";
import ReactAutocomplete from "react-autocomplete";

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      town: "",
      value: ""
    };
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default InputBox;
