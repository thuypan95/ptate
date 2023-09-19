import { useEffect, useState } from "react";
import "./App.css";
import moment from "moment";
import "react-circular-progressbar/dist/styles.css";

import ate from "./images/ate.png";
import small from "./images/small.jpg";
import {listDN} from "./danhngon"

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [time, setTime] = useState(Date.now());
  const [index, setIndex] = useState<number>(Math.floor(Math.random() * 40) + 1)
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var seconds = end.diff(start, "seconds");

  const total = moment.duration(current.diff(start1)).asDays();
  useEffect(() => {
    const interval = setInterval(() => {
     
      const rndInt = Math.floor(Math.random() * 92) + 1;
      setIndex(rndInt)

    }, 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const list = [
    { type: "years", value: years },
    { type: "months", value: months },
    { type: "days", value: days },
    { type: "hours", value: hours },
    { type: "minutes", value: minutes },
    { type: "seconds", value: '00' },
  ];
  return (
    <div>
      
      <div className="App">
      <div className="small">
          <img src={small} alt="small" width={150} />
        </div>
        
        <div className="anniversary">
          <h3>{total}</h3>
          <p>Days</p>
        </div>
        <div className="">
          {/* <img src={big} alt="big" width={100} />
          <img src={chicken} alt="big" width={100} /> */}
          <blockquote>"{listDN[index].d}"</blockquote>
          <blockquote style={{fontFamily:'sans-serif', fontSize:'13px', fontStyle:'italic'}}>{listDN[index].vn}</blockquote>
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
