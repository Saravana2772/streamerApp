import React from 'react'
import './SearchPage.css';
import Channelrow from './Channelrow';
import Videorow from './Videorow';

function SearchPage() {
  return (
    <div className='SearchPage'>
      <Channelrow 
        image='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' 
        channel='Kingsara275' 
        subs='1M' 
        noOfVideo={100} 
        desc='Welcome to the best channel in youtube' 
        verified />

        <Channelrow 
        image='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' 
        channel='Kingsara275' 
        subs='1M' 
        noOfVideo={100} 
        desc='Welcome to the best channel in youtube' 
        verified />

        <hr />

        <Videorow 
        image='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' 
        channel='Kingsara275' 
        title='A new video'
        subs='1M' 
        view={100} 
        desc='Welcome to the best channel in youtube' 
        time='1 year ago' />

<Videorow 
        image='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' 
        channel='Kingsara275' 
        title='A new video'
        subs='1M' 
        view={100} 
        desc='Welcome to the best channel in youtube' 
        time='1 year ago' />

<Videorow 
        image='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' 
        channel='Kingsara275' 
        title='A new video'
        subs='1M' 
        view={100} 
        desc='Welcome to the best channel in youtube' 
        time='1 year ago' />
    </div>
  )
}

export default SearchPage
