import React from 'react';
import BeatLoader from "react-spinners/ClipLoader";

const Loader = ({display = true}) => {
  const defaultGreen = "#26A65B"
  return (
    <div>
      {display &&
        <div className="loader__container">
        <BeatLoader
          size={30}
          color={defaultGreen}
          loading={true}
        />
      </div>
      }
    </div>
  )
}


export default Loader