import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Home.css'
const Home = () => {
    const [slideNum, setSlideNum] = useState(0);
    const [move, setMove] = useState(true);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(true);
    const [active, setActive] = useState([true, false, false, false, false]);

    let timer;

    useEffect(() => {
        if (move === false) return;
        let newSlideNum = slideNum + 1
        if (newSlideNum == 5) { newSlideNum = 0 }
        timer = setInterval(() => setSlideNum(newSlideNum), 3000);

        return () => clearInterval(timer)
    });


    useEffect(() => {
        let newActive = [false, false, false, false, false]
        newActive[slideNum] = true;
        setActive(newActive);
        if (slideNum === 0) {
            setPrev(false);
            setNext(true);
            return;
        }
        if (slideNum === 4) {
            setNext(false);
            return;
        }
        setPrev(true);
        setNext(true);
    }, [slideNum]);

    const handleChangeMove = () => {
        setMove(!move);
    }

    const handleChangePrev = () => {
        setMove(false)
        setSlideNum(slideNum === 0 ? 0 : slideNum - 1);
    }

    const handleChangeNext = () => {
        setMove(false)
        setSlideNum(slideNum === 4 ? 4 : slideNum + 1);

    }

    const bfImg1 = ["/images/event1.webp",
        "/images/event2.webp",
        "/images/event3.webp",
        "/images/event4.webp",
        "/images/event5.webp"]

    const bfImg2 = ["/images/event6.webp",
        "/images/event7.webp",
        "/images/event8.webp",
        "/images/event9.webp",
        "/images/event10.webp"]
    const target1 = useRef(null);
    const target2 = useRef(null);

    return (
        <div>
            <section className="main" id="main">
                <div className="jb-box">
                    <img alt='배경화면' src='/images/background.webp' />
                </div>
            </section>
            <div className='container' style={{ paddingBottom: '50px' }}>
                <h2>이벤트 및 공지</h2>
                <div className='slide-item'>

                    <div className='slide-item-left' >
                        <a href='#'><img alt='이벤트 화면1' src={bfImg1[slideNum]} ref={target1} className='animatedItemUp' /></a>

                        <div className='slide-bar'>
                            <div className='slide-page-bar'>
                                {active[0] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                {active[1] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                {active[2] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                {active[3] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                {active[4] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}

                            </div>
                            <div className='slide-btn-box'>
                                {prev === true ? <button type='button' onClick={handleChangePrev} id="slide-prev"></button> : <button type='button' id="slide-prev-off"></button>}
                                {next === true ? <button type='button' onClick={handleChangeNext} id="slide-next"></button> : <button type='button' id="slide-next-off"></button>}
                                {move === true ? <button type='button' id="slide-move" onClick={handleChangeMove}></button> : <button type='button' id="slide-stop" onClick={handleChangeMove}></button>}
                                <div className='page-num'>{slideNum + 1} / 5</div>
                            </div>
                        </div>
                    </div>
                    <div className='slide-item-right'>
                        <a href='#'><img alt='이벤트 화면2' src={bfImg2[slideNum]} ref={target2} className="animatedItemLeft" /></a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;