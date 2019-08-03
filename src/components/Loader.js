import React from 'react';
import {PulseLoader} from 'halogenium'

const Loader = (props) => (
    <div className="loader__container">
      {props.display &&
        <PulseLoader color="#26A65B" size="30px" margin="4px"/>
      }
    </div>
)

export default Loader