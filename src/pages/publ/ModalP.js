import { forwardRef, ReactElement, useImperativeHandle, useState } from 'react';
import "../../assets/style/modal.scss";



const ModalP = ({ btnSetting , width,header, title,titleLine, content, callback ,close ,btnText01 ,btnText02,info }, ref) => {
    const [visible, setVisible] = useState(false);
    const handleOk = () => {
        setVisible(false);
        callback?.();
    };

    const handleCancel = () => {
        setVisible(false);
    };

    useImperativeHandle(ref, () => ({
        show: () => {
            setVisible(true);
        },
        close: () => {
            handleCancel();
        }
    }));

    return (
        <>
            {visible ? (
                 <div className="modalContainer">
                      <div className="modalWrap" style={{ width: `${width}` }}>

                          {title && close && (
                              <div className="top ">
                                  <strong>{title}

                                      {btnSetting && (
                                          <button type="button" className="btnSetting" />
                                      )}
                                  </strong>

                                  <button
                                      type="button"
                                      className="close"
                                      onClick={handleCancel}
                                  />
                              </div>
                          )}
                          {titleLine && close && (
                              <div className="top ">
                                  <strong className="txt">{titleLine}

                                      {btnSetting && (
                                          <button type="button" className="btnSetting" />
                                      )}
                                  </strong>

                                  <button
                                      type="button"
                                      className="close"
                                      onClick={handleCancel}
                                  />
                              </div>
                          )}

                          {title && !close && (
                              <div className="top">
                                  <strong>{title}</strong>
                              </div>
                          )}


                          { close && !title  && !titleLine &&  (
                              <div className="top borderNone">
                                  <strong />
                                  <button
                                      type="button"
                                      className="close"
                                      onClick={handleCancel}
                                  />
                              </div>
                          )}

                        <div className="content">
                            {content}
                        </div>

                      {btnText01 && !btnText02 &&
                        <div className="bottom">
                            {info &&
                                <div className="info">
                                     {info}
                                </div>
                            }
                                <div className="btnWrap">
                                    <button
                                        type="button"
                                        className="btn bgDarkBlue"
                                        onClick={handleOk}
                                    >
                                        {btnText01}
                                    </button>
                                </div>
                        </div>
                       }

                      {btnText01 && btnText02 &&
                          <div className="bottom flexE">
                              {info &&
                                  <div className="info">
                                      {info}
                                  </div>
                              }
                              <div className="btnWrap">
                                  <button
                                      type="button"
                                      className="btn bgLight textGray"
                                      onClick={handleOk}
                                  >
                                      {btnText02}
                                  </button>
                                  <button
                                      type="button"
                                      className="btn bgDarkBlue"
                                      onClick={handleOk}
                                  >
                                      {btnText01}
                                  </button>
                              </div>
                          </div>
                      }

                      </div>
                    </div>
            ) : (
                <div />
            )}
        </>
    );
};

export default forwardRef(ModalP);
