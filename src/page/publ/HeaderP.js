import React, { useState, useRef, useEffect } from "react";
import ModalP from "./ModalP";

const HeaderP = () => {
  const modalRef = useRef(null);
  const modalDetailRef = useRef(null);
  const modalSettingRef = useRef(null);
  const [activeState, setActiveState] = useState({
    detail: false,
    setting: false,
  });

  return (
    <>
      <header>
        <div className="header">
          <h1 className="logo">AI 검색</h1>
          <div className="searchWrap">
            <input type="search" placeholder="검색어를 입력하세요" />
            <button
                type="button"
                className="iconSearch"
                onClick={() => modalRef.current.show()}
            />

            {/*<div className="searchList">
                <div className="top">
                  <span>최근검색어</span>
                  <button type="button">전체삭제</button>
                </div>
                <ul>
                  <li>
                    <span>
                      서울시영세소상공인 재래시장 등 <strong>대출</strong>
                    </span>
                    <button type="button">
                      07.25 <i className="iconDel" />
                    </button>
                  </li>
                  <li>
                    <span>
                      서울시영세소상공인 재래시장 등 <strong>대출</strong>
                    </span>
                    <button type="button">
                      07.25 <i className="iconDel" />
                    </button>
                  </li>
                  <li>
                    <span>
                      서울시영세소상공인 재래시장 등 <strong>대출</strong>
                    </span>
                    <button type="button">
                      07.25 <i className="iconDel" />
                    </button>
                  </li>
                  <li>
                    <span>
                      서울시영세소상공인 재래시장 등 <strong>대출</strong>
                    </span>
                    <button type="button">
                      07.25 <i className="iconDel" />
                    </button>
                  </li>
                </ul>
                <div className="emptyTxt">
                  최근 검색어가 없습니다.
                </div>

                <div className="bottom">
                  <label className="toggleSwitch">
                    <span>자동완성 끄기</span>
                    <input role="switch" type="checkbox" />
                  </label>
                </div>
              </div>*/}
          </div>
          <div className="lnb">
            <button
                type="button"
                className={`detail ${activeState.detail ? "on" : ""}`}
                onClick={() => modalDetailRef.current.show()}
            >
              상세검색
            </button>
            <label>
              <input type="checkbox" />
              <span>결과 내 재검색</span>
            </label>
            <button
                className={`setting ${activeState.setting ? "on" : ""}`}
                type="button"
                onClick={() => modalSettingRef.current.show()}
            >
              설정
            </button>
          </div>
        </div>
      </header>

      <ModalP
        ref={modalRef}
        //title="ddd"
        close
        content={
          <>
            <div className="noneSearch">
              <h5 className="mb2">검색하실 키워드를 입력해 주세요.</h5>
              <div className="flexWrap flexS">
                · 단어의 철자가 정확한지 확인해 주세요. <br />· 한글을 영어로
                혹은 영어를 한글로 입력했는지 확인해 보세요. <br />· 두 단어
                이상의 검색어인 경우, 띄어쓰기를 확인해 보세요.
              </div>
            </div>
          </>
        }
        btnText01="확인"
        btnText02="취소"
        callback={() => {
          console.log("callback");
        }}
      />

      <ModalP
        ref={modalDetailRef}
        title="상세 검색"
        close
        content={
          <>
            <div className="formContainer">
              <div className="flexWrap flexS">
                <div className="tit">검색어</div>
                <div className="cont">
                  <div className="flexWrap">
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="flexWrap flexS">
                <div className="tit">등록자</div>
                <div className="cont">
                  <div className="flexWrap">
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="flexWrap flexS">
                <div className="tit">검색대상</div>
                <div className="cont">
                  <div className="flexWrap">
                    <div className="buttonStyle">
                      <label className="button">
                        <input type="checkbox" />
                        <span>전체</span>
                      </label>
                      <label className="button">
                        <input type="checkbox" />
                        <span>내용</span>
                      </label>
                      <label className="button">
                        <input type="checkbox" />
                        <span>첨부파일</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flexWrap flexS">
                <div className="tit">등록일자</div>
                <div className="cont">
                  <div className="flexWrap">
                    <input
                      type="date"
                      placeholder="날짜를 선택해주세요."
                      required
                      //value={props.date}
                      //onChange={props.changeHandler}
                      //id='dateSelect'
                      //min="{props.isFullRange ? undefined : getDate()}"
                    />
                    <em>-</em>
                    <input
                      type="date"
                      placeholder="날짜를 선택해주세요."
                      required
                      //value={props.date}
                      //onChange={props.changeHandler}
                      //id='dateSelect'
                      //min="{props.isFullRange ? undefined : getDate()}"
                    />
                  </div>
                </div>
              </div>
              <div className="flexWrap flexS">
                <div className="tit">수정일자</div>
                <div className="cont">
                  <div className="flexWrap">
                    <input
                      type="date"
                      placeholder="날짜를 선택해주세요."
                      required
                      //value={props.date}
                      //onChange={props.changeHandler}
                      //id='dateSelect'
                      //min="{props.isFullRange ? undefined : getDate()}"
                    />
                    <em>-</em>
                    <input
                      type="date"
                      placeholder="날짜를 선택해주세요."
                      required
                      //value={props.date}
                      //onChange={props.changeHandler}
                      //id='dateSelect'
                      //min="{props.isFullRange ? undefined : getDate()}"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        }
        btnText01="저장"
        btnText02="취소"
        callback={() => {
          console.log("callback");
        }}
      />

      <ModalP
        ref={modalSettingRef}
        title="설정"
        close
        content={
          <>
            <div className="formContainer">
              <div className="flexWrap flexS">
                <div className="tit">검색 서비스 선택</div>
                <div className="cont">
                  <div className="flexWrap">
                    <div className="buttonStyle">
                      <label className="button">
                        <input type="radio" />
                        <span>AI 검색</span>
                      </label>
                      <label className="button">
                        <input type="radio" />
                        <span>통합검색</span>
                      </label>
                      <label className="button">
                        <input type="radio" />
                        <span>지식상담</span>
                      </label>
                    </div>
                  </div>

                  <small>선택된 검색 서비스를 포탈 검색 시 사용합니다.</small>
                </div>
              </div>
              <div className="flexWrap flexS">
                <div className="tit">AI 서비스 설정</div>
                <div className="cont">
                  <label>
                    <input type="radio" />
                    <span>AI 지식상담 검색 자동 연동</span>
                  </label>
                  <br />
                  <label>
                    <input type="radio" />
                    <span>AI 챗봇 검색 자동 연동</span>
                  </label>
                  <br />
                  <small>
                    체크 해제 시 각 서비스는 검색과 자동 연동되지 않습니다.
                  </small>
                </div>
              </div>
              <div className="flexWrap flexS">
                <div className="tit">검색 카테고리 구분</div>
                <div className="cont">
                  <div className="flexWrap">
                    <div className="buttonStyle">
                      <label className="button">
                        <input type="radio" />
                        <span>전체보기</span>
                      </label>
                      <label className="button">
                        <input type="radio" />
                        <span>통합검색</span>
                      </label>
                      <label className="button">
                        <input type="radio" />
                        <span>나눠보기</span>
                      </label>
                    </div>
                  </div>

                  <small>
                    검색 창을 새로 열 때 적용할 디폴트 모드를 지정합니다.
                    <br />
                    전체보기 선택 시, 카테고리 구분없이 전체 결과를 제공합니다.
                  </small>
                </div>
              </div>
              <div className="flexWrap flexS">
                <div className="tit">기타 항목 설정</div>
                <div className="cont">
                  <label>
                    <input type="checkbox" />
                    <span>AI 지식상담 검색 자동 연동</span>
                  </label>
                </div>
              </div>
            </div>
          </>
        }
        info={
          <>
            각 설정 항목은 관리자에 의해 선택이 제한되거나 변경될 수 있습니다.
            <a href="#none">관리포탈 바로가기</a>
          </>
        }
        btnText01="검색"
        btnText02="초기화"
        callback={() => {
          console.log("callback");
        }}
      />
    </>
  );
};

export default HeaderP;
