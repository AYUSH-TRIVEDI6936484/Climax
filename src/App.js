import React from 'react'
import Home from './Home'
import Singlemovie from './Singlemovie'
import Error from './Error'
import {BrowserRouter,Routes,Route} from 'react-router-dom';  
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='movie/:id' element={<Singlemovie/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;