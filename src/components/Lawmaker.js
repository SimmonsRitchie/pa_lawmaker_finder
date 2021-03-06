import React from "react";

const phoneLink = (phNumber, party) => {
  // make sure input not undefined and is string
  if (!(typeof phNumber === "string") || !phNumber) {
    return phNumber;
  }
  // make sure input is valid US phone number
  const pat = /(\+?1-?)?\d{3}-?\d{3}-?\d{3}/;
  if (pat.test(phNumber)) {
    const partyClass =
      party === "R" ? "lawmaker__republican-phone" : "lawmaker__democrat-phone";
    return (
      <a className={`${partyClass}`} href={`tel:+1-${phNumber}`}>
        {phNumber.trim()}
      </a>
    );
  }
  return phNumber;
};

const mailLink = (email, party) => {
  // make sure input not undefined and is string
  if (!(typeof email === "string") || !email) {
    return email;
  }
  // make sure input is valid email address
  const pat = /.+@.+\..+/;
  if (pat.test(email)) {
    const partyClass =
      party === "R" ? "lawmaker__republican-email" : "lawmaker__democrat-email";
    return (
      <div className="lawmaker__break-word-container">
        <a className={`${partyClass}`} href={`mailto:${email}`}>
          {email.trim()}
        </a>
      </div>
    );
  }
  return email;
};

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


    return (
      <div className="box lawmaker__container">
        <table className="table is-striped is-narrow is-hoverable is-fullwidth">
          <TableHead props={{position, district, first_name, last_name, party}} />
          <tbody className="is-size-7">
            {harrisburg_office_phone && (
              <TableRow
                name="Capitol (p)"
                value={phoneLink(harrisburg_office_phone, party)}
              />
            )}
            {district_office_phone && (
              <TableRow
                name="District (p)"
                value={phoneLink(district_office_phone, party)}
              />
            )}
            {email && <TableRow name="Email" value={mailLink(email, party)} />}
            {harrisburg_office_fax && (
              <TableRow
                name="Capitol (f)"
                value={harrisburg_office_fax}
              />
            )}
            {district_office_address && (
              <TableRow
                name="District Office Address"
                value={`${district_office_address}, ${city}, PA ${zip}`}
              />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const TableHead = ({props:{position, district, first_name, last_name, party}}) => {
  const chamber = position === "Sen." ? "Senate" : "House";
  const partyColorMain =
    party === "R" ? "lawmaker__republican" : "lawmaker__democrat";
  const partyColorSub =
    party === "R" ? "lawmaker__republican-sub" : "lawmaker__democrat-sub";
  return (
    <thead>
    <tr>
      <th colSpan="2" className={`lawmaker__th`}>
        <div className="lawmaker__th-container">
          <div className={`is-size-6 ${partyColorMain}`}>
            {position} {first_name} {last_name} ({party})
          </div>
          <div
            className={`has-text-grey-dark has-text-weight-light lawmaker__district ${partyColorSub}`}
          >
            {chamber} District {district}
          </div>
        </div>
      </th>
    </tr>
  </thead>
  )
}


const TableRow = ({ name, value }) => {
const valueFormatted = typeof value === 'string' ? value.trim() : value
return (  <tr>
    <td>{name}:</td>
    <td>{valueFormatted}</td>
  </tr>)
};



export default Lawmaker;
