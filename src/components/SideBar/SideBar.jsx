// region 1. Platform Libraries
import React, { Component } from 'react';
// endregion

// region 2. Project Libraries
// endregion

// region U. UI Markups
import icon from '../../img/head.svg';
import './SideBar.scss';
// endregion

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '',
      isExpand: false,
    };
  }

  handleExpand = () => {
    this.setState({
      isExpand: true,
    });
  }

  handleCollapse = () => {
    this.setState({
      isExpand: false,
    });
  }

  render() {
    const { isExpand } = this.state;
    const style = isExpand
      ? { left: '0vw' }
      : { left: '-18vw' };
    return (
      <div className="side-bar" style={style} onMouseLeave={this.handleCollapse}>
        <div className="container" />
        <div className="icon" onMouseEnter={this.handleExpand}>
          <img src={icon} alt="" />
        </div>
      </div>
    );
  }
}
