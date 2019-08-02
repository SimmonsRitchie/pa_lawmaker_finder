import React from 'react';

const DisplayBox = (props) => (
    <div className="container__display-box">
      <p>{props.houseDistrict}</p>
      <p>{props.senateDistrict}</p>
    </div>
)


export default DisplayBox