import React, { useState } from "react";
import BirthDay from "./BirthDay";

const UI = function () {
  var year;
  var month;
  var date;
  const [input, setInput] = useState("");

  const onChange = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
    console.log(typeof event.target.value);
    year = event.target.value.slice(0, 4);
    console.log(year);
  };

  const onSubmit = () => {};

  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  parseInt("10");

  return (
    <div>
      <h1>Enter the Birthday Date : </h1>
      <input
        value={input}
        type="datetime-local"
        onChange={onChange}
        placeholder="Enter text"
      ></input>
      <button onSubmit={onSubmit}>Enter</button>
      <BirthDay date={"March 28, " + year + " 00:00:00"} />
    </div>
  );
};

export default UI;
