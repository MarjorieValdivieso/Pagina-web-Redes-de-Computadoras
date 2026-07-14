import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

// Importación correcta del logo desde assets
import logoImg from '../../assets/favicon.png';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <div className="navbar-container">
        
        {/* Aquí usamos la variable logoImg correctamente */}
        <Link to="/" className="logo" onClick={() => setMenuActive(false)}>
          <img src={logoImg} alt="Logo" className="logo-icon" />
          <span className="logo-text">Redes Computadoras</span>
        </Link>

        {/* Hamburguesa móvil */}
        <button className={`hamburger-btn ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú de navegación */}
        <nav className={`nav-menu ${menuActive ? 'active' : ''}`}>
          <div className="nav-links">
            <Link to="/" className="nav-link" onClick={() => setMenuActive(false)}>Inicio</Link>
            <Link to="/nosotros" className="nav-link" onClick={() => setMenuActive(false)}>Sobre Nosotros</Link>
            <Link to="/temario" className="nav-link" onClick={() => setMenuActive(false)}>Temario</Link>
            <Link to="/preguntas" className="nav-link" onClick={() => setMenuActive(false)}>Preguntas</Link>
            <Link to="/contacto" className="nav-link" onClick={() => setMenuActive(false)}>Contacto</Link>
          </div>

          <div className="auth-buttons">
            <Link to="/login" className="btn-auth login" onClick={() => setMenuActive(false)}>Login</Link>
            <Link to="/registro" className="btn-auth register" onClick={() => setMenuActive(false)}>Registro</Link>
            <Link to="/dashboard" className="btn-auth dashboard" onClick={() => setMenuActive(false)}>Dashboard</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;