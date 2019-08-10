import React from "react";

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
      harrisburg_office_fax,
      district_office_address,
      city,
      zip,
      email
    } = this.props;

    const chamberDistrict = position === "Sen." ? "SD" : "HD";
    const partyClass = party === "R" ? "lawmaker__table-container--R" : "lawmaker__table-container--D"
    // TODO: Add email links to email row
    return (
      <div className="lawmaker__container">
        <div className={`lawmaker__table-container`}>
          <h2>
            {position} {first_name} {last_name} ({party}, {chamberDistrict} {district})
          </h2>
          <table size={"fullwidth"} style={{fontSize: "12px"}}>
            <tbody>
              {harrisburg_office_phone && <TableRow name="Capitol Ph" value={harrisburg_office_phone} />}
              {district_office_phone && <TableRow name="District Ph" value={district_office_phone} />}
              {email && <TableRow name="Email" value={email} />}
              {harrisburg_office_fax && <TableRow name="Harrisburg Office Fax" value={harrisburg_office_fax} />}
              {district_office_address && <TableRow name="District Office Address" value={`${district_office_address}, ${city}, PA ${zip}`} />}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Lawmaker;

const TableRow = ({name, value}) => (
  <tr>
    <td>{name}:</td>
    <td>{value}</td>
  </tr>
  )

