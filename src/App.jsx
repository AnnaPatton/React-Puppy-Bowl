import { useState } from 'react';
import { fetchAllPlayers } from './API/index';
import './App.css';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import {Route, Routes} from "react-router-dom";

function App() {

  return(
    <>
     <Routes>
      <Route path='/' element={<AllPlayers/>}/>
      {/* <Route path='/:id' element={<SinglePlayer/>}/> changed path to: */}
      <Route path='/SinglePlayer/:id' element={<SinglePlayer/>}/> 
     </Routes>
    </>
  )
}

export default App
