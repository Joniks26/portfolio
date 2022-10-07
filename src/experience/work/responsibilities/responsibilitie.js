import React from 'react';
import style from './responsibilitie.module.scss';

function Responsibilitie (props) {
    return  <li className={style.res}>
        {props.responsibilitie}
    </li>
}

export default Responsibilitie;