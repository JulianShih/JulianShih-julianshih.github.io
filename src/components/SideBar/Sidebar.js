// region 1. Platform Libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// endregion

// region 2. Project Libraries
import Button from '../Button/Button';
// endregion

// region U. UI Markups
import icon from '../../img/head.svg';
import './Sidebar.scss';
// endregion

function Sidebar() {
  const [isExpand, setExpand] = useState(false);
  const navigate = useNavigate();

  const style = isExpand
      ? { left: '0vw' }
      : { left: '-16vw' };

  const onExpand = () => {
    setExpand(true);
  };
  const onCollapse = () => {
    setExpand(false);
  };
  const navPlayground = () => {
    navigate("/playground");
  }
  const navHome = () => {
    navigate("/");
  }

  return (
    <div className="sidebar" style={style} onMouseLeave={onCollapse}>
        <div className="container">
          <Button label={"About"} onClick={navHome}/>
          <Button label={"Coderbyte Challenge Demo"} onClick={navPlayground}/>
        </div>
        <div className="icon" onMouseEnter={onExpand}>
          <img src={icon} alt="" />
        </div>

      </div>
  );
};

export default Sidebar;