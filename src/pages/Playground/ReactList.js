// region 1. Platform Libraries
import React, { useState } from 'react';
// endregion

const data = [
  { name: 'Daniel', age: 25 },
  { name: 'John', age: 24 },
  { name: 'Jen', age: 31 },
];

const ListItem = ({name, age}) => {
  return (
    <li>
      <span>{`${name} `}</span>
      <span>{age}</span>
    </li>
  );
};

const ReactList = () => {
  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map((d, key) => {
          return (
            <ListItem name={d.name} age={d.age} key={key}/>
          );
        })}
      </ul>
    </div>
  );
};

export default ReactList;