import React from 'react';

const Home = () => {
    return (
        <div>
            메인화면 <br />
            {sessionStorage.getItem("id")}님 환영합니다.
        </div >
    );
};

export default Home;