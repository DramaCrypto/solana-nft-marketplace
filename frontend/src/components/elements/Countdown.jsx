import { useEffect, useState } from "react";

const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInAHour = 60 * msInMinute;
const msInADay = 24 * msInAHour;

const getPartsofTimeDuration = (duration) => {
  const days = Math.floor(duration / msInADay);
  const hours = Math.floor((duration % msInADay) / msInAHour);
  const minutes = Math.floor((duration % msInAHour) / msInMinute);
  const seconds = Math.floor((duration % msInMinute) / msInSecond);

  return { days, hours, minutes, seconds };
};

const Countdown = (endDateTime) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timeout = setTimeout(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  const now = Date.now(); // Number of milliseconds from begining of time

  const future = new Date(endDateTime.endDateTime); // The day we leave for Japan

  const timeDif = future.getTime() - now;
  const timeParts = getPartsofTimeDuration(timeDif);

  // const countDownTime = `${timeParts.days} Days ${timeParts.hours} Hours and ${timeParts.minutes} minutes and ${timeParts.seconds} seconds`;
  return (
    <>
      {/* <div className="item days">
                <span className="number">{timeParts.days}</span>
                <span className="text">days</span>
            </div>
            <div className="item hours">
                <span className="number">{timeParts.hours}</span>
                <span className="text">hours</span>
            </div>
            <div className="item minutes">
                <span className="number"> {timeParts.minutes}</span>
                <span className="text">minutes</span>
            </div>
            <div className="item seconds">
                <span className="number">   {timeParts.seconds}</span>
                <span className="text">seconds</span>
            </div> */}

      <span className="js-countdown">
        <div aria-hidden="true" className="countdown__timer">
          <span className="countdown__item">
            <span className="countdown__value countdown__value--0 js-countdown__value--0">
              {timeParts.days}
            </span>
            <span className="countdown__label">d</span>
          </span>

          <span className="countdown__item">
            <span className="countdown__value countdown__value--1 js-countdown__value--1">
              {timeParts.hours}
            </span>
            <span className="countdown__label">h</span>
          </span>
          <span className="countdown__item">
            <span className="countdown__value countdown__value--2 js-countdown__value--2">
              {timeParts.minutes}
            </span>
            <span className="countdown__label">m</span>
          </span>
          <span className="countdown__item">
            <span className="countdown__value countdown__value--3 js-countdown__value--3">
              {timeParts.seconds}
            </span>
            <span className="countdown__label">s</span>
          </span>
        </div>
      </span>
    </>
  );
};

export default Countdown;
