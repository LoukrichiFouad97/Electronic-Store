import { useState } from "react";
import "./style.scss";

function Counter(props) {
  /**
   * 1 - get the end date of countdown
   * 2 - every 1s
   *    2 - get today's date
   *    3 - get the diffrence between now date & end date       countdown
   *    4 - Time calculation for days, hours, minutes and seconds
   * 5 - display the results
   * 6 - display something when the countdown is finished
   */

  let countDownDate = new Date("Oct 5, 2022 15:37:25").getTime();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [countDownExpired, setCountDownExpired] = useState(false);

  let countDown = setInterval(() => {
    let todaysDate = new Date().getTime();
    let distance = countDownDate - todaysDate;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

    if (distance < 0) {
      clearInterval(countDown);
      setCountDownExpired(true);
    }
  }, 1000);

  return (
    <div className="d-flex count-down">
      {countDownExpired ? (
        <h4>offer expired</h4>
      ) : (
        <>
          <div className="count-item days">{days}</div>
          <span>:</span>
          <div className="count-item hours">{hours}</div>
          <span>:</span>
          <div className="count-item minutes">{minutes}</div>
          <span>:</span>
          <div className="count-item seconds">{seconds}</div>
        </>
      )}
    </div>
  );
}

export default Counter;
