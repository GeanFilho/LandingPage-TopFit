import React from 'react';
import './footer.css'; // Importa o estilo CSS para o footer
import logo from '../assets/top.png';


const Footer = () => {
  return (
    <footer className="footer" id="rodape"> {/* Cria o componente do footer */}
      <div className="footer-content"> {/* Conteúdo do footer */}
        <div className="logo-container"> {/* Container para o logo */}
          <img className="logo" src={logo} alt="Logo" /> {/* Exibe o logo do site */}
          <p>TopFit</p> {/* Texto "DATAVERSE" */}
          <hr className="separator" /> {/* Linha separadora */}
        </div>
        <div className="icons-container"> {/* Container para os ícones */}
          <nav>
            <ul>
              <li><a href="/example.com"><img className="icon"  alt="WhatsApp" /></a></li> {/* Ícone do WhatsApp */}
              <li><a href="/example.com"><img className="icon"  alt="Tiktok" /></a></li> {/* Ícone do GitHub */}
              <li><a href="/example.com"><img className="icon"  alt="Instagram" /></a></li> {/* Ícone do Instagram */}
            </ul>
          </nav>
          <hr className="separator" /> {/* Linha separadora */}
        </div>
        <hr className="separator" /> {/* Linha separadora */}
        <div className="mail-container"> {/* Container para o e-mail */}
          <a href="/example.com" >
            top4@gmail.com {/* Endereço de e-mail */}
          </a>
        </div>
        <div className="direitos">
          <p>© {new Date().getFullYear()} TopFit - Todos os direitos reservados</p> {/* Direitos autorais */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exporta o componente Footer para ser utilizado em outros lugares