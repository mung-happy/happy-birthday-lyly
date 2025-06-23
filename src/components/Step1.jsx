import { useState } from "react";

const Step1 = ({ click }) => {
  const [showButton, setShowButton] = useState(false);
  useState(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000); // 5 seconds delay
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="center-box">
      <div className="control-box">
        <video
          width={200}
          height={200}
          src="hello.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div>
          {showButton == false ? (
            <h1>Đang tải vui lòng chờ...</h1>
          ) : (
            <button onClick={click} className="start-button">
              Bắt đầu
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step1;
