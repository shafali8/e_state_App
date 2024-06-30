import React from 'react'
import "./listPage.scss";
import { listdata } from '../../lib/dummydata';
import Filter from '../../Components/Filter/Filter';
import Card from '../../Components/Card/Card';
import Map from '../../Components/Map/Map';

const ListPage = () => {

  const data = listdata;
  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {data.map((item) => (
            <Card 
            key={item.id}
            item={item}/>
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map
        items={data}/>
      </div>
    </div>
  )
}

export default ListPage
