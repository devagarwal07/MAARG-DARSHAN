import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
          <div className={styles.quote}>
            <Image src='/quote.png' alt='testimonial' width={40} height={40}/>
          </div>
        </div>
      </div>
      <div className={styles.started}>
        <Link href='/' className={styles.linkstarted}>Lets Get Started</Link>
      </div>
    </div>
  )
}

export default Testimonials
