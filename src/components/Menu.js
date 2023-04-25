import React from 'react';
import '../App.css'
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
                    <>
                        <li><a href="/login">로그인</a></li>
                        <li><a href="/signup">회원가입</a></li>
                    </> :
                    <li><a href="/" onClick={logout}>로그아웃</a></li>
                }
                <li><a href="/board">게시판</a></li>
                <li><a href="/dice">주사위 소개</a></li>
                <li><a href="/collaboration">협동</a></li>
            </ul>
        </div>
    )
}

export default Menu;