import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './style.css';

export default function HeaderLogo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className="header-logo-container">
        <img onClick={ handleClick } src={ Logo } alt="Logo"/>
    </div>
  )
}
