import React from 'react';
import {ClipLoader} from 'halogenium'

const Loader = ({display = true}) => (
    <div>
      {display &&
        <div className="loader__container">
        <ClipLoader color="#26A65B" size="30px" margin="4px"/>
        </div>
      }
    </div>
  )

export default Loader