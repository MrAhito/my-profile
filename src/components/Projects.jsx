import React, { Component } from 'react'
import * as Scroll from 'react-scroll';
import ProjectItem from './ProjectItem';
import TextAnim from './TextAnim';

let Link      = Scroll.Link;

class Projects extends Component {
  constructor(props){
      super(props);
      this.state = { 
          projects: [
              { 
                name: "Online Pet Breeding Portal", 
                desc:"A web portal that will helped the pet owners to look for other nearest pet breeders in Bataan. It also help the pet breeders and pet owners to manage the breeding and to monitor the breeding process by sending a status of breeding.",
                img: 'opbp.png', 
                link: "https://online-pet-breeding-portal.vercel.app/", 
                git: "https://github.com/MrAhito/online-pet-breeding-portal-master", 
                tech: "ReactJS + Firebase"
              }, 
              { 
                name: "BSCNI", 
                desc: "A simple E-Commerce website made with ReactJS for a local Internet and Cable Provider here in Bataan", 
                img: 'bscn.png', 
                link: "https://capstone-fe-sand.vercel.app/", 
                git: "https://github.com/MrAhito/capstone-fe",
                tech: "ReactJS"
              },
              { 
                name: "Online Pet Breeding Portal", 
                desc:"A web portal that will helped the pet owners to look for other nearest pet breeders in Bataan. It also help the pet breeders and pet owners to manage the breeding and to monitor the breeding process by sending a status of breeding.",
                img: 'opbp.png', 
                link: "https://online-pet-breeding-portal.vercel.app/", 
                git: "https://github.com/MrAhito/online-pet-breeding-portal-master", 
                tech: "ReactJS + Firebase"
              }, 
          ] 
      };
  }
  // 
  render (){
    return (
      <section id='my-projects'>
          <h1>
            <TextAnim text = {['<My Projects/>', 5000, '' ]} />
          </h1>
          <div className='project_container'>
              {this.state.projects.map((v, i) => { return <ProjectItem key={i} data={v} /> })}
          </div>
      </section>
    );
  }
}

export default Projects