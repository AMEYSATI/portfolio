import React from 'react';
import Home from './Home';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';

function App(){
    return(
        <div className="App">
            <Navbar/>
            <Home/>
            <div className="transition-overlay"></div>
            <Education />
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
        
    )
};

export default App;