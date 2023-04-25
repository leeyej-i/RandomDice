import React, { useState } from 'react'
import { increaseCount, decreaseCount, changeNum } from './../../module/reducer/counter'
import { useDispatch, useSelector } from 'react-redux'
import diceData from '../Dice/diceData'
import { Button } from 'react-bootstrap'
const ChooseDice = (props) => {
    const index = Number(props.index);
    const [open, setOpen] = useState(false)
    let dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counters[index])
    const diceDispatch = (index, num) => {
        dispatch(changeNum({ index, num }))
    }
    return (
        <div>
            <div>
                <button style={{ width: "100%", display: "block" }} onClick={() => setOpen(true)}><img style={{ width: "100%", display: "block" }} src={diceData[2][counter.num - 1]}></img></button>

            </div>
            {open ?
                <div className='c-dice-set'>
                    <button onClick={() => {
                        diceDispatch(index, 1)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][0]} />
                    </button>
                    <button onClick={() => {
                        diceDispatch(index, 2)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][1]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 3)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][2]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 4)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][3]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 5)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][4]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 6)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][5]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 7)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][6]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 8)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][7]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 9)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][8]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 10)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][9]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 11)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][10]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 12)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][11]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 13)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][12]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 14)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][13]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 15)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][14]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 16)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][15]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 17)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][16]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 18)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][17]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 19)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][18]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 20)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][19]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 21)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][20]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 22)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][21]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 23)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][22]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 24)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][23]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 25)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][24]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 26)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][25]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 27)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][26]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 28)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][27]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 29)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][28]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 30)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][29]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 31)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][30]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 32)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][31]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 33)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][32]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 34)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][33]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 35)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][34]} />                      </button>
                    <button onClick={() => {
                        diceDispatch(index, 36)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][35]} />                            </button>
                    <button onClick={() => {
                        diceDispatch(index, 37)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][36]} />                            </button>
                    <button onClick={() => {
                        diceDispatch(index, 38)
                        setOpen(false)
                    }}>
                        <img src={diceData[2][37]} />                            </button>
                </div> :
                <div></div>

            }
            <div className='class-box'>
                {counter.count <= 7 ? <Button style={{ width: '15%' }} variant="secondary" disabled>-</Button> :
                    <Button variant="secondary" style={{ width: '15%', textAlign: 'center' }} onClick={() => dispatch(decreaseCount(index))}>-</Button>
                }
                <span style={{ margin: '5px' }} >{counter.count}</span>
                {counter.count >= 15 ? <Button style={{ width: '15%' }} variant="secondary" disabled>+</Button> :
                    <Button variant="secondary" style={{ width: '15%', textAlign: 'center' }} onClick={() => dispatch(increaseCount(index))}>+</Button>
                }
            </div>
        </div >
    )
}

export default ChooseDice