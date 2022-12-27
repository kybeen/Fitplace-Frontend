import React from 'react'
import { useState, useEffect } from "react";
import "./Board_main.css"
import "./Board_style.css"
import Board_pagination from "./Board_pagination";
import axios from 'axios';


function Board_main(){
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const [count, setCount] = useState("");
    const [results, setResults] = useState("");

    // useEffect(() => {
    //     fetch("http://localhost:8000/posts/")
    //       .then((res) => res.json())
    //       .then((data) => setPosts(data));
    //   }, []);

    axios
      .get("http://localhost:8000/posts/", {
        "count": count,
        "results": results,
      })
      .then((response)=>{
        setCount(response.data.count);
        var posts = response.data.results;

      })

    // axios({
    //     method: "get",
    //     url: "http://localhost:8000/posts/",
    //     responseType: "type"
    // }).then(function (response) {
    //     // response Action
    // });




    return (
    <div class="board_container">
        <h1 class = "FAQ">FAQ</h1>
        <p>질문을 남겨주세요.</p>

        <label>
        페이지 당 표시할 게시물 수:&nbsp;
            <select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
            >
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            </select>
        </label>

        <main>
        {/* {posts.slice(offset, offset + limit).map(({ count }) => ( */}
          <article>
            <h3>
                {count}
            </h3>
          </article>
        {/* ))} */}
      </main>



        <div class="board_list_wrap">
            <div class="board_list">
                <div class="top">
                    <div class="num">번호</div>
                    <div class="title">제목</div>
                    <div class="writer">글쓴이</div>
                    <div class="date">작성일</div>
                    <div class="count">조회</div>
                </div>
                <div>
                    <div class="num">1</div>
                    <div class="title"><a href="/board/detail">글</a></div>
                    <div class="writer">홍길동</div>
                    <div class="date">2022-02-02</div>
                    <div class="count">1</div>
                </div>
                
            </div>
            <footer>
                <Board_pagination
                total={count}
                limit={limit}
                page={page}
                setPage={setPage}
                />
            </footer>
            {/* <div class="board_page">
                <a href="#" class="bt first">&lt;&lt;</a>
                <a href="#" class="bt prev">&lt;</a>
                <a href="#" class="num on">1</a>
                <a href="#" class="num">2</a>
                <a href="#" class="num">3</a>
                <a href="#" class="num">4</a>
                <a href="#" class="num">5</a>
                <a href="#" class="bt next">&gt;</a>
                <a href="#" class="bt last">&gt;&gt;</a>
            </div> */}
            <div class="bt_wrap">
                <a href="/board/write" class="on">글쓰기</a>
            </div>
        </div>
    </div>
    )
}

export default Board_main