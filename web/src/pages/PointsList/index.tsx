import React from 'react';
import { useLocation } from 'react-router-dom';

const PointsList = () => {
  const { Data }: any = useLocation().state;

  return (
    <h1>Page Points List</h1>
  );
}

export default PointsList;