import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideo from './RecommendedVideo';
import './HomeComp.css';

export default function HomeComp() {
  return (
    <div>
       <Header />
        <div className='app-main'>
          <Sidebar />
          <RecommendedVideo />
       </div>
    </div>
  )
}
