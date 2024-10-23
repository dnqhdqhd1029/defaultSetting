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
          background-color: #ccc;
          color: #fff;
          
          &.ing{
            background: rgba(0, 83, 138, 0.50);
          }

          &.ok{
            background: rgba(255, 62, 62, 0.50);
          }
        
      }
    }
  }
`;

const Home = () => {
    const links = [
        { path: "main", label: "메인화면", status: "완료",date:"2024-09-13 금" },
        { path: "main", label: "메인화면-디테일수정", status: "진행중",date:"2024-09-25 tn" },
        { path: "main", label: "상세검색 팝업" , status: "완료",date:"2024-09-13 금"},
        { path: "main", label: "검색 설정 팝업" , status: "완료",date:"2024-09-13 금"},
        { path: "main", label: "업무 카테고리 편집(디자인 수정)" , status: "완료",date:"2024-09-25 금"},
        { path: "main", label: "데이터 최신성 관리 (없어짐)", status: "" ,date:""},
        { path: "main", label: "업무별 보기(원천,신정보별)" , status: "완료",date:"2024-09-13 금"},
        { path: "main", label: "업무 구성항목 편집 (편집기능 없어짐)" , status: "완료",date:"2024-09-13 금"},
        { path: "main", label: "검색결과 Preview 팝업", status: "완료" ,date:"2024-09-13 금"},
        { path: "main", label: "유사문서보기(디자인진행중)" , status: "진행중",date:"2024-09-20 금"},
        { path: "main", label: "AI 챗봇에게 물어보기(디자인진행중)" , status: "진행중",date:"2024-09-20 금"},
        { path: "main", label: "Hot검색어 목록" , status: "완료",date:"2024-09-13 금"},
        { path: "main", label: "북마크관리 팝업" , status: "완료",date:"2024-09-25 수"},
        { path: "csMain", label: "============================ ", status: "" ,date:""},
        { path: "csMain", label: "AI검색 목록형_고객센터 ", status: "완료" ,date:"2024-10-11 금"},
        { path: "concierge", label: "AI검색 프리뷰형_컨시어지_5 " , status: "완료",date:"2024-10-11 금"},
        { path: "concierge", label: "AI검색 목록형_컨시어지" , status: "완료",date:"2024-10-11 금"},

        { path: "counselingMain", label: "============================" , status: "=====",date:"====="},
        { path: "counselingMain", label: "지식상담 메인(고객수정반영이슈)" , status: "완료",date:"2024-09-25 수"},
        { path: "counselingMain", label: "설정 모달(기획대기중)" , status: "대기중",date:"2024-00-00 00"},
        { path: "counselingMain", label: "My헬프데스크 관리 팝업 (새창이동)" , status: "새창이동이어서"},
        { path: "counselingMain", label: "최근검색어(텍스트입력필드 내 드롭다운)" , status: "완료",date:"2024-10-18 금"},
        { path: "counselingMain", label: "알림 검색어 관리 팝업" , status: "완료",date:"2024-09-27 금"},
        { path: "counselingMain", label: "나의 파일관리 팝업" , status: "완료",date:"2024-10-02 수"},
        { path: "counselingMain", label: "나의 프롬프트 관리 팝업" , status: "완료",date:"2024-10-02 수"},
        { path: "counselingMain", label: "대표 AI 관리 팝업" , status: "완료",date:"2024-10-11 금"},
        { path: "counselingMain", label: "지난상담내역 관리 팝업" , status: "완료",date:"2024-10-02 수"},
        { path: "counselingMain", label: "안내페이지 문구 관리(기획서확인필요)" , status: "대기중",date:"2024-10-17 목"},
        { path: "counselingMain", label: "안내페이지 문구 상세 팝업(기획서확인필요)" , status: "대기중",date:"2024-10-17 목"},
        { path: "counselingMain", label: "신지식정보 관리(기획서확인필요)" , status: "대기중",date:"2024-10-11 금"},
        { path: "counselingMain", label: "신정보관리체계 등록 팝업(기획서확인필요)" , status: "대기중",date:"2024-10-11 금"},
        { path: "counselingMain", label: "신정보관리체계 파일 등록 팝업(기획서확인필요)" , status: "대기중",date:"2024-10-11 금"},
        { path: "============================", label: "============================" , status: "대기중",date:"2024-10-11 금"},
        { path: "counselingMini", label: "지식상담 Mini" , status: "진행중",date:"2024-10-23 수"}
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
                    <Link to={`/publ/${path}`}>
                    {status == "진행중" && <span className="ing">{status}</span>}
                    {status == "완료" && <span className="ok">{status}</span>}
                    {status == "대기중" && <span className="">{status}</span>}
                    </Link>

                </td>
                <td>
                    {date && status == "진행중" &&  <span className="ing date">{date}</span>}
                    {date && status == "완료" &&  <span className="ok date">{date}</span>}
                    {date && status == "대기중" &&  <span className=" date">{date}</span>}
                </td>
            </tr>
            ))}
            </tbody>
        </table>

    </HomeContainer>
  );
};

export default Home;
