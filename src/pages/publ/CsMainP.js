import React, { useEffect, useRef, useState } from "react";
import HeaderP from "./HeaderP";
import ModalP from "./ModalP";
import { Table } from "antd";
//import type { TableColumnsType, TableProps } from 'antd';
import "../../assets/style/style.scss";
import ChattingP from "./ChattingP";
const CsMainP = () => {
  const modalSimilarSearchRef = useRef(null);
  const [activeState, setActiveState] = useState({
    similar: true,
    more: false,
  });

  const toggle = (type) => {
    setActiveState((prevState) => ({
      ...prevState, // 기존 상태 유지
      [type]: !prevState[type], // 전달된 타입에 해당하는 상태만 토글
    }));
  };

  // 메뉴 상태 관리
  const [expandedMenu, setExpandedMenu] = useState([0, 1]); // 1차 메뉴 전체 펼침
  const [expandedSubMenu, setExpandedSubMenu] = useState([0, 1, 2, 3, 4]); // 2차 서브 메뉴 전체 펼침

  // 개별 메뉴 확장/축소 핸들러
  const handleMenuClick = (menuIndex) => {
    setExpandedMenu(
      (prevState) =>
        prevState.includes(menuIndex)
          ? prevState.filter((index) => index !== menuIndex) // 이미 펼쳐진 경우 닫기
          : [...prevState, menuIndex], // 펼치기
    );
  };

  // 개별 서브 메뉴 확장/축소 핸들러
  const handleSubMenuClick = (subMenuIndex) => {
    setExpandedSubMenu(
      (prevState) =>
        prevState.includes(subMenuIndex)
          ? prevState.filter((index) => index !== subMenuIndex) // 이미 펼쳐진 경우 닫기
          : [...prevState, subMenuIndex], // 펼치기
    );
  };

  // 전체 펼치기 기능
  const handleExpandAll = () => {
    // 모든 메뉴와 서브 메뉴 인덱스를 추가
    setExpandedMenu([0, 1]); // 1차 메뉴 전체 펼치기
    setExpandedSubMenu([0, 1, 2, 3, 4]); // 2차 서브 메뉴 전체 펼치기
  };

  // 전체 접기 기능
  const handleCollapseAll = () => {
    setExpandedMenu([]); // 메뉴 전체 접기
    setExpandedSubMenu([]); // 서브 메뉴 전체 접기
  };

  return (
    <>
      <HeaderP />
      <div className="similarSearch">
        <dl>
          <dt>연관검색어</dt>
          <dd>
            <button type="button">버팀목 전세자금대출 한도조회</button>{" "}
          </dd>
          <dd>
            <button type="button">대출이자납입일</button>
          </dd>
          <dd>
            <button type="button">이자 한도</button>
          </dd>
          <dd>
            <button
              type="button"
              className="more"
              onClick={() => modalSimilarSearchRef.current.show()}
            >
              + 더보기
            </button>
          </dd>
        </dl>
      </div>

      <main className="csMain">
        <div className="menuContainer">
          <div className="tabMenu">
            <button type="button" className="on" onClick={handleExpandAll}>
              전체 펼치기
            </button>
            <button type="button" onClick={handleCollapseAll}>
              전체 접기
            </button>
          </div>
          <div className="menuWrap">
            <div className="menuList">
              <button type="button" className="all">
                전체 검색결과 보기
              </button>
              <ul>
                <li className={expandedMenu.includes(0) ? "on" : ""}>
                  <button
                    type="button"
                    className="on"
                    onClick={() => handleMenuClick(0)}
                  >
                    <span>
                      수신헬프 <em>21</em>
                    </span>
                  </button>
                  {expandedMenu.includes(0) && (
                    <div className="depthTwo">
                      <ul>
                        <li className={expandedSubMenu.includes(0) ? "on" : ""}>
                          <button
                            type="button"
                            className="on"
                            onClick={() => handleSubMenuClick(0)}
                          >
                            <span>
                              총칙<em>21</em>
                            </span>
                          </button>
                          {expandedSubMenu.includes(0) && (
                            <div className="depthThree">
                              <button type="button">
                                <span>
                                  예금신규및 입금 지급<em>21</em>
                                </span>
                              </button>
                              <button type="button" className="on">
                                <span>
                                  예금신규및 입금 (제증명)<em>21</em>
                                </span>
                              </button>
                              <button type="button">
                                <span>
                                  예금신규및 입금 지급<em>21</em>
                                </span>
                              </button>
                              <button type="button">
                                <span>
                                  예금신규및 입금 지급<em>21</em>
                                </span>
                              </button>
                              <button type="button">
                                <span>
                                  예금신규및 입금 지급<em>21</em>
                                </span>
                              </button>
                              <button type="button">
                                <span>
                                  예금신규및 입금 지급<em>21</em>
                                </span>
                              </button>
                            </div>
                          )}
                        </li>
                        <li className={expandedSubMenu.includes(1) ? "on" : ""}>
                          <button
                            type="button"
                            onClick={() => handleSubMenuClick(1)}
                          >
                            <span>
                              금융실명제<em>21</em>
                            </span>
                          </button>
                          {expandedSubMenu.includes(1) && (
                            <div className="depthThree">
                              <button type="button">
                                <span>
                                  예금신규및 입금 지급<em>21</em>
                                </span>
                              </button>
                              <button type="button">
                                <span>
                                  예금신규및 입금 (제증명)<em>21</em>
                                </span>
                              </button>
                            </div>
                          )}
                        </li>
                        <li className={expandedSubMenu.includes(2) ? "on" : ""}>
                          <button
                            type="button"
                            onClick={() => handleSubMenuClick(2)}
                          >
                            <span>
                              자금세탁방지<em>21</em>
                            </span>
                          </button>
                          {expandedSubMenu.includes(2) && (
                            <div className="depthThree">
                              <button type="button">
                                <span>
                                  예금신규및 입금 지급<em>21</em>
                                </span>
                              </button>
                              <button type="button">
                                <span>
                                  예금신규및 입금 (제증명)<em>21</em>
                                </span>
                              </button>
                            </div>
                          )}
                        </li>
                        <li>
                          <button type="button">
                            <span>
                              입출금예금 종합통장<em>21</em>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className={expandedMenu.includes(1) ? "on" : ""}>
                  <button type="button" onClick={() => handleMenuClick(1)}>
                    <span>
                      수신헬프 <em>21</em>
                    </span>
                  </button>
                  {expandedMenu.includes(1) && (
                    <div className="depthTwo">
                      <ul>
                        <li className={expandedSubMenu.includes(3) ? "on" : ""}>
                          <button
                            type="button"
                            onClick={() => handleSubMenuClick(3)}
                          >
                            <span>
                              총칙<em>21</em>
                            </span>
                          </button>
                          {expandedSubMenu.includes(3) && (
                            <div className="depthThree">
                              <button type="button">
                                <span>
                                  예금신규및 입금 지급<em>21</em>
                                </span>
                              </button>
                              <button type="button" className="on">
                                <span>
                                  예금신규및 입금 (제증명)<em>21</em>
                                </span>
                              </button>
                            </div>
                          )}
                        </li>
                        <li className={expandedSubMenu.includes(4) ? "on" : ""}>
                          <button
                            type="button"
                            onClick={() => handleSubMenuClick(4)}
                          >
                            <span>
                              금융실명제<em>21</em>
                            </span>
                          </button>
                          {expandedSubMenu.includes(4) && (
                            <div className="depthThree">
                              <button type="button">
                                <span>
                                  예금신규및 입금 지급<em>21</em>
                                </span>
                              </button>
                              <button type="button">
                                <span>
                                  예금신규및 입금 (제증명)<em>21</em>
                                </span>
                              </button>
                            </div>
                          )}
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="listContainer">
            <div className="title">
              <div className="total">
                AI검색 결과 <strong>42건</strong> 이 있습니다.
              </div>
              <div className="">
                <select className="">
                  <option>정확도순</option>
                  <option>조회순</option>
                  <option>제목순</option>
                  <option>최근날짜순</option>
                </select>
                <select className="">
                  <option>조회순</option>
                  <option>조회순</option>
                  <option>제목순</option>
                  <option>최근날짜순</option>
                </select>
                <select className="">
                  <option>제목순</option>
                  <option>조회순</option>
                  <option>제목순</option>
                  <option>최근날짜순</option>
                </select>
                <select className="">
                  <option>최근날짜순</option>
                  <option>조회순</option>
                  <option>제목순</option>
                  <option>최근날짜순</option>
                </select>
              </div>
            </div>
            <div className="content">
              <div className="lnb">
                <span className="label number">관리번호 0000</span>
                <em>
                  외환 > 제3권 외환여신 > <b>제3장 장외파생상품 업무</b>
                </em>
              </div>
              <dl>
                <dt>
                  <span className="txt">
                    통화<strong>스왑</strong>
                    업무게시업무게시업무게시업무게시업무게시업무게시업무게시업무게시
                  </span>
                  <em>
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

                <dd className="etc">
                  <span>
                    <button
                      type="button"
                      className={` ${activeState.similar ? "" : "down"}`}
                      onClick={() => toggle("similar")}
                    >
                      00개의 유사문서(팝업 디자인 나올거임)
                    </button>
                  </span>
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
                <span className="label number">관리번호 0000</span>
                <em>
                  외환 > 제3권 외환여신 > <b>제3장 장외파생상품 업무</b>
                </em>
              </div>
              <dl>
                <dt>
                  <span className="txt">
                    통화<strong>스왑</strong>
                    업무게시업무게시업무게시업무게시업무게시업무게시업무게시업무게시
                  </span>
                  <em>
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

                <dd className="etc">
                  <span>
                    <button type="button">
                      00개의 유사문서(팝업 디자인 나올거임)
                    </button>
                  </span>
                </dd>
              </dl>
            </div>

            <div className="content">
              <div className="lnb">
                <span className="label number">관리번호 0000</span>
                <em>
                  외환 > 제3권 외환여신 > <b>제3장 장외파생상품 업무</b>
                </em>
              </div>
              <dl>
                <dt>
                  <span className="txt">
                    통화<strong>스왑</strong>
                    업무게시업무게시업무게시업무게시업무게시업무게시업무게시업무게시
                  </span>
                  <em>
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

                <dd className="etc">
                  <span>
                    <button type="button">
                      00개의 유사문서(팝업 디자인 나올거임)
                    </button>
                  </span>
                </dd>
              </dl>
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
              <ul className="dot">
                <li>
                  <button type="button">
                    일이삼사오육칠팔구십일이삼사오육칠팔구
                  </button>
                </li>
                <li>
                  <button type="button">버팀목전세자금대출 한도조회</button>
                </li>
                <li>
                  <button type="button">대출이자납입일</button>
                </li>
                <li>
                  <button type="button">한도미사용수수료 VG</button>
                </li>
                <li>
                  <button type="button">재형저축 비과세 한도</button>
                </li>
                <li>
                  <button type="button">당좌 이자</button>
                </li>
                <li>
                  <button type="button">신용보정서한도</button>
                </li>
                <li>
                  <button type="button">한도 신청</button>
                </li>
                <li>
                  <button type="button">기간연장 이자</button>
                </li>
                <li>
                  <button type="button">이체한도 5억</button>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>1008


      <ModalP
          ref={modalSimilarSearchRef}
          width="600px"
          title="연관 검색어"
          close
          content={
            <>
              <div className="keyWordContainer">

                <div className="content">
                  <ul className="dot">
                    <li>
                      <button type="button">
                        일이삼사오육칠팔구십일이삼사오육칠팔구
                      </button>
                    </li>
                    <li>
                      <button type="button">버팀목전세자금대출 한도조회</button>
                    </li>
                    <li>
                      <button type="button">대출이자납입일</button>
                    </li>
                    <li>
                      <button type="button">한도미사용수수료 VG</button>
                    </li>
                    <li>
                      <button type="button">재형저축 비과세 한도</button>
                    </li>
                    <li>
                      <button type="button">당좌 이자</button>
                    </li>
                    <li>
                      <button type="button">신용보정서한도</button>
                    </li>
                    <li>
                      <button type="button">한도 신청</button>
                    </li>
                    <li>
                      <button type="button">기간연장 이자</button>
                    </li>
                    <li>
                      <button type="button">이체한도 5억</button>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          }
      />
    </>
  );
};

export default CsMainP;
