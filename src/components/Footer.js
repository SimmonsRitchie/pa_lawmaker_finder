import React from 'react';
import {Heading, Content } from 'react-bulma-components'
const Footer = () => (
    <div className="container__footer">
        <Content size="small">
          <p className={"footer__text footer__margin-bottom"}>
          <b>Source: </b>Pa. Legislative Data Processing Center.
          </p>
          <p className={"footer__text"}>
            Created by Daniel Simmons-Ritchie, Spotlight PA
          </p>
        </Content>
    </div>
)

// <Heading className={"footer__text"} subtitle size={6}>
// <b>Source: </b>Pa. Legislative Data Processing Center.
// </Heading>
// <Heading className={"footer__text"} subtitle size={6}>
//   Created by Daniel Simmons-Ritchie, Spotlight PA
// </Heading>

export default Footer