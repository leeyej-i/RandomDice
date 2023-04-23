import React, { useState } from "react";
import { Link } from "react-router-dom";


const Menu = ({ menuOpened, setMenuOpened }) => {

    const handleClickOpenMenu = () => {
        console.log(menuOpened);
        if (menuOpened === false) {
            menuOpened = true
        }
        else {
            menuOpened = false;
        }
        setMenuOpened(menuOpened);
    }

    const logout = () => {
        sessionStorage.setItem("id", "")
        window.location.replace("/")
    }

    return (
        <div className={menuOpened === false ? "menu-box" : "menu-box-active"}>
            <div className="btn-box">
                <button className="menu_btn" onClick={() => handleClickOpenMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <ul className="menu">
                {sessionStorage.getItem("id") === "" ?
                    <li><Link to="/login">로그인</Link></li> :
                    <li><Link onClick={logout}>로그아웃</Link></li>
                }
                <li><Link to="/board">게시판</Link></li>
                <li><Link to="/dice">주사위 소개</Link></li>
                <li><Link to="/collaboration">협동</Link></li>
            </ul>
        </div>
    )
}

export default Menu;