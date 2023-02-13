// region 1. Platform Libraries
import React, { Component } from 'react';
// endregion

// region 2. Project Libraries
import Button from '../../components/Button/Button';
// endregion

// region U. UI Markups
import email from '../../img/email.png';
import lin from '../../img/lin.svg';
import git from '../../img/git.png';
import './About.scss';
// endregion

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="about">
        <span className="font-h2">Full Stack Engineer | Software Engineer</span>
        <span className="font-h3">Taipei, Taiwan</span>
        <div className="icons">
          <a href="yashih.cs08@nycu.edu.tw"><img src={email} alt="" width="24"/></a>
          <a href="https://www.linkedin.com/in/julianshih/"><img src={lin} alt="" width="24"/></a>
          <a href="https://github.com/JulianShih"><img src={git} alt="" width="24"/></a>
        </div>
        <span className="font-h4">Aesthetics without technology is inefficient, and technology without aesthetics is tyranny.</span>
        <span className="font-h4">Focused in web development and always trying to combine wonderful design and powerful technology as making great artwork.</span>
        <div className="tags">
          <Button label={"JavaScript"}/>
          <Button label={"Python"}/>
          <Button label={"C#"}/>
          <Button label={"C++"}/>
        </div>
        <hr></hr>
      </div>
    );
  }
}
