import React, { Component } from 'react';
import * as Icons  from "react-icons/si";
import logo from '../assets/images/icon.png';
import * as Scroll from 'react-scroll';


let Link      = Scroll.Link;

class Navbar extends Component {
  render() {
    return (
        <nav>
            <div className='nav_brand'>
                <img src={logo} alt="my-icon" />
                <ul>
                    <li><a href="https://github.com/MrAhito" target="_blank" rel="noreferrer"><Icons.SiGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/rolando-lazo-83a8a5220/" target="_blank" rel="noreferrer"><Icons.SiLinkedin /></a></li>
                    <li><a href="https://www.facebook.com/rolando.ahitojr" target="_blank" rel="noreferrer"><Icons.SiFacebook /></a></li>
                </ul>
            </div>
            <div className='nav_menu'> 
                <ul>
                    <li>
                        <Link activeClass="active" to="#" smooth={true} offset={-50} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="my-projects" smooth={true} offset={-102} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="about-me" smooth={true} offset={140} duration={500}>
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact-me" smooth={true} offset={-50} duration={500}>
                            Contact me
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}

export default Navbar