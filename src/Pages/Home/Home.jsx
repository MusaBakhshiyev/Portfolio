import { useState } from 'react'

import PhotoInfo from '../../Components/PhotoInfo/PhotoInfo'
import About from '../../Components/About/About'
import Works from '../../Components/Works/Works'
import Certificate from '../../Components/Certificate/Certificate'
import Service from '../../Components/Service/Service'
import Contact from '../../Components/Contact/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Home() {

    return (
        <div className="Home">
            <PhotoInfo />
            <About />
            <Certificate />
            <Works />
            <Service />
            <Contact />
        </div>
    )
}
