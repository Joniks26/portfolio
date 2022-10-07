import React from 'react';
import style from './Projects.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/images/todo.jpg'
import newsImage from './../assets/images/news.jpg'
import cryptoImage from './../assets/images/crypto.jpg'
import counterImage from './../assets/images/counter.png'

import Fade from 'react-reveal/Fade';
import Button from "../common/components/button/Button";

function Projects() {
    const news = {
        backgroundImage: `url(${newsImage})`,
    };
    const crypto = {
        backgroundImage: `url(${cryptoImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const counter = {
        backgroundImage: `url(${counterImage})`,
    };

    const newsBlog = 'https://github.com/Joniks26/info-blog'
    const cryptoApp = 'https://github.com/Joniks26/crypto-app'
    const todoApp = 'https://github.com/Joniks26/todolist'
    const counterApp = 'https://github.com/Joniks26/counter'
    const repositories = 'https://github.com/Joniks26?tab=repositories'

    return (
        <div id='projects' className={style.projectsBlock}>
            <Fade left>
                <div className={style.container}>
                    <Title text={"Projects"}/>
                    <div className={style.projects}>
                        <Project link={newsBlog} style={news} title={"News Blog"}
                                 description={'STACK: JavaScript, Vue, Vue Router, VueX, Composition API, Axios'}/>
                        <Project link={cryptoApp} style={crypto} title={"Crypto App"}
                                 description={'STACK: JavaScript, React, React-Router, Redux, Redux Toolkit, Ant Design, Moment, Axios'}/>
                        <Project link={todoApp} style={todolist} title={"Todolist"}
                                 description={'STACK: TypeScript, React, React-Router, Redux, Redux-Thunk, MUI, Formik, Axios, StoryBook, Jest'}/>
                        <Project link={counterApp} style={counter} title={"Counter"}
                                 description={'STACK: TypeScript, React, Redux, Ant Design, localStorage'}/>
                    </div>
                </div>
                <div className={style.buttonBlock}>
                    <Button link={repositories} text={"More projects"}/>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;

