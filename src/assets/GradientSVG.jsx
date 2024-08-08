import React from 'react';

const GradientSVGIcon = () => {
  return (
    <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#40c9ff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#e81cff', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path fill="url(#gradient1)" d="M21 19H3v-2h18v2zm0-4H3v-2h18v2zm0-4H3V9h18v2zm0-4H3V5h18v2z"/>
    </svg>
  );
};

export default GradientSVGIcon;
