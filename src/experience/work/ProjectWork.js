import React from 'react';
import style from './Work.module.scss';
import Responsibilitie from "./responsibilities/responsibilitie";
import WorkInfo from "./WorkInfo/WorkInfo";

function ProjectWork () {
    return (
        <>
            <WorkInfo company = 'Project Work' employment='Part time' dates='jan 2021 - feb 2022'/>
            <div className={style.responsibilities}>
                <ul>
                    <Responsibilitie responsibilitie='Project architectural solutions (layering UI, BLL, DAL, Server);' />
                    <Responsibilitie responsibilitie='Development and update components with React;' />
                    <Responsibilitie responsibilitie='RESTful (Registration/loginization/pagination etc);' />
                    <Responsibilitie responsibilitie='Proper BLL state management with Redux, Thunk, Toolkit etc;' />
                    <Responsibilitie responsibilitie='Working with the server using ajax (CRUD determination and data processing);' />
                    <Responsibilitie responsibilitie='Performance enhancement (memo, useCallback, lazy, etc.);' />
                    <Responsibilitie responsibilitie='Covering applications with tests;' />
                    <Responsibilitie responsibilitie='Team developement;' />
                    <Responsibilitie responsibilitie='Bug fixing, deployin.' />
                </ul>
            </div>
        </>
    )
}

export default ProjectWork;