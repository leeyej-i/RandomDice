import React from 'react'
import { useState } from 'react'
import './Dice.css'
import diceData from './diceData'

const Dice = () => {
    const [diceNum, setDiceNum] = useState(0)
    const introduceDice = (e) => {
        console.log(e)
    }
    return (
        <div className="container">
            <h2>주사위 소개</h2>
            <div className='dice-set'>
                <button onClick={() => { setDiceNum(1) }}>
                    <img src={diceData[2][0]} />
                </button>
                <button onClick={() => { setDiceNum(2) }}>
                    <img src={diceData[2][1]} />
                </button>
                <button onClick={() => { setDiceNum(3) }}>
                    <img src={diceData[2][2]} />
                </button>
                <button onClick={() => { setDiceNum(4) }}>
                    <img src={diceData[2][3]} />
                </button>
                <button onClick={() => { setDiceNum(5) }}>
                    <img src={diceData[2][4]} />
                </button>
                <button onClick={() => { setDiceNum(6) }}>
                    <img src={diceData[2][5]} />
                </button>
                <button onClick={() => { setDiceNum(7) }}>
                    <img src={diceData[2][6]} />
                </button>
                <button onClick={() => { setDiceNum(8) }}>
                    <img src={diceData[2][7]} />
                </button>
                <button onClick={() => { setDiceNum(9) }}>
                    <img src={diceData[2][8]} />
                </button>
                <button onClick={() => { setDiceNum(10) }}>
                    <img src={diceData[2][9]} />
                </button>
                <button onClick={() => { setDiceNum(11) }}>
                    <img src={diceData[2][10]} />
                </button>
                <button onClick={() => { setDiceNum(12) }}>
                    <img src={diceData[2][11]} />                    </button>
                <button onClick={() => { setDiceNum(13) }}>
                    <img src={diceData[2][12]} />                    </button>
                <button onClick={() => { setDiceNum(14) }}>
                    <img src={diceData[2][13]} />                    </button>
                <button onClick={() => { setDiceNum(15) }}>
                    <img src={diceData[2][14]} />                    </button>
                <button onClick={() => { setDiceNum(16) }}>
                    <img src={diceData[2][15]} />                    </button>
                <button onClick={() => { setDiceNum(17) }}>
                    <img src={diceData[2][16]} />                    </button>
                <button onClick={() => { setDiceNum(18) }}>
                    <img src={diceData[2][17]} />                    </button>
                <button onClick={() => { setDiceNum(19) }}>
                    <img src={diceData[2][18]} />                    </button>
                <button onClick={() => { setDiceNum(20) }}>
                    <img src={diceData[2][19]} />                    </button>
                <button onClick={() => { setDiceNum(21) }}>
                    <img src={diceData[2][20]} />                    </button>
                <button onClick={() => { setDiceNum(22) }}>
                    <img src={diceData[2][21]} />                    </button>
                <button onClick={() => { setDiceNum(23) }}>
                    <img src={diceData[2][22]} />                    </button>
                <button onClick={() => { setDiceNum(24) }}>
                    <img src={diceData[2][23]} />                    </button>
                <button onClick={() => { setDiceNum(25) }}>
                    <img src={diceData[2][24]} />                    </button>
                <button onClick={() => { setDiceNum(26) }}>
                    <img src={diceData[2][25]} />                    </button>
                <button onClick={() => { setDiceNum(27) }}>
                    <img src={diceData[2][26]} />                    </button>
                <button onClick={() => { setDiceNum(28) }}>
                    <img src={diceData[2][27]} />                    </button>
                <button onClick={() => { setDiceNum(29) }}>
                    <img src={diceData[2][28]} />                    </button>
                <button onClick={() => { setDiceNum(30) }}>
                    <img src={diceData[2][29]} />                    </button>
                <button onClick={() => { setDiceNum(31) }}>
                    <img src={diceData[2][30]} />                    </button>
                <button onClick={() => { setDiceNum(32) }}>
                    <img src={diceData[2][31]} />                    </button>
                <button onClick={() => { setDiceNum(33) }}>
                    <img src={diceData[2][32]} />                    </button>
                <button onClick={() => { setDiceNum(34) }}>
                    <img src={diceData[2][33]} />                    </button>
                <button onClick={() => { setDiceNum(35) }}>
                    <img src={diceData[2][34]} />                    </button>
                <button onClick={() => { setDiceNum(36) }}>
                    <img src={diceData[2][35]} />                    </button>
                <button onClick={() => { setDiceNum(37) }}>
                    <img src={diceData[2][36]} />                    </button>
                <button onClick={() => { setDiceNum(38) }}>
                    <img src={diceData[2][37]} />                    </button>
            </div>
            <div className='dice-introduce'>
                <div className='dice-introduce-left'>
                    <img src={diceData[2][diceNum - 1]}></img>
                </div>
                <div className='dice-introduce-right'>
                    <h5 style={{ fontWeight: 'bold' }}>{diceData[0][diceNum - 1]}</h5>
                    <div>{diceData[1][diceNum - 1]}</div>
                </div>
            </div>
        </div >
    )
}

export default Dice