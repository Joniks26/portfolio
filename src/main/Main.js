import React from 'react';
import styles from './Main.module.scss';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

function Main() {
    return (
        <div id='main' className={styles.mainBlock}>
            <Fade top>
                <div className={styles.container}>
                    <div className={styles.greeting}>
                        <ReactTypingEffect eraseSpeed={100} speed={100} text={["Hi There!", "Hello World!"]}/>
                        <span>I am <span>Evgeniy Ryzhov</span></span>
                        <h1>Frontend Developer.</h1>
                    </div>
                    <Tilt className="Tilt" options={{ max : 35 }}>
                        <div className={styles.photo}>
                            <div className={styles.image}/>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
}

export default Main;