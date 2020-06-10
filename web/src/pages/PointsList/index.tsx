import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import Point from '../../components/Point';

import './styles.css';

interface Point {
  city: string;
  email: string;
  id: number;
  image: string;
  image_url: string;
  latitude: number;
  longitude: number;
  name: string;
  uf: string;
  whatsapp: string;
}

const PointsList = () => {
  const [ pointsId, setPointsId ] = useState<number[]>([]);

  const { Data }: any = useLocation().state;

  useEffect(() => {
    api.get(`/points?city=${Data.selectedCity}&uf=${Data.selectedUf}&items=1,2,3,4,5,6`)
      .then(response => {
        let ids = response.data.map((point: Point) => point.id);

        setPointsId(ids);
      })
  }, [Data.selectedCity, Data.selectedUf]);

  return (
    <div className='containerPointList'>
      <header>
        <img src={logo} alt='Ecoleta'/>

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <p>
        {`${pointsId.length} pontos encontrados`}
      </p>

      <div className='ListPoints'>
        {pointsId.map(id => (
          <Point key={id} pointId={id}/>
        ))}
      </div>
    </div>
  );
}

export default PointsList;