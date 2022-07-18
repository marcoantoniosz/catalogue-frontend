import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css'

export default function Header() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className="header-offcanvas-container">
        <Hamburger color="#B00505" toggled={ show } toggle={ handleShow } />
        <Offcanvas placement="end" className="offc-container" show={show} onHide={handleClose}>
          <Offcanvas.Header className="offc-header" closeButton>
            <Offcanvas.Title className="offc-title">Categorias</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offc">
            <ul className="offc-ul">
              
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
