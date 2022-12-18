import React, { Component } from 'react'
import { FaGithubSquare } from 'react-icons/fa';
import * as Icons  from "react-icons/md";
import TextAnim from './TextAnim';

class ProjectItem extends Component {
    getImageUrl(name) {
        return new URL(`../assets/projects/${name}`, import.meta.url).href 
    }
    render() {
    return (
        <div className='project_content'>
            <div className='img_holder'>
                <img src={this.getImageUrl(this.props.data.img)} alt='Project Thumbnail' />
            </div>
            <div className='project_data'>
                <h2>{this.props.data.name}</h2>
                <p>
                    {this.props.data.tech}
                    <span>
                        <a target="_blank" rel="noreferrer" href={this.props.data.link}><Icons.MdOpenInNew /></a>
                        &nbsp;
                        <a target="_blank" rel="noreferrer" href={this.props.data.git}><FaGithubSquare /></a>
                    </span>
                </p>
            </div>
        </div>
    )
  }
}

export default ProjectItem