import React, { useEffect, useRef } from "react";
import HeaderP from "./HeaderP";
import ReportMenuP from "./ReportMenuP";
import ReportContentP from "./ReportContentP";
import ReportPreviewP from "./ReportPreviewP";
import "../../assets/style/style.scss";
import $ from "jquery";
import "nanoscroller";
import "nanoscroller/bin/css/nanoscroller.css";

const Report = () => {
  // 각 컴포넌트에 대한 ref 생성
  const menuRef = useRef(null);
  const contentRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    // 각 컴포넌트의 nanoScroller 초기화
    if (menuRef.current) {
      $(menuRef.current).nanoScroller();
    }
    if (contentRef.current) {
      $(contentRef.current).nanoScroller();
    }
    if (previewRef.current) {
      $(previewRef.current).nanoScroller();
    }

    // 컴포넌트가 언마운트될 때 nanoScroller 정리
    return () => {
      if (menuRef.current) {
        $(menuRef.current).nanoScroller({ destroy: true });
      }
      if (contentRef.current) {
        $(contentRef.current).nanoScroller({ destroy: true });
      }
      if (previewRef.current) {
        $(previewRef.current).nanoScroller({ destroy: true });
      }
    };
  }, []);

  return (
    <>
      <HeaderP />

      <div className="reportContainer">
        <div className="reportWrap">
          <h2 className="reportTitle">
            여신 심사 보고서
            <button type="buton" className="close">
              닫기
            </button>
          </h2>
          <div className="reportLayout">
            <ReportMenuP ref={menuRef} />
            <ReportContentP ref={contentRef} />
            <ReportPreviewP ref={previewRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
