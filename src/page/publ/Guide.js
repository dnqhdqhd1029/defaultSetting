import React from 'react';
import styled from 'styled-components';
import icXxl from '../../assets/images/svg/icon-xxl.svg';

const GuideContainer = styled.div`
  .guide-container {
    padding: 10px;
    padding-bottom: 100px;
    height: 100%;

    .scss-guide {
      border: 1px solid #e1e1e1;
      padding: 20px;
      padding: 20px;

      ul {
        margin-top: 20px;
        margin-bottom: 20px;
      }

      li {
        margin-left: 13px;
        list-style: disc;
        margin-bottom: 5px;

        span {
          min-width: 120px;
        }
      }
    }

    div {
      margin-bottom: 30px;


    }

    h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    pre {
      background: #F7F8F9;
      border: 1px solid #e1e1e1;
      margin-bottom: 20px;
      min-height: 80px;
      padding: 10px;
      white-space: pre-line;
      display: flex;
      justify-content: start;
      align-items: center;
      margin-left: 30px;
      margin-right: 30px;

    }

    .ic {
      background-image: url(${icXxl});

    }

    hr {
      border: 2px solid #f1f1f1;
      visibility: visible;
      width: 100%;
      position: relative;
      margin: 50px 0;
    }
  }
`;
const Guide = () => {
  const [clicked, setClicked] = React.useState([false, false, false, false, false]);
  const handleStarClick = (index) => {
    const clickStates = [...clicked];
    for (let i = 1; i < 6; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  const score = clicked.filter(Boolean).length;


  const sendReview = () => {
    const score = clicked.filter(Boolean).length;
    console.log('score', score);
  };

  React.useEffect(() => {
    sendReview();
  }, [clicked]);


  return (

    <GuideContainer>


      <div className="guide-container pxy-10">
        <button className="btn xl bg-danger">[링크]<a className="text-white" target="_blank" href="https://hwik.atlassian.net/wiki/spaces/AIO/pages/2287960068" rel="noreferrer">디자인가이드 바로가기</a></button>
        <button className="btn xl bg-warning">
          [링크]<a target="_blank" href="https://www.figma.com/file/DhhrbdUtd8OPIVOBRVZKAO/%5BINT%5D-phase2_passengerAPP_design?node-id=32%3A2&t=mkRjvGlB78oSltjV-1" rel="noreferrer">피그마
          바로가기</a></button>

        <hr/>
        <h2>css 파일관리</h2>
        <ul className="scss-guide">

          <li><span>style.scss </span> 프로젝트 관련 scss
            <ul>
              <li><span>font.scss</span> 폰트관련</li>
              <li><span>reset.scss</span> 모든태그 기본으로</li>
              <li><span>utilities.scss</span> 프로젝트별 SIZE / COLOR 설정</li>
              <li><span>form.scss</span> input,checkbox ,radio,botton 등 기본설정</li>
              <li><span>common.scss</span> 자주쓰는 css 모음</li>
            </ul>
          </li>
          <li>
            <span>style-phone.scss</span> 반응형일때
          </li>
        </ul>


        <h2 className="mt-3">components 파일관리</h2>
        <div className="scss-guide">
          <ul>
            <li>module.scss 는 components 같은 위치에 둔다</li>
            <li>components - wrappers
              <ul>
                <li>Header.tsx
                  <ul>
                    <li>TopNav.tsx</li>
                    <li>TopNav.module.scss</li>
                    <li>BottomSheet.tsx</li>
                    <li>BottomSheet.module.scss</li>
                  </ul>
                </li>

              </ul>
            </li>
          </ul>

        </div>

        <hr/>


        <h2> font-size</h2>
        <div className="scss-guide">
          xxl: 24px;<br/>
          xl: 18px;<br/>
          lg: 16px;<br/>
          md: 14px; //기본<br/>
          sm: 12px;<br/>
          xs: 10px;<br/>
        </div>


        <h2> 간격</h2>
        <div className="scss-guide">
          기본 8px <br/><br/>

          ml-0 : margin-left :0 <br/>
          ml-1 : margin-left : 8px (기본)<br/>
          ml-2 : margin-left : 16px <br/>
          ml-3 : margin-left : 24px <br/>
          ml-4 : margin-left : 32px <br/>
          ml-5 : margin-left : 40px <br/><br/>

          mt- : margin-top <br/>
          mb- : margin-bottom <br/>
          mr- : margin-right <br/>
          ml- : margin-left <br/><br/>

          pt- : padding-top <br/>
          pb- : padding-bottom <br/>
          pr- : padding-right <br/>
          pl- : padding-left <br/><br/>


          mx- : margin-left, margin-right <br/>
          my- : margin-top , margin-bottom <br/><br/>

          px- : padding-left,padding-right <br/>
          py- : padding-top, padding-bottom <br/>


        </div>

        <h2> height</h2>
        <div className="scss-guide">
          xl: 54px;<br/>
          lg: 48px;<br/>
          md: 40px; //기본<br/>
          sm: 32px;<br/>
          xs: 30px;<br/>
        </div>


        <h2>icon</h2>
        <i className="ic xxl"/>
        <i className="ic xl"/>
        <i className="ic lg"/>
        <i className="ic md"/>
        <i className="ic sm"/>
        <i className="ic xs"/>

        <pre>{'<i className="ic xxl" />\n' +
          '                <i className="ic xl" />  \n' +
          '                <i className="ic lg" />\n' +
          '                <i className="ic md" />\n' +
          '                <i className="ic sm" />\n' +
          '                <i className="ic xs" />' +
          '\n\n' +
          'xxl: 160px;\n' +
          'xl:  48px;\n' +
          'lg: 32px;\n' +
          'md: 24px; //기본\n' +
          'sm: 20px;\n' +
          'xs: 18px;' +
          ''}
                </pre>


        <h2>checkbox</h2>
        <div>
          <label><input type="checkbox"/> <span>off</span></label>
          <label><input type="checkbox" checked/> <span>on</span></label>
          <label><input type="checkbox" disabled/> <span>disabled</span></label>
        </div>


        <pre>
                  {'<label><input type="checkbox" /> <span>off</span></label>\n' +
                    '                    <label><input type="checkbox" checked /> <span>on</span></label>\n' +
                    '                    <label><input type="checkbox" disabled /> <span>disabled</span></label>'}
                </pre>
        <h2>radio</h2>
        <div>

          <label><input name="radio" type="radio"/> <span>off</span></label>
          <label><input name="radio" type="radio" checked/> <span>on</span></label>
          <label><input type="radio" disabled/> <span>disabled</span></label>
        </div>

        <pre>
                    {' <label><input name="radio" type="radio" /> <span>off</span></label>\n' +
                      '                    <label><input name="radio" type="radio" checked /> <span>on</span></label>\n' +
                      '                    <label><input type="radio" disabled /> <span>disabled</span></label>'}
                </pre>

        <h2>toggle-switch</h2>
        <div>
          <label className="toggle-switch">
            <input role="switch" type="checkbox"/>
            <span>알람</span>
          </label>

          <label className="toggle-switch">
            <input role="switch" type="checkbox" disabled/>
            <span>알람 (비활성화)</span>
          </label>
        </div>

        <pre>
                    {'<label className="toggle-switch">\n' +
                      '                        <input role="switch" type="checkbox" />\n' +
                      '                        <span>알람</span>\n' +
                      '                    </label>\n' +
                      '\n' +
                      '                    <label className="toggle-swich">\n' +
                      '                        <input role="switch" type="checkbox" disabled />\n' +
                      '                        <span>알람 (비활성화)</span>\n' +
                      '                    </label>'}
                </pre>

        <h2>grade-content</h2>
        <div>

          <div className="grade-content">
            {[5, 4, 3, 2, 1].map((r) => (
              <button
                key={r}
                onClick={() => handleStarClick(r)}
                className={clicked[r] ? 'on' : ''}
              >
                {r}
              </button>
            ))}


          </div>
        </div>

        <pre>
                    {'const [clicked, setClicked] = React.useState([false, false, false, false, false]);\n' +
                      '    const handleStarClick = index => {\n' +
                      '        let clickStates = [...clicked];\n' +
                      '        for (let i = 1; i < 6; i++) {\n' +
                      '            clickStates[i] = i <= index ? true : false;\n' +
                      '        }\n' +
                      '        setClicked(clickStates);\n' +
                      '    };\n' +
                      '    let score = clicked.filter(Boolean).length;\n' +
                      '\n' +
                      '\n' +
                      '\n' +
                      '    const sendReview = () => {\n' +
                      '        let score = clicked.filter(Boolean).length;\n' +
                      '        console.log("score",score)\n' +
                      '    };\n' +
                      '\n' +
                      '    React.useEffect(() => {\n' +
                      '        sendReview();\n' +
                      '    }, [clicked]); '}
                </pre>
        <pre>
                {'<div className="grade-content">\n' +
                  '                        {[5,4,3,2,1].map((r) => (\n' +
                  '                            <button\n' +
                  '                                key={r}\n' +
                  '                                onClick={() => handleStarClick(r)}\n' +
                  '                                className={clicked[r] && \'on\'}\n' +
                  '                            >\n' +
                  '                                {r}\n' +
                  '                            </button>\n' +
                  '                        ))}\n' +
                  '\n' +
                  '\n' +
                  '                    </div>'}
                </pre>
        <h2>type="text"</h2>
        <div>
          <input type="text" placeholder="이름을 입력하세요"/>
        </div>
        <pre>
                    {'<input type="text" placeholder="이름을 입력하세요" />'}
                </pre>
        <div>
          <input type="password" className="focus" placeholder="비밀번호를 입력하세요"/>
        </div>
        <pre>
                    {'<input type="password" className="focus" placeholder="비밀번호를 입력하세요" />'}
                </pre>
        <div>
          <input type="password" className="error" placeholder="비밀번호를 입력하세요"/>
          <small className="text-danger">error message</small>
        </div>
        <pre>{'<input type="password" className="error" placeholder="비밀번호를 입력하세요" />\n' +
          '                    <small className="text-danger">error message</small>'}</pre>
        <div>
          <input type="password" placeholder="비밀번호를 입력하세요" disabled/>
        </div>
        <pre>
                    {'<input type="password" placeholder="비밀번호를 입력하세요" disabled />'}
                </pre>
        <div>
          <input type="tel" className="inline" placeholder="010"/> &nbsp;
          <input type="tel" className="inline" placeholder="010"/> &nbsp;
          <input type="tel" className="inline" placeholder="010"/>
        </div>
        <pre>
                    {'<input type="tel" className="inline" placeholder="010" />\n' +
                      '                    <input type="tel" className="inline" placeholder="010" />\n' +
                      '                    <input type="tel" className="inline" placeholder="010" />'}
                </pre>


        <h2>flex-layout</h2>

        <div className="flex-j">
          <div className=""><input type="text" placeholder="내용을 입력하세요"/></div>
          <div>
            <button className="btn md bg-primary ">등록</button>
          </div>
        </div>

        <div className="flex-s">
          <div><input type="text" placeholder="내용을 입력하세요"/></div>
          <div>
            <button className="btn  bg-primary ">등록</button>
          </div>
        </div>
        <div className="flex-c">
          <div><input type="text" placeholder="내용을 입력하세요"/></div>
          <div>
            <button className="btn  bg-primary ">등록</button>
          </div>
        </div>
        <div className="flex-e">
          <div><input type="text" placeholder="내용을 입력하세요"/></div>
          <div>
            <button className="btn  bg-primary ">등록</button>
          </div>
        </div>
        <div className="flex-j">
          <div className="flex"><input type="text" placeholder="내용을 입력하세요"/></div>
          <div>
            <button className="btn  bg-primary ">등록</button>
          </div>
        </div>

        <pre>
                    {'<div className="flex-j">\n' +
                      '                    <div><input type="text" placeholder="내용을 입력하세요" /> </div>\n' +
                      '                    <div><button className="btn bg-primary ">등록</button></div>\n' +
                      '                </div>\n' +
                      '\n' +
                      '                <div className="flex-s">\n' +
                      '                    <div><input type="text" placeholder="내용을 입력하세요" /> </div>\n' +
                      '                    <div><button className="btn bg-primary ">등록</button></div>\n' +
                      '                </div>\n' +
                      '                <div className="flex-c">\n' +
                      '                    <div><input type="text" placeholder="내용을 입력하세요" /> </div>\n' +
                      '                    <div><button className="btn bg-primary ">등록</button></div>\n' +
                      '                </div>\n' +
                      '                <div className="flex-e">\n' +
                      '                    <div><input type="text" placeholder="내용을 입력하세요" /> </div>\n' +
                      '                    <div><button className="btn bg-primary ">등록</button></div>\n' +
                      '                </div>\n' +
                      '                <div className="flex-j">\n' +
                      '                    <div className="flex"><input type="text" placeholder="내용을 입력하세요" /> </div>\n' +
                      '                    <div><button className="btn bg-primary ">등록</button></div>\n' +
                      '                </div>'}
                </pre>


        <h2>textarea</h2>
        <div>
          <textarea placeholder="내용을 입력해 주세요"></textarea>
        </div>

        <pre>
                    {'<textarea placeholder="내용을 입력해 주세요"></textarea>'}
                </pre>

        <h2>.select-content select</h2>
        <div className="select-content ">
          <select>
            <option>선택하세요</option>
            <option>선택하세요</option>
            <option>선택하세요</option>
            <option>선택하세요</option>
          </select>
        </div>
        <h2>pull</h2>
        <div className="select-content pull">
          <select>
            <option>선택하세요</option>
            <option>선택하세요</option>
            <option>선택하세요</option>
            <option>선택하세요</option>
          </select>
        </div>

        <pre>
                    {'<div className="select-content ">\n' +
                      '                    <select>\n' +
                      '                        <option>선택하세요</option>\n' +
                      '                        <option>선택하세요</option>\n' +
                      '                        <option>선택하세요</option>\n' +
                      '                        <option>선택하세요</option>\n' +
                      '                    </select>\n' +
                      '                </div>\n' +
                      '\n' +
                      '                <div className="select-content pull">\n' +
                      '                    <select>\n' +
                      '                        <option>선택하세요</option>\n' +
                      '                        <option>선택하세요</option>\n' +
                      '                        <option>선택하세요</option>\n' +
                      '                        <option>선택하세요</option>\n' +
                      '                    </select>\n' +
                      '                </div>'}
                </pre>

        <h2>color</h2>
        <div>
          <button className="btn xl bg-primary "> primary</button>
          <button className="btn lg bg-success "> success</button>
          <button className="btn md bg-warning"> warning</button>
          <button className="btn sm bg-danger"> danger</button>
          <button className="btn xs bg-dark"> dark</button>
          <button className="btn xs bg-info"> info</button>
        </div>
        <pre>{'<button className="btn xl bg-primary "> primary</button>\n' +
          '                    <button className="btn lg bg-success "> success</button>\n' +
          '                    <button className="btn md bg-warning"> warning</button>\n' +
          '                    <button className="btn sm bg-danger"> danger</button>\n' +
          '                    <button className="btn xs bg-dark"> dark</button>\n' +
          '                    <button className="btn xs bg-info"> info</button>'}</pre>

        <div>
          <span className="text-primary "> primary</span> &nbsp;
          <span className="text-success "> success</span> &nbsp;
          <span className="text-warning"> warning</span> &nbsp;
          <span className="text-danger"> danger</span> &nbsp;
          <span className="text-dark"> dark</span> &nbsp;
          <span className="text-info"> info</span> &nbsp;
        </div>

        <pre>
                    {'<span className="text-primary "> primary</span>\n' +
                      '                    <span className="text-success "> success</span>\n' +
                      '                    <span className="text-warning"> warning</span>\n' +
                      '                    <span className="text-danger"> danger</span>\n' +
                      '                    <span className="text-dark"> dark</span>\n' +
                      '                    <span className="text-info"> info</span>'}
                </pre>


        <h2>button</h2>
        <div>
          <button className="btn xl bg-primary "> btn xl</button>
          <button className="btn lg bg-success "> btn lg</button>
          <button className="btn md bg-warning"> btn md</button>
          <button className="btn sm bg-danger">btn sm</button>
          <button className="btn xs bg-dark"> btn sm</button>
        </div>
        <pre>{'<button className="btn xl bg-primary "> btn xl</button>\n' +
          '                    <button className="btn lg bg-success "> btn lg</button>\n' +
          '                    <button className="btn md bg-warning"> btn md</button>\n' +
          '                    <button className="btn sm bg-danger"> btn sm</button>\n' +
          '                    <button className="btn xs bg-dark"> btn sm</button>'}</pre>

        <h2>radius</h2>

        <div>
          <button className="btn xl bg-primary radius "> btn xl</button>
          <button className="btn lg bg-success radius "> btn lg</button>
          <button className="btn md bg-warning radius-half"> btn md</button>
          <button className="btn sm bg-danger radius-half"><i className="ic sm "/> btn sm</button>
          <button className="btn xs bg-dark radius-circle"> btn sm</button>
        </div>

        <pre>{'' +
          '<button className="btn xl bg-primary radius "> btn xl</button>\n' +
          '          <button className="btn lg bg-success radius "> btn lg</button>\n' +
          '          <button className="btn md bg-warning radius-half"> btn md</button>\n' +
          '          <button className="btn sm bg-danger radius-half"><i className="ic sm "/> btn sm</button>\n' +
          '          <button className="btn xs bg-dark radius-circle"> btn sm</button>'}</pre>

        <div className="scss-guide">
          radius: 8px; //기본 <br/>
          radius-half: 30px;<br/>
          radius-circle: 50%; (정원)<br/>
        </div>

        <h2>pull (100%)</h2>
        <div>
          <button className="btn xl bg-primary pull "> btn xl</button>
        </div>

        <pre>{'<button className="btn xl bg-primary pull "> btn xl</button>'}</pre>
        <div>
          <button className="btn lg bg-success pull radius-half "> lg</button>
        </div>
        <pre>{'<button className="btn lg bg-success pull radius-half "> lg</button>'}</pre>

        <div>
          <button className="btn md bg-warning pull radius">btn md</button>
        </div>
        <pre>{'<button className="btn md bg-warning pull radius">btn md</button>'}</pre>
        <div>
          <button className="btn sm bg-danger pull"> sm</button>
        </div>
        <pre>{'<button className="btn sm bg-danger pull"> btn sm</button>'}</pre>
        <div>
          <button className="btn xs bg-dark pull"> btn sm</button>
        </div>

        <h2>fixed (100% 하단 고정)</h2>
        <pre>
                    {'<button className="btn xs bg-dark fixed"> btn sm</button>'}
                </pre>

        <div className="btn fixed">
          <button className="btn xl bg-primary pull "> btn xl</button>
        </div>


      </div>

    </GuideContainer>

  );
};

export default Guide;
