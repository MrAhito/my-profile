import React, { Component } from 'react'
import myself from '../assets/images/image.jpg';
import TextAnim from './TextAnim';
import * as Icons  from "react-icons/fa";

class Home extends Component {
  render() {
    return (
      <section id='#' className='home'>
        <div className='home_content'>
          <img src={myself} alt="Myself" />
          <h1>Hi, I am Rolando Lazo</h1>
          <TextAnim text = {['<I  am a Web Developer />', 2000, '']} styles={{ fontSize: '24px',  }}/>
          <div className='btn_group'>
            <button className='alt'><a target="_blank" rel="noreferrer" href="https://app.flowcv.com/resume-feedback/1t_dG8CxA5_0LMoSy6IL_"><Icons.FaFileContract />&nbsp;&nbsp;Resume</a></button>
          </div>
        </div>
      </section>
    )
  }
}

export default Home