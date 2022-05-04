import React from 'react';
// import PropTypes from 'prop-types';
import './Footer.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

const Footer = () => (
  <div className="fixed-bottom">
  <Navbar color="dark" dark>
    <Container className='centrar-texto'>
      <NavbarBrand >® Nova Scotia Blog Colpatria -  Samir Díaz © 2022</NavbarBrand>
    </Container>
  </Navbar>
</div>  
);

// Footer.propTypes = {};

// Footer.defaultProps = {};

export default Footer;
