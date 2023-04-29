import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from "axios";
import { getCookie, removeCookie } from "../module/cookie/cookies";
import { checkCookie } from "../module/cookie/checkCookie";

const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 80px;
    transition: 0.4s ease;
    background-color: rgba(0,0,0, 0.4);
    &.hide {
        transform: translateY(-80px);
    }
`;

const Header = ({ menuOpened, setMenuOpened }) => {

    const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const ref = useRef(document);

    const handleScroll = () => {
        const { pageYOffset } = window;
        const moveY = pageYOffset - pageY;
        const hide = pageYOffset !== 0 && moveY >= 0;
        setHide(hide);
        setPageY(pageYOffset);
    };

    const throttle = (callback, wait) => {
        // true로 주어서 콜백함수가 처음 한번은 바로 실행되도록 함
        let waiting = true;
        return function () {
            if (waiting) {
                callback();
                waiting = false;
                // wait만큼 시간이 지난 후, true로 바뀌면서 다시 실행됨.
                setTimeout(() => {
                    waiting = true;
                }, wait);
            }
        };
    };
    useEffect(() => {
        ref.current.addEventListener('scroll', throttle(handleScroll, 1000));
        return () =>
            ref.current.removeEventListener('scroll', throttle(handleScroll, 1000));
    }, [pageY]);

    const logout = () => {
        removeCookie("token")
        window.location.replace("/")
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
                <h1 className="title"><Link to="/">RandomDice</Link></h1>
                <ul className="header-menu">
                    {!checkCookie() ?
                        <>
                            <li><Link to="/login">로그인</Link></li>
                            <li><Link to="/signup">회원가입</Link></li>
                        </> :
                        <li><Link onClick={logout}>로그아웃</Link></li>
                    }
                    <li><Link to="/board">게시판</Link></li>
                    <li><Link to="/dice">주사위 소개</Link></li>
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