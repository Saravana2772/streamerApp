import React, {useState, useEffect} from 'react'
import './VideoHorizontal.css'
import {Link} from 'react-router-dom'

import axios from 'axios';

const VideoHorizontal = ({ videoId, title }) => {
  console.log("In related watch: ", title);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${title}&key=${process.env.REACT_APP_API_KEY}`;

      try {
        const response = await axios.get(url);
        const { items } = response.data;

        console.log({ items });
        setRelatedVideos(items);
      } catch (error) {
        console.error('Error fetching related videos:', error);
      }
    };

    fetchRelatedVideos();
  }, [title]);

  console.log(relatedVideos);

  relatedVideos.map((video, index) =>{
    console.log("NOW THE LAST VIDEO CNTNT: ",video, index);
  })

  // Ensure that your component returns JSX or null
  return (
    <div className='Horizontal-Video'>
      {relatedVideos.map((video, index) => (
        <Link className='MyLink' style={{textDecoration: 'none'}} to={`/watch/${video.id.videoId}`}>
          <div className='recommend-card' key={index}>
            <div className='items'><img className='recommend-img' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} /></div>
            <div className='items'><h3 className='recommend-title'>{video.snippet.title}</h3></div>
            <br />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoHorizontal;

