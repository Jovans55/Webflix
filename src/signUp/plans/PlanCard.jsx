import { useEffect, useState } from "react";

function PlanCard({ type, price, howLong, benefits }) {
  const [timeFrame, setTimeFrame] = useState("monthly");
  const [duration, setDuration] = useState(howLong);
  const [total, setTotal] = useState(howLong * price);

  useEffect(() => {
    setTotal(Math.round(duration * price * (timeFrame === "monthly" ? 1 : 12)));
  }, [duration, price, timeFrame]);

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleTimeFrameChange = (e) => {
    setTimeFrame(e.target.value);
    setDuration(1)
  };

  return (
    <div>
      <h1>{type}</h1>
      <h1>${price} /mo</h1>
      <p>In what time frame can we collect payments?</p>
      {timeFrame == "monthly" ? (
          <input
            type="number"
            min="1"
            max="11"
            style={{ width: "50px" }}
            value={duration}
            onChange={handleDurationChange}
          />
      ) : (
        <input
            type="number"
            min="1"
            max="99"
            style={{ width: "50px" }}
            value={duration}
            onChange={handleDurationChange}
          />
      )}
      <select name="timeFrame" value={timeFrame} onChange={handleTimeFrameChange}>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <p>Total Pre Pay Period: ${total}.00</p>
      <p>{benefits}</p>
    </div>
  );
}

export default PlanCard;
