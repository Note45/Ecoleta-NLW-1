import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

interface PointComponent {
  pointId: number
}
interface Item {
  title: string;
}

interface PointInfosType {
  city: string; 
  uf: string; 
  image_url: string; 
  name: string; 
  items: Item[];
}



const Point = ({ pointId }: PointComponent) => {
  const [pointInfos, setPointInfos ] = useState<PointInfosType>();

  useEffect(() => {
    api.get(`points/${pointId}`).then(response => {
      let { city, uf, image_url, name } = response.data.point;
      let { items }  = response.data;

      let pointInfos = {
        city, 
        uf, 
        image_url, 
        name, 
        items
      }

      setPointInfos(pointInfos);
    })
  }, [pointId]);

  console.log(pointInfos);

  return (
    <div className='Point'>
      <img src={pointInfos?.image_url} alt='Point' />
      <h1>{pointInfos?.name}</h1>
      <h3>
        {pointInfos?.items?.map((item, index) => {
          if(index === pointInfos?.items?.length - 1) {
            return `${item.title}`
          }else {
            return `${item.title}, `
          }
        })}
      </h3>
      <p>{`${pointInfos?.city}, ${pointInfos?.uf}`}</p>
    </div>
  );
}

export default Point;