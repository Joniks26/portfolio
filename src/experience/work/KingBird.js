import React from 'react';
import style from './Work.module.scss';
import Responsibilitie from "./responsibilities/responsibilitie";
import WorkInfo from "./WorkInfo/WorkInfo";

function KingBird () {
    return (
        <>
            <WorkInfo company = 'KingBird Studio' employment='Full time' dates='feb 2022 - present day'/>
            <div className={style.responsibilities}>
                <ul>
                    <Responsibilitie responsibilitie='Development new components and pages with React&Redux;' />
                    <Responsibilitie responsibilitie='Support and update of the online store with Vue&Vuex;' />
                    <Responsibilitie responsibilitie='Project architectural solutions (layering UI, BLL, DAL, server);' />
                    <Responsibilitie responsibilitie='RESTful (Registration/loginization/pagination/payment etc);' />
                    <Responsibilitie responsibilitie='Proper BLL state management;' />
                    <Responsibilitie responsibilitie='Working with the server using ajax (CRUD determination and data processing);' />
                    <Responsibilitie responsibilitie='Team developement;' />
                    <Responsibilitie responsibilitie='Bug fixing, deployin.' />
                </ul>
            </div>
        </>
    )
}

export default KingBird;