import React, { useState, ChangeEvent } from 'react';

import './styles.css';

const SearchPoint = () => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  function handleSelectedUf(event: ChangeEvent<HTMLInputElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectedCity(event: ChangeEvent<HTMLInputElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }
  
  return(
    <div className='containerSearchPoint'>
      <input
        type='text'
        name='city'
        id='city'
        onChange={handleSelectedCity}
        placeholder='Digite a Cidade'
      />

      <input
        type='text'
        name='Estado'
        id='uf'
        onChange={handleSelectedUf}
        placeholder='Digite o estado(UF)'
      />
      
      <button className='buttonSearch'>
        <p className='buttonText'>Buscar</p>
      </button>
    </div>
  );
}

export default SearchPoint;