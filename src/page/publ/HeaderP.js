
import React, { useState } from "react";

const HeaderP = ({ showSearch }) => {
  const [activeState, setActiveState] = useState({
    notice: false,
    keep: false,
    quick: false,
  });


  const toggle = (type) => {
    setActiveState((prevState) => ({
      notice: type === "notice" ? !prevState.notice : false,
      keep: type === "keep" ? !prevState.keep : false,
      quick: type === "quick" ? !prevState.quick : false,
    }));
  };


  return (
    <div className="headerContainer">
      <header>
        <div className="header">
          <h1 className="logo">기업분석 리포트</h1>
          <div className="lnb">
            <button type="button"  className={`notice ${activeState.notice  ? "on" : ""}`}
                    onClick={() => toggle("notice")}>
              {/*class on 여부*/}
              알림 <i className="new" />

              {/*popup*/}

              <div className={`noticePopup ${activeState.notice ? "show" : ""}`}>
                리포트 13건이 생성완료되었어요
              </div>

              {/* end popup*/}
            </button>
            <button className={`keep ${activeState.keep  ? "on" : ""}`} type="button" onClick={() => toggle("keep")}>
              보관함
              {/*popup*/}

              <div className={`keepPopup ${activeState.keep ? "show" : ""}`}>
                <h4>일괄리포트 생성</h4>

                <div className="popupContent">
                  <div className="curationWrap">
                    <h5 className="info">큐레이션을 선택해 주세요.</h5>
                    <div className="curationCont scroll">
                      <h6>추천 큐레이션</h6>
                      <div className="curationBox ">
                        <button type="button">
                          <dl>
                            <dt>
                              <span>여신 심사보고서</span>
                              <em>5</em>
                            </dt>
                            <dd>
                              <span>
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명
                              </span>
                            </dd>
                          </dl>
                        </button>
                        <button type="button" className="on">
                          <dl>
                            <dt>
                              <span>여신 심사보고서</span>
                              <em>5</em>
                            </dt>
                            <dd>
                              <span>
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명
                              </span>
                            </dd>
                          </dl>
                        </button>
                        <button type="button">
                          <dl>
                            <dt>
                              <span>여신 심사보고서</span>
                              <em>5</em>
                            </dt>
                            <dd>
                              <span>
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명
                              </span>
                            </dd>
                          </dl>
                        </button>
                        <button type="button">
                          <dl>
                            <dt>
                              <span>여신 심사보고서</span>
                              <em>5</em>
                            </dt>
                            <dd>
                              <span>
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명
                              </span>
                            </dd>
                          </dl>
                        </button>
                        <button type="button">
                          <dl>
                            <dt>
                              <span>여신 심사보고서</span>
                              <em>5</em>
                            </dt>
                            <dd>
                              <span>
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명
                              </span>
                            </dd>
                          </dl>
                        </button>
                      </div>

                      <h6>내가 만든 큐레이션</h6>
                      <div className="curationBox">
                        <button type="button">
                          <dl>
                            <dt>
                              <span>여신 심사보고서</span>
                              <em>5</em>
                            </dt>
                            <dd>
                              <span>
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명
                              </span>
                            </dd>
                          </dl>
                        </button>
                        <button type="button" className="on">
                          <dl>
                            <dt>
                              <span>여신 심사보고서</span>
                              <em>5</em>
                            </dt>
                            <dd>
                              <span>
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명
                              </span>
                            </dd>
                          </dl>
                        </button>
                        <button type="button">
                          <dl>
                            <dt>
                              <span>여신 심사보고서</span>
                              <em>5</em>
                            </dt>
                            <dd>
                              <span>
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명
                              </span>
                            </dd>
                          </dl>
                        </button>
                        <button type="button">
                          <dl>
                            <dt>
                              <span>여신 심사보고서</span>
                              <em>5</em>
                            </dt>
                            <dd>
                              <span>
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명
                              </span>
                            </dd>
                          </dl>
                        </button>
                        <button type="button">
                          <dl>
                            <dt>
                              <span>여신 심사보고서</span>
                              <em>5</em>
                            </dt>
                            <dd>
                              <span>
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명 최대2줄
                                큐레이션 설명 최대2줄 큐레이션 설명
                              </span>
                            </dd>
                          </dl>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="myBoxWrap ">
                    <h5 className="info">나의 보관함</h5>
                    <div className="myBoxChecked">
                      <div className="allChecked">
                        <label>
                          <input type="checkbox" /> <span>전체선택</span>
                        </label>
                        <div className="btn">
                          <button type="button" className="btn bgWhite">담기</button>
                          <button type="button" className="btn bgWhite">삭제</button>
                        </div>
                      </div>
                      <div className="allList scroll">
                        <button type="button" className="on">
                          <label>
                            <input type="checkbox" /> <span/>
                          </label>
                          <span>
                            <strong>일이삼사오육칠팔구십일이삼사오육칠</strong>
                            <em>
                              법인번호 <b>000000-0000000</b>
                            </em>
                          </span>
                        </button>

                        <button type="button">
                          <label>
                            <input type="checkbox" /><span/>
                          </label>
                          <span>
                            <strong>일이삼사오육칠팔구십일이삼사오육칠</strong>
                            <em>
                              법인번호 <b>000000-0000000</b>
                            </em>
                          </span>
                        </button>

                        <button type="button" className="on">
                          <label>
                            <input type="checkbox" /><span/>
                          </label>
                          <span>
                            <strong>일이삼사오육칠팔구십일이삼사오육칠</strong>
                            <em>
                              법인번호 <b>000000-0000000</b>
                            </em>
                          </span>
                        </button>

                        <button type="button" className="on">
                          <label>
                            <input type="checkbox" /><span/>
                          </label>
                          <span>
                            <strong>일이삼사오육칠팔구십일이삼사오육칠</strong>
                            <em>
                              법인번호 <b>000000-0000000</b>
                            </em>
                          </span>
                        </button>
                        <button type="button" className="on">
                          <label>
                            <input type="checkbox" /><span/>
                          </label>
                          <span>
                            <strong>현대자동차</strong>
                            <em>
                              법인번호 <b>000000-0000000</b>
                            </em>
                          </span>
                        </button>
                      </div>
                    </div>

                    <h5 className="info">
                      <b>여신 심사 보고서</b>로 생성할 기업을 선택해 주세요.
                    </h5>
                    <div className="myBoxList scroll">
                      <div className="cont">
                        <span>HDC현대 EPHDC현대 EPHDC현대 EPHDC현대 EPHDC현대 EPHDC현대 EP</span>
                        <button type="button" className="del" />
                      </div>
                      <div className="cont">
                        <span>HDC현대 EP</span>
                        <button type="button" className="del" />
                      </div>
                      <div className="cont">
                        <span>HDC현대 EP</span>
                        <button type="button" className="del" />
                      </div>
                      <div className="cont">
                        <span>HDC현대 EP</span>
                        <button type="button" className="del" />
                      </div>
                      <div className="cont">
                        <span>HDC현대 EPHDC현대 EPHDC현대 EPHDC현대 EPHDC현대 EPHDC현대 EP</span>
                        <button type="button" className="del" />
                      </div>
                      <div className="cont">
                        <span>HDC현대 EP</span>
                        <button type="button" className="del" />
                      </div>
                      <div className="cont">
                        <span>HDC현대 EP</span>
                        <button type="button" className="del" />
                      </div>
                      <div className="cont">
                        <span>HDC현대 EP</span>
                        <button type="button" className="del" />
                      </div>
                      <div className="cont">
                        <span>HDC현대 EPHDC현대 EPHDC현대 EPHDC현대 EPHDC현대 EPHDC현대 EP</span>
                        <button type="button" className="del" />
                      </div>
                      <div className="cont">
                        <span>HDC현대 EP</span>
                        <button type="button" className="del" />
                      </div>
                      <div className="cont">
                        <span>HDC현대 EP</span>
                        <button type="button" className="del" />
                      </div>
                      <div className="cont">
                        <span>HDC현대 EP</span>
                        <button type="button" className="del" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="popupFoot">
                  <div className="info">
                    <em>일괄 리포트는 최대 10개까지 생성 가능합니다.</em>
                    <span>
                      <b>7</b>/10
                    </span>
                  </div>
                  <button type="button" className="btn bgPrimary">
                    일괄 리포트 생성
                  </button>
                </div>
                <button className="close" />
              </div>

              {/*end popup*/}
            </button>
            <button className={`quick ${activeState.quick  ? "on" : ""}`} type="button" onClick={() => toggle("quick")}>
              빠른메뉴
              {/*popup*/}

              <div className={`quickPopup ${activeState.quick ? "show" : ""}`} >
                <ul>
                  <li>
                    <button type="button" className="on">
                      <i className="iconMenu01" /> 최근리포트 목록
                      <i className="new" />
                    </button>
                  </li>
                  <li>
                    <button type="button" className="">
                      <i className="iconMenu02" /> 나의 템플릿 관리
                      {/*<i className="new" />*/}
                    </button>
                  </li>
                </ul>
              </div>

              {/* end popup*/}
            </button>
          </div>
        </div>

        {showSearch && (
          <div className="headerSearch">
            <div className="mainTitle">
              <h2>기업 분석부터 리포트 제작까지 간편하게!</h2>
              <span>
                이 서비스는 기업고객부, 중소기업고객부, 신용리스크관리부가 함께
                협업하여 제작되었습니다
              </span>
            </div>

            <div className="searchWrap">
              <input type="search" placeholder="찾으시는 기업을 검색하세요" />
              <button type="button" className="iconSearch" />
              <div className="searchList">
                <ul>
                  <li>dfdf</li>
                  <li>dfdf</li>
                  <li>dfdf</li>
                  <li>dfdf</li>
                  <li>dfdf</li>
                  <li>dfdf</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default HeaderP;
