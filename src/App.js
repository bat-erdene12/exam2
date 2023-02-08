import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Titles from './container/titles';
import Titles2 from './container/titles2';
import Titles3 from './container/titles3';
import Home from './home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/title1" element={<Titles/>}/>
        <Route path="/title2" element={<Titles2/>}/>
        <Route path="/title3" element={<Titles3/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
