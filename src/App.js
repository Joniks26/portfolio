import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Experience from "./experience/Experience ";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

export default App;
