import React from 'react';
import OffCanvas from '../OffCanvas';
import './style.css';

export default function Header() {
  return (
   <header className="header">
    <div className="header-logo-container">
      <h2>Logo</h2>
    </div>
    <div className="header-button">
      <OffCanvas />
    </div>
   </header>
  )
}
