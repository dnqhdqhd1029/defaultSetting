import React, { useEffect, useRef, useState } from "react";

import { Table } from "antd";

import ChattingP from "./ChattingP";
import ModalP from "./ModalP";
import "../../assets/style/style.scss";

const CounselingMainP = () => {
  const confirmRef = useRef(null);
  const modalCounselingRef = useRef(null);
  const modalSettingRef = useRef(null);
  const [activeState, setActiveState] = useState({
    counseling: false,
    setting: false,
    btnDown: false,
  });

  const toggle = (type) => {
    setActiveState((prevState) => ({
      btnDown: type === "btnDown" ? !prevState.btnDown : false,
    }));
  };



  return (
    <>
      <div className="counselingContainer">
        <div className="header">

          <h1 className="logo">
            AI 검색
            <button
                type="button"
                className={`btnDown ${activeState.btnDown ? "on" : ""}`}
                onClick={() => toggle("btnDown")}
            />
            <div className={`btnDownPopup ${activeState.btnDown ? "show" : ""}`}>
              디자인중
            </div>

          </h1>

          <div className="lnb">

            <button
                type="button"
                className={`counseling ${activeState.counseling ? "on" : ""}`}
                onClick={() => modalCounselingRef.current.show()}
            >
              지난상담내역
            </button>


            <button 
                className={`setting ${activeState.setting ? "on" : ""}`}
                type="button"
                onClick={() => modalSettingRef.current.show()}
            >
              설정
            </button>

          </div>

        </div>
        {/*end header*/}
        <div className="aiContainer">
          <ChattingP chattingFooter />
        </div>
        {/*end aiContainer*/}
        
        
      </div>

      

      <ModalP
          ref={modalCounselingRef}
          title="상세 검색"
          close
          width="543px"
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
                <div className="flexWrap flexS">
                  <div className="tit">등록일자</div>
                  <div className="cont">
                    <div className="flexWrap moth">
                      <input
                          type="date"
                          placeholder="0000-00-00"
                          required
                          //value={props.date}
                          //onChange={props.changeHandler}
                          //id='dateSelect'
                          //min="{props.isFullRange ? undefined : getDate()}"
                      />
                      <em>-</em>
                      <input
                          type="date"
                          placeholder="0000-00-00"
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
                    <div className="flexWrap moth">
                      <input
                          type="date"
                          placeholder="0000-00-00"
                          required
                          //value={props.date}
                          //onChange={props.changeHandler}
                          //id='dateSelect'
                          //min="{props.isFullRange ? undefined : getDate()}"
                      />
                      <em>-</em>
                      <input
                          type="date"
                          placeholder="0000-00-00"
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
          width="700px"
          content={
            <>
              <div className="formContainer">
                <div className="flexWrap flexS">
                  <div className="tit">검색 서비스 선택</div>
                  <div className="cont">
                    <div className="flexWrap">
                      <div className="buttonStyle mb1">
                        <label className="button">
                          <input type="radio" checked name="01" />
                          <span>AI 검색</span>
                        </label>
                        <label className="button">
                          <input type="radio" name="01" />
                          <span>통합검색</span>
                        </label>
                        <label className="button">
                          <input type="radio" name="01" />
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
                    <label className="mb1">
                      <input type="checkbox" />
                      <span>AI 지식상담 검색 자동 연동</span>
                    </label>
                    <br />
                    <label className="mb1">
                      <input type="checkbox" />
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
                      <div className="buttonStyle mb1">
                        <label className="button">
                          <input type="radio" checked name="02" />
                          <span>전체보기</span>
                        </label>
                        <label className="button">
                          <input type="radio" name="02" />
                          <span>통합검색</span>
                        </label>
                        <label className="button">
                          <input type="radio" name="02" />
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

export default CounselingMainP;
