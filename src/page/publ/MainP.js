import React, { useEffect, useRef } from "react";
import HeaderP from "./HeaderP";
import { Table } from "antd";
//import type { TableColumnsType, TableProps } from 'antd';
import "../../assets/style/style.scss";

const columns = [
  {
    title: "파일 형태",
    dataIndex: "name",
    width: 150,
    render: (text, record) => (
      <>
        <button type="button" className="mr1">
          <i className="iconPdf" />
        </button>
        <button type="button" className="mr1">
          <i className="iconWord" />
        </button>
        <button type="button">
          <i className="iconQuick" />
        </button>
      </>
    ),
  },
  {
    title: "파일명",
    dataIndex: "chinese",
    sorter: (a, b) => a.age - b.age,
    render: (text, record) => (
      <>
        <button type="button" className="txt">
          <span className="txt">
            일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사
          </span>
          <span className="sub">
            일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이
          </span>
        </button>
      </>
    ),
  },
  {
    title: "날짜",
    dataIndex: "math",
    width: 200,
    render: (text, record) => <>2024.06.21 금 17:00</>,
  },
  {
    title: "상태",
    dataIndex: "english",
    width: 100,
    align: "center",
    render: (text, record) => (
      <>
        <span className="loading">
          <i className="iconLoading" />
          <em>생성중</em>
        </span>
        <span className="loading">
          <em>생성완료</em>
        </span>
      </>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: "2",
    name: "Jim Green",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: "Joe Black",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const MainP = () => {
  return (
    <>
      <HeaderP showSearch />
      <section className="container">
        <div className="infoWrap">
          <div className="infoCont">
            <dl>
              <dt>간편리포트</dt>
              <dd>
                기업 리포트를 원하는 목차만 골라서 간편하게 만들 수 있어요!
              </dd>
            </dl>
          </div>
          <div className="infoCont">
            <dl>
              <dt>묶음리포트</dt>
              <dd>여러 개의 기업을 묶어서 한 번에 리포트를 생성해요!</dd>
            </dl>
          </div>
          <div className="infoCont">
            <dl>
              <dt>큐레이션</dt>
              <dd>용도에 맞게 추천된 목차를 활용해 리포트를 만들어 보세요!</dd>
            </dl>
          </div>
          <div className="infoCont notice">
            <dl>
              <dt>
                <i className="iconNotice" />
                공지
              </dt>
              <dd>
                공지할 사항이 있다면 내용을 입력해 주세요 최대 4줄까지 입력
                가능합니다. 일이삼사오육칠팔구십일
              </dd>
            </dl>
          </div>
        </div>

        <h3 className="title">최근 리포트 목록</h3>

        <div className="totalTxt">
          <strong>현대</strong> 기업 검색 결과 <strong>42건</strong>이 있습니다.
        </div>

        <Table columns={columns} dataSource={data} onChange={onChange} />
      </section>
    </>
  );
};

export default MainP;
