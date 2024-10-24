import React, { useEffect, useRef, useState } from "react";

import { Table } from "antd";

import ChattingP from "./ChattingP";
import ModalP from "./ModalP";
import BottomSheetP from './BottomSheetP';
import "../../assets/style/style.scss";

const CounselingMiniP = () => {
  const confirmRef = useRef(null);
  const modalCounselingRef = useRef(null);
  const modalSettingRef = useRef(null);
  const bottomSheetRef = useRef(null);
  const [activeState, setActiveState] = useState({
    counseling: false,
    setting: false,
    btnDown: false,
  });

  const toggle = (type) => {
    setActiveState((prevState) => ({
      ...prevState, // 기존 상태 유지
      [type]: !prevState[type], // 전달된 타입에 해당하는 상태만 토글
    }));
  };

  return (
    <>
      <div className="counselingContainer mini">
        <div className="header">
          <h1 className="logo">
            AI 지식상담
          </h1>

          <div className="lnb">

            <button
              className={`setting ${activeState.setting ? "on" : ""}`}
              type="button"
              onClick={() => bottomSheetRef.current.show()}
            >
              전행 모든지식 참조
            </button>
          </div>

          <div
            className={`counselingPopup ${activeState.counseling ? "show" : ""}`}
          >
            <div className="top ">
              <strong>
                지난 상담 내역
                <button
                  type="button"
                  className="btnSetting"
                  onClick={() => modalCounselingRef.current.show()}
                />
              </strong>

              <button
                type="button"
                className="close"
                onClick={() => toggle("counseling")}
              />
            </div>

            <div className="content">
              <div className="counselingList">
                <ul>
                  <li>
                    <button type="button">
                      <strong className="txt">
                        금융감독원 금융소비자보호 실태펴가
                        관련자료관련자료관련자료관련자료
                      </strong>
                      <span className="date">2024.07.30</span>
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <strong className="txt">
                        금융감독원 금융소비자보호 실태펴가 관련자료
                      </strong>
                      <span className="date">2024.07.30</span>
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <strong className="txt">
                        금융감독원 금융소비자보호 실태펴가 관련자료
                      </strong>
                      <span className="date">2024.07.30</span>
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <strong className="txt">
                        금융감독원 금융소비자보호 실태펴가 관련자료
                      </strong>
                      <span className="date">2024.07.30</span>
                    </button>
                  </li>
                </ul>

                {/*
               <div className="empty flexC">
                 지난 상담 내역이 없습니다
               </div>
               */}
              </div>
            </div>
          </div>
        </div>
        {/*end header*/}
        <div className="aiContainer">
          <ChattingP chattingFooter mini />
        </div>
        {/*end aiContainer*/}
      </div>

      <BottomSheetP
          ref={bottomSheetRef}
          title="대표 AI 선택"
          colse
          section={<>

            <div className="mainAiContainer">
              <ul>
                <li className="checked">
                  <label>
                    <div>
                      <input type="radio" name="mascoat" />
                      <span />
                    </div>


                    <div className="mascoat">
                      <i className="mascoatA" />
                      <dl>
                        <dt>
                          A Type <span className="textPrimary">현재 기본값</span>
                        </dt>
                        <dd>
                          AI검색에 KMS 가중치 높게 적용한 AI로서 일반적인 업무에
                          적합합니다.
                        </dd>
                      </dl>

                   </div>
                  </label>
                </li>
                <li>
                  <label>
                    <div>
                      <input type="radio" name="mascoat" />
                      <span />
                    </div>


                  <div className="mascoat">
                    <i className="mascoatB" />
                    <dl>
                      <dt>B Type </dt>
                      <dd>
                        AI검색에 KMS 가중치 높게 적용한 AI로서 일반적인 업무에
                        적합합니다.
                      </dd>
                    </dl>
                  </div>
                  </label>
                </li>
                <li>
                  <label>
                    <div>
                      <input type="radio" name="mascoat" />
                      <span />
                    </div>


                  <div className="mascoat">
                    <i className="mascoatC" />
                    <dl>
                      <dt>C Type </dt>
                      <dd>
                        AI검색에 KMS 가중치 높게 적용한 AI로서 일반적인 업무에
                        적합합니다.
                      </dd>
                    </dl>
                  </div>
                  </label>
                </li>
                <li>
                  <label>
                    <div>
                      <input type="radio" name="mascoat" />
                      <span />
                    </div>


                  <div className="mascoat">
                    <i className="mascoatD" />
                    <dl>
                      <dt>D Type </dt>
                      <dd>
                        AI검색에 KMS 가중치 높게 적용한 AI로서 일반적인 업무에
                        적합합니다.
                      </dd>
                    </dl>
                  </div>
                  </label>
                </li>
                <li>
                  <label>
                    <div>
                      <input type="radio" name="mascoat" />
                      <span />
                    </div>


                  <div className="mascoat">
                    <i className="mascoatE" />
                    <dl>
                      <dt>E Type </dt>
                      <dd>
                        AI검색에 KMS 가중치 높게 적용한 AI로서 일반적인 업무에
                        적합합니다.
                      </dd>
                    </dl>
                  </div>
                  </label>
                </li>
                <li>
                <label>
                  <input type="radio" name="mascoat" />
                  <span />


                <div className="mascoat">
                  <i className="mascoatF" />
                  <dl>
                    <dt>F Type </dt>
                    <dd>
                      AI검색에 KMS 가중치 높게 적용한 AI로서 일반적인 업무에
                      적합합니다.
                    </dd>
                  </dl>
                </div>
                </label>
              </li>

              </ul>
            </div>
          </>}
          btnText1="취소"
          btnText2="저장"
          callback={() => {
            console.log('callback');
          }}
      />

      <ModalP
        ref={modalCounselingRef}
        title="지난 상담내역 관리"
        close
        width="943px"
        content={
          <>
            <div className="counselingAdmin">
              <div className="flexJ">
                <div className="list">
                  <ul>
                    <li>
                      <strong>1</strong>
                      <div className="info">
                        <dl>
                          <dt>
                            <strong className="txt">
                              체크카드 수령 시 모바일 운전면허증으로 신분 확인이
                              가능할까요? 체크카드 수령 시 모바일 운전면허증으로
                              신분 확인이 가능할까요?
                            </strong>
                            <button type="button" className="iconDel" />
                          </dt>
                          <dd className="txt">
                            AI 답변내용 표시영역, 텍스트 최대 2줄 노출 후
                            말줄임표시 원칙적으로 불가합니다. 대리인을 통해
                            신규한 경우라도 대리인 해지는 불가능합니다.
                          </dd>
                          <dd className="date">2024.07.30</dd>
                        </dl>
                      </div>
                    </li>
                    <li>
                      <strong>2</strong>
                      <div className="info">
                        <dl>
                          <dt>
                            <strong className="txt">
                              체크카드 수령 시 모바일 운전면허증으로 신분 확인이
                              가능할까요? 체크카드 수령 시 모바일 운전면허증으로
                              신분 확인이 가능할까요?
                            </strong>
                            <button type="button" className="iconDel" />
                          </dt>
                          <dd className="txt">
                            AI 답변내용 표시영역, 텍스트 최대 2줄 노출 후
                            말줄임표시 원칙적으로 불가합니다. 대리인을 통해
                            신규한 경우라도 대리인 해지는 불가능합니다.
                          </dd>
                          <dd className="date">2024.07.30</dd>
                        </dl>
                      </div>
                    </li>
                    <li>
                      <strong>3</strong>
                      <div className="info">
                        <dl>
                          <dt>
                            <strong className="txt">
                              체크카드 수령 시 모바일 운전면허증으로 신분 확인이
                              가능할까요? 체크카드 수령 시 모바일 운전면허증으로
                              신분 확인이 가능할까요?
                            </strong>
                            <button type="button" className="iconDel" />
                          </dt>
                          <dd className="txt">
                            AI 답변내용 표시영역, 텍스트 최대 2줄 노출 후
                            말줄임표시 원칙적으로 불가합니다. 대리인을 통해
                            신규한 경우라도 대리인 해지는 불가능합니다.
                          </dd>
                          <dd className="date">2024.07.30</dd>
                        </dl>
                      </div>
                    </li>
                    <li>
                      <strong>4</strong>
                      <div className="info">
                        <dl>
                          <dt>
                            <strong className="txt">
                              체크카드 수령 시 모바일 운전면허증으로 신분 확인이
                              가능할까요? 체크카드 수령 시 모바일 운전면허증으로
                              신분 확인이 가능할까요?
                            </strong>
                            <button type="button" className="iconDel" />
                          </dt>
                          <dd className="txt">
                            AI 답변내용 표시영역, 텍스트 최대 2줄 노출 후
                            말줄임표시 원칙적으로 불가합니다. 대리인을 통해
                            신규한 경우라도 대리인 해지는 불가능합니다.
                          </dd>
                          <dd className="date">2024.07.30</dd>
                        </dl>
                      </div>
                    </li>
                    <li>
                      <strong>5</strong>
                      <div className="info">
                        <dl>
                          <dt>
                            <strong className="txt">
                              체크카드 수령 시 모바일 운전면허증으로 신분 확인이
                              가능할까요? 체크카드 수령 시 모바일 운전면허증으로
                              신분 확인이 가능할까요?
                            </strong>
                            <button type="button" className="iconDel" />
                          </dt>
                          <dd className="txt">
                            AI 답변내용 표시영역, 텍스트 최대 2줄 노출 후
                            말줄임표시 원칙적으로 불가합니다. 대리인을 통해
                            신규한 경우라도 대리인 해지는 불가능합니다.
                          </dd>
                          <dd className="date">2024.07.30</dd>
                        </dl>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="chatting">
                  <ChattingP />

                  {/*
                  <div className="emptyContainer">
                    <div className="emptyWrap">
                      지난 상담내역의 제목 또는 상담 내용을 클릭하시면
                      상담했던 내역을 보실 수 있습니다.
                    </div>

                  </div>
                  */}
                </div>
              </div>

              <div className="btnWrap">
                <button type="button" className="btn bgDarkBlue radius pull">
                  이어서 상담하기
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
          </>
        }
        callback={() => {
          console.log("callback");
        }}
      />

      <ModalP
        ref={modalSettingRef}
        title="설정 (디자인진행중)"
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
                        <span>지식상담</span>
                      </label>
                    </div>
                  </div>
                  <small>선택된 검색 서비스를 포탈 검색 시 사용합니다.</small>
                </div>
              </div>
              <div className="flexWrap flexS">
                <div className="tit">대표AI 선택</div>
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
        btnText01="저장"
        btnText02="취소"
        callback={() => {
          console.log("callback");
        }}
      />
    </>
  );
};

export default CounselingMiniP;
