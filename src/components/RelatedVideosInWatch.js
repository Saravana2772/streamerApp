import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import VideoCard from './VideoCard';
import InfiniteScroll from './InfiniteScroll';

import Spinner from './Spinner';

import './RecommendedVideo.css';

const RelatedVideosInWatch = () => {

  const {inputValue}= useParams();
  console.log(inputValue)
  // console.log("In related watch: ", title);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loader, setLoader]= useState(false);

    const fetchRelatedVideos = async () => {
      const url = `https://www.googleapis.com/youtube/v3/search?q=${inputValue}&key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=15&type=video`;

      if (loader)
        return;
      setLoader(true);

      try {
        const response = await axios.get(url);
        const { items } = response.data;

        console.log({ items });
        setRelatedVideos(items);
      } catch (error) {
        console.error('Error fetching related videos:', error);
      } finally {
        setLoader(false);
      }
    };

  useEffect(()=>{  
    fetchRelatedVideos();
  }, [inputValue]);

  const handleScrollToBottom = () => {
    // Load more videos when the user reaches the bottom
    fetchRelatedVideos();
  };

  console.log(relatedVideos);

  // Ensure that your component returns JSX or null
  //{id, thumbnail, channelName, title, timestamp,
  return (
    // <div>
    //   {relatedVideos.map((video, index) => (
    //     <div key={index}>
    //       <VideoCard id={video.id.videoId} thumbnail={video.snippet.thumbnails.high.url} channelName={video.snippet.channelName} title={video.snippet.title} timestamp={video.snippet.publishedAt} />
    //       {/* <h3>{video.snippet.title}</h3>
    //       <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
    //       <p>{video.snippet.description}</p> */}
    //     </div>
    //   ))}
    // </div>

    <div className='RecommendedVideo'>
    <h2>RESULTS FOR YOUR SEARCH:</h2>
    <div className='RecommendedVideo-Allvideo' >

      {relatedVideos.map((video) => (
        <VideoCard
          key={video.id.videoId}
          id={video.id.videoId}
          thumbnail={video.snippet.thumbnails.high.url}
          channelName={video.snippet.channelTitle}
          title= {video.snippet.title}
          timestamp= {(video.snippet.publishedAt)}
      
          // channelProfilePic={video.channelInfo.thumbnails.default.url}
        />
      ))}
      {/* <VideoCard image={data.snippet.thumbnails.high.url} title='Natures image' channel='Kingsara275' views='12k views' timestamp='1 year ago' channel_img='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'/> */}
      {/* <VideoCard image='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' title='Natures image' channel='Kingsara275' views='12k views' timestamp='1 year ago' channel_img='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'/> */}
     </div>
      
     {/* {selectedVideoId && <PlayVideoComp UrlPProp={selectedVideoId} />} */}
      
    <InfiniteScroll onScrollToBottom={handleScrollToBottom} />
    {loader && <Spinner />}

    </div>
  );
};

export default RelatedVideosInWatch;

