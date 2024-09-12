import { forwardRef, ReactElement, useImperativeHandle, useState } from 'react';
import "../../assets/style/modal.scss";



const ModalP = ({ header, title, content, callback ,close ,btnText01 ,btnText02,info }, ref):ReactElement => {
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
                      <div className="modalWrap">

                          {title && close && (
                              <div className="top ">
                                  <strong>{title}</strong>
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


                          { close && !title && (
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
