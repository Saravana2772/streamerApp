import { Button } from '@mui/material'
import React, {useState, useEffect} from 'react'

import axios from 'axios';
import moment from 'moment';
import ShowMoreText from 'react-show-more-text';

import './VideoMetaData.css'

function VideoMetaData({videoId, videoDetails}) {

    if (!videoDetails) {
        return <div>Loading...</div>; // or any other loading indicator
    }

    console.log(videoDetails);
  return (
    <div className='Video-MetaData'>
        <div className='video-MetaData-Top'>
            <h4 className='video-title'>{videoDetails.snippet.localized.title}</h4>
            <div className='video-title-details'>
                {videoDetails.statistics.viewCount} Views
                {/* {videoDetails.publishedAt} */}
                <p>{moment(videoDetails.publishedAt).fromNow()}</p>
            </div>
            <div className='MetaData-btn'>
                <Button className='react-btn' id='Fav-btn'>Add to Favourites</Button>
            </div>
        </div>
        <div className='channel-info'>
            <img className='channelOwner-profile' src="https://img.freepik.com/premium-photo/cartoon-boy-with-red-hair-green-eyes-looking-camera-generative-ai_902846-28292.jpg" />
            <div className='MetaData-channel'>
            <div>
                {videoDetails.snippet.channelTitle}
            </div>
            </div>
            <div className='Follow-btn'>
                <Button className='react-btn' id='Follow-btn'>FOLLOW</Button>
            </div>
        </div>
        <div className='MetaData-Description'>
            <ShowMoreText className='descript-showmore' lines={3} anchorClass='ShowMoreText' expanded={false}>
            {videoDetails.snippet.localized.description}
            </ShowMoreText>
        </div>
    </div>
  )
}

export default VideoMetaData
