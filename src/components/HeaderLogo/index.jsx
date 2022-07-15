import React from 'react';
import Logo from '../../images/logo.png';
import './style.css';

export default function HeaderLogo() {
  return (
    <div className="header-logo-container">
        <img src={ Logo } alt="Logo"/>
    </div>
  )
}
