import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {


  return (
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/estimate' element={<Contact />} />
        </Routes>
      </div>
  )
}

export default App
