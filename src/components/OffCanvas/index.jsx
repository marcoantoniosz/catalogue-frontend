import React, { useState } from 'react';
import CategoriesLink from '../CategoriesLink';
import { Sling as Hamburger } from 'hamburger-react';
import burger from '../../icons/burger.png';
import pizza from '../../icons/pizza.png';
import drink from '../../icons/drink.png';
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
            <Offcanvas.Title className="offc-title">s</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offc">
            <ul className="offc-ul">
              <CategoriesLink close={ handleClose } icon={ burger } />
              <CategoriesLink close={ handleClose } icon={ drink } />
              <CategoriesLink close={ handleClose } icon={ pizza } />
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
