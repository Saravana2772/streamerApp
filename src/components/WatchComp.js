import React, {useState, useEffect} from 'react'
import VideoMetaData from './VideoMetaData'
import RelatedVideosInWatch from './RelatedVideosInWatch';
import VideoHorizontal from './VideoHorizontal'

import { useParams } from 'react-router-dom';
import './WatchComp.css';

function WatchComp() {
  const { id } = useParams();
  console.log("ID:" + id)
  const [videoDetails, setVideoDetails] = useState(null);
  const [title, setTitle]= useState("");

  const UrlGC=`https://www.youtube.com/embed/${id}?autoplay=0&controls=1&showinfo=0`;
  console.log(UrlGC)

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`
        );
        console.log(response);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        if (data.items && data.items.length > 0) {
          const fetchedVideoDetails = data.items[0];
          console.log("FETCHED: ", fetchedVideoDetails);

          const titleToString= fetchedVideoDetails.snippet.title?fetchedVideoDetails.snippet.title.toString():"";
          console.log(titleToString);
          console.log(typeof titleToString);
          setTitle(titleToString);


          setVideoDetails(fetchedVideoDetails);
        } else {
          console.error('No video details found');
        }
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideoDetails();
  }, [id]);

  console.log("LAST", title);


  return (
    <div className='watch-horizon'>
      <div className='total-watchscreen'>
        <div className='totals-childone'>
          <div className='watchScreen-player'>
            <iframe className='Videobox' src={UrlGC} title="Video" 
            allowFullScreen height='100%' width='100%'
            style={{ objectFit: 'cover', border: '0'}}/>
          </div>
      
          <VideoMetaData className='meta-data' videoId={id} videoDetails={videoDetails}/>
        </div>
    
        <div className='totals-childtwo'>
          {
            {videoDetails} && <VideoHorizontal className='recom-sec' videoId={id} title={title} />
          }
        </div>
      </div>
    </div>
  )
}

export default WatchComp
