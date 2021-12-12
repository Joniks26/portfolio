import React from 'react';
import styles from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactIcon from "./../assets/images/react-icon.svg";
import jsIcon from "./../assets/images/js-icon.svg";
import htmlIcon from "./../assets/images/html-icon.svg";
import Fade from 'react-reveal/Fade';


function Skills() {
    let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;

    return (
        <div id='skills' className={styles.skillsBlock}>
            <Fade left>
                <div className={styles.container}>
                    <Title text={"Skills"}/>
                    <div className={styles.skills}>
                        <Skill title={"html & Css"}
                               icon={html}
                               description={"Grid, Flex, LESS, SCSS, Bootstrap, Material UI, Ant Design"}/>
                        <Skill title={"JavaScript / TypeScript"}
                               icon={js}
                               description={"ECMAScript 6, Promise, RestAPI, Storybook, Unit-tests"}/>
                        <Skill title={"React & Redux"}
                               icon={react}
                               description={"Hooks, HOC, Redux-Thunk, React-Redux, Axios, Formik"}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;