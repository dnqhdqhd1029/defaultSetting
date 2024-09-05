import React, { useEffect, useRef } from "react";
import HeaderP from "./HeaderP";
import { Table } from "antd";
//import type { TableColumnsType, TableProps } from 'antd';
import "../../assets/style/style.scss";

const columns = [
  {
    title: "법인명",
    dataIndex: "name",
    width: "5%",
    render: (text, record) => (
      <>
        <button type="button" className="txt">
          <span className="txt">
            일이삼사오육칠팔구십일이삼사오육칠팔구십일이
          </span>
        </button>
      </>
    ),
  },
  {
    title: "법인번호",
    dataIndex: "chinese",
    width: "10%",
    render: (text, record) => <>000000- 0000000</>,
  },
  {
    title: "대표자",
    dataIndex: "math",
    width: "10%",
    render: (text, record) => <>거래고객</>,
  },
  {
    title: "고객구분",
    dataIndex: "english",
    width: "10%",
    render: (text, record) => <>이름네자</>,
  },
  {
    title: "기업규모",
    dataIndex: "english",
    width: "11%",
    render: (text, record) => <>중소기업</>,
  },
  {
    title: "생성리포트",
    dataIndex: "english",
    width: "20%",
    render: (text, record) => (
      <>
        <span className="report">
          <i className="iconReportQuick" />
          <em className="mr1">생성완료</em>
          2024.06.21
        </span>

        {/*<span className="report">*/}
        {/*  <i className="iconReport" />*/}
        {/*  <em className="mr1">생성완료</em>*/}
        {/*  2024.06.21*/}
        {/*</span>*/}
      </>
    ),
  },
  {
    title: "직원정보",
    width: "11%",
    dataIndex: "english",
    render: (text, record) => <>20193143</>,
  },
  {
    title: "리포트 만들기",
    dataIndex: "english",
    width: "11%",
    render: (text, record) => (
      <>
        <button className="report">
          <i className="iconReportAdd" />
        </button>
      </>
    ),
  },
  {
    title: "보관함 담기",
    dataIndex: "english",
    width: "11%",
    render: (text, record) => (
      <>
        <button className="report">
          <i className="iconKeepAdd" />
        </button>
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
const ListP = () => {
  return (
    <>
      <HeaderP />
      <section className="container">
        <div className="searchWrap">
          <input type="search" placeholder="찾으시는 기업을 검색하세요" />
          <button type="button" className="iconSearch" />
        </div>

        <div className="totalTxt">
          <strong>현대</strong> 기업 검색 결과 <strong>42건</strong>이 있습니다.
        </div>

        <Table columns={columns} dataSource={data} onChange={onChange} />
      </section>
    </>
  );
};

export default ListP;
