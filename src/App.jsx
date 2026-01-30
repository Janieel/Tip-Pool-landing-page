import React from 'react'
import { Route, Routes } from 'react-router'
import Landing from './Page/Landing/Landing'

const App = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={ <Landing/> } />
      </Routes>
    </div>
  )
}

export default App