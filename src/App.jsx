import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhotoInfo from './Components/PhotoInfo/PhotoInfo'
import About from './Components/About/About'
import Works from './Components/Works/Works'
import Certificate from './Components/Certificate/Certificate'
import Service from './Components/Service/Service'
import Contact from './Components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PhotoInfo />
      <About />
      <Certificate />
      <Works />
      <Service/>
      <Contact/>
    </div>
  )
}

export default App
