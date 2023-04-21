import React, { useEffect } from 'react'
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


    const handleInputMsg = (e) => {
        setMessage(e.target.value)
    }
    const sendMessage = () => {
        let msg = { counter: counter, message: message }
        socket.emit('chat-msg', msg);
        setMessage("")
    }

    return (
        <div>
            {diceChoose === false ?
                <div>
                    <h3>주사위 선택</h3>
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
                <div>
                    <ul id="messages">{messages.map((v, index) => (
                        <div key={index}>
                            <div className='user-dice-box'>
                                <div>
                                    <img style={{ display: "block" }} src={diceData[2][v.counter[0].num - 1]}></img>
                                    <span>{v.counter[0].count}</span>
                                </div>
                                <div>
                                    <img style={{ display: "block" }} src={diceData[2][v.counter[1].num - 1]}></img>
                                    <span>{v.counter[1].count}</span>
                                </div>
                                <div>
                                    <img style={{ display: "block" }} src={diceData[2][v.counter[2].num - 1]}></img>
                                    <span>{v.counter[2].count}</span>
                                </div>
                                <div>
                                    <img style={{ display: "block" }} src={diceData[2][v.counter[3].num - 1]}></img>
                                    <span>{v.counter[3].count}</span>
                                </div>
                                <div>
                                    <img style={{ display: "block" }} src={diceData[2][v.counter[4].num - 1]}></img>
                                    <span>{v.counter[4].count}</span>
                                </div>
                            </div>
                            <span>{v.message}</span>
                        </div>
                    ))}
                    </ul>
                    <form action="">
                        <input value={message} onChange={handleInputMsg} />
                        <button type="button" onClick={sendMessage}>보내기</button>
                    </form>
                </div >
            }
        </div >
    )
}

export default Collaboration