import React from "react";
import { Table, Heading, Tile } from "react-bulma-components";

class Lawmaker extends React.Component {
  render() {
    const {
      district,
      position,
      first_name,
      last_name,
      party,
      harrisburg_office_phone,
      district_office_phone,
      district_office_address,
      city,
      zip,
      email
    } = this.props;

    const chamberDistrict = position === "Sen." ? "SD" : "HD";

    return (
      <div className="lawmaker__container">
        <div className="lawmaker__table-container">
          <Heading subtitle size={6} className={"lawmaker__name"} weight={'semibold'}>
            {position} {first_name} {last_name} ({party}, {chamberDistrict} {district})
          </Heading>
          <Table size={"fullwidth"} style={{fontSize: "12px"}}>
            <tbody>
              <tr>
                <td>Harrisburg Ph:</td>
                <td>{harrisburg_office_phone}</td>
              </tr>
              <tr>
                <td>District Ph:</td>
                <td>{district_office_phone}</td>
              </tr>
              {email && (
                <tr>
                  <td>Email:</td>
                  <td>{email}</td>
                </tr>
              )}
              <tr>
                <td>Office Ph:</td>
                <td>{harrisburg_office_phone}</td>
              </tr>
              <tr>
                <td>Office address:</td>
                <td>
                  {district_office_address}, {city} {zip}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Lawmaker;
