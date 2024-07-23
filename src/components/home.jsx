import React, { useState } from 'react';
import './home.css'; // Importa o estilo CSS para a barra de navegação
import logo from '../assets/top.png'; // Importa o logotipo do site


function Navbar() {
  // Estados para controlar a classe ativa do menu e a classe do ícone do menu toggle
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  
  // Função para alternar entre as classes quando o ícone do menu toggle é clicado
  const navToggler = () => {
    setActive(active === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
    setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
  }

  // Retorna a estrutura da barra de navegação com o logotipo, itens de menu e ícone do menu toggle
  return (
      <nav className='nav'>
      {/* Logotipo */}
      <div className="marca">
      <img src={logo} className='marca-image' alt="Logo do site"/>
      </div>
      {/* Nome da marca */}
      {/* Lista de itens do menu */}
      <ul className={active}>
        <li className="nav__item"><a href="/#sobre">Sobre</a></li>
        <li className="nav__item"><a href='/#planos' className="nav__link">Planos</a></li>
        <li className="nav__item"><a href="/#programas" className="nav__link">Programas</a></li>
        <li className="nav__item"><a href="/#rodape" className="nav__link">Contato</a></li>
      </ul>
      {/* Ícone do menu toggle */}
      <div onClick={navToggler} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    
  );
};

export default Navbar;