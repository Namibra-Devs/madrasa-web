import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HashLink = ({ href, children, ...props }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      // If we're on the home page, just scroll
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If we're on another page, navigate to home first
        navigate(`/${href}`);
      }
    } else {
      // Regular link
      navigate(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default HashLink;