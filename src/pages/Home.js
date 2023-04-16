import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Home.css'

const Home = () => {
    const [slideNum, setSlideNum] = useState(0);
    const [move, setMove] = useState(true);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(true);
    const [active, setActive] = useState([true, false, false, false, false]);
    function useInterval(callback, delay) {
        const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

        useEffect(() => {
            savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
        }, [callback]);

        useEffect(() => {
            function tick() {
                savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
            }
            if (delay !== null) {
                // 만약 delay가 null이 아니라면
                let intervalId = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
                return () => clearInterval(intervalId); // unmount될 때 clearInterval을 해준다.
            }
        }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
    }

    useInterval(
        () => {
            setSlideNum(slideNum + 1 === 5 ? 0 : slideNum + 1);
        },
        move ? 3000 : null
    );

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

    const bfImg1 = ["/images/event1.png",
        "/images/event2.png",
        "/images/event3.png",
        "/images/event4.png",
        "/images/event5.png"]

    const bfImg2 = ["https://yt3.ggpht.com/mliZiT9xO2TgPQ0DihtcJd9knAAMSgtl1YDUhGxWqUETJ_HDtKxVoUnYzMyYdqm9rRQIjewXZk-_cBA=s800-c-fcrop64=1,00000000ffffffff-nd-v1",
        "https://yt3.ggpht.com/0a9zovaHdE1hsUqWcxgDg9m1PyFxLNDVAw8Hujog9sAOQoPO_fwhgaajwnqVbxlv6MWbFxEKEGl1FQ=s800-c-fcrop64=1,00000000ffffffff-nd-v1",
        "https://yt3.ggpht.com/4a9HAf-KIOIoaf7v17lb2JK4u0jyN53UTzEol60b38w5zKEvO3OLpbfAH57FxWISg7KYkQ7I1Xcw6P0=s800-c-fcrop64=1,00000000ffffffff-nd-v1",
        "https://yt3.ggpht.com/eeYGLbJvQS70S1_onPuaa2hvUEl6kR00JFJv4u3abUcRsAW7tzesbzkLsYC9NPvYpSI8mcXupFKXsQ=s800-c-fcrop64=1,00000000ffffffff-nd-v1",
        "https://yt3.ggpht.com/WzBM3rXXjcYxmOJeJi0m_7kMggX0tgWZalu2rxFlUM67WD6DiVeFRDT6T57qdIrOqaR1czejUdVlvQ=s800-c-fcrop64=1,00000000ffffffff-nd-v1"]
    const target1 = useRef(null);
    const target2 = useRef(null);
    useEffect(() => {
        target1.current.classList.remove("animatedItemUp");
        void target1.current.offsetWidth;
        target1.current.classList.add("animatedItemUp");

        target2.current.classList.remove("animatedItemLeft");
        void target2.current.offsetWidth;
        target2.current.classList.add("animatedItemLeft");
    }, [slideNum])
    return (
        <div>
            <section className="main" id="main">
                <div className="jb-box">
                    <img src="https://i0.wp.com/www.levelwinner.com/wp-content/uploads/2021/08/random-dice-guide-1000x563-2.jpg?ssl=1" />
                </div>
            </section>
            <div className='benefit-slide'>
                <h2>이벤트 및 공지</h2>
                <div className='slide-item'>

                    <div className='slide-item-left' >
                        <a href='#'><img src={bfImg1[slideNum]} ref={target1} className='animatedItemUp' /></a>

                        <div className='slide-bar'>
                            <div className='slide-page-bar'>
                                {active[0] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                {active[1] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                {active[2] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                {active[3] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}
                                {active[4] === false ? <span className='slide-page-bar-item'></span> : <span className='slide-page-bar-item-on'></span>}

                            </div>
                            <div className='slide-btn-box'>
                                {prev === true ? <button onClick={handleChangePrev} id="slide-prev"></button> : <button id="slide-prev-off"></button>}
                                {next === true ? <button onClick={handleChangeNext} id="slide-next"></button> : <button id="slide-next-off"></button>}
                                {move === true ? <button id="slide-move" onClick={handleChangeMove}></button> : <button id="slide-stop" onClick={handleChangeMove}></button>}
                                <div className='page-num'>{slideNum + 1} / 5</div>
                            </div>
                        </div>
                    </div>
                    <div className='slide-item-right'>
                        <a href='#'><img src={bfImg2[slideNum]} ref={target2} className="animatedItemLeft" /></a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;