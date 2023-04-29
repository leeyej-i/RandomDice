import './SignUp.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { setCookie } from '../../module/cookie/cookies';

const SignUp = () => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [checkPwd, setCheckPwd] = useState("");
    const [nickname, setNickname] = useState("");
    const [gameId, setGameId] = useState("");
    const [idMsg, setidMsg] = useState("");
    const [checkId, setCheckId] = useState(false);
    const navigate = useNavigate()

    const handleInputId = (e) => {
        setId(e.target.value)
        setCheckId(false)
    }

    const handleInputGameId = (e) => {
        setGameId(e.target.value)
    }

    const handleInputCheckPwd = (e) => {
        setCheckPwd(e.target.value)
    }

    const handleInputPwd = (e) => {
        setPassword(e.target.value)
    }

    const handleInputNickname = (e) => {
        setNickname(e.target.value)
    }

    const handleIdCheck = (e) => {
        e.preventDefault();
        const idRegEx = /^[A-Za-z0-9]{5,15}$/
        if (!id) {
            return alert("아이디를 입력해주세요.")
        }

        else if (!idRegEx.test(id)) {
            return alert("5~15자리의 영문자 + 숫자를 입력해주세요.")
        }
        else {
            axios.post('/api/idcheck', { id })
                .then(res => {
                    console.log(res);
                    if (res.data[0].cnt === 1) {
                        setidMsg("아이디가 중복입니다.")
                        setCheckId(false)
                    }
                    else {
                        setidMsg("사용가능한 아이디")
                        setCheckId(true)
                    }
                })
                .catch((e) => {
                    console.error(e);
                });
        }
    }

    const onSignup = (e) => {
        e.preventDefault();

        const idRegEx = /^[A-Za-z0-9]{5,15}$/
        const pwdRegEx = /^[A-Za-z0-9]{5,15}$/
        if (!id) {
            return alert("아이디를 입력해주세요.")
        }

        else if (!idRegEx.test(id)) {
            return alert("5~15자리의 영문자 + 숫자를 입력해주세요.")
        }

        else if (!checkId) {
            return alert("아이디 중복체크해주세요.")
        }

        else if (!password) {
            return alert("비밀번호를 입력해주세요.")
        }

        else if (!pwdRegEx.test(password)) {
            return alert("5~15자리의 영문자 + 숫자를 입력해주세요.")
        }

        else if (!checkPwd) {
            return alert("비밀번호 재확인을 입력해주세요.")
        }

        else if (password !== checkPwd) {
            return alert("비밀번호 확인이 맞지 않습니다.")
        }

        else if (!nickname) {
            return alert("닉네임 입력하세요.")
        }

        else if (!gameId) {
            return alert("게임 아이디를 입력하세요.")
        }



        else {
            let body = {
                id: id,
                password: password,
                nickname: nickname,
                gameId: gameId

            };

            axios.post('/api/signup', body)
                .then(res => {
                    console.log(res.data.message);
                    if (res.data.message === "회원가입 성공") {

                        const accessToken = res.data.accessToken
                        setCookie("token", accessToken, {
                            path: "/",
                            sameSite: "strict",
                        })
                        window.location.replace("/")

                    }
                })
                .catch((e) => {
                    console.error(e);
                });
        }
    }

    return (
        <div id="container" role="main">
            <form>
                <div id="content">
                    <h2>RandomDice</h2>
                    <div className="join_content">
                        <div className="row_group">
                            <div className="join_row">
                                <h3 className="join_title"><label>아이디(*)</label>
                                    <button className='btn_id' onClick={handleIdCheck}>중복체크</button></h3>

                                <span className="ps_box int_id">
                                    <input type="text" id="id" name="id" className="int" title="ID" value={id} onChange={handleInputId} />

                                </span>
                                <span className='id_msg'>{idMsg}</span>

                            </div>
                            <div className="join_row">
                                <h3 className="join_title"><label>비밀번호(*)</label></h3>
                                <span className="ps_box int_id">
                                    <input type="password" id="pswd1" name="pswd1" className="int" title="비밀번호 입력" aria-describedby="pswd1Msg" value={password} onChange={handleInputPwd} />
                                </span>
                            </div>
                            <div className="join_row">
                                <h3 className="join_title"><label>비밀번호 재확인(*)</label></h3>
                                <span className="ps_box int_id">
                                    <input type="password" id="pswd2" name="pswd2" className="int" title="비밀번호 재확인 입력" aria-describedby="pswd2Blind" value={checkPwd} onChange={handleInputCheckPwd} />
                                </span>
                            </div>
                            <div className="join_row">
                                <h3 className="join_title"><label>닉네임(*)</label></h3>
                                <span className="ps_box int_id">

                                    <input type="text" id="name" name="name" title="이름" className="int" value={nickname} onChange={handleInputNickname} />
                                </span>
                            </div>
                            <div className="join_row">
                                <h3 className="join_title"><label>게임 아이디(*)</label></h3>
                                <span className="ps_box int_id">
                                    <input type="text" id="gameId" name="id" className="int" title="GameID" value={gameId} onChange={handleInputGameId} />
                                </span>
                            </div>
                        </div>
                        <div className="btn_area">
                            <button type="button" id="btnJoin" onClick={onSignup} className="btn_type btn_primary"><span>가입하기</span></button>
                        </div>
                    </div>

                </div>
            </form>
        </div >
    );
};

export default SignUp;