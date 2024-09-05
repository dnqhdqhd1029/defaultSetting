import React, { useState,useEffect, useRef } from "react";
import HeaderP from "./HeaderP";
import { Table } from "antd";
import "../../assets/style/style.scss";

const CurationListP = () => {

  const [activeTab, setActiveTab] = useState('recommend');
  const underlineRef = useRef(null);
  const tabButtonsRef = useRef([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const activeButton = tabButtonsRef.current.find(
        (btn) => btn.classList.contains('active')
    );
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      underlineRef.current.style.transform = `translateX(${offsetLeft}px)`;
      underlineRef.current.style.width = `${offsetWidth}px`;
    }
  }, [activeTab]);

  return (
      <>
        <HeaderP />
        <section className="container">
          <h3 className="title"><b>현대</b> 기업레포트 큐레이션을 선택해 주세요</h3>

          <div className="tabContainer">
            <button
                type="button"
                className={`${activeTab === 'recommend' ? 'active' : ''}`}
                onClick={() => handleTabClick('recommend')}
                ref={(el) => (tabButtonsRef.current[0] = el)}
            >
              추천 큐레이션
            </button>
            <button
                type="button"
                className={` ${activeTab === 'myTemplates' ? 'active' : ''}`}
                onClick={() => handleTabClick('myTemplates')}
                ref={(el) => (tabButtonsRef.current[1] = el)}
            >
              내가 만든 템플릿
            </button>
            <div className="underline" ref={underlineRef} />
          </div>

          <div className="curationContainer">
            {activeTab === 'recommend' && (
                <div className="curationWrap">
                  <div className="curationBox checked">
                    <div className="head">
                      <div className="tit">여신 심사보고서</div>
                    </div>

                    <div className="cont ">
                      <div className="txt">
                  <span>큐션 설명 최대4줄
                  큐레이션 설명 큐레이션 설명 최대4줄
                  </span>

                      </div>
                      <div className="list">
                        <ul>
                          <li>업체개요</li>
                          <li>재무 현황</li>
                          <li>영업 현황</li>
                          <li>관계사 투자현황</li>
                          <li>주요 이슈사항</li>
                          <li>마케팅 정보</li>
                          <li>종합 의견</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div className="curationBox checked">
                    <div className="head">
                      <div className="tit">여신 심사보고서</div>

                    </div>
                    <div className="cont ">
                      <div className="txt">
                  <span>큐레이션 설명 최대4줄 큐레이션 설명
                  최대4줄 큐레이션 설명 최대4줄 큐레이션 설명 최대4줄
                  큐레이션 설명 큐레이션 설명 최대4줄</span>

                      </div>
                      <div className="list">
                        <ul>
                          <li>업체개요</li>
                          <li>재무 현황</li>
                          <li>영업 현황</li>
                          <li>관계사 투자현황</li>
                          <li>주요 이슈사항</li>
                          <li>마케팅 정보</li>
                          <li>종합 의견</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div className="curationBox ">
                    <div className="head">
                      <div className="tit">여신 심사보고서</div>

                    </div>
                    <div className="cont ">
                      <div className="txt">
                  <span>큐레이션 설명 최대4줄 큐레이션 설명
                  최대4줄 큐레이션 설명 최대4줄 큐레이션 설명 최대4줄
                  큐레이션 설명 큐레이션 설명 최대4줄</span>

                      </div>
                      <div className="list">
                        <ul>
                          <li>업체개요</li>
                          <li>재무 현황</li>
                          <li>영업 현황</li>
                          <li>관계사 투자현황</li>
                          <li>주요 이슈사항</li>
                          <li>마케팅 정보</li>
                          <li>종합 의견</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div className="curationBox ">
                    <div className="head">
                      <div className="tit">여신 심사보고서</div>

                    </div>
                    <div className="cont ">
                      <div className="txt">
                  <span>큐레이션 설명 최대4줄 큐레이션 설명
                  최대4줄 큐레이션 설명 최대4줄 큐레이션 설명 최대4줄
                  큐레이션 설명 큐레이션 설명 최대4줄</span>

                      </div>
                      <div className="list">
                        <ul>
                          <li>업체개요</li>
                          <li>재무 현황</li>
                          <li>영업 현황</li>
                          <li>관계사 투자현황</li>
                          <li>주요 이슈사항</li>
                          <li>마케팅 정보</li>
                          <li>종합 의견</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
            )}
            {activeTab === 'myTemplates' && (
                <div className="curationWrap">
                  <div className="curationBox checked">
                    <div className="head">
                      <div className="tit">여신 심사보고서</div>
                    </div>

                    <div className="cont ">
                      <div className="txt">
                  <span>큐션 설명 최대4줄
                  큐레이션 설명 큐레이션 설명 최대4줄
                  </span>

                      </div>
                      <div className="list">
                        <ul>
                          <li>업체개요</li>
                          <li>재무 현황</li>
                          <li>영업 현황</li>
                          <li>관계사 투자현황</li>
                          <li>주요 이슈사항</li>
                          <li>마케팅 정보</li>
                          <li>종합 의견</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div className="curationBox checked">
                    <div className="head">
                      <div className="tit">여신 심사보고서</div>

                    </div>
                    <div className="cont ">
                      <div className="txt">
                  <span>큐레이션 설명 최대4줄 큐레이션 설명
                  최대4줄 큐레이션 설명 최대4줄 큐레이션 설명 최대4줄
                  큐레이션 설명 큐레이션 설명 최대4줄</span>

                      </div>
                      <div className="list">
                        <ul>
                          <li>업체개요</li>
                          <li>재무 현황</li>
                          <li>영업 현황</li>
                          <li>관계사 투자현황</li>
                          <li>주요 이슈사항</li>
                          <li>마케팅 정보</li>
                          <li>종합 의견</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div className="curationBox ">
                    <div className="head">
                      <div className="tit">여신 심사보고서</div>

                    </div>
                    <div className="cont ">
                      <div className="txt">
                  <span>큐레이션 설명 최대4줄 큐레이션 설명
                  최대4줄 큐레이션 설명 최대4줄 큐레이션 설명 최대4줄
                  큐레이션 설명 큐레이션 설명 최대4줄</span>

                      </div>
                      <div className="list">
                        <ul>
                          <li>업체개요</li>
                          <li>재무 현황</li>
                          <li>영업 현황</li>
                          <li>관계사 투자현황</li>
                          <li>주요 이슈사항</li>
                          <li>마케팅 정보</li>
                          <li>종합 의견</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div className="curationBox ">
                    <div className="head">
                      <div className="tit">여신 심사보고서</div>

                    </div>
                    <div className="cont ">
                      <div className="txt">
                  <span>큐레이션 설명 최대4줄 큐레이션 설명
                  최대4줄 큐레이션 설명 최대4줄 큐레이션 설명 최대4줄
                  큐레이션 설명 큐레이션 설명 최대4줄</span>

                      </div>
                      <div className="list">
                        <ul>
                          <li>업체개요</li>
                          <li>재무 현황</li>
                          <li>영업 현황</li>
                          <li>관계사 투자현황</li>
                          <li>주요 이슈사항</li>
                          <li>마케팅 정보</li>
                          <li>종합 의견</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div className="curationBox ">
                    <div className="head">
                      <div className="tit">여신 심사보고서</div>

                    </div>
                    <div className="cont ">
                      <div className="txt">
                  <span>큐레이션 설명 최대4줄 큐레이션 설명
                  최대4줄 큐레이션 설명 최대4줄 큐레이션 설명 최대4줄
                  큐레이션 설명 큐레이션 설명 최대4줄</span>

                      </div>
                      <div className="list">
                        <ul>
                          <li>업체개요</li>
                          <li>재무 현황</li>
                          <li>영업 현황</li>
                          <li>관계사 투자현황</li>
                          <li>주요 이슈사항</li>
                          <li>마케팅 정보</li>
                          <li>종합 의견</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
            )}
          </div>






        </section>
      </>
  );
};

export default CurationListP;
