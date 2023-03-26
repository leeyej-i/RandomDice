
import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import Header from "./components/Header.js"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu from "./components/Menu.js";
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Update from './pages/Board/Update';
import Board from './pages/Board/Board';
import SignUp from './pages/SignUp/SignUp';
import Collaboration from './pages/Collaboration';
import Content from './pages/Board/Content';
import Write from './pages/Board/Write';

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
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/update" element={<Update />} />
          <Route path="/board" element={<Board />} />
          <Route path="/content" element={<Content />} />
          <Route path="/update" element={<Content />} />
          <Route path="/write" element={<Write />} />
          <Route path="/collaboration" element={<Collaboration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
