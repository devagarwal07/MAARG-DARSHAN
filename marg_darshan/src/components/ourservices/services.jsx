import React from 'react'
import styles from './service.module.css'

const services = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>OUR SERVICES</p>
      <div className={styles.maincont}>
        <div className={styles.card1}>
          <p className={styles.num}>01.</p>
          <p className={styles.learn}>Learn More</p>
        </div>
        <div className={styles.card2}>
          <p className={styles.num}>02.</p>
          <p className={styles.learn}>Learn More</p>
        </div>
        <div className={styles.card3}>
          <p className={styles.num}>03.</p>
          <p className={styles.learn}>Learn More</p>
        </div>
      </div>
    </div>
  )
}

export default services
