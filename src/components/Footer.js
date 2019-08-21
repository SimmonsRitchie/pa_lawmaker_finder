import React from 'react';
const Footer = () => {
  const spotlight = "https://www.spotlightpa.org/"
  return (
    <div>
        <div className="footer__container">
          <div className="is-size-7 has-text-grey">
            <p>
            <b>Source: </b>Pa. Legislative Data Processing Center.
            </p>
            <p>
              Created by Daniel Simmons-Ritchie, <a href={spotlight}>Spotlight PA</a>
            </p>
          </div>
          <div className="logo__container hide-for-smaller-than-iphone6">
            <a href={spotlight}><img className="logo" src="images/logo.png" /></a>
          </div>
        </div>
    </div>
)}


export default Footer