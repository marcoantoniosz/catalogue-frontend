import React, { useState } from 'react';
import CategoriesLink from '../CategoriesLink';
import { Turn as Hamburger } from 'hamburger-react';
import computer from '../../icons/computer.png';
import phone from '../../icons/phone.png';
import videogame from '../../icons/videogame.png';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css'

export default function Header() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className="header-offcanvas-container">
        <Hamburger color="#2958AD" toggled={ show } toggle={ handleShow } />
        <Offcanvas placement="end" className="offc-container" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body className="offc">
            <ul className="offc-ul">
              <CategoriesLink title="PCs" id="000001" close={ handleClose } icon={ computer } />
              <CategoriesLink title="Phones" id="000002" close={ handleClose } icon={ phone } />
              <CategoriesLink title="Games" id="000004" close={ handleClose } icon={ videogame } />
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
