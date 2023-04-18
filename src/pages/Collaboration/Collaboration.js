import React from 'react'
import ChooseDice from './ChooseDice'
import './Collaboration.css';
import { Button } from 'react-bootstrap';

const Collaboration = () => {
    return (
        <div>
            <h3>주사위 선택</h3>
            <div className='choose-dice-container'>

                <div className='choose-dice'><ChooseDice index="0"></ChooseDice></div>
                <div className='choose-dice'><ChooseDice index="1"></ChooseDice></div>
                <div className='choose-dice'><ChooseDice index="2"></ChooseDice></div>
                <div className='choose-dice'><ChooseDice index="3"></ChooseDice></div>
                <div className='choose-dice'><ChooseDice index="4"></ChooseDice></div>
            </div>
            <Button style={{ float: "right", marginTop: "10px" }} variant="secondary" >제출</Button>
        </div>
    )
}

export default Collaboration