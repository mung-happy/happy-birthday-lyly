import "./App.css";
import "animate.css";
import { useRef, useState } from "react";
import { Step2 } from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import { Step5 } from "./components/Step5";
import happyBirthdaySong from "./assets/happy-birthday-song.mp3";
import Step1 from "./components/Step1";
import Step6 from "./components/Step6";

function App() {
  const [step, setStep] = useState(1);
  const audioRef = useRef(null);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const runTimeline = async () => {
    setStep(2);
    await delay(6000);

    setStep(3);
    await delay(5000);
    setStep(4);

    await delay(3000);
    setStep(5);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleClick = async () => {
    audioRef.current.pause();
    await delay(3000);
    setStep(6);
  };
  return (
    <div className="App">
      {step === 1 && <Step1 click={runTimeline} />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <Step5 handleButton={handleClick} />}
      {step === 6 && <Step6 />}
      <audio ref={audioRef} src={happyBirthdaySong} autoPlay loop></audio>
    </div>
  );
}

export default App;
