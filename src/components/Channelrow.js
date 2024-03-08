import React from 'react'
import "./Channelrow.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Channelrow({
    image, 
    channel, 
    subs, 
    noOfVideo, 
    desc, 
    verified,
}) {
  return (
    <div className='channelrow'>
      <div className='channel-owner'>
        <img className='channel-logo' alt={channel} src={image} />
      </div>
      <div className='channel-text'>
        <h4>{channel} {verified && <CheckCircleOutlineIcon/>}</h4>
        <p>{subs} subscriber - {noOfVideo} video</p>
        <p>{desc}</p>
      </div>
    </div>
  )
}

// export default Channelrow
