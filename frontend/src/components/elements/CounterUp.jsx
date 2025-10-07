import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
export default function CounterUp({ count, time }) {
  return (
    <>
      <CountUp end={count} duration={time}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span className="" ref={countUpRef}>
              count
            </span>
          </VisibilitySensor>
        )}
      </CountUp>
    </>
  );
}
