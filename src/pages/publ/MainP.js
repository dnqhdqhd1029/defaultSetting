import React, { useEffect, useRef, useState } from "react";
import HeaderP from "./HeaderP";
import ModalP from "./ModalP";
import ChattingP from "./ChattingP";
import { Table } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

//import type { TableColumnsType, TableProps } from 'antd';
import "../../assets/style/style.scss";
import "swiper/css";
import "swiper/css/pagination";

import imgImg from "../../assets/images/svg/icon-img.svg";

const MainP = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeTab, setActiveTab] = useState("tab01");
  const [activeView, setActiveView] = useState("tab01");
  const [activeMenuTab, setActiveMenuTab] = useState("tab01");
  const underlineRef = useRef(null);
  const tabButtonsRef = useRef([]);
  const modalPreviewRef = useRef(null);
  const modalBookMarkRef = useRef(null);
  const modalNoticeRef = useRef(null);
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const handleStarClick = (index) => {
    const clickStates = [...clicked];
    for (let i = 1; i < 6; i++) {
      clickStates[i] = i <= index;
    }
    setClicked(clickStates);
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleViewClick = (tab) => {
    setActiveView(tab);
  };

  const handleMenuTabClick = (tab) => {
    setActiveMenuTab(tab);
  };

  const [activeState, setActiveState] = useState({
    counseling: true,
    chetbot: true,
    similar: true,
    more: false,
  });

  // const toggle = (type) => {
  //   setActiveState((prevState) => ({
  //     counseling: type === "counseling" ? !prevState.counseling : false,
  //     chetbot: type === "chetbot" ? !prevState.chetbot : false,
  //   }));
  // };
  const toggle = (type) => {
    setActiveState((prevState) => ({
      ...prevState, // 기존 상태 유지
      [type]: !prevState[type], // 전달된 타입에 해당하는 상태만 토글
    }));
  };

  useEffect(() => {
    const activeButton = tabButtonsRef.current.find((btn) =>
      btn.classList.contains("active"),
    );
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      underlineRef.current.style.transform = `translateX(${offsetLeft}px)`;
      underlineRef.current.style.width = `${offsetWidth}px`;
    }
  }, [activeTab]);

  const slides = [
    {
      title: "여신은행 이자징수일",
      description1: "자금세탁방지",
      description2:
        "필수사전요건으로 모바일뱅킹에서 고객이 직접 KYC를 수행할 수 있습니다. 자세한 사항은 디지털금융그룹 KYC 담당자에게 문의하시기 바랍니다.",
    },
    {
      title: "영업점검사",
      description1: "여신업무 소홀 및 부실여신 사례",
      description2:
        "필수사전요건으로 모바일뱅킹에서 고객이 직접 KYC를 수행할 수 있습니다. 자세한 사항은 디지털금융그룹 KYC 담당자에게 문의하시기 바랍니다.",
    },
    {
      title: "영업점검사",
      description1: "여신업무 소홀 및 부실여신 사례",
      description2:
        "필수사전요건으로 모바일뱅킹에서 고객이 직접 KYC를 수행할 수 있습니다. 자세한 사항은 디지털금융그룹 KYC 담당자에게 문의하시기 바랍니다.",
    },
  ];

  return (
    <>
      <HeaderP />

      <main>
        <div className="menuContainer">
          <div className="tabMenu">
            <button
              type="button"
              className="on"
              className={activeView === "tab01" ? "on" : ""}
              onClick={() => handleViewClick("tab01")}
            >
              전체보기
            </button>
            <button
              type="button"
              className={activeView === "tab02" ? "on" : ""}
              onClick={() => handleViewClick("tab02")}
            >
              나눠보기
            </button>
          </div>
          <div className="menuWrap">
            <div className="menuTab">
              <button
                type="button"
                className={activeMenuTab === "tab01" ? "on" : ""}
                onClick={() => handleMenuTabClick("tab01")}
              >
                원천
              </button>
              <button
                type="button"
                className={activeMenuTab === "tab02" ? "on" : ""}
                onClick={() => handleMenuTabClick("tab02")}
              >
                新정보
              </button>
            </div>
            <div className="menuList">
              {activeMenuTab === "tab01" && (
                <>
                  <ul>
                    <li className="on">
                      <div className="depthFirst">
                        <button type="button">
                          <span>
                            고객센터 <em>21</em>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button">
                          <span>
                            전자결재 <em>5</em>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>
                            규정 <em>2</em>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>
                            우리상품 바로알기 <em>2</em>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li className="">
                      <div className="depthFirst">
                        <button type="button">
                          <span>
                            부서홈페이지 <em>2</em>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li className="">
                      <div className="depthFirst">
                        <button type="button">
                          <span>
                            게시 <em>2</em>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li className="">
                      <div className="depthFirst">
                        <button type="button">
                          <span>
                            업무포탈 <em>2</em>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>
                            업무길라잡이 <em>2</em>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>
                            은행사전 <em>2</em>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>
                            직원정보 <em>2</em>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>
                            통합Q&A <em>2</em>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>
                            전산매뉴얼ABC <em>2</em>
                          </span>
                        </button>
                      </div>
                    </li>
                  </ul>

                  {/*편집일떄*/}
                  <ul>
                    <li className="on">
                      <div className="depthFirst">
                        <button type="button">
                          <span>고객센터</span>
                        </button>

                        <label className="toggleSwitch">
                          <input type="checkbox" checked />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button">
                          <span>전자결재</span>
                        </button>
                        <label className="toggleSwitch">
                          <input type="checkbox" checked />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>규정</span>
                        </button>
                        <label className="toggleSwitch">
                          <input type="checkbox" checked />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>우리상품 바로알기</span>
                        </button>
                        <label className="toggleSwitch">
                          <input type="checkbox" checked />
                        </label>
                      </div>
                    </li>
                    <li className="off">
                      <div className="depthFirst">
                        <button type="button">
                          <span>부서홈페이지</span>
                        </button>
                        <label className="toggleSwitch">
                          <input type="checkbox" />
                        </label>
                      </div>
                    </li>
                    <li className="off">
                      <div className="depthFirst">
                        <button type="button">
                          <span>게시</span>
                        </button>
                        <label className="toggleSwitch">
                          <input type="checkbox" />
                        </label>
                      </div>
                    </li>
                    <li className="off">
                      <div className="depthFirst">
                        <button type="button">
                          <span>업무포탈</span>
                        </button>
                        <label className="toggleSwitch">
                          <input type="checkbox" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>업무길라잡이</span>
                        </button>
                        <label className="toggleSwitch">
                          <input type="checkbox" checked />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>은행사전</span>
                        </button>
                        <label className="toggleSwitch">
                          <input type="checkbox" checked />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>직원정보</span>
                        </button>
                        <label className="toggleSwitch">
                          <input type="checkbox" checked />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>통합Q&A</span>
                        </button>
                        <label className="toggleSwitch">
                          <input type="checkbox" checked />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>전산매뉴얼ABC</span>
                        </button>
                        <label className="toggleSwitch">
                          <input type="checkbox" checked />
                        </label>
                      </div>
                    </li>
                  </ul>
                </>
              )}
              {activeMenuTab === "tab02" && (
                <>
                  <ul>
                    <li className="on">
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>
                            수신 <em>21</em>
                          </span>
                        </button>
                      </div>

                      <div className="depthTwo">
                        <button type="button" className="on">
                          <span>
                            신탁PLAZA<em>21</em>
                          </span>
                        </button>
                        <button type="button" className="">
                          <span>
                            투자상품PLAZA<em>21</em>
                          </span>
                        </button>
                        <button type="button" className="">
                          <span>
                            신탁PLAZA<em>21</em>
                          </span>
                        </button>
                        <button type="button" className="">
                          <span>
                            신탁PLAZA<em>21</em>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li className="">
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>
                            여신 <em>21</em>
                          </span>
                        </button>
                      </div>

                      <div className="depthTwo">
                        <button type="button" className="">
                          <span>
                            신탁PLAZA<em>21</em>
                          </span>
                        </button>
                        <button type="button" className="">
                          <span>
                            투자상품PLAZA<em>21</em>
                          </span>
                        </button>
                        <button type="button" className="">
                          <span>
                            신탁PLAZA<em>21</em>
                          </span>
                        </button>
                        <button type="button" className="">
                          <span>
                            신탁PLAZA<em>21</em>
                          </span>
                        </button>
                      </div>
                    </li>
                  </ul>

                  {/*편집일떄*/}
                  <ul>
                    {/*체크 될때 on*/}
                    <li className="on">
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>
                            수신 <em>21</em>
                          </span>
                        </button>
                        <label className="toggleSwitch">
                          <input type="checkbox" checked />
                        </label>
                      </div>

                      <div className="depthTwo">
                        <button type="button" className="">
                          <span>신탁PLAZA</span>
                        </button>
                        <button type="button" className="">
                          <span>투자상품PLAZA</span>
                        </button>
                        <button type="button" className="">
                          <span>신탁PLAZA</span>
                        </button>
                        <button type="button" className="">
                          <span>신탁PLAZA</span>
                        </button>
                      </div>
                    </li>
                    {/*체크해재 될때 off*/}
                    <li className="off">
                      <div className="depthFirst">
                        <button type="button" className="">
                          <span>여신</span>
                        </button>
                        <label className="toggleSwitch">
                          <input type="checkbox" />
                        </label>
                      </div>

                      <div className="depthTwo">
                        <button type="button" className="">
                          <span>신탁PLAZA</span>
                        </button>
                        <button type="button" className="">
                          <span>
                            투자상품PLAZA<em>21</em>
                          </span>
                        </button>
                        <button type="button" className="">
                          <span>신탁PLAZA</span>
                        </button>
                        <button type="button" className="">
                          <span>신탁PLAZA</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </>
              )}
            </div>

            <div className="menuSetting">
              <button type="button">
                <i className="iconSetting" />
                <span>메뉴 편집</span>
              </button>

              {/*편집일떄*/}
              {/*<div className="btnWrap">
                <button type="button" className="btn bgInfo">취소</button>
                <button type="button" className="btn bgDarkBlue">저장</button>
              </div>*/}
            </div>
          </div>
        </div>
        <section className="section">
          <div className="total">
            AI검색 결과 <strong>42건</strong> 이 있습니다.
            <button type="button" className="keyword">
              키워드로 검색{" "}
            </button>
          </div>
          <div className="listContainer">
            <div className="title">
              <span>
                <strong>전체</strong>
                <em>42</em>
              </span>
              <div className="">
                <select className="">
                  <option>정확도순</option>
                  <option>조회순</option>
                  <option>제목순</option>
                  <option>최근날짜순</option>
                </select>
              </div>
            </div>
            <div className="content">
              <div className="lnb">
                <span className="label">길라잡이</span>
                <span className="label number">관리번호 0000</span>
                <em>
                  외환 > 제3권 외환여신 > <b>제3장 장외파생상품 업무</b>
                </em>
              </div>
              <dl>
                <dt>
                  <span className="txt">
                    통화<strong>스왑</strong>{" "}
                    업무게시업무게시업무게시업무게시업무게시업무게시업무게시업무게시
                  </span>
                  <em>
                    기업고객부 서유리 차장
                    <samll className="ml1">2024-05-22</samll>
                  </em>
                </dt>
                <dd className="info">
                  <span className="txt">
                    소제목 텍스트 최대1줄 넘치는텍스트 말줄임 소제목 텍스트
                    최대1줄 넘치는텍스트 말줄임소제목 텍스트 최대1줄
                    넘치는텍스트 말줄임
                  </span>
                  <span>
                    ① <strong>스왑</strong>포인트(Swap Point) ⓐ 통화선도의
                    예약환율은 현재환율에 교환채권의 만기 이자값 차이를 가감하여
                    산출하며, 이러한 만기 이자값 차이, 즉 미래교환가치를 ‘
                    <strong>스왑</strong>포인트(swap point)’라고 한다.
                  </span>
                </dd>
                <dd className="download">
                  <button type="button">
                    <i className="iconPdf" />
                    ★통화스왑(부채)_업무안내.pdf
                  </button>
                  <button type="button">
                    <i className="iconExcel" />
                    ★통화스왑(부채)_업무안내.pdf
                  </button>
                  <button type="button">
                    <i className="iconWord" />
                    ★통화스왑(부채)_업무안내.pdf
                  </button>
                  <button type="button">
                    <i className="iconHwp" />
                    ★통화스왑(부채)_업무안내.pdf
                  </button>
                  <button type="button">
                    <i className="iconPpt" />
                    ★PPT파일
                  </button>
                  <button type="button">
                    <i className="iconEtc" />
                    ★기타 파일
                  </button>
                </dd>
                <dd className="etc">
                  <span>
                    <button type="button">북마크</button>
                    <button
                      type="button"
                      className={` ${activeState.similar ? "" : "down"}`}
                      onClick={() => toggle("similar")}
                    >
                      00개의 유사문서(팝업 디자인 나올거임)
                    </button>
                  </span>
                  <button
                    type="button"
                    onClick={() => modalPreviewRef.current.show()}
                  >
                    Preview
                  </button>
                </dd>
                {activeState.similar && (
                  <dd className="similarData">
                    <dl>
                      <dt>
                        <div>
                          <span className="label">고객센터</span>
                          <span className="txt">
                            2024년 상반기「T.O.P of WOORI」영업지원 실적 최대
                            텍스트
                          </span>
                        </div>
                        <em>
                          기업고객부 서유리 차장
                          <samll className="ml1">2024-05-22</samll>
                        </em>
                      </dt>
                      <dd className="info">
                        <div className="flexE">
                          <span className="txt">
                            소제목 텍스트 최대1줄 넘치는텍스트 말줄임 소제목
                            텍스트 최대1줄 넘치는텍스트 말줄임소제목 텍스트
                            최대1줄 넘치는텍스트 말줄임
                          </span>
                          <button
                            type="button"
                            className={` btnMore ${activeState.more ? "" : "up"}`}
                            onClick={() => toggle("more")}
                          >
                            {activeState.more ? "접기" : "더보기"}
                          </button>
                        </div>

                        {activeState.more && (
                          <div className="infoMore">
                            2024년 年初 집중영업을 위한 ‘24. 상반기「T.O.P of
                            WOORI」스왑포인트 영업지원 운영 (2024.02.14) CIB
                            그룹 1 취지 ? 기업금융 名家 재건을 위한 우량자산
                            확대 및 ‘24년 금융시장 환경 * 감안 수익성 증대 추진
                            * 회사채 만기 도래 규모 최대(70조원), ‘24.上 고금리
                            기조 유지 이후 텍스트 최대 3줄 노출 후 넘치는
                            텍스트는 말줄임 해 주세요
                          </div>
                        )}
                      </dd>
                    </dl>
                  </dd>
                )}
              </dl>
            </div>

            <div className="content">
              <div className="lnb">
                <span className="label">길라잡이</span>
                <span className="label number">관리번호 0000</span>
                <em>
                  외환 > 제3권 외환여신 > <b>제3장 장외파생상품 업무</b>
                </em>
              </div>
              <dl>
                <dt>
                  <span className="txt">
                    통화<strong>스왑</strong> 업무게시
                  </span>
                  <em>
                    기업고객부 서유리 차장
                    <samll className="ml1">2024-05-22</samll>
                  </em>
                </dt>
                <dd className="info">
                  <span className="txt">
                    소제목 텍스트 최대1줄 넘치는텍스트 말줄임 소제목 텍스트
                    최대1줄 넘치는텍스트 말줄임소제목 텍스트 최대1줄
                    넘치는텍스트 말줄임
                  </span>
                  <span>
                    ① <strong>스왑</strong>포인트(Swap Point) ⓐ 통화선도의
                    예약환율은 현재환율에 교환채권의 만기 이자값 차이를 가감하여
                    산출하며, 이러한 만기 이자값 차이, 즉 미래교환가치를 ‘
                    <strong>스왑</strong>포인트(swap point)’라고 한다.
                  </span>
                </dd>
                <dd className="download">
                  <button type="button">
                    <i className="iconPdf" />
                    ★통화스왑(부채)_업무안내.pdf
                  </button>
                  <button type="button">
                    <i className="iconExcel" />
                    ★통화스왑(부채)_업무안내.pdf
                  </button>
                  <button type="button">
                    <i className="iconWord" />
                    ★통화스왑(부채)_업무안내.pdf
                  </button>
                  <button type="button">
                    <i className="iconHwp" />
                    ★통화스왑(부채)_업무안내.pdf
                  </button>
                </dd>
                <dd className="etc">
                  <span>
                    <button type="button">북마크</button>
                    <button type="button">
                      00개의 유사문서(팝업 디자인 나올거임)
                    </button>
                  </span>
                  <button
                    type="button"
                    onClick={() => modalPreviewRef.current.show()}
                  >
                    Preview
                  </button>
                </dd>
              </dl>
            </div>

            {/*직원정보*/}
            <div className="content flexJ">
              <div className="memberData">
                <div className="info flexS alignS">
                  <dl>
                    <dt>
                      <strong className="bold500">홍길동</strong>차장
                    </dt>
                    <dd>우리은행 | 빅데이터플랫폼부</dd>
                    <dd className="icon flexS">
                      <button type="button" className="iconCall" />
                      <button type="button" className="iconProfile" />
                      <button type="button" className="iconSns" />
                    </dd>
                  </dl>

                  <div className="img mr2">
                    <img src={imgImg} alt="" />
                  </div>
                </div>
                <div className="gridItem">
                  <dl>
                    <dt>담당업무</dt>
                    <dd className="fontSm">데이터 자산화 팀장 - 팀업무 전반</dd>
                  </dl>
                </div>
                <div className="gridItem">
                  <dl>
                    <dt>세부업무</dt>
                    <dd className="fontSm">
                      FA/CS매니저/대여금고관리/방카슈랑스/은퇴설계/특정거래승인권/해외유학이주/장애인전담/출납책임/금융사기담당/FATCA관리/금융소비자보호담당자/카드개인정보보호/교환/시공과금/신용카드총괄/압류/중요증서취급중요증서취급책임/외화출납책임/당행보관통장관리
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="memberData">
                <div className="info flexS alignS">
                  <dl>
                    <dt>
                      <strong className="bold500">홍길동</strong>차장
                    </dt>
                    <dd>우리은행 | 빅데이터플랫폼부</dd>
                    <dd className="icon flexS">
                      <button type="button" className="iconCall" />
                      <button type="button" className="iconProfile" />
                      <button type="button" className="iconSns" />
                    </dd>
                  </dl>

                  <div className="img mr2">
                    <img src={imgImg} alt="" />
                  </div>
                </div>
                <div className="gridItem">
                  <dl>
                    <dt>담당업무</dt>
                    <dd className="fontSm">데이터 자산화 팀장 - 팀업무 전반</dd>
                  </dl>
                </div>
                <div className="gridItem">
                  <dl>
                    <dt>세부업무</dt>
                    <dd className="fontSm">
                      FA/CS매니저/대여금고관리/방카슈랑스/은퇴설계/특정거래승인권/해외유학이주/장애인전담/출납책임/금융사기담당/FATCA관리/금융소비자보호담당자/카드개인정보보호/교환/시공과금/신용카드총괄/압류/중요증서취급중요증서취급책임/외화출납책임/당행보관통장관리
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="more">
              <button type="button">
                <i className="iconAdd" /> 펼쳐보기
              </button>
            </div>

            <div className="paginate">
              <button type="button" className="prev" />
              <strong>1</strong>
              <button type="button">2</button>
              <button type="button">3</button>
              <button type="button">4</button>
              <button type="button">5</button>
              <button type="button">6</button>
              <button type="button">7</button>
              <button type="button">8</button>
              <button type="button">9</button>
              <button type="button">10</button>
              <button type="button" className="next" />
            </div>
          </div>

          <div className="listContainer">
            <div className="content">
              <div className="txtNone">
                <h5>
                  <b>이자율 스왑</b> 에 대한 검색결과가 없습니다.
                </h5>
                <ul className="dot">
                  <li>
                    <span>단어의 철자가 정확한지 확인해 주세요.</span>
                  </li>
                  <li>
                    <span>
                      한글을 영어로 혹은 영어를 한글로 입력했는지 확인해 보세요.
                    </span>
                  </li>
                  <li>
                    <span>
                      검색어의 단어 수를 줄이거나, 보다 일반적인 검색어로 다시
                      검색해 보세요.
                    </span>
                  </li>
                  <li>
                    <span>
                      두 단어 이상의 검색어인 경우, 띄어쓰기를 확인해 보세요.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="keyWordContainer">
            <div className="title borderNone">연관 검색어</div>
            <div className="content">
              <button type="button">
                일이삼사오육칠팔구십일이삼사오육칠팔구
              </button>
              <button type="button">버팀목전세자금대출 한도조회</button>
              <button type="button">대출이자납입일</button>
              <button type="button">한도미사용수수료 VG</button>
              <button type="button">재형저축 비과세 한도</button>
              <button type="button">당좌 이자</button>
              <button type="button">신용보정서한도</button>
              <button type="button">한도 신청</button>
              <button type="button">기간연장 이자</button>
              <button type="button">이체한도 5억</button>
            </div>
          </div>
        </section>
        <aside>
          <div className="aiContainer">
            <div className="title borderNone">
              <div className="flexS">
                <i className="iconMascot" />
                <span> AI 지식상담 </span>
                <button type="button" className="setting">
                  전행 모든지식 참조
                </button>
              </div>
              <button
                type="button"
                className={`iconUp  counseling ${activeState.counseling ? "" : "down"}`}
                onClick={() => toggle("counseling")}
              />
            </div>

            <div
              className={` toggleWrap ${activeState.counseling ? "show" : ""}`}
            >
              <ChattingP search />
            </div>
          </div>

          <div className="chetbotContainer">
            <div className="title borderNone">
              <span className="flexS alignC">
                <i className="iconAi mr1" /> AI챗봇에게 물어보기
              </span>
              <button
                type="button"
                className={`iconUp chetbot ${activeState.chetbot ? "" : "down"}`}
                onClick={() => toggle("chetbot")}
              />
            </div>

            <div className={`chetbotWrap ${activeState.chetbot ? "show" : ""}`}>
              <Swiper
                slidesPerView={slides.length === 1 ? 1 : 2} // 슬라이드가 1개면 전체로 표시
                loop={true}
                spaceBetween={20}
                //navigation={true}
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="content">
                      <div className="slideCont cont">
                        <dl>
                          <dt>
                            <span>{slide?.title}</span>
                          </dt>
                          <dd className="info">
                            <span className="txt">{slide?.description1}</span>
                            <span>{slide?.description2}</span>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="otherContainer">
            <div className="tabList">
              <button
                type="button"
                className={`tab01 ${activeTab === "tab01" ? "active" : " "}`}
                onClick={() => handleTabClick("tab01")}
                ref={(el) => (tabButtonsRef.current[0] = el)}
              >
                북마크
                {activeTab === "tab01" && (
                  <button
                    type="button"
                    className="setting"
                    onClick={() => modalBookMarkRef.current.show()}
                  />
                )}
              </button>
              <button
                type="button"
                className={`tab02 ${activeTab === "tab02" ? "active" : ""}`}
                onClick={() => handleTabClick("tab02")}
                ref={(el) => (tabButtonsRef.current[1] = el)}
              >
                My 헬프데스크
              </button>
              <button
                type="button"
                className={`tab03  ${activeTab === "tab03" ? "active" : ""}`}
                onClick={() => handleTabClick("tab03")}
                ref={(el) => (tabButtonsRef.current[2] = el)}
              >
                나의 즐겨찾기
              </button>
              <button
                type="button"
                className={`tab04  ${activeTab === "tab04" ? "active" : ""}`}
                onClick={() => handleTabClick("tab04")}
                ref={(el) => (tabButtonsRef.current[3] = el)}
              >
                알림 검색어
                {activeTab === "tab04" && (
                  <button
                    type="button"
                    className="setting"
                    onClick={() => modalNoticeRef.current.show()}
                  />
                )}
              </button>
              <button
                type="button"
                className={`tab05 ${activeTab === "tab05" ? "active" : ""}`}
                onClick={() => handleTabClick("tab05")}
                ref={(el) => (tabButtonsRef.current[4] = el)}
              >
                인기 검색어
              </button>
              <div className="underline" ref={underlineRef} />
            </div>

            <div className="tabWrap">
              {activeTab === "tab01" && (
                <>
                  <div className="cont">
                    <ol>
                      <li>
                        <span>
                          <em>1</em>
                          <button type="button" className="txt">
                            -
                          </button>
                        </span>
                        {/*<button type="button" className="iconDel" />*/}
                      </li>
                      <li>
                        <span>
                          <em>2</em>
                          <button type="button" className="txt">
                            일이삼사오육칠팔구십일이삼사오육칠
                          </button>
                        </span>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <span>
                          <em>3</em>
                          <button type="button" className="txt">
                            일이삼사오육칠팔구십일이삼사오육칠
                          </button>
                        </span>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <span>
                          <em>4</em>
                          <button type="button" className="txt">
                            일이삼사오육칠팔구십일이삼사오육칠
                          </button>
                        </span>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <span>
                          <em>5</em>
                          <button type="button" className="txt">
                            일이삼사오육칠팔구십일이삼사오육칠
                          </button>
                        </span>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <span>
                          <em>6</em>
                          <button type="button" className="txt">
                            일이삼사오육칠팔구십일이삼사오육칠
                          </button>
                        </span>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <span>
                          <em>7</em>
                          <button type="button" className="txt">
                            일이삼사오육칠팔구십일이삼사오육칠
                          </button>
                        </span>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <span>
                          <em>8</em>
                          <button type="button" className="txt">
                            일이삼사오육칠팔구십일이삼사오육칠
                          </button>
                        </span>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <span>
                          <em>9</em>
                          <button type="button" className="txt">
                            일이삼사오육칠팔구십일이삼사오육칠
                          </button>
                        </span>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <span>
                          <em>10</em>
                          <button type="button" className="txt">
                            일이삼사오육칠팔구십일이삼사오육칠
                          </button>
                        </span>
                        <button type="button" className="iconDel" />
                      </li>
                    </ol>
                  </div>
                </>
              )}
              {activeTab === "tab02" && (
                <>
                  <div className="cont">tab02</div>
                </>
              )}
              {activeTab === "tab03" && (
                <>
                  <div className="cont">tab03</div>
                </>
              )}
              {activeTab === "tab04" && (
                <>
                  <div className="cont">tab04</div>
                </>
              )}
              {activeTab === "tab05" && (
                <>
                  <div className="cont">tab05</div>
                </>
              )}
            </div>
          </div>
        </aside>
      </main>

      <ModalP
        ref={modalPreviewRef}
        width="900px"
        content={
          <>
            <div className="previewContainer">
              <div className="previewHeader">
                <div className="searchWrap">
                  <input type="search" placeholder="검색어를 입력하세요" />
                  <button type="button" className="iconSearch" />
                </div>

                <div className="state">
                  <span>
                    <strong>10</strong> <em>/</em> <em>10</em>
                  </span>
                  <button type="button" className="iconUp" />
                  <button type="button" className="iconDown" />
                </div>
              </div>
              <div className="previewContent">
                <div className="lnb">
                  업무포탈 > 기업금융WON클릭 >{" "}
                  <b>기업「T.O.P of WOORI」영업지원</b>
                </div>

                <div className="title">
                  2024년 상반기「T.O.P of WOORI」영업지원 실적2024년
                  상반기「T.O.P of WOORI」영업지원 실적2024년 상반기「T.O.P of
                  WOORI」영업지원 실적2024년 상반기「T.O.P of WOORI」영업지원
                  실적2024년 상반기「T.O.P of WOORI」영업지원 실적2024년
                  상반기「T.O.P of WOORI」영업지원 실적2024년 상반기「T.O.P of
                  WOORI」영업지원 실적
                </div>
                <div className="cont">dfdfdfd</div>
              </div>
            </div>
          </>
        }
        info={
          <>
            답변 만족도를 평가해 주세요
            <div className="gradeContent ml1">
              {[5, 4, 3, 2, 1].map((r) => (
                <button
                  key={r}
                  onClick={() => handleStarClick(r)}
                  className={clicked[r] ? "on" : ""}
                >
                  {r}
                </button>
              ))}
            </div>
          </>
        }
        btnText01="닫기"
        // btnText02="초기화"
        callback={() => {
          console.log("callback");
        }}
      />

      <ModalP
        ref={modalBookMarkRef}
        width="750px"
        title="북마크 관리"
        close
        content={
          <>
            <div className="boardContainer">
              <div className="boardSearch flexS ">
                <div className="tit">검색 대상</div>
                <div className="cont">
                  <select className="select">
                    <option>전체</option>
                    <option>전체</option>
                  </select>
                </div>

                <div className="tit ml2">검색어</div>
                <div className="cont flexJ">
                  <input
                    type="text"
                    className="flex mr1"
                    style={{ width: "200px" }}
                  />
                  <button
                    type="button"
                    className="btn bgDarkBlue radius"
                    style={{ width: "80px" }}
                  >
                    검색
                  </button>
                </div>
              </div>

              <div className="boardList mt2">
                <table className="boardTabel">
                  <colgroup>
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "20%" }} />
                    <col />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "10%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>카테고리</th>
                      <th>제목</th>
                      <th>등록일자</th>
                      <th>삭제</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>
                      <td>2024-07-30</td>
                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>
                      <td>2024-07-30</td>
                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>
                      <td>2024-07-30</td>
                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>
                      <td>2024-07-30</td>
                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>
                      <td>2024-07-30</td>
                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>
                      <td>2024-07-30</td>
                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>
                      <td>2024-07-30</td>
                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>
                      <td>2024-07-30</td>
                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>
                      <td>2024-07-30</td>
                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>
                      <td>2024-07-30</td>
                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="paginate">
                <button type="button" className="prev" />
                <strong>1</strong>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">4</button>
                <button type="button">5</button>
                <button type="button">6</button>
                <button type="button">7</button>
                <button type="button">8</button>
                <button type="button">9</button>
                <button type="button">10</button>
                <button type="button" className="next" />
              </div>
            </div>
          </>
        }
      />
      <ModalP
        ref={modalNoticeRef}
        width="750px"
        title="알림검색어 관리"
        close
        content={
          <>
            <div className="boardContainer">
              <div className="boardSearch flexS ">
                <div className="tit">검색대상</div>
                <div className="cont">
                  <select className="select">
                    <option>고객센터</option>
                    <option>전체</option>
                  </select>
                </div>

                <div className="tit ml2">알림 검색어</div>
                <div className="cont flexJ">
                  <input
                    type="text"
                    className="flex mr1"
                    style={{ width: "180px" }}
                  />
                  <button
                    type="button"
                    className="btn bgDarkBlue radius"
                    style={{ width: "80px" }}
                  >
                    검색
                  </button>
                </div>
              </div>

              <div className="boardList mt2">
                <table className="boardTabel">
                  <colgroup>
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "25%" }} />
                    <col />
                    <col style={{ width: "10%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>카테고리</th>
                      <th>검색어</th>

                      <th>삭제</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="">우리상품 바로알기</td>
                      <td>이름네자</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="paginate">
                <button type="button" className="prev" />
                <strong>1</strong>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">4</button>
                <button type="button">5</button>
                <button type="button">6</button>
                <button type="button">7</button>
                <button type="button">8</button>
                <button type="button">9</button>
                <button type="button">10</button>
                <button type="button" className="next" />
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default MainP;
