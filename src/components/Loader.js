import React from 'react';
import {ClipLoader} from 'halogenium'

const Loader = ({display = true}) => (
    <div className="loader__container">
      {display &&
        <ClipLoader color="#26A65B" size="30px" margin="4px"/>
      }
    </div>
  )

export default Loader