import React from 'react';
import {Heading} from 'react-bulma-components'

const Header = () => (
    <div className="container__header">
      <Heading size={4} weight={'semibold'} style={{textAlign: 'center'}}>Contact your local lawmakers</Heading>
    </div>
)

// <h3 className="text__title">Contact your lawmaker</h3>
// <p className="text__subtitle">Find out who represents you in the Pa. Legislature.</p>


export default Header