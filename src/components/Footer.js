import React from 'react';
import {Heading} from 'react-bulma-components'
const Footer = () => (
    <div className="container__footer">
      <Heading className={"footer__text"} subtitle size={6}>
      <b>Source: </b>Pa. Legislative Data Processing Center.
      </Heading>
      <Heading className={"footer__text"} subtitle size={6}>
        Created by Daniel Simmons-Ritchie, Spotlight PA
      </Heading>
    </div>
)

export default Footer