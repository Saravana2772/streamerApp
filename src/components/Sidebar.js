import React from 'react';
import './Sidebar.css';
import SidebarRows from './SidebarRows';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Sidebar() {
  const val=[[<HomeIcon />, 'Home'],[<WhatshotIcon />, 'Trending'],[<SubscriptionsIcon />, 'Subscription']]
  return (
    <div className='sidebar'>
      <SidebarRows selected Icon={HomeIcon} title="Home" />
      <SidebarRows Icon={WhatshotIcon} title="Trending" />
      <SidebarRows Icon={SubscriptionsIcon} title="Subscriptions" /> 
      <hr />

      <SidebarRows Icon={VideoLibraryIcon} title="Library" />
      <SidebarRows Icon={HistoryIcon} title="History" />
      <SidebarRows Icon={SmartDisplayIcon} title="Your videos" />
      <SidebarRows Icon={QueryBuilderIcon} title="Watch later" />
      <SidebarRows Icon={ThumbUpIcon} title="Liked videos" />

      <hr />      
    </div>
  )
}

// export default Sidebar
