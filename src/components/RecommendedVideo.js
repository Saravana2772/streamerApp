import React, {useState, useEffect, useCallback} from 'react'
import InfiniteScroll from './InfiniteScroll'
import {Link} from 'react-router-dom'

import VideoCard from './VideoCard'
import './RecommendedVideo.css'
import axios from 'axios'
import moment from 'react-moment';
import Spinner from './Spinner'
import WatchComp from './WatchComp'
import PlayVideoComp from './PlayVideoComp'

function RecommendedVideo() {

  // const video_http="https://www.googleapis.com/youtube/v3/videos?";

  // const fetchData= useCallback(async () =>{
  //   fetch(video_http + new URLSearchParams({
  //     key: apiKey,
  //     part: 'snippet',
  //     chart: 'mostPopular',
  //     maxResults: 1,
  //     regionCode: 'IN'
  //   }))
  //   .then(res => res.json())
  //   .then(data => {
  //     const result= data.items.map(doc => ({
  //       ...doc
  //     }));
  //     setAllVideos(result)
  //   })
  // }, []);

  // useEffect(()=>{
  //   fetchData();
  //   return () =>{
      
  //   };
  // }, [fetchData]);

  const [videos, setVideos]= useState([]);
  const [loader, setLoader]= useState(false);
  const [pageToken, setPageToken] = useState('');
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const fetchVideo= async () =>{
    if (loader)
      return;
    setLoader(true);

    try {

      const response= await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&part=snippet,contentDetails&chart=mostPopular&maxResults=10&regionCode=IN&pageToken=${pageToken}`
      );

      setVideos((prevVideos) => [...prevVideos, ...response.data.items]);
      setPageToken(response.data.nextPageToken || '');

    }catch(error){
      console.error("Error fetching videos:", error);
    } finally {
      setLoader(false);
    }
  };

  // const fetchVideoUrl =(videoId) =>{
  //   const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  //   console.log(videoUrl);
  //   setSelectedVideoUrl(videoUrl);
  //   console.log("selected" +{selectedVideoUrl})
  // }

  // useEffect(()=>{
  //   console.log(selectedVideoId)

  //   return()=>{}
  // }, [selectedVideoId])
  
  const handleVideoClick = (videoId) => {
    console.log(videoId)
    setSelectedVideoId(videoId)
    console.log(selectedVideoId)
  };

  const handleScrollToBottom = () => {
    // Load more videos when the user reaches the bottom
    fetchVideo();
  };

  useEffect(()=>{
    fetchVideo()
  }, []);

  console.log(videos)

  return (
    <div className='RecommendedVideo'>
      <h2>HOME:</h2>
      <div className='RecommendedVideo-Allvideo' >

        {videos.map((video) => (
          <VideoCard
            key={video.id}
            contentDetails = {video.contentDetails.duration}
            id={video.id}
            thumbnail={video.snippet.thumbnails.high.url}
            channelName={video.snippet.channelTitle}
            title= {video.snippet.title}
            timestamp= {(video.snippet.publishedAt)}

            // channelProfilePic={video.channelInfo.thumbnails.default.url}
            onVideoClick={handleVideoClick}
          />
        ))}
        {/* <VideoCard image={data.snippet.thumbnails.high.url} title='Natures image' channel='Kingsara275' views='12k views' timestamp='1 year ago' channel_img='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'/> */}
        {/* <VideoCard image='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' title='Natures image' channel='Kingsara275' views='12k views' timestamp='1 year ago' channel_img='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'/> */}
       </div>

       {selectedVideoId && <PlayVideoComp UrlPProp={selectedVideoId} />}

      <InfiniteScroll onScrollToBottom={handleScrollToBottom} />
      {loader && <Spinner />}

    </div>
  )
}

export default RecommendedVideo;
