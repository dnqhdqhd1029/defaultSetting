import React, { useEffect, useRef } from "react";
import HeaderP from "./HeaderP";
import { Table } from "antd";
//import type { TableColumnsType, TableProps } from 'antd';
import "../../assets/style/style.scss";


const CurationEditP = () => {
  return (
    <>
      <HeaderP />
      <section className="container">
       <h3 className="title">내가 만든 큐레이션을 편집해 보세요</h3>
        <div className="curationContainer">
          <div className="allChecked">
            <label>
              <input type="checkbox" /> <span>전체선택</span>
            </label>
            <div className="btn">
              <button type="button" className="btn bgWhite">삭제</button>
            </div>
          </div>

          <div className="curationWrap">
            <div className="curationBox checked">
              <div className="head">
                <div className="tit">여신 심사보고서</div>
                <label><input type="checkbox"/><span/></label>
              </div>
              <div className="cont ">
                <div className="txt">
                  <span>큐션 설명 최대4줄
                  큐레이션 설명 큐레이션 설명 최대4줄
                  </span>
                  <select>
                    <option>노출 순서</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
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
                <label><input type="checkbox"/><span/></label>
              </div>
              <div className="cont ">
                <div className="txt">
                  <span>큐레이션 설명 최대4줄 큐레이션 설명
                  최대4줄 큐레이션 설명 최대4줄 큐레이션 설명 최대4줄
                  큐레이션 설명 큐레이션 설명 최대4줄</span>
                  <select>
                    <option>노출 순서</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
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
                <label><input type="checkbox"/><span/></label>
              </div>
              <div className="cont ">
                <div className="txt">
                  <span>큐레이션 설명 최대4줄 큐레이션 설명
                  최대4줄 큐레이션 설명 최대4줄 큐레이션 설명 최대4줄
                  큐레이션 설명 큐레이션 설명 최대4줄</span>
                  <select>
                    <option>노출 순서</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
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
                <label><input type="checkbox"/><span/></label>
              </div>
              <div className="cont ">
                <div className="txt">
                  <span>큐레이션 설명 최대4줄 큐레이션 설명
                  최대4줄 큐레이션 설명 최대4줄 큐레이션 설명 최대4줄
                  큐레이션 설명 큐레이션 설명 최대4줄</span>
                  <select>
                    <option>노출 순서</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
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
        </div>



      </section>
    </>
  );
};

export default CurationEditP;
