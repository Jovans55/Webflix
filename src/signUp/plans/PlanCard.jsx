import { useEffect, useState } from "react";

function PlanCard({ type, color, price, howLong, benefits, setPlan }) {
  const [timeFrame, setTimeFrame] = useState("monthly");
  const [duration, setDuration] = useState(howLong);
  const [total, setTotal] = useState(howLong * price);

  useEffect(() => {
    setTotal(Math.round(duration * price * (timeFrame === "monthly" ? 1 : 12)));
  }, [duration, price, timeFrame]);

  const handleDurationChange = (e) => {
    if(e.target.value > 11 && timeFrame == "monthly"){
        setTimeFrame("yearly")
        setDuration(1)
    } else {
        setDuration(e.target.value)
    }
  };

  const handleTimeFrameChange = (e) => {
    setTimeFrame(e.target.value);
    setDuration(1)
  };

  return (
    <div className="planCard">
      <h1 style={{backgroundColor: `${color}`, margin: "0px", padding: "20px 7px"}}>{type}</h1>
      <h1 style={{fontSize: "25px"}}>${price} /mo</h1>
      <div style={{border: "5px dotted black", padding: "25px 5px"}}>
        <p>In what time frame can we collect payments?</p>
        {timeFrame == "monthly" ? (
            <input
                type="number"
                className="timeFrameInput"
                min="1"
                max="11"
                style={{ width: "30px" }}
                value={duration}
                onChange={handleDurationChange}
            />
        ) : (
            <input
                type="number"
                className="timeFrameInput"
                min="1"
                max="99"
                style={{ width: "30px"}}
                value={duration}
                onChange={handleDurationChange}
            />
        )}
        <select name="timeFrame" value={timeFrame} onChange={handleTimeFrameChange} 
        style={{
            marginLeft: "3px",
            width: "80px",
            padding: "1px"
        }}>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
        </select>
      </div>
      {duration == 10 && timeFrame == 'yearly' ? (
        <>
            <p style={{marginTop: "5px"}}>Discount: ${total}.00 - $2000.00</p>
            <p style={{marginTop: "0px"}}>NEW Total Pre Pay Period: ${total - 2000}.00</p>
        </>
      ) : (
        <p style={{marginTop: "30px"}}>Total Pre Pay Period: ${total}.00</p>
      )}
      <p>What comes with?</p>
      <p style={{margin: "0px"}}>{benefits}</p>
      <button
      onClick={() => setPlan(type)}
      style={{marginTop: "10px", 
      backgroundColor: "#399afb", 
      color: "white",
      border: "none",
      padding: "10px 15px",}}>
        Choose
        </button>
    </div>
  );
}

export default PlanCard;
