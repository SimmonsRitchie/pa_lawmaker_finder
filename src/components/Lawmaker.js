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
      harrisburg_office_fax,
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
              {harrisburg_office_phone && <TableRow name="Harrisburg Ph" value={harrisburg_office_phone} />}
              {district_office_phone && <TableRow name="District Ph" value={district_office_phone} />}
              {email && <TableRow name="Email" value={email} />}
              {harrisburg_office_fax && <TableRow name="Harrisburg Office Fax" value={harrisburg_office_fax} />}
              {district_office_address && <TableRow name="District Office Address" value={district_office_address} />}
            </tbody>
          </Table>
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


  // <Table size={"fullwidth"} style={{fontSize: "12px"}}>
  //           <tbody>
  //             <tr>
  //               <td>Harrisburg Ph:</td>
  //               <td>{harrisburg_office_phone}</td>
  //             </tr>
  //             <tr>
  //               <td>District Ph:</td>
  //               <td>{district_office_phone}</td>
  //             </tr>
  //             {email && (
  //               <tr>
  //                 <td>Email:</td>
  //                 <td>{email}</td>
  //               </tr>
  //             )}
  //             <tr>
  //               <td>Office Fax:</td>
  //               <td>{harrisburg_office_fax}</td>
  //             </tr>
  //             <tr>
  //               <td>District Office Address:</td>
  //               <td>
  //                 {district_office_address}, {city} {zip}
  //               </td>
  //             </tr>
  //           </tbody>
  //         </Table>