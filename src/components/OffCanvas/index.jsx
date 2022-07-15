import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Sling as Hamburger } from 'hamburger-react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { fetchAllCategories } from '../../services/API';
import CategoriesLink from '../CategoriesLink';
import './style.css'

export default function Header() {

    const { categories, fetchCategories } = useContext(AppContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
      fetchCategories();
    }, []);
  
    return (
      <div className="header-offcanvas-container">
        <Hamburger color="#eb445b" toggled={ show } toggle={ handleShow } />
        <Offcanvas className="offc-close" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="offc-title">Categorias</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offc">
            <ul className="offc-ul">
              {categories.map(category => <CategoriesLink
              close={handleClose}
              key={category.id}
              id={category.id} 
              category={ category.name } />)}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
