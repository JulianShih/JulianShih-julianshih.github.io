// region 1. Platform Libraries
import React, { Component } from 'react';
// endregion

// region 2. Project Libraries
import Button from '../../components/Button/Button';
// endregion

// region U. UI Markups
import './Experience.scss';
// endregion

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="experience">
        <div className="row">
          <div className="block">
            <span className="font-h2">National Yang Ming Chiao Tung University</span>
            <span className="font-h3">Master’s Degree in Multimedia Engineering</span>
            <span className="font-h4">2020 - 2022</span>
            <div className="tags">
              <Button label={"Human-Computer Interaction"}/>
              <Button label={"User-Centered Design"}/>
              <Button label={"Data Visualization"}/>
              <Button label={"Virtual Reality"}/>
            </div>
          </div>
          <div className='block'>
          <iframe src="https://drive.google.com/file/d/1lE5atfM0qpVwzzftz2Rl7emPZNa325a0/preview" width="ˇ320" height="240" allow="autoplay"></iframe>
          <iframe src="https://drive.google.com/file/d/13A2VwFAcXeOgFJQvHvK2Y3LN5UoXUL_J/preview" width="ˇ320" height="240" allow="autoplay"></iframe>
          </div>
        </div>

        <hr style={{borderColor: "grey"}}></hr>

        <div className="row">
          <div className="block">
            <span className="font-h2">Arisan Inc.</span>
            <span className="font-h3">Full Stack Developer</span>
            <span className="font-h4">Jul 2019 - Jul 2020</span>
            <div className="tags">
              <Button label={"React.js"}/>
              <Button label={"Sass/Scss"}/>
              <Button label={"Node.js"}/>
              <Button label={"Git"}/>
              <Button label={"MongoDB"}/>
            </div>
          </div>
        </div>

        <hr style={{borderColor: "grey"}}></hr>

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
}
