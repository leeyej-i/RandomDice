import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Board.css';
import { Table, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Board = () => {

    const [boardList, setBoardList] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getList()
    }, []);

    const getList = () => {
        axios.get("/api/list", {})
            .then((res) => {
                const { data } = res;
                setBoardList(data)
            })
            .catch((e) => {
                console.error(e);
            });
    }

    const view = (num) => {
        console.log(num, "으로 들어가자")
        navigate('/content', {
            state: {
                b_num: num
            }
        });
    }

    const write = () => {
        if (sessionStorage.getItem("id") !== '') {
            navigate('/write')
        }
        else {
            alert("로그인 해주세요")
            navigate('/login')
        }
    }

    return (

        <div className="container" style={{ paddingBottom: '50px' }}>
            <h2>커뮤니티</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boardList.map((v) => (
                            <tr key={v.b_num} onClick={() => view(v.b_num)}>
                                <td>{v.b_num}</td>
                                <td>{v.title}</td>
                                <td>{v.id}</td>
                                <td>{v.date}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            {sessionStorage.getItem("id") === '' ? <div></div> :
                <Button style={{ float: "right" }} variant="secondary" onClick={() => write()}>글쓰기</Button>
            }
        </div >
    );
};

export default Board;