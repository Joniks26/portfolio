import React from 'react';
import styles from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import telegramIcon from "../assets/images/telegram.svg";
import githubIcon from "../assets/images/GitHub-icon.png";
import likedInIcon from "../assets/images/linkedin.svg";
import Fade from 'react-reveal/Fade';
import Button from "../common/components/button/Button";

const cv = 'https://drive.google.com/file/d/1_LOsqtEpiHFxCD1qiWMN3ht-2kzXvt9G/view?usp=sharing'

function Contacts() {
    return (
        <div id='contacts' className={styles.contactsBlock}>
            <Fade up>
                <div className={styles.container}>
                    <Title text={"Contacts"}/>
                    <form className={styles.form}>
                    <span className={styles.toWorkTitle}>I am available for work</span>
                    <div className={styles.buttonBlock}>
                        <Button link={cv} text={"My CV"}/>
                    </div>
                    </form>
                    <span className={styles.number}>+7 (999) 524-88-00</span>
                    <span className={styles.copyright}>ryzhov.evgeniy.26@gmail.com</span>
                    <div className={styles.socialIcons}>
                        <div className={styles.socialIcon}>
                            <a href="https://t.me/e_ryzhov" target="blank">
                                <img src={telegramIcon} alt=""/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="https://github.com/Joniks26" target="blank">
                                <img src={githubIcon} alt=""/>
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a href="https://www.linkedin.com/in/evgeniy-ryzhov-956a7b1a8/" target="blank">
                                <img src={likedInIcon} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;