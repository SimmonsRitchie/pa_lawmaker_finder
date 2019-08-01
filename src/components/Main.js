import React from 'react';
import Header from './Header'
import Footer from './Footer'
import InputBox from './InputBox'
import DisplayBox from './DisplayBox'
import towns from '../../public/static/towns.json';
import geolocate from '../utils/geolocate'

console.log(towns)

geolocate()


class Main extends React.Component {
  state = {
    houseDistrict: "",
    senateDistrict: ""
  };

  setDistricts = (submittedTown) => {
    // Set house and senate districts based on town
    console.log(submittedTown)
    const matchingTowns = towns.filter(town => town.municipality === submittedTown)
    const matchingTown = matchingTowns[0]
    console.log(matchingTown)
    const houseDistrict = matchingTown.house_district
    const senateDistrict = matchingTown.senate_district
    this.setState({houseDistrict})
    this.setState({senateDistrict})
  }

  render() {
    return (
      <div className="container__main">
      <Header />
      <InputBox towns={towns} setDistricts={this.setDistricts}/>
      <DisplayBox houseDistrict={this.state.houseDistrict} />
      <Footer />
    </div>
    )
  }
}

export default Main
