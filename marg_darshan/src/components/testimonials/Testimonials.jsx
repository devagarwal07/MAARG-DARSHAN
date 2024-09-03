import React from 'react'
import Image from 'next/image'
import styles from './testimonial.module.css'

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>OUR TESTIMONIALS</p>
      <div className={styles.part}>
        <div className={styles.img}>
          <Image src='/testimonial.png' alt='testimonial' width={680} height={450}/>
        </div>
        <div className={styles.test}>
          hawgbdhj
        </div>
      </div>
    </div>
  )
}

export default Testimonials
