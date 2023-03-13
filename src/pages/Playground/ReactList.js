// region 1. Platform Libraries
import React, { useState } from 'react';
// endregion

const data = [
  { name: 'Daniel', age: 25 },
  { name: 'John', age: 24 },
  { name: 'Jen', age: 31 },
];

const ReactList = () => {
  const ListItem = data.map((d, key) => {
    return (
      <li key={key}>
        <span>{`${d.name} `}</span>
        <span>{d.age}</span>
      </li>
    );
  })

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {ListItem}
      </ul>
    </div>
  );
};

export default ReactList;