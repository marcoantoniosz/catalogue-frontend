import React, { useState } from 'react';
import CategoriesLink from '../CategoriesLink';
import { Turn as Hamburger } from 'hamburger-react';
import computer from '../../icons/computer.svg';
import sm from '../../icons/sm.svg';
import videogame from '../../icons/videogame.svg';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css'

export default function Header() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className="header-offcanvas-container">
        <Hamburger color="#FFF" toggled={ show } toggle={ handleShow } />
        <Offcanvas placement="end" className="offc-container" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body className="offc">
            <ul className="offc-ul">
              <CategoriesLink title="computadores" id="000001" close={ handleClose } icon={ computer } />
              <CategoriesLink title="smartphones" id="000002" close={ handleClose } icon={ sm } />
              <CategoriesLink title="videogames" id="000004" close={ handleClose } icon={ videogame } />
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
