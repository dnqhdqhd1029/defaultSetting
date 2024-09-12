import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  padding: 20px;
  height: 100vh;
  font-size: 14px;
  
  h2{
    font-size: 20px;
    font-weight: bold;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    
    
    th{
      background-color: #f5f5f5;
      text-align: center;
      padding: 8px;
      border-top: 2px solid #00538A;
    }
    
    td{
      border: 1px solid #ddd;
        text-align: left;
        padding: 8px;
      
      span{
        border-radius: 8px;
        background-color: #ddd;
        color: #fff;
        padding: 5px 8px;
        font-size: 13px;
        min-width: 80px;
        text-align: center;
        &.ing{
          background-color: #00538A;
          
        }

        &.ok{
          background-color: red;

        }
        &.date{
          background-color: #666;
          color: #fff;
        
      }
    }
  }
`;

const Home = () => {
    const links = [
        { path: "main", label: "메인화면", status: "진행중",date:"2024-09-13 금" },
        { path: "main", label: "상세검색 팝업" , status: "진행중",date:"2024-09-13 금"},
        { path: "main", label: "검색 설정 팝업" , status: "진행중",date:"2024-09-13 금"},
        { path: "main", label: "업무 카테고리 편집" , status: "진행중",date:"2024-09-13 금"},
        { path: "main", label: "데이터 최신성 관리", status: "진행중" ,date:"2024-09-13 금"},
        { path: "main", label: "업무별 보기" , status: "진행중",date:"2024-09-13 금"},
        { path: "main", label: "업무 구성항목 편집" , status: "진행중",date:"2024-09-13 금"},
        { path: "main", label: "검색결과 Preview 팝업", status: "진행중" ,date:"2024-09-13 금"},
        { path: "main", label: "유사문서보기" , status: "진행중",date:"2024-09-13 금"},
        { path: "main", label: "Hot검색어 목록" , status: "완료",date:"2024-09-13 금"},
        { path: "main", label: "AI검색 목록형_고객센터", status: "진행중" ,date:"2024-09-13 금"},
        { path: "main", label: "AI검색 프리뷰형_컨시어지_5" , status: "진행중",date:"2024-09-13 금"},
        { path: "main", label: "AI검색 목록형_컨시어지" , status: "대기중",date:"2024-09-13 금"}
    ];
  return (
    <HomeContainer>
      <h2>진행사항</h2>



        <table>
            <thead>
            <tr>
                <th>화면이름</th>
                <th>진행사항 (완료진행중)</th>
                <th>완료예정일</th>
            </tr>
            </thead>
            <tbody>
            {links.map(({ path, label, status,date }) => (
            <tr>
                <td><Link to={`/publ/${path}`}>
                    {label}
                </Link></td>
                <td>
                    {status == "진행중" && <span className="ing">{status}</span>}
                    {status == "완료" && <span className="ok">{status}</span>}
                    {status == "대기중" && <span className="">{status}</span>}

                </td>
                <td>{date && <span className="date">{date}</span>}</td>
            </tr>
            ))}
            </tbody>
        </table>

    </HomeContainer>
  );
};

export default Home;
