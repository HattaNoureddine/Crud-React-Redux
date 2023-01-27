import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserList from './Components/UserList';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/UpdateUser';

function App() {
  return (
    <div style={{paddingLeft:40}}>
    <h1>Crud React-Redux </h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserList/>} />
      <Route path='/add-user' element={<AddUser/>} />
      <Route path='/update-user/:id' element={<UpdateUser/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
