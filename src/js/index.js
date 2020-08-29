import React from 'react'

import logo from '../assets/logo.svg'
import '../scss/app.scss'

const App = () => (
  <div className='app'>
    <header className='app-header'>
      <img src={logo} className='app-logo' alt='logo'/>
      <p>Coming Soon.</p>
      <a href='https://github.com/01taylop/we-are-one' target='_blank' rel='noopener noreferrer'>View on GitHub</a>
    </header>
  </div>
)

export default App
