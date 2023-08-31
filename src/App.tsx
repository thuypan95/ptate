import { useEffect, useState } from "react";
import "./App.css";
import moment from "moment";
import "react-circular-progressbar/dist/styles.css";
import chicken from "./images/chicken.jpg";
import big from "./images/big.jpg";
import ate from "./images/ate.png";
import small from "./images/small.jpg";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [time, setTime] = useState(Date.now());
  const start1 = moment("2023-02-14");
  var current = moment().startOf("day");

  var start = moment("2023-02-14 00:00:00");

  var end = moment();

  var years = end.diff(start, "year");
  start.add(years, "years");

  var months = end.diff(start, "months");
  start.add(months, "months");

  var days = end.diff(start, "days");
  start.add(days, "days");

  var hours = end.diff(start, "hours");
  start.add(hours, "hours");

  var minutes = end.diff(start, "minutes");
  start.add(minutes, "minutes");

  var seconds = end.diff(start, "seconds");

  const total = moment.duration(current.diff(start1)).asDays();

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // const percent = (total / 365) * 100;
  const list = [
    { type: "years", value: years },
    { type: "months", value: months },
    { type: "days", value: days },
    { type: "hours", value: hours },
    { type: "minutes", value: minutes },
    { type: "seconds", value: seconds },
  ];
  return (
    <div>
      
      <div className="App">
      <div className="small">
          <img src={small} alt="small" width={200} />
        </div>
        {/* <CircularProgressbarWithChildren styles={{
          path: {
            // Path color
            // stroke: `rgba(62, 152, 199, ${percent / 100})`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            // Customize transition animation
            transition: 'stroke-dashoffset 0.5s ease 0s',
            // Rotate the path
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
              root: {width:200},
               trail:{stroke:"#F4D160"},

        }} value={percent} strokeWidth={4}
        >
          <div className="content">
            <h2>{total}</h2>
            <h2>{total}</h2>
          </div>
         <div className='days'> days</div>
        </CircularProgressbarWithChildren> */}
        <div className="anniversary">
          <h3>{total}</h3>
          <p>Days</p>
        </div>
        <div className="big-chicken">
          <img src={big} alt="big" width={100} />
          <img src={chicken} alt="big" width={100} />
        </div>
        <div style={{width:"100%"}}>
        <div className="wrapper">
          <div className="ate">
          <img src={ate} alt="ate" width={150} />

          </div>
          {list.map((item) => (
            <div className="item">
              <div className="item_value">{item.value}</div>
              <div className="item_type">{item.type}</div>
            </div>
          ))}
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default App;
