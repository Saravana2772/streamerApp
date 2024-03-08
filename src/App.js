import './App.css';
import React from 'react';
import HomeComp from './components/HomeComp';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import SearchComp from './components/SearchComp';
import WatchComp from './components/WatchComp';
import PlayVideoComp from './components/PlayVideoComp';


// console.log(process.env.REACT_APP_API_KEY)
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<HomeComp />} />
          <Route path='/search/:inputValue' element={<SearchComp />} />
          <Route path='/watch/:id' element={<PlayVideoComp />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

