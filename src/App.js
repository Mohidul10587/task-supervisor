
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Datatable from './components/Datatable';
import LogIn from './components/LogIn';
import RequireAuth from './components/RequireAuth';
import Home from './components/Home';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/datatable' element={<RequireAuth><Datatable></Datatable></RequireAuth>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>


  )
}


export default App;
