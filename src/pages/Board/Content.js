import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
const Content = () => {
    const location = useLocation();
    const b_num = location.state.b_num;
    const [contents, setContents] = useState("")
    const [id, setId] = useState("")
    const [date, setDate] = useState("")
    const [title, setTitle] = useState("")

    useEffect(() => {
        getDetail()
    }, []);

    const getDetail = () => {
        axios.get("/api/detail", { params: { num: b_num } })
            .then((res) => {
                const { data } = res;
                console.log(data);
                setTitle(data[0].title)
                setDate(data[0].date)
                setContents(data[0].content)
                setId(data[0].id)
            })
            .catch((e) => {
                console.error(e);
            });
    }
    return (
        <div className="container">
            <h2>게시글 상세 화면</h2>
            <Table striped bordered hover>
                <colgroup>
                    <col width="15%" />
                    <col width="35%" />
                    <col width="15%" />
                    <col width="35%" />
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row">글 번호</th>
                        <td colSpan="3" >{b_num}</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td>{id}</td>
                        <th scope="row">작성일</th>
                        <td>{date}</td>
                    </tr>
                    <tr>
                        <th scope="row">제목</th>
                        <td colSpan="3">
                            {title}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="4" className="view_text">
                            {contents}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Content;