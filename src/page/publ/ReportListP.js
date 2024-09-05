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
const ReportListP = () => {
  return (
    <>
      <HeaderP />
      <section className="container">
          <h3 className="title">최근 리포트 목록</h3>



          <Table columns={columns} dataSource={data} onChange={onChange} />
      </section>
    </>
  );
};

export default ReportListP;
