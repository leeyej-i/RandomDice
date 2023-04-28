import React, { useEffect, useRef } from 'react'
import ChooseDice from './ChooseDice'
import './Collaboration.css';
import { Button } from 'react-bootstrap';
import diceData from '../Dice/diceData';
import { useSelector } from 'react-redux'
import { useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
let socket;
const Collaboration = () => {
    const [diceChoose, setDiceChoose] = useState(false)
    const [name, setName] = useState('yeji');
    const [message, setMessage] = useState('')
    const counter = useSelector((state) => state.counter.counters)
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'http://localhost:3001'
    const msgEndRef = useRef();

    useEffect(() => {
        socket = io.connect(ENDPOINT)
        socket.on('chat-msg', (msg) => {
            console.log(msg)
            setMessages((messages => messages.concat(msg)))
        })

        return () => {
            socket.disconnect();
        };
    }, [])

    const scrollToBottom = () => {
        if (msgEndRef.current) {
            msgEndRef.current.scrollTop = msgEndRef.current.scrollHeight;
        }
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);


    const handleInputMsg = (e) => {
        setMessage(e.target.value)
    }
    const sendMessage = () => {
        let msg = { counter: counter, message: message }
        socket.emit('chat-msg', msg);
        setMessage("")
    }

    return (
        <div className='container' style={{ paddingBottom: '50px' }}>
            {diceChoose === false ?
                <div>
                    <h2>주사위 선택</h2>
                    <div className='choose-dice-container'>

                        <div className='choose-dice'><ChooseDice index="0"></ChooseDice></div>
                        <div className='choose-dice'><ChooseDice index="1"></ChooseDice></div>
                        <div className='choose-dice'><ChooseDice index="2"></ChooseDice></div>
                        <div className='choose-dice'><ChooseDice index="3"></ChooseDice></div>
                        <div className='choose-dice'><ChooseDice index="4"></ChooseDice></div>
                    </div>
                    <Button onClick={() => {
                        setDiceChoose(true)
                    }} style={{ float: "right", marginTop: "10px" }} variant="secondary" >제출</Button>
                </div>
                :
                <div className='container' style={{ paddingBottom: '50px' }}>
                    <h2>협동 채팅방</h2>
                    <div ref={msgEndRef} style={{ height: '60vh', overflowY: "auto" }} id="messages">{messages.map((v, index) => (
                        <div className="user-msg" key={index}>
                            <div className='user-dice-box'>
                                <div className="user-dice-box-item">
                                    <img src={diceData[2][v.counter[0].num - 1]}></img>
                                    <div className="user-dice-box-item-text">{v.counter[0].count}</div>
                                </div>
                                <div className="user-dice-box-item">
                                    <img src={diceData[2][v.counter[1].num - 1]}></img>
                                    <div className="user-dice-box-item-text">{v.counter[1].count}</div>
                                </div>
                                <div className="user-dice-box-item">
                                    <img src={diceData[2][v.counter[2].num - 1]}></img>
                                    <div className="user-dice-box-item-text">{v.counter[2].count}</div>
                                </div>
                                <div className="user-dice-box-item">
                                    <img src={diceData[2][v.counter[3].num - 1]}></img>
                                    <div className="user-dice-box-item-text">{v.counter[3].count}</div>
                                </div>
                                <div className="user-dice-box-item">
                                    <img src={diceData[2][v.counter[4].num - 1]}></img>
                                    <div className="user-dice-box-item-text">{v.counter[4].count}</div>
                                </div>
                            </div>
                            <span className='c-msg'>{v.message}</span>
                        </div>
                    ))}
                    </div>
                    <form action="">
                        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                            <div style={{ border: '1px solid', width: "80%" }}>
                                <input value={message} onChange={handleInputMsg} />
                            </div>
                            <Button variant="secondary" style={{ float: "right", width: "20%" }} type="button" onClick={sendMessage}>보내기</Button>

                        </div>
                    </form>
                </div >
            }
        </div >
    )
}

export default Collaboration