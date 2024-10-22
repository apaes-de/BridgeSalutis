import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Importa os componentes do react-router-dom
import './App.css';
import logo from './logo.png';  // Importa o logotipo
import ContactosIcon from './ContactosIcon.png';  // Importa o ícone de contacto
import MenuIcon from './MenuIcon.png';  // Importa o ícone de menu

import Home from './Home';  // Importa o componente Home
import About from './About';  // Importa o componente About


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Página inicial */}
          <Route path="/sobre-nos" element={<About />} />  {/* Página Sobre Nós */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para fechar o menu após a seleção de uma opção
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/" onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          closeMenu(); // Fecha o menu ao clicar no logo
        }}>
          <img src={logo} alt="Logo da Consultoria" />
        </Link>
      </div>

      <nav className={`main-nav ${menuOpen ? 'show-menu' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/sobre-nos" onClick={closeMenu}>Sobre Nós</Link>
        <Link to="/servicos" onClick={closeMenu}>Serviços</Link>
        <Link to="/startups" onClick={closeMenu}>Startups</Link>
        <Link to="/investidores" onClick={closeMenu}>Investidores</Link>
        <Link to="/contactos" className="cta-button" onClick={closeMenu}>Contactos</Link>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        <img src={MenuIcon} alt="Ícone do Menu" />
      </div>
    </header>
  );
}


function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Consultoria Bridge Salutis. Todos os direitos reservados.</p>
    </footer>
  );
}

export default App;
