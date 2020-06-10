import React from 'react';
import { useHistory } from 'react-router-dom';
import { BsCheckCircle as Icon } from 'react-icons/bs';

import './styles.css';

const SuccessRegister = () => {
  const history = useHistory();

  setTimeout(() => history.push('/'), 2000)

  return(
    <div className='containerSuccessPage'>
      <Icon size={100} color='#34CB79'/>
      <h1 className='successText'>Cadastro Concluído!</h1>
    </div>
  );
}

export default SuccessRegister;