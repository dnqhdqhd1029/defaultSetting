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
      <ul className="list">
        <li>
          <Link to={`/publ/layout`}>레이아웃 가이드</Link>
        </li>

        {/*<li>*/}
        {/*  <Link to={`/publ/guide`}>guide</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link to={`/preview`}>미리보기화면</Link>*/}
        {/*</li>*/}
      </ul>

      <h2>기업분석리포트</h2>
      <ul className="list">
        <li>
          <Link to={`/publ/main`}>
            기업분석 리포트 메인화면 <span>완료</span>
          </Link>
        </li>
        <li>
          <Link to={`/publ/list`}>
            기업 검색결과 <span>완료</span>
          </Link>
        </li>
        <li>
          <Link to={`/publ/`}>
            나의 보관함 팝업 <span>완료(header에 공통)</span>
          </Link>
        </li>
        <li>
          <Link to={`/publ/`}>
            나의 보관함 팝업 최종확인 <span className="ing">진행중</span>
          </Link>
        </li>
        <li>
          <Link to={`/publ/curationEdit`}>
            나의 큐레이터 편집  <span>완료</span>
          </Link>
        </li>

        <li>
          <Link to={`/publ/curationList`}>
            추천큐레이션 <span>완료</span>
          </Link>
        </li>
        <li>
          <Link to1={`/publ/reportList`}>
            최근리포트 목록 <span>완료</span>
          </Link>
        </li>
        <li>
          <Link to={`/publ/report`}>
            리포트 상세화면 <span>완료</span>
          </Link>
        </li>
        <li>
          <Link to={`/publ/preview`}>
            미리보기<span>Preview 완료</span>
          </Link>
        </li>
      </ul>
    </HomeContainer>
  );
};

export default Home;
