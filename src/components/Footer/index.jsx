import React from 'react';
import instagram from '../../icons/instagram.svg';
import whatsapp from '../../icons/whatsapp.svg';
import './style.css';

export default function Footer() {
  return (
    <footer>
        <nav className="footer-nav">
          <img className="footer-icon" src={ instagram } alt="instagram" />
          <p>Nos encontre</p>
          <img className="footer-icon" src={ whatsapp } alt="whatsapp" />
        </nav>
    </footer>
  )
}
