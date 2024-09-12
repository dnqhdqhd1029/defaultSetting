import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  height: 100vh;

  ul.list {
    padding: 30px 40px;
    font-size: 18px;

    span {
      background-color: red;
      color: #fff;
      font-weight: bold;
      border-radius: 8px;
      padding: 0 10px;
      font-size: 14px;

      &.ing {
        background-color: #0075c2;
      }
    }

    li {
      padding: 10px 0;
      list-style: disc;

      li {
        font-size: 11px;
        list-style: none;
        color: #999;
      }
    }
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1 className="font-xxl">프로젝트</h1>

      <h2>AI 검색</h2>
      <ul className="list">
        <li>
          <Link to={`/publ/main`}>
            메인화면 <span className="ing">진행중</span>
          </Link>
        </li>
      </ul>
    </HomeContainer>
  );
};

export default Home;
