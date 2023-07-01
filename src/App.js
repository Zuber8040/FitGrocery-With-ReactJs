import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import HOME from './PAGES/HomePage/HOME'
import "./App.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<HOME/>}/>
          <Route path='/home'element={<HOME/>}/>
          <Route path='*'element={<>
            <h1>404 NOT FOUND</h1>
          </>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App