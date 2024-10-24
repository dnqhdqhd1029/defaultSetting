import React, { ReactElement, useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import "../../assets/style/bottomSheet.scss";


const BottomSheetP = (
  { header, title, section, content, btnText, callback, btnText1, btnText2, secondaryBtnCallback }: Props,
  ref ) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  const handleOk = () => {
    setVisible(false);
    callback?.();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        handleCancel();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);


  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
    },
    close: () => {
      setVisible(false);
    }
  }));

  // @ts-ignore
  return (
    <div>
      {visible ? (
        <div className="bottomSheetContainer">
          <div ref={containerRef} className="wrapper">
            <div className="wrap">
              <header>
                {header || <h3>{title}</h3>}
                <button className="iconClose" onClick={handleCancel}/>
              </header>

              {/*<section className={`${style.scroll} ${content ? style.none : style.scroll}`}>*/}
              <section className={content ? "none" : "scroll"}>
                <div>{section}</div>
                <div>{content}</div>
              </section>

              <div className="btnWrap">
                {btnText && (
                  <button className="btn bg-primary pull" onClick={handleOk}>
                    {btnText}
                  </button>
                )}
                {btnText1 && btnText2 && (
                  <>
                    <button className="btn bg-secondary" onClick={handleCancel}>
                      {btnText1}
                    </button>
                    <button className="btn bg-secondary" onClick={handleOk}>
                      {btnText2}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default forwardRef(BottomSheetP);
