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
        <Offcanvas scroll placement="end" className="offc-container" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body className="offc">
            <ul className="offc-ul">
              <CategoriesLink title="computadores" id="000001" close={ handleClose } icon={ computer } />
              <CategoriesLink title="smartphones" id="000002" close={ handleClose } icon={ phone } />
              <CategoriesLink title="videogames" id="000004" close={ handleClose } icon={ videogame } />
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
