import React from 'react'
import "./Videorow.css";

function Videorow({views, subs, desc, time, channel, image, title}) {
  return (
    <div className='Videorow'>
      <img src={image} />
      <div className='video-text'>
        <h3>{title}</h3>
        <p>{channel}- {subs} Subscribers- {views} Views- {time}</p>
        <p>{desc}</p>
      </div>
    </div>

  )
}

export default Videorow
