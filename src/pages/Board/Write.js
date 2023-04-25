import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './Write.css';
import axios from 'axios';

const Write = () => {

    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

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

            axios.post('/api/write', body)
                .then(res => {
                    console.log(res.data);
                    if (res.data === "success") {
                        window.location.replace("/board")

                    }
                })
                .catch((e) => {
                    console.error(e);
                });
        }
    }


    return (
        <div className="container" style={{ paddingBottom: '50px' }}>
            <h2>글쓰기</h2>
            <Table bordered>
                <colgroup>
                    <col width="15%" />
                    <col width="85%" />
                </colgroup>
                <tbody>
                    <tr className='title_tr'>
                        <th scope="row">제목</th>
                        <td  >
                            <input type="text" id="title" name="title" onChange={handleInputTitle}
                            />
                        </td>
                    </tr>
                    <tr className='content_tr'>
                        <td colSpan={2} >
                            <textarea title="내용" id="contents" name="contents" onChange={handleInputContents}
                            ></textarea>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Button style={{ float: "right", display: "block" }} variant="secondary" onClick={writeSubmit}>제출</Button>
        </div>
    );
};

export default Write;