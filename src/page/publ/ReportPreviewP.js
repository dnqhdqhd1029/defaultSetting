import React, { forwardRef } from "react";

const ReportPreviewP = forwardRef((props, ref) => {
  return (
    <div className="reportPreview ">
      <div className="priviewWrap nano" ref={ref}>
        <div className="nano-content">
          <h3 className="title">
            <i className="iconData" />
            데이터
          </h3>
          <div className="content">
            <div className="headTitle">
              <span>주요매입매출처</span>
            </div>
            <div className="cont">내용이 들어감</div>
          </div>
          <div className="content">
            <div className="headTitle">
              <span>주요매입매출처</span>
            </div>
            <div className="cont">내용이 들어감</div>
          </div>
          <div className="content">
            <div className="headTitle">
              <span>주요매입매출처</span>
            </div>
            <div className="cont">내용이 들어감</div>
          </div>
          <div className="content">
            <div className="headTitle">
              <span>주요매입매출처</span>
            </div>
            <div className="cont">내용이 들어감</div>
          </div>
          <div className="content">
            <div className="headTitle">
              <span>주요매입매출처</span>
            </div>
            <div className="cont">내용이 들어감</div>
            <div className="footerInfo">
              <span>
                <i className="iconLlm" /> <b>여러 도움을 얻을 수 있어요</b>
              </span>

              <span>
                <button type="botton">위의 내용을 요약해줘</button>
                <button type="botton">
                  위 내용에 회사 년도 별 매출 분류를 해줘
                </button>
                <button type="botton">+ N개 더 보기</button>
                <button type="botton" className="iconDown" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="btnWrap">
        <button type="button" className="btn bgInfo">
          임시저장
        </button>
        <button type="button" className="btn bgPrimary ">
          리포트 생성하기
        </button>
      </div>
    </div>
  );
});

export default ReportPreviewP;
