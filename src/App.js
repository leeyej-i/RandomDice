
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect, useRef, lazy, Suspense } from 'react'

import Header from "./components/Header.js"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu from "./components/Menu.js";
import Footer from './components/Footer';

import { connect } from 'react-redux';
import { checkCookie } from './module/cookie/checkCookie';
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login/Login'))
const SignUp = lazy(() => import('./pages/SignUp/SignUp'))
const Dice = lazy(() => import('./pages/Dice/Dice'))
const Collaboration = lazy(() => import('./pages/Collaboration/Collaboration'))
const Update = lazy(() => import('./pages/Board/Update'))
const Content = lazy(() => import('./pages/Board/Content'))
const Write = lazy(() => import('./pages/Board/Write'))
const Board = lazy(() => import('./pages/Board/Board'))



function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  // const [chkCook, setChkCook] = useState(checkCookie());

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
            setMenuOpened={setMenuOpened}
          // chkCook={chkCook}
          // setChkCook={setChkCook} 
          />
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>


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
