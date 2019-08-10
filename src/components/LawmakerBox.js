import React from 'react';
import sens from './../../public/static/sen_contacts.json'
import reps from './../../public/static/rep_contacts.json'
import Lawmaker from './Lawmaker'
import SuggestBox from './SuggestBox';
import Button1 from './Button1'

class LawmakerBox extends React.Component {
  state = {
    "hello": null
  };

  render() {

    // Get senator
    const sen = sens.filter(sen => sen.district == this.props.senateDistrict)[0]
    const rep = reps.filter(rep => rep.district == this.props.houseDistrict)[0]
    return (
      <div className="lawmakerBox__container">
        {sen && <Lawmaker {...sen} />}
        {rep && <Lawmaker {...rep} />}
        {this.props.searchMethod === "geolocate" && 
          <SuggestBox 
          message="Not your lawmakers? Try searching again with your address."
        />}
        <Button1 onClickEvt={this.props.handleBack} text="< Back"/>
      </div>
    )
  }
}

export default LawmakerBox