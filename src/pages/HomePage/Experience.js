// region 1. Platform Libraries
import React, { useState } from 'react';
// endregion

// region 2. Project Libraries
import Tag from '../../components/Tag/Tag';
// endregion

// region U. UI Markups
import './Experience.scss';
// endregion

const Experience = () => {
  return (
    <div className="experience">
      <div className="row">
        <div className="block">
          <span className="font-h2">National Yang Ming Chiao Tung University</span>
          <span className="font-h3">Master’s Degree in Multimedia Engineering</span>
          <span className="font-h4">2020 - 2022</span>
          <div className="tags">
            <Tag label={"Human-Computer Interaction"}/>
            <Tag label={"User-Centered Design"}/>
            <Tag label={"Data Visualization"}/>
            <Tag label={"Virtual Reality"}/>
          </div>
          <li className="font-h3">Paperteer: A Paper Kit to Communicate Viewer Embodiment in the Making of Immersive Narrations</li>
          <span className="font-h4">Thesis, VR Prototyping</span>
          <li className="font-h3">Exploration of Player Behaviours from Broadcast Badminton Videos</li>
          <span className="font-h4">Project, Data Visualization</span>
        </div>
        <div className='block'>
        <iframe src="https://drive.google.com/file/d/13A2VwFAcXeOgFJQvHvK2Y3LN5UoXUL_J/preview" width="ˇ320" height="240" allow="autoplay"></iframe>
        <iframe src="https://drive.google.com/file/d/1lE5atfM0qpVwzzftz2Rl7emPZNa325a0/preview" width="ˇ320" height="240" allow="autoplay"></iframe>
        </div>
      </div>

      <hr></hr>

      <div className="row">
        <div className="block">
          <span className="font-h2">Arisan Inc.</span>
          <span className="font-h3">Full Stack Developer</span>
          <span className="font-h4">Jul 2019 - Jul 2020</span>
          <div className="tags">
            <Tag label={"React.js"}/>
            <Tag label={"Sass/Scss"}/>
            <Tag label={"Node.js"}/>
            <Tag label={"Git"}/>
            <Tag label={"MongoDB"}/>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="row">
        <div className="block">
          <span className="font-h2">National Cheng Kung University</span>
          <span className="font-h3">Bachelor’s Degree in Computer Science and Information Engineering</span>
          <span className="font-h4">2016 - 2019</span>
          <span className="font-h3">Minor in Architecture</span>
          <span className="font-h4">2014 - 2016</span>
        </div>
      </div>

    </div>
  );
}

export default Experience;
