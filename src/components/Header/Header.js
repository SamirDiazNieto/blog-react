import React from 'react';
// import PropTypes from 'prop-types';
import './Header.css';
import Logo from '../../assets/logo-site.png'

const Header = () => (
<div>
        <nav className="contendor-menu">
            <a className="logo" href="index.html" target="_blank"><img src={Logo} alt="Logo"/></a>
            <div className="items-menu">
                <a href="/" className="items">Fundación</a>
                <a href="/" className="items">Servicios</a>
                <a href="/" className="items">Zoomos</a>
                <a href="/" className="items">Contacto</a>
                

            </div>
            <div className="items-menu-movil">
                <a href="/" className="items">Fundación</a>
                <a href="/" className="items">Servicios</a>
                <a href="/" className="items">Zoomos</a>
                <a href="/" className="items">Contacto</a>
            </div>
        </nav>
</div>

 );

// Header.propTypes = {};

// Header.defaultProps = {};

export default Header;
