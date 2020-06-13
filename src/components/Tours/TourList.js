import React, { useState, useEffect } from "react";

import styles from "../../css/items.module.css";

import Tour from "./Tour";
import Title from "../utils/Title";

const TourList = ({ allTours }) => {
  // state
  const [tours, setTours] = useState([]);
  const [sortedTours, setSortedTours] = useState([]);

  useEffect(() => {
    setTours(allTours);
    setSortedTours(allTours);
  });

  return (
    <section className={styles.tours}>
      <Title title="all" subtitle="tours" />
      <div className={styles.center}>
        {sortedTours.map((tour) => (
          <Tour key={tour.contentful_id} tour={tour} />
        ))}
      </div>
    </section>
  );
};

export default TourList;
