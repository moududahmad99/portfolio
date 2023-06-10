import React from 'react'
import Navbar from '../../Components/Navbar'
import About from '../../Components/About'
import Projects from '../../Components/Projects'
import Contact from '../../Components/Contact'

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <About />
            <Projects />
            <Contact />
        </React.Fragment>
    )
}

export default Home