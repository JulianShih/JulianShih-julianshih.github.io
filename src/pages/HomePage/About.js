// region 1. Platform Libraries
import React, { useState } from 'react';
// endregion

// region 2. Project Libraries
import Tag from '../../components/Tag/Tag';
// endregion

// region U. UI Markups
import email from '../../img/email.png';
import lin from '../../img/lin.svg';
import git from '../../img/git.png';
import './About.scss';
// endregion

const About = () => {
  return (
    <div className="about">
      <span className="font-h2">Software Engineer</span>
      <span className="font-h3">Taipei, Taiwan</span>
      <div className="icons">
        <a href="yashih.cs08@nycu.edu.tw"><img src={email} alt="" width="24"/></a>
        <a href="https://www.linkedin.com/in/julianshih/"><img src={lin} alt="" width="24"/></a>
        <a href="https://github.com/JulianShih"><img src={git} alt="" width="24"/></a>
      </div>
      <span className="font-h4">Aesthetics without technology is inefficient, and technology without aesthetics is tyranny.</span>
      <span className="font-h4">Focused in web development and always trying to combine wonderful design and powerful technology as making great artwork.</span>
      <div className="tags">
        <Tag label={"JavaScript"}/>
        <Tag label={"C#"}/>
        <Tag label={"Python"}/>
        <Tag label={"C++"}/>
      </div>
      <hr></hr>
    </div>
  );
}

export default About;