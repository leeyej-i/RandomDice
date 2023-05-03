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
    const [userDice, setUserDice] = useState([])
    const msgEndRef = useRef();

    useEffect(() => {
        socket = io.connect(ENDPOINT)
        socket.on('chat-msg', (msg) => {
            console.log(msg)
            setMessages((messages => messages.concat(msg)))
            setUserDice((userDice => userDice.concat(false)))
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
                    <Button onClick={setDiceChoose(true)} style={{ float: "right", marginTop: "10px" }} variant="secondary" >제출</Button>
                </div>
                :
                <div className='container' style={{ width: '600px', paddingBottom: '50px', padding: '0px', paddingTop: '10px', border: '1px solid #000' }}>
                    <h4 style={{ marginTop: '0px', textAlign: 'center' }}>협동 채팅방</h4>
                    <div ref={msgEndRef} style={{ height: '75vh', padding: '10px', overflowY: "auto", borderTop: '1px solid' }} id="messages">{messages.map((v, index) => (

                        <div key={index} style={{ position: 'relative', display: 'flex', flexDirection: 'row', marginBottom: '5px' }}>
                            {userDice[index] ?
                                <div className='user-dice-box' >
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
                                </div> :
                                <div></div>
                            }
                            <Button onClick={() => {
                                let newUserDice = [...userDice]
                                newUserDice[index] = !(userDice[index])
                                setUserDice(newUserDice)
                                console.log(userDice)
                            }} className='user-image' style={{ width: '10%', height: "5%", padding: '0', backgroundColor: '#fff', border: '1px solid #000', borderRadius: '10%', marginRight: '5px', fontSize: '30px', color: '#000' }}> + </Button>
                            <div className="user-msg" style={{ width: '70%', borderRadius: '15px', backgroundColor: "rgb(189 188 176 / 73" }}>

                                <span style={{ wordBreak: "break-all" }} className='c-msg'>{v.message}</span>
                            </div>
                        </div>
                    ))}
                    </div>
                    <form action="">
                        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                            <div style={{ borderTop: '1px solid', width: "100%" }}>
                                <input value={message} onChange={handleInputMsg} style={{ width: '80%', height: "100%" }} />
                                <Button variant="secondary" style={{ borderRadius: '0%', float: "right", width: "20%" }} type="button" onClick={sendMessage}>보내기</Button>
                            </div>

                        </div>
                    </form>
                </div >
            }
        </div >
    )
}

export default Collaboration