import React from "react";

function phoneLink (phNumber) {
  // make sure input not undefined and is string
  if (!(typeof phNumber === 'string') || !phNumber) {
    return phNumber
  }
  // make sure input is valid US phone number
  const pat = /(\+?1-?)?\d{3}-?\d{3}-?\d{3}/
  if (pat.test(phNumber)) {
    return (<a href={`tel:+1-${phNumber}`}>{phNumber}</a>)
  }
  return phNumber
}


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
    return (
      <div className="box lawmaker__container">
        <div className="">
          <h2>
            {position} {first_name} {last_name} ({party}, {chamberDistrict} {district})
          </h2>
          <table className="table is-striped">
            <tbody className="is-size-7">
              {harrisburg_office_phone && <TableRow name="Capitol Ph" value={phoneLink(harrisburg_office_phone)} />}
              {district_office_phone && <TableRow name="District Ph" value={phoneLink(district_office_phone)} />}
              {email && <TableRow name="Email" value={<a href={"mailto:" + email}>{email}</a>} />}
              {harrisburg_office_fax && <TableRow name="Harrisburg Office Fax" value={harrisburg_office_fax} />}
              {district_office_address && <TableRow name="District Office Address" value={`${district_office_address}, ${city}, PA ${zip}`} />}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// <div className="lawmaker__container">
// <div className={`lawmaker__table-container`}>


export default Lawmaker;

const TableRow = ({name, value}) => (
  <tr>
    <td><b>{name}:</b></td> <td>{value}</td>
  </tr>
  )

