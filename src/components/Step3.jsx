import calenderVideo from "../assets/calendar-2025.mp4";

const Step3 = () => {
  return (
    <div className="calendar fade_out">
      <video className="calender-video" autoPlay muted>
        <source src={calenderVideo} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </div>
  );
};

export default Step3;
