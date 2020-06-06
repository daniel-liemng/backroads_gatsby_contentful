import React from "react"

import styles from "../../css/services.module.css"

import services from "../../constants/services"

import Title from "../utils/Title"

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {services.map((item, index) => (
          <article className={styles.service} key={index}>
            <span>{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
