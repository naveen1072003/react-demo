import Login from './components/Login';
import User from './components/User';
import Table from './components/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {

  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Table' element={<Table/>} />
    <Route path='/user' element={<User/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
