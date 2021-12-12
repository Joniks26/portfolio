import React from 'react';
import styles from './Footer.module.scss';
import telegramIcon from "../assets/images/telegram.svg"
import facebookIcon from "./../assets/images/facebook.svg"
import likedinIcon from "./../assets/images/linkedin.svg"
import Title from "../common/components/title/Title";



function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container} >
                <Title text={"Evgeniy Ryzhov "}/>
                <div className={styles.socialIcons}>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={telegramIcon} alt=""/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={facebookIcon} alt=""/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={likedinIcon} alt=""/>
                        </a>
                    </div>
                </div>
                <span className={styles.copyright}>2021 All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;