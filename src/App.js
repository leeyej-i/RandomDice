
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
import Dice from './pages/Dice/Dice';
import Collaboration from './pages/Collaboration/Collaboration';
import Content from './pages/Board/Content';
import Write from './pages/Board/Write';
import Footer from './components/Footer';
import { connect } from 'react-redux';

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <div id='wrapper'>
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
            <Route path="/collaboration" element={<Collaboration DefaultProp="10" />} />
            <Route path="/update" element={<Update />} />
            <Route path="/board" element={<Board />} />
            <Route path="/dice" element={<Dice />} />
            <Route path="/content" element={<Content />} />
            <Route path="/update" element={<Content />} />
            <Route path="/write" element={<Write />} />
          </Routes>


        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

// let mapStateToProps = (state, props) => {
//   console.log(props.levelProp)
//   return {
//     str: state.data.str
//   }
// }

// App = connect(mapStateToProps, null)(App)
export default App;
