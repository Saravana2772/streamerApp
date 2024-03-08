import React from 'react'
import SpinnerGif from './SpinnerGif.gif'
import './Spinner.css';

function Spinner() {
  return (
    <div className='MySpinner'>
      <img className='Spinner-img' src={SpinnerGif} />
    </div>
  )
}

export default Spinner
