import React, { forwardRef } from "react";

const ReportMenuP = forwardRef((props, ref) => {
  return (
    <div className="reportMenu nano " ref={ref}>
      <div className="nano-content">
        <dl>
          <dt className="">
            <button type="button">1. 업체개요</button>
          </dt>
          <dd>
            <button type="button" className="focus">
              1-1. 일반개요 {/*내용이 focus 되어 있을때*/}
            </button>
          </dd>
          <dd>
            <button type="button" className="on">
              1-1. 일반개요 {/*내용이 있으면 on*/}
            </button>
          </dd>
          <dd>
            <button type="button" className="disabled">
              1-1. 일반개요
            </button>
            <i className="loading" /> {/*내용이 없거나 로딩중만 disabled 처리*/}
          </dd>
        </dl>
        <dl>
          <dt>
            <button type="button">
              2. 재무 현황 {/*내용이 있던없던 흰색표시*/}
            </button>
          </dt>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
        </dl>
        <dl>
          <dt>
            <button type="button">3. 영업 현황</button>
          </dt>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
        </dl>
        <dl>
          <dt>
            <button type="button">4. 관계사 투자현황</button>
          </dt>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
        </dl>
        <dl>
          <dt>
            <button type="button">5. 주요 이슈사항</button>
          </dt>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
        </dl>
        <dl>
          <dt>
            <button type="button">6. 마케팅 정보</button>
          </dt>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
        </dl>
        <dl>
          <dt>
            <button type="button">7. 종합 의견</button>
          </dt>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
          <dd>
            <button type="button">1-1. 일반개요</button>
          </dd>
        </dl>
      </div>
    </div>
  );
});

export default ReportMenuP;
