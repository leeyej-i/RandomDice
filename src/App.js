
import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import Header from "./components/Header.js"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu from "./components/Menu.js";
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Update from './pages/Update';
import Board from './pages/Board/Board';
import SignUp from './pages/SignUp/SignUp';
import Collaboration from './pages/Collaboration';

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Header
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Menu
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/update" element={<Update />} />
          <Route path="/board" element={<Board />} />
          <Route path="/collaboration" element={<Collaboration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
