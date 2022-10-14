import { useEffect, useState } from "react";

function CounterDown({ inputTime }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(inputTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),


        hours: Math.floor((difference / 1000 / 60 / 60)%24),

        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="text-center">
      {timeLeft.day|| timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <p>
          <span>{timeLeft.day}d</span>
          <span>:</span>
          <span>{timeLeft.hours}h</span>
          <span>:</span>
          <span>{timeLeft.minutes}m</span>
          <span>:</span>
          <span>{timeLeft.seconds}s</span>
        </p>
      ) : (
        <p>Time is up 🔥</p>
      )}
    </div>
  );
}

export default CounterDown;