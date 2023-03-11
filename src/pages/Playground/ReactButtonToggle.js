// region 1. Platform Libraries
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
// endregion

const ReactButtonToggle = () => {
  const [toggleState, setToggleState] = useState(true);

  const handleClick = () => {
    setToggleState(!toggleState);
  }
  
  return (
    <button onClick={handleClick}>{toggleState ? "ON" : "OFF"}</button>
  );
}

export default ReactButtonToggle;