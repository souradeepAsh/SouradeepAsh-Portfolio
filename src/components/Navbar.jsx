import { NavLink } from "react-router-dom";
import { useState } from 'react';

// import { logo } from "../assets/images";

const Navbar = () => {


  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (link) => {
    setExpandedLink(link === expandedLink ? null : link);
  };

  const gradientStyle = {
    background: 'linear-gradient(to right, #e81cff, #40c9ff)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  };

  return (
    <header className='header'>
      <NavLink
      to='/'
      className={`nav-link ${isHovered ? 'expanded' : 'compact'} flex items-center justify-center font-bold shadow-md`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className={`compact-text ${isHovered ? 'hidden' : ''}`}>SA</p>
      <p className={`full-text ${isHovered ? '' : 'hidden'}`}>Souradeep Ash</p>
    </NavLink>
      
      <nav className='flex text-lg gap-5 font-medium'>
        
<NavLink 
    to='/about' 
    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
    onMouseEnter={() => handleClick('about')}
>
    <div className='logo-only'>
        <svg 
            className='icon' 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            width="24" 
            height="24"
        >
            <defs>
                <linearGradient id="gradient-about" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#e81cff', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#40c9ff', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <path fill="url(#gradient-about)" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm-1-15h2v2h-2zm0 4h2v7h-2z"/>
        </svg>
    </div>
    <div className='full-text text'>About</div>
</NavLink>

<NavLink 
    to='/projects' 
    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
    onMouseEnter={() => handleClick('projects')}
>
    <div className='logo-only'>
        <svg 
            className='icon' 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24" 
            height="24"
        >
            <defs>
                <linearGradient id="gradient-projects" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#e81cff', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#40c9ff', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <path fill="transparent" stroke="url(#gradient-projects)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z"/>
        </svg>
    </div>
    <div className='full-text text'>Projects</div>
</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
