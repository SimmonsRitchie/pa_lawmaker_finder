import React from 'react';
import sens from './../../public/static/sen_contacts.json'
import reps from './../../public/static/rep_contacts.json'
import Lawmaker from './Lawmaker'
import SuggestBox from './SuggestBox';
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import { msg } from '../constants/displayMsg'

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
        <div className="lawmakerBox__container-inner">
          {sen && <Lawmaker {...sen} />}
          {rep && <Lawmaker {...rep} />}
          {this.props.searchMethod === "geolocate" && 
            <SuggestBox 
            message={msg.NOT_YOUR_LAWMAKER_TRY_ADDRESS}
          />}
        </div>
          {this.props.searchMethod === "geolocate" && 
          <div className="buttons">
          <ButtonPrimary onClickEvt={this.props.handleEnterAddress} text="Use address"/>
          <ButtonSecondary onClickEvt={this.props.handleBack} text="Back"/>
          </div>
        }
        {this.props.searchMethod === "geocode" && 
        <div className="buttons">
        <ButtonPrimary onClickEvt={(e) => {
          // for large screens we send user back to 'use address' page instead of app loading page.
          // this is because we've disabled 'use current address' option for small screens so there's
          // no need to send user back to a page where they only have one option.
          if (window.innerWidth < 550) {
            this.props.handleBack(e)
          } else {
            this.props.handleEnterAddress(e)
          }}
        } text="Search again"/>
        </div>
      }
      </div>
    )
  }
}

export default LawmakerBox