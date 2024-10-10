import React, { useEffect, useRef, useState } from "react";
import HeaderP from "./HeaderP";
import ModalP from "./ModalP";
import { Table } from "antd";
//import type { TableColumnsType, TableProps } from 'antd';
import "../../assets/style/style.scss";
import ChattingP from "./ChattingP";
const ConciergeP = () => {
  const [activeTab, setActiveTab] = useState("tab01");
  const modalPreviewRef = useRef(null);

  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const handleStarClick = (index) => {
    const clickStates = [...clicked];
    for (let i = 1; i < 6; i++) {
      clickStates[i] = i <= index;
    }
    setClicked(clickStates);
  };
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <main className="csMain tabWrap">
        <div className="csSearchWrap">
          <div className="search flexJ">
            <input type="text" style={{ flex: "1" }} />
            <button type="button" className="btn bgDarkBlue ml1">
              확인
            </button>
          </div>
          <div className="view">
            <button
              type="button"
              className={`iconVewList ${activeTab === "tab01" ? "on" : ""}`}
              onClick={() => handleTabClick("tab01")}
            />
            <button
              type="button"
              className={`iconVewSearch ${activeTab === "tab02" ? "on" : ""}`}
              onClick={() => handleTabClick("tab02")}
            />
          </div>
        </div>

        {activeTab === "tab01" && (
          <section className="section">
            <div className="listContainer">
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
                      예약환율은 현재환율에 교환채권의 만기 이자값 차이를
                      가감하여 산출하며, 이러한 만기 이자값 차이, 즉
                      미래교환가치를 ‘<strong>스왑</strong>포인트(swap
                      point)’라고 한다.
                    </span>
                  </dd>

                  <dd className="etc flexJ ">
                    <button
                      type="button"
                      className={` ${activeState.similar ? "" : "down"}`}
                      onClick={() => toggle("similar")}
                    >
                      00개의 유사문서(팝업 디자인 나올거임)
                    </button>
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
                              확대 및 ‘24년 금융시장 환경 * 감안 수익성 증대
                              추진 * 회사채 만기 도래 규모 최대(70조원), ‘24.上
                              고금리 기조 유지 이후 텍스트 최대 3줄 노출 후
                              넘치는 텍스트는 말줄임 해 주세요
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
                      예약환율은 현재환율에 교환채권의 만기 이자값 차이를
                      가감하여 산출하며, 이러한 만기 이자값 차이, 즉
                      미래교환가치를 ‘<strong>스왑</strong>포인트(swap
                      point)’라고 한다.
                    </span>
                  </dd>

                  <dd className="etc flexJ">
                    <button type="button">
                      00개의 유사문서(팝업 디자인 나올거임)
                    </button>
                    <button
                      type="button"
                      onClick={() => modalPreviewRef.current.show()}
                    >
                      Preview
                    </button>
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
                      예약환율은 현재환율에 교환채권의 만기 이자값 차이를
                      가감하여 산출하며, 이러한 만기 이자값 차이, 즉
                      미래교환가치를 ‘<strong>스왑</strong>포인트(swap
                      point)’라고 한다.
                    </span>
                  </dd>

                  <dd className="etc flexJ">
                    <button type="button">
                      00개의 유사문서(팝업 디자인 나올거임)
                    </button>
                    <button
                      type="button"
                      onClick={() => modalPreviewRef.current.show()}
                    >
                      Preview
                    </button>
                  </dd>
                </dl>
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
                        한글을 영어로 혹은 영어를 한글로 입력했는지 확인해
                        보세요.
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
          </section>
        )}

        {activeTab === "tab02" && (
          <section className="section">
            <div className="listContainer">
              <div className="content">
                <div className="lnb">
                  <span className="label number">222관리번호 0000</span>
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
                  </dd>

                </dl>

                <div className="detailView mt2" style={{padding:'0',minHeight:'200px',fontSize:'14px'}}>
                  검색결과 preview 영역<br/>
                  검색결과 preview 영역<br/>
                  검색결과 preview 영역<br/>
                  검색결과 preview 영역<br/>
                  검색결과 preview 영역<br/>
                  검색결과 preview 영역
                </div>
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
                        한글을 영어로 혹은 영어를 한글로 입력했는지 확인해
                        보세요.
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
          </section>
        )}
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
    </>
  );
};

export default ConciergeP;
