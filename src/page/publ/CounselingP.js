import React from "react";

const CounselingP = () => {
  return (
    <>
      <div className="counselingWrap">
        <div className="aiWrap">
          <div className="aiTxt">
            <div className="cont">
              <p>
                어떤 업무를 도와드릴까요? <br />
                다음과 같이 질문을 구체적으로
                <br />
                물어보시면 도움되는 답변을 받으실 수 있습니다.
              </p>
              <p>
                <button type="button">IRP 대리인 해지 가능해?</button>
                <button type="button">
                  임대보증금 보증 일부가입 요건 알려줘
                </button>
              </p>
              <p>
                <small className="flexS">
                  <i className="iconInfo" />
                  AI 답변이 부정확할 수 있으니, 근거 확인 후 활용해주세요.
                </small>
              </p>
            </div>
          </div>
          <div className="question">
            <div className="cont">이자율 스왑이 뭐야?</div>
          </div>
          <div className="aiTxt">
            <div className="cont">
              <p>
                이자율 스왑이란 금융시장에서 차입자의 기존부채 또는 신규 부채에
                대한 금리리스크의 헤징이나 차입비용의 절감을 위하여 두 차입자가
                각자의 차입조건을 상호간에 교환하는 계약으로서 일반적으로
                변동(고정)금리 dl부채를 고정(변동)금리부채로 전환하는 형식을
                취하게 됩니다.
              </p>
            </div>

            <button className="answerLink">
              <span>
                <strong>1</strong> <strong>고객센터</strong>
                링크 없는 근거문서 케이스
              </span>
              <em>2023-07-21</em>
            </button>
            <button className="answerLink">
              <span>
                <strong>2</strong> <strong>부서홈페이지</strong> 링크가 있는
                근거문서 케이스
                <i className="iconLink" />
              </span>
              <em>2023-07-21</em>
              <div className="download">
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
              </div>
            </button>

            <div className="keywordLink">
              <button type="button">IRP한도</button>
              <button type="button">IRP 가입자격</button>
              <button type="button">IRP 세금혜택</button>
            </div>
          </div>
        </div>

        <div className="serachArea">
          <input type="text" placeholder="궁금한 것을 질문해 보세요" />
          <button type="submit" className="enter" />
        </div>
      </div>
    </>
  );
};

export default CounselingP;
