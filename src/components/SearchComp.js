import React from 'react'
import './HomeComp.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import RelatedVideosInWatch from './RelatedVideosInWatch';

function SearchComp() {
  return (
    <div>
      <Header />
      <div className='app-main'>
        <Sidebar />
        <RelatedVideosInWatch />
      </div>
    </div>
  )
}

export default SearchComp
