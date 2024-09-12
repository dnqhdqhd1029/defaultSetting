import React, { useEffect, useRef, useState } from "react";
import HeaderP from "./HeaderP";
import { Table } from "antd";
//import type { TableColumnsType, TableProps } from 'antd';
import "../../assets/style/style.scss";

const MainP = () => {
  const [activeTab, setActiveTab] = useState("tab01");
  const tabButtonsRef = useRef([]);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <HeaderP />
      <main>
        <section className="section">
          <div className="menuContainer">
            <div className="tabMenu">
              <button type="button" className="on">
                전체보기
              </button>
              <button type="button" className="">
                나눠보기
              </button>
            </div>
            <div className="menuWrap">
              <div className="menuTab">
                <button type="button" className="on">
                  원천
                </button>
                <button type="button" className="">
                  新정보
                </button>
              </div>
              <div className="menuList">
                <button type="button" className="on">
                  <span>
                    고객센터 <em>21</em>
                  </span>{" "}
                  <i className="iconEye" />
                </button>
                <button type="button" className="">
                  <span>
                    전자결재 <em>5</em>
                  </span>{" "}
                  <i className="iconEye" />
                </button>
                <button type="button" className="">
                  <span>
                    규정 <em>2</em>
                  </span>{" "}
                  <i className="iconEye" />
                </button>
                <button type="button" className="">
                  <span>
                    우리상품 바로알기 <em>2</em>
                  </span>{" "}
                  <i className="iconEye" />
                </button>
                <button type="button" className="">
                  <span>
                    부서홈페이지 <em>2</em>
                  </span>{" "}
                  <i className="iconEye" />
                </button>
                <button type="button" className="">
                  <span>
                    게시 <em>2</em>
                  </span>{" "}
                  <i className="iconEye" />
                </button>
                <button type="button" className="">
                  <span>
                    업무포탈 <em>2</em>
                  </span>{" "}
                  <i className="iconEye" />
                </button>
                <button type="button" className="">
                  <span>
                    업무길라잡이 <em>2</em>
                  </span>{" "}
                  <i className="iconEye" />
                </button>
                <button type="button" className="">
                  <span>
                    은행사전 <em>2</em>
                  </span>{" "}
                  <i className="iconEye" />
                </button>
                <button type="button" className="">
                  <span>
                    직원정보 <em>2</em>
                  </span>{" "}
                  <i className="iconEye" />
                </button>
                <button type="button" className="">
                  <span>
                    통합Q&A <em>2</em>
                  </span>{" "}
                  <i className="iconEye" />
                </button>
                <button type="button" className="">
                  <span>
                    전산매뉴얼ABC <em>2</em>
                  </span>{" "}
                  <i className="iconEye" />
                </button>
              </div>
            </div>
          </div>

          <div className="listContainer">
            <div className="title">
              <span>
                <strong>전체</strong>
                <em>42</em>
              </span>
              <select>
                <option>정확도순</option>
                <option>조회순</option>
                <option>제목순</option>
                <option>최근날짜순</option>
              </select>
            </div>
            <div className="content">
              <div className="lnb">
                <span>길라잡이</span>
                <em>
                  외환 > 제3권 외환여신 > <b>제3장 장외파생상품 업무</b>
                </em>
              </div>
              <dl>
                <dt>
                  <span>
                    통화<strong>스왑</strong> 업무게시
                  </span>
                  <em>2024-05-22</em>
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
                <dd className="down">
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
                  <button type="button">Preview</button>
                </dd>
              </dl>
            </div>

            <div className="content">
              <div className="txtNone">
                <h5><b>이자율 스왑</b> 에 대한 검색결과가 없습니다.</h5>
                <ul className="dot">
                  <li><span>단어의 철자가 정확한지 확인해 주세요.</span></li>
                  <li><span>한글을 영어로 혹은 영어를 한글로 입력했는지 확인해 보세요.</span></li>
                  <li><span>검색어의 단어 수를 줄이거나, 보다 일반적인 검색어로 다시 검색해 보세요.</span></li>
                  <li><span>두 단어 이상의 검색어인 경우, 띄어쓰기를 확인해 보세요.</span></li>
                </ul>
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

          <div className="keyWordContainer">
            <div className="title">연관 검색어</div>
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
            <div className="title">
              <span>
                우리은행 ChatGPT <strong>AI 지식상담</strong>입니다.
              </span>
              <button type="button" className="iconScale" />

              <div className="aiWrap">
                <div className="aiCont">
                  <p>
                    어떤 업무를 도와드릴까요? 다음과 같이 질문을 구체적으로
                    물어보시면 도움되는 답변을 받으실 수 있습니다.
                  </p>
                  <p>
                    <button type="button">IRP 대리인 해지 가능해?</button>
                    <button type="button">
                      임대보증금 보증 일부가입 요건 알려줘
                    </button>
                  </p>
                  <p>
                    <i className="iconInfo" />
                    IRP 대리인 해지 가능해?
                  </p>
                </div>
                <div className="question">이자율 스왑이 뭐야?</div>
                <div className="aiCont">
                  <p>
                    이자율 스왑이란 금융시장에서 차입자의 기존부채 또는 신규
                    부채에 대한 금리리스크의 헤징이나 차입비용의 절감을 위하여
                    두 차입자가 각자의 차입조건을 상호간에 교환하는 계약으로서
                    일반적으로 변동(고정)금리 dl부채를 고정(변동)금리부채로
                    전환하는 형식을 취하게 됩니다.
                  </p>
                  <button className="answerLink">
                    <strong>1</strong> <strong>고객센터</strong> 링크 없는
                    근거문서 케이스
                  </button>
                  <button className="answerLink">
                    <strong>2</strong> <strong>부서홈페이지</strong> 링크가 있는
                    근거문서 케이스
                    <i className="iconLink" />
                  </button>
                </div>
              </div>

              <div className="serachArea">
                <input type="text" placeholder="궁금한 것을 질문해 보세요" />
                <button type="button" className="enter" />
              </div>
            </div>
          </div>
          <div className="chetbotContainer">
            <div className="title">
              <i className="iconAi" /> AI챗봇에게 물어보기
            </div>

            <div className="content">
              <div className="cont">
                <dl>
                  <dt>
                    <span>자금세탁방지</span>
                  </dt>
                  <dd className="info">
                    <span className="txt">
                      우리사잇돌중금리대 모바일 신청 시 비대면으로
                    </span>
                    <span>
                      필수사전요건으로 모바일뱅킹에서 고객이 직접 KYC를 수행할
                      수 있습니다. 자세한 사항은 디지털금융그룹 KYC 담당자에게
                      문의하시기 바랍니다.
                    </span>
                  </dd>
                  <dd className="down">
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
                    <button type="button">Preview</button>
                  </dd>
                </dl>
              </div>
              <div className="cont">
                <dl>
                  <dt>
                    <span>자금세탁방지</span>
                  </dt>
                  <dd className="info">
                    <span className="txt">
                      우리사잇돌중금리대 모바일 신청 시 비대면으로
                    </span>
                    <span>
                      필수사전요건으로 모바일뱅킹에서 고객이 직접 KYC를 수행할
                      수 있습니다. 자세한 사항은 디지털금융그룹 KYC 담당자에게
                      문의하시기 바랍니다.
                    </span>
                  </dd>
                  <dd className="down">
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
                    <button type="button">Preview</button>
                  </dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="otherContainer">
            <div className="tabList">
              <button
                type="button"
                className={`${activeTab === "tab01" ? "active" : ""}`}
                onClick={() => handleTabClick("tab01")}
                ref={(el) => (tabButtonsRef.current[0] = el)}
              >
                북마크 <button type="button" className="setting" />
              </button>
              <button
                type="button"
                className={`${activeTab === "tab02" ? "active" : ""}`}
                onClick={() => handleTabClick("tab02")}
                ref={(el) => (tabButtonsRef.current[1] = el)}
              >
                My 헬프데스크 <button type="button" className="setting" />
              </button>
              <button
                type="button"
                className={`${activeTab === "tab03" ? "active" : ""}`}
                onClick={() => handleTabClick("tab03")}
                ref={(el) => (tabButtonsRef.current[2] = el)}
              >
                나의 즐겨찾기
              </button>
              <button
                type="button"
                className={`${activeTab === "tab04" ? "active" : ""}`}
                onClick={() => handleTabClick("tab04")}
                ref={(el) => (tabButtonsRef.current[3] = el)}
              >
                알림 검색어 <button type="button" className="setting" />
              </button>
              <button
                type="button"
                className={`${activeTab === "tab05" ? "active" : ""}`}
                onClick={() => handleTabClick("tab05")}
                ref={(el) => (tabButtonsRef.current[4] = el)}
              >
                인기 검색어
              </button>
            </div>

            <div className="tabWrap">
              {activeTab === "tab01" && (
                <>
                  <div className="cont">
                    <ol>
                      <li>
                        <em>1</em>
                        <button type="button" className="txt">
                          일이삼사오육칠팔구십일이삼사오육칠
                        </button>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <em>2</em>
                        <button type="button" className="txt">
                          일이삼사오육칠팔구십일이삼사오육칠
                        </button>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <em>3</em>
                        <button type="button" className="txt">
                          일이삼사오육칠팔구십일이삼사오육칠
                        </button>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <em>4</em>
                        <button type="button" className="txt">
                          일이삼사오육칠팔구십일이삼사오육칠
                        </button>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <em>5</em>
                        <button type="button" className="txt">
                          일이삼사오육칠팔구십일이삼사오육칠
                        </button>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <em>6</em>
                        <button type="button" className="txt">
                          일이삼사오육칠팔구십일이삼사오육칠
                        </button>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <em>7</em>
                        <button type="button" className="txt">
                          일이삼사오육칠팔구십일이삼사오육칠
                        </button>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <em>8</em>
                        <button type="button" className="txt">
                          일이삼사오육칠팔구십일이삼사오육칠
                        </button>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <em>9</em>
                        <button type="button" className="txt">
                          일이삼사오육칠팔구십일이삼사오육칠
                        </button>
                        <button type="button" className="iconDel" />
                      </li>
                      <li>
                        <em>10</em>
                        <button type="button" className="txt">
                          일이삼사오육칠팔구십일이삼사오육칠
                        </button>
                        <button type="button" className="iconDel" />
                      </li>

                    </ol>
                  </div>
                </>
              )}
              {activeTab === "tab02" && <>tab02</>}
              {activeTab === "tab03" && <>tab03</>}
              {activeTab === "tab04" && <>tab04</>}
              {activeTab === "tab05" && <>tab05</>}
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default MainP;
