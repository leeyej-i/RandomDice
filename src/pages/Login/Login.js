import './Login.css';
import React, { useState } from 'react';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { setCookie } from '../../module/cookie/cookies';

const StyledLink = styled(Link)`
	box-sizing: border-box;
	display: block;
	padding: 4px 8px;
	margin: 10px auto;
	text-align: right;
    font-size:1.1rem;
    font-weight:bold;
`;
const Login = () => {

    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const navigate = useNavigate()
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const handleDeleteInputId = () => {
        setInputId("")
    }

    const handleDeleteInputPw = () => {
        setInputPw("")
    }

    const onLogin = (e) => {
        e.preventDefault();
        if (!inputId) {
            return alert("ID를 입력해주세요.")
        }

        else if (!inputPw) {
            return alert("Password를 입력해주세요.")
        }

        else {
            let body = {
                id: inputId,
                password: inputPw
            };

            axios.post('/api/login', body)
                .then(res => {
                    if (res.data.message === "로그인 성공") {
                        console.log(res.data)
                        const accessToken = res.data.accessToken
                        setCookie("token", accessToken, {
                            path: "/",
                            sameSite: "strict",
                        })
                        sessionStorage.setItem("id", inputId)
                        window.location.replace("/")
                    } else {
                        alert("아이디, 패스워드가 정확하지 않습니다.");
                        setInputId("")
                        setInputPw("")

                        navigate("/login");
                    }
                })
                .catch((e) => {
                    console.error(e);
                });

        }


    }


    return (
        <div className='login_container'>
            <h1>RandomDice</h1>
            <div className='login_container_form'>
                <form>
                    <div className="box_tf fst">
                        <input type="text" name="input_id" placeholder="아이디" className="tf_g" value={inputId} onChange={handleInputId} />
                        <div className="util_tf">
                            <button type="button" onClick={handleDeleteInputId} className={inputId ? "btn_clear" : "btn_clear_none"}></button>
                        </div>
                    </div>
                    <div className="box_tf">
                        <input type="password" name="input_pw" placeholder="비밀번호" className="tf_g" value={inputPw} onChange={handleInputPw} />
                        <div className="util_tf">
                            <button type="button" onClick={handleDeleteInputPw} className={inputPw ? "btn_clear" : "btn_clear_none"}></button>
                        </div>
                    </div>
                    <div className="confirm_btn">
                        <button type="submit" onClick={onLogin} className="btn_g highlight submit">로그인</button>
                    </div>
                </form>
                <StyledLink to="/signup">회원가입</StyledLink>
            </div >
        </div >
    );
};

export default Login;