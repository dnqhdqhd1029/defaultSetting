import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import imgImg from "../../assets/images/svg/icon-img.svg";

import ModalP from "./ModalP";
import ConfirmP from "./ConfirmP";
const ChattingP = ({ search, chattingFooter ,mini }) => {
  const confirmRef = useRef(null);
  const modalMyFileRef = useRef(null);
  const modalMyPromptRef = useRef(null);
  const modalMyPromptSelectRef = useRef(null);
  const modalMainAiRef = useRef(null);
  const modalSwiperRef = useRef(null);
  const [swiperRef, setSwiperRef] = useState(null);
  const [height, setHeight] = useState("100px"); // 초기 높이 설정
  const textareaRef = useRef(null);

  const handleInput = (event) => {
    const textarea = event.target;

    // 현재 높이를 'auto'로 설정해 스크롤 높이를 다시 계산
    textarea.style.height = "200px";
    textarea.style.minHeight = "10px";

    // 내용에 맞게 높이 조정하되, 최대 높이를 200px로 제한
    const newHeight = Math.min(textarea.scrollHeight, 200);

    // 새 높이를 설정
    setHeight(`${newHeight}px`);
  };
  const [activeState, setActiveState] = useState({
    counseling: false,
    setting: false,
    btnDown: false,
    iconMenu: false,
    etc01: false,
    etc02: false,
    etc03: false,
    etc04: false,
    etc05: false
  });

  const toggle = (type) => {
    setActiveState((prevState) => ({
      ...prevState, // 기존 상태 유지
      [type]: !prevState[type], // 전달된 타입에 해당하는 상태만 토글
    }));
  };
  return (
    <>

      <div
        className={`counselingWrap scroll ${activeState.etc05 ? "show" : ""}`}
      >
        <div className="chattingWrap ">

          {/*Mini 일때 인사말*/}
          {mini &&
              <>
          <div className="aiTxt">
            <div className="cont">
              <p>
                안녕하세요. <br/>
                우리은행 ChatGPT AI 지식상담입니다.
              </p>
            </div>
          </div>

          <div className="question">
            <div className="cont">모바일 운전면허증으로 체크카드 수령 시 <br/>
              본인 확인 가능한가요?</div>
          </div>
              </>

          }




          <div className="aiTxt">
            <button
                type="button"
                className={`message ${activeState.etc03 ? "on" : ""}`}
                onClick={() => toggle("etc03")}
            >
              <span>AI선택</span>
            </button>

            <div className="cont">
              <p>
                어떤 업무를 도와드릴까요? <br />
                다음과 같이 질문을 구체적으로
                <br />
                물어보시면 도움되는 답변을 받으실 수 있습니다.
              </p>
              <p>
                <button type="button" className="bgGray textGray">
                  IRP 대리인 해지 가능해?
                </button>
                <button type="button" className="bgGray textGray">
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
            <div className="etcArea flexJ">
              <label className="toggleSwitch">
                <span className="mr1 ">검색연결</span>
                <input type="checkbox" />
              </label>
              <div className="ect">
                <button
                    type="button"
                    className={`like ${activeState.etc01 ? "on" : ""}`}
                    onClick={() => toggle("etc01")}
                >

                </button>
                <button
                    type="button"
                    className={`dislike ${activeState.etc02 ? "on" : ""}`}
                    onClick={() => toggle("etc02")}
                >

                </button>


                <button
                    type="button"
                    className={`hashtag ${activeState.etc04 ? "on" : ""}`}
                    onClick={() => toggle("etc04")}
                >
                  <span>연관질문</span>
                </button>
                <button
                    type="button"
                    className={`document ${activeState.etc05 ? "on" : ""}`}
                    onClick={() => toggle("etc05")}
                >
                  <span>
                    근거문서 보기
                  </span>
                </button>
              </div>
            </div>
            {/* end etcArea*/}
          </div>
          <div className="question">
            <div className="cont">이자율 스왑이 뭐야?</div>
          </div>

          <div className="aiTxt">
            <button
                type="button"
                className={`message ${activeState.etc03 ? "on" : ""}`}
                onClick={() => toggle("etc03")}
            >
              <span>AI선택</span>
            </button>

            <div className="cont">
              <p>
                이자율 스왑이란 금융시장에서 차입자의 기존부채 또는 신규 부채에
                대한 금리리스크의 헤징이나 차입비용의 절감을 위하여 두 차입자가
                각자의 차입조건을 상호간에 교환하는 계약으로서 일반적으로
                변동(고정)금리 dl부채를 고정(변동)금리부채로 전환하는 형식을
                취하게 됩니다.
              </p>
            </div>

            <div className="etcArea flexJ">
              <label className="toggleSwitch">
                <span className="mr1 ">검색연결</span>
                <input type="checkbox" />
              </label>
              <div className="ect">
                <button
                  type="button"
                  className={`like ${activeState.etc01 ? "on" : ""}`}
                  onClick={() => toggle("etc01")}
                >

                </button>
                <button
                  type="button"
                  className={`dislike ${activeState.etc02 ? "on" : ""}`}
                  onClick={() => toggle("etc02")}
                >

                </button>


                <button
                  type="button"
                  className={`hashtag ${activeState.etc04 ? "on" : ""}`}
                  onClick={() => toggle("etc04")}
                >
                  <span>연관질문</span>
                </button>
                <button
                  type="button"
                  className={`document ${activeState.etc05 ? "on" : ""}`}
                  onClick={() => toggle("etc05")}
                >
                  <span>
                    근거문서 보기
                  </span>
                </button>
              </div>
            </div>
            {/* end etcArea*/}

            {/*근거문서 작은화면일때*/}
            <div className="answerLink">
              <button type="button" style={{ cursor: "default" }}>
                <div>
                  <b>1</b>
                  <strong>고객센터</strong>
                  <span className="txt">
                    링크 없는 근거문서 케이스링크 없는 근거문서 케이스링크 없는
                    근거문서 케이스
                  </span>
                </div>
                <em>2023-07-21</em>
              </button>
            </div>
            <div className="answerLink">
              <button type="button">
                <div>
                  <b>2</b>
                  <strong>부서홈페이지</strong>
                  <span className="txt link">
                    링크가 있는 근거문서 케이스링크가 있는 근거문서 케이스링크가
                    있는 근거문서 케이스
                  </span>
                </div>
                <em>2023-07-21</em>
              </button>

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
                <button type="button">
                  <i className="iconPpt" />
                  ★통화스왑(부채)_업무안내.pdf
                </button>
                <button type="button">
                  <i className="iconEtc" />
                  ★통화스왑(부채)_업무안내.pdf
                </button>
              </div>
            </div>

            {/* end 근거문서 작은화면일때*/}

            <div className="keywordLink">
              <button type="button">IRP한도</button>
              <button type="button">IRP 가입자격</button>
              <button type="button">IRP 세금혜택</button>
            </div>
          </div>
          <div className="aiTxt">
            <button
                type="button"
                className={`message ${activeState.etc03 ? "on" : ""}`}
                onClick={() => toggle("etc03")}
            >
              <span>AI선택</span>
            </button>
            <div className="cont">
              <p>
                모바일 운전면허증은 정부에서 발행 및 운영하는 서비스입니다.
                서비스 관련 내용은 전용 콜센터 또는 도로교통공단으로 문의하도록
                안내합니다.
              </p>
              <p className="bgYellow">
                <strong className="flexS mb1">
                  <i className="iconInfoDarkGray" /> 관련민원사례
                </strong>
                영업점에서 체크카드 수령 시 본인 확인을 위해 직원에게 모바일
                운전면허증을 제시하였으나,
                <br />
                모바일 운전면허증으로는 본인 확인이 불가하여 카드를 교부할 수
                없다고 직원이 오안내
              </p>
            </div>

            <div className="etcArea flexJ">
              <label className="toggleSwitch">
                <span className="mr1 ">검색연결</span>
                <input type="checkbox" />
              </label>
              <div className="ect">
                <button
                    type="button"
                    className={`like ${activeState.etc01 ? "on" : ""}`}
                    onClick={() => toggle("etc01")}
                >

                </button>
                <button
                    type="button"
                    className={`dislike ${activeState.etc02 ? "on" : ""}`}
                    onClick={() => toggle("etc02")}
                >

                </button>


                <button
                    type="button"
                    className={`hashtag ${activeState.etc04 ? "on" : ""}`}
                    onClick={() => toggle("etc04")}
                >
                  <span>연관질문</span>
                </button>
                <button
                    type="button"
                    className={`document ${activeState.etc05 ? "on" : ""}`}
                    onClick={() => toggle("etc05")}
                >
                  <span>
                    근거문서 보기
                  </span>
                </button>
              </div>
            </div>
            {/* end etcArea*/}

            <div className="swiperContainer">

              <Swiper
                slidesPerView={2}
                loop={true}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="slideCont">
                    <dl>
                      <dt>
                        <i className="iconNotice" />
                        <strong>
                          환전주머니 환율 우대율 변경 안내환전주머니 환율 우대율
                          변경 안내환전주머니 환율 우대율 변경 안내
                        </strong>
                      </dt>
                      <dd className="txt">
                        환전주머니 환율 우대율이 변경될 예정입니다. 변경예정일 :
                        2022년 8월 30일 00시~02시
                      </dd>
                      <dd className="flexJ date">
                        <span>2024.07.30</span>
                        <button type="button" className="more"
                                onClick={() => modalSwiperRef.current.show()}>
                          자세히 보기 <i className="iconRight" />
                        </button>
                      </dd>
                    </dl>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slideCont">
                    <dl>
                      <dt>
                        <i className="iconNotice" />
                        <strong>
                          환전주머니 환율 우대율 변경 안내환전주머니 환율 우대율
                          변경 안내환전주머니 환율 우대율 변경 안내
                        </strong>
                      </dt>
                      <dd className="txt">
                        환전주머니 환율 우대율이 변경될 예정입니다. 변경예정일 :
                        2022년 8월 30일 00시~02시
                      </dd>
                      <dd className="flexJ date">
                        <span>2024.07.30</span>
                        <button type="button" className="more">

                          자세히 보기 <i className="iconRight" />
                        </button>
                      </dd>
                    </dl>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slideCont">
                    <dl>
                      <dt>
                        <i className="iconNotice" />
                        <strong>
                          333환전주머니 환율 우대율 변경 안내환전주머니 환율
                          우대율 변경 안내환전주머니 환율 우대율 변경 안내
                        </strong>
                      </dt>
                      <dd className="txt">
                        환전주머니 환율 우대율이 변경될 예정입니다. 변경예정일 :
                        2022년 8월 30일 00시~02시
                      </dd>
                      <dd className="flexJ date">
                        <span>2024.07.30</span>
                        <button type="button" className="more">

                          자세히 보기 <i className="iconRight" />
                        </button>
                      </dd>
                    </dl>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slideCont">
                    <dl>
                      <dt>
                        <i className="iconNotice" />
                        <strong>
                          444환전주머니 환율 우대율 변경 안내환전주머니 환율
                          우대율 변경 안내환전주머니 환율 우대율 변경 안내
                        </strong>
                      </dt>
                      <dd className="txt">
                        환전주머니 환율 우대율이 변경될 예정입니다. 변경예정일 :
                        2022년 8월 30일 00시~02시
                      </dd>
                      <dd className="flexJ date">
                        <span>2024.07.30</span>
                        <button type="button" className="more">

                          자세히 보기 <i className="iconRight" />
                        </button>
                      </dd>
                    </dl>
                  </div>
                </SwiperSlide>
              </Swiper>

            </div>
          </div>
          <div className="question">
            <div className="cont">근저당권의 피담보채무 범위를 알려줘</div>
          </div>
          <div className="aiTxt">
            <button
                type="button"
                className={`message ${activeState.etc03 ? "on" : ""}`}
                onClick={() => toggle("etc03")}
            >
              <span>AI선택</span>
            </button>
            <div className="cont">
              <p>
                3명의 담당자가 있습니다.
                <br />
                담당자 이름을 선택하시면 상세 직원정보를 확인하실 수 있습니다.
              </p>
              <p>
                <div className="memberData">
                  <div className="flexS alignS mb2">
                    <em className="mr2 bold500">1</em>
                    <div className="img mr2">
                      <img src={imgImg} alt="" />
                    </div>
                    <div className="info">
                      <dl>
                        <dt>
                          <strong className="bold500">홍길동</strong>차장
                        </dt>
                        <dd className="textLightGray fontSm">
                          우리은행 | 빅데이터플랫폼부
                        </dd>
                        <dd className="textGray fontSm">
                          FA/CS매니저/대여금고관리/방카슈랑스/은퇴설계/특정거래승인권/해외유학이주/장애인전담/출납책임/금융사기담당/FATCA관리/금융소비자보호담당자/카드개인정보보호/교환/시공과금/신용카드총괄/압류/중요증서취급중요증서취급책임/외화출납책임/당행보관통장관리
                        </dd>
                      </dl>
                    </div>
                  </div>

                  <div className="flexS alignS mb2">
                    <em className="mr2 bold500">2</em>
                    <div className="img mr2">
                      <img src={imgImg} alt="" />
                    </div>
                    <div className="info">
                      <dl>
                        <dt>
                          <strong className="bold500">홍길동</strong>차장
                        </dt>
                        <dd className="textLightGray fontSm">
                          우리은행 | 빅데이터플랫폼부
                        </dd>
                        <dd className="textGray fontSm">
                          FA/CS매니저/대여금고관리/방카슈랑스/은퇴설계/특정거래승인권/해외유학이주/장애인전담/출납책임/금융사기담당/FATCA관리/금융소비자보호담당자/카드개인정보보호/교환/시공과금/신용카드총괄/압류/중요증서취급중요증서취급책임/외화출납책임/당행보관통장관리
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                {/* end memberData*/}
              </p>
            </div>
            <div className="etcArea flexJ">
              <label className="toggleSwitch">
                <span className="mr1 ">검색연결</span>
                <input type="checkbox" />
              </label>
              <div className="ect">
                <button
                    type="button"
                    className={`like ${activeState.etc01 ? "on" : ""}`}
                    onClick={() => toggle("etc01")}
                >

                </button>
                <button
                    type="button"
                    className={`dislike ${activeState.etc02 ? "on" : ""}`}
                    onClick={() => toggle("etc02")}
                >

                </button>


                <button
                    type="button"
                    className={`hashtag ${activeState.etc04 ? "on" : ""}`}
                    onClick={() => toggle("etc04")}
                >
                  <span>연관질문</span>
                </button>
                <button
                    type="button"
                    className={`document ${activeState.etc05 ? "on" : ""}`}
                    onClick={() => toggle("etc05")}
                >
                  <span>
                    근거문서 보기
                  </span>
                </button>
              </div>
            </div>
            {/* end etcArea*/}
          </div>
          <div className="aiTxt">
            <button
                type="button"
                className={`message ${activeState.etc03 ? "on" : ""}`}
                onClick={() => toggle("etc03")}
            >
              <span>AI선택</span>
            </button>
            <div className="cont">
              <p>
                빅데이터 사업부 비정형데이터 자산화 사업 담당자는 아래와
                같습니다.
              </p>
              <p>
                <div className="memberData person">
                  <div className="flexS alignS mb2">
                    <div className="img mr2">
                      <img src={imgImg} alt="" />
                    </div>
                    <div className="info">
                      <div className="gridContainer">
                        <div className="grid-item">
                          <dl>
                            <dt>성명</dt>
                            <dd>홍길동</dd>
                          </dl>
                        </div>
                        <div className="grid-item">
                          <dl>
                            <dt>직위/호칭</dt>
                            <dd>부부장</dd>
                          </dl>
                        </div>
                        <div className="grid-item">
                          <dl>
                            <dt>소속</dt>
                            <dd>우리은행/빅데이터플랫폼부</dd>
                          </dl>
                        </div>
                        <div className="grid-item">
                          <dl>
                            <dt>행번</dt>
                            <dd>32544447</dd>
                          </dl>
                        </div>
                        <div className="grid-item">
                          <dl>
                            <dt>전화번호</dt>
                            <dd>
                              <div className="flexS">
                                800012345
                                <button type="button" className="iconCall" />
                                <button type="button" className="iconProfile" />
                                <button type="button" className="icon
                                Sns" />
                              </div>
                            </dd>
                          </dl>
                        </div>
                        <div className="grid-item">
                          <dl>
                            <dt>대직자</dt>
                            <dd>김난희 부장 대우 유난희 차장</dd>
                          </dl>
                        </div>
                      </div>

                      <div className="gridContainer etc">
                        <div className="grid-item">
                          <dl>
                            <dt>담당업무</dt>
                            <dd className="fontSm">
                              데이터 자산화 팀장 - 팀업무 전반
                            </dd>
                          </dl>
                        </div>
                        <div className="grid-item">
                          <dl>
                            <dt>세부업무</dt>
                            <dd className="fontSm">
                              FA/CS매니저/대여금고관리/방카슈랑스/은퇴설계/특정거래승인권/해외유학이주/장애인전담/출납책임/금융사기담당/FATCA관리/금융소비자보호담당자/카드개인정보보호/교환/시공과금/신용카드총괄/압류/중요증서취급중요증서취급책임/외화출납책임/당행보관통장관리
                            </dd>
                          </dl>
                        </div>
                        <div className="grid-item">
                          <dl>
                            <dt>담당업무</dt>
                            <dd className="fontSm">
                              FA/CS매니저/대여금고관리/방카슈랑스
                            </dd>
                          </dl>
                        </div>
                      </div>

                      {/*<div className="noneTable">
                        <table>
                          <tr>
                            <th>성명</th>
                            <td>홍길동</td>
                            <th>직위/호칭</th>
                            <td>부부장</td>
                          </tr>
                          <tr>
                            <th>소속</th>
                            <td>우리은행/빅데이터플랫폼부</td>
                            <th>행번</th>
                            <td>32544447</td>
                          </tr>
                          <tr>
                            <th>전화번호</th>
                            <td>
                              <div className="flexS">
                                800012345
                                <button type="button" className="iconCall" />
                                <button type="button" className="iconProfile" />
                                <button type="button" className="iconSns" />
                              </div>
                            </td>
                            <th>대직자</th>
                            <td>김난희 부장 대우 유난희 차장</td>
                          </tr>
                          <tr>
                            <th>담당업무</th>
                            <td colSpan="3" className="fontSm">
                              데이터 자산화 팀장 - 팀업무 전반
                            </td>
                          </tr>
                          <tr>
                            <th>세부업무</th>
                            <td colSpan="3" className="fontSm">
                              FA/CS매니저/대여금고관리/방카슈랑스/은퇴설계/특정거래승인권/해외유학이주/장애인전담/출납책임/금융사기담당/FATCA관리/금융소비자보호담당자/카드개인정보보호/교환/시공과금/신용카드총괄/압류/중요증서취급중요증서취급책임/외화출납책임/당행보관통장관리
                            </td>
                          </tr>
                          <tr>
                            <th>담당업무</th>
                            <td colSpan="3 " className="fontSm">
                              FA/CS매니저/대여금고관리/방카슈랑스
                            </td>
                          </tr>
                        </table>*/}
                    </div>
                  </div>
                </div>
              </p>
            </div>
            <div className="etcArea flexJ">
              <label className="toggleSwitch">
                <span className="mr1 ">검색연결</span>
                <input type="checkbox" />
              </label>
              <div className="ect">
                <button
                    type="button"
                    className={`like ${activeState.etc01 ? "on" : ""}`}
                    onClick={() => toggle("etc01")}
                >

                </button>
                <button
                    type="button"
                    className={`dislike ${activeState.etc02 ? "on" : ""}`}
                    onClick={() => toggle("etc02")}
                >

                </button>


                <button
                    type="button"
                    className={`hashtag ${activeState.etc04 ? "on" : ""}`}
                    onClick={() => toggle("etc04")}
                >
                  <span>연관질문</span>
                </button>
                <button
                    type="button"
                    className={`document ${activeState.etc05 ? "on" : ""}`}
                    onClick={() => toggle("etc05")}
                >
                  <span>
                    근거문서 보기
                  </span>
                </button>
              </div>
            </div>
            {/* end etcArea*/}
          </div>
          <div className="aiTxt">
            <button
                type="button"
                className={`message ${activeState.etc03 ? "on" : ""}`}
                onClick={() => toggle("etc03")}
            >
              <span>AI선택</span>
            </button>
            <div className="cont">
              <p>
                기업진단시스템 빅아이 URL은 아래와 같습니다. URL을 클릭하시면
                바로 이동하실 수 있습니다.
              </p>
              <p>
                <span className="textPrimary bold500">
                  https://srj.woorifg.com:8080
                </span>
              </p>
            </div>
            <div className="etcArea flexJ">
              <label className="toggleSwitch">
                <span className="mr1 ">검색연결</span>
                <input type="checkbox" />
              </label>
              <div className="ect">
                <button
                    type="button"
                    className={`like ${activeState.etc01 ? "on" : ""}`}
                    onClick={() => toggle("etc01")}
                >

                </button>
                <button
                    type="button"
                    className={`dislike ${activeState.etc02 ? "on" : ""}`}
                    onClick={() => toggle("etc02")}
                >

                </button>

                <button
                    type="button"
                    className={`hashtag ${activeState.etc04 ? "on" : ""}`}
                    onClick={() => toggle("etc04")}
                >
                  <span>연관질문</span>
                </button>
                <button
                    type="button"
                    className={`document ${activeState.etc05 ? "on" : ""}`}
                    onClick={() => toggle("etc05")}
                >
                  <span>
                    근거문서 보기
                  </span>
                </button>
              </div>
            </div>
            {/* end etcArea*/}
          </div>
          <div className="aiTxt">
            <button
                type="button"
                className={`message ${activeState.etc03 ? "on" : ""}`}
                onClick={() => toggle("etc03")}
            >
              <span>AI선택</span>
            </button>
            <div className="cont">
              <p>아래와 같이 주요국 환율 안내드립니다.</p>
              <p>
                <small>주요통화 환율</small>
                <table className="mb3 dataTable">
                  <thead>
                    <tr>
                      <th>종목</th>
                      <th>종가</th>
                      <th>전일비</th>
                      <th>1주(%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>USD Index</th>
                      <td className="tr">100.986</td>
                      <td className="tr textDanger">100.986</td>
                      <td className="tr textDanger">0.480</td>
                    </tr>
                    <tr>
                      <th>EUR/USD</th>
                      <td className="tr">100.986</td>
                      <td className="tr textDanger">100.986</td>
                      <td className="tr textDanger">0.480</td>
                    </tr>
                    <tr>
                      <th>USD/JPY</th>
                      <td className="tr">100.986</td>
                      <td className="tr textDanger">100.986</td>
                      <td className="tr textDanger">0.480</td>
                    </tr>
                  </tbody>
                </table>

                <small>아시아/신흥국 통화 환율</small>
                <table className="dataTable">
                  <thead>
                    <tr>
                      <th>종목</th>
                      <th>종가</th>
                      <th>전일비</th>
                      <th>1주(%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>USD Index</th>
                      <td className="tr">100.986</td>
                      <td className="tr textDanger">100.986</td>
                      <td className="tr textDanger">0.480</td>
                    </tr>
                    <tr>
                      <th>EUR/USD</th>
                      <td className="tr">100.986</td>
                      <td className="tr textDanger">100.986</td>
                      <td className="tr textDanger">0.480</td>
                    </tr>
                    <tr>
                      <th>USD/JPY</th>
                      <td className="tr">100.986</td>
                      <td className="tr textDanger">100.986</td>
                      <td className="tr textDanger">0.480</td>
                    </tr>
                  </tbody>
                </table>
              </p>
            </div>
            <div className="etcArea flexJ">
              <label className="toggleSwitch">
                <span className="mr1 ">검색연결</span>
                <input type="checkbox" />
              </label>
              <div className="ect">
                <button
                    type="button"
                    className={`like ${activeState.etc01 ? "on" : ""}`}
                    onClick={() => toggle("etc01")}
                >

                </button>
                <button
                    type="button"
                    className={`dislike ${activeState.etc02 ? "on" : ""}`}
                    onClick={() => toggle("etc02")}
                >

                </button>


                <button
                    type="button"
                    className={`hashtag ${activeState.etc04 ? "on" : ""}`}
                    onClick={() => toggle("etc04")}
                >
                  <span>연관질문</span>
                </button>
                <button
                    type="button"
                    className={`document ${activeState.etc05 ? "on" : ""}`}
                    onClick={() => toggle("etc05")}
                >
                  <span>
                    근거문서 보기
                  </span>
                </button>
              </div>
            </div>
            {/* end etcArea*/}
          </div>
        </div>
        {/*end chattingWrap*/}

        {/*AI 선택*/}
        {activeState.etc03 && (
          <div className="aiSelect">
            <small>AI를 선택해 주세요</small>
            <ul>
              <li>
                <button type="button">
                  <strong>전행 모든 지식 참조</strong> <br />
                  <span>
                    검색에 KMS 가중치 높게 적용한 AI로서 일반적인 업무에
                    적합합니다.
                  </span>
                </button>
              </li>
              <li>
                <button type="button">
                  <strong>전행 모든 지식 참조</strong> <br />
                  <span>
                    검색에 KMS 가중치 높게 적용한 AI로서 일반적인 업무에
                    적합합니다.
                  </span>
                </button>
              </li>
              <li>
                <button type="button">
                  <strong>전행 모든 지식 참조</strong> <br />
                  <span>
                    검색에 KMS 가중치 높게 적용한 AI로서 일반적인 업무에
                    적합합니다.
                  </span>
                </button>
              </li>
            </ul>
          </div>
        )}
        {/*end AI 선택*/}

        {/*연관 질문*/}
        {activeState.etc04 && (
          <div className="questionsSelect">
            <button type="button">질문에 대한 연관 질문 태그영역입니다 </button>
            <button type="button">
              연관검색어 선택 시 선택한 연관질문으로 다시 질문을 조회합니다
            </button>
          </div>
        )}
        {/*end 연관 질문*/}

        {search && (
          <div className="searchArea">
            <button type="button" className="iconScale">
              <span>큰 창으로 보기</span>
            </button>
            <div className="search">
              <textarea placeholder="궁금한 것을 질문해 보세요" />
              <button type="submit" className="enter" />
            </div>
          </div>
        )}
      </div>
      {/*end counselingWrap*/}

      {/*근거문서  미니에서는 작동하지 않아요*/}
      <div
        className={`documentSelect aside ${activeState.etc05 ? "show" : "hide"}`}
      >
        <div className="title">
          <strong>이자율 스왑</strong>
          <span>검색결과에 대한 근거문서입니다.</span>
          <button type="button" className="close" />
        </div>
        <div className="documentList">
          <ul>
            <li>
              <span>1</span>
              <dl>
                <dt>
                  <button>
                    <div>
                      <b>고객센터</b>
                      <span className="txt link">
                        주택도시보증공사주택도시보증공보증공사 [임대보증금 보증]
                      </span>
                    </div>
                    <em>2023-07-21</em>
                  </button>
                </dt>
                <dd>
                  <span className="txt ">
                    10. Q&A(상품설명서 內)1. Q&A 의무가입대상 기준은 어떻게
                    되나요?
                  </span>
                </dd>
              </dl>
            </li>
            <li>
              <span>2</span>
              <dl>
                <dt>
                  <button>
                    <div>
                      <b>부서홈페이지</b>
                      <span className="txt link">
                        주택도시보증공사주택도시보증공보증공사 [임대보증금 보증]
                      </span>
                    </div>
                    <em>2023-07-21</em>
                  </button>
                </dt>
                <dd>
                  <span className="txt">
                    금융시장에서 차입자의 기존부채 또는 신규 부채에 대한
                  </span>
                </dd>
              </dl>
            </li>
            <li>
              <span>3</span>
              <dl>
                <dt>
                  <button>
                    <div>
                      <b>부서홈페이지</b>
                      <span className="txt">
                        주택도시보증공사주택도시보증공보증공사 [임대보증금 보증]
                      </span>
                    </div>
                    <em>2023-07-21</em>
                  </button>
                </dt>
                <dd>
                  <span className="txt">
                    금융시장에서 차입자의 기존부채 또는 신규 부채에
                  </span>
                  <div className="download">
                    <button type="button">
                      <i className="iconLink" /> 통화스왑(부채) 업무안내.hwp
                    </button>
                    <button type="button">
                      <i className="iconLink" /> 통화스왑(부채) 업무안내.hwp
                    </button>
                    <button type="button">
                      <i className="iconLink" /> 통화스왑(부채) 업무안내.hwp
                    </button>
                  </div>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>

      {/* end 근거문서*/}


      {chattingFooter && (
        <div className="chattingFooter">
          <div className="searchWrap flexS">
            <label className="toggleSwitch">
              <span className="mr1">지식연계</span>
              <input type="checkbox" />
            </label>
            <button
              className="selectRound ml3"
              onClick={() => modalMyPromptSelectRef.current.show()}
            >
              프롬프트 선택
            </button>
            {/*<select className="selectRound ml3">*/}
            {/*  <option>프롬프트 선택</option>*/}
            {/*</select>*/}
            <div className="searchArea ml3">
              <div className="search">
                <textarea placeholder="궁금한 것을 질문해 보세요" />
                <button type="submit" className="enter" />
              </div>
              <button type="button" className="iconRefresh" />

              <div className="info">
                <i className="iconInfo" /> AI 답변이 부정확할 수 있으니, 근거
                확인 후 활용해주세요.
              </div>
            </div>
          </div>

          <div className="etc">
            <button
              type="button"
              className="iconFolder"
              onClick={() => modalMyFileRef.current.show()}
            />
            <button
              type="button"
              className={`iconMenu ${activeState.iconMenu ? "on" : ""}`}
              onClick={() => toggle("iconMenu")}
            />
          </div>

          <div
            className={`iconMenuPopup ${activeState.iconMenu ? "show" : ""}`}
          >
            <button
              type="button"
              className="mainAi"
              onClick={() => modalMainAiRef.current.show()}
            >
              <div>
                <strong>대표 AI 선택</strong>
                대표 AI를 변경하여 상담 받으실 수 있습니다
              </div>
            </button>
            <button
              type="button"
              className="myPrompt"
              onClick={() => modalMyPromptRef.current.show()}
            >
              <div>
                <strong>나의 프롬프트</strong>
                자주 사용하는 프롬프트를 등록해 보세요
              </div>
            </button>
          </div>
        </div>
      )}

      <ConfirmP
        ref={confirmRef}
        //title="ddd"
        content={
          <>
            <div className="flexC pt2">
              선택하신 게시글을
              <br />
              삭제하시겠습니까?
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
        ref={modalMyFileRef}
        title="나의 파일관리"
        close
        width="638px"
        content={
          <>
            <div className="boardContainer">
              <div className="boardSearch flexS ">
                <div className="tit mr2">내 파일 등록</div>

                <div className="cont flexJ">
                  <div className="fileUpload">
                    <span className="fileName">선택된 파일이 없습니다</span>
                    <label>
                      파일 불러오기
                      <input type="file" />
                    </label>

                    <em>txt, hwp, doc, pdf 파일만 등록하실 수 있습니다.</em>
                  </div>

                  <button
                    type="button"
                    className="btn bgDarkBlue radius"
                    style={{ width: "80px" }}
                    onClick={() => confirmRef.current.show()}
                  >
                    등록
                  </button>
                </div>
              </div>

              <div className="boardList mt2">
                <table className="boardTabel tc">
                  <colgroup>
                    <col style={{ width: "10%" }} />
                    <col />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "10%" }} />
                  </colgroup>

                  <tbody>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="tl">
                        <button type="button">개인형 IRP 계약해지.pdf</button>
                      </td>
                      <td className="tc">등록중</td>
                      <td>2024-07-30</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="tl">
                        <button type="button">개인형 IRP 계약해지.pdf</button>
                      </td>
                      <td className="textPrimary tc">등록완료</td>
                      <td>2024-07-30</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="tl">
                        <button type="button">개인형 IRP 계약해지.pdf</button>
                      </td>
                      <td className="tc">등록중</td>
                      <td>2024-07-30</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="tl">
                        <button type="button">개인형 IRP 계약해지.pdf</button>
                      </td>
                      <td className="textPrimary tc">등록완료</td>
                      <td>2024-07-30</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="tl">
                        <button type="button">개인형 IRP 계약해지.pdf</button>
                      </td>
                      <td className="tc">등록중</td>
                      <td>2024-07-30</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="tl">
                        <button type="button">개인형 IRP 계약해지.pdf</button>
                      </td>
                      <td className="textPrimary tc">등록완료</td>
                      <td>2024-07-30</td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                  </tbody>
                </table>
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
          ref={modalMyPromptSelectRef}
          title="프롬프트 선택"
          close
          width="638px"
          content={
            <>
              <div className="myPromptContainer">
                <div>
                  <dl>
                    <dt>추천 프롬프트</dt>
                    <dd>
                      <button type="button">
                        빅데이터 사업부에서 관리하는 빅인사이트 연결해줘
                      </button>
                      <button type="button">
                        빅데이터 사업부 비정형 데이터 자산화 사업 담당자 찾아줘
                        빅데이터 사업부 비정형 데이터 자산화 사업 담당자 찾아줘
                        빅데이터 사업부 비정형 데이터 자산화 사업 담당자 찾아줘
                      </button>
                      <button type="button">IRP 대리인 해지 가능해?</button>
                      <button type="button">
                        임대보증금 보증 일부가입 요건 알려줘
                      </button>
                      <button type="button">
                        오늘 주요국 환율 표로 안내해줘
                      </button>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>
                      나의 프롬프트
                      <button
                          type="button"
                          className="setting"
                          onClick={() => modalMyPromptRef.current.show()}
                      />
                    </dt>
                    <dd>
                      <button type="button">
                        빅데이터 사업부에서 관리하는 빅인사이트 연결해줘
                      </button>
                      <button type="button">
                        빅데이터 사업부 비정형 데이터 자산화 사업 담당자 찾아줘
                        빅데이터 사업부 비정형 데이터 자산화 사업 담당자 찾아줘
                        빅데이터 사업부 비정형 데이터 자산화 사업 담당자 찾아줘
                      </button>
                      <button type="button">IRP 대리인 해지 가능해?</button>
                      <button type="button">
                        임대보증금 보증 일부가입 요건 알려줘
                      </button>
                      <button type="button">
                        오늘 주요국 환율 표로 안내해줘
                      </button>
                    </dd>
                  </dl>
                </div>
              </div>
            </>
          }
          callback={() => {
            console.log("callback");
          }}
      />

      <ModalP
        ref={modalMyPromptRef}
        title="나의 프롬프트 관리"
        close
        width="638px"
        content={
          <>
            <div className="boardContainer">
              <div className="boardSearch  ">
                <div className="row flexS mb2 alignS">
                  <div className="tit ">나의 프롬프트</div>
                  <div className="cont flexJ alignS">
                    <div className="flexJ flex mr1 alignS">
                      <textarea
                        ref={textareaRef}
                        //className="resize"
                        style={{
                          minHeight: "40px",
                          maxHeight: "200px",
                          width: "100%",
                          overflowY: "auto",
                        }} // 기본 높이와 최대 높이
                        onInput={handleInput} // 입력 이벤트 발생 시 처리
                      />
                    </div>

                    <button
                      type="button"
                      className="btn bgDarkBlue radius"
                      style={{ width: "80px" }}
                    >
                      등록
                    </button>
                  </div>
                </div>
                <div className="row flexS">
                  <div className="tit">사용여부</div>
                  <div className="cont">
                    <label>
                      <input type="checkbox" />
                      <span>사용</span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span>사용안함</span>
                    </label>

                    <em className="fontSm mt2 textLightGray">
                      자주 사용하는 프롬프트를 등록하시면 빠르게 상담을 시작할
                      수 있습니다.
                    </em>
                  </div>
                </div>
              </div>

              <div className="boardList mt2">
                <table className="boardTabel tc">
                  <colgroup>
                    <col style={{ width: "10%" }} />
                    <col />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "10%" }} />
                  </colgroup>

                  <tbody>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="tl">
                        <button type="button">개인형 IRP 계약해지.pdf</button>
                      </td>

                      <td>2024-07-30</td>
                      <td className="tc">사용안함</td>
                      <td className="tc">
                        <i className="iconEdit" />
                      </td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="tl">
                        <button type="button">개인형 IRP 계약해지.pdf</button>
                      </td>

                      <td>2024-07-30</td>
                      <td className="textPrimary tc">사용</td>
                      <td className="tc">
                        <i className="iconEdit" />
                      </td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="tl">
                        <button type="button">개인형 IRP 계약해지.pdf</button>
                      </td>

                      <td>2024-07-30</td>
                      <td className="textPrimary tc">사용</td>
                      <td className="tc">
                        <i className="iconEdit" />
                      </td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="tl">
                        <button type="button">개인형 IRP 계약해지.pdf</button>
                      </td>

                      <td>2024-07-30</td>
                      <td className="textPrimary tc">사용</td>
                      <td className="tc">
                        <i className="iconEdit" />
                      </td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                    <tr>
                      <td className="textBlack tc">1</td>
                      <td className="tl">
                        <button type="button">개인형 IRP 계약해지.pdf</button>
                      </td>

                      <td>2024-07-30</td>
                      <td className="textPrimary tc">사용</td>
                      <td className="tc">
                        <i className="iconEdit" />
                      </td>

                      <td className="tc">
                        <i className="iconDel" />
                      </td>
                    </tr>
                  </tbody>
                </table>
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
        ref={modalMainAiRef}
        title="대표 AI 선택"
        close
        width="374px"
        content={
          <>
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
          </>
        }
        btnText01="저장"
        btnText02="취소"
        callback={() => {
          console.log("callback");
        }}
      />

      <ModalP
          ref={modalSwiperRef}
          titleLine="환전주머니 환율 우대율 변경 안내환전주머니 환율
          우대율 변경 안내환전주머니 환율 우대율 변경 안내환전주머니 환율 우대율 변경 안내환전주머니 환율 우대율
          변경 안내환전주머니 환율 우대율 변경 안내"
          close
          width="448px"
          content={
            <>
              <div className="detailViewContainer">

                <div className="info">
                <p>우리은행 ChatGPT, AI 지식상담입니다.<br/>
                환전주머니 환율 우대율이 변경될 예정입니다.</p><br/>

                  <p>변경예정일 : 2022년 8월 30일 00시~02시<br/>
                변경 적용일은 사정에 따라 변경될 수 있습니다.</p>
                </div>

                <div className="more">
                  <button type="button">환전주머니 환율 우대율 알려줘</button>
                  <button type="button">IRP 대리인 해지 가능해?</button>
                </div>
              </div>
            </>
          }

          callback={() => {
            console.log("callback");
          }}
      />


    </>
  );
};

export default ChattingP;
