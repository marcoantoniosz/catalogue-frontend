import React, { useState, useEffect } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { fetchAllCategories } from '../../services/API';
import CategoriesLink from '../CategoriesLink';
import './style.css'

export default function Header() {

    const [categories, setCategories] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchData = async () => {
      const response = await fetchAllCategories();
      setCategories(response);
    }

    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <div className="header-offcanvas-container">
        <Hamburger color="#0000F7" toggled={ show } toggle={ handleShow } />
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
