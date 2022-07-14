import React from 'react';
import SearchBar from '../SearchBar';
import HeaderLogo from '../HeaderLogo';
import OffCanvas from '../OffCanvas';
import './style.css';

export default function Header() {
  return (
    <header className="header">
      <HeaderLogo />
      <SearchBar />
      <OffCanvas />
    </header>
  )
}
