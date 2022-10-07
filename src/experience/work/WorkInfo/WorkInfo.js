import style from "./WorkInfo.module.scss";
import React from "react";

function WorkInfo(props) {
    return (
        <>
            <div className={style.workTitle}>{props.company}</div>
            <div className={style.workInfo}>
                <div>{props.employment}</div>
                <div>{props.dates}</div>
            </div>
            <div className={style.res}>Key responsibilities:</div>
        </>
    )
}

export default WorkInfo
