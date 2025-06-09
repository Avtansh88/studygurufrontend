import React from 'react'
import "./header.css";
import { Link } from 'react-router-dom';

const Header = ({ isAuth }) => {
  return (
    <header>
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg
          width="180"
          height="60"
          viewBox="0 0 180 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Study Guru Logo"
        >
          {/* Open book */}
          <path d="M6 50L30 12L54 50L30 38L6 50Z" fill="#0277bd" />
          <path d="M30 12L54 50L78 12L54 26L30 12Z" fill="#8a4baf" />

          {/* Graduation cap */}
          <polygon points="85,15 130,0 175,15 130,30" fill="#8a4baf" />
          <rect x="120" y="30" width="15" height="15" fill="#0277bd" />

          {/* Text */}
          <text
            x="10"
            y="55"
            fontFamily="Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
            fontWeight="700"
            fontSize="24"
            fill="#0277bd"
          >
            Study Guru
          </text>
        </svg>
      </div>

      <div className="link">
        <Link to={'/'}>Home</Link>
        <Link to={'/courses'}>Courses</Link>
        <Link to={'/about'}>About</Link>
        {isAuth ? (
          <Link to={'/account'}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
}

export default Header
