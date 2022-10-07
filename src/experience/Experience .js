import React from 'react';
import style from './Experience.module.scss';
import Title from '../common/components/title/Title';
import Fade from 'react-reveal/Fade';
import KingBird from "./work/KingBird";
import ProjectWork from "./work/ProjectWork";

function Experience() {

    return (
        <div id='experience' className={style.ExperienceBlock}>
            <Fade right>
                <div className={style.container}>
                    <Title text={"Work Experience"}/>
                    <div className={style.works}>
                        <KingBird />
                        <ProjectWork />
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Experience;

