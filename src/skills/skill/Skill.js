import React from 'react';
import styles from './Skill.module.scss'




function Skill(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src={props.icon} alt=""/>
            </div>
            <h3 className={styles.skillTitle}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Skill;