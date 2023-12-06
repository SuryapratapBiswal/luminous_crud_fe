import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/reuseable/NavBar.jsx';
import Userlist from './components/pages/UserList.jsx';
import UpdateUser from './components/pages/UpdateUser.jsx';
import AddUser from './components/pages/AddUser.jsx';
import ViewUser from './components/pages/ViewUser.jsx';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Userlist />} />
          <Route path='/updateuser' element={<UpdateUser />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/viewuser' element={<ViewUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;