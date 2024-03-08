import React, { useEffect } from 'react';

const InfiniteScroll = ({ onScrollToBottom }) => {
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      // User has reached the bottom
      onScrollToBottom();
    }
  };

  useEffect(() => {
    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScrollToBottom]);

  return <div style={{ height: '1px' }}></div>; // An empty div to ensure the page has some content to scroll
};

export default InfiniteScroll;
