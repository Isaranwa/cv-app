import React from 'react'
import General from './components/General'
import './App.css'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  return (
    <div className='App'>
      <h1>CV Application</h1>
      <div className='row'>
        <div className='col-sm-4'>
        <General/>
        </div>
        <div className='col-sm-4'>
        <Education/>
        </div>
        <div className='col-sm-4'>
        <Experience/>
        </div>
      </div>
     
    </div>
  )
}

export default App