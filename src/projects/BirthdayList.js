import React, { useState } from "react";
import { birthdays as bdays } from "../data";
const BirthdayList = () => {
  const [birthdays, setBirthdays] = useState(bdays);
  const handleClearClick = () => {
    setBirthdays([]);
  };
  return (
    <section className="birthdayList">
      <strong
        style={{ textAlign: "left", display: "block", fontSize: "1.5rem" }}
      >
        {birthdays.length} birthdays today
      </strong>
      {birthdays.map((birthday) => (
        <Birthday key={birthday.id} {...birthday} />
      ))}
      <button type="btn" className="clear-button" onClick={handleClearClick}>
        clear all
      </button>
    </section>
  );
};

const Birthday = ({ id, name, age, image }) => {
  return (
    <div className="people">
      <div className="roundImage">
        <img src={image} />
      </div>
      <div className="name">
        <h3>{name}</h3>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default BirthdayList;
