import React, { useState } from "react";

const BirthDay = (props) => {
  const [time, setTime] = useState("");

  var countDownDate = new Date(props.date).getTime();

  setInterval(() => {
    var now = new Date().getTime();
    setTime(countDownDate - now);
  }, 1000);
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);
  return (
    <div>
      <h1>
        {days +
          "Days " +
          hours +
          "Hours " +
          minutes +
          "Minutes " +
          seconds +
          "Seconds "}{" "}
        to Go..
      </h1>
      <h1></h1>
    </div>
  );
};

export default BirthDay;
