import React from 'react';
import style from './Projects.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/images/todolist.png'
import socialImage from './../assets/images/social-network.jpg'
import counterImage from './../assets/images/counter.png'

import Fade from 'react-reveal/Fade';


function Projects() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const counter = {
        backgroundImage: `url(${counterImage})`,
    };

    const snProject = 'https://github.com/Joniks26/SN'
    const todoProject = 'https://github.com/Joniks26/todolist'
    const counterProject = 'https://github.com/Joniks26/counter'

    return (
        <div id='projects' className={style.projectsBlock}>
            <Fade right>
                <div className={style.container}>
                    <Title text={"Projects"}/>
                    <div className={style.projects}>
                        <Project link={snProject} style={social} title={"Social network"}
                                 description={"Social network with functional and class components with using Rest API"}/>
                        <Project link={todoProject} style={todolist} title={"Todo list"}
                                 description={"TodoList with UI and functional libraries"}/>
                        <Project link={counterProject} style={counter} title={"Counter"}
                                 description={"Simple counter for set and increment count with React & Redux and localStorage "}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;

