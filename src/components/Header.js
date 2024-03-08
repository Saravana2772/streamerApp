import './Header.css';
import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link, useNavigate} from 'react-router-dom';
import RelatedVideosInWatch from './RelatedVideosInWatch';

function Header() {

  const [inputValue, setInputValue] = useState('');
  const [isInputChanged, setIsInputChanged] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setIsInputChanged(true);
  };

  const handleSearch = () => {
    if (isInputChanged) {
      // You can navigate to a new route using history.push
      navigate(`/search/${inputValue}`);
    }
  };

  const handlecancelSearch =() =>{
    setIsInputChanged = false;
    setInputValue('')
    
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='header'>
      <div className='header-left'>
        <MenuIcon />
        <Link style={{textDecoration: 'none'}} to={'/'}>
          {/* <img className='header-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/200px-Logo_of_YouTube_%282015-2017%29.svg.png" /> */}
          <h3>MyStream</h3>
        </Link>
      </div>

      <div className='header-center'>
        <div className='search-tab'>
          <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} className='header-input' placeholder='Search' autoComplete='on'/>
          <button className='Cancel-button' onClick={handlecancelSearch}>X</button>
            {!isInputChanged && <div className='header-search-icon'>
              <SearchIcon />
            </div>}
            {/* <SearchIcon className='header-search-icon'/> */}
            {isInputChanged && (
            <Link Link to={`/search/${inputValue}`}>
              <div className='header-search-icon'>
                <SearchIcon />
              </div>
            </Link>
      )}
        </div>
        <MicIcon className='header-mic'/>
      </div>

      <div className='header-right'>
        <div className='right-random'>
          <VideoCallIcon className='header-right-child'/>
          <AppsIcon className='header-right-child'/>
          <NotificationsIcon className='header-right-child'/>
        </div>
          <AccountCircleIcon className='header-right-child'/>
      </div>
    </div>
  )
}

export default Header
