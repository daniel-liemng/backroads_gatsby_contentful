import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

import styles from "../../css/day.module.css";

const Day = ({ day, info }) => {
  // state
  const [showInfo, setShowInfo] = useState(false);

  // function
  const toggleInfo = () => {
    setShowInfo((showInfo) => !showInfo);
  };

  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button onClick={toggleInfo} className={styles.btn}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Day;
