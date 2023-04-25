import React from 'react';
import './Update.css'
import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Update = () => {

    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const location = useLocation();

    useEffect(() => {
        setTitle(location.state.title)
        setContents(location.state.contents)
    }, []);


    const handleInputTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleInputContents = (e) => {
        setContents(e.target.value)
    }

    const writeSubmit = () => {
        if (!title) {
            return alert("제목을 입력하세요")
        }

        else if (!contents) {
            return alert("내용을 입력하세요.")
        }

        else {
            let body = {
                id: sessionStorage.getItem("id"),
                title: title,
                contents: contents
            };

            axios.post('/api/update', body)
                .then(res => {
                    console.log(res.data);
                    if (res.data === "success") {
                        window.history.back()

                    }
                })
                .catch((e) => {
                    console.error(e);
                });
        }
    }


    return (
        <div className="container" style={{ paddingBottom: '50px' }}>
            <h2>글 수정하기</h2>
            <Table bordered>
                <colgroup>
                    <col width="15%" />
                    <col width="85%" />
                </colgroup>
                <tbody>
                    <tr className='title_tr'>
                        <th scope="row">제목</th>
                        <td  >
                            <input type="text" id="title" name="title" value={title} onChange={handleInputTitle}
                            />
                        </td>
                    </tr>
                    <tr className='content_tr'>
                        <td colSpan={2} >
                            <textarea title="내용" id="contents" value={contents} name="contents" onChange={handleInputContents}
                            ></textarea>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Button style={{ float: "right" }} variant="secondary" onClick={writeSubmit}>제출</Button>
        </div>
    );
};

export default Update;