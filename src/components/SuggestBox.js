import React from 'react';
import {pymSendHeight} from '../utils/handlePym'

class SuggestBox extends React.Component {
  // componentDidMount() {
  //   pymSendHeight()
  // }

  render() {
  const {message, error=null} = this.props
  const errorClass = error ? 'has-text-danger' : null;
  return (
    <div className='suggestBox__container'>
      <p className={`has-text-centered ${errorClass}`}>
        {message}
      </p>
    </div>
  )}

  }


export default SuggestBox
