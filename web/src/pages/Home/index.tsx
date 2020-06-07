import React from 'react';
import { FiLogIn, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
  return(
    <div id='page-home'>
      <div className='content'>
        <header>
          <img src={logo} alt='Ecoleta' />

          <Link to="/create-point" className='createPointLink'>
            <FiArrowRight size={25} color='#56cc7a'/>
            <h3>Cadastre um ponto de coleta</h3> 
          </Link>
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

          <Link to="/search-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Pesquisar pontos de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;