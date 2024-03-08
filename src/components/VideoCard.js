import React, {useState, useEffect} from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './VideoCard.css';
import {Link} from 'react-router-dom'
import moment from 'moment';

// function VideoCard({image, title, channel, views, timestamp, channel_img}) {

const VideoCard = ({contentDetails, id, thumbnail, channelName, title, timestamp, onVideoClick}) => {

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond]= useState(0);
  // console.log(`${image} ${title} ${channel}`)

  function parseISO8601Duration(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
      const hours = (parseInt(match[1]) || 0);
      setHour(hours)
      const minutes = (parseInt(match[2]) || 0);
      setMinute(minutes)
      const seconds = (parseInt(match[3]) || 0);
      setSecond(seconds)  
  }

  useEffect(()=>{
    const durationSeconds = parseISO8601Duration(contentDetails);
    // console.log(durationSeconds)
  }, []);
  console.log(hour+ ":"+ minute+ ":" + second)

  return (
    <div className='VideoCard-whole' >
      <div className='duration'>
          <span>{hour+ ":"+minute+":"+second}</span>
        </div>
      <Link className='MyLink' to={`/watch/${id}`}>
        <img className='thumbnail' src={thumbnail}/>
      </Link>

      <div className='videoCard-info'>
        {/* <img className='Avatar' src={channelProfilePic} /> */}
        <div className='videoCard-text'>
            <h4> {title}</h4>
            <p> {channelName} -
            <span> {moment(timestamp).fromNow()}</span> </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard