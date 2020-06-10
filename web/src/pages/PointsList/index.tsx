import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';

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
  }, []);

  return (
    <h1>Page Points List</h1>
  );
}

export default PointsList;