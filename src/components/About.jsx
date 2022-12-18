import React, { Component } from 'react'
import TextAnim from './TextAnim';
import * as Icons  from "react-icons/tb";
import ContactForm from './Contact';

class About extends Component {
    constructor(props){
        super(props);
        this.state = { 
            techs: [
                { name: "html5", color: "#F16529" },
                { name: "css3", color: "#329ED6" },
                { name: "javascript", color: "#EDD718" },
                { name: "typescript", color: "#2F74C0" },
                { name: "php", color: "#7377AD" },
                { name: "java", color: "#DF151A" },
                { name: "angularjs", color: "#D21A15" },
                { name: "reactjs", color: "#5ED3F3" },
                { name: "symfony", color: "#000000" },
                { name: "codeigniter", color: "#E74122" },
                { name: "express", color: "#000000" },
                { name: "nextjs", color: "#000000" },
                { name: "bootstrap", color: "#7310F0" },
                { name: "tailwindcss", color: "#06B6D4" },
                { name: "materialize", color: "#E87077" },
                { name: "chartjs", color: "#F77377" },
                { name: "jquery", color: "#0868AC" },
                { name: "socket", color: "#000000" },
                { name: "webpack", color: "#1871B9" },
                { name: "nodejs", color: "#89BB3C" },
                { name: "android", color: "#9CBC36" },
                { name: "linux", color: "#000000" },
                { name: "bash", color: "#000000" },
                { name: "git", color: "#E94E31" },
                { name: "mysql", color: "#045A83" },
                { name: "mariadb", color: "#000000" },
                { name: "firebase", color: "#FFCB2D" },
                { name: "sqlite", color: "#03354F" },
                { name: "figma", color: "#202124" },
                { name: "photoshop", color: "#2FA3F7" },
                { name: "postman", color: "#F16529" },
            ]
        }
    }
  render() {
    return (
      <section id='about-me'>
          <h1>
            <TextAnim text = {['<About Me/>', 5000, '' ]} />
          </h1>
          <div className='about_container'>
            <div className='about_content tech'>
                <h2><Icons.TbCode /> Technologies</h2>
                <ul className='tech_list'>
                    {this.state.techs.map((v, i) => {
                        return <li key={i} title={v.name} ><img style={{border: "2px solid " + v.color}} src={'./src/assets/technologies/'+v.name+'.svg'}  alt={v.name} /></li>;
                    })}
                </ul>
            </div>
            <div className='about_content self'>
                <TextAnim 
                    text = {['Hi I\'m Rolando Q. Lazo an aspiring web developer from Bataan, Philippines. I\'m currently seeking for an entry-level web developer position where I can apply my knowledge I learned while earning my B.S. in Web Development. I have experience with developing both back-end and front-end web applications using different frameworks (ReactJS, AngularJS, CodeIgniter, Symfony).', 5000]}  
                />
                <h2><Icons.TbSchool /> Education</h2>
                  <div className='about_school'>
                    <h4>TVL - CICT Track</h4>
                    <h4>Bataan National High School - Senior</h4>
                    <p>Roman Superhighway, City of Balanga, Bataan</p>
                    <span>School Year: 2016-2018</span>
                  </div>
                  <div className='about_school'>
                    <h4>BSIT major in Network and Web Application</h4>
                    <h4>Bataan Peninsula State University</h4>
                    <p>Capitol Drive, City of Balanga, 2100 Bataan</p>
                    <span>School Year: 2018-2022</span>
                  </div>
                <h2><Icons.TbCertificate /> Certification</h2>
                <ul className='certs'>
                  <li>Village 88 Inc : <span>Proficient in Web Fundamentals</span> </li>
                  <li>Village 88 Inc : <span>Proficient in Javascript</span> </li>
                  <li>Village 88 Inc : <span>Proficient in Advanced PHP</span> </li>
                  <li>Village 88 Inc : <span>Proficient in Front-end Development</span> </li>
                  <li>Microsoft : <span>Microsof Office Specialist Excel 2016</span> </li>
                  <li>Microsoft : <span>Microsof Office Specialist Powerpoint 2016</span> </li>
                </ul>
            </div>
          </div>
      </section>
    )
  }
}

export default About