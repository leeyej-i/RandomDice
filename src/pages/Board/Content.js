import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import './Content.css'
import axios from 'axios';
import { checkCookie } from '../../module/cookie/checkCookie';
const Content = () => {
    const location = useLocation();
    const b_num = location.state.b_num;
    const [contents, setContents] = useState("")
    const id = location.state.id;
    const [date, setDate] = useState("")
    const [commentContents, setCommentContents] = useState("")
    const [title, setTitle] = useState("")
    const [commentList, setCommentList] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getDetail()
        getComment()
    }, []);


    const handleInputContents = (e) => {
        setCommentContents(e.target.value)
    }

    const updateText = () => {
        navigate("/update", { state: { title: title, contents: contents, id: id } });
    }

    const deleteText = () => {
        axios.get("/api/delete", { params: { num: b_num } })
            .then((res) => {
                const { data } = res;
                window.location.replace("/board")
            })
            .catch((e) => {
                console.error(e);
            });
    }

    const getDetail = () => {
        axios.get("/api/detail", { params: { num: b_num } })
            .then((res) => {
                const { data } = res;
                console.log(data);
                setTitle(data[0].title)
                setDate(data[0].date)
                setContents(data[0].content)
            })
            .catch((e) => {
                console.error(e);
            });
    }

    const getComment = () => {
        axios.get("/api/comment", { params: { b_num: b_num } })
            .then((res) => {
                const { data } = res;
                console.log(data)
                setCommentList(data)
            })
            .catch((e) => {
                console.error(e);
            });
    }

    const writeComment = () => {
        if (!checkCookie()) {
            return alert("로그인 하세요")
        }

        else if (!commentContents) {
            return alert("내용을 입력하세요.")
        }

        else {
            let body = {
                id: sessionStorage.getItem("id"),
                contents: commentContents,
                b_num: b_num
            };

            axios.post('/api/writecomment', body)
                .then(res => {
                    console.log(res.data);
                    if (res.data === "success") {
                        window.location.reload();

                    }
                })
                .catch((e) => {
                    console.error(e);
                });
        }
    }


    return (
        <div className="container" style={{ paddingBottom: '50px' }}>
            <h2>게시글 상세 화면</h2>
            <Table striped bordered>
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
                            <div style={{ overflow: "auto", height: "500px" }}>{contents}</div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            {sessionStorage.getItem("id") !== id || !checkCookie() ? <div></div> :
                <div className='button-box'>
                    <Button style={{ float: "right" }} variant="secondary" onClick={updateText} >수정</Button>
                    <Button style={{ float: "right", marginRight: "5px" }} variant="secondary" onClick={deleteText} >삭제</Button>
                </div>
            }

            <div className='comment_box'>
                <h4>댓글</h4>
                {
                    commentList.map((v) => (
                        <div className='comment' key={v.c_num} >
                            <div className='comment-id'>{v.id}</div>
                            <div className='comment-contents'>{v.content}</div>
                        </div>
                    ))
                }
                <div>
                    <div className='comment' >

                        <div className='comment-id'>{checkCookie() ? sessionStorage.getItem("id") : null}</div>
                        <div className='comment-contents-write'><input title="내용" style={{ width: '100%' }} id="contents" name="contents" onChange={handleInputContents} /></div>
                        <Button style={{ width: "15%" }} variant="secondary" onClick={writeComment}>등록</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Content;