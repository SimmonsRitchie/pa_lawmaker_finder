import React from 'react';

const Lawmaker = ({
  district,
  position,
  first_name,
  last_name,
  party,
  harrisburg_office_phone,
  district_office_phone,
  district_office_address,
  email
}) => (
    <div className="lawmaker__container">
      <div className="lawmaker__district">District {district}</div>
      <div className="lawmaker__table-container">
        <div className="lawmnaker__name">{position} {first_name} {last_name} ({party})</div>
        <table className="lawmaker__table">
          <tbody>
            <tr>
              <td>Harrisburg Ph:</td>
              <td>{harrisburg_office_phone}</td>
            </tr>
            <tr>
              <td>District Ph:</td>
              <td>{district_office_phone}</td>
            </tr>
  {email && <tr>
              <td>Email:</td>
              <td>{email}</td>
            </tr>}
            <tr>
              <td>Office Ph:</td>
              <td>{harrisburg_office_phone}</td>
            </tr>
            <tr>
              <td>Office address:</td>
              <td>{district_office_address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )

export default Lawmaker

// <p>Phone: {phone}</p>
// <p>Email: {email}</p>

// <span>Harrisburg Ph:{harrisburg_office_phone}</span>
// <span>District Ph:{harrisburg_office_phone}</span>
// <span>Email:{harrisburg_office_phone}</span>
// <span>District Address:{harrisburg_office_phone}</span>