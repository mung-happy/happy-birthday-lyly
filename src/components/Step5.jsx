import confetti from "canvas-confetti";
import React, { useEffect, useState } from "react";

export const Step5 = ({ handleButton }) => {
  const [showButton, setShowButton] = useState(false);
  const [imgCake, setImgCake] = useState("cake-1.png");

  useEffect(() => {
    const time = setTimeout(() => {
      setShowButton(true);
    }, 4000);
    return () => clearTimeout(time);
  }, []);

  const handleButtonClick = () => {
    setImgCake("cake-2.png");
    setShowButton(false);
    confetti({
      particleCount: 500,
      angle: 60,
      spread: 300,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 500,
      angle: 120,
      spread: 300,
      origin: { x: 1 },
    });
    handleButton();
  };
  return (
    <div className="container">
      <div className="decoration-top">
        <div className="decoration-top-image animate__animated animate__fadeIn">
          <img className="flag-left" src="flag-decor-left.png" alt="" />
          <img
            className="flag-center"
            src={"png-clipart-flag.png"}
            alt="Decoration Top"
          />
          <img className="flag-right" src="flag-decor-right.png" alt="" />
        </div>
      </div>
      <div className="decoration-bottom">
        <div className="decoration-bottom-image-left animate__animated animate__fadeInLeft">
          <img
            className="decoration-bottom-image-left-balloon"
            src="gift-balloon.png"
            alt=""
          />
          <img
            className="decoration-bottom-image-left-gift"
            src="gift-box-left.png"
            alt=""
          />
        </div>
        <div className="decoration-bottom-image-center animate__animated animate__backInUp">
          <img src="decor-bottom.png" alt="" />
        </div>
        <div className="decoration-bottom-image-right animate__animated animate__fadeInRight">
          <img src="box+balloon.png" alt="" />
        </div>
      </div>
      <div>
        <div className="happy-birthday">
          <img
            className="happy-birthday-imgs animate__animated animate__fadeInUpBig animate__slow"
            src="happy (Logo).png"
            alt=""
          />
          <img
            className="cake animate__animated animate__delay-2s animate__fadeInUp"
            src={imgCake}
            alt=""
          />
          <div className="button-promise">
            {showButton && (
              <button onClick={handleButtonClick} className="glossy-button">
                Hãy ước rồi thổi nến
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
