import React from 'react'
import "./list.scss";
import Card from "../Card/Card";
import {listdata} from "../../lib/dummydata";

const List = () => {
  return (
   <div className="list">
    {listdata.map(item=>(
        <Card key={item.id} item={item}/>
    ))}
   </div>
  )
}

export default List
