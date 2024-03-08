import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import WatchComp from './WatchComp'
import VideoMetaData from './VideoMetaData'
import VideoHorizontal from './VideoHorizontal'

import './PlayVideoComp.css'

function PlayVideoComp({UrlPProp}) {

    console.log("Parent: "+ UrlPProp)
  return (
    <div className='playvideo-comp'>
      <Header />
      <div className='flex-playvideocomp'>
        <div className='flex-one'><Sidebar /></div>
        <div className='flex-two' UrlGCProp={UrlPProp} ><WatchComp /></div>
      </div>
    </div>
  )
}

export default PlayVideoComp
