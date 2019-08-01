import React from 'react';
import Header from './Header'
import Footer from './Footer'
import InputBox from './InputBox'
import DisplayBox from './DisplayBox'
import towns from '../../public/static/towns.json';


class Main extends React.Component {
  state = {
    houseDistict: undefined,
    senateDistrict: undefined
  };

  setDistricts = (submittedTown) => {
    // Set house and senate districts based on town
    console.log(submittedTown)
    const matchingTowns = towns.towns.filter(town => town.name === submittedTown)
    const matchingTown = matchingTowns[0]
    console.log(matchingTown)
    const houseD = matchingTown.house_district
    console.log(houseD)
    // this.setState({houseDistict: matchingTown[]})
    // console.log(matchingTown)
  }

  render() {
    return (
      <div className="container__main">
      <Header />
      <InputBox towns={towns} setDistricts={this.setDistricts}/>
      <DisplayBox />
      <Footer />
    </div>
    )
  }
}

export default Main
