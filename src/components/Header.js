import React, { useState, useRef } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 80px;
    transition: 0.4s ease;
    background-color: rgba(0,0,0, 0.2);
    &.hide {
        transform: translateY(-80px);
    }
`;

const Header = ({ menuOpened, setMenuOpened }) => {

    const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const ref = useRef(document);

    const logout = () => {
        sessionStorage.setItem("id", "")
        window.location.replace("/home")
    }
    const handleClickOpenMenu = () => {
        console.log(menuOpened)
        if (menuOpened === false) {
            menuOpened = true
        }
        else {
            menuOpened = false
        }
        console.log(menuOpened)
        setMenuOpened(menuOpened)
    }
    return (
        <HeaderWrap className={hide && 'hide'}>
            <div className="head-container">
                <h1 className="title"><Link to="/home">RandomDice</Link></h1>
                <ul className="header-menu">
                    {sessionStorage.getItem("id") === "" ?
                        <li><Link to="/login">로그인</Link></li> :
                        <li><Link onClick={logout}>로그아웃</Link></li>
                    }
                    <li><Link to="/board">게시판</Link></li>
                    <li><Link to="/collaboration">협동</Link></li>
                </ul>
                <button className="menu_btn" onClick={() => handleClickOpenMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </HeaderWrap>
    );
}

export default Header;