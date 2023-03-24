import React, { useState } from "react";


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
                <li><a href="/main" onClick={() => handleClickOpenMenu()}>로그인</a></li>
                <li><a href="#news" onClick={() => handleClickOpenMenu()}>로그아웃</a></li>
                <li><a href="#news" onClick={() => handleClickOpenMenu()}>회원정보</a></li>
                <li>
                    <a href="#member" onClick={() => handleClickOpenMenu()}>게시판</a>
                    <ul className="member">
                        <li><a href="#member0" onClick={() => handleClickOpenMenu()}>신고 게시판</a></li>
                        <li><a href="#member1" onClick={() => handleClickOpenMenu()}>자유 게시판</a></li>
                        <li><a href="#member2" onClick={() => handleClickOpenMenu()}>공략 게시판</a></li>
                        <li><a href="#member2" onClick={() => handleClickOpenMenu()}>홍보 게시판</a></li>
                    </ul>
                </li>
                <li><a href="#album" onClick={() => handleClickOpenMenu()}>협동</a></li>
            </ul>
        </div>
    )
}

export default Menu;