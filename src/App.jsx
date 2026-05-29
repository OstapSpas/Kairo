import { useState } from 'react'
//Styles

import './styles/App.css'
import './pages/LoginPage/LoginPage.css'

// Pages
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import HomePage from './pages/HomePage/HomePage'
import GoalTrackerPage from './pages/GoalTrackerPage/GoalTrackerPage'
function App() {

  return (
    <div className='mobile-app'>
      {/* <LoginPage />
      <RegisterPage /> */}
      {/* <HomePage /> */}
      <GoalTrackerPage />
    </div>
  )
}

export default App
