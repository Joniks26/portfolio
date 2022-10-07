import React from 'react';
import styles from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactIcon from "./../assets/images/react-icon.svg";
import jsIcon from "./../assets/images/js-icon.svg";
import vueIcon from "./../assets/images/vue-icon.svg";
import htmlIcon from "./../assets/images/html-icon.svg";

import Fade from 'react-reveal/Fade';

function Skills() {
    let html = htmlIcon;
    let react = reactIcon;
    let js = jsIcon;
    let vue = vueIcon;

    return (
        <div id='skills' className={styles.skillsBlock}>
            <Fade left>
                <div className={styles.container}>
                    <Title text={"Skills"}/>
                    <div className={styles.skills}>
                        <Skill title={"HTML & CSS"}
                               icon={html}
                               description={"Grid, Flex, LESS, SCSS"}/>
                        <Skill title={"JavaScript / TypeScript"}
                               icon={js}
                               description={"Promise, RestAPI, Unit-tests"}/>
                        <Skill title={"React & Redux"}
                               icon={react}
                               description={"Redux-Thunk, Redux Toolkit, RTKQuery"}/>
                        <Skill title={"Vue & VueX"}
                               icon={vue}
                               description={"Vue Router, Composition API"}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;