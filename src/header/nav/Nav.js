import React from 'react';
import style from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";



function Nav() {
    return (
        <div className={style.nav}>
            <Link activeClass={style.active} to="main" spy={true} smooth={true} offset={-70} duration= {500}>
                Main
            </Link>
            <Link activeClass={style.active} to="skills" spy={true} smooth={true} offset={-70} duration= {500}>
                Skills
            </Link>
            <Link activeClass={style.active} to="projects" spy={true} smooth={true} offset={-70} duration= {500}>
                Projects
            </Link>
            <Link activeClass={style.active} to="contacts" spy={true} smooth={true} offset={-70} duration= {500}>
                Contacts
            </Link>
        </div>
    );
}

export default Nav;